/* 注册表测试 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { registry } from '../src/index.js';
import { CurveNotFoundError } from '../src/registry.js';

test('主名与别名都能解析到同一条曲线', () => {
  assert.equal(registry.byName('k75').name, 'k75');
  assert.equal(registry.byName('k75').name, registry.byName('75% influence').name);
  assert.equal(registry.byName('quickCut').name, registry.byName('snappy-bezier').name);
  assert.equal(registry.byName('expo-out').name, 'easeOutExpo');
});

test('canonical 把别名归一到主名', () => {
  assert.equal(registry.canonical('expo-out'), 'easeOutExpo');
  assert.equal(registry.canonical('k75'), 'k75');
  assert.equal(registry.canonical('不存在的名字'), null);
});

test('未知曲线抛 CurveNotFoundError', () => {
  assert.throws(() => registry.fn('nonexistent'), CurveNotFoundError);
  assert.throws(() => registry.require('nonexistent'), CurveNotFoundError);
});

test('按 family 分组', () => {
  const families = registry.families();
  for (const f of ['in', 'out', 'in-out', 'spring', 'back', 'elastic', 'bounce', 'steps', 'basic']) {
    assert.ok(families.includes(f), `缺少 family：${f}`);
  }
  const springs = registry.byFamily('spring').map((c) => c.name);
  for (const n of ['spring', 'smoothSpring', 'snappy', 'bouncy', 'springHz']) {
    assert.ok(springs.includes(n), `spring 族缺少 ${n}`);
  }
});

test('平台能力声明可读', () => {
  assert.equal(registry.platforms('k75').css, 'native');
  assert.equal(registry.platforms('elasticOut').css, 'unavailable');
  assert.equal(registry.platforms('spring').gsap, 'native');
  assert.equal(registry.platforms('不存在的'), null);
});

test('搜索覆盖中英文名、别名与注释', () => {
  assert.ok(registry.search('k75').length >= 1);
  assert.ok(registry.search('Kurzgesagt').length >= 1);
  assert.ok(registry.search('回弹').length >= 2);
});

test('注册表无冲突', () => {
  assert.deepEqual(registry.conflicts, []);
});

test('曲线总数与文档一致', () => {
  const n = registry.curves().length;
  assert.ok(n >= 45, `曲线只有 ${n} 条，设计稿要求 ≥45`);
});
