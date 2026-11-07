/* motion-core · exporters/film-mo.js
   导出为 film_ai_three / film_ai_chair 的 MO 时间库调用形式。
   目标环境：浏览器 canvas，t 为秒，元素是普通对象（el.x / el.opacity）。
   多组并行动作 → 每组分一段代码。

   对照：film_ai_three/代码工程/lib/motion.js
     MO.seg(t, a, b)  —— [a,b] → 0..1
     MO.byName(name)  —— Phase 2 加到 MO 上的别名解析（本导出器假定它存在）
     MO.step(t, fps)  —— 离散步进
 */

import { moExpr, rkExpr } from './_util.js';
import { groupSegments } from './_util.js';

function propOf(seg) {
  switch (seg.prop) {
    case 'translateX': return 'x';
    case 'translateY': return 'y';
    case 'translateZ': return 'z';
    case 'scale': return 'scale';
    case 'scaleX': return 'scaleX';
    case 'scaleY': return 'scaleY';
    case 'rotate': return 'rot';
    case 'opacity': return 'opacity';
    case 'clip-path': return 'clipPath';
    case 'box-shadow': return 'boxShadow';
    case 'text-shadow': return 'textShadow';
    default: return seg.prop;   // filter / color / skewX / skewY 本身就是合法标识符
  }
}

function needsMix(seg) {
  return typeof seg.from === 'string' || typeof seg.to === 'string';
}

function exprOf(seg) {
  if (needsMix(seg)) {
    return `mixStr(${JSON.stringify(seg.from == null ? '' : seg.from)}, ${JSON.stringify(seg.to == null ? '' : seg.to)}, k)`;
  }
  const round = (v) => {
    const r = Math.round(v * 1e6) / 1e6;
    return Object.is(r, -0) ? 0 : r;
  };
  const from = round(seg.from ?? 0);
  const to = round(seg.to ?? 1);
  const delta = round(to - from);
  const mag = Math.abs(delta);
  const unit = mag === 0 ? '0' : mag === 1 ? 'k' : `${mag} * k`;
  const term = delta < 0 ? `- ${unit}` : `+ ${unit}`;
  if (from === 0) return delta < 0 ? `-${unit}` : unit;
  return `${from} ${term}`;
}

/* 非数值属性（clip-path / filter / box-shadow 等）的逐帧混合：
   把两侧字符串里的数字按出现顺序配对插值，其余原样保留。 */
const MIX_STR = [
  'const mixStr = (a, b, k) => {',
  '  const na = (String(a).match(/-?[\\d.]+/g) || []).map(Number);',
  '  const nb = (String(b).match(/-?[\\d.]+/g) || []).map(Number);',
  '  let i = 0;',
  '  return String(a).replace(/-?[\\d.]+/g, () => {',
  '    const v = na[i] + (nb[i] - na[i]) * k;',
  '    i++;',
  '    return String(Math.round(v * 100) / 100);',
  '  });',
  '};'
].join('\n');

function emitGroup(lines, registry, g, { varName, timeVar, count, step }) {
  const ease = registry.byName(g.ease);
  if (!ease) { lines.push(`// ⚠ 曲线不存在：${g.ease}`); return; }
  const dur = g.dur, start = g.start || 0;
  lines.push(`const ease${lines._gi} = ${moExpr(ease)};`);
  lines.push(`const DUR${lines._gi} = ${dur}, START${lines._gi} = ${start}, STEP${lines._gi} = ${step};`);

  if (ease.def.fn === 'steps') {
    const fps = Math.max(1, Math.round((ease.def.args?.n || 6) / dur));
    lines.push(`const k${lines._gi} = MO.step(${timeVar} - START${lines._gi}, ${fps});`);
  } else {
    lines.push(`const k${lines._gi} = ease${lines._gi}(MO.seg(${timeVar}, START${lines._gi}, START${lines._gi} + DUR${lines._gi}));`);
  }

  if (count > 1) {
    lines.push(`for (let i = 0; i < ${count}; i++) {`);
    lines.push(`  const lt = ${timeVar} - (START${lines._gi} + i * STEP${lines._gi});`);
    lines.push(`  const k = ease${lines._gi}(MO.seg(lt, START${lines._gi}, START${lines._gi} + DUR${lines._gi}));`);
    for (const seg of g.segments) lines.push(`  ${varName}[i].${propOf(seg)} = ${exprOf(seg)};`);
    lines.push('}');
  } else {
    for (const seg of g.segments) lines.push(`${varName}.${propOf(seg)} = ${exprOf(seg)};`);
  }
}

