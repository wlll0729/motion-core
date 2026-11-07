/* 从 motion-lexicon 的数据文件抽取术语，生成 core 的 vocab/terms.v1.json。
 *
 * 运行：node scripts/gen-terms.mjs [--report]
 *
 * 数据源（只读）：
 *   motion-lexicon/assets/data1.js  CATS + TERMS（缓动/时长/入场/出场/变换/状态/滚动/反馈/循环/文字/润色/镜头/原则/性能）
 *   motion-lexicon/assets/data2.js  TERMS（后半）
 *   motion-lexicon/assets/runtime.js  CATS + TERMS（三维与运行时）
 *   motion-lexicon/assets/compound.js CATS + TERMS（组合范式）
 *
 * 输出：vocab/terms.v1.json
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { registry as coreRegistry } from '../src/index.js';
import { PROP_NAME } from '../src/exporters/_values.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LEXICON = join(ROOT, '..', 'motion-lexicon');
const OUT = join(ROOT, 'vocab', 'terms.v1.json');

const report = process.argv.includes('--report');

/* ---------------- 加载数据文件（带 DOM/全局桩） ---------------- */

function makeCtx() {
  const noop = () => {};
  const el = () => ({
    style: { setProperty: noop, cssText: '' },
    dataset: {},
    classList: { add: noop, remove: noop, toggle: noop, contains: () => false },
    setAttribute: noop, getAttribute: () => null, removeAttribute: noop,
    addEventListener: noop, removeEventListener: noop,
    appendChild: noop, remove: noop, querySelector: () => null, querySelectorAll: () => [],
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 0, height: 0 }),
    getContext: () => null, setPointerCapture: noop, releasePointerCapture: noop,
    isConnected: true, closest: () => null, hidden: false
  });
  const ctx = {
    console,
    document: {
      documentElement: { dataset: {}, style: { setProperty: noop }, classList: { add: noop, remove: noop, contains: () => false } },
      body: el(),
      querySelector: () => null,
      querySelectorAll: () => [],
      createElement: el,
      addEventListener: noop,
      readyState: 'complete',
      fonts: { ready: Promise.resolve(), add: noop }
    },
    devicePixelRatio: 1,
    innerWidth: 1440,
    innerHeight: 900,
    matchMedia: () => ({ matches: false, addEventListener: noop, addListener: noop }),
    ResizeObserver: class { observe() {} unobserve() {} disconnect() {} },
    IntersectionObserver: class { observe() {} unobserve() {} disconnect() {} },
    MutationObserver: class { observe() {} disconnect() {} takeRecords() { return []; } },
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: noop,
    setTimeout, clearTimeout, setInterval, clearInterval,
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop },
    navigator: { clipboard: { writeText: () => Promise.resolve() } },
    location: { hash: '', search: '', href: 'http://localhost/' },
    performance: { now: () => 0 }
  };
  ctx.window = ctx;
  ctx.globalThis = ctx;
  ctx.window.MOTION = { KINDS: {}, htmlFor: null, extraCSS: null, scrollHTML: '', listHTML: '', dragHTML: '', morphHTML: '', typeHTML: '', drawHTML: '', perfHTML: '' };
  ctx.window.ENGINE = {
    $: () => null, $$: () => [], esc: (s) => String(s == null ? '' : s),
    tickers: { add: noop, delete: noop, clear: noop },
    isVisible: () => true, onMotion: () => true, motionOn: () => true,
    bind: noop, mount: noop
  };
  ctx.window.I18N = { lang: 'zh', t: (k) => k };
  ctx.window.PAGE_BOOK = {};
  ctx.window.HUD = {};
  ctx.window.EASE = {};
  ctx.window.EASE_LIST = [];
  return ctx;
}

function load(rel) {
  const file = join(LEXICON, rel);
  if (!existsSync(file)) throw new Error(`找不到数据文件：${file}`);
  vm.runInContext(readFileSync(file, 'utf8'), context, { filename: file });
}

const ctx = makeCtx();
const context = vm.createContext(ctx);
load('assets/ease.js');
load('assets/data1.js');
load('assets/data2.js');
load('assets/motion.js');   // 真实 MOTION（提供 KINDS / htmlFor，供 runtime/compound 注册）
load('assets/runtime.js');
load('assets/compound.js');

const CATS = ctx.window.CATS || [];
const TERMS = ctx.window.TERMS || [];
if (CATS.length === 0 || TERMS.length === 0) {
  throw new Error(`数据抽取失败：CATS=${CATS.length} TERMS=${TERMS.length}`);
}

/* ---------------- 归一化 ---------------- */

