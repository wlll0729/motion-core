/* lint 测试 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { lintAll, KNOWN_TARGETS, IMPLEMENTED_TARGETS } from '../src/lint.js';
import { curvesVocab } from '../src/index.js';

test('曲线词表 lint 通过（0 error）', () => {
  const res = lintAll({ curvesVocab }, { strict: true });
  if (!res.ok) {
    for (const e of res.errors) console.error('  ✗', e.path, e.message);
  }
  assert.equal(res.ok, true, `${res.errors.length} 项 error`);
});

test('lint 能抓出真实错误', () => {
  const bad = {
    version: 1,
    platforms: KNOWN_TARGETS,
    curves: [
      {
        name: 'bad-curve',
        label: { zh: '坏曲线', en: 'Bad curve' },
        family: 'out',
        def: { fn: 'noSuchImpl' },
        platforms: { css: 'native' }
      },
      {
        name: 'bad-curve',
        label: { zh: '重复', en: 'Dup' },
        family: 'out',
        def: { fn: 'linear' },
        platforms: { css: 'native' }
      }
    ]
  };
  const res = lintAll({ curvesVocab: bad }, { strict: true });
  assert.equal(res.ok, false);
  const paths = res.errors.map((e) => e.path).join('\n');
  assert.match(paths, /bad-curve/);
});

test('平台能力声明使用合法值', () => {
  for (const c of curvesVocab.curves) {
    for (const [target, level] of Object.entries(c.platforms || {})) {
      assert.ok(KNOWN_TARGETS.includes(target), `${c.name} 声明了未知目标 ${target}`);
      assert.ok(['native', 'approximate', 'unavailable'].includes(level),
        `${c.name}.${target} 能力值非法：${level}`);
    }
  }
});

test('Phase 0 导出器清单与实现一致', () => {
  for (const t of ['css', 'waapi', 'film-mo', 'film-camera', 'json']) {
    assert.ok(IMPLEMENTED_TARGETS.includes(t), `导出器 ${t} 未登记为已实现`);
  }
});
