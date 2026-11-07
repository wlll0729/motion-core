/* motion-core · exporters/_values.js
   各平台共用的「spec → 目标值」换算。 */

import { groupSegments } from './_util.js';

/** MotionSpec 属性 → 各平台的属性名 */
export const PROP_NAME = {
  gsap: { translateX: 'x', translateY: 'y', translateZ: 'z', scale: 'scale', scaleX: 'scaleX', scaleY: 'scaleY', rotate: 'rotation', skewX: 'skewX', skewY: 'skewY', opacity: 'opacity' },
  framer: { translateX: 'x', translateY: 'y', translateZ: 'z', scale: 'scale', scaleX: 'scaleX', scaleY: 'scaleY', rotate: 'rotate', skewX: 'skewX', skewY: 'skewY', opacity: 'opacity' },
  swift: { translateX: 'translationX', translateY: 'translationY', scale: 'scale', scaleX: 'scaleX', scaleY: 'scaleY', rotate: 'rotation', skewX: 'skewX', skewY: 'skewY', opacity: 'opacity' },
  compose: { translateX: 'translationX', translateY: 'translationY', scale: 'scale', scaleX: 'scaleX', scaleY: 'scaleY', rotate: 'rotationZ', skewX: 'skewX', skewY: 'skewY', opacity: 'opacity' },
  tailwind: { translateX: 'translate-x', translateY: 'translate-y', translateZ: 'translate-z', scale: 'scale', scaleX: 'scale-x', scaleY: 'scale-y', rotate: 'rotate', skewX: 'skew-x', skewY: 'skew-y', opacity: 'opacity' }
};

/** 值 → 平台字面量 */
export function valueOf(seg, platform) {
  const to = seg.to ?? 0;
  if (platform === 'gsap' || platform === 'framer') {
    if (seg.prop === 'rotate' || seg.prop.startsWith('skew')) return `${to}`;
    if (seg.prop.startsWith('scale')) return `${to}`;
    return seg.unit === 'none' ? `${to}` : `${to}`;
  }
  if (platform === 'swift') {
    if (seg.prop === 'rotate') return `${to}`;
    if (seg.prop.startsWith('scale')) return `${to}`;
    return `${to}`;
  }
  return `${to}`;
}

/** 取第一组动作的目标值（大多数平台一次只导出一组）。 */
export function firstGroup(spec) {
  const groups = groupSegments(spec.timeline);
  return groups[0] || null;
}

export function warnExtraGroups(spec, warnings) {
  const n = groupSegments(spec.timeline).length;
  if (n > 1) warnings.push(`${n} 组并行动作，已导出第一组`);
}
