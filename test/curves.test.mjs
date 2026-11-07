/* 曲线层回归测试：与真实参考实现（film MO / 词典 ease.js）逐点对比。
   黄金采样由 scripts/gen-reference.mjs 生成，参考源不在时跳过。 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { registry } from '../src/index.js';

const fixturePath = join(dirname(fileURLToPath(import.meta.url)), 'fixtures', 'reference.json');
const fixture = existsSync(fixturePath) ? JSON.parse(readFileSync(fixturePath, 'utf8')) : null;

test('曲线与参考实现逐点一致（误差 < 1e-6）', { skip: fixture ? false : '缺 test/fixtures/reference.json' }, () => {
  const names = Object.keys(fixture.samples);
  assert.ok(names.length >= 30, `黄金采样只覆盖 ${names.length} 条曲线`);
  for (const name of names) {
    const entry = registry.byName(name);
    assert.ok(entry, `曲线 ${name} 不在注册表里`);
    for (const [source, pts] of Object.entries(fixture.samples[name])) {
      for (const [x, y] of pts) {
        const got = entry.fn(x);
        assert.ok(
          Math.abs(got - y) < fixture.tolerance,
          `${name}.${source} @ t=${x}：core=${got} ref=${y}`
        );
      }
    }
  }
});

test('所有曲线 f(0)=0、全区间有限', () => {
  /* 这两条是「去了又回」型，终点本来就在 0，不要求 f(1)=1；
     settle 是位移函数（到位后余振衰减），终点同样在 0 */
  const endsAtZero = new Set(['thereAndBack', 'wiggle', 'settle']);
  /* 弹簧是物理衰减，t=1 时仍有微小余振，用更宽的容差 */
  const springFamily = new Set(['spring', 'smoothSpring', 'snappy', 'bouncy', 'springHz']);
  for (const entry of registry.curves()) {
    assert.ok(Math.abs(entry.fn(0)) < 1e-12, `${entry.name} f(0) 应为 0，实际 ${entry.fn(0)}`);
    if (!endsAtZero.has(entry.name)) {
      const tol = springFamily.has(entry.name) ? 5e-4 : 1e-12;
      assert.ok(Math.abs(entry.fn(1) - 1) < tol, `${entry.name} f(1) 应为 1，实际 ${entry.fn(1)}`);
    }
    for (let i = 0; i <= 20; i++) {
      const v = entry.fn(i / 20);
      assert.ok(Number.isFinite(v), `${entry.name} f(${i / 20}) 不是有限数`);
    }
    /* 输入超出 [0,1] 时不得爆炸 */
    assert.ok(Number.isFinite(entry.fn(-1)), `${entry.name} f(-1) 不是有限数`);
    assert.ok(Number.isFinite(entry.fn(2)), `${entry.name} f(2) 不是有限数`);
  }
});

test('贝塞尔曲线与独立二分求解器一致', () => {
  const bisect = (x1, y1, x2, y2) => {
    const X = (t) => 3 * (1 - t) ** 2 * t * x1 + 3 * (1 - t) * t * t * x2 + t ** 3;
    const Y = (t) => 3 * (1 - t) ** 2 * t * y1 + 3 * (1 - t) * t * t * y2 + t ** 3;
    return (p) => {
      if (p <= 0) return 0;
      if (p >= 1) return 1;
      let lo = 0, hi = 1;
      for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (X(m) < p) lo = m; else hi = m; }
      return Y((lo + hi) / 2);
    };
  };
  for (const entry of registry.curves()) {
    if (entry.def.fn !== 'bezier') continue;
    const [x1, y1, x2, y2] = entry.def.args;
    const ref = bisect(x1, y1, x2, y2);
    for (let i = 0; i <= 10; i++) {
      const p = i / 10;
      assert.ok(
        Math.abs(entry.fn(p) - ref(p)) < 1e-4,
        `${entry.name} @ ${p}：core=${entry.fn(p)} bisect=${ref(p)}`
      );
    }
  }
});
