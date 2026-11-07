/* motion-core · exporters/index.js
   导出器工厂：createExporters(registry) → { css, waapi, 'film-mo', 'film-rk', json }
   以及通用入口 export(spec, target, opts)。 */

import { css, cssTransition } from './css.js';
import { waapi } from './waapi.js';
import { gsap } from './gsap.js';
import { framer } from './framer.js';
import { swift } from './swift.js';
import { compose } from './compose.js';
import { tailwind } from './tailwind.js';
import { filmMo, filmRk } from './film-mo.js';
import { filmCamera } from './film-camera.js';
import { json } from './json.js';
import { IMPLEMENTED_TARGETS } from '../lint.js';

const ALL = {
  css,
  'css-transition': cssTransition,
  waapi,
  gsap,
  framer,
  swift,
  compose,
  tailwind,
  'film-mo': filmMo,
  'film-rk': filmRk,
  'film-camera': filmCamera,
  json
};

export function createExporters(registry) {
  const bound = {};
  for (const [key, exporter] of Object.entries(ALL)) {
    bound[key] = (spec, opts = {}) => exporter.export(spec, { registry, ...opts });
  }
  return bound;
}

/**
 * 通用导出入口。
 * @param {object} spec
 * @param {string} target
 * @param {{registry?:object, [k:string]:any}} opts
 */
export function exportSpec(spec, target, opts = {}) {
  const exporter = ALL[target];
  if (!exporter) {
    return {
      code: '',
      status: 'unavailable',
      warnings: [],
      reason: `未知导出目标：${target}（已实现：${IMPLEMENTED_TARGETS.join(', ')}）`
    };
  }
  return exporter.export(spec, opts);
}

export { css, cssTransition, waapi, gsap, framer, swift, compose, tailwind, filmMo, filmRk, filmCamera, json };
