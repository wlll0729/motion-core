/* motion-core · exporters/framer.js */

import { groupSegments } from './_util.js';
import { PROP_NAME } from './_values.js';

/** Framer 的命名缓动（与核心曲线名对齐） */
const FRAMER_NAMED = new Set(['linear', 'easeIn', 'easeOut', 'easeInOut', 'circIn', 'circOut', 'backIn', 'backOut', 'anticipate']);

export const framer = {
  target: 'framer',
  label: 'Framer Motion',
  export(spec, { registry } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const groups = groupSegments(spec.timeline);
    if (!groups.length) return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作，已导出第一组`);

    const g = groups[0];
    const entry = registry.byName(g.ease);
    const names = PROP_NAME.framer;

    const animate = [];
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) { warnings.push(`Framer Motion 不支持属性 ${seg.prop}`); continue; }
      animate.push(`${name}: ${seg.to ?? 0}`);
    }
    if (!animate.length) return { code: '', status: 'unavailable', warnings, reason: '没有可导出的属性' };

    /* 曲线：贝塞尔给数组；命名曲线给名字；其余给最近似命名 + 警告 */
    let ease;
    if (entry.def.fn === 'bezier') {
      ease = `[${entry.def.args.join(', ')}]`;
    } else if (FRAMER_NAMED.has(entry.name)) {
      ease = `"${entry.name}"`;
    } else {
      ease = '"easeOut"';
      warnings.push(`${entry.name} 用 Framer 的 easeOut 近似`);
    }

    const loop = spec.loop || {};
    const transition = [`duration: ${g.dur}`, `ease: ${ease}`];
    if ((loop.count ?? 1) > 1) {
      transition.push(`repeat: ${loop.count - 1}`);
      if (loop.direction === 'alternate' || loop.direction === 'alternate-reverse') transition.push('repeatType: "mirror"');
    }

    const stagger = spec.stagger || { count: 1, step: 0 };
    if (stagger.count > 1) transition.push(`staggerChildren: ${stagger.step}`);

    const code = [
      `<motion.div`,
      `  animate={{ ${animate.join(', ')} }}`,
      `  transition={{ ${transition.join(', ')} }}`,
      `/>`
    ].join('\n');

    return { code, status: 'native', warnings };
  }
};
