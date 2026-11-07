/* motion-core · exporters/film-camera.js
   把 spec.camera 段转成 film_ai_three 的 CAM.track 事件表。
   对照：film_ai_three/代码工程/lib/camera.js 的 CAM.track(base, events, t)
 */

export const filmCamera = {
  target: 'film-camera',
  label: '影片 / 镜头（CAM）',
  export(spec, { registry, base = '{ x: 960, y: 540, z: 1 }' } = {}) {
    const warnings = [];
    if (!Array.isArray(spec.camera) || spec.camera.length === 0) {
      return { code: '', status: 'unavailable', warnings, reason: 'spec 没有 camera 段' };
    }

    const events = [];
    for (const c of spec.camera) {
      if (c.ease && registry && !registry.has(c.ease)) {
        warnings.push(`镜头曲线不存在：${c.ease}`);
      }
      const to = c.to || {};
      switch (c.kind) {
        case 'glide':
        case 'pan':
          events.push({ at: c.at, kind: c.kind, x: to.x, y: to.y, z: to.z ?? 1, dur: c.dur });
          break;
        case 'slam':
          events.push({ at: c.at, kind: 'slam', from: c.from ?? 1.55, dur: c.dur });
          break;
        case 'shake':
          events.push({ at: c.at, kind: 'shake', amp: c.amp ?? 14, dur: c.dur });
          break;
        case 'cut':
          events.push({ at: c.at, kind: 'cut', x: to.x, y: to.y, z: to.z ?? 1 });
          break;
        case 'push':
          warnings.push('push 用 CAM.pushTo，不在 CAM.track 事件表里；请单独调用');
          break;
        default:
          warnings.push(`未知镜头动作：${c.kind}`);
      }
    }

    const code = [
      `// motion-core → film-camera · ${spec.id} · ${events.length} 个镜头事件`,
      `const cam = CAM.track(${base}, ${JSON.stringify(events, null, 2)}, t);`,
      `CAM.apply(c, cam);   // 或 CAM.with(c, cam, () => { /* 画本镜 */ });`
    ].join('\n');

    return { code, status: 'native', warnings };
  }
};
