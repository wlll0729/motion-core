/* 生成曲线黄金采样：从真实参考实现采样，供 test/curves.test.mjs 回归对比。
 *
 * 运行：node scripts/gen-reference.mjs
 * 参考源：
 *   - film_ai_three/代码工程/lib/motion.js   （MO）
 *   - motion-lexicon/assets/ease.js          （EASE）
 *
 * 黄金文件存在后，参考源被删除或搬走也不影响测试运行。
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const FILM = join(root, '..', 'film_ai_three', '代码工程', 'lib', 'motion.js');
const LEXICON = join(root, '..', 'motion-lexicon', 'assets', 'ease.js');
const OUT = join(root, 'test', 'fixtures', 'reference.json');

const N = 51;
const POINTS = Array.from({ length: N }, (_, i) => i / (N - 1));

function loadVM(file, context) {
  const src = readFileSync(file, 'utf8');
  const ctx = vm.createContext({ ...context });
  vm.runInContext(src, ctx, { filename: file });
  return ctx;
}

const clamp = (t, a = 0, b = 1) => Math.min(b, Math.max(a, t));
const lerp = (a, b, t) => a + (b - a) * t;

if (!existsSync(FILM)) throw new Error(`找不到 film 参考实现：${FILM}`);
if (!existsSync(LEXICON)) throw new Error(`找不到词典参考实现：${LEXICON}`);

const filmCtx = loadVM(FILM, { window: {}, U: { clamp, lerp }, console });
const lexCtx = loadVM(LEXICON, { window: {}, console });
const MO = filmCtx.window.MO;
const EASE = lexCtx.window.EASE;

if (!MO) throw new Error('MO 未定义（检查 lib/motion.js 的依赖）');
if (!EASE) throw new Error('EASE 未定义（检查 assets/ease.js）');

/** core 曲线名 → { ease?: fn, mo?: fn } */
const MAP = {
  linear: { ease: EASE.linear, mo: MO.linear },
  quadOut: { ease: EASE.easeOutQuad },
  cubicIn: { ease: EASE.easeIn, mo: MO.cubicIn },
  cubicOut: { ease: EASE.easeOut, mo: MO.cubicOut },
  cubicInOut: { ease: EASE.easeInOut, mo: MO.cubicInOut },
  quartOut: { ease: EASE.easeOutQuart, mo: MO.quartOut },
  quintOut: { ease: EASE.easeOutQuint, mo: MO.quintOut },
  quintInOut: { mo: MO.quintInOut },
  sineIn: { ease: EASE.easeInSine },
  sineOut: { ease: EASE.easeOutSine },
  sineInOut: { ease: EASE.easeInOutSine, mo: MO.sineInOut },
  circOut: { ease: EASE.easeOutCirc },
  expoIn: { ease: EASE.easeInExpo, mo: MO.expoIn },
  expoOut: { ease: EASE.easeOutExpo, mo: MO.expoOut },
  expoInOut: { ease: EASE.easeInOutExpo, mo: MO.expoInOut },
  backOut: { mo: (t) => MO.backOut(t, 1.70158) },
  elasticOut: { ease: EASE.easeOutElastic, mo: MO.elasticOut },
  bounceOut: { ease: EASE.easeOutBounce },
  smooth: { mo: MO.smooth },
  smoothstep: { ease: EASE.smoothstep },
  smoothCE: { mo: (t) => MO.smoothCE(t, 10) },
  doubleSmooth: { mo: MO.doubleSmooth },
  thereAndBack: { mo: MO.thereAndBack },
  rushInto: { mo: MO.rushInto },
  rushFrom: { mo: MO.rushFrom },
  wiggle: { mo: (t) => MO.wiggle(t, 2) },
  spring: { mo: (t) => MO.spring(t, { duration: 0.5, bounce: 0.15 }) },
  smoothSpring: { mo: MO.smoothSpring },
  snappy: { mo: MO.snappy },
  bouncy: { mo: MO.bouncy },
  springHz: { mo: (t) => MO.springHz(t, 2.5, 9) }
};

const samples = {};
let count = 0;
for (const [name, refs] of Object.entries(MAP)) {
  samples[name] = {};
  for (const [source, fn] of Object.entries(refs)) {
    if (typeof fn !== 'function') throw new Error(`${name}.${source} 不是函数`);
    samples[name][source] = POINTS.map((t) => [t, Number(fn(t))]);
    count++;
  }
}

writeFileSync(OUT, JSON.stringify({
  generatedAt: new Date().toISOString(),
  points: N,
  tolerance: 1e-6,
  sources: { film: FILM, lexicon: LEXICON },
  samples
}, null, 2) + '\n', 'utf8');

console.log(`写入 ${OUT}`);
console.log(`曲线 ${Object.keys(samples).length} 条，参考函数 ${count} 个，每条 ${N} 点`);
