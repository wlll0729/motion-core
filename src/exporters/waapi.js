/* motion-core · exporters/waapi.js
   导出为 Web Animations API。多组并行动作 → 多次 animate 调用。 */

import { cssEasing, composeDeclarations, groupSegments } from './_util.js';

export const waapi = {
  target: 'waapi',
  label: 'Web Animations API',
  export(spec, { registry, selector = 'el' } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    if (!spec.timeline || spec.timeline.length === 0) {
      return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    }

    const groups = groupSegments(spec.timeline);
    const loop = spec.loop || {};
    const calls = [];

    for (const g of groups) {
      const from = composeDeclarations(g.segments, 'from');
      const to = composeDeclarations(g.segments, 'to');
      const opts = {
        duration: Math.round(g.dur * 1000),
        easing: cssEasing(registry.byName(g.ease)),
        delay: Math.round((g.start || 0) * 1000),
        iterations: loop.count ?? 1,
        direction: loop.direction || 'normal',
        fill: loop.fill || 'both'
      };
      for (const seg of g.segments) {
        const entry = registry.byName(seg.ease);
        if (entry && !['bezier', 'linear', 'steps'].includes(entry.def.fn)) {
          warnings.push(`${seg.ease} 用 linear() 采样近似（17 点）`);
        }
      }
      calls.push(
        `${selector}.animate(\n` +
        `  [{ ${from.join('; ')} }, { ${to.join('; ')} }],\n` +
        `  ${JSON.stringify(opts, null, 2).replace(/\n/g, '\n  ')}\n` +
        `);`
      );
    }

    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作导出为 ${groups.length} 次 animate 调用`);
    return { code: calls.join('\n'), status: 'native', warnings };
  }
};
