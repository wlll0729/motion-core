/* ============================================================
   motion-core · spec.js
   MotionSpec 归一化 + 校验。校验规则与 spec/motion-spec.schema.json 对齐，
   但用手写实现，避免引入 JSON Schema 依赖。
   ============================================================ */

export const PROPS = Object.freeze([
  'translateX', 'translateY', 'translateZ', 'scale', 'scaleX', 'scaleY',
  'rotate', 'skewX', 'skewY', 'opacity', 'clip-path', 'filter',
  'box-shadow', 'text-shadow', 'color'
]);

export const TARGETS = Object.freeze(['self', 'child', 'all', 'camera']);
export const UNITS = Object.freeze(['px', '%', 'deg', 'none']);
export const DIRECTIONS = Object.freeze(['normal', 'reverse', 'alternate', 'alternate-reverse']);
export const FILLS = Object.freeze(['none', 'forwards', 'backwards', 'both']);
export const STAGGER_FROM = Object.freeze(['start', 'end', 'center']);
export const CAMERA_KINDS = Object.freeze(['glide', 'pan', 'push', 'slam', 'shake', 'cut']);
export const RM_STRATEGIES = Object.freeze(['fade', 'instant', 'none']);
export const ID_RE = /^[a-z0-9][a-z0-9-]*$/;

export class SpecError extends Error {
  constructor(errors) {
    super(`MotionSpec 校验失败：${errors.length} 项`);
    this.name = 'SpecError';
    this.errors = errors;
  }
}

const num = (v) => typeof v === 'number' && Number.isFinite(v);

/** 归一化：补默认值、按 start 排序、补 unit/ease。不修改入参。 */
export function normalizeSpec(spec) {
  if (!spec || typeof spec !== 'object') throw new TypeError('spec 必须是对象');
  const out = {
    id: spec.id,
    version: spec.version || 1,
    timeline: (spec.timeline || []).map((s, i) => ({
      id: s.id || `t${i + 1}`,
      target: s.target || 'self',
      prop: s.prop,
      from: s.from,
      to: s.to,
      unit: s.unit || 'px',
      start: num(s.start) ? s.start : 0,
      dur: num(s.dur) ? s.dur : 0.5,
      ease: s.ease || 'easeOut',
      ...(s.extra ? { extra: s.extra } : {})
    })),
    loop: {
      count: spec.loop?.count ?? 1,
      direction: spec.loop?.direction || 'normal',
      fill: spec.loop?.fill || 'both'
    },
    stagger: {
      count: spec.stagger?.count ?? 1,
      step: num(spec.stagger?.step) ? spec.stagger.step : 0,
      from: spec.stagger?.from || 'start'
    },
    camera: (spec.camera || []).map((c, i) => ({
      at: num(c.at) ? c.at : 0,
      kind: c.kind,
      dur: num(c.dur) ? c.dur : 1,
      ease: c.ease || 'easeOut',
      ...(c.to ? { to: c.to } : {}),
      ...(num(c.amp) ? { amp: c.amp } : {}),
      ...(num(c.from) ? { from: c.from } : {})
    })),
    reducedMotion: {
      strategy: spec.reducedMotion?.strategy || 'fade',
      dur: num(spec.reducedMotion?.dur) ? spec.reducedMotion.dur : 0.18
    }
  };
  out.timeline.sort((a, b) => a.start - b.start);
  out.camera.sort((a, b) => a.at - b.at);
  return out;
}

/**
 * 校验。
 * @param {object} spec
 * @param {{byName?:Function, has?:Function}} [registry] 用于校验 ease 是否存在
 * @returns {{ok:boolean, errors:Array<{path:string,message:string}>, warnings:Array<string>}}
 */
