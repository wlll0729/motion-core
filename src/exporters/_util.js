/* motion-core · exporters/_util.js
   导出器共用工具：CSS 缓动、采样、transform 合成、分段分组。 */

import { clamp01 } from '../curves.js';

/** 曲线条目 → CSS easing 字符串。
 *  贝塞尔 → cubic-bezier()；linear/steps → 原样；其余 → linear() 采样。 */
export function cssEasing(entry) {
  if (!entry) return 'linear';
  const def = entry.def || {};
  if (def.fn === 'linear') return 'linear';
  if (def.fn === 'bezier') return `cubic-bezier(${def.args.join(', ')})`;
  if (def.fn === 'steps') {
    const a = def.args || {};
    return a.mode === 'start' ? `steps(${a.n}, start)` : `steps(${a.n})`;
  }
  return sampleLinear(entry.fn, 17);
}

/** 采样成 CSS linear()。17 点，首尾必须是 0 / 1。 */
export function sampleLinear(fn, n = 17) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    let v = Number(fn(t));
    if (!Number.isFinite(v)) v = t;
    v = Math.max(-1, Math.min(2, v));
    pts.push(i === 0 || i === n - 1 ? String(+v.toFixed(4)) : `${+v.toFixed(4)} ${(t * 100).toFixed(2)}%`);
  }
  return `linear(${pts.join(', ')})`;
}

/** 数值 + 单位 → CSS 值。 */
export function cssValue(v, unit) {
  if (typeof v === 'string') return v;
  if (unit === 'none' || unit === undefined) return String(v);
  return `${v}${unit}`;
}

/** 把一组并行动作合成一条 from / to 声明块。 */
export function composeDeclarations(segments, end) {
  const transform = [];
  const decls = [];
  for (const seg of segments) {
    const v = end === 'from' ? seg.from : seg.to;
    if (v === undefined || v === null) continue;
    switch (seg.prop) {
      case 'translateX': transform.push(`translateX(${cssValue(v, seg.unit)})`); break;
      case 'translateY': transform.push(`translateY(${cssValue(v, seg.unit)})`); break;
      case 'translateZ': transform.push(`translateZ(${cssValue(v, seg.unit)})`); break;
      case 'scale': transform.push(`scale(${cssValue(v, 'none')})`); break;
      case 'scaleX': transform.push(`scaleX(${cssValue(v, 'none')})`); break;
      case 'scaleY': transform.push(`scaleY(${cssValue(v, 'none')})`); break;
      case 'rotate': transform.push(`rotate(${cssValue(v, seg.unit)})`); break;
      default:
        decls.push(`${seg.prop}: ${cssValue(v, seg.prop === 'opacity' ? 'none' : seg.unit)}`);
    }
  }
  if (transform.length) decls.unshift(`transform: ${transform.join(' ')}`);
  return decls;
}

/** 按 (start, dur, ease) 分组并行动作。 */
export function groupSegments(timeline) {
  const groups = new Map();
  for (const seg of timeline) {
    const key = `${seg.start}|${seg.dur}|${seg.ease}`;
    if (!groups.has(key)) groups.set(key, { start: seg.start, dur: seg.dur, ease: seg.ease, segments: [] });
    groups.get(key).segments.push(seg);
  }
  return [...groups.values()].sort((a, b) => a.start - b.start);
}

/** 曲线条目 → JS 表达式（供 film-mo 使用）。 */
export function moExpr(entry) {
  if (!entry) return 'MO.linear';
  return `MO.byName('${entry.name}')`;
}

export function rkExpr(entry) {
  if (!entry) return 'E.linear';
  return `E.byName('${entry.name}')`;
}

export function clamp01Export(t) { return clamp01(t); }
