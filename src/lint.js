/* ============================================================
   motion-core · lint.js
   词表静态检查。规则见 DESIGN.md §7。
   ============================================================ */

import { createRegistry } from './registry.js';
import { IMPLS } from './curves.js';
import { validateSpec, PROPS, TARGETS, UNITS, DIRECTIONS, FILLS, STAGGER_FROM, CAMERA_KINDS, RM_STRATEGIES } from './spec.js';

/** 词表里声明过的全部导出目标 */
export const KNOWN_TARGETS = Object.freeze([
  'css', 'css-transition', 'waapi', 'gsap', 'framer', 'swift', 'compose',
  'tailwind', 'film-mo', 'film-rk', 'film-camera', 'json'
]);

/** Phase 0 已实现的导出器 */
export const IMPLEMENTED_TARGETS = Object.freeze([
  'css', 'css-transition', 'waapi', 'gsap', 'framer', 'swift', 'compose',
  'tailwind', 'film-mo', 'film-rk', 'film-camera', 'json'
]);

const PLATFORM_VALUES = new Set(['native', 'approximate', 'unavailable']);

function mk() { return { errors: [], warnings: [], stats: {} }; }
const err = (out, path, message) => out.errors.push({ path, message });
const warn = (out, path, message) => out.warnings.push({ path, message });

/* ---------------- 曲线表 ---------------- */

