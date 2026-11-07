#!/usr/bin/env node
/* motion-core · bin/motion-lint.js
 *
 * 用法：
 *   node bin/motion-lint.js [vocabDir] [--strict] [--json]
 *
 * 默认 vocabDir = ../vocab（相对本文件）。
 * 退出码：0 通过；1 有 error；2 用法错误。
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { lintAll, KNOWN_TARGETS, IMPLEMENTED_TARGETS } from '../src/lint.js';

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);

let vocabDir = join(here, '..', 'vocab');
let strict = false;
let asJson = false;

for (const a of args) {
  if (a === '--strict') strict = true;
  else if (a === '--json') asJson = true;
  else if (a === '--help' || a === '-h') {
    console.log('用法: motion-lint [vocabDir] [--strict] [--json]');
    process.exit(0);
  } else if (a.startsWith('-')) {
    console.error(`未知选项：${a}`);
    process.exit(2);
  } else {
    vocabDir = resolve(a);
  }
}

if (!existsSync(vocabDir)) {
  console.error(`词表目录不存在：${vocabDir}`);
  process.exit(2);
}

const load = (name) => {
  const p = join(vocabDir, name);
  return existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : null;
};

let result;
try {
  result = lintAll({
    curvesVocab: load('curves.v1.json'),
    termsVocab: load('terms.v1.json'),
    grammarVocab: load('grammar.film.v1.json')
  }, { strict });
} catch (e) {
  console.error(`lint 崩溃：${e.message}`);
  process.exit(1);
}

if (asJson) {
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.ok ? 0 : 1);
}

const { errors, warnings, stats } = result;

if (stats.curves) {
  console.log(`曲线：${stats.curves.curves} 条，别名 ${stats.curves.aliases} 个，分类 ${stats.curves.families.length} 组`);
  console.log(`      ${stats.curves.families.join(', ')}`);
}
if (stats.terms && stats.terms.terms) {
  console.log(`术语：${stats.terms.terms} 条，分类 ${stats.terms.categories} 组，含 spec ${stats.terms.withSpec} 条，含来源 ${stats.terms.withSource} 条`);
  console.log(`      触发方式：${Object.entries(stats.terms.triggers).map(([k, v]) => `${k}=${v}`).join('  ')}`);
}
if (stats.grammar && stats.grammar.terms) {
  console.log(`语法：${stats.grammar.terms} 条`);
}
console.log(`导出目标：已实现 ${IMPLEMENTED_TARGETS.join(', ')}；已知 ${KNOWN_TARGETS.length} 个`);

if (warnings.length) {
  console.log(`\n提示（${warnings.length}）：`);
  for (const w of warnings.slice(0, 50)) console.log(`  ! [${w.path}] ${w.message}`);
  if (warnings.length > 50) console.log(`  … 其余 ${warnings.length - 50} 条省略`);
}
if (errors.length) {
  console.log(`\n失败（${errors.length}）：`);
  for (const e of errors.slice(0, 80)) console.log(`  ✗ [${e.path}] ${e.message}`);
  if (errors.length > 80) console.log(`  … 其余 ${errors.length - 80} 条省略`);
  process.exit(1);
}
console.log(`\n全部通过（${warnings.length} 条提示）`);
