/* motion-core · src/browser.js
   浏览器 / UMD 入口：不依赖 node:fs，词表由构建时内联传入。
   与 src/index.js 的区别：index.js 是 Node 入口（从磁盘读 vocab）。 */

import { createRegistry, CurveNotFoundError } from './registry.js';
import { buildCurve, IMPLS, BEZIER, SPRING, clamp01 } from './curves.js';
import {
  normalizeSpec, validateSpec, duration, toMs, toSec, SpecError,
  PROPS, TARGETS, UNITS, DIRECTIONS, FILLS, STAGGER_FROM, CAMERA_KINDS, RM_STRATEGIES
} from './spec.js';
import {
  createExporters, exportSpec,
  css, cssTransition, waapi, gsap, framer, swift, compose, tailwind,
  filmMo, filmRk, filmCamera, json
} from './exporters/index.js';
import { lintAll, lintCurves, lintTerms, KNOWN_TARGETS, IMPLEMENTED_TARGETS } from './lint.js';
import { cssEasing, sampleLinear, composeDeclarations } from './exporters/_util.js';

/**
 * 用内联词表构建一个 core 实例。
 * @param {{curves?:object, terms?:object, grammar?:object}} vocabs
 */
export function createBrowserCore(vocabs = {}) {
  const curvesVocab = vocabs.curves || { version: 1, platforms: [], curves: [] };
  const registry = createRegistry(curvesVocab);
  const exporters = createExporters(registry);

  return {
    version: curvesVocab.version,
    curvesVocab,
    termsVocab: vocabs.terms || null,
    grammarVocab: vocabs.grammar || null,
    registry,
    exporters,

    /** 通用导出入口：core.export(spec, target, opts) */
    export: (spec, target, opts = {}) => exportSpec(spec, target, { registry, ...opts }),
    /** 便捷方法：绑定默认 registry */
    validate: (spec) => validateSpec(spec, registry),
    normalize: normalizeSpec,
    duration,

    lint: (opts = {}) => lintAll({
      curvesVocab,
      termsVocab: vocabs.terms || undefined,
      grammarVocab: vocabs.grammar || undefined
    }, opts),

    /* 原语与常量 */
    CurveNotFoundError, SpecError,
    buildCurve, IMPLS, BEZIER, SPRING, clamp01,
    normalizeSpec, validateSpec, duration, toMs, toSec,
    KNOWN_TARGETS, IMPLEMENTED_TARGETS,
    PROPS, TARGETS, UNITS, DIRECTIONS, FILLS, STAGGER_FROM, CAMERA_KINDS, RM_STRATEGIES,

    /* 单个导出器（便于直接调用） */
    css, cssTransition, waapi, gsap, framer, swift, compose, tailwind,
    filmMo, filmRk, filmCamera, json,

    /* 工具：词典等消费方需要把曲线条目转成 CSS easing 字符串 */
    cssEasing, sampleLinear, composeDeclarations,
  };
}
