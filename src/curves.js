/* ============================================================
   motion-core · curves.js
   曲线纯函数实现。所有曲线都是 f(t) → v，t 被 clamp 到 [0,1]，
   输出允许超出 [0,1]（过冲）。无状态、无随机、无时钟。

   实现来源（逐点对齐，误差 < 1e-6）：
     - film_ai_three/代码工程/lib/motion.js  （MO）
     - motion-lexicon/assets/ease.js          （EASE / bezierFn）
     - vibe-reel/engine/render_api.js         （E 表）
   ============================================================ */

export const clamp01 = (t) => (t < 0 ? 0 : t > 1 ? 1 : t);

const C1 = 1.70158;
const C3 = C1 + 1;
const C4 = (2 * Math.PI) / 3;

/* ---------- 基础实现 ---------- */

const linear = (t) => t;

const quadIn = (t) => t * t;
const quadOut = (t) => 1 - (1 - t) * (1 - t);
const quadInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

const cubicIn = (t) => t * t * t;
const cubicOut = (t) => 1 - Math.pow(1 - t, 3);
const cubicInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const quartIn = (t) => t * t * t * t;
const quartOut = (t) => 1 - Math.pow(1 - t, 4);
const quartInOut = (t) => (t < 0.5 ? 8 * t ** 4 : 1 - Math.pow(-2 * t + 2, 4) / 2);

const quintIn = (t) => t ** 5;
const quintOut = (t) => 1 - Math.pow(1 - t, 5);
const quintInOut = (t) => (t < 0.5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2);

const sineIn = (t) => 1 - Math.cos((t * Math.PI) / 2);
const sineOut = (t) => Math.sin((t * Math.PI) / 2);
const sineInOut = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

const circIn = (t) => 1 - Math.sqrt(1 - t * t);
const circOut = (t) => Math.sqrt(1 - Math.pow(t - 1, 2));

const expoIn = (t) => (t <= 0 ? 0 : Math.pow(2, 10 * t - 10));
const expoOut = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const expoInOut = (t) => (t <= 0 ? 0 : t >= 1 ? 1
  : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2
    : (2 - Math.pow(2, -20 * t + 10)) / 2);

const backOut = ({ s = C1 } = {}) => (t) => { const q = t - 1; return 1 + (s + 1) * q * q * q + s * q * q; };
const backIn = ({ s = C1 } = {}) => (t) => (s + 1) * t * t * t - s * t * t;
const backInOut = ({ s = C1 * 1.525 } = {}) => (t) => (t < 0.5
  ? (Math.pow(2 * t, 2) * ((s + 1) * 2 * t - s)) / 2
  : (Math.pow(2 * t - 2, 2) * ((s + 1) * (t * 2 - 2) + s) + 2) / 2);

const elasticOut = (t) => (t <= 0 ? 0 : t >= 1 ? 1
  : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * C4) + 1);
const elasticIn = (t) => (t <= 0 ? 0 : t >= 1 ? 1
  : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * C4));

const bounceOut = (t) => {
  const n1 = 7.5625, d1 = 2.75;
  if (t < 1 / d1) return n1 * t * t;
  if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
  if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
  return n1 * (t -= 2.625 / d1) * t + 0.984375;
};
const bounceIn = (t) => 1 - bounceOut(1 - t);

/* manim smooth = 6t⁵ − 15t⁴ + 10t³（两端速度、加速度都为 0） */
const smooth = (t) => { t = clamp01(t); return t * t * t * (10 - 15 * t + 6 * t * t); };
/* 三次 smoothstep = 3t² − 2t³（vibe-reel E.smooth / ease.js smoothstep） */
const smoothstep = (t) => { t = clamp01(t); return t * t * (3 - 2 * t); };

const sig = (x) => 1 / (1 + Math.exp(-x));
const smoothCE = ({ inflection = 10 } = {}) => {
  const e = sig(-inflection / 2);
  return (t) => clamp01((sig(inflection * (t - 0.5)) - e) / (1 - 2 * e));
};

const doubleSmooth = (t) => (t < 0.5 ? 0.5 * smooth(2 * t) : 0.5 * (1 + smooth(2 * t - 1)));
const thereAndBack = (t) => smooth(t < 0.5 ? 2 * t : 2 * (1 - t));
const rushInto = (t) => 2 * smooth(t / 2);
const rushFrom = (t) => 2 * smooth(t / 2 + 0.5) - 1;
const wiggle = ({ wiggles = 2 } = {}) => (t) => thereAndBack(t) * Math.sin(wiggles * Math.PI * t);

/* SwiftUI 参数化弹簧（WWDC23 Animate with springs） */
const spring = ({ duration = 0.5, bounce = 0, v0 = 0 } = {}) => (t) => {
  if (t <= 0) return 0;
  const w = (2 * Math.PI) / duration;
  const z = 1 - bounce;
  let x;
  if (Math.abs(z - 1) < 1e-4) {
    x = Math.exp(-w * t) * (1 + (w - v0) * t);
  } else if (z < 1) {
    const wd = w * Math.sqrt(1 - z * z);
    x = Math.exp(-z * w * t) * (Math.cos(wd * t) + ((z * w - v0) / wd) * Math.sin(wd * t));
  } else {
    const r = Math.sqrt(z * z - 1);
    const a = -w * (z - r), b = -w * (z + r);
    const A = (-v0 - b) / (a - b);
    x = A * Math.exp(a * t) + (1 - A) * Math.exp(b * t);
  }
  return 1 - x;
};