export function lintCurves(vocab, { strict = false } = {}) {
  const out = mk();
  out.stats = { curves: 0, aliases: 0, families: [] };

  if (!vocab || !Array.isArray(vocab.curves)) {
    err(out, '$', '词表缺少 curves 数组');
    return out;
  }
  if (!Array.isArray(vocab.platforms) || vocab.platforms.length === 0) {
    err(out, '$', '词表缺少 platforms 清单');
  }

  const names = new Set();
  const aliases = new Map();
  const families = new Set();
  const nativeUnimplemented = new Set();

  vocab.curves.forEach((c, i) => {
    const p = `curves[${i}]`;
    if (!c.name || typeof c.name !== 'string') { err(out, `${p}.name`, '必须有名字'); return; }
    out.stats.curves++;
    families.add(c.family);

    if (names.has(c.name)) err(out, `${p}.name`, `主名重复：${c.name}`);
    names.add(c.name);

    if (!c.label?.zh || !c.label?.en) err(out, `${p}.label`, '必须有 zh 与 en 标签');
    if (!c.family) err(out, `${p}.family`, '必须声明 family');
    if (!c.def || typeof c.def !== 'object') {
      err(out, `${p}.def`, '必须有 def 对象');
    } else {
      if (typeof c.def.fn !== 'string') err(out, `${p}.def.fn`, '必须是字符串');
      else if (!IMPLS[c.def.fn]) err(out, `${p}.def.fn`, `未知实现：${c.def.fn}`);
    }

    // 参数化曲线必须有默认值
    if (Array.isArray(c.params)) {
      c.params.forEach((par, j) => {
        if (!par.name) err(out, `${p}.params[${j}].name`, '参数必须有名字');
        if (par.default === undefined) err(out, `${p}.params[${j}].default`, `参数 ${par.name} 缺少默认值`);
        if (par.enum && !par.enum.includes(par.default)) err(out, `${p}.params[${j}].default`, `参数 ${par.name} 默认值不在 enum 内`);
      });
    }

    // 别名冲突
    for (const a of c.aliases || []) {
      out.stats.aliases++;
      if (!a) { err(out, `${p}.aliases`, '别名不能是空字符串'); continue; }
      if (names.has(a)) err(out, `${p}.aliases`, `别名与主名冲突：${a}`);
      if (aliases.has(a) && aliases.get(a) !== c.name) {
        err(out, `${p}.aliases`, `别名被多个曲线占用：${a}（${aliases.get(a)} 与 ${c.name}）`);
      }
      aliases.set(a, c.name);
    }

    // 平台声明
    if (!c.platforms || typeof c.platforms !== 'object') {
      err(out, `${p}.platforms`, '必须声明 platforms');
    } else {
      for (const [target, level] of Object.entries(c.platforms)) {
        if (!KNOWN_TARGETS.includes(target)) {
          err(out, `${p}.platforms.${target}`, `未知导出目标：${target}`);
          continue;
        }
        if (!PLATFORM_VALUES.has(level)) {
          err(out, `${p}.platforms.${target}`, `能力值必须是 native / approximate / unavailable（收到 ${level}）`);
          continue;
        }
        if (level === 'native' && !IMPLEMENTED_TARGETS.includes(target)) {
          nativeUnimplemented.add(target);
        }
      }
      for (const target of KNOWN_TARGETS) {
        if (!(target in c.platforms)) warn(out, `${p}.platforms.${target}`, `未声明该目标的能力`);
      }
    }

    // equiv 里的内部名必须指向存在的曲线（MO.x / E.x / E.byName('x')）
    if (c.equiv && typeof c.equiv === 'object') {
      for (const key of ['mo', 'rk']) {
        const v = c.equiv[key];
        if (typeof v !== 'string') continue;
        const m = v.match(/byName\('([^']+)'\)/);
        const bare = m ? m[1] : v.replace(/^(MO|E)\./, '').replace(/\(.*$/, '').trim();
        if (bare && !names.has(bare) && !aliases.has(bare) && bare !== 'step') {
          warn(out, `${p}.equiv.${key}`, `${v} 指向的名字 ${bare} 未在 curves.v1.json 中定义`);
        }
      }
    }
  });

  for (const target of [...nativeUnimplemented].sort()) {
    warn(out, '$.platforms', `声明 native 但尚未实现导出器：${target}`);
  }

  out.stats.families = [...families].sort();
  return out;
}

/* ---------------- 术语表 ---------------- */

export function lintTerms(termsVocab, registry, { strict = false } = {}, grammarTransitions = new Set()) {
  const out = mk();
  out.stats = { terms: 0, categories: 0, withSpec: 0, withSource: 0, triggers: {} };

  if (!termsVocab || !Array.isArray(termsVocab.terms)) {
    err(out, '$', '术语表缺少 terms 数组');
    return out;
  }
  const cats = new Set((termsVocab.categories || []).map((c) => c.id));
  out.stats.categories = cats.size;
  if (cats.size === 0) err(out, '$.categories', '缺少分类定义');

  const ids = new Set();
  const aliasOwner = new Map();

  termsVocab.terms.forEach((t, i) => {
    const p = `terms[${i}]`;
    if (!t.id) { err(out, `${p}.id`, '术语必须有 id'); return; }
    out.stats.terms++;
    if (ids.has(t.id)) err(out, `${p}.id`, `id 重复：${t.id}`);
    ids.add(t.id);

    if (!t.zh || !t.en) err(out, `${p}.label`, '术语必须有 zh 与 en');
    if (!cats.has(t.cat)) err(out, `${p}.cat`, `分类不存在：${t.cat}`);
    if (!t.vague || !t.say || !t.def) warn(out, `${p}`, '缺少 vague / say / def 之一');

    for (const a of t.alias || []) {
      if (aliasOwner.has(a) && aliasOwner.get(a) !== t.id) {
        err(out, `${p}.alias`, `别名被多个术语占用：${a}`);
      }
      aliasOwner.set(a, t.id);
    }

    // 曲线引用
    if (t.curve && typeof t.curve === 'string') {
      if (!registry.has(t.curve)) err(out, `${p}.curve`, `曲线不存在：${t.curve}`);
    }

    // spec
    if (t.spec) {
      out.stats.withSpec++;
      const res = validateSpec(t.spec, registry);
      for (const e of res.errors) err(out, `${p}.spec.${e.path}`, e.message);
      for (const w of res.warnings) warn(out, `${p}.spec`, w);
    } else if (strict) {
      warn(out, `${p}.spec`, '术语没有 spec');
    }

    // film-grammar 必须有来源，且引用的曲线必须存在
    if (t.cat === 'film-grammar') {
      if (!t.source?.where) err(out, `${p}.source`, 'film-grammar 类术语必须有 source.where');
      else out.stats.withSource++;
      for (const c of t.curves || []) {
        if (!registry.has(c)) err(out, `${p}.curves`, `曲线不存在：${c}`);
      }
      for (const tr of t.transitions || []) {
        if (!grammarTransitions.has(tr)) warn(out, `${p}.transitions`, `转场未在 transitions.js 中找到：${tr}`);
      }
    }

    // trigger 与 film 端能力
    const trigger = t.trigger || 'time';
    out.stats.triggers[trigger] = (out.stats.triggers[trigger] || 0) + 1;
    if (trigger !== 'time' && t.platforms && t.platforms['film-mo'] === 'native') {
      warn(out, `${p}.platforms`, `trigger=${trigger} 的术语不应在 film-mo 声明 native`);
    }

    // 至少一条可用导出（有 spec 却导出不了 = 矛盾；无 spec 是正常的，不报警）
    const plats = t.platforms || {};
    const usable = Object.entries(plats).filter(([, v]) => v === 'native' || v === 'approximate');
    if (t.spec && usable.length === 0) warn(out, `${p}.platforms`, '有 spec 却没有任何可用导出目标');
  });

  return out;
}

/* ---------------- 汇总 ---------------- */

export function lintAll({ curvesVocab, termsVocab, grammarVocab }, { strict = false } = {}) {
  const curves = lintCurves(curvesVocab, { strict });
  let registry = null;
  try {
    registry = createRegistry(curvesVocab);
    if (registry.conflicts.length) {
      for (const c of registry.conflicts) err(curves, `curves:${c.name}`, `${c.reason}${c.detail ? '：' + c.detail : ''}`);
    }
    /* 采样三点，抓「签名不匹配导致返回 NaN」这类静默错误 */
    for (const entry of registry.curves()) {
      for (const probe of [0.25, 0.5, 0.75]) {
        const v = entry.fn(probe);
        if (typeof v !== 'number' || !Number.isFinite(v)) {
          err(curves, `curves:${entry.name}`, `fn(${probe}) 不是有限数：${v}`);
        }
      }
    }
  } catch (e) {
    err(curves, '$.registry', `注册表构建失败：${e.message}`);
  }

  const terms = termsVocab
    ? lintTerms(termsVocab, registry, { strict })
    : (strict ? (() => { const o = mk(); warn(o, '$', '未提供术语表'); return o; })() : mk());

  const grammarList = grammarVocab
    ? (Array.isArray(grammarVocab) ? grammarVocab : (grammarVocab.grammars || []))
    : [];
  const grammar = grammarList.length
    ? lintTerms(
        { categories: termsVocab?.categories || [], terms: grammarList },
        registry,
        { strict },
        new Set(grammarVocab?.transitions?.map((t) => t.id) || [])
      )
    : mk();

  const errors = [...curves.errors, ...terms.errors, ...grammar.errors];
  const warnings = [...curves.warnings, ...terms.warnings, ...grammar.warnings];

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    stats: {
      curves: curves.stats,
      terms: terms.stats,
      grammar: grammar.stats
    }
  };
}
