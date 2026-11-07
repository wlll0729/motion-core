/* motion-core · ESM → UMD 构建（无第三方依赖）。
 *
 * 模块图小、无循环依赖、只用命名导入，所以这里用手写转换而不是打包器。
 * 运行：node scripts/build-umd.mjs
 * 产物：dist/core.umd.js（暴露 window.MC）
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const ENTRY = join(SRC, 'browser.js');
const OUT = join(ROOT, 'dist', 'core.umd.js');

const key = (abs) => relative(SRC, abs).replace(/\\/g, '/').replace(/\.js$/, '');
const rel = (from, to) => {
  const p = relative(dirname(from), to).replace(/^\.\//, '');
  return p.startsWith('.') ? p : './' + p;
};

/* ---------- 收集与拓扑排序 ---------- */

const graph = new Map(); // key -> {abs, code, imports, exportsSet, defaultExport, deps}

function collect(abs) {
  const k = key(abs);
  if (graph.has(k)) return;
  const raw = readFileSync(abs, 'utf8');

  const imports = []; // {depKey, localList}
  const exportsSet = new Set();
  let defaultExport = null;
  let code = raw;

  code = code.replace(/^import\s+\{([^}]*)\}\s+from\s+['"]([^'"]+)['"];?\s*$/gm, (m, clause, path) => {
    if (path.startsWith('node:')) return '';
    const depKey = key(resolve(dirname(abs), path));
    const localList = [];
    for (const part of clause.split(',')) {
      const p = part.trim();
      if (!p) continue;
      const am = p.match(/^(\w+)\s+as\s+(\w+)$/);
      localList.push(am ? `${am[1]}: ${am[2]}` : p);
    }
    imports.push({ depKey, localList });
    return '';
  });

  code = code.replace(/^export\s+(const|let|var|function|class|async\s+function)\s+([A-Za-z_$][\w$]*)/gm,
    (m, kw, name) => { exportsSet.add(name); return `${kw} ${name}`; });

  code = code.replace(/^export\s+\{([^}]*)\}\s*;?\s*$/gm, (m, clause) => {
    for (const part of clause.split(',')) {
      const p = part.trim();
      if (!p) continue;
      const am = p.match(/^(\w+)\s+as\s+(\w+)$/);
      exportsSet.add(am ? am[1] : p);
    }
    return '';
  });

  code = code.replace(/^export\s+default\s+/m, () => { defaultExport = '__default'; return 'const __default = '; });

  graph.set(k, { abs, code, imports, exportsSet, defaultExport, deps: imports.map((x) => x.depKey) });
}

/* DFS 收集 */
function walk(abs) {
  collect(abs);
  for (const dep of graph.get(key(abs)).deps) {
    const depAbs = join(SRC, dep + '.js');
    if (!graph.has(dep)) walk(depAbs);
  }
}
walk(ENTRY);

/* 拓扑排序（依赖在前） */
const order = [];
const seen = new Set();
function topo(k) {
  if (seen.has(k)) return;
  seen.add(k);
  for (const d of graph.get(k).deps) topo(d);
  order.push(k);
}
topo(key(ENTRY));

/* ---------- 生成 UMD ---------- */

const vocab = (name) => JSON.parse(readFileSync(join(ROOT, 'vocab', name), 'utf8'));

const parts = [];
parts.push(`/* motion-core v${vocab('curves.v1.json').version} · UMD 构建 · 由 scripts/build-umd.mjs 生成 */`);
parts.push(`/* 曲线 ${vocab('curves.v1.json').curves.length} 条 · 术语 ${vocab('terms.v1.json').terms.length} 条 · 语法 ${vocab('grammar.film.v1.json').grammars.length} 条 */`);
parts.push(`(function (global, factory) {`);
parts.push(`  const core = factory();`);
parts.push(`  if (typeof module === 'object' && module.exports) module.exports = core;`);
parts.push(`  else global.MC = core;`);
parts.push(`})(typeof window !== 'undefined' ? window : globalThis, function () {`);
parts.push(`'use strict';`);
parts.push(`const __vocab = {`);
parts.push(`  curves: ${JSON.stringify(vocab('curves.v1.json'))},`);
parts.push(`  terms: ${JSON.stringify(vocab('terms.v1.json'))},`);
parts.push(`  grammar: ${JSON.stringify(vocab('grammar.film.v1.json'))}`);
parts.push(`};`);
parts.push(`const __m = {};`);

for (const k of order) {
  const mod = graph.get(k);
  const params = mod.imports.map((im, idx) => `__d${idx}`);
  const destructure = mod.imports.map((im, idx) => `const { ${im.localList.join(', ')} } = __d${idx};`);
  const ret = [];
  for (const e of mod.exportsSet) ret.push(e);
  if (mod.defaultExport) ret.push(`default: ${mod.defaultExport}`);
  parts.push(`__m[${JSON.stringify(k)}] = (function (${params.join(', ')}) {`);
  if (destructure.length) parts.push(destructure.join('\n'));
  parts.push(mod.code);
  parts.push(`return { ${ret.join(', ')} };`);
  parts.push(`})(${mod.imports.map((im) => `__m[${JSON.stringify(im.depKey)}]`).join(', ')});`);
}

parts.push(`const core = __m[${JSON.stringify(key(ENTRY))}].createBrowserCore({`);
parts.push(`  curves: __vocab.curves, terms: __vocab.terms, grammar: __vocab.grammar`);
parts.push(`});`);
parts.push(`core.__vocab = __vocab;`);
parts.push(`return core;`);
parts.push(`});`);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, parts.join('\n') + '\n', 'utf8');

const kb = (readFileSync(OUT).length / 1024).toFixed(1);
console.log(`写入 ${OUT}（${kb} KB）`);
console.log(`模块 ${order.length} 个：${order.join(', ')}`);