/* 频率/衰减参数化的欠阻尼弹簧阶跃响应（动态文字用） */
const springHz = ({ freq = 2.5, decay = 9 } = {}) => (t) =>
  (t <= 0 ? 0 : 1 - Math.exp(-decay * t) * Math.cos(2 * Math.PI * freq * t));

/* 到位后的余振（Dan Ebberts 惯性回弹）：amp·sin(2πft)/e^(decay·t)。
   注意这是「位移」函数，不是 0→1 进度函数——导出器要知道区别。 */
const settle = ({ amp = 1, freq = 3, decay = 5 } = {}) => (t) =>
  (t <= 0 ? 0 : amp * Math.sin(2 * Math.PI * freq * t) / Math.exp(decay * t));

/* CSS steps(n)：默认 jump-end */
const steps = ({ n = 6, mode = 'end' } = {}) => (t) => {
  t = clamp01(t);
  if (mode === 'start') return Math.min(1, Math.ceil(t * n) / n);
  if (mode === 'none') return Math.min(1, Math.floor(t * n) / (n - 1));
  return t >= 1 ? 1 : Math.floor(t * n) / n;
};

/* 三次贝塞尔求解：牛顿迭代由 x 求参数，再取 y（照搬 MO.bezier / ease.js bezierFn） */
const bezier = (x1, y1, x2, y2) => {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const X = (s) => ((ax * s + bx) * s + cx) * s;
  const Y = (s) => ((ay * s + by) * s + cy) * s;
  const dX = (s) => (3 * ax * s + 2 * bx) * s + cx;
  return (p) => {
    if (p <= 0) return 0;
    if (p >= 1) return 1;
    let s = p;
    for (let k = 0; k < 8; k++) {
      const e = X(s) - p, d = dX(s);
      if (Math.abs(e) < 1e-6 || Math.abs(d) < 1e-6) break;
      s -= e / d;
    }
    s = clamp01(s);
    return Y(s);
  };
};

/* ---------- 实现注册表 ---------- */

export const IMPLS = {
  linear: () => linear,
  quadIn: () => quadIn, quadOut: () => quadOut, quadInOut: () => quadInOut,
  cubicIn: () => cubicIn, cubicOut: () => cubicOut, cubicInOut: () => cubicInOut,
  quartIn: () => quartIn, quartOut: () => quartOut, quartInOut: () => quartInOut,
  quintIn: () => quintIn, quintOut: () => quintOut, quintInOut: () => quintInOut,
  sineIn: () => sineIn, sineOut: () => sineOut, sineInOut: () => sineInOut,
  circIn: () => circIn, circOut: () => circOut,
  expoIn: () => expoIn, expoOut: () => expoOut, expoInOut: () => expoInOut,
  backOut, backIn, backInOut,
  elasticOut: () => elasticOut, elasticIn: () => elasticIn,
  bounceOut: () => bounceOut, bounceIn: () => bounceIn,
  smooth: () => smooth, smoothstep: () => smoothstep, smoothCE,
  doubleSmooth: () => doubleSmooth, thereAndBack: () => thereAndBack,
  rushInto: () => rushInto, rushFrom: () => rushFrom, wiggle,
  spring, springHz, steps, settle,
  bezier: (args) => bezier(args[0], args[1], args[2], args[3])
};

/* ---------- 由 def 构建曲线 ---------- */

/**
 * @param {{fn:string, args?:object|number[]}} def
 * @returns {(t:number)=>number}
 */
export function buildCurve(def) {
  const impl = IMPLS[def.fn];
  if (!impl) throw new Error(`未知曲线实现：${def.fn}`);
  const fn = def.args === undefined ? impl() : impl(def.args);
  if (typeof fn !== 'function') throw new Error(`曲线实现未返回函数：${def.fn}`);
  return (t) => {
    const v = fn(clamp01(+t));
    return Number.isFinite(v) ? v : 0;
  };
}

/* 常用常量（供导出器与测试直接使用） */
export const BEZIER = {
  easeIn: [0.32, 0, 0.67, 0],
  easeOut: [0.33, 1, 0.68, 1],
  easeInOut: [0.65, 0, 0.35, 1],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutCirc: [0, 0.55, 0.45, 1],
  emphasized: [0.2, 0, 0, 1],
  material: [0.4, 0, 0.2, 1],
  quickCut: [0.85, 0, 0.15, 1],
  appleOut: [0.25, 0.1, 0.25, 1],
  k75: [0.75, 0, 0.25, 1],
  easyEase: [0.333, 0, 0.667, 1],
  longTail: [0.33, 0, 0.2, 1]
};

export const SPRING = {
  smooth: { duration: 0.5, bounce: 0 },
  snappy: { duration: 0.5, bounce: 0.15 },
  bouncy: { duration: 0.5, bounce: 0.3 }
};