const EASE_MAP = {
  'cubic-bezier(0.16,1,0.3,1)': 'easeOutExpo',
  'cubic-bezier(0.32,0,0.67,0)': 'easeIn',
  'cubic-bezier(0.33,1,0.68,1)': 'easeOut',
  'cubic-bezier(0.65,0,0.35,1)': 'easeInOut',
  'cubic-bezier(0.34,1.56,0.64,1)': 'easeOutBack',
  'cubic-bezier(0.36,0,0.66,-0.56)': 'easeInBack',
  'cubic-bezier(0.2,0,0,1)': 'emphasized',
  'cubic-bezier(0.4,0,0.2,1)': 'material',
  'cubic-bezier(0,0.55,0.45,1)': 'easeOutCirc',
  'cubic-bezier(0.85,0,0.15,1)': 'quickCut',
  'cubic-bezier(0.25,0.1,0.25,1)': 'appleOut',
  'cubic-bezier(0.75,0,0.25,1)': 'k75',
  'cubic-bezier(0.333,0,0.667,1)': 'easyEase',
  'cubic-bezier(0.33,0,0.2,1)': 'longTail',
  'cubic-bezier(0.2,0.8,0.2,1)': 'appleOut',
  'linear': 'linear',
  'ease': 'appleOut',
  'ease-out': 'easeOut',
  'ease-in': 'easeIn',
  'ease-in-out': 'easeInOut'
};

/* 词典里出现但 core 未单独建名的曲线：映射到最近似的核心曲线，原串记进 _legacyEase */
const EASE_FALLBACK = {
  'cubic-bezier(0.76,0,0.24,1)': 'easeOutExpo',
  'cubic-bezier(0.7,0,0.84,0)': 'easeIn',
  'cubic-bezier(0.5,0,1,1)': 'easeInOut',
  'cubic-bezier(0.3,0.9,0.4,1)': 'easeOutBack'
};

function normEase(s) { return String(s).replace(/\s+/g, ''); }

function lookupEase(raw) {
  if (!raw) return { name: null, legacy: null };
  const key = normEase(raw);
  /* steps(n) → 核心 steps（参数化） */
  if (/^steps\(\d+\)$/.test(key)) return { name: 'steps', legacy: key };
  const direct = EASE_MAP[key];
  if (direct) return { name: direct, legacy: null };
  const fb = EASE_FALLBACK[key];
  return { name: fb || null, legacy: fb ? key : null };
}

const TRIGGER_BY_KIND = {
  scroll: 'scroll', drag: 'drag', type: 'time', draw: 'time', morph: 'time'
};

function triggerOf(term) {
  const d = term.demo || {};
  /* 只有演示本身依赖交互输入时才是非 time；入场/出场/循环都是时间轴动效 */
  if (d.play === 'hover') return 'hover';
  if (d.play === 'press') return 'press';
  if (d.kind === 'scroll') return 'scroll';
  if (d.kind === 'drag') return 'drag';
  return 'time';
}

function curveOf(term) {
  const d = term.demo || {};
  const raw = d.e || (d.a && d.a.e) || (d.b && d.b.e);
  if (!raw) return null;
  return lookupEase(raw).name;
}

function legacyEaseOf(term) {
  const d = term.demo || {};
  const raw = d.e || (d.a && d.a.e) || (d.b && d.b.e);
  if (!raw) return null;
  return lookupEase(raw).legacy;
}

/** 从 spec 与曲线集合派生平台能力声明。
 *  无 spec 的术语（演示是交互/JS 驱动的）一律 unavailable。 */
/** 各平台支持的属性白名单：直接取自各平台的属性表，避免两处漂移 */
const PLATFORM_PROPS = {
  gsap: PROP_NAME.gsap,
  framer: PROP_NAME.framer,
  swift: PROP_NAME.swift,
  compose: PROP_NAME.compose,
  tailwind: PROP_NAME.tailwind
};

function platformsOf(term) {
  const out = {};
  for (const t of coreRegistry.platformNames) out[t] = 'unavailable';
  if (!term.spec) return out;

  const curves = new Set();
  const props = new Set();
  for (const s of term.spec.timeline) { curves.add(s.ease); props.add(s.prop); }
  for (const c of term.spec.camera || []) if (c.ease) curves.add(c.ease);

  const allNativeCss = [...curves].every((n) => {
    const e = coreRegistry.byName(n);
    return e && ['bezier', 'linear', 'steps'].includes(e.def.fn);
  });
  const timeCapable = term.trigger === 'time';
  out.css = allNativeCss ? 'native' : 'approximate';
  out.waapi = allNativeCss ? 'native' : 'approximate';
  out.gsap = allNativeCss ? 'native' : 'approximate';
  out.framer = allNativeCss ? 'native' : 'approximate';
  out.tailwind = allNativeCss ? 'native' : 'approximate';
  out['film-mo'] = timeCapable ? 'native' : 'unavailable';
  out['film-rk'] = timeCapable ? 'native' : 'unavailable';
  out.json = 'native';

  /* 属性不被某平台支持时，该平台不可用 */
  for (const [target, allowed] of Object.entries(PLATFORM_PROPS)) {
    const bad = [...props].filter((p) => !(p in allowed));
    if (bad.length) out[target] = 'unavailable';
  }
  return out;
}

