/* motion-core · exporters/tailwind.js */

import { groupSegments } from './_util.js';
import { PROP_NAME } from './_values.js';

export const tailwind = {
  target: 'tailwind',
  label: 'Tailwind CSS',
  export(spec, { registry, selector = '' } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const groups = groupSegments(spec.timeline);
    if (!groups.length) return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作，已导出第一组`);

    const g = groups[0];
    const entry = registry.byName(g.ease);
    const names = PROP_NAME.tailwind;

    const start = [], end = [];
    const props = new Set();
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) { warnings.push(`Tailwind 不支持属性 ${seg.prop}`); continue; }
      props.add(seg.prop === 'opacity' ? 'opacity' : 'transform');
      start.push(`${name}-[${seg.from ?? 0}]`);
      end.push(`${name}-[${seg.to ?? 0}]`);
    }
    if (!end.length) return { code: '', status: 'unavailable', warnings, reason: '没有可导出的属性' };

    let ease;
    if (entry.name === 'linear') ease = 'ease-linear';
    else if (entry.name === 'easeIn') ease = 'ease-in';
    else if (entry.name === 'easeInOut') ease = 'ease-in-out';
    else if (entry.name === 'easeOut') ease = 'ease-out';
    else if (entry.def.fn === 'steps') ease = `ease-[steps(${entry.def.args?.n || 6})]`;
    else if (entry.def.fn === 'bezier') ease = `ease-[cubic-bezier(${entry.def.args.join(',')})]`;
    else { ease = 'ease-out'; warnings.push(`${entry.name} 用 Tailwind 的 ease-out 近似`); }

    const propList = [...props].join(',');
    const dur = Math.round(g.dur * 1000);
    const stagger = spec.stagger || { count: 1, step: 0 };
    const delay = stagger.count > 1 ? ` delay-[${Math.round(stagger.step * 1000)}ms]` : '';

    const code = [
      `<!-- 初始状态 -->`,
      `<div class="transition-[${propList}] duration-[${dur}ms] ${ease}${delay} ${start.join(' ')}"></div>`,
      `<!-- 目标状态 -->`,
      `<div class="transition-[${propList}] duration-[${dur}ms] ${ease}${delay} ${end.join(' ')}"></div>`
    ].join('\n');

    return { code, status: 'native', warnings };
  }
};
