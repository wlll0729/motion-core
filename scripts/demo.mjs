/* 端到端演示。
 *   node scripts/demo.mjs                 # examples/*.json 全部导出
 *   node scripts/demo.mjs --term stagger  # 按术语 ID 从 vocab 导出
 *   node scripts/demo.mjs --random 5      # 随机抽 5 条含 spec 的术语
 */
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { registry, createExporters, validateSpec, duration } from '../src/index.js';
import { IMPLEMENTED_TARGETS } from '../src/lint.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const ex = createExporters(registry);

function show(spec, label) {
  const v = validateSpec(spec, registry);
  console.log(`\n${'='.repeat(72)}`);
  console.log(`${label} · ${spec.id} · 时长 ${duration(spec)}s · ${v.ok ? '✓ 校验通过' : '✗ 校验失败'}`);
  if (!v.ok) for (const e of v.errors) console.log(`  ✗ ${e.path}: ${e.message}`);
  for (const target of IMPLEMENTED_TARGETS) {
    const r = ex[target](spec);
    console.log(`\n--- ${target} · ${r.status} ${r.reason ? '(' + r.reason + ')' : ''} ---`);
    console.log(r.code || '(无代码)');
    for (const w of r.warnings) console.log(`  ! ${w}`);
  }
}

if (args.includes('--term')) {
  const id = args[args.indexOf('--term') + 1];
  const vocab = JSON.parse(readFileSync(join(ROOT, 'vocab', 'terms.v1.json'), 'utf8'));
  const term = vocab.terms.find((t) => t.id === id);
  if (!term) { console.error(`术语不存在：${id}`); process.exit(2); }
  if (!term.spec) { console.error(`术语 ${id} 没有 spec（演示是交互/JS 驱动的）`); process.exit(2); }
  show(term.spec, `术语 ${term.zh} / ${term.en}`);
  process.exit(0);
}

if (args.includes('--random')) {
  const n = Number(args[args.indexOf('--random') + 1] || 5);
  const vocab = JSON.parse(readFileSync(join(ROOT, 'vocab', 'terms.v1.json'), 'utf8'));
  const pool = vocab.terms.filter((t) => t.spec);
  const picked = pool.sort(() => Math.random() - 0.5).slice(0, n);
  for (const t of picked) show(t.spec, `术语 ${t.zh} / ${t.en}`);
  process.exit(0);
}

const only = args.find((a) => !a.startsWith('-'));
const dir = join(ROOT, 'examples');
const files = readdirSync(dir).filter((f) => f.endsWith('.json') && (!only || f.includes(only)));
if (files.length === 0) {
  console.error(`没有匹配的示例：${only || '(空)'}`);
  process.exit(2);
}
for (const f of files) {
  const spec = JSON.parse(readFileSync(join(dir, f), 'utf8'));
  show(spec, '示例');
}