/* --- frames → MotionSpec --- */

const TRANSFORM_FNS = ['translateX', 'translateY', 'translateZ', 'scale', 'scaleX', 'scaleY', 'rotate', 'skewX', 'skewY'];

function parseTransform(str) {
  const out = [];
  if (!str || str === 'none') return out;
  for (const m of String(str).matchAll(/(\w+)\(([^)]*)\)/g)) {
    const fn = m[1];
    if (!TRANSFORM_FNS.includes(fn)) continue;
    const arg = m[2].trim();
    const pm = arg.match(/^(-?[\d.]+)(.*)$/);
    let v = pm ? parseFloat(pm[1]) : 0;
    if (!Number.isFinite(v)) v = 0;
    let unit = pm ? (pm[2] || '') : '';
    if (fn.startsWith('scale')) unit = 'none';
    else if (fn === 'rotate' || fn.startsWith('skew')) unit = 'deg';
    else if (!unit) unit = 'px';
    out.push({ prop: fn, value: v, unit });
  }
  return out;
}

const TRANSFORM_IDENTITY = {
  translateX: 0, translateY: 0, translateZ: 0,
  scale: 1, scaleX: 1, scaleY: 1,
  rotate: 0, skewX: 0, skewY: 0
};

function parseDecls(css) {
  const out = {};
  for (const decl of String(css || '').split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop || !value) continue;
    out[prop] = value;
  }
  return out;
}

const numOrStr = (v) => (/^-?[\d.]+$/.test(String(v).trim()) ? parseFloat(v) : v);

function framesToTimeline(frames, ease, durSec) {
  if (!Array.isArray(frames) || frames.length < 2) return [];
  const first = frames[0], last = frames[frames.length - 1];
  const a = parseDecls(first[1]), b = parseDecls(last[1]);
  const timeline = [];

  /* transform：把两帧的 transform 函数逐项配对 */
  const ta = parseTransform(a.transform), tb = parseTransform(b.transform);
  const keys = new Set([...ta.map((x) => x.prop), ...tb.map((x) => x.prop)]);
  for (const prop of keys) {
    const from = ta.find((x) => x.prop === prop);
    const to = tb.find((x) => x.prop === prop);
    timeline.push({
      id: `t-${prop}`,
      target: 'self',
      prop,
      from: from ? from.value : TRANSFORM_IDENTITY[prop],
      to: to ? to.value : TRANSFORM_IDENTITY[prop],
      unit: (from && from.unit) || (to && to.unit) || 'px',
      start: 0,
      dur: durSec,
      ease
    });
  }

  /* 非 transform 属性 */
  for (const prop of ['opacity', 'filter', 'clip-path', 'box-shadow', 'text-shadow']) {
    if (a[prop] === undefined && b[prop] === undefined) continue;
    timeline.push({
      id: `t-${prop}`,
      target: 'self',
      prop,
      from: numOrStr(a[prop] ?? '0'),
      to: numOrStr(b[prop] ?? '0'),
      unit: 'none',
      start: 0,
      dur: durSec,
      ease
    });
  }
  return timeline;
}

function ms(v, dflt) {
  if (v == null) return dflt;
  const n = parseFloat(v);
  return Number.isFinite(n) ? n / 1000 : dflt;
}

function specOf(term) {
  const d = term.demo || {};
  if (d.kind !== 'frames' && d.kind !== 'two') return null;

  if (d.kind === 'two') {
    const a = d.a, b = d.b;
    if (!a || !b) return null;
    const ta = framesToTimeline(a.frames, lookupEase(a.e).name || 'easeOut', ms(a.d, 0.5));
    const tb = framesToTimeline(b.frames, lookupEase(b.e).name || 'easeIn', ms(b.d, 0.5));
    if (ta.length === 0 || tb.length === 0) return null;
    return {
      id: term.id,
      version: 1,
      timeline: [
        ...ta.map((s) => ({ ...s, target: 'self', id: `a-${s.id}` })),
        ...tb.map((s) => ({ ...s, target: 'child', id: `b-${s.id}` }))
      ],
      loop: { count: 1, direction: 'normal', fill: 'both' },
      stagger: { count: 1, step: 0, from: 'start' },
      reducedMotion: { strategy: 'fade', dur: 0.18 }
    };
  }

  const ease = lookupEase(d.e).name || 'easeOut';
  const timeline = framesToTimeline(d.frames, ease, ms(d.d, 0.52));
  if (timeline.length === 0) return null;

  const count = d.multi || 1;
  const step = (d.st || 0) / 1000;
  const loop = {
    count: d.repeat || 1,
    direction: d.alt ? 'alternate' : (d.dir || 'normal'),
    fill: 'both'
  };
  return {
    id: term.id,
    version: 1,
    timeline,
    loop,
    stagger: { count, step, from: 'start' },
    reducedMotion: { strategy: 'fade', dur: 0.18 }
  };
}

