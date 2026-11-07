/* 术语表回归测试 + 端到端导出 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { registry } from '../src/index.js';
import { validateSpec } from '../src/spec.js';
import { createExporters } from '../src/exporters/index.js';
import { lintAll, IMPLEMENTED_TARGETS } from '../src/lint.js';

const vocabDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'vocab');
const termsVocab = JSON.parse(readFileSync(join(vocabDir, 'terms.v1.json'), 'utf8'));
const grammarVocab = JSON.parse(readFileSync(join(vocabDir, 'grammar.film.v1.json'), 'utf8'));
const curvesVocab = JSON.parse(readFileSync(join(vocabDir, 'curves.v1.json'), 'utf8'));

const ex = createExporters(registry);

test('术语表结构与数量', () => {
  assert.equal(termsVocab.terms.length, 244);
  assert.ok(termsVocab.categories.length >= 17, `分类只有 ${termsVocab.categories.length} 组`);
  assert.ok(termsVocab.categories.some((c) => c.id === 'film-grammar'), '缺少 film-grammar 分类');
});

test('每条术语字段齐全、id 唯一、分类存在', () => {
  const cats = new Set(termsVocab.categories.map((c) => c.id));
  const ids = new Set();
  for (const t of termsVocab.terms) {
    assert.ok(t.id && t.zh && t.en, `${t.id} 缺 id/zh/en`);
    assert.ok(cats.has(t.cat), `${t.id} 分类不存在：${t.cat}`);
    assert.ok(!ids.has(t.id), `id 重复：${t.id}`);
    ids.add(t.id);
    assert.ok(t.vague && t.say && t.def, `${t.id} 缺 vague/say/def`);
    assert.ok(t.platforms && typeof t.platforms === 'object', `${t.id} 缺 platforms`);
  }
});

test('所有 spec 都能通过校验', () => {
  const bad = [];
  for (const t of termsVocab.terms) {
    if (!t.spec) continue;
    const res = validateSpec(t.spec, registry);
    if (!res.ok) bad.push(`${t.id}: ${res.errors.map((e) => e.message).join('; ')}`);
  }
  assert.equal(bad.length, 0, `${bad.length} 条 spec 校验失败：\n${bad.slice(0, 10).join('\n')}`);
});

test('所有 curve 引用都能解析', () => {
  for (const t of termsVocab.terms) {
    if (t.curve) assert.ok(registry.has(t.curve), `${t.id} 引用了不存在的曲线 ${t.curve}`);
    for (const s of t.spec?.timeline || []) {
      assert.ok(registry.has(s.ease), `${t.id} 的 spec 引用了不存在的曲线 ${s.ease}`);
    }
  }
});

test('film-grammar 语法条目有来源、曲线存在', () => {
  assert.ok(grammarVocab.grammars.length >= 8);
  for (const g of grammarVocab.grammars) {
    assert.equal(g.cat, 'film-grammar');
    assert.ok(g.source?.where, `${g.id} 缺来源`);
    for (const c of g.curves || []) {
      assert.ok(registry.has(c), `${g.id} 引用了不存在的曲线 ${c}`);
    }
  }
});

test('转场表非空且来自 transitions.js', () => {
  assert.ok(grammarVocab.transitions.length >= 40);
  const ids = new Set(grammarVocab.transitions.map((t) => t.id));
  for (const key of ['cut', 'crossfade', 'pageTurn', 'zoomThrough', 'matchCut', 'whip']) {
    assert.ok(ids.has(key), `转场表缺少 ${key}`);
  }
});

test('端到端：80 条含 spec 的术语都能导出到 css / film-mo', () => {
  const withSpec = termsVocab.terms.filter((t) => t.spec);
  assert.ok(withSpec.length >= 70, `含 spec 的术语只有 ${withSpec.length} 条`);
  const failed = [];
  for (const t of withSpec) {
    for (const target of ['css', 'waapi', 'film-mo', 'film-rk', 'json']) {
      const res = ex[target](t.spec);
      if (res.status === 'unavailable' || !res.code) {
        failed.push(`${t.id} → ${target}: ${res.reason || '无代码'}`);
      }
    }
  }
  assert.equal(failed.length, 0, `${failed.length} 条导出失败：\n${failed.slice(0, 10).join('\n')}`);
});

test('平台能力声明与导出结果一致（仅限已实现的导出器）', () => {
  const mismatches = [];
  for (const t of termsVocab.terms) {
    if (!t.spec) continue;
    for (const target of IMPLEMENTED_TARGETS) {
      const level = t.platforms[target];
      if (!level || level === 'unavailable') continue;
      const res = ex[target](t.spec);
      if (res.status === 'unavailable') mismatches.push(`${t.id}.${target} 声明 ${level} 但导出不可用`);
    }
  }
  assert.equal(mismatches.length, 0, mismatches.slice(0, 10).join('\n'));
});

test('词表 lint 通过', () => {
  const res = lintAll({ curvesVocab, termsVocab, grammarVocab }, { strict: true });
  if (!res.ok) for (const e of res.errors) console.error('  ✗', e.path, e.message);
  assert.equal(res.ok, true, `${res.errors.length} 项 error`);
});
