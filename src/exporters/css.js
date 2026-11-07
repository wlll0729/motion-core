/* motion-core · exporters/css.js
   导出为 CSS @keyframes / transition。
   多组并行动作 → 多条 animation 声明（逗号分隔）。 */

import { cssEasing, composeDeclarations, groupSegments } from './_util.js';

const TRANSFORM_PROPS = new Set([
  'transform', 'translateX', 'translateY', 'translateZ', 'scale', 'scaleX', 'scaleY', 'rotate'
]);

function kfName(id, i) { return `mc-${id.replace(/[^a-z0-9-]/gi, '-')}-${i + 1}`; }

function timingOf(group, loop) {
  const ms = Math.round(group.dur * 1000);
  const delay = Math.round((group.start || 0) * 1000);
  const iterations = loop.count ?? 1;
  const direction = loop.direction === 'normal' ? '' : ` ${loop.direction}`;
  const fill = loop.fill === 'both' ? '' : ` ${loop.fill}`;
  return `${ms}ms ${delay}ms ${iterations}${direction}${fill}`;
}

export const css = {
  target: 'css',
  label: 'CSS',
  export(spec, { registry, selector = '.el' } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    if (!spec.timeline || spec.timeline.length === 0) {
      return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    }

    const groups = groupSegments(spec.timeline);
    const loop = spec.loop || {};
    const animations = [];
    const blocks = [];

    groups.forEach((g, i) => {
      const name = kfName(spec.id, i);
      const easing = cssEasing(registry.byName(g.ease));
      const from = composeDeclarations(g.segments, 'from');
      const consts = composeDeclarations(g.segments, 'to');
      animations.push(`${name} ${timingOf(g, loop)} ${easing}`);
      blocks.push(`@keyframes ${name} {\n` +
        (from.length ? `  from { ${from.join('; ')}; }\n` : '') +
        (consts.length ? `  to { ${consts.join('; ')}; }\n` : '') +
        `}`);
    });

    for (const seg of spec.timeline) {
      const entry = registry.byName(seg.ease);
      if (entry && !['bezier', 'linear', 'steps'].includes(entry.def.fn)) {
        warnings.push(`${seg.ease} 无法用原生 CSS 曲线表达，已用 linear() 采样近似`);
      }
    }
    if (groups.length > 1) {
      warnings.push(`${groups.length} 组并行动作已导出为 ${groups.length} 条 animation`);
    }

    const code = `${selector} {\n  animation: ${animations.join(', ')};\n}\n${blocks.join('\n')}`;
    return { code, status: 'native', warnings };
  }
};

/** 仅 transition 形式（适合两态切换，只取第一组）。 */
export const cssTransition = {
  target: 'css-transition',
  label: 'CSS transition',
  export(spec, { registry, selector = '.el' } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const timeline = (spec.timeline || []).filter((s) =>
      TRANSFORM_PROPS.has(s.prop) || s.prop === 'opacity');
    if (timeline.length === 0) {
      return { code: '', status: 'unavailable', warnings, reason: '没有可导出的 transition 属性' };
    }
    const groups = groupSegments(timeline);
    /* transition 是两态切换，只能表达一组动作；多组时取第一组并告警 */
    if (groups.length > 1) {
      warnings.push(`transition 只能表达一组动作，已取第一组（共 ${groups.length} 组）`);
    }
    const g = groups[0];
    const props = [...new Set(g.segments.map((s) => s.prop))];
    const cssProp = props.every((p) => p === 'opacity') ? 'opacity' : 'transform';
    const ms = Math.round(g.dur * 1000);
    const easing = cssEasing(registry.byName(g.ease));
    const code = [
      `${selector} {`,
      `  transition: ${cssProp} ${ms}ms ${easing};`,
      '}',
      `/* 切到目标状态：${composeDeclarations(g.segments, 'to').join('; ')} */`
    ].join('\n');
    return { code, status: 'native', warnings };
  }
};