export const filmMo = {
  target: 'film-mo',
  label: '影片 / Canvas（MO）',
  export(spec, { registry, varName = 'el', timeVar = 't' } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    if (!spec.timeline || spec.timeline.length === 0) {
      return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    }

    const groups = groupSegments(spec.timeline);
    const stagger = spec.stagger || { count: 1, step: 0 };
    const count = stagger.count || 1;
    const step = stagger.step || 0;

    const lines = [
      `// motion-core → film-mo · ${spec.id} · ${groups.length} 组动作` +
        (count > 1 ? ` · ${count} 项 · 错峰 ${Math.round(step * 1000)}ms` : '')
    ];
    if (groups.some((g) => g.segments.some(needsMix))) lines.push(MIX_STR);
    lines._gi = 0;
    groups.forEach((g, i) => {
      lines._gi = i + 1;
      lines.push(`// 动作 ${i + 1}：${g.segments.map((s) => s.prop).join(' + ')} · ${Math.round(g.dur * 1000)}ms · ${registry.byName(g.ease)?.name || g.ease}`);
      emitGroup(lines, registry, g, { varName, timeVar, count, step });
    });
    delete lines._gi;

    if (spec.loop && spec.loop.count > 1) {
      warnings.push(`film-mo 导出未自动处理循环（count=${spec.loop.count}），请在调用处用 MO.seg 包裹`);
    }
    return { code: lines.join('\n'), status: 'native', warnings };
  }
};

/** vibe-reel 的 ease(name, k) 形式。 */
export const filmRk = {
  target: 'film-rk',
  label: '知识短片（RK）',
  export(spec, { registry } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    if (!spec.timeline || spec.timeline.length === 0) {
      return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    }
    const groups = groupSegments(spec.timeline);
    const stagger = spec.stagger || { count: 1, step: 0 };
    const lines = [`// motion-core → film-rk · ${spec.id} · ${groups.length} 组动作`];
    if (groups.some((g) => g.segments.some(needsMix))) lines.push(MIX_STR);
    groups.forEach((g, i) => {
      const ease = registry.byName(g.ease);
      lines.push(`// 动作 ${i + 1}：${g.segments.map((s) => s.prop).join(' + ')}`);
      lines.push(`const ease${i + 1} = ${rkExpr(ease)};`);
      lines.push(`const k${i + 1} = ease${i + 1}(seg(t, ${g.start || 0}, ${(g.start || 0) + g.dur}));`);
      const props = g.segments.map((s) => {
        const key = /^[A-Za-z_$][\w$]*$/.test(s.prop) ? s.prop : JSON.stringify(s.prop);
        const expr = needsMix(s)
          ? `mixStr(${JSON.stringify(s.from == null ? '' : s.from)}, ${JSON.stringify(s.to == null ? '' : s.to)}, k${i + 1})`
          : `${s.from ?? 0} + (${s.to ?? 1} - ${s.from ?? 0}) * k${i + 1}`;
        return `  ${key}: ${expr}`;
      });
      lines.push(`const v${i + 1} = {`);
      lines.push(props.join(',\n'));
      lines.push('};');
      lines.push(`Object.assign(el, v${i + 1});   // 或按你的渲染结构取值`);
    });
    if (stagger.count > 1) warnings.push('film-rk 导出未自动处理错峰，请在组件循环里用 ss(t, a+i*step, b+i*step)');
    return { code: lines.join('\n'), status: 'native', warnings };
  }
};