export function validateSpec(spec, registry) {
  const errors = [];
  const warnings = [];
  const at = (path, message) => errors.push({ path, message });

  if (!spec || typeof spec !== 'object') {
    return { ok: false, errors: [{ path: '$', message: 'spec 必须是对象' }], warnings };
  }

  if (typeof spec.id !== 'string' || !ID_RE.test(spec.id)) {
    at('id', `id 必须匹配 ${ID_RE}（收到 ${JSON.stringify(spec.id)}）`);
  }
  if (spec.version !== undefined && spec.version !== 1) {
    at('version', `只支持 version 1（收到 ${spec.version}）`);
  }

  if (!Array.isArray(spec.timeline) || spec.timeline.length === 0) {
    at('timeline', 'timeline 必须是非空数组');
  } else {
    const ids = new Set();
    spec.timeline.forEach((s, i) => {
      const p = `timeline[${i}]`;
      if (!s || typeof s !== 'object') { at(p, '必须是对象'); return; }
      if (!s.id || typeof s.id !== 'string') at(`${p}.id`, '必须有字符串 id');
      else if (ids.has(s.id)) at(`${p}.id`, `id 重复：${s.id}`);
      else ids.add(s.id);
      if (!TARGETS.includes(s.target)) at(`${p}.target`, `必须是 ${TARGETS.join(' / ')}`);
      if (!PROPS.includes(s.prop)) at(`${p}.prop`, `必须是 ${PROPS.join(' / ')}`);
      if (!UNITS.includes(s.unit)) at(`${p}.unit`, `必须是 ${UNITS.join(' / ')}`);
      if (!num(s.start) || s.start < 0) at(`${p}.start`, '必须是非负有限数（秒）');
      if (!num(s.dur) || s.dur <= 0) at(`${p}.dur`, '必须是正有限数（秒）');
      if (typeof s.ease !== 'string' || !s.ease) {
        at(`${p}.ease`, '必须有曲线名');
      } else if (registry && typeof registry.has === 'function' && !registry.has(s.ease)) {
        at(`${p}.ease`, `曲线不存在：${s.ease}`);
      }
      if (s.prop === 'opacity' || s.prop === 'color' || s.prop === 'filter') {
        if (s.unit !== 'none' && s.unit !== 'px') warnings.push(`${p}.unit：${s.prop} 通常不需要单位`);
      }
    });
  }

  if (spec.loop !== undefined) {
    const l = spec.loop;
    if (!Number.isInteger(l.count) || l.count < 1) at('loop.count', '必须是 ≥1 的整数');
    if (!DIRECTIONS.includes(l.direction)) at('loop.direction', `必须是 ${DIRECTIONS.join(' / ')}`);
    if (!FILLS.includes(l.fill)) at('loop.fill', `必须是 ${FILLS.join(' / ')}`);
  }

  if (spec.stagger !== undefined) {
    const s = spec.stagger;
    if (!Number.isInteger(s.count) || s.count < 1) at('stagger.count', '必须是 ≥1 的整数');
    if (!num(s.step)) at('stagger.step', '必须是有限数（秒）');
    if (!STAGGER_FROM.includes(s.from)) at('stagger.from', `必须是 ${STAGGER_FROM.join(' / ')}`);
  }

  if (spec.camera !== undefined) {
    if (!Array.isArray(spec.camera)) {
      at('camera', '必须是数组');
    } else {
      spec.camera.forEach((c, i) => {
        const p = `camera[${i}]`;
        if (!CAMERA_KINDS.includes(c.kind)) at(`${p}.kind`, `必须是 ${CAMERA_KINDS.join(' / ')}`);
        if (!num(c.at) || c.at < 0) at(`${p}.at`, '必须是非负有限数（秒）');
        if (!num(c.dur) || c.dur <= 0) at(`${p}.dur`, '必须是正有限数（秒）');
        if (c.ease && registry && typeof registry.has === 'function' && !registry.has(c.ease)) {
          at(`${p}.ease`, `曲线不存在：${c.ease}`);
        }
        if (c.kind === 'shake' && !num(c.amp)) warnings.push(`${p}.amp：shake 未给幅度`);
        if (c.kind === 'slam' && !num(c.from)) warnings.push(`${p}.from：slam 未给起始缩放`);
      });
    }
  }

  if (!spec.reducedMotion || typeof spec.reducedMotion !== 'object') {
    at('reducedMotion', '必填：{ strategy: fade|instant|none, dur? }');
  } else {
    if (!RM_STRATEGIES.includes(spec.reducedMotion.strategy)) {
      at('reducedMotion.strategy', `必须是 ${RM_STRATEGIES.join(' / ')}`);
    }
    if (spec.reducedMotion.dur !== undefined && (!num(spec.reducedMotion.dur) || spec.reducedMotion.dur < 0)) {
      at('reducedMotion.dur', '必须是非负有限数（秒）');
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}

/** 计算总时长（秒）：timeline 与 camera 的并集。 */
export function duration(spec) {
  const t = (spec.timeline || []).reduce((m, s) => Math.max(m, (s.start || 0) + (s.dur || 0)), 0);
  const c = (spec.camera || []).reduce((m, k) => Math.max(m, (k.at || 0) + (k.dur || 0)), 0);
  return Math.max(t, c);
}

/** 把秒转成导出目标单位。 */
export function toMs(sec) { return Math.round(sec * 1000); }
export function toSec(ms) { return ms / 1000; }