/* ---------------- 组装 ---------------- */

/* core 扩展分类（上游词典没有的） */
const EXTRA_CATEGORIES = [
  {
    id: 'film-grammar',
    zh: '影片与解说语法',
    en: 'Film & Explainer Grammar',
    tagline: '把口播节奏、镜头时长与主体运动组合成可描述的编排案例；这些名称用于检索与沟通，并非统一的行业标准术语。'
  }
];

const categories = [
  ...CATS.map((c) => ({
    id: c.id,
    zh: c.name,
    en: c.en,
    ...(c.tagline ? { tagline: c.tagline } : {}),
    ...(c.taglineEn ? { taglineEn: c.taglineEn } : {})
  })),
  ...EXTRA_CATEGORIES
];

const terms = TERMS.map((t) => {
  const out = {
    id: t.id,
    zh: t.zh,
    en: t.en,
    ...(t.alias && t.alias.length ? { alias: t.alias } : {}),
    cat: t.cat,
    vague: t.vague,
    say: t.say,
    def: t.def,
    trigger: triggerOf(t),
    ...(curveOf(t) ? { curve: curveOf(t) } : {}),
    ...(legacyEaseOf(t) ? { _legacyEase: legacyEaseOf(t) } : {}),
    ...(t.demo ? { demo: t.demo } : {}),
    ...(t.code ? { _legacyCode: t.code } : {})
  };
  out.spec = specOf(t) || undefined;
  if (!out.spec) delete out.spec;
  out.platforms = platformsOf(out);
  return out;
});

const vocab = { version: 1, categories, terms };

/* 别名去重：上游词典存在 14 组别名冲突（检索会歧义）。
   规则：先声明者保留，后声明者让出，全部记进 vocab/alias-conflicts.v1.json 以便追溯。 */
const aliasOwner = new Map();
const aliasConflicts = [];
for (const t of terms) {
  if (!Array.isArray(t.alias)) continue;
  const kept = [];
  for (const a of t.alias) {
    if (aliasOwner.has(a)) {
      aliasConflicts.push({ alias: a, kept: aliasOwner.get(a), dropped: t.id });
    } else {
      aliasOwner.set(a, t.id);
      kept.push(a);
    }
  }
  if (kept.length) t.alias = kept;
  else delete t.alias;
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(vocab, null, 2) + '\n', 'utf8');

if (aliasConflicts.length) {
  writeFileSync(
    join(ROOT, 'vocab', 'alias-conflicts.v1.json'),
    JSON.stringify({
      version: 1,
      note: '上游 motion-lexicon 的别名冲突处置记录：先声明者保留，后者让出。',
      conflicts: aliasConflicts
    }, null, 2) + '\n',
    'utf8'
  );
}

/* ---------------- 报告 ---------------- */

const withSpec = terms.filter((t) => t.spec).length;
const withCurve = terms.filter((t) => t.curve).length;
const unmapped = new Map();
for (const t of TERMS) {
  const d = t.demo || {};
  const raw = d.e || (d.a && d.a.e) || (d.b && d.b.e);
  if (raw && !lookupEase(raw).name) unmapped.set(raw, (unmapped.get(raw) || 0) + 1);
}
const byCat = {};
for (const t of terms) byCat[t.cat] = (byCat[t.cat] || 0) + 1;
const byTrigger = {};
for (const t of terms) byTrigger[t.trigger] = (byTrigger[t.trigger] || 0) + 1;

console.log(`写入 ${OUT}`);
console.log(`分类 ${categories.length} 组，术语 ${terms.length} 条`);
console.log(`含 spec ${withSpec} 条，含 curve ${withCurve} 条`);
console.log(`分类分布：${JSON.stringify(byCat)}`);
console.log(`触发方式：${JSON.stringify(byTrigger)}`);
if (unmapped.size) {
  console.log(`\n未映射的缓动串（${unmapped.size} 种）：`);
  for (const [k, v] of [...unmapped.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${v}×  ${k}`);
}
if (report) {
  console.log('\n前 3 条示例：');
  for (const t of terms.slice(0, 3)) console.log(JSON.stringify(t, null, 2));
}
