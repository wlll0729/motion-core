/* motion-core · exporters/compose.js */

import { groupSegments } from './_util.js';
import { PROP_NAME } from './_values.js';

const EASING = {
  linear: 'LinearEasing',
  easeIn: 'FastOutLinearInEasing',
  easeOut: 'LinearOutSlowInEasing',
  easeInOut: 'FastOutSlowInEasing'
};

export const compose = {
  target: 'compose',
  label: 'Jetpack Compose',
  export(spec, { registry } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const groups = groupSegments(spec.timeline);
    if (!groups.length) return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作，已导出第一组`);

    const g = groups[0];
    const entry = registry.byName(g.ease);
    const names = PROP_NAME.compose;

    const layer = [];
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) { warnings.push(`Compose 不支持属性 ${seg.prop}`); continue; }
      layer.push(`  ${name} = progress * ${seg.to ?? 0}f`);
    }
    if (!layer.length) return { code: '', status: 'unavailable', warnings, reason: '没有可导出的属性' };

    let easing;
    if (entry.def.fn === 'bezier') {
      const [x1, y1, x2, y2] = entry.def.args;
      easing = `CubicBezierEasing(${x1}f, ${y1}f, ${x2}f, ${y2}f)`;
    } else {
      easing = EASING[entry.name] || 'LinearOutSlowInEasing';
      if (!EASING[entry.name]) warnings.push(`${entry.name} 用 LinearOutSlowInEasing 近似`);
    }

    const loop = spec.loop || {};
    const extra = [];
    if ((loop.count ?? 1) > 1) extra.push(`  iterations = ${loop.count},`);
    if (loop.direction === 'alternate' || loop.direction === 'alternate-reverse') extra.push('  repeatMode = RepeatMode.Reverse,');

    const stagger = spec.stagger || { count: 1, step: 0 };
    if (stagger.count > 1) warnings.push(`逐项错峰请在 items 里用 delay(${Math.round(stagger.step * 1000)})`);

    const code = [
      `val spec = tween<Float>(`,
      `  durationMillis = ${Math.round(g.dur * 1000)},`,
      `  easing = ${easing}`,
      ...extra,
      `)`,
      `var visible by remember { mutableStateOf(false) }`,
      `LaunchedEffect(Unit) { visible = true }`,
      `val progress by animateFloatAsState(targetValue = if (visible) 1f else 0f, animationSpec = spec, label = "motion")`,
      `Modifier.graphicsLayer {`,
      ...layer,
      `}`
    ].join('\n');

    return { code, status: 'native', warnings };
  }
};
