/* motion-core · exporters/gsap.js */

import { groupSegments } from './_util.js';
import { PROP_NAME } from './_values.js';

export const gsap = {
  target: 'gsap',
  label: 'GSAP',
  export(spec, { registry } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const groups = groupSegments(spec.timeline);
    if (!groups.length) return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作，已导出第一组`);

    const g = groups[0];
    const entry = registry.byName(g.ease);
    const names = PROP_NAME.gsap;

    const props = [];
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) { warnings.push(`GSAP 不支持属性 ${seg.prop}`); continue; }
      const to = seg.to ?? 0;
      props.push(`${name}: ${to}`);
    }
    if (!props.length) return { code: '', status: 'unavailable', warnings, reason: '没有可导出的属性' };

    /* 曲线：优先用词表里的 gsap 等价名；贝塞尔用 CustomEase；其余用最近似命名 */
    let ease;
    if (entry.def.fn === 'bezier') {
      ease = `CustomEase.create("mc-${spec.id}", "M0,0 C${entry.def.args.join(',')} 1,1") /* 需先加载 CustomEase 插件 */`;
    } else if (entry.equiv?.gsap) {
      ease = `"${entry.equiv.gsap}"`;
    } else {
      ease = '"power2.out"';
      warnings.push(`${entry.name} 没有 GSAP 等价命名，用 power2.out 近似`);
    }

    const loop = spec.loop || {};
    const extra = [];
    if ((loop.count ?? 1) > 1) extra.push(`repeat: ${loop.count - 1}`);
    if (loop.direction === 'alternate' || loop.direction === 'alternate-reverse') extra.push('yoyo: true');
    if ((g.start || 0) > 0) extra.push(`delay: ${g.start}`);

    const stagger = spec.stagger || { count: 1, step: 0 };
    if (stagger.count > 1) extra.push(`stagger: ${stagger.step}`);

    const code = [
      `gsap.to(".el", {`,
      `  ${props.join(',\n  ')},`,
      `  duration: ${(g.dur).toFixed(2)},`,
      `  ease: ${ease},`,
      (extra.length ? `  ${extra.join(',\n  ')},` : ''),
      `});`
    ].filter(Boolean).join('\n');

    return { code, status: 'native', warnings };
  }
};
