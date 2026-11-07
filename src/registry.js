/* ============================================================
   motion-core · registry.js
   曲线注册表：byName / byFamily / platforms / alias。
   纯逻辑，不碰 I/O——浏览器、Node、Worker 都能用。
   ============================================================ */

import { buildCurve } from './curves.js';

export class CurveNotFoundError extends Error {
  constructor(name) {
    super(`未知曲线：${name}`);
    this.name = 'CurveNotFoundError';
    this.curve = name;
  }
}

export function createRegistry(vocab) {
  if (!vocab || !Array.isArray(vocab.curves)) {
    throw new TypeError('createRegistry 需要 { version, curves: [] } 结构的词表');
  }

  const byName = new Map();
  const aliasToName = new Map();
  const conflicts = [];

  for (const curve of vocab.curves) {
    if (byName.has(curve.name)) {
      conflicts.push({ name: curve.name, reason: 'duplicate-name' });
      continue;
    }
    let fn;
    try {
      fn = buildCurve(curve.def);
    } catch (err) {
      conflicts.push({ name: curve.name, reason: 'bad-def', detail: String(err.message || err) });
      continue;
    }
    const entry = Object.freeze({ ...curve, fn });
    byName.set(curve.name, entry);

    for (const a of curve.aliases || []) {
      if (aliasToName.has(a) && aliasToName.get(a) !== curve.name) {
        conflicts.push({ name: a, reason: 'alias-conflict', target: curve.name, existing: aliasToName.get(a) });
        continue;
      }
      aliasToName.set(a, curve.name);
    }
  }

  const canonical = (name) => (byName.has(name) ? name : (aliasToName.get(name) || null));

  const resolve = (name) => {
    const c = canonical(name);
    return c ? byName.get(c) : null;
  };

  const fn = (name) => {
    const entry = resolve(name);
    if (!entry) throw new CurveNotFoundError(name);
    return entry.fn;
  };

  const platforms = (name) => {
    const entry = resolve(name);
    return entry ? entry.platforms : null;
  };

  const families = () => {
    const set = new Set();
    for (const c of byName.values()) set.add(c.family);
    return [...set];
  };

  const byFamily = (family) => {
    const out = [];
    for (const c of byName.values()) if (c.family === family) out.push(c);
    return out;
  };

  const search = (query) => {
    const q = String(query || '').trim().toLowerCase();
    if (!q) return [];
    const out = [];
    for (const c of byName.values()) {
      const hay = [
        c.name,
        c.label?.zh || '',
        c.label?.en || '',
        ...(c.aliases || []),
        c.note || ''
      ].join(' ').toLowerCase();
      if (hay.includes(q)) out.push(c);
    }
    return out;
  };

  return Object.freeze({
    version: vocab.version,
    /** 词表里声明的全部导出目标名 */
    platformNames: vocab.platforms || [],
    conflicts,
    /** 全部曲线条目（含 fn） */
    curves: () => [...byName.values()],
    names: () => [...byName.keys()],
    /** 主名 → 条目；也接受别名 */
    byName: resolve,
    /** 主名 → 函数；也接受别名 */
    fn,
    /** 主名 → platforms 声明 */
    platforms,
    /** 主名 → 规范名（若传入的是别名） */
    canonical,
    /** 主名 → 别名列表 */
    aliases: (name) => {
      const entry = resolve(name);
      return entry ? (entry.aliases || []) : [];
    },
    has: (name) => !!resolve(name),
    families,
    byFamily,
    search,
    /** 把名字解析成 { name, entry }；未知则抛 CurveNotFoundError */
    require: (name) => {
      const entry = resolve(name);
      if (!entry) throw new CurveNotFoundError(name);
      return { name: entry.name, entry };
    }
  });
}
