/* ============================================================
   motion-core · index.js（Node 入口）
   浏览器请直接用 curves.js / registry.js 的 ESM，
   或加载构建产物 core.umd.js（Phase 1 提供）。
   ============================================================ */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createRegistry } from './registry.js';
import { buildCurve, IMPLS, BEZIER, SPRING, clamp01 } from './curves.js';

const here = dirname(fileURLToPath(import.meta.url));
export const VOCAB_DIR = join(here, '..', 'vocab');

export function loadJSON(name) {
  return JSON.parse(readFileSync(join(VOCAB_DIR, name), 'utf8'));
}

export const curvesVocab = loadJSON('curves.v1.json');
export const registry = createRegistry(curvesVocab);

export { createRegistry, buildCurve, IMPLS, BEZIER, SPRING, clamp01 };
export { CurveNotFoundError } from './registry.js';
export { createExporters, exportSpec } from './exporters/index.js';
export { normalizeSpec, validateSpec, duration, SpecError } from './spec.js';
export { lintAll, lintCurves, lintTerms, KNOWN_TARGETS, IMPLEMENTED_TARGETS } from './lint.js';
