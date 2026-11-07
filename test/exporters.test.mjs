/* 导出器测试 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { registry } from '../src/index.js';
import { createExporters, exportSpec } from '../src/exporters/index.js';
import { css } from '../src/exporters/css.js';
import { validateSpec, normalizeSpec, duration } from '../src/spec.js';

const ex = createExporters(registry);

const slideIn = {
  id: 'slide-in',
  version: 1,
  timeline: [
    { id: 'move', target: 'self', prop: 'translateX', from: 46, to: 0, unit: 'px', start: 0, dur: 0.48, ease: 'easeOut' },
    { id: 'fade', target: 'self', prop: 'opacity', from: 0, to: 1, unit: 'none', start: 0, dur: 0.32, ease: 'easeOut' }
  ],
  loop: { count: 1, direction: 'normal', fill: 'both' },
  stagger: { count: 1, step: 0, from: 'start' },
  reducedMotion: { strategy: 'fade', dur: 0.18 }
};

const staggerSpec = {
  id: 'rise-in',
  version: 1,
  timeline: [
    { id: 'move', target: 'child', prop: 'translateY', from: 16, to: 0, unit: 'px', start: 0, dur: 0.42, ease: 'easeOut' }
  ],
  stagger: { count: 5, step: 0.09, from: 'start' },
  reducedMotion: { strategy: 'fade', dur: 0.18 }
};

test('每个导出器都返回可解析、非空的代码', () => {
  for (const target of ['css', 'css-transition', 'waapi', 'film-mo', 'film-rk', 'json']) {
    const res = ex[target](slideIn);
    assert.equal(res.status, 'native', `${target} 状态是 ${res.status}：${res.reason || ''}`);
    assert.ok(res.code.length > 0, `${target} 没产出代码`);
    assert.equal(typeof res.warnings, 'object');
  }
});

test('css 导出包含关键帧与 animation', () => {
  const res = ex.css(slideIn);
  assert.match(res.code, /@keyframes mc-slide-in-1/);
  assert.match(res.code, /animation: mc-slide-in-1 480ms/);
  assert.match(res.code, /cubic-bezier\(0\.33, 1, 0\.68, 1\)/);
  assert.match(res.code, /transform: translateX\(46px\)/);
  assert.match(res.code, /@keyframes mc-slide-in-2/);
});

test('css 对非贝塞尔曲线降级为 linear() 采样并告警', () => {
  const spec = {
    id: 'elastic-in',
    version: 1,
    timeline: [{ id: 'm', target: 'self', prop: 'scale', from: 0.5, to: 1, unit: 'none', start: 0, dur: 0.6, ease: 'elasticOut' }],
    reducedMotion: { strategy: 'fade', dur: 0.2 }
  };
  const res = ex.css(spec);
  assert.match(res.code, /linear\(/);
  assert.ok(res.warnings.some((w) => /elasticOut/.test(w)), '应给出采样告警');
});

test('waapi 导出结构与参数正确', () => {
  const res = ex.waapi(slideIn);
  assert.match(res.code, /\.animate\(/);
  assert.match(res.code, /"duration": 480/);
  assert.match(res.code, /"iterations": 1/);
  assert.match(res.code, /"fill": "both"/);
});

test('film-mo 导出使用 MO.byName 与 MO.seg', () => {
  const res = ex['film-mo'](slideIn);
  assert.match(res.code, /MO\.byName\('easeOut'\)/);
  assert.match(res.code, /MO\.seg\(/);
  assert.match(res.code, /DUR1 = 0\.48/);
  assert.match(res.code, /DUR2 = 0\.32/);
});

test('film-mo 错峰展开成循环', () => {
  const res = ex['film-mo'](staggerSpec);
  assert.match(res.code, /for \(let i = 0; i < 5; i\+\+\)/);
  assert.match(res.code, /STEP1 = 0\.09/);
  assert.match(res.code, /el\[i\]\.y = 16 - 16 \* k;/);
});

test('film-rk 导出使用 E.byName 与 seg', () => {
  const res = ex['film-rk'](slideIn);
  assert.match(res.code, /E\.byName\('easeOut'\)/);
  assert.match(res.code, /seg\(t, 0, 0\.48\)/);
});

test('json 导出归一化并附带采样表', () => {
  const res = ex.json(slideIn);
  const out = JSON.parse(res.code);
  assert.equal(out.id, 'slide-in');
  assert.equal(out.timeline.length, 2);
  assert.ok(out._curves['easeOut'].length > 0);
  assert.equal(out._meta.duration, 0.48);
});

test('unavailable 时 code 为空且给出原因', () => {
  const res = exportSpec(slideIn, '不存在的目标');
  assert.equal(res.status, 'unavailable');
  assert.equal(res.code, '');
  assert.match(res.reason, /未知导出目标/);
});

test('缺少 registry 时导出器明确拒绝', () => {
  const res = css.export(slideIn, {});
  assert.equal(res.status, 'unavailable');
  assert.equal(res.code, '');
});

test('spec 校验：缺 reducedMotion 报错', () => {
  const bad = { id: 'x', version: 1, timeline: slideIn.timeline };
  const res = validateSpec(bad, registry);
  assert.equal(res.ok, false);
  assert.match(res.errors.map((e) => e.path).join(','), /reducedMotion/);
});

test('spec 校验：未知曲线报错', () => {
  const bad = {
    id: 'x', version: 1,
    timeline: [{ id: 'm', target: 'self', prop: 'scale', from: 0, to: 1, start: 0, dur: 1, ease: 'nonexistent' }],
    reducedMotion: { strategy: 'none' }
  };
  const res = validateSpec(bad, registry);
  assert.equal(res.ok, false);
  assert.match(res.errors.map((e) => e.message).join(','), /曲线不存在/);
});

test('normalizeSpec 补默认值并排序', () => {
  const n = normalizeSpec({
    id: 'x',
    timeline: [
      { id: 'b', target: 'self', prop: 'opacity', from: 0, to: 1, start: 0.5, dur: 0.2, ease: 'linear' },
      { id: 'a', target: 'self', prop: 'scale', from: 0, to: 1, start: 0, dur: 0.3, ease: 'linear' }
    ],
    reducedMotion: { strategy: 'instant' }
  });
  assert.equal(n.timeline[0].id, 'a');
  assert.equal(n.loop.count, 1);
  assert.equal(n.stagger.count, 1);
  assert.equal(n.reducedMotion.strategy, 'instant');
  assert.equal(duration(n), 0.7);
});
