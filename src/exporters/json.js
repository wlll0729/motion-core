/* motion-core · exporters/json.js
   输出归一化后的 spec，可选附带 resolved 曲线采样表。 */

import { normalizeSpec, duration } from '../spec.js';

export const json = {
  target: 'json',
  label: 'JSON（结构化 spec）',
  export(spec, { registry, resolved = true } = {}) {
    const warnings = [];
    const n = normalizeSpec(spec);
    const out = {
      ...n,
      _meta: {
        generator: 'motion-core',
        duration: duration(n),
        resolved: resolved ? 'samples' : false
      }
    };

    if (resolved && registry) {
      out._curves = {};
      for (const seg of n.timeline) {
        const entry = registry.byName(seg.ease);
        if (!entry) { warnings.push(`曲线不存在：${seg.ease}`); continue; }
        out._curves[entry.name] = sample(entry.fn, 33);
      }
      for (const cam of n.camera || []) {
        if (!cam.ease) continue;
        const entry = registry.byName(cam.ease);
        if (entry) out._curves[entry.name] = sample(entry.fn, 33);
      }
    }

    return { code: JSON.stringify(out, null, 2), status: 'native', warnings };
  }
};

function sample(fn, n) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    pts.push([Number(t.toFixed(4)), Number(fn(t).toFixed(6))]);
  }
  return pts;
}
