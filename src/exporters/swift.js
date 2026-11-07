/* motion-core · exporters/swift.js */

import { groupSegments } from './_util.js';
import { PROP_NAME } from './_values.js';

const CURVE = {
  linear: '.curveLinear',
  easeIn: '.curveEaseIn',
  easeOut: '.curveEaseOut',
  easeInOut: '.curveEaseInOut'
};

export const swift = {
  target: 'swift',
  label: 'Swift / iOS',
  export(spec, { registry } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const groups = groupSegments(spec.timeline);
    if (!groups.length) return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作，已导出第一组`);

    const g = groups[0];
    const entry = registry.byName(g.ease);
    const names = PROP_NAME.swift;

    const from = [], to = [];
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) { warnings.push(`UIKit 不支持属性 ${seg.prop}`); continue; }
      const a = seg.from ?? 0, b = seg.to ?? 0;
      from.push(`${name}: ${a}`);
      to.push(`${name}: ${b}`);
    }
    if (!to.length) return { code: '', status: 'unavailable', warnings, reason: '没有可导出的属性' };

    const curve = CURVE[entry.name] || '.curveEaseOut';
    if (!CURVE[entry.name]) warnings.push(`${entry.name} 用 UIKit 的 curveEaseOut 近似`);

    const loop = spec.loop || {};
    const opts = [curve];
    if ((loop.count ?? 1) > 1) { opts.push('.repeatAutoreverses'); }
    if ((g.start || 0) > 0) warnings.push('UIKit 单条 animate 不支持 delay，请在调用处处理');

    const stagger = spec.stagger || { count: 1, step: 0 };
    if (stagger.count > 1) warnings.push(`逐项错峰请在外层循环里用延迟 ${stagger.step}s 分别调用`);

    const code = [
      `// 初始状态`,
      `view.transform = .identity`,
      `UIView.animate(withDuration: ${g.dur}, delay: 0, options: [${opts.join(', ')}], animations: {`,
      `  view.transform = .identity${to.length ? ' // ' + to.join(', ') : ''}`,
      `}, completion: nil)`
    ].join('\n');

    /* 逐属性版本更精确：把每个属性单独赋值 */
    const lines = [`view.transform = .identity`];
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) continue;
      lines.push(`${name === 'opacity' ? 'view.alpha' : 'view.' + name} = ${seg.to ?? 0}`);
    }

    const code2 = [
      `// 初始状态`,
      `view.transform = .identity`,
      `UIView.animate(withDuration: ${g.dur}, delay: 0, options: [${opts.join(', ')}], animations: {`,
      `  ${lines.slice(1).join('\n  ')}`,
      `}, completion: nil)`
    ].join('\n');

    return { code: code2, status: 'native', warnings };
  }
};
