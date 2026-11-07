/* motion-core v1 · UMD 构建 · 由 scripts/build-umd.mjs 生成 */
/* 曲线 57 条 · 术语 244 条 · 语法 8 条 */
(function (global, factory) {
  const core = factory();
  if (typeof module === 'object' && module.exports) module.exports = core;
  else global.MC = core;
})(typeof window !== 'undefined' ? window : globalThis, function () {
'use strict';
const __vocab = {
  curves: {"version":1,"platforms":["css","waapi","gsap","framer","swift","compose","tailwind","film-mo","film-rk","json","film-camera"],"curves":[{"name":"linear","label":{"zh":"线性 / 匀速","en":"Linear"},"family":"basic","def":{"fn":"linear"},"equiv":{"css":"linear","gsap":"none","framer":"linear","mo":"MO.linear","rk":"E.linear"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"native","compose":"native","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"匀速。只适合无始无终的持续运动（旋转、跑马灯、进度填充）。","aliases":[]},{"name":"smoothstep","label":{"zh":"平滑阶梯（三次）","en":"Smoothstep (cubic)"},"family":"basic","def":{"fn":"smoothstep"},"equiv":{"css":"linear(0, 0.125, 0.375, 0.625, 0.875, 1)","mo":"MO.byName('smoothstep')","rk":"E.byName('smoothstep')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"approximate","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"3t²−2t³。vibe-reel 的 E.smooth、ease.js 的 smoothstep。注意与五次版 smooth 区分。","aliases":[]},{"name":"smooth","label":{"zh":"平滑（五次 · manim）","en":"Smooth (quintic, manim)"},"family":"basic","def":{"fn":"smooth"},"equiv":{"mo":"MO.smooth","rk":"E.smooth"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"approximate","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"6t⁵−15t⁴+10t³，两端速度、加速度都为 0。3b1b/manim 默认缓动，讲解类片子的主力。","aliases":[]},{"name":"smoothCE","label":{"zh":"平滑（ManimCE 版）","en":"Smooth (ManimCE)"},"family":"basic","def":{"fn":"smoothCE","args":{"inflection":10}},"params":[{"name":"inflection","default":10,"min":1,"max":40}],"equiv":{"mo":"MO.smoothCE","rk":"E.byName('smoothCE')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"approximate","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"sigmoid 版 smooth，ManimCE 的 rate_functions.smooth。","aliases":[]},{"name":"doubleSmooth","label":{"zh":"双段平滑","en":"Double smooth"},"family":"basic","def":{"fn":"doubleSmooth"},"equiv":{"mo":"MO.doubleSmooth","rk":"E.byName('doubleSmooth')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"approximate","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"两段 smooth 拼接，中段更平缓。","aliases":[]},{"name":"thereAndBack","label":{"zh":"去了又回","en":"There and back"},"family":"basic","def":{"fn":"thereAndBack"},"equiv":{"mo":"MO.thereAndBack","rk":"E.byName('thereAndBack')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"approximate","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"0→1→0，用于 Indicate 一类「点一下」的强调。","aliases":[]},{"name":"rushInto","label":{"zh":"慢起冲进","en":"Rush into"},"family":"in","def":{"fn":"rushInto"},"equiv":{"mo":"MO.rushInto","rk":"E.byName('rushInto')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"approximate","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"2·smooth(t/2)，慢起、冲进终点。","aliases":[]},{"name":"rushFrom","label":{"zh":"冲出慢收","en":"Rush from"},"family":"out","def":{"fn":"rushFrom"},"equiv":{"mo":"MO.rushFrom","rk":"E.byName('rushFrom')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"approximate","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"2·smooth(t/2+0.5)−1，冲出、慢收。","aliases":[]},{"name":"wiggle","label":{"zh":"摆动","en":"Wiggle"},"family":"basic","def":{"fn":"wiggle","args":{"wiggles":2}},"params":[{"name":"wiggles","default":2,"min":1,"max":10}],"equiv":{"mo":"MO.wiggle","rk":"E.byName('wiggle')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"approximate","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"去了又回 × 正弦，用于抖动/犹豫。","aliases":[]},{"name":"quadIn","label":{"zh":"二次加速","en":"Quad in"},"family":"in","def":{"fn":"quadIn"},"equiv":{"mo":"MO.byName('quadIn')","rk":"E.byName('quadIn')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"t²","aliases":[]},{"name":"quadOut","label":{"zh":"二次减速","en":"Quad out"},"family":"out","def":{"fn":"quadOut"},"equiv":{"gsap":"power1.out","rk":"E.byName('quadOut')","mo":"MO.byName('quadOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"1−(1−t)²","aliases":[]},{"name":"quadInOut","label":{"zh":"二次缓入缓出","en":"Quad in-out"},"family":"in-out","def":{"fn":"quadInOut"},"equiv":{"mo":"MO.byName('quadInOut')","rk":"E.byName('quadInOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","film-camera":"native","json":"native","css-transition":"approximate"},"aliases":[],"note":"2t² / 1−(−2t+2)²/2。vibe-reel 的 E.io 就是它。"},{"name":"cubicIn","label":{"zh":"三次加速","en":"Cubic in"},"family":"in","def":{"fn":"cubicIn"},"equiv":{"gsap":"power2.in","mo":"MO.cubicIn","rk":"E.byName('cubicIn')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"t³","aliases":[]},{"name":"cubicOut","label":{"zh":"三次减速","en":"Cubic out"},"family":"out","def":{"fn":"cubicOut"},"equiv":{"gsap":"power2.out","mo":"MO.cubicOut","rk":"E.byName('cubicOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"1−(1−t)³。与 easeOut（贝塞尔）不同，二者都保留。","aliases":[]},{"name":"cubicInOut","label":{"zh":"三次缓入缓出","en":"Cubic in-out"},"family":"in-out","def":{"fn":"cubicInOut"},"equiv":{"gsap":"power2.inOut","mo":"MO.cubicInOut","rk":"E.byName('cubicInOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"标准三次缓入缓出。","aliases":[]},{"name":"quartIn","label":{"zh":"四次加速","en":"Quart in"},"family":"in","def":{"fn":"quartIn"},"equiv":{"mo":"MO.byName('quartIn')","gsap":"power3.in","rk":"E.byName('quartIn')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"t⁴","aliases":[]},{"name":"quartOut","label":{"zh":"四次减速","en":"Quart out"},"family":"out","def":{"fn":"quartOut"},"equiv":{"mo":"MO.quartOut","gsap":"power3.out","rk":"E.byName('quartOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"1−(1−t)⁴","aliases":[]},{"name":"quartInOut","label":{"zh":"四次缓入缓出","en":"Quart in-out"},"family":"in-out","def":{"fn":"quartInOut"},"equiv":{"mo":"MO.byName('quartInOut')","gsap":"power3.inOut","rk":"E.byName('quartInOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"四次缓入缓出。","aliases":[]},{"name":"quintIn","label":{"zh":"五次加速","en":"Quint in"},"family":"in","def":{"fn":"quintIn"},"equiv":{"mo":"MO.byName('quintIn')","gsap":"power4.in","rk":"E.byName('quintIn')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"t⁵","aliases":[]},{"name":"quintOut","label":{"zh":"五次减速","en":"Quint out"},"family":"out","def":{"fn":"quintOut"},"equiv":{"mo":"MO.quintOut","gsap":"power4.out","rk":"E.byName('quintOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"1−(1−t)⁵。词典里卡片滑入用的就是它。","aliases":[]},{"name":"quintInOut","label":{"zh":"五次缓入缓出","en":"Quint in-out"},"family":"in-out","def":{"fn":"quintInOut"},"equiv":{"mo":"MO.quintInOut","gsap":"power4.inOut","rk":"E.byName('quintInOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"五次缓入缓出。","aliases":[]},{"name":"sineIn","label":{"zh":"正弦加速","en":"Sine in"},"family":"in","def":{"fn":"sineIn"},"equiv":{"gsap":"sine.in","mo":"MO.byName('sineIn')","rk":"E.byName('sineIn')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"1−cos(t·π/2)","aliases":[]},{"name":"sineOut","label":{"zh":"正弦减速","en":"Sine out"},"family":"out","def":{"fn":"sineOut"},"equiv":{"gsap":"sine.out","mo":"MO.byName('sineOut')","rk":"E.byName('sineOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"sin(t·π/2)。最温和的减速。","aliases":[]},{"name":"sineInOut","label":{"zh":"正弦缓入缓出","en":"Sine in-out"},"family":"in-out","def":{"fn":"sineInOut"},"equiv":{"gsap":"sine.inOut","mo":"MO.sineInOut","rk":"E.byName('sineInOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"−(cos(πt)−1)/2","aliases":[]},{"name":"circIn","label":{"zh":"圆弧加速","en":"Circ in"},"family":"in","def":{"fn":"circIn"},"equiv":{"gsap":"circ.in","mo":"MO.byName('circIn')","rk":"E.byName('circIn')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"1−√(1−t²)","aliases":[]},{"name":"circOut","label":{"zh":"圆弧减速","en":"Circ out"},"family":"out","def":{"fn":"circOut"},"equiv":{"gsap":"circ.out","mo":"MO.byName('circOut')","rk":"E.byName('circOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"√(1−(t−1)²)。末端极缓，常用于大面积转场。","aliases":[]},{"name":"expoIn","label":{"zh":"指数加速","en":"Expo in"},"family":"in","def":{"fn":"expoIn"},"equiv":{"gsap":"expo.in","mo":"MO.expoIn","rk":"E.byName('expoIn')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"2^(10t−10)","aliases":[]},{"name":"expoOut","label":{"zh":"指数减速","en":"Expo out"},"family":"out","def":{"fn":"expoOut"},"equiv":{"gsap":"expo.out","mo":"MO.expoOut","rk":"E.byName('expoOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"1−2^(−10t)。动效设计最常用的「快出慢停」。","aliases":[]},{"name":"expoInOut","label":{"zh":"指数缓入缓出","en":"Expo in-out"},"family":"in-out","def":{"fn":"expoInOut"},"equiv":{"gsap":"expo.inOut","mo":"MO.expoInOut","rk":"E.byName('expoInOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"指数缓入缓出。","aliases":[]},{"name":"backOut","label":{"zh":"回弹减速","en":"Back out"},"family":"back","def":{"fn":"backOut","args":{"s":1.70158}},"params":[{"name":"s","default":1.70158,"min":0,"max":6}],"equiv":{"gsap":"back.out(1.7)","mo":"MO.backOut","rk":"E.byName('backOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"s=1.70158 约 10% 过冲；2.2 约 13%；2.6 约 17%；3.5 约 23%。","aliases":[]},{"name":"backIn","label":{"zh":"回弹加速","en":"Back in"},"family":"back","def":{"fn":"backIn","args":{"s":1.70158}},"params":[{"name":"s","default":1.70158,"min":0,"max":6}],"equiv":{"gsap":"back.in(1.7)","mo":"MO.byName('backIn')","rk":"E.byName('backIn')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"起手反向预备（anticipation）。","aliases":[]},{"name":"backInOut","label":{"zh":"回弹缓入缓出","en":"Back in-out"},"family":"back","def":{"fn":"backInOut","args":{"s":2.590909}},"params":[{"name":"s","default":2.590909,"min":0,"max":10}],"equiv":{"gsap":"back.inOut(1.7)","mo":"MO.byName('backInOut')","rk":"E.byName('backInOut')"},"platforms":{"css":"approximate","waapi":"approximate","gsap":"native","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"approximate"},"note":"两端过冲。","aliases":[]},{"name":"elasticOut","label":{"zh":"橡皮筋减速","en":"Elastic out"},"family":"elastic","def":{"fn":"elasticOut"},"equiv":{"gsap":"elastic.out(1, 0.4)","mo":"MO.elasticOut","rk":"E.byName('elasticOut')"},"platforms":{"css":"unavailable","waapi":"unavailable","gsap":"native","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"unavailable"},"note":"橡皮筋震荡，需要 JS 驱动。","aliases":[]},{"name":"elasticIn","label":{"zh":"橡皮筋加速","en":"Elastic in"},"family":"elastic","def":{"fn":"elasticIn"},"equiv":{"gsap":"elastic.in(1, 0.4)","mo":"MO.byName('elasticIn')","rk":"E.byName('elasticIn')"},"platforms":{"css":"unavailable","waapi":"unavailable","gsap":"native","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"unavailable"},"note":"反向橡皮筋。","aliases":[]},{"name":"bounceOut","label":{"zh":"落地弹跳减速","en":"Bounce out"},"family":"bounce","def":{"fn":"bounceOut"},"equiv":{"gsap":"bounce.out","mo":"MO.byName('bounceOut')","rk":"E.byName('bounceOut')"},"platforms":{"css":"unavailable","waapi":"unavailable","gsap":"native","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"unavailable"},"note":"落地衰减弹跳。","aliases":[]},{"name":"bounceIn","label":{"zh":"落地弹跳加速","en":"Bounce in"},"family":"bounce","def":{"fn":"bounceIn"},"equiv":{"gsap":"bounce.in","mo":"MO.byName('bounceIn')","rk":"E.byName('bounceIn')"},"platforms":{"css":"unavailable","waapi":"unavailable","gsap":"native","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"unavailable"},"note":"反向弹跳。","aliases":[]},{"name":"spring","label":{"zh":"弹簧","en":"Spring"},"family":"spring","def":{"fn":"spring","args":{"duration":0.5,"bounce":0.15}},"params":[{"name":"duration","default":0.5,"min":0.1,"max":3,"unit":"s"},{"name":"bounce","default":0.15,"min":0,"max":1}],"equiv":{"gsap":"elastic.out(1, 0.4)","mo":"MO.spring","rk":"E.spring"},"platforms":{"css":"unavailable","waapi":"unavailable","gsap":"native","framer":"native","swift":"native","compose":"native","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"unavailable"},"note":"SwiftUI 参数化弹簧（WWDC23）：stiffness=(2π/duration)²、ζ=1−bounce。bounce 0=平滑落定、0.15=snappy、0.3=bouncy。","aliases":[]},{"name":"smoothSpring","label":{"zh":"平滑弹簧","en":"Smooth spring"},"family":"spring","def":{"fn":"spring","args":{"duration":0.5,"bounce":0}},"equiv":{"mo":"MO.smoothSpring","rk":"E.byName('smoothSpring')"},"platforms":{"css":"unavailable","waapi":"unavailable","gsap":"native","framer":"native","swift":"native","compose":"native","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"unavailable"},"note":"bounce=0，无过冲。","aliases":[]},{"name":"snappy","label":{"zh":"弹脆弹簧","en":"Snappy spring"},"family":"spring","def":{"fn":"spring","args":{"duration":0.5,"bounce":0.15}},"equiv":{"mo":"MO.snappy","rk":"E.byName('snappy')"},"platforms":{"css":"unavailable","waapi":"unavailable","gsap":"native","framer":"native","swift":"native","compose":"native","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"unavailable"},"note":"bounce=0.15。**名字冲突已处置**：词典原 `snappy` 贝塞尔改名 `quick-cut`。","aliases":[]},{"name":"bouncy","label":{"zh":"弹跳弹簧","en":"Bouncy spring"},"family":"spring","def":{"fn":"spring","args":{"duration":0.5,"bounce":0.3}},"equiv":{"mo":"MO.bouncy","rk":"E.byName('bouncy')"},"platforms":{"css":"unavailable","waapi":"unavailable","gsap":"native","framer":"native","swift":"native","compose":"native","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"unavailable"},"note":"bounce=0.3，明显过冲。","aliases":[]},{"name":"springHz","label":{"zh":"弹簧（频率/衰减）","en":"Spring (freq/decay)"},"family":"spring","def":{"fn":"springHz","args":{"freq":2.5,"decay":9}},"params":[{"name":"freq","default":2.5,"min":0.5,"max":10,"unit":"Hz"},{"name":"decay","default":9,"min":1,"max":30,"unit":"1/s"}],"equiv":{"mo":"MO.springHz","rk":"E.byName('springHz')"},"platforms":{"css":"unavailable","waapi":"unavailable","gsap":"native","framer":"native","swift":"native","compose":"native","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"unavailable"},"note":"freq 3 / decay 6 第一次过冲约 37%（砸进来的大字）；2.5 / 9 约 16%；2.2 / 10 约 8%。","aliases":[]},{"name":"settle","label":{"zh":"余振回弹","en":"Settle (residual oscillation)"},"family":"special","def":{"fn":"settle","args":{"amp":1,"freq":3,"decay":5}},"params":[{"name":"amp","default":1,"min":0,"max":100},{"name":"freq","default":3,"min":0.5,"max":20,"unit":"Hz"},{"name":"decay","default":5,"min":1,"max":30,"unit":"1/s"}],"equiv":{"mo":"MO.settle","rk":"E.byName('settle')"},"platforms":{"css":"unavailable","waapi":"unavailable","gsap":"approximate","framer":"approximate","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"unavailable"},"aliases":["余振","惯性回弹"],"note":"到位后的余振（Dan Ebberts 惯性回弹）：amp·sin(2πft)/e^(decay·t)。换姿势的身体挤压、屏幕震动都用它。**这是位移函数，不是 0→1 进度函数。**"},{"name":"easeIn","label":{"zh":"缓入（贝塞尔）","en":"Ease in"},"family":"in","def":{"fn":"bezier","args":[0.32,0,0.67,0]},"aliases":["加速","accelerate"],"equiv":{"css":"cubic-bezier(0.32, 0, 0.67, 0)","gsap":"power2.in","mo":"MO.byName('easeIn')","rk":"E.byName('easeIn')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"慢起步、快收尾。天然适合出场、收起、抛走。"},{"name":"easeOut","label":{"zh":"缓出（贝塞尔）","en":"Ease out"},"family":"out","def":{"fn":"bezier","args":[0.33,1,0.68,1]},"aliases":["减速","decelerate","先快后慢"],"equiv":{"css":"cubic-bezier(0.33, 1, 0.68, 1)","gsap":"power2.out","mo":"MO.byName('easeOut')","rk":"E.byName('easeOut')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"默认首选：带速度进场、平稳停住。UI 入场与状态切换最安全的选择。"},{"name":"easeInOut","label":{"zh":"缓入缓出（贝塞尔）","en":"Ease in-out"},"family":"in-out","def":{"fn":"bezier","args":[0.65,0,0.35,1]},"aliases":["先慢后快再慢","对称缓动"],"equiv":{"css":"cubic-bezier(0.65, 0, 0.35, 1)","gsap":"power2.inOut","mo":"MO.byName('easeInOut')","rk":"E.byName('easeInOut')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"长距离位移、来回切换。短距离用它会显得拖沓。"},{"name":"easeOutExpo","label":{"zh":"指数减速（贝塞尔）","en":"Expo out (bezier)"},"family":"out","def":{"fn":"bezier","args":[0.16,1,0.3,1]},"aliases":["expo-out"],"equiv":{"css":"cubic-bezier(0.16, 1, 0.3, 1)","gsap":"expo.out","mo":"MO.byName('easeOutExpo')","rk":"E.byName('easeOutExpo')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"戏剧化减速，前 20% 时间走完 80% 距离。"},{"name":"easeOutBack","label":{"zh":"回弹减速（贝塞尔）","en":"Back out (bezier)"},"family":"back","def":{"fn":"bezier","args":[0.34,1.56,0.64,1]},"aliases":["back-out"],"equiv":{"css":"cubic-bezier(0.34, 1.56, 0.64, 1)","gsap":"back.out(1.7)","mo":"MO.byName('easeOutBack')","rk":"E.byName('easeOutBack')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"末端过冲一次，做 pop / 弹入。数学上与 backOut 近似。"},{"name":"easeInBack","label":{"zh":"回弹加速（贝塞尔）","en":"Back in (bezier)"},"family":"back","def":{"fn":"bezier","args":[0.36,0,0.66,-0.56]},"aliases":["back-in"],"equiv":{"css":"cubic-bezier(0.36, 0, 0.66, -0.56)","gsap":"back.in(1.7)","mo":"MO.byName('easeInBack')","rk":"E.byName('easeInBack')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"起手反向预备（anticipation）。"},{"name":"easeOutCirc","label":{"zh":"圆弧减速（贝塞尔）","en":"Circ out (bezier)"},"family":"out","def":{"fn":"bezier","args":[0,0.55,0.45,1]},"aliases":["circ-out"],"equiv":{"css":"cubic-bezier(0, 0.55, 0.45, 1)","gsap":"circ.out","mo":"MO.byName('easeOutCirc')","rk":"E.byName('easeOutCirc')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"末端极缓，常用于大面积转场。"},{"name":"emphasized","label":{"zh":"强调曲线（M3）","en":"Emphasized (M3)"},"family":"in-out","def":{"fn":"bezier","args":[0.2,0,0,1]},"aliases":["Material 3 emphasized"],"equiv":{"css":"cubic-bezier(0.2, 0, 0, 1)","gsap":"power4.out","mo":"MO.emphasized","rk":"E.byName('emphasized')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"Material 3 emphasized：长尾减速。film 项目里用作发布会风。"},{"name":"material","label":{"zh":"标准曲线（M3）","en":"Standard (M3)"},"family":"in-out","def":{"fn":"bezier","args":[0.4,0,0.2,1]},"aliases":["Material 3 standard"],"equiv":{"css":"cubic-bezier(0.4, 0, 0.2, 1)","gsap":"power2.inOut","mo":"MO.byName('material')","rk":"E.byName('material')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"Material 标准曲线。"},{"name":"quickCut","label":{"zh":"快切（贝塞尔）","en":"Quick cut (bezier)"},"family":"in-out","def":{"fn":"bezier","args":[0.85,0,0.15,1]},"aliases":["snappy-bezier","quick-cut"],"equiv":{"css":"cubic-bezier(0.85, 0, 0.15, 1)","gsap":"power4.inOut","mo":"MO.byName('quickCut')","rk":"E.byName('quickCut')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"两端猛、中间极快，适合切页。**原词典 `snappy`，因与 MO 弹簧同名冲突而改名。**"},{"name":"appleOut","label":{"zh":"苹果发布会曲线","en":"Apple keynote ease"},"family":"out","def":{"fn":"bezier","args":[0.25,0.1,0.25,1]},"aliases":["apple","发布会"],"equiv":{"css":"cubic-bezier(0.25, 0.1, 0.25, 1)","gsap":"power2.out","mo":"MO.appleOut","rk":"E.byName('appleOut')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"native","compose":"native","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"CSS `ease` 的近似，苹果官网 / 发布会过渡。"},{"name":"k75","label":{"zh":"Kurzgesagt 75% 影响","en":"Kurzgesagt 75% influence"},"family":"out","def":{"fn":"bezier","args":[0.75,0,0.25,1]},"aliases":["75% influence"],"equiv":{"css":"cubic-bezier(0.75, 0, 0.25, 1)","gsap":"power2.out","mo":"MO.k75","rk":"E.byName('k75')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"Kurzgesagt 角色/物体动作的主力曲线（75% influence）。"},{"name":"easyEase","label":{"zh":"AE Easy Ease","en":"After Effects Easy Ease"},"family":"in-out","def":{"fn":"bezier","args":[0.333,0,0.667,1]},"aliases":["easy-ease","Easy Ease"],"equiv":{"css":"cubic-bezier(0.333, 0, 0.667, 1)","gsap":"power2.inOut","mo":"MO.easyEase","rk":"E.byName('easyEase')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"After Effects 的 Easy Ease，循环动作常用。"},{"name":"longTail","label":{"zh":"长尾减速","en":"Long tail"},"family":"out","def":{"fn":"bezier","args":[0.33,0,0.2,1]},"aliases":["long-tail","长尾"],"equiv":{"css":"cubic-bezier(0.33, 0, 0.2, 1)","gsap":"power3.out","mo":"MO.longTail","rk":"E.byName('longTail')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"起步快、长尾落定。Vox 风格「沿线追过去」「拉出揭示」用。"},{"name":"steps","label":{"zh":"阶梯（steps）","en":"Steps"},"family":"steps","def":{"fn":"steps","args":{"n":6,"mode":"end"}},"params":[{"name":"n","default":6,"min":1,"max":100},{"name":"mode","default":"end","enum":["start","end","none"]}],"aliases":["steps(6)","逐帧"],"equiv":{"css":"steps(6)","gsap":"steps(6)","mo":"MO.byName('steps')","rk":"E.byName('steps')"},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"approximate","film-mo":"native","film-rk":"native","json":"native","film-camera":"native","css-transition":"native"},"note":"离散台阶。film 里 12fps 步进（拼贴纸片/打字「一拍二」）用它。"}]},
  terms: {"version":1,"categories":[{"id":"easing","zh":"缓动与曲线","en":"Easing & Curves","tagline":"运动的“性格”由这条曲线决定，而不是由时长决定。"},{"id":"time","zh":"时长与时序","en":"Duration & Timing","tagline":"多久、何时开始、谁等谁——节奏感全在这三层。"},{"id":"entrance","zh":"入场","en":"Entrance","tagline":"元素如何从无到有。用户第一眼看到的运动。"},{"id":"exit","zh":"出场","en":"Exit","tagline":"退场要比进场快，且不能把上下文一起带走。"},{"id":"transform","zh":"变换与三维","en":"Transform & 3D","tagline":"位移、缩放、旋转、斜切，以及造出深度的透视。"},{"id":"state","zh":"状态切换与转场","en":"State & Transition","tagline":"A 变成 B 时，让眼睛跟得上，让空间关系不丢失。"},{"id":"scroll","zh":"滚动动效","en":"Scroll Motion","tagline":"把滚动条这个输入设备，当成时间轴来用。"},{"id":"feedback","zh":"交互反馈","en":"Interaction & Feedback","tagline":"每一次点击、拖拽、悬停，系统都要回一句话。"},{"id":"loop","zh":"循环与环境动效","en":"Loop & Ambient","tagline":"没有事件发生时，页面也不该是一潭死水。"},{"id":"text","zh":"文字动效","en":"Typography Motion","tagline":"文字进场、逐字拆解、数字跳动。"},{"id":"polish","zh":"润色与特效","en":"Polish & FX","tagline":"那 5% 让作品从“能动”变成“好看”。"},{"id":"camera","zh":"镜头与叙事","en":"Camera & Story","tagline":"不移动元素，移动观看元素的那只眼睛。"},{"id":"principles","zh":"动画原则","en":"Principles","tagline":"1930 年代迪士尼定的规矩，今天在 UI 里依然成立。"},{"id":"perf","zh":"性能与工程","en":"Performance","tagline":"掉一帧，所有精心设计的曲线都会显得廉价。"},{"id":"runtime","zh":"三维与运行时","en":"3D & Runtime","tagline":"当 CSS 补间不够用时：着色器、Canvas、骨骼、状态机与渲染循环。","taglineEn":"When CSS tweens are not enough: shaders, canvas, bones, state machines and the render loop."},{"id":"compound","zh":"组合范式","en":"Compound Patterns","tagline":"把指针、滚动与点击组合成可描述的编排案例；这些名称用于检索与沟通，并非统一的行业标准术语。","taglineEn":"These choreography examples combine pointer, scroll and tap. Their descriptive names help communicate the pattern; they are not standardized industry terms."},{"id":"film-grammar","zh":"影片与解说语法","en":"Film & Explainer Grammar","tagline":"把口播节奏、镜头时长与主体运动组合成可描述的编排案例；这些名称用于检索与沟通，并非统一的行业标准术语。"}],"terms":[{"id":"easing","zh":"缓动 / 速度曲线","en":"Easing","alias":["timing function","缓动函数","加减速","运动曲线"],"cat":"easing","vague":"让它动起来更自然一点","say":"这条动效用 ease-out 曲线，起步快、收尾慢","def":"控制动画进度如何映射到时间轴的函数。线性动画一眼就看出是机器做的，因为现实里没有物体能瞬间达到最高速、又瞬间静止。","trigger":"time","demo":{"kind":"track","fn":"easeOut"},"_legacyCode":"transition: transform 320ms ease-out;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"linear","zh":"线性 / 匀速","en":"Linear","alias":["匀速","等速"],"cat":"easing","vague":"就匀速转","say":"匀速（linear）驱动，适合持续型运动","def":"进度与时间成正比。适合旋转加载、循环跑马灯、进度填充这类“没有起点终点”的运动；用在有始有终的位移上会显得机械。","trigger":"time","demo":{"kind":"track","fn":"linear"},"_legacyCode":"animation: spin 1.2s linear infinite;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"ease-in","zh":"缓入 / 加速","en":"Ease-in / Accelerate","alias":["加速","accelerate","easeIn"],"cat":"easing","vague":"它走掉的时候","say":"用 ease-in 让它加速离场，像被甩出去","def":"慢起步、快收尾。因为结束时速度很高，观众会觉得物体是“离开了”，所以天然适合出场、收起、抛走的动作。","trigger":"time","demo":{"kind":"track","fn":"easeIn"},"_legacyCode":"transition: all 200ms cubic-bezier(0.32, 0, 0.67, 0);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"ease-out","zh":"缓出 / 减速","en":"Ease-out / Decelerate","alias":["减速","decelerate","easeOut","先快后慢"],"cat":"easing","vague":"滑进来但别那么生硬","say":"240ms ease-out 入场，减速落到终点","def":"快起步、慢收尾。物体带着速度进入视野、再平稳停住，符合物理直觉，是 UI 入场和状态切换最安全的选择。","trigger":"time","demo":{"kind":"track","fn":"easeOut"},"_legacyCode":"transition: transform 240ms cubic-bezier(0.33, 1, 0.68, 1);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"ease-in-out","zh":"缓入缓出","en":"Ease-in-out","alias":["先慢后快再慢","对称缓动","smooth"],"cat":"easing","vague":"两头都慢一点，中间快点","say":"长距离位移用 ease-in-out，起止都柔和","def":"两端慢、中段快。适合起点和终点都需要被看清的长距离移动、来回切换；短距离用它会显得拖沓。","trigger":"time","demo":{"kind":"track","fn":"easeInOut"},"_legacyCode":"transition: transform 480ms cubic-bezier(0.65, 0, 0.35, 1);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"power","zh":"缓动强度（次幂族）","en":"Power / Sine · Quad · Cubic · Expo","alias":["sine","quad","cubic","quart","quint","expo","circ","指数缓动","强度"],"cat":"easing","vague":"更夸张一点的减速","say":"用 expo-out 而不是 cubic-out，收尾更“抓”","def":"同一种形状的不同力度版本。sine 最温和，expo 最戏剧化：曲线末段几乎停住，前 20% 时间就走完了 80% 距离。","trigger":"time","demo":{"kind":"curve","fn":"easeOutExpo"},"_legacyCode":"/* 越靠后越极端 */\ncubic-bezier(0.33, 1, 0.68, 1)     /* cubic-out */\ncubic-bezier(0.16, 1, 0.3, 1)      /* expo-out */\ncubic-bezier(0.83, 0, 0.17, 1)     /* expo-in-out */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"cubic-bezier","zh":"三次贝塞尔曲线","en":"Cubic Bézier","alias":["贝塞尔","自定义曲线","css cubic-bezier"],"cat":"easing","vague":"我想要一条独一无二的曲线","say":"曲线参数 cubic-bezier(0.16, 1, 0.3, 1)","def":"用两个控制点定义的四点曲线，CSS 缓动的通用语言。Y 超出 0–1 区间就产生过冲，X 超出则出现时间倒流（非法）。","trigger":"time","demo":{"kind":"curve","fn":"customBezier"},"_legacyCode":"transition: transform 520ms cubic-bezier(0.16, 1, 0.3, 1);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"asymmetric","zh":"不对称缓动","en":"Asymmetric Easing","alias":["非对称","快进快出","in/out 不同曲线"],"cat":"easing","vague":"进来温柔一点，出去利落一点","say":"进场 ease-out、退场 ease-in，曲线不对称","def":"进场与退场使用不同曲线（或不同时长）。人的注意力跟随“到来”，但不在意“离开”，所以常见做法是慢出快进：入场慢而细腻，出场快而果断。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"two","a":{"label":"进场 · ease-out 320ms","frames":[[0,"opacity:0; transform:translateY(18px)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"320ms"},"b":{"label":"退场 · ease-in 160ms","frames":[[0,"opacity:1; transform:none"],[100,"opacity:0; transform:translateY(18px)"]],"e":"cubic-bezier(0.32,0,0.67,0)","d":"160ms"}},"_legacyCode":".enter { transition: 320ms cubic-bezier(0.16, 1, 0.3, 1); }\n.exit  { transition: 160ms cubic-bezier(0.32, 0, 0.67, 0); }","spec":{"id":"asymmetric","version":1,"timeline":[{"id":"a-t-translateY","target":"self","prop":"translateY","from":18,"to":0,"unit":"px","start":0,"dur":0.32,"ease":"easeOutExpo"},{"id":"a-t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.32,"ease":"easeOutExpo"},{"id":"b-t-translateY","target":"child","prop":"translateY","from":0,"to":18,"unit":"px","start":0,"dur":0.16,"ease":"easeIn"},{"id":"b-t-opacity","target":"child","prop":"opacity","from":1,"to":0,"unit":"none","start":0,"dur":0.16,"ease":"easeIn"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"overshoot","zh":"过冲 / 冲过头","en":"Overshoot","alias":["冲过","回弹","y 超过 1"],"cat":"easing","vague":"到位以后抖一下再停","say":"带 10% overshoot，冲过终点再回落","def":"运动冲过目标值再折返。给了画面一点“重量感”和能量感，但在严谨的生产工具里过量会显得轻浮。","trigger":"time","demo":{"kind":"curve","fn":"easeOutBack"},"_legacyCode":"transition: transform 420ms cubic-bezier(0.34, 1.56, 0.64, 1);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"ease-out-back","zh":"回弹缓出","en":"Ease-out-back","alias":["back out","弹入","带回弹"],"cat":"easing","vague":"啪一下弹进去","say":"卡片用 ease-out-back 弹入，末端轻微回弹","def":"末端带一次过冲回弹的缓动，常用来做 pop、按钮展开、徽章出现。是“活泼品牌”和“稳重后台”的分水岭。","trigger":"time","curve":"easeOutBack","demo":{"kind":"frames","play":"in","frames":[[0,"opacity:0; transform:scale(.7)"],[100,"opacity:1; transform:scale(1)"]],"e":"cubic-bezier(0.34,1.56,0.64,1)","d":"560ms"},"_legacyCode":"animation: pop 420ms cubic-bezier(0.34, 1.56, 0.64, 1) both;","spec":{"id":"ease-out-back","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":0.7,"to":1,"unit":"none","start":0,"dur":0.56,"ease":"easeOutBack"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.56,"ease":"easeOutBack"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"ease-in-back","zh":"反向前摇","en":"Ease-in-back","alias":["anticipation curve","回拉","先退后进"],"cat":"easing","vague":"它好像先往后缩了一下","say":"起手用 ease-in-back 做反向预备，再甩出去","def":"起步先朝反方向移动一点点再加速。这正是动画十二法则里 anticipation（预备动作）的曲线化实现。","trigger":"time","curve":"easeInBack","demo":{"kind":"frames","frames":[[0,"transform:translateX(-40px)"],[100,"transform:translateX(40px)"]],"e":"cubic-bezier(0.36,0,0.66,-0.56)","d":"700ms","loop":true,"alt":true},"_legacyCode":"animation: launch 520ms cubic-bezier(0.36, 0, 0.66, -0.56) both;","spec":{"id":"ease-in-back","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":-40,"to":40,"unit":"px","start":0,"dur":0.7,"ease":"easeInBack"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"spring","zh":"弹簧物理","en":"Spring","alias":["物理弹簧","spring animation","基于物理"],"cat":"easing","vague":"像苹果手机上那种自然的滑动","say":"用 spring（stiffness 120 / damping 14）替代固定时长","def":"由刚度、阻尼、质量模拟出来的运动，而不是固定时长加曲线。优点是没有“终点时间”，因此天然可中断、可续接，被用户中途打断时不会跳帧。","trigger":"time","demo":{"kind":"spring","p":[170,22,1]},"_legacyCode":"animate(el, { y: 0 }, { type: \"spring\", stiffness: 120, damping: 14 });","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"stiffness","zh":"刚度","en":"Stiffness","alias":["弹性系数","k 值"],"cat":"easing","vague":"弹得再快一点","say":"把 stiffness 提到 260，回弹更紧","def":"弹簧有多“硬”。数值越大恢复力越强、到达目标越快，运动显得脆；数值小则像橡皮筋，慢悠悠地晃过去。","trigger":"time","demo":{"kind":"spring","p":[260,20,1],"p2":[60,20,1]},"_legacyCode":"{ type: \"spring\", stiffness: 260, damping: 20 }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"damping","zh":"阻尼","en":"Damping","alias":["减震","衰减","c 值"],"cat":"easing","vague":"别晃那么多次","say":"阻尼调到临界附近，只过一次冲就稳住","def":"能量衰减的快慢，决定来回震荡几次后停下。阻尼过低是果冻，过高是黏稠的糖浆，临界阻尼（不震荡的最快返回）常用于界面。","trigger":"time","demo":{"kind":"spring","p":[180,8,1],"p2":[180,26,1]},"_legacyCode":"{ type: \"spring\", stiffness: 180, damping: 26 }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"mass","zh":"质量","en":"Mass","alias":["重量感","m 值"],"cat":"easing","vague":"看起来重一点","say":"质量加大到 3，起动变慢、惯性变强","def":"弹簧系统里物体的重量。质量越大加速越慢、越拖手，适合表现大面板；小元素用大质量会显得迟钝。","trigger":"time","demo":{"kind":"spring","p":[200,18,4],"p2":[200,18,0.6]},"_legacyCode":"{ type: \"spring\", stiffness: 200, damping: 18, mass: 3 }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"bounce","zh":"落地弹跳","en":"Bounce","alias":["bounce easing","弹地球","落地"],"cat":"easing","vague":"像球掉在地上弹两下","say":"末端用 bounce-out，落地后衰减弹两次","def":"终点前反复折返、每次幅度衰减，模拟物体落地。区别于 elastic：bounce 只在末端弹，elastic 全程抖。","trigger":"time","demo":{"kind":"curve","fn":"easeOutBounce"},"_legacyCode":"animation: drop 900ms cubic-bezier(0.22, 1, 0.36, 1) both;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"elastic","zh":"橡皮筋 / 弹性震荡","en":"Elastic","alias":["elastic out","果冻","震荡衰减"],"cat":"easing","vague":"果冻一样抖几下","say":"elastic-out，末端来回衰减震荡 2~3 次","def":"围绕终点的正弦震荡并逐渐衰减，像被拉长的橡皮筋。视觉冲击强，但会把注意力从内容抢走，适合贴纸、吉祥物、彩蛋。","trigger":"time","demo":{"kind":"curve","fn":"easeOutElastic"},"_legacyCode":"animation: jelly 1.1s cubic-bezier(0.5, 1.6, 0.4, 0.8) both;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"stepped","zh":"阶梯缓动","en":"Stepped / Steps()","alias":["steps","逐帧","定格","像素风"],"cat":"easing","vague":"要那种一格一格的","say":"steps(8) 把运动切成 8 段，逐帧感","def":"把连续进度离散成若干台阶，动画变成一格一格跳。用于精灵图逐帧播放、像素风、打字机与复古定格（1 拍 2 帧）。","trigger":"time","curve":"steps","_legacyEase":"steps(8)","demo":{"kind":"frames","frames":[[0,"transform:translateX(-44px)"],[100,"transform:translateX(44px)"]],"e":"steps(8)","d":"1200ms","loop":true,"alt":true},"_legacyCode":"animation: run 0.6s steps(8) infinite;","spec":{"id":"stepped","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":-44,"to":44,"unit":"px","start":0,"dur":1.2,"ease":"steps"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"interruptible","zh":"可中断动效","en":"Interruptible Motion","alias":["可打断","续接","velocity handoff"],"cat":"easing","vague":"我中途再点它不能卡住","say":"动画可中断，并从当前速度续接（spring 天然支持）","def":"用户在新动画未完成时再次操作，运动从当前位置和当前速度继续，而不是等播完或瞬间跳位。这是 spring 相对固定时长曲线的核心优势。","trigger":"time","demo":{"kind":"spring","p":[200,20,1],"interactive":true},"_legacyCode":"/* 用位移速度续接，而不是重新开始 */\nanimate(el, { y: target }, { type: \"spring\", velocity: currentVelocity });","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"duration","zh":"时长","en":"Duration","alias":["持续时间","多久","ms"],"cat":"time","vague":"快一点，但别太快","say":"时长 200ms（小元素）/ 300ms（面板）","def":"动画从开始到结束的时间。经验区间：微反馈 100–160ms、小元素 200–300ms、大面板转场 400–600ms；超过 800ms 用户会开始觉得等待。","trigger":"time","curve":"easeOut","demo":{"kind":"two","a":{"label":"120ms · 干脆","frames":[[0,"transform:translateX(-52px)"],[100,"transform:translateX(52px)"]],"e":"cubic-bezier(0.33,1,0.68,1)","d":"120ms"},"b":{"label":"900ms · 拖沓","frames":[[0,"transform:translateX(-52px)"],[100,"transform:translateX(52px)"]],"e":"cubic-bezier(0.33,1,0.68,1)","d":"900ms"}},"_legacyCode":"transition: transform 240ms ease-out;","spec":{"id":"duration","version":1,"timeline":[{"id":"a-t-translateX","target":"self","prop":"translateX","from":-52,"to":52,"unit":"px","start":0,"dur":0.12,"ease":"easeOut"},{"id":"b-t-translateX","target":"child","prop":"translateX","from":-52,"to":52,"unit":"px","start":0,"dur":0.9,"ease":"easeOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"delay","zh":"延迟","en":"Delay","alias":["延后","等一会再动","animation-delay"],"cat":"time","vague":"别一起动，错开一点","say":"第二层延迟 60ms 再启动","def":"动画启动前的等待时间。用来制造先后关系、给主元素让路。注意：延迟会直接加进用户感知的总耗时，滥用是界面“慢半拍”的元凶。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","multi":3,"st":60,"frames":[[0,"opacity:0; transform:translateY(14px)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"420ms"},"_legacyCode":"animation-delay: 60ms;","spec":{"id":"delay","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":14,"to":0,"unit":"px","start":0,"dur":0.42,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.42,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":3,"step":0.06,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"stagger","zh":"错峰 / 依次入场","en":"Stagger","alias":["依次","瀑布式","cascade","sequence delay","逐个"],"cat":"time","vague":"一个一个冒出来","say":"列表项 stagger 40ms 依次入场","def":"一组元素以固定时间差依次播放同一动画。让多个对象显得“有编排”而不是同时蹦出，是提升质感最划算的一招。间隔 30–60ms 为宜，超过 100ms 就变成等待。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-sequence\" aria-hidden=\"true\"><span class=\"demo-sequence-photo\"></span><span class=\"demo-sequence-number\"></span></div>","multi":5,"st":40,"frames":[[0,"opacity:0; transform:translateY(16px) scale(.94)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"460ms"},"_legacyCode":".item:nth-child(n) { animation-delay: calc(var(--i) * 40ms); }","spec":{"id":"stagger","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":16,"to":0,"unit":"px","start":0,"dur":0.46,"ease":"easeOutExpo"},{"id":"t-scale","target":"self","prop":"scale","from":0.94,"to":1,"unit":"none","start":0,"dur":0.46,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.46,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":5,"step":0.04,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"orchestration","zh":"编排 / 场面调度","en":"Orchestration","alias":["调度","时间线","timeline","多段配合"],"cat":"time","vague":"整段动画要有主次和节奏","say":"按 timeline 编排：背景先行，标题 120ms 跟进，卡片 240ms 收尾","def":"把多个动画当作一首曲子来安排：谁先、谁后、谁同时、谁在谁的收尾里进入。工具上通常表现为 timeline（GSAP 的 tl、After Effects 的图层）。","trigger":"time","curve":"easeOut","demo":{"kind":"frames","multi":6,"st":110,"frames":[[0,"opacity:0; transform:translateY(20px) rotate(-6deg)"],[60,"opacity:1; transform:translateY(-4px) rotate(2deg)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.33,1,0.68,1)","d":"700ms"},"_legacyCode":"tl.to(bg, { y: 0 }, 0)\n  .to(title, { opacity: 1 }, 0.12)\n  .to(cards, { opacity: 1, stagger: 0.05 }, 0.24);","spec":{"id":"orchestration","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":20,"to":0,"unit":"px","start":0,"dur":0.7,"ease":"easeOut"},{"id":"t-rotate","target":"self","prop":"rotate","from":-6,"to":0,"unit":"deg","start":0,"dur":0.7,"ease":"easeOut"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.7,"ease":"easeOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":6,"step":0.11,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"fill-mode","zh":"填充模式","en":"Fill Mode","alias":["forwards","backwards","both","动画结束后保持"],"cat":"time","vague":"动完之后别跳回原样","say":"animation-fill-mode: both，结束保持终态","def":"决定动画在播放前和结束后元素是什么状态。忘了写 forwards 是“动画播完瞬间弹回原位”这类 bug 的标准成因。","trigger":"time","curve":"easeOut","demo":{"kind":"frames","frames":[[0,"opacity:0; transform:translateY(20px)"],[100,"opacity:1; transform:none"]],"e":"ease-out","d":"420ms","nofill":true,"hint":"注意：结束就弹回（未设 both）"},"_legacyCode":"animation: rise 320ms ease-out both;","spec":{"id":"fill-mode","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":20,"to":0,"unit":"px","start":0,"dur":0.42,"ease":"easeOut"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.42,"ease":"easeOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"iteration","zh":"播放次数","en":"Iteration Count","alias":["infinite","循环次数","animation-iteration-count"],"cat":"time","vague":"来回动三次就好","say":"iteration-count: 3，不无限循环","def":"动画重复的次数，`infinite` 表示无限。原则：等待状态才允许无限，吸引注意力的提示最多 2–3 次，否则用户会屏蔽整块内容。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","frames":[[0,"transform:translateX(0)"],[25,"transform:translateX(-8px)"],[75,"transform:translateX(8px)"],[100,"transform:translateX(0)"]],"e":"ease-in-out","d":"520ms","repeat":3},"_legacyCode":"animation: nudge 480ms ease-in-out 3;","spec":{"id":"iteration","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":0,"to":0,"unit":"px","start":0,"dur":0.52,"ease":"easeInOut"}],"loop":{"count":3,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"alternate","zh":"播放方向","en":"Direction / Alternate","alias":["alternate","reverse","来回","往返"],"cat":"time","vague":"到边了自己再退回来","say":"direction: alternate 做无接缝往返","def":"normal 每次都从头重播，reverse 反向播放，alternate 奇偶次交替——省掉“硬切回头”，是浮动、呼吸、摇摆类循环的标准写法。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","frames":[[0,"transform:translateY(6px)"],[100,"transform:translateY(-6px)"]],"e":"ease-in-out","d":"1400ms","loop":true,"alt":true},"_legacyCode":"animation: float 3.2s ease-in-out infinite alternate;","spec":{"id":"alternate","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":6,"to":-6,"unit":"px","start":0,"dur":1.4,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"playback-rate","zh":"播放速率","en":"Playback Rate","alias":["倍速","timeScale","0.5x","2x"],"cat":"time","vague":"整体放慢一点看细节","say":"timeScale(0.25) 慢放查看曲线细节","def":"对整条时间线的倍速缩放。慢放（0.1–0.5x）是调曲线的必要手段；调试时也可以用 3x 快速验证长动画。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","frames":[[0,"opacity:0; transform:scale(.6) rotate(-12deg)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"1600ms"},"_legacyCode":"gsap.globalTimeline.timeScale(0.25); /* 慢放 4 倍检查运动 */","spec":{"id":"playback-rate","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":0.6,"to":1,"unit":"none","start":0,"dur":1.6,"ease":"easeOutExpo"},{"id":"t-rotate","target":"self","prop":"rotate","from":-12,"to":0,"unit":"deg","start":0,"dur":1.6,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":1.6,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"timing-scale","zh":"时长令牌 / 时长刻度","en":"Motion Token / Timing Scale","alias":["motion tokens","design token","快速/标准/缓慢"],"cat":"time","vague":"全站动效时长要统一","say":"统一走 token：xs 100ms / s 200ms / m 320ms / l 480ms","def":"把时长收敛成一组设计令牌（fast / normal / slow），像颜色和字号一样统一管理。散落的 237ms、410ms 是设计系统腐化的信号。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","multi":3,"st":0,"frames":[[0,"transform:scaleX(.05)"],[100,"transform:scaleX(1)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"520ms","loop":true,"perDelay":"120|240|400","hint":"三条长度=三档 token"},"_legacyCode":"--dur-fast: 120ms; --dur-base: 240ms; --dur-slow: 400ms;","spec":{"id":"timing-scale","version":1,"timeline":[{"id":"t-scaleX","target":"self","prop":"scaleX","from":0.05,"to":1,"unit":"none","start":0,"dur":0.52,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":3,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"perceptual-duration","zh":"感知时长","en":"Perceived Duration","alias":["主观时间","感觉快慢"],"cat":"time","vague":"明明只有 300ms 却觉得慢","say":"把曲线前段做陡，感知时长会缩短","def":"用户主观感受到的时间，和实际毫秒数并不相等。前段位移快、收尾短，会让同样的 400ms 明显比“匀速推进”更短。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"two","a":{"label":"400ms expo-out · 感觉更快","frames":[[0,"transform:translateX(-54px)"],[100,"transform:translateX(54px)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"400ms"},"b":{"label":"400ms ease-in · 感觉更慢","frames":[[0,"transform:translateX(-54px)"],[100,"transform:translateX(54px)"]],"e":"cubic-bezier(0.32,0,0.67,0)","d":"400ms"}},"_legacyCode":"/* 同样 400ms：陡起缓收 < 线性 < 缓起陡收（主观上） */","spec":{"id":"perceptual-duration","version":1,"timeline":[{"id":"a-t-translateX","target":"self","prop":"translateX","from":-54,"to":54,"unit":"px","start":0,"dur":0.4,"ease":"easeOutExpo"},{"id":"b-t-translateX","target":"child","prop":"translateX","from":-54,"to":54,"unit":"px","start":0,"dur":0.4,"ease":"easeIn"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"fade-in","zh":"淡入","en":"Fade in","alias":["渐显","opacity 入场","交叉出现"],"cat":"entrance","vague":"让它慢慢显出来","say":"200ms 淡入（可叠加 8px 上移）","def":"透明度从 0 到 1。最保守的入场：不改变位置，因此不会推动其他内容，适合图片、遮罩、模态背景。","trigger":"time","curve":"easeOut","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-notice\"><span class=\"demo-notice-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"m6 12 4 4 8-8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"demo-notice-copy\"><b data-l10n=\"灵感已收好\">灵感已收好</b><small data-l10n=\"留给下一次创作\">留给下一次创作</small></span><span class=\"demo-notice-dot\" aria-hidden=\"true\"></span></div>","frames":[[0,"opacity:0"],[100,"opacity:1"]],"e":"ease-out","d":"420ms"},"_legacyCode":"animation: fade-in 200ms ease-out both;","spec":{"id":"fade-in","version":1,"timeline":[{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.42,"ease":"easeOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"slide-in","zh":"滑入","en":"Slide in","alias":["推入","translate 入场","从边上进来"],"cat":"entrance","vague":"从右边推进来","say":"从右侧 translateX 滑入，ease-out 300ms","def":"从画面外沿某个方向平移进入，同时通常配合淡入。方向本身携带信息：从右进入常表示“下一页”，从左表示“返回”。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-notice\"><span class=\"demo-notice-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"m6 12 4 4 8-8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"demo-notice-copy\"><b data-l10n=\"灵感已收好\">灵感已收好</b><small data-l10n=\"留给下一次创作\">留给下一次创作</small></span><span class=\"demo-notice-dot\" aria-hidden=\"true\"></span></div>","frames":[[0,"opacity:0; transform:translateX(46px)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"480ms"},"_legacyCode":"animation: slide-in 300ms cubic-bezier(0.16,1,0.3,1) both;","spec":{"id":"slide-in","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":46,"to":0,"unit":"px","start":0,"dur":0.48,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.48,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"scale-in","zh":"缩放入场","en":"Scale in","alias":["放大出现","zoom in","由小变大"],"cat":"entrance","vague":"从小长出来","say":"从 0.96 scale 放大到 1，配淡入","def":"尺寸由小变大进入。起点 scale 越接近 1（0.94–0.98）越像系统级精致；从 0 长出来则像弹窗广告。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-photo\"><img src=\"assets/img/p10.jpg\" alt=\"\" loading=\"eager\" decoding=\"async\"><span class=\"demo-photo-caption\"><b data-l10n=\"光影手记\">光影手记</b><small aria-hidden=\"true\">↗</small></span></div>","frames":[[0,"opacity:0; transform:scale(.96)"],[100,"opacity:1; transform:scale(1)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"440ms"},"_legacyCode":"transform: scale(.96); → transform: scale(1);","spec":{"id":"scale-in","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":0.96,"to":1,"unit":"none","start":0,"dur":0.44,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.44,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"pop-in","zh":"弹出（带过冲）","en":"Pop in","alias":["蹦出来","pop","弹一下"],"cat":"entrance","vague":"就是那种蹦出来的感觉","say":"pop-in：scale 0.7→1 + ease-out-back，末端回弹","def":"快速放大并轻微冲过终点再落回，像气泡出现。适合徽章、通知、新增项、贴纸；一次屏幕上不要超过一个 pop。","trigger":"time","curve":"easeOutBack","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-badge\"><span class=\"demo-badge-star\"><svg viewBox=\"0 0 40 40\" fill=\"none\" aria-hidden=\"true\"><path d=\"m20 5 4.6 9.4L35 16l-7.5 7.3 1.8 10.3L20 28.8l-9.3 4.8 1.8-10.3L5 16l10.4-1.6Z\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linejoin=\"round\"/></svg></span><b data-l10n=\"收藏成功\">收藏成功</b><small aria-hidden=\"true\">✦</small></div>","frames":[[0,"opacity:0; transform:scale(.7)"],[100,"opacity:1; transform:scale(1)"]],"e":"cubic-bezier(0.34,1.56,0.64,1)","d":"520ms"},"_legacyCode":"animation: pop 320ms cubic-bezier(0.34,1.56,0.64,1) both;","spec":{"id":"pop-in","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":0.7,"to":1,"unit":"none","start":0,"dur":0.52,"ease":"easeOutBack"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.52,"ease":"easeOutBack"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"bounce-in","zh":"弹跳入场","en":"Bounce in","alias":["弹进来","掉下来弹住"],"cat":"entrance","vague":"从上面掉下来砸住","say":"drop + bounce，落地衰减两次","def":"带着落地弹跳进入视野。能量感强、语气活泼，多用于插画、吉祥物、游戏化界面；金融或医疗场景应避免。","trigger":"time","curve":"easeOut","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-notice\"><span class=\"demo-notice-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"m6 12 4 4 8-8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"demo-notice-copy\"><b data-l10n=\"灵感已收好\">灵感已收好</b><small data-l10n=\"留给下一次创作\">留给下一次创作</small></span><span class=\"demo-notice-dot\" aria-hidden=\"true\"></span></div>","frames":[[0,"opacity:0; transform:translateY(-40px) scale(.9)"],[55,"opacity:1; transform:translateY(6px) scale(1.03)"],[78,"transform:translateY(-4px)"],[100,"transform:translateY(0) scale(1)"]],"e":"cubic-bezier(0.33,1,0.68,1)","d":"900ms"},"_legacyCode":"animation: bounce-in 720ms cubic-bezier(0.28,0.84,0.42,1) both;","spec":{"id":"bounce-in","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":-40,"to":0,"unit":"px","start":0,"dur":0.9,"ease":"easeOut"},{"id":"t-scale","target":"self","prop":"scale","from":0.9,"to":1,"unit":"none","start":0,"dur":0.9,"ease":"easeOut"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":0,"unit":"none","start":0,"dur":0.9,"ease":"easeOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"drop-in","zh":"落下入场","en":"Drop in","alias":["掉落","从上掉下"],"cat":"entrance","vague":"从天上掉下来","say":"从上方 translateY(-12) 落下，ease-out","def":"受重力暗示的自上而下入场，常配 ease-in 起始加速与末端 ease-out 停稳。注意落点下方要有“承托”视觉，否则像掉进虚空。","trigger":"time","curve":"easeOutBack","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-notice\"><span class=\"demo-notice-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"m6 12 4 4 8-8\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span><span class=\"demo-notice-copy\"><b data-l10n=\"灵感已收好\">灵感已收好</b><small data-l10n=\"留给下一次创作\">留给下一次创作</small></span><span class=\"demo-notice-dot\" aria-hidden=\"true\"></span></div>","frames":[[0,"opacity:0; transform:translateY(-34px)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.34,1.56,0.64,1)","d":"520ms"},"_legacyCode":"animation: drop 360ms cubic-bezier(0.34,1.56,0.64,1) both;","spec":{"id":"drop-in","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":-34,"to":0,"unit":"px","start":0,"dur":0.52,"ease":"easeOutBack"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.52,"ease":"easeOutBack"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"rise-in","zh":"上浮入场","en":"Rise / Slide-up fade","alias":["上移淡入","滑上来","rise","fade-up"],"cat":"entrance","vague":"轻轻抬上来","say":"translateY(14→0) + opacity 0→1，240ms ease-out","def":"轻微上移同时淡入，业界最通用的“万能入场”。位移只给 8–16px，用户感知到的是“浮现”，而不是“搬家”。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-sequence\" aria-hidden=\"true\"><span class=\"demo-sequence-photo\"></span><span class=\"demo-sequence-number\"></span></div>","multi":3,"st":80,"frames":[[0,"opacity:0; transform:translateY(14px)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"240ms"},"_legacyCode":"transform: translateY(14px); opacity: 0;  /* 初始态 */\n/* 目标态 */ transform: none; opacity: 1;","spec":{"id":"rise-in","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":14,"to":0,"unit":"px","start":0,"dur":0.24,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.24,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":3,"step":0.08,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"unfold","zh":"展开","en":"Unfold / Expand height","alias":["展开高度","accordion open","撑开"],"cat":"entrance","vague":"把它撑开，别突然跳出来","say":"高度从 0 展开（grid-template-rows 或 FLIP）","def":"容器沿某轴从 0 撑开到内容尺寸。难点在于 height:auto 不可动画——现代解法是 grid-template-rows: 0fr→1fr，或用 FLIP 测量后再动 transform。","trigger":"time","demo":{"kind":"list","mode":"accordion","hint":"点击展开/收起"},"_legacyCode":".wrap { display:grid; grid-template-rows: 0fr; transition: grid-template-rows 280ms ease-out; }\n.wrap[data-open] { grid-template-rows: 1fr; }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"clip-reveal","zh":"裁切揭示","en":"Clip reveal","alias":["clip-path 入场","擦出来","wipe"],"cat":"entrance","vague":"像被擦出来一样","say":"clip-path inset 从下往上揭开","def":"用 clip-path 或 mask 逐渐露出内容，元素本身不动而是“被看见的面积”在变。比淡入更有手工感，适合图片、色块、标题。","trigger":"time","curve":"easeOutExpo","_legacyEase":"cubic-bezier(0.76,0,0.24,1)","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-photo clip\"><img src=\"assets/img/p04.jpg\" alt=\"\" loading=\"eager\" decoding=\"async\"><span class=\"demo-photo-caption\"><b data-l10n=\"追光片刻\">追光片刻</b><small aria-hidden=\"true\">↗</small></span></div>","frames":[[0,"clip-path:inset(100% 0 0 0)"],[100,"clip-path:inset(0 0 0 0)"]],"e":"cubic-bezier(0.76,0,0.24,1)","d":"700ms"},"_legacyCode":"clip-path: inset(100% 0 0 0); → clip-path: inset(0);","spec":{"id":"clip-reveal","version":1,"timeline":[{"id":"t-clip-path","target":"self","prop":"clip-path","from":"inset(100% 0 0 0)","to":"inset(0 0 0 0)","unit":"none","start":0,"dur":0.7,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"mask-reveal","zh":"遮罩显影","en":"Mask reveal","alias":["渐变遮罩","mask-image","溶解显现"],"cat":"entrance","vague":"边缘先出来，中间慢慢显","say":"用线性渐变 mask 做扫描式显影","def":"用带渐变边缘的 mask 移动，使内容像摄影显影一样从软边界里长出来。比硬边 clip 更柔和，能藏住接缝。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj img masked\"></div>","frames":[[0,"mask-position:-120% 0"],[100,"mask-position:220% 0"]],"e":"ease-in-out","d":"1500ms","loop":true},"_legacyCode":"mask-image: linear-gradient(120deg, transparent, #000 40%, transparent 80%);\nmask-position: -100% → 200%;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"blur-in","zh":"虚化显影入场","en":"Blur in / Rack in","alias":["模糊进场","聚焦","rack focus"],"cat":"entrance","vague":"从糊到清楚","say":"blur(12px)→0 + scale 1.06→1 显影入场","def":"从模糊到清晰，模拟相机对焦或记忆浮现。GPU 成本较高，移动端建议只在首屏单次使用，不做循环。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-photo\"><img src=\"assets/img/p13.jpg\" alt=\"\" loading=\"eager\" decoding=\"async\"><span class=\"demo-photo-caption\"><b data-l10n=\"午后光线\">午后光线</b><small aria-hidden=\"true\">↗</small></span></div>","frames":[[0,"opacity:0; filter:blur(10px); transform:scale(1.08)"],[100,"opacity:1; filter:blur(0); transform:scale(1)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"760ms"},"_legacyCode":"filter: blur(12px) → none;  /* 与 scale 1.06→1 同步 */","spec":{"id":"blur-in","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":1.08,"to":1,"unit":"none","start":0,"dur":0.76,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.76,"ease":"easeOutExpo"},{"id":"t-filter","target":"self","prop":"filter","from":"blur(10px)","to":"blur(0)","unit":"none","start":0,"dur":0.76,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"flip-in","zh":"翻转入场","en":"Flip in","alias":["3D 翻面进来","rotateY 入场"],"cat":"entrance","vague":"像卡片翻面那样进来","say":"rotateY(-90deg)→0，带 perspective","def":"围绕自身轴旋转 90° 进入，需要 perspective 才成立，否则退化成横向挤压。适合卡片、图片墙、封面。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-photo demo-photo-portrait\"><img src=\"assets/img/p14.jpg\" alt=\"\" loading=\"eager\" decoding=\"async\"><span class=\"demo-photo-caption\"><b data-l10n=\"光影手记\">光影手记</b><small aria-hidden=\"true\">↗</small></span></div>","frames":[[0,"opacity:0; transform:perspective(700px) rotateY(-92deg)"],[100,"opacity:1; transform:perspective(700px) rotateY(0)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"720ms"},"_legacyCode":"perspective: 900px; transform: rotateY(-90deg) → rotateY(0);","spec":{"id":"flip-in","version":1,"timeline":[{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.72,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"stack-in","zh":"层叠入场","en":"Stack in","alias":["卡片堆叠","叠放","deck"],"cat":"entrance","vague":"几张卡叠在一起依次出来","say":"z 轴层叠 + 依次上移，形成 deck 效果","def":"多个元素沿深度方向略微偏移并缩小，形成一叠；再依次抽出。常用于账单、票券、作品集分组。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"stack\"><s class=\"deck\"><i class=\"obj card\"></i></s><s class=\"deck\"><i class=\"obj card\"></i></s><s class=\"deck\"><i class=\"obj card\"></i></s></div>","frames":[[0,"opacity:0; transform:translateY(28px) scale(.92)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"620ms","stack":true,"st":130},"_legacyCode":"transform: translateY(calc(var(--i) * -8px)) scale(calc(1 - var(--i) * 0.04));","spec":{"id":"stack-in","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":28,"to":0,"unit":"px","start":0,"dur":0.62,"ease":"easeOutExpo"},{"id":"t-scale","target":"self","prop":"scale","from":0.92,"to":1,"unit":"none","start":0,"dur":0.62,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.62,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0.13,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"wipe-in","zh":"擦入 / 划入","en":"Wipe in","alias":["擦除转场","wiper","推进色块"],"cat":"entrance","vague":"一道色块扫过去就把内容带出来","say":"色块 wipe 扫过，扫过之后露出新内容","def":"一个实心形状扫过画面，在其背后替换内容。比淡入更有编辑感和节奏感，常用于图片切换和章节转场。","trigger":"time","curve":"easeOutExpo","_legacyEase":"cubic-bezier(0.76,0,0.24,1)","demo":{"kind":"frames","html":"<div class=\"wipepair demo-wipe\"><div class=\"obj demo-content demo-photo wp wp-a\"><img src=\"assets/img/p13.jpg\" alt=\"\" loading=\"eager\" decoding=\"async\"><span class=\"demo-photo-caption\"><b data-l10n=\"午后光线\">午后光线</b><small aria-hidden=\"true\">↗</small></span></div><div class=\"obj demo-content demo-photo wp wp-b\"><img src=\"assets/img/p04.jpg\" alt=\"\" loading=\"eager\" decoding=\"async\"><span class=\"demo-photo-caption\"><b data-l10n=\"追光片刻\">追光片刻</b><small aria-hidden=\"true\">↗</small></span></div><i class=\"wipebar\"></i></div>","frames":[[0,"transform:scaleX(0); transform-origin:left"],[22,"transform:scaleX(1); transform-origin:left"],[25,"transform:scaleX(1); transform-origin:right"],[47,"transform:scaleX(0); transform-origin:right"],[50,"transform:scaleX(0); transform-origin:right"],[72,"transform:scaleX(1); transform-origin:right"],[75,"transform:scaleX(1); transform-origin:left"],[97,"transform:scaleX(0); transform-origin:left"],[100,"transform:scaleX(0); transform-origin:left"]],"e":"cubic-bezier(0.76,0,0.24,1)","d":"1100ms","loop":true,"wipe":true},"_legacyCode":"/* 覆盖层 scaleX 0→1（transform-origin:left），再 100%→0（origin:right） */","spec":{"id":"wipe-in","version":1,"timeline":[{"id":"t-scaleX","target":"self","prop":"scaleX","from":0,"to":0,"unit":"none","start":0,"dur":1.1,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"glitch-in","zh":"故障式入场","en":"Glitch in","alias":["信号干扰","RGB 分离","datamosh"],"cat":"entrance","vague":"那种坏掉、信号不好的出现方式","say":"RGB 通道分离 + 随机位移，3–5 帧后稳定","def":"用错位、色差、扫描线模拟信号损坏的出现方式。风格强烈，属于审美调味，必须短（<400ms）且只在特定语境使用。","trigger":"time","curve":"steps","_legacyEase":"steps(3)","demo":{"kind":"frames","html":"<div class=\"obj txt glitch\" data-text=\"MOTION\">MOTION</div>","frames":[[0,"opacity:0; --glitch-a:1; --glitch-x:9px; --glitch-line:1; transform:translateX(-6px) skewX(8deg)"],[30,"opacity:1; --glitch-a:.92; --glitch-x:6px; --glitch-line:.9; transform:translateX(5px) skewX(-6deg)"],[60,"--glitch-a:.7; --glitch-x:3px; --glitch-line:.55; transform:translateX(-3px)"],[100,"opacity:1; --glitch-a:0; --glitch-x:0px; --glitch-line:0; transform:none"]],"e":"steps(3)","d":"380ms"},"_legacyCode":"/* 多层错位副本 + mix-blend-mode: screen + steps() 抖动 */","spec":{"id":"glitch-in","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":-6,"to":0,"unit":"px","start":0,"dur":0.38,"ease":"steps"},{"id":"t-skewX","target":"self","prop":"skewX","from":8,"to":0,"unit":"deg","start":0,"dur":0.38,"ease":"steps"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.38,"ease":"steps"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"fade-out","zh":"淡出","en":"Fade out","alias":["渐隐","消失"],"cat":"exit","vague":"让它消失掉","say":"160ms ease-in 淡出后卸载","def":"透明度归零后移除。出场几乎都该比入场更快（约一半时长），因为用户已经知道它要去哪，不需要再看清过程。","trigger":"time","curve":"easeIn","demo":{"kind":"frames","frames":[[0,"opacity:1"],[100,"opacity:0"]],"e":"ease-in","d":"200ms"},"_legacyCode":"animation: fade-out 160ms ease-in both;","spec":{"id":"fade-out","version":1,"timeline":[{"id":"t-opacity","target":"self","prop":"opacity","from":1,"to":0,"unit":"none","start":0,"dur":0.2,"ease":"easeIn"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"slide-out","zh":"滑出","en":"Slide out","alias":["推出","离开画面"],"cat":"exit","vague":"把它推走","say":"沿进入方向反向 slide-out + ease-in","def":"平移出画面。方向要与进入方向一致或对称，否则破坏了用户对空间位置的记忆。","trigger":"time","curve":"easeIn","demo":{"kind":"frames","frames":[[0,"opacity:1; transform:none"],[100,"opacity:0; transform:translateX(48px)"]],"e":"cubic-bezier(0.32,0,0.67,0)","d":"420ms"},"_legacyCode":"transform: none → translateX(100%);","spec":{"id":"slide-out","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":0,"to":48,"unit":"px","start":0,"dur":0.42,"ease":"easeIn"},{"id":"t-opacity","target":"self","prop":"opacity","from":1,"to":0,"unit":"none","start":0,"dur":0.42,"ease":"easeIn"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"scale-out","zh":"缩小退场","en":"Scale out / Shrink away","alias":["缩回去","被吸走"],"cat":"exit","vague":"缩掉吧","say":"scale 1→0.94 + 淡出，暗示回到来源","def":"缩小消失。若缩小方向指向它“来自哪里”（比如导航图标、购物车），能强化空间归属感。","trigger":"time","curve":"easeIn","demo":{"kind":"frames","frames":[[0,"opacity:1; transform:scale(1)"],[100,"opacity:0; transform:scale(.8)"]],"e":"ease-in","d":"360ms"},"_legacyCode":"transform: scale(1) → scale(.92);","spec":{"id":"scale-out","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":1,"to":0.8,"unit":"none","start":0,"dur":0.36,"ease":"easeIn"},{"id":"t-opacity","target":"self","prop":"opacity","from":1,"to":0,"unit":"none","start":0,"dur":0.36,"ease":"easeIn"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"collapse-exit","zh":"折叠收起","en":"Collapse","alias":["收起来","高度归零"],"cat":"exit","vague":"别了之后下面内容不要跳","say":"高度收起 240ms，让后续内容平滑上移","def":"退场同时收回自己占据的空间，让后面的内容补位。处理不好会出现“下方内容猛地一跳”，这是删除列表项最常见的观感问题。","trigger":"drag","demo":{"kind":"drag","mode":"swipe","hint":"向左滑走一项，看补位"},"_legacyCode":"grid-template-rows: 1fr → 0fr;  /* 或用 FLIP 补位 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"dissolve","zh":"溶解","en":"Dissolve","alias":["交叉溶解","化开"],"cat":"exit","vague":"两个画面互相化开","say":"cross-dissolve：A 淡出的同时 B 淡入，重叠 200ms","def":"两镜以重叠透明度交接（交叉溶解），或内容自身碎裂消散。是电影语言里“时间流逝/柔和过渡”的经典记号。","trigger":"time","curve":"linear","demo":{"kind":"frames","html":"<div class=\"obj img diss a\"></div><div class=\"obj img diss b\"></div>","frames":[[0,"opacity:1"],[100,"opacity:0"]],"e":"linear","d":"1400ms","loop":true,"alt":true,"dissolve":true},"_legacyCode":"/* A: opacity 1→0 与 B: 0→1 同时进行 */","spec":{"id":"dissolve","version":1,"timeline":[{"id":"t-opacity","target":"self","prop":"opacity","from":1,"to":0,"unit":"none","start":0,"dur":1.4,"ease":"linear"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"unmount","zh":"卸载前退场","en":"Exit animation before unmount","alias":["先退场再移除","exit 动画","DOM 移除时机"],"cat":"exit","vague":"怎么它一下就没了","say":"等退场动画播完（或用 transitionend）再移除 DOM","def":"工程术语：元素必须先播放退场动画、再真正从 DOM 中移除。框架里最典型的坑——state 一改元素立刻消失，退场动画根本没机会执行。","trigger":"time","curve":"easeIn","demo":{"kind":"frames","frames":[[0,"opacity:1; transform:none"],[100,"opacity:0; transform:translateY(16px)"]],"e":"ease-in","d":"420ms","loop":true,"alt":true,"hint":"播完再移除"},"_legacyCode":"await finished(el); el.remove(); /* Web Animations API */","spec":{"id":"unmount","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":0,"to":16,"unit":"px","start":0,"dur":0.42,"ease":"easeIn"},{"id":"t-opacity","target":"self","prop":"opacity","from":1,"to":0,"unit":"none","start":0,"dur":0.42,"ease":"easeIn"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"staggered-exit","zh":"错峰退场","en":"Staggered exit","alias":["依次消失","倒序退场"],"cat":"exit","vague":"一个一个撤掉","say":"退场也保持 stagger，必要时倒序","def":"一组元素依次退场。与入场顺序相反（后进先出）时更符合栈的心智模型，如通知、向导步骤。","trigger":"time","curve":"easeIn","demo":{"kind":"frames","multi":5,"st":60,"frames":[[0,"opacity:1; transform:none"],[100,"opacity:0; transform:translateY(-12px) scale(.96)"]],"e":"ease-in","d":"380ms","loop":true,"alt":true},"_legacyCode":"animation-delay: calc((var(--n) - var(--i)) * 40ms);","spec":{"id":"staggered-exit","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":0,"to":-12,"unit":"px","start":0,"dur":0.38,"ease":"easeIn"},{"id":"t-scale","target":"self","prop":"scale","from":1,"to":0.96,"unit":"none","start":0,"dur":0.38,"ease":"easeIn"},{"id":"t-opacity","target":"self","prop":"opacity","from":1,"to":0,"unit":"none","start":0,"dur":0.38,"ease":"easeIn"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":5,"step":0.06,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"translate","zh":"平移","en":"Translate","alias":["位移","move","translate3d"],"cat":"transform","vague":"把它挪个位置","say":"translate(x,y) 平移，不走布局","def":"改变位置而不影响周围元素，性能最好的移动方式。写 translate3d/translateZ(0) 可以强制元素上独立合成层。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","frames":[[0,"transform:translateX(-50px)"],[100,"transform:translateX(50px)"]],"e":"cubic-bezier(0.65,0,0.35,1)","d":"800ms","loop":true,"alt":true},"_legacyCode":"transform: translate3d(0, -8px, 0);","spec":{"id":"translate","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":-50,"to":50,"unit":"px","start":0,"dur":0.8,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"scale","zh":"缩放","en":"Scale","alias":["放大","变小","zoom"],"cat":"transform","vague":"变大一点点","say":"scale 1→1.04，别超过 1.1","def":"改变视觉尺寸而不改变布局盒。用于 hover 抬升、强调、加载占位。注意文字被放大后会发虚，超过约 1.08 建议改用 font-size 过渡或矢量渲染。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","frames":[[0,"transform:scale(.82)"],[100,"transform:scale(1.1)"]],"e":"ease-in-out","d":"900ms","loop":true,"alt":true},"_legacyCode":"transition: transform 200ms ease-out;\n:hover { transform: scale(1.04); }","spec":{"id":"scale","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":0.82,"to":1.1,"unit":"none","start":0,"dur":0.9,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"rotate","zh":"旋转","en":"Rotate","alias":["转动","spin","转圈"],"cat":"transform","vague":"转一圈","say":"rotate(360deg) 匀速循环","def":"围绕 transform-origin 转动。加载图标、箭头翻向、进度环都靠它；起始角度最好是 0/90/180 的整数关系，收尾才不歪。","trigger":"time","curve":"linear","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-compass\" aria-hidden=\"true\"><svg viewBox=\"0 0 100 100\" fill=\"none\"><circle cx=\"50\" cy=\"50\" r=\"45\" stroke=\"currentColor\" stroke-opacity=\".25\"/><circle cx=\"50\" cy=\"50\" r=\"34\" stroke=\"currentColor\" stroke-opacity=\".3\" stroke-dasharray=\"1 5\"/><path d=\"M50 3v8m0 78v8M3 50h8m78 0h8\" stroke=\"currentColor\"/><path d=\"m50 18 10 32-10 32-10-32Z\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"m50 18 10 32H50Z\" fill=\"currentColor\"/><circle cx=\"50\" cy=\"50\" r=\"3\" fill=\"currentColor\"/></svg></div>","frames":[[0,"transform:rotate(0deg)"],[100,"transform:rotate(360deg)"]],"e":"linear","d":"1600ms","loop":true},"_legacyCode":"animation: spin 1.4s linear infinite;","spec":{"id":"rotate","version":1,"timeline":[{"id":"t-rotate","target":"self","prop":"rotate","from":0,"to":360,"unit":"deg","start":0,"dur":1.6,"ease":"linear"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"skew","zh":"斜切","en":"Skew","alias":["倾斜变形","错切"],"cat":"transform","vague":"让它有速度感地歪一下","say":"skewX 与横向速度联动，形成拖拽感","def":"沿轴错切，把矩形变成平行四边形。与横向移动速度绑定时能制造“被拽着跑”的惯性错觉，常见于跑跳角色和卡片甩动。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","frames":[[0,"transform:translateX(-42px) skewX(8deg)"],[50,"transform:translateX(0) skewX(0deg)"],[100,"transform:translateX(42px) skewX(-8deg)"]],"e":"cubic-bezier(0.65,0,0.35,1)","d":"1100ms","loop":true,"alt":true},"_legacyCode":"transition: transform 220ms ease-out;\n[data-fast] { transform: skewX(-6deg); }","spec":{"id":"skew","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":-42,"to":42,"unit":"px","start":0,"dur":1.1,"ease":"easeInOut"},{"id":"t-skewX","target":"self","prop":"skewX","from":8,"to":-8,"unit":"deg","start":0,"dur":1.1,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"perspective","zh":"透视","en":"Perspective","alias":["视距","3D 深度","perspective-origin"],"cat":"transform","vague":"让 3D 看起来有厚度","say":"父层 perspective: 800px，子元素才具备真实纵深","def":"设定观察者到屏幕的距离，值越小畸变越强。没有 perspective，rotateX/Y 就退化成平面挤压——这是“假 3D”最常见的成因。","trigger":"time","curve":"easeInOut","demo":{"kind":"two","a":{"label":"无 perspective（挤压）","html":"<div class=\"obj card\"></div>","frames":[[0,"transform:rotateY(-60deg)"],[100,"transform:rotateY(60deg)"]],"e":"ease-in-out","d":"1200ms"},"b":{"label":"perspective: 600px（有纵深）","html":"<div class=\"obj card persp\"></div>","frames":[[0,"transform:rotateY(-60deg)"],[100,"transform:rotateY(60deg)"]],"e":"ease-in-out","d":"1200ms"}},"_legacyCode":".stage { perspective: 800px; }  /* 父级 */\n.card  { transform: rotateY(24deg); }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"tilt","zh":"跟随倾斜","en":"3D Tilt","alias":["tilt 效果","鼠标倾斜","陀螺仪卡片"],"cat":"transform","vague":"卡片跟着鼠标歪一下","say":"按光标位置映射 rotateX/rotateY ±8°","def":"根据光标（或设备陀螺仪）位置映射 rotateX/rotateY，让卡片像被光照着的实体。幅度控制在 6–10°，超过就变玩具。","trigger":"time","demo":{"kind":"frames","html":"<div class=\"obj card tilt-target persp\"></div>","behavior":"tilt","hint":"在卡片里移动鼠标"},"_legacyCode":"const rx = (0.5 - y / h) * 12, ry = (x / w - 0.5) * 12;\nel.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"card-flip","zh":"卡片翻面","en":"Card flip","alias":["翻转","正反面","backface"],"cat":"transform","vague":"翻到背面看详情","say":"rotateY(180deg) 换面，配合 backface-visibility","def":"绕垂直轴 180° 换到另一面，是“原地换内容”的空间化表达。需要处理背面镜像（backface-visibility:hidden）与翻转中的可读性。","trigger":"time","demo":{"kind":"list","mode":"flip","hint":"点击翻面"},"_legacyCode":".front, .back { backface-visibility: hidden; }\n.card.is-flipped { transform: rotateY(180deg); }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"transform-origin","zh":"变换原点","en":"Transform origin","alias":["轴心","基准点","缩放中心"],"cat":"transform","vague":"它为什么是往中间缩的，我要从角上缩","say":"transform-origin 设为 bottom center，从底部生长","def":"缩放与旋转围绕的锚点。下拉菜单应以 top 为原点展开（从触发点生长），从中心展开会显得“凭空出现”。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"two","a":{"label":"origin: center","frames":[[0,"transform:scale(.2)"],[100,"transform:scale(1)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"600ms"},"b":{"label":"origin: bottom left","html":"<div class=\"obj card o-bl\"></div>","frames":[[0,"transform:scale(.2)"],[100,"transform:scale(1)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"600ms"}},"_legacyCode":"transform-origin: top right;","spec":{"id":"transform-origin","version":1,"timeline":[{"id":"a-t-scale","target":"self","prop":"scale","from":0.2,"to":1,"unit":"none","start":0,"dur":0.6,"ease":"easeOutExpo"},{"id":"b-t-scale","target":"child","prop":"scale","from":0.2,"to":1,"unit":"none","start":0,"dur":0.6,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"origin-aware","zh":"来源感知动效","en":"Origin-aware animation","alias":["从点击处生长","spatial origin"],"cat":"transform","vague":"菜单要从我点的那个按钮长出来","say":"按触发元素位置动态计算 transform-origin","def":"让动画的原点跟随实际触发点，而不是写死。Material 的 ripple 从触点扩散、FloatingActionBar 从 FAB 生长，都属于这一类，是“空间一致性”的具体实现。","trigger":"time","demo":{"kind":"frames","html":"<div class=\"obj sheet origin-demo\"></div>","behavior":"originAware","hint":"点舞台上任意位置"},"_legacyCode":"el.style.transformOrigin = `${cx}px ${cy}px`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"rotate3d","zh":"任意轴旋转","en":"rotate3d / axis rotation","alias":["rotateX","rotateZ","轴向"],"cat":"transform","vague":"绕斜着的那根轴翻","say":"rotate3d(1,1,0, 180deg) 绕对角轴翻","def":"指定任意空间轴向做旋转，用于骰子、魔方、封面墙。轴向量无需归一化，但必须与容器 perspective 配合。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj card persp\"></div>","frames":[[0,"transform:rotate3d(1,1,0,0deg)"],[100,"transform:rotate3d(1,1,0,360deg)"]],"e":"ease-in-out","d":"1600ms","loop":true},"_legacyCode":"transform: rotate3d(1, 1, 0, 160deg);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"depth-layers","zh":"2.5D 分层","en":"2.5D depth","alias":["2.5 维","图层纵深","伪 3D"],"cat":"transform","vague":"看起来有前后层次","say":"translateZ 分层 + 整体 rotateX，做 2.5D 场景","def":"在真实 3D 空间里摆放 2D 图层。成本低、风格清晰，是网页做“立体设备展示”“卡片空间”的主流手法。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"d25\"><i class=\"obj card l\"></i><i class=\"obj card m\"></i><i class=\"obj card f\"></i></div>","frames":[[0,"transform:rotateX(0) rotateY(0)"],[100,"transform:rotateX(18deg) rotateY(-22deg)"]],"e":"ease-in-out","d":"1400ms","loop":true,"alt":true,"scene":true},"_legacyCode":".layer { transform: translateZ(calc(var(--z) * 1px)); }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"crossfade","zh":"交叉淡入淡出","en":"Crossfade","alias":["叠化","交替透明","fade swap"],"cat":"state","vague":"两张图之间自然换","say":"crossfade 250ms，重叠期各 50% 不透明","def":"旧内容淡出的同时新内容淡入。最安全也最平淡的换态方式：完全没有空间信息，因此不适合方向感强的导航。","trigger":"time","demo":{"kind":"morph","mode":"crossfade"},"_legacyCode":".a { opacity: 1 → 0 } .b { opacity: 0 → 1 }  /* 同时 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"continuity","zh":"连续性转场","en":"Continuity transition","alias":["保持连续","不换场"],"cat":"state","vague":"切换时别让东西乱跳","say":"保持共同元素连续，只让差异部分动","def":"转场中维持视觉对象的身份不中断：同一个标题、同一张图跨状态保持位置连续，只动变化的部分。这是降低“切换迷失感”的核心手法。","trigger":"time","demo":{"kind":"morph","mode":"continuity"},"_legacyCode":"/* 静态部分不参与动画，仅对 diff 做过渡 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"morph","zh":"形变","en":"Morph","alias":["形状变形","path morph","变形"],"cat":"state","vague":"圆变成播放键那个三角","say":"SVG path morph：圆 ⇄ 三角，同锚点数","def":"一个形状连续变成另一个形状。要求两个路径的点数一致（或用 flubber / MorphSVGPlugin 补齐），否则会变成一坨糊。","trigger":"time","demo":{"kind":"morph","mode":"path"},"_legacyCode":"/* 两个同结构 path 之间插值 */\ngsap.to(\"#p\", { morphSVG: \"#target\", duration: 0.5 });","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"shared-element","zh":"共享元素转场","en":"Shared element transition","alias":["hero animation","连续元素","图片放大过渡"],"cat":"state","vague":"点一张缩略图，它要像镜头推进一样变成大图","say":"列表里的图片放大成详情主图，返回时沿原路缩回","def":"列表缩略图与详情主图代表同一张图片。切换时让这张图连续改变位置、大小和圆角，用户就能看懂它从哪里展开、又回到哪里。实现时可以给两端的元素设置相同的转场名称。","trigger":"drag","demo":{"kind":"drag","mode":"shared","hint":"点击封面放大，再点同一封面收回"},"_legacyCode":"/* 更新 DOM 前后，为同一张图设置相同且唯一的名称 */\nsource.style.viewTransitionName = \"hero\";\ndocument.startViewTransition(() => showDetail());","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"layout-animation","zh":"布局动画","en":"Layout animation","alias":["自动布局过渡","位置变化补间"],"cat":"state","vague":"加了个东西别整个页面乱跳","say":"有内容新增、删除或改尺寸时，让周围内容平滑让位","def":"内容增删或尺寸变化时，相关元素从旧位置平滑移动到新位置。可由动画框架、浏览器转场能力或 FLIP 等方式实现。","trigger":"time","demo":{"kind":"list","mode":"layout","hint":"点按钮增删列表项"},"_legacyCode":"<motion.div layout transition={{ type: \"spring\", stiffness: 350, damping: 30 }}>","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"flip","zh":"FLIP 卡片平滑换位","en":"FLIP technique","alias":["First Last Invert Play","反转变换"],"cat":"state","vague":"列表重排时我想要丝滑地互换位置","say":"先记下卡片原来的位置，重新排好后再平滑移过去（FLIP）","def":"FLIP 是 First、Last、Invert、Play 的缩写：记录变化前后的位置，用反向位移把元素放回起点，再播放到新位置。它通常能减少逐帧布局计算，但是否流畅仍取决于页面和设备。","trigger":"time","demo":{"kind":"list","mode":"reorder","hint":"点“换序”看 FLIP 补位"},"_legacyCode":"const first = el.getBoundingClientRect();\napplyNewLayout();\nconst last = el.getBoundingClientRect();\nel.animate([{ transform: `translate(${first.x - last.x}px, ${first.y - last.y}px)` }, { transform: \"none\" }], { duration: 300, easing: \"ease-out\" });","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"accordion","zh":"手风琴","en":"Accordion / Collapse","alias":["折叠面板","展开收起","disclosure"],"cat":"state","vague":"点开一段文字能撑开","say":"accordion：单开互斥 + 高度补间 + 图标 rotate","def":"一组互斥展开的面板，展开时高度补间、指示图标旋转。注意收起后再展开的滚动位置保持，是无障碍与体验的分水岭。","trigger":"time","demo":{"kind":"list","mode":"accordion","hint":"点击标题"},"_legacyCode":"details { transition: height 240ms ease-out; }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"direction-aware","zh":"方向感知转场","en":"Direction-aware transition","alias":["前进后退不同方向","swipe 方向"],"cat":"state","vague":"返回的时候要反着滑回来","say":"前进从右滑入，返回向左滑出（读书写方向）","def":"根据导航方向决定动画方向。前进/后退使用镜像的运动，能替用户建立“层级在水平轴上”的空间模型；忽略方向会让栈的概念崩塌。","trigger":"drag","demo":{"kind":"drag","mode":"direction","hint":"点“前进/返回”"},"_legacyCode":"const sign = isBack ? -1 : 1;  /* translateX(sign * 100%) */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"tab-indicator","zh":"滑动指示条","en":"Sliding indicator","alias":["下划线跟随","tab 滑块","segmented control"],"cat":"state","vague":"分段选项的底色要滑到新选项下面","say":"切换选项时，指示条跟着滑过去，并调整到合适的宽度","def":"选中态由同一个滑块从旧选项连续移动到新选项，并同步改变宽度。用 transform 与宽度过渡表达位置和尺寸变化；选中文字颜色跟随切换，形成清楚的落点反馈。","trigger":"time","demo":{"kind":"list","mode":"tabs","hint":"点不同标签"},"_legacyCode":"indicator.style.transform = `translateX(${x}px)`;\nindicator.style.width = `${w}px`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"smooth-reorder","zh":"筛选后平滑补位","en":"Filter reflow","alias":["过滤后补位","筛选动画","filter reflow"],"cat":"state","vague":"筛选一换，留下的卡片别跳，新卡片也别从远处飞来","say":"留下的卡片平滑补位，离开的淡出，新出现的原地显现","def":"筛选后，留下的卡片轻轻移到新位置；不符合条件的卡片淡出，新卡片在最终位置轻柔出现。内容变化看起来像同一组卡片在整理，而不是整块突然刷新。","trigger":"time","demo":{"kind":"list","mode":"filter","hint":"切换标签：留下的卡片平滑补位，新卡片原地显现"},"_legacyCode":"/* 留下的卡片平移补位；新卡片在最终位置淡入 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"expand-collapse-btn","zh":"点击就地展开","en":"Expand on click","alias":["就地展开","内联展开","accordion inline"],"cat":"state","vague":"别跳转新页，在这条里展开","say":"卡片就地展开详情，容器高度与圆角同步过渡","def":"元素在不离开当前上下文的前提下变高/变宽以承载详情。关键是内容宽度也要参与过渡，否则文字会先重排再淡入，出现两次跳字。","trigger":"time","demo":{"kind":"list","mode":"inline","hint":"点卡片"},"_legacyCode":"transition: grid-template-rows 300ms ease, padding 300ms ease;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scroll-reveal","zh":"滚动显现","en":"Scroll reveal","alias":["滚动进入","fade up on scroll","进入视口才动"],"cat":"scroll","vague":"滚到那里再让它出来","say":"进入视口 20% 时触发 rise-in，只播一次","def":"元素进入视口时才播放入场动画。必须只播一次（或反向也播），否则上下滚动会看到重复动画，显得廉价。","trigger":"scroll","demo":{"kind":"scroll","mode":"reveal","hint":"在框里滚动"},"_legacyCode":"new IntersectionObserver(([e]) => e.isIntersecting && e.target.classList.add(\"in\"), { threshold: 0.2 }).observe(el);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scroll-driven","zh":"滚动驱动动画","en":"Scroll-driven animation","alias":["animation-timeline","scroll()","view()","跟随滚动进度"],"cat":"scroll","vague":"动效进度跟着我滚，不是触发一次","say":"滚动进度直接驱动 animation-timeline: view()","def":"把滚动进度当作时间轴：滚多少就走多少，可回退可倒放。原生 CSS 用 animation-timeline: scroll()/view()，JS 方案靠 IntersectionObserver + 进度换算。","trigger":"scroll","demo":{"kind":"scroll","mode":"driven","hint":"在框里滚动，进度直接映射"},"_legacyCode":"@supports (animation-timeline: view()) {\n  .x { animation: rise linear both; animation-timeline: view(); animation-range: entry 10% cover 40%; }\n}","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"parallax","zh":"视差","en":"Parallax","alias":["视差滚动","多层不同速","深度错觉"],"cat":"scroll","vague":"背景动得慢一点，有纵深","say":"背景以 0.3 倍滚动速度位移（视差）","def":"不同图层以不同速度移动，制造纵深。位移比是核心参数：0.2–0.5 自然，接近 1 就晕了。移动端慎用——滚动与画面延迟会造成眩晕。","trigger":"scroll","demo":{"kind":"scroll","mode":"parallax","hint":"在框里滚动"},"_legacyCode":"layer.style.transform = `translateY(${scrollY * 0.3}px)`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"sticky-pinning","zh":"吸附固定","en":"Sticky pinning","alias":["sticky 固定","钉住","pin section"],"cat":"scroll","vague":"滚到那里它停住，让内容在它上面走","say":"section position: sticky 钉住 2 屏，期间走内部动画","def":"某元素在滚动中固定在视口一段时间（“钉住”），用来承载一段被滚动驱动的动画。Apple 产品页那种“滚很久、图不换”的效果就是 pinning。","trigger":"scroll","demo":{"kind":"scroll","mode":"sticky","hint":"滚动：顶部会钉住"},"_legacyCode":".pin { position: sticky; top: 0; height: 100vh; }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scroll-progress","zh":"滚动进度指示","en":"Scroll progress","alias":["阅读进度条","进度条","scroll linked bar"],"cat":"scroll","vague":"顶部一条线告诉我读到哪了","say":"滚动进度映射到 scaleX 的进度条","def":"把阅读/流程进度可视化成长度变化。用 transform: scaleX 而非 width，可避免每帧触发布局。","trigger":"scroll","demo":{"kind":"scroll","mode":"progress","hint":"滚动看顶部进度"},"_legacyCode":"bar.style.transform = `scaleX(${scrollY / (docH - winH)})`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"smooth-scroll","zh":"平滑滚动","en":"Smooth scroll","alias":["惯性滚动","lerp 滚动","锚点滚动"],"cat":"scroll","vague":"点导航过去时丝滑滑到位","say":"scroll-behavior: smooth 做锚点补间","def":"用补间（lerp/缓动）替代瞬时跳转。注意区分：锚点滚动补间（有益）与整站惯性跟随（会破坏原生手感，需谨慎）。","trigger":"scroll","demo":{"kind":"scroll","mode":"smooth","hint":"点标签跳转"},"_legacyCode":"html { scroll-behavior: smooth; }\nel.scrollIntoView({ behavior: \"smooth\", block: \"center\" });","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scroll-linked-value","zh":"滚动映射数值","en":"Scroll-linked value","alias":["映射","map range","进度换算"],"cat":"scroll","vague":"滚到一半的时候字号最大","say":"把滚动区间映射到 16–48px 字号","def":"把某个滚动区间线性映射到任意数值（字号、透明度、旋转、颜色）。核心是三件套：clamp + map + ease，把区间外钳住避免溢出。","trigger":"scroll","demo":{"kind":"scroll","mode":"map","hint":"滚动看数字被映射"},"_legacyCode":"const t = clamp((y - a) / (b - a), 0, 1);\nsize = lerp(16, 48, easeOut(t));","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scroll-snap","zh":"滚动吸附","en":"Scroll snap","alias":["scroll-snap-type","整屏吸附","分屏翻页"],"cat":"scroll","vague":"滚轮停下时，选中的数字要刚好卡在中间","say":"滚动吸附：每个选项对齐中线，惯性停下后落在最近项","def":"滚动停下时，浏览器把内容对齐到预设位置。iOS 风格的日期滚轮就是一种常见用法：手指松开后，数字按惯性滑动并吸附到中间的选项。","trigger":"scroll","demo":{"kind":"scroll","mode":"snap","hint":"上下滑动月份、日期或年份"},"_legacyCode":".wheel { scroll-snap-type: y mandatory; }\n.option { scroll-snap-align: center; }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scrollytelling","zh":"滚动叙事","en":"Scrollytelling","alias":["滚动故事线","长文交互叙事","章节驱动"],"cat":"scroll","vague":"一边滚一边把故事讲完，图也跟着变","say":"分章节 pin + 图表随滚动切换状态","def":"用滚动进度承载叙事结构：章节、揭示节奏、图表变化全部由滚动驱动。适合数据新闻与品牌长页；导航成本高，不宜承载任务型功能。","trigger":"scroll","demo":{"kind":"scroll","mode":"story","hint":"滚动推进剧情"},"_legacyCode":"/* 每章一个 step，IntersectionObserver 切换 active 状态 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scroll-hijacking","zh":"劫持滚动","en":"Scroll hijacking","alias":["强制翻页","接管滚轮"],"cat":"scroll","vague":"滚一下就翻一整屏","say":"劫持滚轮做整屏翻页（谨慎）","def":"接管浏览器原生滚动，把滚轮事件变成翻页指令。体验风险最高的一类：用户失去位置感、触控板误触发、无障碍问题——除非理由极强，否则不要做。","trigger":"scroll","demo":{"kind":"scroll","mode":"hijack","hint":"在框里滚一下试试"},"_legacyCode":"/* 慎用：wheel 事件 preventDefault + 自定义索引 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"ken-burns","zh":"肯·伯恩斯效果","en":"Ken Burns","alias":["图片缓慢推近","平移缩放长镜头"],"cat":"scroll","vague":"一张静图让它慢慢推近就不呆","say":"Ken Burns：20s 内缓慢 scale 1→1.12 + 平移","def":"对静态图像做极缓慢的推拉与平移（源自纪录片），让画面“活着”。时长要长（10–25s）、幅度要小到不易察觉，否则观众会意识到在动。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj img wide\"></div>","frames":[[0,"transform:scale(1) translate(0,0)"],[100,"transform:scale(1.14) translate(-3%, -2%)"]],"e":"ease-in-out","d":"6000ms","loop":true,"alt":true},"_legacyCode":"animation: kb 18s ease-in-out infinite alternate;","spec":{"id":"ken-burns","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":1,"to":1.14,"unit":"none","start":0,"dur":6,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"infinite-load","zh":"无限滚动加载","en":"Infinite scroll loading","alias":["瀑布加载","sentinel 触发","load more"],"cat":"scroll","vague":"滚到底自动再来一批，别硬闪","say":"哨兵元素进入视口前 300px 预取，追加后不重置滚动位置","def":"滚动接近底部时自动加载下一页。体验要点：提前预取（rootMargin）、占位卡片保持骨架、以及绝不把滚动位置弹回顶部。","trigger":"scroll","demo":{"kind":"scroll","mode":"loadmore","hint":"滚到底自动补"},"_legacyCode":"new IntersectionObserver(cb, { rootMargin: \"300px\" }).observe(sentinel);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"hover-lift","zh":"悬停抬升","en":"Hover lift","alias":["悬浮上浮","hover 阴影","卡片浮起"],"cat":"feedback","vague":"鼠标放上去要有点反应","say":"hover：translateY(-4px) + 阴影层级 +1","def":"悬停时元素上移并加深阴影，暗示“这是可点的、离你更近了”。位移 2–6px 足够；配 transition 200ms，移出同样要动。","trigger":"hover","curve":"easeOutExpo","demo":{"kind":"frames","play":"hover","frames":[[0,"transform:none; box-shadow:0 1px 0 rgba(0,0,0,.3)"],[100,"transform:translateY(-6px); box-shadow:0 14px 24px -10px rgba(0,0,0,.6)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"220ms","hint":"鼠标移到卡片上"},"_legacyCode":":hover { transform: translateY(-4px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.4); }","spec":{"id":"hover-lift","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":0,"to":-6,"unit":"px","start":0,"dur":0.22,"ease":"easeOutExpo"},{"id":"t-box-shadow","target":"self","prop":"box-shadow","from":"0 1px 0 rgba(0,0,0,.3)","to":"0 14px 24px -10px rgba(0,0,0,.6)","unit":"none","start":0,"dur":0.22,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"native","film-camera":"unavailable"}},{"id":"hover-zoom","zh":"图片悬停放大","en":"Image zoom on hover","alias":["图片hover缩放","作品墙放大"],"cat":"feedback","vague":"指到哪里，哪里的细节就放大给我看","say":"悬停时放大图像并以指针为中心取景；触屏点按锁定放大镜","def":"放大镜跟随指针移动，镜内只呈现原图对应位置的放大裁切。桌面端移入即可查看，触屏端点按锁定、再点一次收起；图片容器保持原尺寸，周围布局不跟着抖动。","trigger":"drag","demo":{"kind":"drag","mode":"zoom","hint":"移入画面查看细节；触屏点按放大镜"},"_legacyCode":".zoom-frame { overflow: hidden; }\n.zoom-lens { clip-path: circle(50%); }\n/* 镜内图片按指针坐标反向平移，再放大 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"underline-expand","zh":"下划线展开","en":"Underline expand","alias":["下划线滑入","链接 hover 动效"],"cat":"feedback","vague":"链接那条线从左边长出来","say":"下划线 scaleX 0→1，origin left","def":"用 transform-origin 让下划线从一侧长出而不是整条淡入。方向要与阅读方向一致。","trigger":"hover","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"obj txt link\">悬停看这条线</div>","play":"hover","frames":[[0,"transform:scaleX(0)"],[100,"transform:scaleX(1)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"280ms","underline":true,"hint":"悬停"},"_legacyCode":"a::after { transform: scaleX(0); transform-origin: left; transition: transform 240ms ease-out; }\na:hover::after { transform: scaleX(1); }","spec":{"id":"underline-expand","version":1,"timeline":[{"id":"t-scaleX","target":"self","prop":"scaleX","from":0,"to":1,"unit":"none","start":0,"dur":0.28,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"unavailable","film-rk":"unavailable","json":"native","film-camera":"unavailable"}},{"id":"press-feedback","zh":"按下反馈","en":"Press / Tap feedback","alias":["点击态","active 态","按压"],"cat":"feedback","vague":"按下去要有手感","say":"active: scale(0.96)，100ms，回弹 ease-out","def":"按下时元素缩小（0.94–0.97）表示接受了输入。触屏上尤其关键——没有按压反馈，用户会怀疑没点到而重复点击。","trigger":"press","curve":"easeOut","demo":{"kind":"frames","html":"<div class=\"obj btn\">按住我</div>","play":"press","frames":[[0,"transform:scale(1)"],[100,"transform:scale(.93)"]],"e":"ease-out","d":"90ms","hint":"按住不放"},"_legacyCode":"button:active { transform: scale(.96); transition-duration: 80ms; }","spec":{"id":"press-feedback","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":1,"to":0.93,"unit":"none","start":0,"dur":0.09,"ease":"easeOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"unavailable","film-rk":"unavailable","json":"native","film-camera":"unavailable"}},{"id":"ripple","zh":"水波纹反馈","en":"Ripple","alias":["涟漪","material ripple","触点扩散"],"cat":"feedback","vague":"点一下从指尖散开一圈","say":"从触点扩散 ripple，450ms ease-out 后淡出","def":"Material 的招牌反馈：从实际触点扩散一圈半透明波纹。价值在于它精确地确认了“我点在哪”，因此原点必须用真实坐标计算。","trigger":"drag","demo":{"kind":"drag","mode":"ripple","hint":"在按钮上点击任意位置"},"_legacyCode":"const r = el.getBoundingClientRect();\nspan.style.left = `${x - r.left}px`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"hold-to-confirm","zh":"长按确认","en":"Hold to confirm","alias":["按住确定","progress on hold","危险操作"],"cat":"feedback","vague":"要点住一秒才生效，防误触","say":"按住 800ms，进度条填满才触发","def":"需要持续按压一段时间（进度反馈）才执行的动作，用于危险或不可撤销操作。松手要能回退进度，这是它区别于普通按钮的核心。","trigger":"drag","demo":{"kind":"drag","mode":"hold","hint":"按住不放，看进度填满"},"_legacyCode":"/* pointerdown 起 progress，pointerup 前未完成则 animate 回 0 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"drag","zh":"拖拽","en":"Drag","alias":["拖动","pointer events","拖拽跟手"],"cat":"feedback","vague":"能拖着走，松手别乱弹","say":"拖拽跟手（pointer capture）+ 松手按速度抛掷","def":"元素跟随指针移动。三个细节决定质感：grab 时轻微放大、拖拽中 skew 跟随横向速度、松手用速度做惯性投影。","trigger":"drag","demo":{"kind":"drag","mode":"drag","hint":"抓住方块拖，松手看惯性"},"_legacyCode":"el.setPointerCapture(e.pointerId);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"drag-reorder","zh":"拖拽排序","en":"Drag to reorder","alias":["拖拽换位","sortable","dnd"],"cat":"feedback","vague":"拖着重排，其他行要让开","say":"拖起抬升+投影，兄弟项 FLIP 让位","def":"列表拖拽换序。被拖项要“抬起来”（放大+阴影），其余项用 FLIP 平滑让位；松手必须回落到网格位置，不能停在鼠标处。","trigger":"drag","demo":{"kind":"drag","mode":"reorder","hint":"拖动列表项换序"},"_legacyCode":"/* 拖起: scale 1.04 + z-index; 让位: siblings FLIP */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"swipe-dismiss","zh":"滑动划走","en":"Swipe to dismiss","alias":["侧滑删除","swipe away","滑掉"],"cat":"feedback","vague":"往左一划就删了","say":"左右拖动卡片：超过阈值后飞出，下一张原位补上；未过阈值就回弹","def":"卡片跟随手势横向移动并轻微倾斜，位移达到阈值后沿当前方向离场；下一张从原有层级顺势补位，未达到阈值则弹回。示例同时提供左右按钮，触屏、鼠标和键盘都能完成操作。","trigger":"drag","demo":{"kind":"drag","mode":"swipe","hint":"左右拖动卡片，或点两侧按钮选择"},"_legacyCode":"const willDismiss = Math.abs(dx) > width * 0.28;\ncard.animate([{ transform: drag }, { transform: `translateX(${sign * width}px)` }]);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"rubber-band","zh":"橡皮筋阻尼","en":"Rubber-banding","alias":["过拉回弹","overscroll","边界阻尼"],"cat":"feedback","vague":"滚到头了还能拉一点，松手会弹回来","say":"内容到达滚动边界后，继续拖动的距离逐渐压缩；松手后弹回边界","def":"滚动内容到达顶部或底部后，手势仍能带动画面继续移动，但越拉越费力；松手时，内容沿着同一条轴线回到边界。阻尼让用户感觉“到头了”，回弹则把位置重新对齐。","trigger":"drag","demo":{"kind":"drag","mode":"rubber","hint":"拖动列表到顶部或底部，再继续拉一下"},"_legacyCode":"const over = rawScroll - clamp(rawScroll, 0, maxScroll);\nconst stretch = Math.sign(over) * (Math.sqrt(Math.abs(over) + 1) - 1) * 5.2;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"shake","zh":"抖动","en":"Shake","alias":["报错摇头","wiggle error","拒绝反馈"],"cat":"feedback","vague":"密码错了让它抖一下","say":"shake：x 位移 3 次衰减，400ms","def":"左右快速衰减抖动，表示拒绝或错误。是人类摇头动作的抽象，因此只能用在失败反馈上；频率高、时长短（<500ms）。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj field\">错误密码</div>","frames":[[0,"transform:translateX(0)"],[15,"transform:translateX(-10px)"],[35,"transform:translateX(8px)"],[55,"transform:translateX(-5px)"],[75,"transform:translateX(3px)"],[100,"transform:translateX(0)"]],"e":"ease-in-out","d":"440ms","hint":"每次进入自动重播"},"_legacyCode":"@keyframes shake { 20%{transform:translateX(-8px)} 40%{translateX(6px)} 60%{-4px} 80%{2px} }","spec":{"id":"shake","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":0,"to":0,"unit":"px","start":0,"dur":0.44,"ease":"easeInOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"nudge","zh":"轻推提示","en":"Nudge / Wiggle","alias":["戳一下","吸引注意","bob"],"cat":"feedback","vague":"让它自己动一下提醒我点","say":"首次进入 nudge 一次：Y 位移 ±4px，两个来回","def":"比 shake 温柔得多的提醒动作，通常只做 1–2 个来回就停。用于引导用户注意到入口，切忌循环播放（会被当成 bug 或噪声）。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj chip\">点我试试</div>","frames":[[0,"transform:translateY(0)"],[30,"transform:translateY(-6px)"],[60,"transform:translateY(2px)"],[80,"transform:translateY(-2px)"],[100,"transform:none"]],"e":"ease-in-out","d":"620ms","repeat":2},"_legacyCode":"animation: nudge 620ms ease-in-out 2;","spec":{"id":"nudge","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":0,"to":0,"unit":"px","start":0,"dur":0.62,"ease":"easeInOut"}],"loop":{"count":2,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"pulse","zh":"脉冲","en":"Pulse","alias":["呼吸光环","ping","扩散提示"],"cat":"feedback","vague":"像心跳一样往外扩一圈圈","say":"pulse：scale + opacity 循环，周期 1.8s","def":"周期性缩放或扩散光环，表示“活的/有新东西”。频率应低于人的静息心率观感（>1.5s 一轮），否则制造焦虑。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"obj dot pulse\"><i class=\"ring\"></i></div>","frames":[[0,"transform:scale(.6); opacity:.9"],[100,"transform:scale(2.1); opacity:0"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"1800ms","loop":true,"pulse":true},"_legacyCode":"animation: pulse 1.8s ease-out infinite;","spec":{"id":"pulse","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":0.6,"to":2.1,"unit":"none","start":0,"dur":1.8,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0.9,"to":0,"unit":"none","start":0,"dur":1.8,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"focus-ring","zh":"焦点环","en":"Focus ring","alias":["键盘焦点","focus-visible","可达性焦点"],"cat":"feedback","vague":"Tab 到它的时候圈一下","say":":focus-visible 显示 2px outline + offset","def":"键盘导航时显示的可见焦点。它是无障碍的强制项而不是可选装饰；只在 focus-visible（键盘触发）时显示，避免鼠标点击也出现描边。","trigger":"time","curve":"easeOut","demo":{"kind":"frames","html":"<div class=\"focus-set\"><span class=\"focus-caption\">键盘焦点会落在这里</span><button type=\"button\" class=\"obj focus-demo focus-choice\">概览</button><button type=\"button\" class=\"obj focus-demo focus-choice\">动效</button><button type=\"button\" class=\"obj focus-demo focus-choice\">代码</button></div>","behavior":"focus","frames":[[0,"outline-offset:5px; outline-color:transparent"],[100,"outline-offset:2px; outline-color:var(--accent)"]],"e":"ease-out","d":"180ms","hint":"按 Tab 依次查看焦点环；Shift + Tab 反向"},"_legacyCode":":focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"cursor-magnet","zh":"磁吸跟随","en":"Magnetic hover","alias":["磁吸按钮","cursor follow","吸附"],"cat":"feedback","vague":"鼠标靠近按钮就被吸过去","say":"按钮朝光标偏移最多 8px，离开 spring 回位","def":"光标靠近时按钮朝其轻微位移，像被吸引。让界面显得有“引力场”，常用于 CTA。偏移要小（<12px），否则显得不受控。","trigger":"time","demo":{"kind":"frames","html":"<div class=\"obj btn magnet\">磁吸</div>","behavior":"magnet","hint":"把光标移近按钮"},"_legacyCode":"const dx = (cx - bx / 2) * 0.28;  /* 越近吸得越明显 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"pull-to-refresh","zh":"下拉刷新","en":"Pull to refresh","alias":["下拉加载","PTR","越界下拉"],"cat":"feedback","vague":"往下拽出个圈圈刷新","say":"下拉越过阈值后松手刷新，指示器旋转 360°","def":"在列表顶部继续下拉以触发刷新，带橡皮筋阻尼和一个随距离渐显的指示器。本质是把物理动作映射成“把新东西拽出来”的隐喻。","trigger":"drag","demo":{"kind":"drag","mode":"ptr","hint":"向下拖列表，越过阈值松手"},"_legacyCode":"/* 顶部越界距离 → 指示器 rotate/opacity，越过 72px 触发 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"skeleton","zh":"骨架屏","en":"Skeleton screen","alias":["占位骨架","加载占位","shimmer 占位"],"cat":"feedback","vague":"先给个灰块别一片空白","say":"骨架屏 + shimmer 扫光，尺寸对齐真实内容","def":"用与真实内容同形状的灰色占位块代替 spinner。感知性能利器：它让等待显得更短，并且提前告知布局结构，避免内容到达时的跳动（CLS）。","trigger":"time","curve":"linear","demo":{"kind":"frames","html":"<article class=\"sk\"><div class=\"sk-top\"><i class=\"sk-avatar\"></i><span class=\"sk-user\"><i class=\"sk-line sk-name\"></i><i class=\"sk-line sk-meta\"></i></span></div><i class=\"sk-cover\"></i><i class=\"sk-line sk-title\"></i><i class=\"sk-line sk-copy\"></i><i class=\"sk-line sk-copy short\"></i><div class=\"sk-bottom\"><i class=\"sk-line sk-tag\"></i><i class=\"sk-line sk-action\"></i></div></article>","frames":[[0,"background-position:120% 0"],[100,"background-position:-20% 0"]],"e":"linear","d":"1600ms","loop":true,"shimmer":true,"st":-500},"_legacyCode":"background: linear-gradient(90deg, #222 25%, #2e2e2e 37%, #222 63%);\nbackground-size: 400% 100%; animation: shimmer 1.4s ease-in-out infinite;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"toast-in","zh":"轻提示入场","en":"Toast enter","alias":["消息条","snackbar 出现"],"cat":"feedback","vague":"右上角弹一条提示","say":"toast：translateY+fade 240ms，4s 后 ease-in 退场","def":"临时通知的进出场。要点：从屏幕边缘进入（表明来源是系统）、不打断输入、自动消失且消失比出现快。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"obj toast\">已保存到云端</div>","frames":[[0,"opacity:0; transform:translateY(14px) scale(.96)"],[10,"opacity:1; transform:none"],[93.33,"opacity:1; transform:none"],[100,"opacity:0; transform:translateY(-6px)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"2400ms","loop":true},"_legacyCode":"animation: toast-in 240ms cubic-bezier(0.16,1,0.3,1) both;\nanimation: toast-out 160ms ease-in both;","spec":{"id":"toast-in","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":14,"to":-6,"unit":"px","start":0,"dur":2.4,"ease":"easeOutExpo"},{"id":"t-scale","target":"self","prop":"scale","from":0.96,"to":1,"unit":"none","start":0,"dur":2.4,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":0,"unit":"none","start":0,"dur":2.4,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"progress-bar","zh":"进度指示","en":"Progress indicator","alias":["linear progress","不确定态"],"cat":"feedback","vague":"给个条告诉我进行到哪","say":"确定态 scaleX 映射真实进度；不确定态循环扫动","def":"可量化任务用确定进度条（要有真实数据），不可量化时用不确定态扫动。虚假的“假进度”会让用户对真实等待更不耐烦。","trigger":"time","curve":"material","demo":{"kind":"frames","html":"<div class=\"obj trackbar\"><i class=\"fill\"></i></div>","frames":[[0,"transform:scaleX(0)"],[100,"transform:scaleX(1)"]],"e":"cubic-bezier(0.4,0,0.2,1)","d":"1600ms","loop":true,"bar":true},"_legacyCode":"bar.style.transform = `scaleX(${done / total})`;","spec":{"id":"progress-bar","version":1,"timeline":[{"id":"t-scaleX","target":"self","prop":"scaleX","from":0,"to":1,"unit":"none","start":0,"dur":1.6,"ease":"material"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"loop","zh":"循环","en":"Loop / Iteration","alias":["无限循环"],"cat":"loop","vague":"一直动","say":"infinite 循环，接缝处首尾帧必须一致","def":"动画重复播放。判断循环质量的标准只有一个：能否找出接缝（seam）。首帧与末帧的任何差异都会变成可见的“顿一下”。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","frames":[[0,"transform:translateY(8px)"],[50,"transform:translateY(-8px)"],[100,"transform:translateY(8px)"]],"e":"ease-in-out","d":"2400ms","loop":true},"_legacyCode":"animation: bob 2.4s ease-in-out infinite;","spec":{"id":"loop","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":8,"to":8,"unit":"px","start":0,"dur":2.4,"ease":"easeInOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"marquee","zh":"跑马灯","en":"Marquee","alias":["无限滚动条","logo 墙","无缝滚动"],"cat":"loop","vague":"一排 logo 一直往左走","say":"内容复制一份，translateX(-50%) 无缝循环","def":"横向（纵向亦可）无限滚动的内容带，常用于 logo 墙、公告。无缝的关键是把内容复制两份并移动 -50%，而不是移动一个内容宽度。","trigger":"time","curve":"linear","demo":{"kind":"frames","html":"<div class=\"marquee\"><span>LOGO</span><span>LOGO</span><span>LOGO</span><span>LOGO</span><span>LOGO</span><span>LOGO</span><span>LOGO</span><span>LOGO</span></div>","frames":[[0,"transform:translateX(0)"],[100,"transform:translateX(-50%)"]],"e":"linear","d":"6000ms","loop":true,"marquee":true},"_legacyCode":".track { animation: marquee 18s linear infinite; }\n@keyframes marquee { to { transform: translateX(-50%) } }","spec":{"id":"marquee","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":0,"to":-50,"unit":"px","start":0,"dur":6,"ease":"linear"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"orbit","zh":"环绕","en":"Orbit","alias":["绕行","公转","环形运动"],"cat":"loop","vague":"有小点点围着转","say":"多颗卫星不同半径/周期环绕，形成轨道感","def":"元素沿圆形或椭圆路径围绕中心运动。用 rotate 外层容器 + 反向 rotate 内层可保持卫星自身不翻转。","trigger":"time","curve":"linear","demo":{"kind":"frames","html":"<div class=\"orbit-box\"><i class=\"o o1\"></i><i class=\"o o2\"></i><i class=\"c\"></i></div>","frames":[[0,"transform:rotate(0)"],[100,"transform:rotate(360deg)"]],"e":"linear","d":"4200ms","loop":true,"orbit":true},"_legacyCode":".orbit { animation: spin 6s linear infinite; }\n.satellite { animation: spin 6s linear infinite reverse; }","spec":{"id":"orbit","version":1,"timeline":[{"id":"t-rotate","target":"self","prop":"rotate","from":0,"to":360,"unit":"deg","start":0,"dur":4.2,"ease":"linear"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"float","zh":"漂浮","en":"Float","alias":["悬浮","上下浮动"],"cat":"loop","vague":"让它悬着，轻轻晃","say":"float：Y ±6px + 微旋转，3–5s alternate","def":"缓慢上下漂浮，暗示元素处于失重或悬浮状态。周期要长（3s 以上）、幅度要小，配合阴影变化才可信。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","frames":[[0,"transform:translateY(7px) rotate(-1.5deg)"],[100,"transform:translateY(-7px) rotate(1.5deg)"]],"e":"ease-in-out","d":"3200ms","loop":true,"alt":true},"_legacyCode":"animation: float 4s ease-in-out infinite alternate;","spec":{"id":"float","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":7,"to":-7,"unit":"px","start":0,"dur":3.2,"ease":"easeInOut"},{"id":"t-rotate","target":"self","prop":"rotate","from":-1.5,"to":1.5,"unit":"deg","start":0,"dur":3.2,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"idle-breathing","zh":"待机呼吸","en":"Idle / Breathing","alias":["idle animation","角色待机","微动"],"cat":"loop","vague":"让它看起来是活的，但别明显","say":"idle：scale 1→1.015，4.5s 周期","def":"静止状态下极微弱的持续变化（呼吸、微缩放、光晕），让吉祥物和插画不显得死板。理想效果是用户说不出它在动，但停掉会觉得死。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj blob\"></div>","frames":[[0,"transform:scale(1)"],[100,"transform:scale(1.015)"]],"e":"ease-in-out","d":"4500ms","loop":true,"alt":true},"_legacyCode":"animation: breathe 4.5s ease-in-out infinite alternate;","spec":{"id":"idle-breathing","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":1,"to":1.015,"unit":"none","start":0,"dur":4.5,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"spinner","zh":"加载指示器","en":"Spinner","alias":["loading","活动指示"],"cat":"loop","vague":"转个圈表示在加载","say":"spinner：匀速旋转 + 端点渐变，1s 一轮","def":"不确定加载时间的循环指示。注意它只表达“系统还活着”，不表达进度；能拿到进度就该换成进度条或骨架屏。","trigger":"time","curve":"linear","demo":{"kind":"frames","html":"<div class=\"obj spinner\"></div>","frames":[[0,"transform:rotate(0)"],[100,"transform:rotate(360deg)"]],"e":"linear","d":"900ms","loop":true},"_legacyCode":"animation: spin 0.9s linear infinite;","spec":{"id":"spinner","version":1,"timeline":[{"id":"t-rotate","target":"self","prop":"rotate","from":0,"to":360,"unit":"deg","start":0,"dur":0.9,"ease":"linear"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"shimmer","zh":"扫光","en":"Shimmer","alias":["高光扫过","微光流动","sweep"],"cat":"loop","vague":"有一道光慢慢扫过去","say":"渐变背景位移，做扫光效果","def":"让高光在表面扫过，模拟材质反光或加载中的呼吸。实现上多为背景位移而非元素移动，性能开销主要在合成层。","trigger":"time","curve":"linear","demo":{"kind":"frames","html":"<div class=\"obj chip shine\">扫光标签</div>","frames":[[0,"background-position:-100% 0"],[100,"background-position:200% 0"]],"e":"linear","d":"2200ms","loop":true,"shine":true},"_legacyCode":"background-size: 200% 100%; animation: sweep 2.2s linear infinite;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"gradient-sweep","zh":"流动渐变","en":"Animated gradient","alias":["渐变流动","mesh 背景动"],"cat":"loop","vague":"背景颜色慢慢变","say":"大面积渐变缓慢位移/旋转，15–30s 周期","def":"让渐变本身随时间变化，常用于 hero 背景。周期必须极长（15s+），任何可察觉的“节奏”都会显得廉价并抢内容。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj grad wide\"></div>","frames":[[0,"background-position:0% 50%"],[100,"background-position:100% 50%"]],"e":"ease-in-out","d":"15000ms","loop":true,"alt":true},"_legacyCode":"background-size: 300% 300%; animation: drift 24s ease-in-out infinite alternate;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"confetti","zh":"粒子喷发","en":"Particle burst / Confetti","alias":["撒花","彩带","庆祝动效"],"cat":"loop","vague":"成功了撒点花","say":"从成功点向外喷发 30–60 颗粒子，重力+衰减","def":"庆祝性粒子喷射。属于高频情绪反馈，只在真正的里程碑触发；每次粒子数与存活时间要设上限，否则掉帧。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"burst\"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>","frames":[[0,"transform:translate(0,0) scale(.4); opacity:1"],[100,"transform:translate(var(--dx),var(--dy)) scale(0); opacity:0"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"1100ms","loop":true,"burst":true},"_legacyCode":"/* canvas 或 DOM 粒子：v0 + gravity + drag + life */","spec":{"id":"confetti","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":0.4,"to":0,"unit":"none","start":0,"dur":1.1,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":1,"to":0,"unit":"none","start":0,"dur":1.1,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"ambient","zh":"环境动效","en":"Ambient motion","alias":["氛围动画","背景微动","living background"],"cat":"loop","vague":"背景有点东西在慢慢动","say":"背景层做低对比、长周期的环境运动","def":"不构成信息、只负责空气感的运动（缓慢光斑、漂浮几何、噪点流动）。判断标准：把内容截图出来，它不该占据任何注意力。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"amb\"><i></i><i></i><i></i></div>","frames":[[0,"transform:translate(0,0) scale(1)"],[100,"transform:translate(18px,-14px) scale(1.15)"]],"e":"ease-in-out","d":"4200ms","loop":true,"alt":true,"ambient":true,"st":-1400},"_legacyCode":"animation: drift 30s ease-in-out infinite alternate;","spec":{"id":"ambient","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":1,"to":1.15,"unit":"none","start":0,"dur":4.2,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":-1.4,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"steps-seamless","zh":"无接缝循环","en":"Seamless cycle","alias":["接缝","首尾一致","loop point"],"cat":"loop","vague":"为什么它每次都顿一下","say":"首尾帧状态一致 + 缓动对称，消除接缝","def":"循环动画的质量门槛：找不到循环点。常见破坏原因是用了 alternate + ease-in-out（每端都慢下来形成“点头”），改用 sine 或 keyframe 手工对齐速度。","trigger":"time","curve":"easeInOut","demo":{"kind":"two","a":{"label":"ease-in-out · 端点有顿感","frames":[[0,"transform:translateX(-46px)"],[100,"transform:translateX(46px)"]],"e":"ease-in-out","d":"900ms","loop":true,"alt":true},"b":{"label":"sine-in-out · 接近无接缝","frames":[[0,"transform:translateX(-46px)"],[100,"transform:translateX(46px)"]],"e":"cubic-bezier(0.37,0,0.63,1)","d":"900ms","loop":true,"alt":true}},"_legacyCode":"/* 反例：ease-in-out + alternate → 端点可见停顿 */\n/* 正解：cubic-bezier(0.37,0,0.63,1) 近似正弦 */","spec":{"id":"steps-seamless","version":1,"timeline":[{"id":"a-t-translateX","target":"self","prop":"translateX","from":-46,"to":46,"unit":"px","start":0,"dur":0.9,"ease":"easeInOut"},{"id":"b-t-translateX","target":"child","prop":"translateX","from":-46,"to":46,"unit":"px","start":0,"dur":0.9,"ease":"easeIn"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"typewriter","zh":"打字机","en":"Typewriter","alias":["逐字打出","打字效果","光标闪烁"],"cat":"text","vague":"一个字一个字冒出来","say":"逐字 reveal 40ms/字 + 光标闪烁","def":"逐字符显示，模拟输入。速度感来自字符间隔（25–60ms）而不是总时长；长文本用它反而低效，因为阅读速度赶不上打字速度。","trigger":"time","demo":{"kind":"type","mode":"typewriter"},"_legacyCode":"steps(n) + width: 0 → 100%;  /* n = 字符数，等宽字体最稳 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scramble","zh":"乱码解码","en":"Scramble / Decode","alias":["文字随机","黑客效果","decode text"],"cat":"text","vague":"花符跳几下变成字","say":"随机字符逐步收敛为目标文本，600ms","def":"文字先呈现随机字符再逐位“解码”为正文。科技感强，适合标题与状态切换，不适合正文；字符集要包含符号才有质感。","trigger":"time","demo":{"kind":"type","mode":"scramble"},"_legacyCode":"/* 每帧以 i/total 概率落到最终字符 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"split-text","zh":"文字拆分","en":"Split text","alias":["逐字符","拆词","by letter / by word"],"cat":"text","vague":"标题一个字母一个字母进来","say":"按字符（或词）拆分后 stagger 30ms 入场","def":"把文本切成字符/词/行三个颗粒度的可独立驱动单元。拆分后必须处理可访问性（aria-hidden 原文）和断行，否则移动端会很乱。","trigger":"time","demo":{"kind":"type","mode":"split"},"_legacyCode":"el.innerHTML = text.split(\"\").map((c, i) => `<span style=\"--i:${i}\">${c}</span>`).join(\"\");","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"line-mask","zh":"逐行遮罩揭示","en":"Line mask reveal","alias":["行抬起","clip line","文字上滑露出"],"cat":"text","vague":"文字一行一行从下面抬上来","say":"每行 overflow hidden，行内容 translateY(100%)→0","def":"把每行装进一个裁切容器，内容从下方抬进可见区。编辑感、印刷感很强，是品牌站标题最常用的高级手法之一。","trigger":"time","demo":{"kind":"type","mode":"lineMask"},"_legacyCode":".line { overflow: hidden; } .line span { transform: translateY(110%); }\n/* 目标：translateY(0)，行 stagger 60ms */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"kinetic-type","zh":"动态排版","en":"Kinetic typography","alias":["文字动画视频","文字表演","排版运动"],"cat":"text","vague":"文字本身当画面主体在动","say":"文字按音节落点做缩放/位移，成为画面主体","def":"让文字本身充当画面主角并随节奏运动，常见于视频字幕、宣言式落地页。核心是把语义重音映射到运动强度。","trigger":"time","demo":{"kind":"type","mode":"kinetic"},"_legacyCode":"/* 重音词 scale 1.15 + 提前 1 帧；弱读词仅淡入 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"number-ticker","zh":"数字滚动","en":"Number ticker","alias":["老虎机数字","翻页数字","roll digits"],"cat":"text","vague":"数字像老虎机那样滚上去","say":"每位数字纵向滚动落位，逐位停住","def":"数字以纵向滚动方式落到目标值，像机械计数器。需要 fixed 高度裁切与 transform 位移；位数变化时要预留宽度。","trigger":"time","demo":{"kind":"type","mode":"ticker"},"_legacyCode":".digit { height: 1em; overflow: hidden; } .col { transform: translateY(calc(var(--v) * -1em)); }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"count-up","zh":"数值递增","en":"Count up","alias":["数字增长","统计数动画","odometer-lite"],"cat":"text","vague":"数字从 0 涨到 892","say":"0→892 用 ease-out 递增，进位不线性","def":"数值从 0 增长到目标。关键是缓动要用 ease-out（大数很快到达、小数慢慢收敛）——线性递增会让人怀疑数据造假。","trigger":"time","demo":{"kind":"type","mode":"countup"},"_legacyCode":"const v = Math.round(target * easeOutExpo(t));","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"tabular-nums","zh":"等宽数字","en":"Tabular numbers","alias":["数字等宽","font-variant-numeric"],"cat":"text","vague":"数字跳动的时候整行在抖","say":"font-variant-numeric: tabular-nums 固定字宽","def":"让每个数字占相同宽度。做数字动效前的必修一行 CSS——否则比例字体会让整行文本在计数过程中左右抽动。","trigger":"time","demo":{"kind":"type","mode":"tabular"},"_legacyCode":"font-variant-numeric: tabular-nums;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"highlight-sweep","zh":"荧光笔划过","en":"Highlight sweep","alias":["背景色展开","mark 动效","划重点"],"cat":"text","vague":"像荧光笔划过一行字","say":"文字背景 scaleX 0→1 划过，origin left","def":"在文字背后画出一条高亮，模拟荧光笔。因为不动文字本身，阅读节奏不被打断，适合长文重点提示。","trigger":"time","demo":{"kind":"frames","html":"<div class=\"obj txt hl\">这句话值得划重点</div>","behavior":"highlight"},"_legacyCode":"span { background: linear-gradient(var(--hl), var(--hl)) 0 90% / 0 40% no-repeat; transition: background-size 400ms ease-out; }\n.in { background-size: 100% 40%; }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"text-glitch","zh":"文字故障","en":"Text glitch","alias":["抖动错位文字"],"cat":"text","vague":"字有点坏了的感觉","say":"三层错位 + clip-path 抖动，2–4 次后收敛","def":"文字做色差分离与切片错位。风格信号极强（赛博、复古终端），时长必须短、次数必须有限，否则会显得画面不稳定。","trigger":"time","demo":{"kind":"type","mode":"glitch"},"_legacyCode":"/* ::before/::after 复制文本，各自 clip-path + translate + blend */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"text-replace-flip","zh":"文字翻转替换","en":"Text flip swap","alias":["换词翻转","滚动切换词"],"cat":"text","vague":"这个词自己翻成另一个词","say":"旧词 rotateX(90°) 退出，新词从 -90° 进入","def":"用绕 X 轴翻面完成词语替换，常见于轮播标语。两词高度必须固定（或用 max-width 预留），否则容器会一路抖。","trigger":"time","demo":{"kind":"type","mode":"flipWord"},"_legacyCode":"animation: flip-out 320ms ease-in both; / flip-in 320ms ease-out 320ms both;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"cursor-caret","zh":"光标闪烁","en":"Blinking caret","alias":["闪烁光标","caret","steps 闪烁"],"cat":"text","vague":"后面那个竖线一闪一闪","say":"caret 用 steps(2) 做硬闪，周期 1s","def":"打字机效果的附属元素。必须用 steps(2) 而不是渐变（真光标不会淡入），并且在句子结束后继续闪 2–3 次再消失，否则像坏了。","trigger":"time","curve":"steps","_legacyEase":"steps(2)","demo":{"kind":"frames","html":"<div class=\"obj txt caret-demo\">MOTION<span class=\"caret\"></span></div>","frames":[[0,"opacity:1"],[100,"opacity:0"]],"e":"steps(2)","d":"500ms","loop":true,"caret":true},"_legacyCode":"animation: blink 1s steps(2, start) infinite;","spec":{"id":"cursor-caret","version":1,"timeline":[{"id":"t-opacity","target":"self","prop":"opacity","from":1,"to":0,"unit":"none","start":0,"dur":0.5,"ease":"steps"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"blur","zh":"模糊","en":"Blur","alias":["高斯模糊","backdrop-filter","毛玻璃"],"cat":"polish","vague":"虚一点，透出高级感","say":"backdrop-filter: blur(20px) 做毛玻璃层","def":"柔化细节。filter: blur 作用于元素自身，backdrop-filter 作用于其下方内容（毛玻璃）。后者在移动端开销大，需要设上限层数。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"glasswrap\"><i class=\"bg blur-pattern\"></i><div class=\"obj glass blur-demo\"><span>磨砂玻璃</span><small>BACKGROUND · CLEAR → SOFT</small></div></div>","frames":[[0,"backdrop-filter:blur(0px) saturate(1)"],[100,"backdrop-filter:blur(20px) saturate(1.35)"]],"e":"ease-in-out","d":"1800ms","loop":true,"alt":true},"_legacyCode":".glass { backdrop-filter: blur(20px) saturate(1.4); background: rgba(255,255,255,.06); }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"clip-path","zh":"裁切路径","en":"Clip-path","alias":["形状裁切","多边形遮罩","polygon"],"cat":"polish","vague":"把图裁成斜的","say":"clip-path: polygon() 做斜切与揭示","def":"用几何路径切掉元素可见区域。形状之间可以插值（点数需一致），因此既是造型工具也是转场工具。","trigger":"time","curve":"easeOutExpo","_legacyEase":"cubic-bezier(0.76,0,0.24,1)","demo":{"kind":"frames","html":"<div class=\"obj img\"></div>","frames":[[0,"clip-path:polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"],[100,"clip-path:polygon(0 0, 100% 8%, 100% 100%, 0 92%)"]],"e":"cubic-bezier(0.76,0,0.24,1)","d":"1200ms","loop":true,"alt":true},"_legacyCode":"clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 92%);","spec":{"id":"clip-path","version":1,"timeline":[{"id":"t-clip-path","target":"self","prop":"clip-path","from":"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)","to":"polygon(0 0, 100% 8%, 100% 100%, 0 92%)","unit":"none","start":0,"dur":1.2,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"mask","zh":"遮罩","en":"Mask","alias":["渐变蒙版","挖洞"],"cat":"polish","vague":"边缘淡出到背景里","say":"mask-image 渐变让边缘自然消隐","def":"用一张图（常是渐变）决定透明度分布，做软边缘、挖孔、扫光显影。与 clip-path 的区别是：mask 有半透明，clip 只有硬边。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj img masked2\"></div>","frames":[[0,"mask-position:0 -60%"],[100,"mask-position:0 160%"]],"e":"ease-in-out","d":"2200ms","loop":true},"_legacyCode":"mask-image: linear-gradient(to bottom, #000 60%, transparent);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"line-drawing","zh":"描边绘制","en":"Line drawing / SVG stroke","alias":["线条生长","stroke-dashoffset","手绘出现"],"cat":"polish","vague":"线自己画出来","say":"stroke-dasharray + dashoffset 描线生长","def":"通过虚线偏移让 SVG 路径自己“被画出来”。要求先量取 pathLength，并按书写顺序安排路径，否则像擦除而不是绘制。","trigger":"time","demo":{"kind":"draw"},"_legacyCode":"path { stroke-dasharray: var(--len); stroke-dashoffset: var(--len); }\n/* 动画到 0 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"glow","zh":"发光","en":"Glow","alias":["霓虹","bloom","泛光"],"cat":"polish","vague":"让它发亮","say":"多层 box-shadow 扩散 + 亮度饱和做泛光","def":"让亮部向外溢出。真实泛光需要“亮部超过 1 再向下压缩”，CSS 里用多层模糊阴影近似；颜色要偏亮而不是偏浓。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj demo-content demo-beacon\" aria-hidden=\"true\"><svg viewBox=\"0 0 40 40\" fill=\"none\"><path d=\"m20 6 3.6 10.4L34 20l-10.4 3.6L20 34l-3.6-10.4L6 20l10.4-3.6Z\" fill=\"currentColor\"/></svg></div>","frames":[[0,"box-shadow:0 0 0 0 color-mix(in srgb,var(--accent) 0%,transparent)"],[100,"box-shadow:0 0 16px 4px color-mix(in srgb,var(--accent) 30%,transparent),0 0 38px 8px color-mix(in srgb,var(--accent) 16%,transparent)"]],"e":"ease-in-out","d":"1400ms","loop":true,"alt":true},"_legacyCode":"box-shadow: 0 0 12px var(--c), 0 0 40px color-mix(in srgb, var(--c) 60%, transparent);","spec":{"id":"glow","version":1,"timeline":[{"id":"t-box-shadow","target":"self","prop":"box-shadow","from":"0 0 0 0 color-mix(in srgb,var(--accent) 0%,transparent)","to":"0 0 16px 4px color-mix(in srgb,var(--accent) 30%,transparent),0 0 38px 8px color-mix(in srgb,var(--accent) 16%,transparent)","unit":"none","start":0,"dur":1.4,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"grain","zh":"颗粒噪点","en":"Grain / Noise","alias":["胶片颗粒","SVG turbulence","质感噪点"],"cat":"polish","vague":"加点胶片感","say":"低透明度噪点层 + 8 帧位移抖动","def":"叠加细小噪点，消除数字画面的塑料感。要动就得每帧换位置（steps 抖动），静止的噪点会被眼睛当成脏污。","trigger":"time","curve":"steps","_legacyEase":"steps(1)","demo":{"kind":"frames","html":"<div class=\"obj img grained\"><i class=\"noise\"></i></div>","frames":[[0,"transform:translate(0,0)"],[25,"transform:translate(-3%,2%)"],[50,"transform:translate(2%,-3%)"],[75,"transform:translate(-2%,-1%)"],[100,"transform:translate(0,0)"]],"e":"steps(1)","d":"600ms","loop":true,"grain":true},"_legacyCode":"background-image: url(noise.svg); animation: grain 0.5s steps(6) infinite;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"elevation","zh":"层级阴影过渡","en":"Elevation / Shadow transition","alias":["高度感","shadow 变化","Material elevation"],"cat":"polish","vague":"让它看起来浮起来","say":"阴影随 z 层级同步变化（1→3dp）","def":"用阴影的扩散半径与不透明度表达“离屏幕多远”。Material 把高度定义为 1/3/6/8/12dp 等离散层级，因此阴影值也应该是 token，而不是随手写。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","frames":[[0,"box-shadow:0 1px 1px rgba(0,0,0,.35); transform:none"],[100,"box-shadow:0 18px 34px -12px rgba(0,0,0,.7); transform:translateY(-8px)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"1100ms","loop":true,"alt":true},"_legacyCode":"box-shadow: 0 2px 4px rgba(0,0,0,.10), 0 8px 24px rgba(0,0,0,.12);","spec":{"id":"elevation","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":0,"to":-8,"unit":"px","start":0,"dur":1.1,"ease":"easeOutExpo"},{"id":"t-box-shadow","target":"self","prop":"box-shadow","from":"0 1px 1px rgba(0,0,0,.35)","to":"0 18px 34px -12px rgba(0,0,0,.7)","unit":"none","start":0,"dur":1.1,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"light-sweep","zh":"高光扫过","en":"Specular sweep","alias":["闪一下","金属反光","glint"],"cat":"polish","vague":"金属那种反了一下光","say":"斜向高光条 600ms 扫过表面","def":"一条窄高光快速掠过表面，暗示材质（金属/玻璃/卡片）。一次性效果，周期短（400–800ms），常用于按钮与收藏卡。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj card sweep\"><i class=\"beam\"></i></div>","frames":[[0,"transform:translateX(-130%) skewX(-20deg)"],[100,"transform:translateX(130%) skewX(-20deg)"]],"e":"cubic-bezier(0.65,0,0.35,1)","d":"1500ms","loop":true,"sweep":true},"_legacyCode":".btn::after { transform: translateX(-120%) skewX(-20deg); } /* → 120% */","spec":{"id":"light-sweep","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":-130,"to":130,"unit":"%","start":0,"dur":1.5,"ease":"easeInOut"},{"id":"t-skewX","target":"self","prop":"skewX","from":-20,"to":-20,"unit":"deg","start":0,"dur":1.5,"ease":"easeInOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"chromatic","zh":"色散 / 色差","en":"Chromatic aberration","alias":["镜头色边"],"cat":"polish","vague":"边缘有红蓝分离","say":"R/B 通道各偏移 1–3px 叠合","def":"模拟镜头边缘的色分离，让画面更“有机器”。位移量以像素计且必须极小，超过 4px 就从质感变成故障。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj txt chroma\">MOTION</div>","frames":[[0,"text-shadow:-1px 0 rgba(255,60,120,.7), 1px 0 rgba(60,200,255,.7)"],[100,"text-shadow:-4px 0 rgba(255,60,120,.7), 4px 0 rgba(60,200,255,.7)"]],"e":"ease-in-out","d":"1200ms","loop":true,"alt":true},"_legacyCode":"text-shadow: -2px 0 rgba(255,0,80,.5), 2px 0 rgba(0,200,255,.5);","spec":{"id":"chromatic","version":1,"timeline":[{"id":"t-text-shadow","target":"self","prop":"text-shadow","from":"-1px 0 rgba(255,60,120,.7), 1px 0 rgba(60,200,255,.7)","to":"-4px 0 rgba(255,60,120,.7), 4px 0 rgba(60,200,255,.7)","unit":"none","start":0,"dur":1.2,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"glass","zh":"玻璃拟态","en":"Glassmorphism","alias":["磨砂玻璃","半透明面板"],"cat":"polish","vague":"那种磨砂半透明的面板","say":"半透明面板 + backdrop-blur + 1px 高光描边","def":"模糊背景 + 半透明填充 + 细亮边，构成“玻璃”材质。真正让它成立的是边缘那道 1px 高光，没有它只会看起来像脏了的灰块。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"glasswrap\"><i class=\"bg colorful\"></i><div class=\"obj glass edge\">Glass</div></div>","frames":[[0,"opacity:0; transform:translateX(-58px)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"700ms"},"_legacyCode":"border: 1px solid rgba(255,255,255,.14); backdrop-filter: blur(16px);","spec":{"id":"glass","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":-58,"to":0,"unit":"px","start":0,"dur":0.7,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.7,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"depth-field","zh":"景深","en":"Depth of field","alias":["焦点转移","前后虚化"],"cat":"polish","vague":"前面糊掉，后面的清楚","say":"前景 blur(8px)+opacity .5，主体清晰","def":"只让主体清晰、其余按距离虚化，引导视线。网页里通常是“静态景深”（写死几档），动态对焦转移则需要 canvas/WebGL。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"dof\"><i class=\"obj card near\"></i><i class=\"obj card mid\"></i><i class=\"obj card far\"></i></div>","frames":[[0,"filter:blur(0); opacity:1"],[100,"filter:blur(7px); opacity:.45"]],"e":"ease-in-out","d":"1300ms","loop":true,"alt":true,"dof":true,"st":-450},"_legacyCode":".near { filter: blur(8px); opacity: .45; }","spec":{"id":"depth-field","version":1,"timeline":[{"id":"t-opacity","target":"self","prop":"opacity","from":1,"to":0.45,"unit":"none","start":0,"dur":1.3,"ease":"easeInOut"},{"id":"t-filter","target":"self","prop":"filter","from":"blur(0)","to":"blur(7px)","unit":"none","start":0,"dur":1.3,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":-0.45,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"bokeh","zh":"焦外光斑","en":"Bokeh","alias":["虚化光点","散景"],"cat":"polish","vague":"背景那种圆圆的虚化光点","say":"若干大半径模糊圆形，缓慢漂移","def":"失焦光源形成的柔和圆形光斑。作为背景层时透明度要低（<0.18），且不要参与任何信息表达。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"bokeh\"><i></i><i></i><i></i></div>","frames":[[0,"transform:translate(0,0) scale(1)"],[100,"transform:translate(14px,-18px) scale(1.18)"]],"e":"ease-in-out","d":"3600ms","loop":true,"alt":true,"bokeh":true,"st":-1200},"_legacyCode":"border-radius: 50%; filter: blur(28px); opacity: .16;","spec":{"id":"bokeh","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":1,"to":1.18,"unit":"none","start":0,"dur":3.6,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":-1.2,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"dolly","zh":"推镜","en":"Dolly in / Push in","alias":["推近","摄像机前推","zoom in 镜头"],"cat":"camera","vague":"镜头慢慢推近一点","say":"相机沿 Z 轴前推（dolly-in），场景视差自然产生","def":"相机本体向场景移动（区别于只改变焦距的 zoom）：近处物体动得快、远处慢，视差与透视会真实变化，因此更沉浸。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"cam\"><i class=\"obj card far\"></i><i class=\"obj card near\"></i></div>","frames":[[0,"transform:translateZ(-180px)"],[100,"transform:translateZ(140px)"]],"e":"cubic-bezier(0.65,0,0.35,1)","d":"2200ms","loop":true,"alt":true,"cam":true},"_legacyCode":"scene { transform: translateZ(-200px) → translateZ(120px); }","spec":{"id":"dolly","version":1,"timeline":[{"id":"t-translateZ","target":"self","prop":"translateZ","from":-180,"to":140,"unit":"px","start":0,"dur":2.2,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"pan","zh":"摇镜 / 平移镜头","en":"Pan","alias":["横向移动镜头","扫视"],"cat":"camera","vague":"镜头横着扫过去","say":"相机沿 X 轴平移，扫过长画面","def":"相机水平转向或移动。常用于长图、地图、时间轴；配合内容分段揭示才能避免“只是把一条长图滚过去”。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"panstrip\"><i></i><i></i><i></i><i></i><i></i><i></i></div>","frames":[[0,"transform:translateX(0)"],[100,"transform:translateX(-46%)"]],"e":"cubic-bezier(0.65,0,0.35,1)","d":"2600ms","loop":true,"alt":true,"pan":true},"_legacyCode":"scene { transform: translateX(0) → translateX(-40%); }","spec":{"id":"pan","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":0,"to":-46,"unit":"px","start":0,"dur":2.6,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"whip-pan","zh":"甩镜转场","en":"Whip pan","alias":["快速甩过去","运动模糊转场"],"cat":"camera","vague":"猛地甩到下一个画面","say":"高速平移 + 方向性模糊，中段完成换镜","def":"极快的横向甩动，靠运动模糊遮蔽换镜瞬间。剪辑感很强，适合段落切换；一屏内多次使用会令人迷失。","trigger":"time","curve":"easeOutExpo","_legacyEase":"cubic-bezier(0.76,0,0.24,1)","demo":{"kind":"frames","html":"<div class=\"obj sheet\"></div>","frames":[[0,"transform:translateX(0); filter:blur(0)"],[45,"transform:translateX(-60%); filter:blur(14px)"],[55,"transform:translateX(60%); filter:blur(14px)"],[100,"transform:translateX(0); filter:blur(0)"]],"e":"cubic-bezier(0.76,0,0.24,1)","d":"1200ms","loop":true},"_legacyCode":"/* 甩动 180ms + blur(方向性 24px)，在 50% 处替换内容 */","spec":{"id":"whip-pan","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":0,"to":0,"unit":"px","start":0,"dur":1.2,"ease":"easeOutExpo"},{"id":"t-filter","target":"self","prop":"filter","from":"blur(0)","to":"blur(0)","unit":"none","start":0,"dur":1.2,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"zoom-through","zh":"穿越式推进","en":"Zoom through","alias":["冲进画面里","无限缩放"],"cat":"camera","vague":"一直往画面里钻，钻进去就是下一页","say":"scale 推到画面外，同时把下一层接上","def":"镜头穿过某个元素进入下一层空间（Prezi 式）。空间隐喻强、导航成本低，但对晕动敏感用户不友好，必须提供减少动效开关。","trigger":"time","curve":"easeIn","_legacyEase":"cubic-bezier(0.7,0,0.84,0)","demo":{"kind":"frames","html":"<div class=\"zthrough\"><i class=\"znext\"><s></s><s></s><s></s></i><div class=\"obj img zoomhole\"><i class=\"hole\"></i></div></div>","frames":[[0,"transform:scale(1)"],[100,"transform:scale(5); opacity:.18"]],"e":"cubic-bezier(0.7,0,0.84,0)","d":"1600ms","loop":true,"alt":true},"_legacyCode":"/* 元素放大到覆盖视口，然后其内部成为新页面 */","spec":{"id":"zoom-through","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":1,"to":5,"unit":"none","start":0,"dur":1.6,"ease":"easeIn"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":0.18,"unit":"none","start":0,"dur":1.6,"ease":"easeIn"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"match-cut","zh":"匹配剪辑","en":"Match cut","alias":["形状接续","同形转场"],"cat":"camera","vague":"两个画面里形状一样，看起来像同一个东西","say":"前后镜以同形状/同位置对齐，转场无感","def":"利用两个镜头中相似的形状、位置或运动方向来剪接，使切换几乎不被察觉。是最高级的转场手法，因为它靠构图而不是靠动效。","trigger":"time","demo":{"kind":"morph","mode":"matchCut"},"_legacyCode":"/* 前镜圆形 → 后镜圆形，中心与半径对齐后做 crossfade */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"cut","zh":"硬切","en":"Cut","alias":["无转场","直接切换"],"cat":"camera","vague":"不要动画，直接换","say":"硬切：0ms 切换（这也是一项设计决策）","def":"不做任何补间，直接切换。它是动效词汇的一员，而且经常被正确使用：高频操作、需要效率的地方，“没有动画”本身就是最优动效。","trigger":"time","demo":{"kind":"morph","mode":"cut"},"_legacyCode":"transition: none;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"rack-focus","zh":"焦点转移","en":"Rack focus","alias":["拉焦","对焦切换"],"cat":"camera","vague":"焦点从 A 换到 B","say":"两组元素 blur 互补交换，视线随之转移","def":"在一次镜头里把焦点从一处拉到另一处，用来重新分配注意力。网页实现常与滚动位置绑定（滚到某处才合焦）。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"rack\"><i class=\"obj txt a\">A</i><i class=\"obj txt b\">B</i></div>","frames":[[0,"filter:blur(6px); opacity:.4"],[100,"filter:blur(0); opacity:1"]],"e":"ease-in-out","d":"1400ms","loop":true,"alt":true,"rack":true},"_legacyCode":"/* A: blur 0→10px, B: blur 10→0px，交叉时长一致 */","spec":{"id":"rack-focus","version":1,"timeline":[{"id":"t-opacity","target":"self","prop":"opacity","from":0.4,"to":1,"unit":"none","start":0,"dur":1.4,"ease":"easeInOut"},{"id":"t-filter","target":"self","prop":"filter","from":"blur(6px)","to":"blur(0)","unit":"none","start":0,"dur":1.4,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"camera-shake","zh":"镜头震动","en":"Camera shake","alias":["屏幕抖动","impact shake","震屏"],"cat":"camera","vague":"砸一下，整个画面抖","say":"整体随机位移 ±6px，衰减 300ms","def":"整个画面做衰减随机位移，表达冲击。必须短且快速衰减，且抖动幅度随“事件重量”分级——一次通知不该震屏。","trigger":"time","curve":"steps","_legacyEase":"steps(1)","demo":{"kind":"frames","html":"<div class=\"obj sheet\">BOOM</div>","frames":[[0,"transform:translate(0,0)"],[20,"transform:translate(-8px,6px)"],[40,"transform:translate(7px,-5px)"],[60,"transform:translate(-5px,3px)"],[80,"transform:translate(3px,-2px)"],[100,"transform:none"]],"e":"steps(1)","d":"360ms","loop":true,"wait":"1200ms"},"_legacyCode":"/* x,y = random() * amp; amp *= 0.85 每帧衰减 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"orbit-camera","zh":"环绕运镜","en":"Orbit camera","alias":["3D 环绕","轨道相机","turntable"],"cat":"camera","vague":"围着这个东西转一圈看","say":"CSS 里没有相机这一层：把整层场景绕 Y 轴反着转，冒充相机环绕","def":"相机绕物体做水平圆弧运动（turntable），物体不动、只改水平角，并限制俯仰范围，否则空间感会翻车。CSS 动不了相机，只能反着做：转的是场景，物体留在原位，靠透视变化把它读成环绕——效果一致，但别误以为真的有轨道相机。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"turn\"><i class=\"obj card face f1\"></i><i class=\"obj card face f2\"></i><i class=\"obj card face f3\"></i></div>","frames":[[0,"transform:rotateY(-38deg)"],[100,"transform:rotateY(38deg)"]],"e":"ease-in-out","d":"2600ms","loop":true,"alt":true,"turn":true},"_legacyCode":"scene { transform: rotateY(var(--a)) translateZ(var(--d)); }  /* 转场景，不是转物体 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"reveal-camera","zh":"拉镜揭示","en":"Reveal / Pull back","alias":["缩小露出全局","拉远"],"cat":"camera","vague":"拉远之后才发现是更大画面的一部分","say":"pull-back：局部 scale 1→0.4 露出整体语境","def":"从细节拉远到全局，制造“原来只是局部”的认知惊喜。拉远幅度大时注意文字会瞬间不可读，需要在终点换用摘要层。","trigger":"time","curve":"easeInOut","demo":{"kind":"frames","html":"<div class=\"obj scene-mini\"><i></i><i></i><i></i><i></i></div>","frames":[[0,"transform:scale(2.6) translate(4%, -2%)"],[100,"transform:scale(1)"]],"e":"cubic-bezier(0.65,0,0.35,1)","d":"1800ms","loop":true,"alt":true},"_legacyCode":"animation: pull-back 1.2s ease-in-out alternate;","spec":{"id":"reveal-camera","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":2.6,"to":1,"unit":"none","start":0,"dur":1.8,"ease":"easeInOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"squash-stretch","zh":"挤压与拉伸","en":"Squash & stretch","alias":["形变","弹性变形","压扁拉长"],"cat":"principles","vague":"掉下去的时候像果冻","say":"落地 squash（压扁）+ 起跳 stretch（拉长），体积守恒","def":"物体在加速与撞击时沿运动方向拉长、在阻力点压扁。核心纪律是体积不变（横纵互补），否则像融化的蜡。","trigger":"time","curve":"easeInOut","_legacyEase":"cubic-bezier(0.5,0,1,1)","demo":{"kind":"frames","html":"<div class=\"obj ball\"></div>","frames":[[0,"transform:translateY(-38px) scale(.92,1.08)"],[50,"transform:translateY(16px) scale(.98,1.02)"],[62,"transform:translateY(20px) scale(1.22,.78)"],[75,"transform:translateY(6px) scale(.96,1.06)"],[100,"transform:translateY(-38px) scale(.92,1.08)"]],"e":"cubic-bezier(0.5,0,1,1)","d":"1400ms","loop":true,"ball":true},"_legacyCode":"transform: scale(1.18, .82);  /* 落地帧 */","spec":{"id":"squash-stretch","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":-38,"to":-38,"unit":"px","start":0,"dur":1.4,"ease":"easeInOut"},{"id":"t-scale","target":"self","prop":"scale","from":0.92,"to":0.92,"unit":"none","start":0,"dur":1.4,"ease":"easeInOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"anticipation","zh":"预备动作","en":"Anticipation","alias":["先下蹲再起跳","反向蓄力"],"cat":"principles","vague":"动作之前先有个起手","say":"主动作前 100ms 反向预备（下蹲/后摆）","def":"大动作前先朝反方向轻微运动，告诉观众“要来了”，同时赋予力量感。跳之前先蹲、扔之前先后摆——UI 里对应拖拽时的形变与蓄力。","trigger":"time","curve":"easeOutBack","_legacyEase":"cubic-bezier(0.3,0.9,0.4,1)","demo":{"kind":"frames","html":"<div class=\"obj ball\"></div>","frames":[[0,"transform:translateY(0) scale(1,1)"],[6.7,"transform:translateY(10px) scale(1.16,.84)"],[22,"transform:translateY(-34px) scale(.88,1.16)"],[100,"transform:translateY(0) scale(1,1)"]],"e":"cubic-bezier(0.3,0.9,0.4,1)","d":"1500ms","loop":true},"_legacyCode":"/* 主时间轴 -8%：scale(1.06,.9) 反向预压 */","spec":{"id":"anticipation","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":0,"to":0,"unit":"px","start":0,"dur":1.5,"ease":"easeOutBack"},{"id":"t-scale","target":"self","prop":"scale","from":1,"to":1,"unit":"none","start":0,"dur":1.5,"ease":"easeOutBack"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"follow-through","zh":"跟随与缓冲","en":"Follow-through","alias":["过冲衰减","附属物跟随","settling"],"cat":"principles","vague":"停下来的时候还有点头","say":"主体停住后附属部分再走 2–3 帧衰减","def":"主体停止后，其附属部分（头发、尾巴、悬垂的图标、标题的后半段）继续运动再回弹。没有跟随，动作就像被刀切断。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"follow\"><i class=\"head obj\"></i><i class=\"tail\"></i><i class=\"tail\"></i><i class=\"tail\"></i></div>","frames":[[0,"transform:translateX(-46px)"],[100,"transform:translateX(46px)"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"900ms","loop":true,"alt":true,"follow":true,"st":90},"_legacyCode":"/* 子元素 delay = 主体时长 × 0.7，damping 更大 */","spec":{"id":"follow-through","version":1,"timeline":[{"id":"t-translateX","target":"self","prop":"translateX","from":-46,"to":46,"unit":"px","start":0,"dur":0.9,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0.09,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"secondary-action","zh":"次要动作","en":"Secondary action","alias":["附属细节","配角动效"],"cat":"principles","vague":"主体之外还有点小细节在动","say":"主体运动 + 次要元素错 40ms 呼应","def":"为主动作服务的补充运动（飘带、光点、附属小图标），用来丰富层次而不抢主线。判断标准：删掉它，主题信息是否仍然完整。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"frames","html":"<div class=\"sec\"><i class=\"obj card\"></i><i class=\"dot\"></i><i class=\"dot\"></i></div>","frames":[[0,"opacity:0; transform:translateY(18px)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"620ms","loop":true,"alt":true,"secondary":true,"st":40},"_legacyCode":"/* secondary: delay 40–80ms, 幅度约主体 30% */","spec":{"id":"secondary-action","version":1,"timeline":[{"id":"t-translateY","target":"self","prop":"translateY","from":18,"to":0,"unit":"px","start":0,"dur":0.62,"ease":"easeOutExpo"},{"id":"t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.62,"ease":"easeOutExpo"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0.04,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"arc","zh":"弧线运动","en":"Arc","alias":["抛物线","曲线轨迹","非线性路径"],"cat":"principles","vague":"别直线飞过去，走个弧线","say":"X 线性 + Y 缓动 = 抛物线轨迹","def":"自由运动的物体走弧线而不是直线（重力使然）。实现技巧：横向 linear、纵向 ease-in-out，两个通道合成即是抛物线。","trigger":"time","curve":"linear","demo":{"kind":"frames","html":"<div class=\"obj ball\"></div>","frames":[[0,"transform:translate(-52px,10px)"],[12.5,"transform:translate(-39px,-5.75px)"],[25,"transform:translate(-26px,-17px)"],[37.5,"transform:translate(-13px,-23.75px)"],[50,"transform:translate(0,-26px)"],[62.5,"transform:translate(13px,-23.75px)"],[75,"transform:translate(26px,-17px)"],[87.5,"transform:translate(39px,-5.75px)"],[100,"transform:translate(52px,10px)"]],"e":"linear","d":"1300ms","loop":true,"alt":true},"_legacyCode":"/* X: linear, Y: ease-in —— 合成抛物线 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"slow-in-out","zh":"慢入慢出","en":"Slow in & slow out","alias":["缓入缓出（原则）","加减速原则"],"cat":"principles","vague":"两头别那么突兀","say":"起止两端各留 2–3 帧渐变速度","def":"迪士尼时代对 easing 的称呼：动作开始与结束都要渐变，因为物体不可能瞬间获得或失去速度。它是所有曲线类术语的源头。","trigger":"time","demo":{"kind":"curve","fn":"easeInOut"},"_legacyCode":"/* 手绘时代：逐帧插入中间状态；今天：一条 cubic-bezier */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"timing","zh":"节奏与时间分配","en":"Timing","alias":["快慢控制","帧数分配"],"cat":"principles","vague":"该快的地方快、该慢的地方慢","say":"重击用 2 帧到位，悬停用 12 帧渐变","def":"同一个动作里，不同阶段占用不同帧数。快慢的对比而不是绝对时长，才决定了动作的情绪：一瞬间的重击和缓慢的漂浮不能是同一个速度。","trigger":"time","curve":"easeOut","demo":{"kind":"frames","html":"<div class=\"obj heart\"></div>","frames":[[0,"transform:scale(1)"],[8,"transform:scale(1.34)"],[16,"transform:scale(1)"],[26,"transform:scale(1.2)"],[36,"transform:scale(1)"],[100,"transform:scale(1)"]],"e":"ease-out","d":"1600ms","loop":true},"_legacyCode":"@keyframes beat { 0%,88%{transform:scale(1)} 92%{transform:scale(1.35)} 100%{transform:scale(1)} }","spec":{"id":"timing","version":1,"timeline":[{"id":"t-scale","target":"self","prop":"scale","from":1,"to":1,"unit":"none","start":0,"dur":1.6,"ease":"easeOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"exaggeration","zh":"夸张","en":"Exaggeration","alias":["放大表现","戏剧化"],"cat":"principles","vague":"再戏剧一点","say":"把幅度/时长推到真实值的 1.3–1.6 倍","def":"把动作的幅度、时长或形变放大到超过现实，以强化表达。UI 里的度：品牌页可以夸张，表单与仪表盘不行。","trigger":"time","curve":"easeOut","demo":{"kind":"two","a":{"label":"写实：位移 8px","frames":[[0,"transform:translateY(8px)"],[100,"transform:none"]],"e":"ease-out","d":"420ms"},"b":{"label":"夸张：位移 34px + 旋转","frames":[[0,"transform:translateY(34px) rotate(8deg) scale(1.1)"],[100,"transform:none"]],"e":"cubic-bezier(0.34,1.56,0.64,1)","d":"620ms"}},"_legacyCode":"/* 真实 12px → 表现 20px，同时缩短恢复时间 */","spec":{"id":"exaggeration","version":1,"timeline":[{"id":"a-t-translateY","target":"self","prop":"translateY","from":8,"to":0,"unit":"px","start":0,"dur":0.42,"ease":"easeOut"},{"id":"b-t-translateY","target":"child","prop":"translateY","from":34,"to":0,"unit":"px","start":0,"dur":0.62,"ease":"easeOutBack"},{"id":"b-t-rotate","target":"child","prop":"rotate","from":8,"to":0,"unit":"deg","start":0,"dur":0.62,"ease":"easeOutBack"},{"id":"b-t-scale","target":"child","prop":"scale","from":1.1,"to":1,"unit":"none","start":0,"dur":0.62,"ease":"easeOutBack"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"staging","zh":"分镜与聚焦","en":"Staging","alias":["突出主体","留白引导"],"cat":"principles","vague":"让它成为视觉重点，别的都别抢","say":"其余元素降透明度与饱和度，只留主体动","def":"用构图、明暗、动静对比确保观众看到该看的东西。动效语境下最实用的技巧是：一个时刻只有一个元素在动，其他降透明度。","trigger":"time","curve":"easeOut","demo":{"kind":"frames","html":"<div class=\"stage3\"><i class=\"obj card\"></i><i class=\"obj card hot\"></i><i class=\"obj card\"></i></div>","frames":[[0,"opacity:.3; filter:saturate(.2)"],[100,"opacity:1; filter:none"]],"e":"ease-out","d":"900ms","loop":true,"alt":true,"staging":true},"_legacyCode":"body.busy *:not(.focus) { opacity: .35; filter: saturate(.5); }","spec":{"id":"staging","version":1,"timeline":[{"id":"t-opacity","target":"self","prop":"opacity","from":0.3,"to":1,"unit":"none","start":0,"dur":0.9,"ease":"easeOut"},{"id":"t-filter","target":"self","prop":"filter","from":"saturate(.2)","to":"none","unit":"none","start":0,"dur":0.9,"ease":"easeOut"}],"loop":{"count":1,"direction":"alternate","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"perceived-performance","zh":"感知性能","en":"Perceived performance","alias":["感觉快","等待体验","乐观更新"],"cat":"principles","vague":"怎么让用户觉得快","say":"乐观更新：先播成功动效，请求失败再回滚","def":"用动效改变等待的主观感受：即时按压反馈、骨架屏、乐观更新、进度可视化。合理的动效能让同样的 800ms 显得比 200ms 无反馈更“快”。","trigger":"time","demo":{"kind":"perf","mode":"perceived","hint":"点每一行的「完成」，看两行数字的差距"},"_legacyCode":"/* 点击立刻入队 UI，失败再回滚 + shake */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"purposeful","zh":"有目的的动效","en":"Purposeful animation","alias":["克制","为什么要动"],"cat":"principles","vague":"好看就加呗","say":"这个动效解决的是连续性问题，不是装饰","def":"每条动效必须回答一个问题：它解释了空间关系、提供了反馈、还是引导了注意力？三者的答案都不是，就应该删掉。这是词汇表里最重要的一个词。","trigger":"time","demo":{"kind":"perf","mode":"purpose","hint":"左右各点一条来源，比较你失去了什么"},"_legacyCode":"/* 自检：把它关掉，界面是否更难理解？ */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"spatial-consistency","zh":"空间一致性","en":"Spatial consistency","alias":["位置连续","方向一致","心智地图"],"cat":"principles","vague":"进去再退出来，东西怎么变了位置","say":"进出使用同一轴向与同一来源点","def":"界面元素在状态变化前后保持空间关系可预测。做法：进入方向=退出方向的反向，父子层级共享一条轴，绝不让元素凭空在另一处出现。","trigger":"drag","demo":{"kind":"drag","mode":"direction","hint":"前进再返回，注意方向对称"},"_legacyCode":"/* 前进 translateX(+100% → 0)，返回 (0 → +100%) */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"frequency-of-use","zh":"使用频率原则","en":"Frequency of use","alias":["高频少动","每次都动就别动"],"cat":"principles","vague":"这个动画我一天看 200 次","say":"高频路径动效 ≤120ms 或直接去掉","def":"动效成本按“观看次数”计费。首次使用值得编排得华丽，每天几百次的操作（切 tab、提交表单）必须极快或干脆没有。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"two","a":{"label":"第一次看 · 400ms 值得","frames":[[0,"opacity:0; transform:translateY(16px) scale(.96)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"400ms"},"b":{"label":"第 200 次 · 只留 100ms","frames":[[0,"opacity:0; transform:translateY(4px)"],[100,"opacity:1; transform:none"]],"e":"ease-out","d":"100ms"}},"_legacyCode":"/* 首次: 400ms 编排；常规: 120ms；快捷键: 0ms */","spec":{"id":"frequency-of-use","version":1,"timeline":[{"id":"a-t-translateY","target":"self","prop":"translateY","from":16,"to":0,"unit":"px","start":0,"dur":0.4,"ease":"easeOutExpo"},{"id":"a-t-scale","target":"self","prop":"scale","from":0.96,"to":1,"unit":"none","start":0,"dur":0.4,"ease":"easeOutExpo"},{"id":"a-t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.4,"ease":"easeOutExpo"},{"id":"b-t-translateY","target":"child","prop":"translateY","from":4,"to":0,"unit":"px","start":0,"dur":0.1,"ease":"easeOut"},{"id":"b-t-opacity","target":"child","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.1,"ease":"easeOut"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"reduced-motion","zh":"减弱动效","en":"Reduced motion","alias":["prefers-reduced-motion","无障碍","晕动症"],"cat":"principles","vague":"有人看了会头晕","say":"响应 prefers-reduced-motion，降级为淡入","def":"系统级无障碍偏好。大面积位移、视差、缩放会诱发光谷性眩晕。合格的实现是保留信息传达（改成淡入或立即完成），而不是什么都不剩。","trigger":"time","curve":"easeOutExpo","demo":{"kind":"two","a":{"label":"完整动效","frames":[[0,"opacity:0; transform:translateY(22px) scale(.9)"],[100,"opacity:1; transform:none"]],"e":"cubic-bezier(0.16,1,0.3,1)","d":"620ms"},"b":{"label":"reduced：仅淡入","frames":[[0,"opacity:0"],[100,"opacity:1"]],"e":"linear","d":"120ms"}},"_legacyCode":"@media (prefers-reduced-motion: reduce) {\n  * { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }\n}","spec":{"id":"reduced-motion","version":1,"timeline":[{"id":"a-t-translateY","target":"self","prop":"translateY","from":22,"to":0,"unit":"px","start":0,"dur":0.62,"ease":"easeOutExpo"},{"id":"a-t-scale","target":"self","prop":"scale","from":0.9,"to":1,"unit":"none","start":0,"dur":0.62,"ease":"easeOutExpo"},{"id":"a-t-opacity","target":"self","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.62,"ease":"easeOutExpo"},{"id":"b-t-opacity","target":"child","prop":"opacity","from":0,"to":1,"unit":"none","start":0,"dur":0.12,"ease":"linear"}],"loop":{"count":1,"direction":"normal","fill":"both"},"stagger":{"count":1,"step":0,"from":"start"},"reducedMotion":{"strategy":"fade","dur":0.18}},"platforms":{"css":"native","waapi":"native","gsap":"native","framer":"native","swift":"unavailable","compose":"unavailable","tailwind":"native","film-mo":"native","film-rk":"native","json":"native","film-camera":"unavailable"}},{"id":"frame-rate","zh":"帧率","en":"Frame rate (fps)","alias":["60fps","120fps","每秒帧数"],"cat":"perf","vague":"让它更顺","say":"稳定 60fps（16.7ms/帧预算）","def":"每秒刷新次数。60Hz 屏幕每帧预算只有 16.7ms——样式、布局、绘制、合成必须挤进去，超了就丢帧。高刷屏上 120Hz 时预算减半。","trigger":"time","demo":{"kind":"perf","mode":"fps"},"_legacyCode":"/* DevTools → Performance → 看紫色 Layout 是否吃满预算 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"jank","zh":"卡顿","en":"Jank","alias":["掉帧","stutter","不流畅"],"cat":"perf","vague":"有点一卡一卡的","say":"排查主线程长任务，消除 jank","def":"动画出现可见的不连续跳动，本质是主线程被占住、没能在预算内交出下一帧。责任通常在同步 JS、图片解码、layout 抖动，而不是动画本身。","trigger":"time","demo":{"kind":"perf","mode":"jank"},"_legacyCode":"/* 用 Content-Visibility / Worker 把主线程还给渲染 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"dropped-frame","zh":"丢帧","en":"Dropped frame","alias":["frame skip"],"cat":"perf","vague":"动到一半跳过去了","say":"丢帧：连续两帧内容相同","def":"应渲染的帧没有被渲染出来，浏览器把上一帧重复显示一次。丢 1–2 帧不易察觉，连续丢 3 帧以上就会被读成“卡”。","trigger":"time","demo":{"kind":"perf","mode":"drop"},"_legacyCode":"/* Chrome: DevTools → Rendering → Frame Rendering Stats */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"compositing","zh":"合成","en":"Compositing","alias":["合成层","compositor","GPU 合成"],"cat":"perf","vague":"为什么它动得不卡","say":"让动画留在合成线程（只动 transform/opacity）","def":"把已经画好的图层交给 GPU 拼装成画面。transform 与 opacity 动画可以在合成线程独立完成，不需要主线程参与，因此最稳。","trigger":"time","demo":{"kind":"perf","mode":"composite"},"_legacyCode":"/* 提升为合成层的常见触发：will-change, transform, filter */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"will-change","zh":"will-change 预提示","en":"will-change","alias":["提前建层","GPU 层提示"],"cat":"perf","vague":"加个 will-change 会不会更顺","say":"动画开始前才加，结束后移除","def":"告诉浏览器“这个元素接下来要动”，提前建层。它不是性能开关而是提示；长期挂在一堆元素上会吃满显存，反而更卡。","trigger":"time","demo":{"kind":"perf","mode":"willchange"},"_legacyCode":"/* 好：交互开始时加，transitionend 后去掉 */\nel.style.willChange = \"transform\";","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"layout-thrashing","zh":"布局抖动","en":"Layout thrashing","alias":["强制同步布局","reflow storm","读写交替"],"cat":"perf","vague":"循环里读 offsetHeight 结果很卡","say":"批量读、再批量写，避免读写交替","def":"在循环中交替读几何属性和写样式，每次都强制浏览器重算布局。修复方式是分批：一帧内先读完所有测量，再统一写。","trigger":"time","demo":{"kind":"perf","mode":"thrash"},"_legacyCode":"/* ✗ 读写交替 */\nfor (const el of els) el.style.width = el.offsetWidth + 10 + \"px\";\n/* ✓ 先读后写 */\nconst ws = els.map(el => el.offsetWidth); els.forEach((el, i) => el.style.width = ws[i] + 10 + \"px\");","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"reflow-repaint","zh":"重排与重绘","en":"Reflow vs Repaint","alias":["回流","layout","paint","绘制开销"],"cat":"perf","vague":"改哪个属性比较便宜","say":"几何属性→重排；颜色→重绘；transform/opacity→仅合成","def":"改几何属性（width/top/margin）触发布局重排最贵；改颜色只重绘；transform 与 opacity 只需合成，最便宜。这条阶梯就是“动效该动哪些属性”的判断依据。","trigger":"time","demo":{"kind":"perf","mode":"ladder"},"_legacyCode":"/* 阶梯：Layout > Paint > Composite */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"gpu-friendly","zh":"可动画的安全属性","en":"GPU-friendly properties","alias":["动画友好属性","只动 transform 和 opacity"],"cat":"perf","vague":"哪些属性能放心做动画","say":"只动画 transform / opacity / filter / clip-path","def":"可以放进动画的安全名单：transform、opacity、filter、clip-path、mask（各有成本）。危险名单：width/height/top/left/margin、box-shadow、layout 触发的 font-size。","trigger":"time","demo":{"kind":"perf","mode":"safe"},"_legacyCode":"/* 用 transform: translateY 代替 top，用伪元素 opacity 代替 box-shadow */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"raf","zh":"rAF 帧回调","en":"requestAnimationFrame","alias":["requestAnimationFrame","逐帧更新","动画循环"],"cat":"perf","vague":"用 setInterval 做动画会不会不准","say":"所有 JS 动画都应走 requestAnimationFrame","def":"向浏览器登记“下一帧要我算一次”。它和刷新率同步、页面隐藏时自动暂停，是 setInterval 做动画的正确替代（后者会与帧错位造成抖动）。","trigger":"time","demo":{"kind":"perf","mode":"raf"},"_legacyCode":"function loop(t) { step(t); if (!done) requestAnimationFrame(loop); }\nrequestAnimationFrame(loop);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scroll-jank","zh":"滚动监听开销","en":"Scroll-linked work cost","alias":["passive listener","scroll 事件","节流"],"cat":"perf","vague":"加了 scroll 监听页面变粘","say":"scroll 监听用 passive:true，或改用 IntersectionObserver","def":"在 scroll 事件里做重活会阻塞滚动合成，让滚动本身变得黏手。解法：passive 监听（承诺不 preventDefault）、IntersectionObserver、或原生 scroll-driven animation。舞台里同一个滚动进度驱动两条等长轨道：上条只动 transform，下条每帧改几何，顺不顺一眼分得出来。","trigger":"time","demo":{"kind":"frames","html":"<div class=\"sj\"><i class=\"sj-row a\">transform</i><i class=\"sj-row b\">每帧改几何</i><i class=\"sj-run\"></i></div>","hint":"滚动：上条跟手，下条一顿一顿"},"_legacyCode":"addEventListener('scroll', onScroll, { passive: true });","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"content-visibility","zh":"内容可见性优化","en":"content-visibility","alias":["跳过屏外渲染","contain","auto 渲染"],"cat":"perf","vague":"长页面首屏很卡","say":"屏外区块用 content-visibility: auto 跳过渲染","def":"让屏外内容跳过布局与绘制，直到接近视口才渲染。长页面的免费提速手段，但必须配 contain-intrinsic-size 占位，否则滚动条会跳。","trigger":"time","demo":{"kind":"perf","mode":"cv"},"_legacyCode":".section { content-visibility: auto; contain-intrinsic-size: auto 600px; }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"easing-token","zh":"动效令牌","en":"Motion token","alias":["动效规范","design token for motion","工程化治理"],"cat":"perf","vague":"每个人写的曲线和快慢都不一样","say":"先定一套统一的速度和曲线，所有动效照着用","def":"把常用的速度、曲线和移动幅度起好名字，大家引用同一套值。比如“快速”统一用 120ms；要调整全站节奏时，改一处就能同步更新所有引用它的动效。","trigger":"time","demo":{"kind":"perf","mode":"token"},"_legacyCode":":root {\n  --ease-standard: cubic-bezier(0.2, 0, 0, 1);\n  --dur-2: 200ms;\n  --lift-2: 4px;\n}","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"css-3d","zh":"CSS 三维变换","en":"CSS 3D transform","alias":["rotateY","translateZ","3D 变换"],"cat":"runtime","vague":"让这块东西真的在空间里转","say":"用 CSS 3D：容器 perspective + 子元素 rotate3d/translateZ","def":"浏览器在三维空间里摆放元素。要有深度必须凑齐三件事：父级 perspective（相机）、子级 Z 位移或旋转、以及共享的 3D 上下文。","trigger":"time","demo":{"kind":"cube","mode":"plain"},"_legacyCode":".scene { perspective: 800px; }\n.cube { transform-style: preserve-3d; transform: rotateX(-18deg) rotateY(28deg); }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"preserve-3d","zh":"保留 3D 上下文","en":"transform-style: preserve-3d","alias":["flat","3D 嵌套","渲染上下文"],"cat":"runtime","vague":"为什么卡片一转，就像叠成一张纸？","say":"父级旋转时，里面的卡片被压成同一层了","def":"父级带着子元素旋转时，flat 会把子元素压到同一个平面；改用 preserve-3d，前后距离才会保留下来。下方两组会同时转动，可以直接比较它们的层次变化。","trigger":"time","demo":{"kind":"nest"},"_legacyCode":".parent { transform-style: preserve-3d; }  /* 否则子元素被压平 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"backface","zh":"背面可见性","en":"backface-visibility","alias":["背面","镜像穿帮","backface hidden"],"cat":"runtime","vague":"转过去的时候背面漏出来了","say":"backface-visibility: hidden 隐藏背面","def":"元素绕轴转到背面时是否仍然绘制。翻卡、立方体内壁、3D 轮播都要显式声明，否则会看到镜像穿帮。","trigger":"time","demo":{"kind":"cube","mode":"backface"},"_legacyCode":".face { backface-visibility: hidden; }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"fov","zh":"视距与视场角","en":"Perspective / FOV","alias":["perspective 值","相机距离","畸变"],"cat":"runtime","vague":"透视感再强一点","say":"把 perspective 从 1200px 调到 500px，畸变更强","def":"perspective 数值就是相机到屏幕的距离：值越小越近、畸变越夸张，越大越接近平行投影。3D 场景是否可信，八成取决于这个值。","trigger":"time","demo":{"kind":"cube","mode":"fov"},"_legacyCode":".scene { perspective: 500px; }  /* 小=近=夸张，大=远=平淡 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"orbit-controls","zh":"轨道控制器","en":"Orbit controls","alias":["拖拽旋转","相机环绕"],"cat":"runtime","vague":"我想用鼠标转着看","say":"把指针位移映射到 rotateX/rotateY，并做惯性衰减","def":"用指针位移驱动相机绕物体旋转的交互模式。要点：俯仰角要夹在 ±80° 内避免翻转，松手后带一点惯性才像实体。","trigger":"time","demo":{"kind":"cube","mode":"orbit","hint":"在立方体上拖动"},"_legacyCode":"rx = clamp(rx + dy * 0.4, -80, 80);\nry += dx * 0.5;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"webgl-context","zh":"WebGL 上下文","en":"WebGL context","alias":["getContext webgl","GPU 画布","硬件加速"],"cat":"runtime","vague":"那种用显卡画的画面","say":"拿 canvas 的 WebGL 上下文，逐帧提交 uniform 重绘","def":"浏览器通往 GPU 的通道。整个画面由顶点与片元着色器算出来，能做几万个粒子和真实光照；代价是状态管理、上下文丢失与首屏体积。","trigger":"time","demo":{"kind":"shader","mode":"context"},"_legacyCode":"const gl = canvas.getContext('webgl2', { alpha: false, antialias: true });","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"fragment-shader","zh":"片元着色器","en":"Fragment shader","alias":["像素着色器","GLSL","gl_FragColor"],"cat":"runtime","vague":"那种流动的、有机的背景","say":"一个片元着色器：按 uv 与 u_time 算颜色（plasma）","def":"对每个像素执行一次的程序。流动渐变、噪声云、流体、色散都在这里算——因为并行度极高，比 CPU 画同样的东西快几个数量级。","trigger":"time","demo":{"kind":"shader","mode":"plasma"},"_legacyCode":"float v = sin(p.x*7.+u_t) + sin(p.y*7.-u_t*.7) + sin((p.x+p.y)*5.+u_t*1.3);\ngl_FragColor = vec4(.5 + .5*cos(v + vec3(0.,2.1,4.2)), 1.);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"gpu-particles","zh":"GPU 粒子","en":"GPU particles","alias":["顶点着色器动画","point sprite","百万粒子"],"cat":"runtime","vague":"几万个点还不掉帧","say":"位置在顶点着色器里算，CPU 每帧只更新一个 time","def":"把粒子的位置计算搬进着色器，主线程只喂一个时间参数。几万到百万级粒子仍然流畅，代价是难以做碰撞等 CPU 逻辑。","trigger":"time","demo":{"kind":"shader","mode":"points"},"_legacyCode":"vec3 pos = start + dir * u_t + vec3(0., -4.9 * u_t * u_t, 0.);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"post-processing","zh":"后处理","en":"Post-processing","alias":["调色","shader pass"],"cat":"runtime","vague":"画面质感再厚一点","say":"把场景渲到纹理，再走一遍 bloom / 调色 pass","def":"先渲染到离屏纹理，再用第二遍着色器加工：泛光、色调映射、暗角、景深、运动模糊。是“游戏感画面”的主要来源。","trigger":"time","demo":{"kind":"shader","mode":"postfx"},"_legacyCode":"float glow = pow(max(0., lumin(color) - threshold), softKnee) * intensity;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"particle-system","zh":"粒子系统","en":"Particle system","alias":["发射器","emitter","life / gravity / drag"],"cat":"runtime","vague":"冒点东西出来，飘一飘","say":"发射器：初速 + 重力 + 阻力 + 生命衰减，池化复用","def":"用大量小对象模拟烟、火、雪、尾迹。工程要点是对象池（不要每帧 new）、上限数量、以及死亡后回收而不是删除。","trigger":"time","demo":{"kind":"canvas2d","mode":"particles"},"_legacyCode":"p.vy += g * dt; p.x += p.vx * dt; p.life -= dt;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"instancing","zh":"实例化绘制","en":"Instancing","alias":["一次提交","batch draw","drawInstanced"],"cat":"runtime","vague":"同一个小东西要画一千个","say":"实例化：几何提交一次，逐实例只传偏移与颜色","def":"同一份几何画 N 次，每次只换少量逐实例数据，把绘制调用从 N 次压到 1 次。绘制调用（draw call）才是瓶颈时的标准解法。","trigger":"time","demo":{"kind":"canvas2d","mode":"instancing"},"_legacyCode":"gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, COUNT);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"mesh-warp","zh":"网格形变","en":"Mesh warp","alias":["晶格变形","网格扭曲","warp"],"cat":"runtime","vague":"让图片像布一样波动","say":"把图切成网格，逐顶点按正弦位移后重绘","def":"将图像或形状剖分成网格，再按顶点位移做弯曲、鼓包、液态变形。After Effects 的 Mesh Warp、Rive 的网格形变都是这个原理。","trigger":"time","demo":{"kind":"canvas2d","mode":"warp"},"_legacyCode":"const off = Math.sin(x * 0.06 + t * 2) * 8;\ndrawQuad(srcX, srcY, dstX + off, dstY + off);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"physics-engine","zh":"物理模拟","en":"Physics simulation","alias":["刚体","重力 碰撞","matter.js","restitution"],"cat":"runtime","vague":"让它像真的东西一样掉下去撞开","say":"刚体积分 + 碰撞求解，弹性系数 0.6","def":"用重力、速度、位置积分与碰撞求解代替手写关键帧。适合抛掷、堆叠、碰撞等无法预先编排的动作；参数量大，需要调。","trigger":"time","demo":{"kind":"canvas2d","mode":"physics","hint":"点一下扔一个球"},"_legacyCode":"vy += gravity * dt;\nif (y + r > floor) { y = floor - r; vy *= -restitution; }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"gltf-draco","zh":"三维模型与压缩","en":"glTF + Draco","alias":["gltf","glb","draco","meshopt"],"cat":"runtime","vague":"把那个 3D 模型放进网页","say":"glb 走 Draco/Meshopt 压缩，几何减到 1/6 再挂纹理","def":"网页上的 3D 资产格式。glTF 是运行时格式，Draco/Meshopt 压几何、KTX2/WebP 压纹理；模型体积通常就是 3D 网页首屏最大的成本。","trigger":"time","demo":{"kind":"canvas2d","mode":"gltf"},"_legacyCode":"loader.setDRACOLoader(draco);\nglTFLoader.load('headset.glb' /* 1.2MB → 180KB */);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"sprite-sheet","zh":"精灵图 / 序列帧","en":"Sprite sheet","alias":["帧动画","steps()","flipbook"],"cat":"runtime","vague":"老游戏那种一格一格的动","say":"一张精灵图 + steps(n) 逐格位移，8~12fps","def":"把每一帧画在同一张大图上，靠位移裁切播放。手绘质感与像素风的正解；帧数决定成本，8fps 的观感比 60fps 更“定格”。","trigger":"time","demo":{"kind":"sprite"},"_legacyCode":"background: url(sheet.png);\nanimation: play 0.64s steps(8) infinite;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"lottie","zh":"Lottie（JSON 动画）","en":"Lottie","alias":["bodymovin","json animation","关键帧插值"],"cat":"runtime","vague":"设计师在 AE 里做好的动画直接给我","say":"导出 Lottie JSON，运行时按关键帧插值播放","def":"把 After Effects 的时间轴导出成 JSON，由运行时逐帧插值绘制。设计师可交付、体积小、可换色；复杂表达式和蒙版容易踩坑。","trigger":"time","demo":{"kind":"lottie","hint":"可拖动播放头"},"_legacyCode":"lottie.loadAnimation({ container, renderer: 'svg', loop: true, path: 'anim.json' });","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"rive","zh":"Rive 状态机","en":"Rive state machine","alias":["state machine","输入混合","交互动画"],"cat":"runtime","vague":"它会看状态决定怎么动","say":"Rive 状态机：Idle ⇄ Wave，由 Input 触发迁移","def":"把动画做成带状态与迁移的图，运行时用输入驱动。适合吉祥物、按钮、加载态这类“要响应用户”的动画，比堆 if 切换 CSS 干净得多。","trigger":"time","demo":{"kind":"rive","hint":"点 Input 触发状态迁移"},"_legacyCode":"sm.input('tap').fire();\nsm.state('wave').onEnter = ...;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"bone-rig","zh":"骨骼动画（正向运动学）","en":"Skeletal animation (FK)","alias":["骨骼","绑定","forward kinematics","joint chain"],"cat":"runtime","vague":"让手臂一节一节地动","say":"骨骼链 FK：逐关节角度叠加，网格跟随骨骼","def":"给形状绑一副骨骼，动关节而不是动顶点。FK 是自上而下逐关节旋转，适合挥手、走路这类可预先编排的动作。","trigger":"time","demo":{"kind":"rig","mode":"fk"},"_legacyCode":"shoulder.rotation += 0.6;\nelbow.rotation += Math.sin(t) * 0.4;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"ik-solver","zh":"反向运动学","en":"IK solver","alias":["ik","末端定位","two-bone ik"],"cat":"runtime","vague":"手要一直指着鼠标那个点","say":"两骨 IK：给定末端目标反解两个关节角","def":"反过来由末端位置求关节角度：手抓住哪、肘就该在哪。角色跟随指针、脚贴合地面、UI 里的“视线跟随”都靠它。","trigger":"time","demo":{"kind":"rig","mode":"ik","hint":"移动指针，手会跟过来"},"_legacyCode":"const d = clamp(dist(target, root), |l1 - l2|, l1 + l2);\nconst a2 = Math.acos((d*d + l1*l1 + l2*l2) / (2*l1*l2));","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"delta-time","zh":"时间步长解耦","en":"Delta time","alias":["dt","帧率无关","frame independent"],"cat":"runtime","vague":"在高刷屏上它跑得快一倍","say":"位移乘以 dt，而不是每帧加固定步长","def":"每帧的位移要乘以真实经过时间。写死“每帧 +4px”在 60Hz 正常、120Hz 就变成两倍速——这是 JS 动画最常见的隐蔽 bug。","trigger":"time","demo":{"kind":"canvas2d","mode":"dt"},"_legacyCode":"/* ✗ 每帧固定步长 */ x += 4;\n/* ✓ 与时间绑定 */ x += speed * ((now - last) / 1000);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"render-loop","zh":"渲染循环","en":"Render loop","alias":["game loop","update / draw","rAF 主循环"],"cat":"runtime","vague":"整个动画系统的心跳","say":"一个 rAF 主循环：update(dt) → draw()，可暂停可固定步长","def":"所有逐帧动画的总闸。标准结构是 update(逻辑) 与 draw(绘制) 分离，配合固定步长（fixed timestep）保证物理稳定，页面隐藏时自动停。","trigger":"time","demo":{"kind":"canvas2d","mode":"loop"},"_legacyCode":"function frame(now) {\n  const dt = Math.min(0.05, (now - last) / 1000); last = now;\n  update(dt); draw();\n  raf = requestAnimationFrame(frame);\n}","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"svg-smil","zh":"SVG 声明式动画","en":"SMIL","alias":["animate","animateTransform","animateMotion"],"cat":"runtime","vague":"不写 JS 也能让 SVG 自己动","say":"<animateTransform> 直接写在 SVG 里，声明式循环","def":"SVG 内建的动画标签，无需脚本即可做旋转、路径运动（animateMotion）、属性插值。写在图标文件里就能带走，但无法中途改参数。","trigger":"time","demo":{"kind":"smil"},"_legacyCode":"<circle r=\"4\"><animate attributeName=\"cx\" values=\"10;90;10\" dur=\"2s\" repeatCount=\"indefinite\"/></circle>","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"timeline-scrub","zh":"时间轴拖拽","en":"Timeline scrubbing","alias":["scrub","进度回填","可回拖动效"],"cat":"runtime","vague":"我要能拖着看每一帧","say":"把动画进度暴露成可写值，拖动即 seek","def":"让进度可以被外部写入（拖动、滚动、录音笔位置）。实现上要么用 Web Animations API 的 currentTime，要么把动效写成 pure(progress) 函数。","trigger":"time","demo":{"kind":"scrub","hint":"拖动滑杆逐帧看"},"_legacyCode":"anim.pause();\nslider.oninput = () => anim.currentTime = slider.value * 10;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"gaze-tracking","zh":"光标驱动视线跟随","en":"Cursor-driven gaze tracking","alias":["眼睛跟着鼠标","视线跟随","gaze"],"cat":"compound","vague":"让这个角色看着我的鼠标","say":"把指针相对中心的向量映射到瞳孔位移，限幅 + 平滑跟随（lerp 0.16），空闲时做低频游走与眨眼","def":"指针位置驱动角色视线：取「指针 − 中心」的方向向量，按最大转动半径限幅，再做指数平滑，眼睛就有了“看着你”的生命感。空闲时必须补一段低频游走，否则像死机。","trigger":"time","demo":{"kind":"compound","mode":"gaze","hint":"在框里移动鼠标"},"_legacyCode":"const v = norm(pointer - center);\npupil += (clampLen(v, R) - pupil) * 0.16;  // 每帧平滑","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"pinned-hero","zh":"滚动驱动主视觉重组","en":"Scroll-driven pinned hero recomposition","alias":["钉住主视觉","sticky 重组","主视觉缩小让位"],"cat":"compound","vague":"滚下去的时候大图别走，下面的东西排进来","say":"主视觉 sticky 钉住并按滚动进度 scale 0.74、左移，内容卡从堆叠态错峰展开成一行","def":"把主视觉钉在视口里当“锚”，用同一个滚动进度同时驱动它收缩和内容重排。两条时间线共用一个进度，画面才不会各走各的。","trigger":"time","demo":{"kind":"compound","mode":"pinned","hint":"在框里滚动"},"_legacyCode":"hero.style.transform = `scale(${lerp(1, .74, p)}) translateX(${p}%)`;\ncard.style.transform = `translateX(${-(i - mid) * step * (1 - k)}px) scale(${lerp(.94, 1, k)})`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"section-stack","zh":"滚动驱动章节覆盖堆叠","en":"Scroll-driven section reveal & card stacking","alias":["章节覆盖","stacking cards"],"cat":"compound","vague":"下一屏盖上来，上一屏退下去","say":"每章 sticky 递增 14px 顶部偏移，被覆盖时 scale 0.93 + 亮度衰减","def":"连续章节像一副牌：后一张盖上来，前一张微微缩小退到后面。堆叠层数控制在 3～4 张，再多就变成“被卡住”。","trigger":"time","demo":{"kind":"compound","mode":"stack","hint":"在框里滚动"},"_legacyCode":".sec { position: sticky; top: calc(4px + var(--i) * 14px); height: 118px; margin-bottom: 104px; }\nsec.style.transform = `scale(${1 - .075 * covered})`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scene-parallax","zh":"光标驱动微缩景观视差","en":"Cursor-driven miniature scene parallax","alias":["鼠标视差","多层视差","diorama"],"cat":"compound","vague":"鼠标一动，箱子里的东西分层跟着动","say":"指针向量按层深分配位移系数（远 0.3 / 近 1.6），容器叠加 rotateY ±6° 做立体盒","def":"把一张图拆成 3～5 层，按“越近动得越多”分配位移系数，再给整体一点 rotateY，平面的画就变成了一个可以透过玻璃看的立体盒。","trigger":"time","demo":{"kind":"compound","mode":"dio","hint":"在框里移动鼠标"},"_legacyCode":".layer { transform: translate3d(calc(var(--px) * var(--f) * -8px), 0, 0); }\n.diorama { transform: rotateY(calc(var(--px) * 6deg)); transform-style: preserve-3d; }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scroll-orbit","zh":"滚动驱动角色环绕","en":"Scroll-driven character orbit","alias":["滚动转模型","scroll turntable","环绕展示"],"cat":"compound","vague":"滚一下，模型跟着转","say":"滚动进度 0→1 映射到 rotateY 0→360°，主体 sticky，俯仰固定在 −14°","def":"把滚动进度直接当作相机的方位角。要点有二：主体要钉住，否则转一半就滚出画面；俯仰角固定，只让方位角走，观者才不会晕。","trigger":"time","demo":{"kind":"compound","mode":"orbit","hint":"在框里滚动"},"_legacyCode":"fig.style.transform = `rotateX(-14deg) rotateY(${p * 360}deg)`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"door-bloom","zh":"悬停触发车门绽放","en":"Hover-triggered door bloom","alias":["开门动效","花瓣展开","hover bloom"],"cat":"compound","vague":"鼠标一放上去，门片一片片张开","say":"悬停时 4 扇门板沿各自铰链轴从闭合旋转展开（rotateY ±102°），错峰 60ms，舱内光晕随开启增强","def":"把一个整体拆成若干“门板”，悬停时各自绕自己的铰链轴旋转张开（真车门的开合方式），配合错峰与舱内光晕。它是 hover 反馈里最“贵重”的一档，只该给主视觉用。","trigger":"time","demo":{"kind":"compound","mode":"bloom","hint":"悬停试试"},"_legacyCode":".petal { transform-origin: 0 50%; transition: transform .55s var(--emphasized); transition-delay: calc(var(--i) * 45ms); }\n.petal { transform: rotate(var(--a)) translateX(9px) rotateY(-64deg); }   /* 合 */\n.wrap:hover .petal { transform: rotate(var(--a)) translateX(30px) rotateY(0); } /* 开 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"vortex-transit","zh":"滚动驱动涡旋穿隧","en":"Scroll-driven vortex transit","alias":["虫洞","隧道穿梭","vortex"],"cat":"compound","vague":"滚着滚着像在隧道里往前飞","say":"滚动进度驱动 N 层同心环 scale 0.08→3.58 + 旋转，取模循环制造无限纵深","def":"若干同心层按同一进度做“由远及近”的放大与旋转，用取模让每一层循环回起点，视觉上就是一条没有尽头的隧道。滚动一停必须立刻静止，否则晕。","trigger":"time","demo":{"kind":"compound","mode":"vortex","hint":"在框里滚动"},"_legacyCode":"const t = (p * 1.7 + i / N) % 1;\nring.style.transform = `scale(${.08 + t * t * 3.5}) rotate(${t * 80 + i * 18}deg)`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"immersive-float","zh":"沉浸式漂浮生长","en":"Immersive float & growth","alias":["点击落下长草","奖励动效","float"],"cat":"compound","vague":"点一下，东西掉下来然后长出花草","say":"点击触发：球体落下（重力缓动 + 落地挤压）→ 茎秆 stroke-dashoffset 描边 → 叶片错峰 scale-in","def":"一段有因果的连续叙事：落体、接触、生长依次发生，前一个动作的终点是后一个的起点。这类动效的价值在时序衔接，而不是单个曲线。","trigger":"time","demo":{"kind":"compound","mode":"float","hint":"点一下"},"_legacyCode":"await ball.animate([{transform:translateY(-46px)},{transform:translateY(0) scale(1.18,.8)}],\n  {duration:520, easing:EASE_IN}).finished;\nstem.style.strokeDashoffset = 0;   /* 描边生长 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"helix-flow","zh":"旋流光螺旋展示","en":"Scroll-driven helix flow","alias":["螺旋轮播","helix","拖动多角度展示"],"cat":"compound","vague":"拖一下，东西沿螺旋轨道转着展示","say":"拖拽位移映射为螺旋相位：x=sin θ·R，y 随索引线性偏移，scale/opacity 由 cos θ 给出","def":"在圆周的角速度上再叠一个与索引成正比的纵向偏移，就得到螺旋。深度用 cos θ 换算成缩放与透明度，无需真 3D 也能读出前后关系。","trigger":"time","demo":{"kind":"compound","mode":"helix","hint":"左右拖动"},"_legacyCode":"const a = phase + i * (TAU / N);\nx = Math.sin(a) * R;  y = (i - N/2) * 7 + Math.cos(a) * 8;\nscale = .72 + (Math.cos(a) + 1) / 2 * .5;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"luminous-flow","zh":"光标驱动辉光流转","en":"Cursor-driven luminous flow","alias":["追光","鼠标打光","光随指针 + 起雾"],"cat":"compound","vague":"光跟着鼠标走，地面还起雾","say":"指针坐标写入 --lx/--ly 驱动径向光斑，指针速度平滑后映射为雾气上升与最多 1.06 倍推镜","def":"把指针位置作为唯一光源坐标写进 CSS 自定义属性，光斑、地面高光、雾气都从这一个源读取。速度越大雾越浓，等于给画面加了“油门”。","trigger":"time","demo":{"kind":"compound","mode":"glow","hint":"在框里移动鼠标"},"_legacyCode":"wrap.style.setProperty(\"--lx\", x + \"px\");\nwrap.style.setProperty(\"--fog\", smoothSpeed);  /* 速度→雾浓度 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"spotlight-reveal","zh":"光标聚光揭示","en":"Cursor spotlight reveal","alias":["手电筒","遮罩跟随","聚光灯"],"cat":"compound","vague":"鼠标像手电筒一样，照到哪才看得到哪","say":"一层与底色同值的遮罩，用 radial-gradient 在指针处挖洞，只改 --lx/--ly 两个变量","def":"把信息藏在一层遮罩下，只在指针周围露出来。适合“探索式”内容，但绝不能承载关键信息——键盘和触屏用户根本不会去照它。","trigger":"time","demo":{"kind":"compound","mode":"spotlight","hint":"在框里移动鼠标"},"_legacyCode":".mask { background: radial-gradient(circle var(--r, 56px) at var(--lx) var(--ly), transparent 0 42%, var(--bg) 62%); }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"cursor-trail","zh":"光标拖尾","en":"Cursor trail","alias":["轨迹","彗星尾","拖影"],"cat":"compound","vague":"鼠标后面拖一串东西","say":"N 个粒子做链式追随（每个追前一个，系数 0.28），尺寸与透明度按序号衰减","def":"一串粒子各自追随前一个，形成逐渐衰减的尾巴。要点是链式插值而不是记录历史坐标——后者在指针停下时会甩出残影。","trigger":"time","demo":{"kind":"compound","mode":"trail","hint":"在框里移动鼠标"},"_legacyCode":"for (i = 0; i < N; i++) { p[i] += (target(i) - p[i]) * 0.28; }  // p[0] 追指针，p[i] 追 p[i-1]","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"hover-fan","zh":"悬停扇形展开","en":"Hover fan-out stack","alias":["牌堆展开","叠卡扇开","fan out"],"cat":"compound","vague":"一叠卡片悬停时摊开","say":"堆叠态归零位移，悬停时按 index 分配 rotate 与 translateX，错峰 40ms","def":"把一摞东西在悬停时摊开成扇形，用“收纳/展开”表达同一组对象的两种密度。占位只在展开瞬间变化，所以要靠 transform 偏移而不是改布局。","trigger":"time","demo":{"kind":"compound","mode":"fan","hint":"悬停试试"},"_legacyCode":".card { transform: rotate(calc(var(--i) * 8deg)) translateX(calc(var(--i) * 15px)); transition-delay: calc(var(--i) * 40ms); }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"card-peel","zh":"悬停揭角","en":"Card peel","alias":["卷角","翻页角","page peel"],"cat":"compound","vague":"鼠标放上去卡片角会翘起来","say":"右下角三角形从 0 长到 36px，配渐变模拟背面与投影，父层同步裁切出缺口","def":"把纸张翻角的物理感搬进 UI：一角翘起，露出“背面”和落下的阴影。属于装饰性动效，用在入口卡上提示“点进去还有内容”最有效。","trigger":"time","demo":{"kind":"compound","mode":"peel","hint":"悬停试试"},"_legacyCode":".corner { width: 0; height: 0; transition: .42s cubic-bezier(.2,0,0,1); }\n.wrap:hover .corner { width: 34px; height: 34px; background: linear-gradient(315deg, var(--bg) 42%, #fff 42%); }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"horizontal-scroll","zh":"滚动转横向位移","en":"Scroll-to-horizontal","alias":["横向滚动section","竖滚横移","horizontal pan"],"cat":"compound","vague":"往下滚，内容却往右边走","say":"把纵向滚动进度映射成横向轨道 translateX，容器 sticky 占住视口","def":"纵向滚动驱动横向轨道，常见于作品集与时间轴。代价很高：用户失去进度感、触控板手势冲突，所以要给一个明确的终点和退出路径。","trigger":"time","demo":{"kind":"compound","mode":"hscroll","hint":"在框里滚动"},"_legacyCode":"track.style.transform = `translateX(${-p * (track.scrollWidth - viewport)}px)`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scrub-frames","zh":"滚动抽帧播放","en":"Scrubbed frame sequence","alias":["视频抽帧","序列帧滚动","frame scrub"],"cat":"compound","vague":"滚一下就像在拖视频进度条","say":"滚动进度取整到 N 帧（steps 语义），每帧只写一次姿态，配帧号读数","def":"把滚动进度量化成离散帧，做出“拖视频进度条”的手感（24 帧一组最常用）。必须量化而不是连续插值，否则就变成模糊的拖影，失去逐帧的机械感。","trigger":"time","demo":{"kind":"compound","mode":"frames","hint":"在框里滚动"},"_legacyCode":"const f = Math.round(p * (N - 1));   // 量化，不要 lerp\npose(f); readout.textContent = `f ${String(f + 1).padStart(2, \"0\")}/${N}`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"sticky-two-col","zh":"钉住双栏叙事","en":"Sticky two-column","alias":["左图右文","sticky 步骤","双栏滚动同步"],"cat":"compound","vague":"左边图不动，右边一条条滚，图跟着换","say":"左栏 sticky，右栏各步骤到达可视区域顶部时切换左栏内容并交叉淡入","def":"滚动叙事最稳的一种结构：视觉锚点钉住，文字流过去，锚点随段落切换。每一段到达可视区域顶部时再切换图片，向上滚动时按相同阈值还原上一段。","trigger":"time","demo":{"kind":"compound","mode":"twocol","hint":"在框里滚动"},"_legacyCode":"let active = 0;\nsteps.forEach((step, i) => {\n  if (step.getBoundingClientRect().top <= viewportTop + 4) active = i;\n});\nswapVisual(active);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"theme-morph","zh":"滚动主题渐变","en":"Scroll-linked theme morph","alias":["滚动换色","背景随滚动变化","色阶过渡"],"cat":"compound","vague":"滚下去整屏颜色慢慢换掉","say":"把进度落到色标数组上做 RGB 插值，同时联动前景色保证对比度","def":"用滚动进度在几组配色之间插值，制造“进入下一章”的氛围转换。必须同时插值前景色——只换背景很容易在中途出现读不出的低对比组合。","trigger":"time","demo":{"kind":"compound","mode":"thememorph","hint":"在框里滚动"},"_legacyCode":"const [a, b, t] = locate(stops, p);\nbg.style.background = mixRGB(a.bg, b.bg, t); fg.style.color = mixRGB(a.fg, b.fg, t);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"progress-ring","zh":"滚动进度环","en":"Scroll progress ring","alias":["环形进度","阅读进度圈","stroke-dashoffset 进度"],"cat":"compound","vague":"一个圈跟着滚动慢慢填满","say":"stroke-dasharray = 周长，dashoffset = 周长 ×(1−进度)，圆心角从 −90° 起算","def":"把进度画成圆环。三个细节：起点要在 12 点方向（rotate -90°）、dasharray 要用实测周长、数字要单独居中否则读起来费劲。","trigger":"time","demo":{"kind":"compound","mode":"ring","hint":"在框里滚动"},"_legacyCode":"const C = 2 * Math.PI * r;\nring.style.strokeDasharray = C;\nring.style.strokeDashoffset = C * (1 - p);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"fab-to-sheet","zh":"悬浮按钮展开面板","en":"FAB to sheet container transform","alias":["FAB 展开","圆钮变面板","加号展开"],"cat":"compound","vague":"点右下角的圆钮，它自己长成一块面板","say":"同一个元素改宽高与圆角，从圆形展开成面板，内容延迟 120ms 错峰淡入","def":"按钮和它打开的面板是同一个容器，只是尺寸和圆角变了——这就是容器变换在移动端最典型的用法。内容要晚一拍出现，否则会看到文字被拉伸。","trigger":"time","demo":{"kind":"compound","mode":"fab","hint":"点一下圆钮"},"_legacyCode":".fab { width: 44px; height: 44px; border-radius: 22px; transition: width .38s var(--emphasized), height .38s, border-radius .38s; }\n.fab.open { width: 178px; height: 106px; border-radius: 18px; }\n.row { opacity: 0; transform: translateX(12px); transition-delay: calc(130ms + var(--i) * 65ms); }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"button-tri-state","zh":"按钮三态形变","en":"Button tri-state morph","alias":["按钮加载态","保存中动效","idle loading success"],"cat":"compound","vague":"点一下变圈转一转，再变回来说已保存","say":"宽度收拢成圆 → 转圈 → 展开并弹勾，三态之间只动 transform 与宽度，禁止抖动","def":"把“提交—处理—成功”压在一个控件里。核心约束是形变前后要落回同一位置，否则按钮一跳，用户会以为点错了。","trigger":"time","demo":{"kind":"compound","mode":"tristate","hint":"点按钮试试"},"_legacyCode":"btn → width: 44px; border-radius: 50% → spinner → width: auto; ✓ 已保存 → 1.6s 后回 idle","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"drag-compare","zh":"拖拽擦除对比","en":"Drag-to-compare wipe","alias":["前后对比滑块","before after","擦除对比"],"cat":"compound","vague":"中间一条线，拖开能看到前后两版","say":"把手位移换算成百分比，写入上层 clip-path: inset(0 X% 0 0)，同步给读数","def":"两张图叠在一起，用一条可拖的分割线切出前后。无障碍要点：把手必须可聚焦，并且左右方向键能等效拖动——否则纯键盘用户看不到对比。","trigger":"time","demo":{"kind":"compound","mode":"compare","hint":"拖动分割线"},"platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"line-mask-reveal","zh":"滚动驱动逐行遮罩揭示","en":"Scroll-driven line-mask reveal","alias":["逐行升起","文字遮罩揭示","line mask"],"cat":"compound","vague":"文字一行一行从挡板下面升起来","say":"每行包在 overflow:hidden 的蒙版里，滚动进度按行分配延迟，行内 translateY 100%→0","def":"排版级入场：整段文字不动，只有每一行从自己的蒙版里升出来。行与行的间隔要小于单行动画时长，否则读起来是\"一段一段\"而不是\"一行一行\"。","trigger":"time","demo":{"kind":"compound","mode":"linemask","hint":"在框里滚动"},"_legacyCode":".line { overflow: hidden; }\n.line > span { transform: translateY(calc((1 - p) * 100%)); }\n// p = ease(clamp((progress - i * .13) / .34, 0, 1))","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"velocity-skew","zh":"滚动速度倾斜跑马灯","en":"Scroll-velocity marquee skew","alias":["加速变形","跟手跑马灯","skew on scroll"],"cat":"compound","vague":"滚快了那排字会斜一下跟着冲","say":"滚动速度平滑后同时喂给位移增量和 skewX，速度归零时两者一起回弹到 0","def":"让常驻跑马灯对滚动产生反应：速度越大，横向位移越快、字面倾斜越明显。关键是 skew 必须由**平滑后的速度**驱动，直接用瞬时值会抖成锯齿。","trigger":"time","demo":{"kind":"compound","mode":"vspeed","hint":"在框里快速滚动"},"_legacyCode":"vel = lerp(vel, scrollDelta * 0.35, 0.12);\nrow.style.transform = `translateX(${x += base + vel * 2}px) skewX(${-vel * 0.4}deg)`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"proximity-glow","zh":"光标邻近点亮网格","en":"Cursor proximity grid glow","alias":["附近才亮","光晕网格","proximity"],"cat":"compound","vague":"鼠标靠近哪格哪格就亮","say":"每格算自己中心到指针的距离，按 (1−d/R)² 衰减映射到亮度、缩放与 Z 位移","def":"把指针当成一个有半径的光源，网格按距离衰减响应。衰减要用平方而不是线性，否则边缘那一圈会糊成一片，看不出\"靠近\"这件事。","trigger":"time","demo":{"kind":"compound","mode":"pglow","hint":"在框里移动鼠标"},"_legacyCode":"const k = Math.pow(Math.max(0, 1 - dist / R), 2);\ntile.style.transform = `scale(${1 + k * .28}) translateZ(${k * 26}px)`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"liquid-follow","zh":"液态黏附跟随","en":"Liquid cursor follow","alias":["黏性小球","果冻跟随","gooey"],"cat":"compound","vague":"有个果冻跟着鼠标，还会被拉长","say":"位置用弹簧追赶指针，速度投影到角度上沿运动方向拉长、垂直方向压扁，保持体积","def":"一个点用弹簧追随指针，同时按速度大小沿运动轴拉伸（scaleX>1, scaleY<1）并旋转对齐速度方向 —— 于是它像有表面张力的液体。只做位移就是普通跟随，拉长+转向才是\"液态\"。","trigger":"time","demo":{"kind":"compound","mode":"liquid","hint":"在框里移动鼠标"},"_legacyCode":"pos += (target - pos) * 0.14;\nconst v = pos - prev, a = Math.atan2(v.y, v.x), m = Math.min(1, |v| / 18);\nel.style.transform = `rotate(${a}rad) scale(${1 + m * .5}, ${1 - m * .34})`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"chart-build","zh":"滚动驱动图表生长","en":"Scroll-driven chart build","alias":["数据随滚动长出来","折线描边","图表叙事"],"cat":"compound","vague":"滚到这儿，图表一根根长出来","say":"折线用 stroke-dashoffset 描边，柱体按索引错峰 scaleY，数值读数与进度绑定","def":"滚动叙事里最常见的一屏：图形随滚动逐步成形。要点是**读数必须和图形同源同进度**，各算各的会出现\"柱子满了数字还在跳\"。","trigger":"time","demo":{"kind":"compound","mode":"chart","hint":"在框里滚动"},"_legacyCode":"line.style.strokeDashoffset = L * (1 - p);\nbar.style.transform = `scaleY(${ease(clamp((p - i / n * .6) / .4, 0, 1))})`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"preview-follow","zh":"悬停联动预览卡","en":"Hover-linked floating preview","alias":["跟随预览","列表悬停出图","preview card"],"cat":"compound","vague":"鼠标在列表上滑，旁边跟着飘一张图","say":"预览卡用弹簧跟随指针，换行时只换缩略内容与一次 scale 弹跳，不重新挂载","def":"列表行悬停时，一张跟随指针的预览卡在旁边漂浮。它必须**常驻**、只换内容，每次 hover 都新建 DOM 的话切换会闪并且丢惯性。","trigger":"time","demo":{"kind":"compound","mode":"preview","hint":"在几行之间移动鼠标"},"_legacyCode":"card += (pointer + offset - card) * 0.16;\ncard.style.transform = `translate(${card}px) rotate(${vx * .5}deg)`;\nrow.onenter = () => thumb.pop();","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"throw-dismiss","zh":"速度抛掷丢弃","en":"Velocity throw & dismiss","alias":["甩走卡片","拖拽丢弃","swipe to dismiss"],"cat":"compound","vague":"拖一下甩出去，卡片跟着转着飞掉","say":"旋转角与横向位移成正比、出手速度决定飞行轨迹，越过阈值才判定为丢弃","def":"卡片的旋转跟着位移走、飞行跟着出手速度走，两者缺一不可 —— 只有位移像拖纸片，只有速度像被弹走。丢弃阈值要同时看位移和速度，只看位移会误伤慢速拖动。","trigger":"time","demo":{"kind":"compound","mode":"throw","hint":"抓住最上面那张甩出去"},"_legacyCode":"rot = dx * 0.07;                       // 角度来自位移\nconst fly = Math.abs(dx) > 88 || Math.abs(vx) > 20;   // 位移或速度越界才算丢弃\nif (fly) card.animate([{ transform: `translate(${vx * 900}px, -60px) rotate(${rot * 6}deg)`, opacity: 0 }], …);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scramble-decode","zh":"乱码解码揭示","en":"Scramble decode reveal","alias":["解码文字","黑客风入场","text scramble"],"cat":"compound","vague":"字先是一堆乱码，然后一个个定下来","say":"每个字符有各自的锁定时刻，未锁定前每帧随机取字形，整体呈左→右的收敛带","def":"字符逐个从随机字形收敛到目标字符，形成一条\"解码带\"。要点是**每帧只替换未锁定的字符**，全部重随机会糊成噪声看不清在发生什么。","trigger":"time","demo":{"kind":"compound","mode":"scramble","hint":"点一下重新解码"},"_legacyCode":"for (i) if (frame > lockAt[i]) out += target[i];\n        else out += GLYPHS[random()] ;   // 只滚动未锁定位","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"opposite-rails","zh":"反向图带","en":"Opposite scroll rails","alias":["双向图带","反向滚动带","rail"],"cat":"compound","vague":"两行图片，一行往左走，一行往右走","say":"同一份滚动进度给两行图带写反方向的 translateX，速度比 1 : 0.62——速度差就是深度","def":"人眼会不自觉去比对两行的速度，速度差立刻被读成前后两层。实现只写 translateX：一行取负、一行取正，各乘不同系数；内容首尾各补一份做无缝循环。悬停给单张图一点抬升和 ±2° 的倾斜，图就不只是刷过去的背景。","trigger":"time","demo":{"kind":"compound","mode":"rail","hint":"在框里滚动"},"_legacyCode":"const m = (p * span) % span;\nrowA.style.transform = `translateX(${-m}px)`;               /* 向左 */\nrowB.style.transform = `translateX(${m * 0.62 - span}px)`;   /* 向右，慢一档 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"depth-tunnel","zh":"纵深隧道","en":"Scroll depth tunnel","alias":["z 轴画廊","穿越隧道","depth tunnel"],"cat":"compound","vague":"往下滚不是往下看，是往里走","say":"每张图一个 z 值，滚动平移相机 z：scale = d / (d + z − cam)，越近越大，过身即出画","def":"把滚动重新定义成沿 z 轴前进。只动一根轴，冲击力却最强：近处的图放大出画、远处的缩小退后；越过相机的图淡出并从最远处绕回，画廊就成了无限隧道。越远的图同步压暗，纵深更可信。","trigger":"time","demo":{"kind":"compound","mode":"tunnel","hint":"在框里滚动"},"_legacyCode":"const rel = z - cam;                        /* 相机前进 = cam 增大 */\nscale = F / (F + rel);\nopacity = rel < 0 ? 0 : clamp(1.2 - rel / 900, 0, 1);","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"magnetic-button","zh":"磁吸按钮","en":"Magnetic button","alias":["磁性按钮","按钮吸附","magnetic"],"cat":"compound","vague":"鼠标一靠近，按钮就被吸过去","say":"指针进入半径 R 内按 (1−d/R) 衰减拉拽按钮，位移走弹簧插值，离开力场回弹归位","def":"把指针引力场做成一个衰减函数：距离越近拉力越大，按钮被吸向指针；离开力场后弹簧归零。关键是吸附量必须乘衰减系数而不是常量——否则力场边界处会跳变。适合主 CTA 与关闭按钮，一吸一放之间按钮就有了实体感。","trigger":"time","demo":{"kind":"compound","mode":"magnetic","hint":"靠近中间的按钮"},"_legacyCode":"const pull = d < R ? 1 - d / R : 0;      /* 衰减：边界不跳变 */\ntx = dx * .58 * pull;\nx += (tx - x) * .18;                     /* 弹簧跟随 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"tilt-card","zh":"指针倾斜卡","en":"Pointer tilt card","alias":["3D 倾斜","透视卡片","tilt"],"cat":"compound","vague":"卡片跟着鼠标翻转，表面还有一层反光","say":"指针偏移映射 rotateX(−y·14°) / rotateY(x·16°)，0.14 系数平滑，光斑 radial-gradient 跟随指针","def":"把指针在卡面上的位置映射成两个旋转轴的角度，再叠一层跟随指针的高光，平面立刻有了玻璃厚度。旋转量要收在 ±15° 内并做指数平滑——过大会边缘畸变，不平滑就是抖动而不是质感。","trigger":"time","demo":{"kind":"compound","mode":"tilt","hint":"在卡上移动鼠标"},"_legacyCode":"card.style.transform =\n  `perspective(700px) rotateX(${-y * 14}deg) rotateY(${x * 16}deg)`;","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"odometer-counter","zh":"数字滚动计数","en":"Odometer number roll","alias":["数字翻滚","里程表计数","odometer"],"cat":"compound","vague":"数字像里程表一样滚上去","say":"每一位是一条 0–9 竖排字带，translateY 滚到目标行，右→左逐位 delay 55ms，过冲曲线收尾","def":"把每位数字做成一条竖排字带，用 translateY 滚到目标行。精髓在节奏：低位先滚、高位后滚（逐位 delay），落位带一点过冲——数字就有了「咔哒咔哒」的机械感。计数、价格、排行榜数字都用它。","trigger":"time","demo":{"kind":"compound","mode":"odometer","hint":"点按钮抽一个数"},"_legacyCode":"digit.style.transform = `translateY(${-n * 10}%)`;\ndigit.style.transitionDelay = (cols - 1 - i) * 55 + \"ms\";","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"confetti-burst","zh":"五彩纸屑","en":"Confetti burst","alias":["彩带喷发","庆祝粒子","confetti"],"cat":"compound","vague":"点一下，撒出一把会转的彩纸","say":"点击处喷出 26 片刚体：初速随机、每帧 vy += g 重力、绕自身轴旋转，落出容器即回收","def":"庆祝类动效的标准做法：把每片纸屑当一个刚体粒子——横向随机初速、竖直向上喷出后受重力、带着自身旋转落下。要点是颜色从主题色板取（别用彩虹）、片数 20–30（多了廉价）、出界立刻回收 DOM。用于成功、中奖、发布等「值得庆祝」的时刻。","trigger":"time","demo":{"kind":"compound","mode":"confetti","hint":"点一下撒纸屑"},"_legacyCode":"p.vy += .34;  p.x += p.vx;  p.y += p.vy;  p.r += p.vr;\nel.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.r}deg)`;\nif (p.y > H + 30) el.remove();          /* 出界回收 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"smooth-tabs","zh":"滑动标签指示器","en":"Smooth tab indicator","alias":["标签切换","tab indicator"],"cat":"compound","vague":"点页签，下面那条会自己滑过去","say":"指示器读取目标项的 offsetLeft/offsetWidth 平移到位，内容交叉淡入，指示器带轻微过冲","def":"把「选中态」从每个页签上拿掉，交给一条公共指示器：它测量目标项的位置后滑过去。测量在 mount 和 resize 时各做一次——布局变化后不重测，指示器就会停在旧位置。这是 Layout Animation 最小最常用的实例。","trigger":"time","demo":{"kind":"compound","mode":"tabs","hint":"点页签切换"},"_legacyCode":"ind.style.left = item.offsetLeft + \"px\";\nind.style.width = item.offsetWidth + \"px\";   /* resize 时重测 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"coverflow-carousel","zh":"3D 立体轮播","en":"3D coverflow carousel","alias":["封面流","3D 轮播","coverflow"],"cat":"compound","vague":"中间那张最大最正，两边的斜着排开","say":"每张卡按与焦点的索引差变换：translateX 错位 + translateZ 后退 + rotateY 转向，点击侧卡换焦点","def":"Coverflow 的本质是「索引差 → 变换」的纯函数：off = i − focus，横向错位、Z 轴后退、Y 轴转向全部由 off 推出，焦点切换只改一个数字。透明度和层叠顺序随 |off| 衰减，远卡自然隐去。音乐专辑墙、图片轮播都从它来。","trigger":"time","demo":{"kind":"compound","mode":"coverflow","hint":"点两侧的卡换焦点"},"_legacyCode":"cards.forEach((c, i) => {\n  const off = i - focus;\n  c.style.transform = `translateX(${off * 46}%) translateZ(${-Math.abs(off) * 130}px) rotateY(${off * -32}deg)`;\n});","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"cylinder-reel","zh":"圆柱卡带","en":"Cylinder photo reel","alias":["圆筒轮播","卷筒旋转","cylinder"],"cat":"compound","vague":"一列照片卷成一个圆筒，拖着它转","say":"每片照片绕中心按 i·36° 环形排布再 translateZ 出半径，拖拽改 rotY，拖速同时驱动标题字距","def":"把一列图卷成圆筒：每片卡片 rotateY(i×36°) 后沿自身朝向推出半径 R（R = 片宽 ÷ 2tan(π/N)），旋转整筒即轮播。聪明的做法是一个速度同源两处响应——拖得越快，标题的字距被「吹」得越开，页面两处同时有了呼吸。松手惯性衰减、字距弹回。","trigger":"time","demo":{"kind":"compound","mode":"cylinder","hint":"左右拖动圆筒"},"_legacyCode":"reel.style.transform = `rotateY(${rot}deg)`;\ncard.style.transform = `rotateY(${i * 36}deg) translateZ(${R}px)`;\ntitle.style.letterSpacing = 3 + Math.min(1, Math.abs(vel) * .35) * 14 + \"px\";","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"ring-gallery","zh":"环形画廊","en":"3D ring gallery","alias":["环廊","圆环画廊","ring"],"cat":"compound","vague":"照片围成一圈，转到面前那张才亮","say":"相机在环外：8 张照片按 i·45° 围成圆环，拖拽旋转环体，点击某张即把最短路径转到正面并提亮","def":"相机在环外的画廊：每张照片 rotateY(i×45°) translateZ(R) 围成一圈，只有正对相机的一张是全亮全尺寸，其余按角度差衰减亮度与透明度。点击側卡时按最短路径把目标角转到 0°——不写任何补间，只改一个焦点变量。","trigger":"time","demo":{"kind":"compound","mode":"ring3d","hint":"拖动旋转 · 点击对焦"},"_legacyCode":"const want = ((-i * 45 % 360) + 360) % 360;\nconst cur = ((rot % 360) + 360) % 360;\nlet d = want - cur; if (d > 180) d -= 360; if (d < -180) d += 360;\nrotGoal = rot + d;                       /* 最短路径 */","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"page-curl","zh":"翻页卷曲转场","en":"Page curl transition","alias":["翻页","卷页","page turn"],"cat":"compound","vague":"像翻书一样把下一页翻出来","say":"拖动纸张控制翻页进度与卷曲，松手按速度完成或回弹；支持点击、滚轮和方向键连续翻书","def":"把纸张细分成网格，随翻页进度弯曲并扭转，正反面使用不同图像，书脊、纸张厚度和投影保持连续。拖动位置决定卷曲形态，松手速度与弹簧决定完成或回弹；可连续翻页，适合相册、故事和杂志。","trigger":"time","demo":{"kind":"compound","mode":"pagecurl","hint":"拖拽或点击左右翻页 · 滚轮连续翻书"},"_legacyCode":"// WebGL 网格翻书：需实现 deformPaper 与 renderBook\nconst progress = clamp((startX - pointerX) / pageWidth, 0, 1);\nfor (const vertex of paper.vertices) {\n  deformPaper(vertex, { progress, grabY, curl, twist });\n}\n// 松手后按速度决定目标，再用弹簧接续；不是平面 rotateY\nrenderBook({ frontTexture, backTexture, shadowMap });","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"dynamic-island","zh":"灵动岛展开转场","en":"Dynamic Island transition","alias":["灵动岛","Live Activity","实时活动"],"cat":"compound","vague":"通知缩在胶囊里，点一下再展开成控制面板","say":"同一块胶囊容器从提醒态平滑扩展为实时活动，内容随状态接续出现","def":"用一个持续存在的胶囊承接通知和实时活动：收起时只露出关键信息，展开后在同一位置扩展出状态、进度与操作。关键是形状和内容都沿同一容器连续变化，不是弹出另一张卡片。","trigger":"time","demo":{"kind":"compound","mode":"island","hint":"点胶囊展开实时活动，再收起"},"_legacyCode":".island { transition: width .42s cubic-bezier(.2,.8,.2,1), height .42s; }\n.island.is-open { width: 236px; height: 112px; }","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"scratch-reveal","zh":"刮开显影","en":"Scratch to reveal","alias":["刮刮卡","擦除揭示","scratch card"],"cat":"compound","vague":"用手指擦开表层，下面的图慢慢露出来","say":"Canvas 覆层随指针擦除，刮开面积过半后自动清除剩余表层","def":"在答案或图片上盖一层可擦除的表面，用户拖动时逐段露出底图。擦除面积达到阈值后清掉剩余覆盖层，让结果完整显现；触屏与鼠标使用同一套手势。","trigger":"time","demo":{"kind":"compound","mode":"scratch","hint":"拖动手指或鼠标，刮开表层"},"_legacyCode":"ctx.globalCompositeOperation = \"destination-out\";\nctx.lineWidth = 28; ctx.lineCap = \"round\";\nctx.stroke();","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"morphing-dot-sphere","zh":"粒子球体变形","en":"Morphing dot sphere","alias":["点阵球","粒子球","3D morphing sphere"],"cat":"compound","vague":"一颗点组成的球，拖动能转，点一下还能变形","say":"球面采样点投影到画布，拖动改变视角，点击在球体、心形、圆环、立方体、螺旋、星形与星系七种点阵间平滑插值","def":"将粒子按球面分布并用透视投影绘制；拖动旋转球体，点击依次变形成心形、圆环、立方体、螺旋、星形与星系，也可直接选择形状。变形中再次点击会从当前位置接续，不会跳回起点。它适合作为视觉主角或品牌过场，点数和帧率应控制在设备可承受范围内。","trigger":"time","demo":{"kind":"compound","mode":"dotsphere","hint":"拖动旋转 · 点击点阵切换形状"},"_legacyCode":"// 保持粒子索引不变，从当前坐标接续到新形状\npoints.forEach((p, i) => {\n  p.x = lerp(p.x, shapes[selected][i].x, alpha);\n  p.y = lerp(p.y, shapes[selected][i].y, alpha);\n  p.z = lerp(p.z, shapes[selected][i].z, alpha);\n});","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"path-weave","zh":"双路牵丝织形","en":"Dual-path ribbon weave","alias":["双路径编织","双线牵丝","ribbon weave"],"cat":"compound","vague":"两条线从两边长出来，在中间交织成一个形状","say":"两条路径分别描绘并在交叉处错层，光点沿路径移动，最终共同组成图形","def":"两条独立路径按各自进度描绘，在交叉处用遮挡与层级表现“上下穿过”，让线条编织成一个整体。它适合标志、连接关系和片尾汇聚；如果只让两条线同时亮起，就只是交叉线，不是编织。","trigger":"time","demo":{"kind":"compound","mode":"pathweave","hint":"看双路交织 · 点按钮重播","readout":false},"_legacyCode":"path.style.strokeDasharray = pathLength;\npath.style.strokeDashoffset = pathLength * (1 - progress);\n// 交叉处留出底层间隙，再绘制上层路径","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}},{"id":"target-acquisition","zh":"目标扫描与锁定","en":"Target scan & acquire","alias":["准星锁定","扫描捕获","target lock"],"cat":"compound","vague":"扫过一遍，找到目标后把它框起来","say":"扫描线扫过视野，发现目标后准星对齐，并保持清楚的锁定状态","def":"把“扫描 → 命中 → 锁定”做成一段有结果的反馈：扫描线经过视野，目标被框选，随后出现稳定的锁定标记。可用于地图定位、媒体库搜索、图表数据点提示、AR 指引等需要“找到并确认某个对象”的界面；普通页面装饰不需要这套雷达效果。","trigger":"time","demo":{"kind":"compound","mode":"scanlock","hint":"点“重新扫描”，看它如何找到并标记目标"},"_legacyCode":"state = \"scanning\";\nif (scanHits(target)) state = \"locked\";\nshowReticle(target); // 锁定后保持可见","platforms":{"css":"unavailable","waapi":"unavailable","gsap":"unavailable","framer":"unavailable","swift":"unavailable","compose":"unavailable","tailwind":"unavailable","film-mo":"unavailable","film-rk":"unavailable","json":"unavailable","film-camera":"unavailable"}}]},
  grammar: {"version":1,"note":"影视语法与转场表。grammars 是人工整理的语法条目；transitions 从 transitions.js 抽取；curveGuidance 是 MO 的选型注释。","grammars":[{"id":"y1-kurzgesagt","zh":"Kurzgesagt 扁平科普","en":"Kurzgesagt flat explainer","scope":"讲尺度、讲「里面是什么」、讲机制系统；娓娓道来的科普腔","core":"把抽象概念画成一个具体的物，放进能无限缩放的发光世界，相机在尺度之间穿行；环境轻轻动，主体在口播节点上变化","shot":"硬切镜头 7–9s，视觉单元每 4.6–6.7s 换一次","curves":["k75","easyEase"],"transitions":["lensReveal","matchCut"],"demo":"demos/y1_kurzgesagt","source":{"where":"huashu-art-motion/references/09-视频动画语法.md · y1","url":"https://github.com/alchaincyf/huashu-art-motion"},"cat":"film-grammar","vague":"讲尺度、讲「里面是什么」、讲机制系统；娓娓道来的科普腔","say":"把抽象概念画成一个具体的物，放进能无限缩放的发光世界，相机在尺度之间穿行；环境轻轻动，主体在口播节点上变化","def":"把抽象概念画成一个具体的物，放进能无限缩放的发光世界，相机在尺度之间穿行；环境轻轻动，主体在口播节点上变化 镜头时长：硬切镜头 7–9s，视觉单元每 4.6–6.7s 换一次。","trigger":"time"},{"id":"y2-vox","zh":"Vox 拼贴","en":"Vox collage","scope":"有真实档案、新闻、截图、人物的论证；「看这一句」「注意这个数字」","core":"论证摆在一张有真实材料的桌面上，相机像调查记者的眼睛在桌上移动，线和笔一顿一顿画上去","shot":"慢档中位 3.3s（一张卡 3–7s）；快档 1.4–1.8s","curves":["sineInOut","longTail","steps"],"transitions":["cut","same","slidePush"],"demo":"demos/y2_vox","source":{"where":"huashu-art-motion/references/09-视频动画语法.md · y2","url":"https://github.com/alchaincyf/huashu-art-motion"},"cat":"film-grammar","vague":"有真实档案、新闻、截图、人物的论证；「看这一句」「注意这个数字」","say":"论证摆在一张有真实材料的桌面上，相机像调查记者的眼睛在桌上移动，线和笔一顿一顿画上去","def":"论证摆在一张有真实材料的桌面上，相机像调查记者的眼睛在桌上移动，线和笔一顿一顿画上去 镜头时长：慢档中位 3.3s（一张卡 3–7s）；快档 1.4–1.8s。","trigger":"time"},{"id":"y3-whiteboard","zh":"白板手绘（RSA）","en":"Whiteboard (RSA)","scope":"推理链、步骤、「为什么」；边讲边推导","core":"说一句写一句，相机跟着论证在一张大白板上移动，最后拉远看全图","shot":"每块停留中位 6.6s","curves":["sineInOut"],"transitions":["same"],"demo":"demos/y3_whiteboard","source":{"where":"huashu-art-motion/references/09-视频动画语法.md · y3","url":"https://github.com/alchaincyf/huashu-art-motion"},"cat":"film-grammar","vague":"推理链、步骤、「为什么」；边讲边推导","say":"说一句写一句，相机跟着论证在一张大白板上移动，最后拉远看全图","def":"说一句写一句，相机跟着论证在一张大白板上移动，最后拉远看全图 镜头时长：每块停留中位 6.6s。","trigger":"time"},{"id":"y4-storytime","zh":"故事型简笔角色","en":"Storytime stick figures","scope":"第一人称讲经历、翻车、笑点；观众要的是「这个人」","core":"口播是主角，画面是给口播配的表情包：姿势 0.1s 快切后定住，笑点靠切到反应特写并在那一下闭嘴","shot":"ASL 2.43s（中位 1.87s）","curves":["expoOut","settle"],"transitions":["cut","smash","whip"],"demo":"demos/y4_storytime","source":{"where":"huashu-art-motion/references/09-视频动画语法.md · y4","url":"https://github.com/alchaincyf/huashu-art-motion"},"cat":"film-grammar","vague":"第一人称讲经历、翻车、笑点；观众要的是「这个人」","say":"口播是主角，画面是给口播配的表情包：姿势 0.1s 快切后定住，笑点靠切到反应特写并在那一下闭嘴","def":"口播是主角，画面是给口播配的表情包：姿势 0.1s 快切后定住，笑点靠切到反应特写并在那一下闭嘴 镜头时长：ASL 2.43s（中位 1.87s）。","trigger":"time"},{"id":"y5-kinetic-type","zh":"动态文字","en":"Kinetic typography","scope":"清单、「X 个阶段」、金句、数字开场、章节卡","core":"字就是演员：关键词踩重音砸进来，主词大到一眼读完，画面永远只有一个焦点","shot":"一小节一个镜头（120BPM 约 2s）","curves":["expoOut","springHz","expoIn"],"transitions":["fillZoom","bands","push"],"demo":"demos/y5_kinetic_type","source":{"where":"huashu-art-motion/references/09-视频动画语法.md · y5","url":"https://github.com/alchaincyf/huashu-art-motion"},"cat":"film-grammar","vague":"清单、「X 个阶段」、金句、数字开场、章节卡","say":"字就是演员：关键词踩重音砸进来，主词大到一眼读完，画面永远只有一个焦点","def":"字就是演员：关键词踩重音砸进来，主词大到一眼读完，画面永远只有一个焦点 镜头时长：一小节一个镜头（120BPM 约 2s）。","trigger":"time"},{"id":"t1-3b1b","zh":"3Blue1Brown","en":"3Blue1Brown","scope":"讲一个机制怎么一步步变成另一个东西：网络、矩阵、梯度、概率","core":"黑底上只放正在讲的那一个东西，用 Transform 把上一个概念直接变成下一个，颜色＝概念名，几乎不切","shot":"单个动画 1–3s＋停 1s；一个概念 8–20s","curves":["smooth"],"transitions":["zoomThrough","fadeShift"],"demo":"demos/t1_3b1b","source":{"where":"huashu-art-motion/references/09-视频动画语法.md · t1","url":"https://github.com/alchaincyf/huashu-art-motion"},"cat":"film-grammar","vague":"讲一个机制怎么一步步变成另一个东西：网络、矩阵、梯度、概率","say":"黑底上只放正在讲的那一个东西，用 Transform 把上一个概念直接变成下一个，颜色＝概念名，几乎不切","def":"黑底上只放正在讲的那一个东西，用 Transform 把上一个概念直接变成下一个，颜色＝概念名，几乎不切 镜头时长：单个动画 1–3s＋停 1s；一个概念 8–20s。","trigger":"time"},{"id":"t2-keynote-ui","zh":"发布会界面","en":"Keynote UI","scope":"产品/功能发布、版本更新、教程步骤、参数公布","core":"一屏一件事，产品截图或实物当主角并推近，名词和数字在口播说到时落定；光斑底、玻璃卡是可选包装，慎用","shot":"演讲一屏 5–8s；产品快剪 1.5–3s","curves":["spring","appleOut"],"transitions":["blurPush","expandRect"],"demo":"demos/t2_keynote_ui","source":{"where":"huashu-art-motion/references/09-视频动画语法.md · t2","url":"https://github.com/alchaincyf/huashu-art-motion"},"cat":"film-grammar","vague":"产品/功能发布、版本更新、教程步骤、参数公布","say":"一屏一件事，产品截图或实物当主角并推近，名词和数字在口播说到时落定；光斑底、玻璃卡是可选包装，慎用","def":"一屏一件事，产品截图或实物当主角并推近，名词和数字在口播说到时落定；光斑底、玻璃卡是可选包装，慎用 镜头时长：演讲一屏 5–8s；产品快剪 1.5–3s。","trigger":"time"},{"id":"t3-finance-chart","zh":"财经图表","en":"Finance charts","scope":"营收、股价、份额、拐点；观众会截图较真的数字","core":"先搭坐标系，再让数据长出来，最后只标一件事；数值永远诚实，动画只决定怎么出现","shot":"一张图 2.5–6s","curves":["quintOut","smooth"],"transitions":["slidePush","zoomThrough"],"demo":"demos/t3_finance_chart","source":{"where":"huashu-art-motion/references/09-视频动画语法.md · t3","url":"https://github.com/alchaincyf/huashu-art-motion"},"cat":"film-grammar","vague":"营收、股价、份额、拐点；观众会截图较真的数字","say":"先搭坐标系，再让数据长出来，最后只标一件事；数值永远诚实，动画只决定怎么出现","def":"先搭坐标系，再让数据长出来，最后只标一件事；数值永远诚实，动画只决定怎么出现 镜头时长：一张图 2.5–6s。","trigger":"time"}],"transitions":[{"id":"crossfade","source":{"where":"film_ai_three/代码工程/transitions.js · crossfade","url":null}},{"id":"cut","source":{"where":"film_ai_three/代码工程/transitions.js · cut","url":null}},{"id":"tiles","zh":"① 洞穴→埃及：新画面拆成大小不一的石块，从左向右（带随机）拼进来，落位时从略大略偏处「砌」进去","source":{"where":"film_ai_three/代码工程/transitions.js · tiles","url":null}},{"id":"cube","zh":"② 埃及→希腊：立方体绕竖轴转面（旧面向左转走，新面从右转入），面上有明暗","source":{"where":"film_ai_three/代码工程/transitions.js · cube","url":null}},{"id":"mosaic","zh":"③ 希腊→罗马：马赛克小砖翻面——从猫的位置向外扩散，翻面瞬间露出深色砖背","source":{"where":"film_ai_three/代码工程/transitions.js · mosaic","url":null}},{"id":"pageTurn","zh":"④ 罗马→哥特：羊皮纸翻页，卷边从右向左扫过，背面是带淡淡旧画透印的羊皮纸","source":{"where":"film_ai_three/代码工程/transitions.js · pageTurn","url":null}},{"id":"godRays","zh":"⑤ 哥特→文艺复兴：窗口迸出金色神光，光芒里旧画渐隐、新画浮现","source":{"where":"film_ai_three/代码工程/transitions.js · godRays","url":null}},{"id":"wave","zh":"⑥ 文艺复兴→浮世绘：神奈川冲浪里的巨浪从左向右横扫，浪头白沫爪＋飞溅浪花，浪后是新画面","source":{"where":"film_ai_three/代码工程/transitions.js · wave","url":null}},{"id":"dabs","zh":"⑦ 浮世绘→印象派：一笔笔短促的彩色笔触把新画面「画」上去","source":{"where":"film_ai_three/代码工程/transitions.js · dabs","url":null}},{"id":"swirl","zh":"⑧ 印象派→梵高：星空漩涡——以窗户为中心的旋涡扭曲，新画面带着旋转卷进来、最后摆正","source":{"where":"film_ai_three/代码工程/transitions.js · swirl","url":null}},{"id":"organic","zh":"⑨ 梵高→新艺术：从人物头部长出一块带金边的有机形状（慕夏式曲线轮廓），向外生长吞没画面","source":{"where":"film_ai_three/代码工程/transitions.js · organic","url":null}},{"id":"shards","zh":"⑩ 新艺术→立体主义：画面碎成几何碎片，碎片错位旋转，新画面的碎片拼合落位","source":{"where":"film_ai_three/代码工程/transitions.js · shards","url":null}},{"id":"bauhaus","zh":"⑪ 立体→包豪斯：蓝方块＋红圆＋黄三角的构成旋转放大，中心的米白圆里是新画面，最后构成扫出画面","source":{"where":"film_ai_three/代码工程/transitions.js · bauhaus","url":null}},{"id":"zigzag","zh":"⑫ 包豪斯→波普：黄色闪电劈开＋本戴网点化，旧画面变网点、新画面从网点里显影","source":{"where":"film_ai_three/代码工程/transitions.js · zigzag","url":null}},{"id":"pixelate","zh":"⑬ 波普→8-bit：旧画面像素块越来越大，切到新画面后像素块由大变小直至清晰","source":{"where":"film_ai_three/代码工程/transitions.js · pixelate","url":null}},{"id":"wireframe","zh":"⑭ 8-bit→光追：黑底绿色霓虹线框（新画面的边缘＋透视网格地面），扫描线自上而下把渲染结果「算」出来","source":{"where":"film_ai_three/代码工程/transitions.js · wireframe","url":null}},{"id":"iris","zh":"⑮ 光追→2026：三色同心环从杯子(992,601)线性扩张，外径约 143px/帧，每环厚 137px，最内环里是新画面（分镜表 T15）","source":{"where":"film_ai_three/代码工程/transitions.js · iris","url":null}},{"id":"goldLeaf","zh":"===================== 迁移测试 A–D 收进来的转场（名字同 references/风格配方 里的配方卡） ===================== 每个都长在「进入段」风格的签名语言上：先找新风格里会「出现/点亮/扫过」的物理过程，旧画先被它污染，新画从它的形状里露出来。 ---- A：水墨 / 克里姆特 / 蒙克 / 敦煌 / 草间 ---- 水墨 → 克里姆特：金箔一片片贴上来。从少女头部按螺旋次序落下方形金箔（带螺旋/眼形/同心圆压纹）， 贴实后金色褪去露出新画面。q<0.5 贴金箔（从 1.3 倍、带旋转落位），0.5..1 金箔变透明露出 B。","source":{"where":"film_ai_three/代码工程/transitions.js · goldLeaf","url":null}},{"id":"screamWarp","zh":"克里姆特 → 蒙克：《呐喊》的血色天空从上往下「流」过画面。旧画按行正弦扭曲、幅度越来越大； 波浪形前沿以上是新画面（扭曲幅度由大变小），前沿上压 4 道黄橙红色带。","source":{"where":"film_ai_three/代码工程/transitions.js · screamWarp","url":null}},{"id":"apsara","zh":"蒙克 → 敦煌：飞天的飘带从右往左扫过，带后是壁画；前沿处旧画剥落成碎片掉下去。","source":{"where":"film_ai_three/代码工程/transitions.js · apsara","url":null}},{"id":"dotBloom","zh":"敦煌 → 草间：波点从猫的位置一圈圈长出来，点里是新画面；点胀到彼此相接就整幅换完。","source":{"where":"film_ai_three/代码工程/transitions.js · dotBloom","url":null}},{"id":"ripple","zh":"---- C：Kirby / 莫奈 / 修拉 / 马蒂斯 / 哈林 ---- ① Kirby → 莫奈：旧画面「落进水里」——逐行横向正弦错位（水面倒影的抖动）越来越强； 新画面从杯子位置以「横向短笔触」一圈圈荡开（涟漪由笔触组成），亮色水光短横线闪烁。","source":{"where":"film_ai_three/代码工程/transitions.js · ripple","url":null}},{"id":"pointill","zh":"② 莫奈 → 修拉：画面「结晶」成一样大的圆点——先旧画面长出点（点长大、底下淡成纸色）， 点按对角线波次逐个换成新画面的颜色，最后新画面在点下面显影、点收回去。","source":{"where":"film_ai_three/代码工程/transitions.js · pointill","url":null}},{"id":"cutouts","zh":"③ 修拉 → 马蒂斯：一大张刷过水粉的钴蓝纸（剪刀边）从右往左扫过，纸上钉着白海藻、黄星、粉纸片（带投影）； 纸经过的地方，后面换成了新画面。","source":{"where":"film_ai_three/代码工程/transitions.js · cutouts","url":null}},{"id":"radiant","zh":"④ 马蒂斯 → 哈林：一个粗黑轮廓的跳舞小人（双臂 V 字）从杯子处放大，身体里面是新画面， 周围一圈哈林式放射动作线；小人越长越大直到身体铺满整个画面。","source":{"where":"film_ai_three/代码工程/transitions.js · radiant","url":null}},{"id":"irisFilm","zh":"---- D：伦勃朗 / 橡皮管 / 皮影 / 新海诚 / 蓝色时期 ---- 伦勃朗 → 橡皮管卡通：旧画先褪成棕褐老胶片（闪烁＋划痕），黑色光圈收到少女杯口，再从同一点「弹」开（outBack 过冲）","source":{"where":"film_ai_three/代码工程/transitions.js · irisFilm","url":null}},{"id":"lampGlow","zh":"橡皮管 → 皮影：旧片像灯灭一样压成暗褐剪影；幕后的油灯从中心点亮，暖光圈（边缘带灯焰抖动）向外推开，新画面在光里出现","source":{"where":"film_ai_three/代码工程/transitions.js · lampGlow","url":null}},{"id":"flareSweep","zh":"皮影 → 新海诚：一道斜向的强光从左扫到右（漏光），光带身后是新画面；带横向拉丝、彩色光斑和飘起的光粒","source":{"where":"film_ai_three/代码工程/transitions.js · flareSweep","url":null}},{"id":"blueBrush","zh":"新海诚 → 蓝色时期：先把旧画的颜色「抽走」只剩蓝（color 混合），再由 6 道宽大的干笔从左到右刷过，笔下就是新画；笔头带鬃毛拖痕","source":{"where":"film_ai_three/代码工程/transitions.js · blueBrush","url":null}},{"id":"inkBloom","zh":"进入水墨：旧画先被「洗」成宣纸（去色、提亮、减对比），几团墨点从落笔处先后洇开，边缘带一圈墨晕，新画在墨里出现","source":{"where":"film_ai_three/代码工程/transitions.js · inkBloom","url":null}},{"id":"redWedge","zh":"进入构成主义：李西茨基「红楔打白圈」——一枚红楔从左下斜刺过画面，楔尖后面是新画面；三根黑排版条跟着楔子冲进来","source":{"where":"film_ai_three/代码工程/transitions.js · redWedge","url":null}},{"id":"comicPanels","zh":"进入 Kirby 漫画：新画面按漫画分格一格格「砸」进来（从 1.18 倍落位、黑格线），没换到的旧画面先被盖上一层本戴网点","source":{"where":"film_ai_three/代码工程/transitions.js · comicPanels","url":null}},{"id":"chiaroscuro","zh":"进入伦勃朗：旧画沉进暗褐（暗角从四周合拢），然后一道从窗口斜下来的光柱把新画面照出来，最后暗部也慢慢显影","source":{"where":"film_ai_three/代码工程/transitions.js · chiaroscuro","url":null}},{"id":"lensReveal","zh":"【Kurzgesagt】lensReveal 钻进镜头：A 里相机正指数推进某个圆（眼睛/镜头），B 只露在这个圆里，圆随推进长大到盖满屏，圆边一圈光环。 o.lens(t) → {x, y, r} 屏幕上的圆（由上一镜的相机算，必须和 A 的推进同步）；o.ring 光环色。圆要盖满屏：推进倍数 ≥ CAM.coverZoom(r)。","source":{"where":"film_ai_three/代码工程/transitions.js · lensReveal","url":null}},{"id":"matchCut","zh":"【Kurzgesagt】matchCut 填满再拉出：A 推进到某个色块满屏，B 从同色的东西里拉出；只在 o.at（默认中点）±o.width/2 内交叉溶解（±3 帧），两边颜色本来一样，剪点看不见。","source":{"where":"film_ai_three/代码工程/transitions.js · matchCut","url":null}},{"id":"whip","zh":"【storytime】whip 甩镜：旧画面加速甩出、新画面减速甩入，中段整屏横向运动模糊（采样 ≤8px 一张，少了读成残影）。o.dir=1 往左甩","source":{"where":"film_ai_three/代码工程/transitions.js · whip","url":null}},{"id":"smash","zh":"【storytime】smash 砸镜：第一帧就是新画面，带 1.22 倍放大从猛到停（弹簧，夹在 ≥1 防黑边），首两帧白闪。反应特写用","source":{"where":"film_ai_three/代码工程/transitions.js · smash","url":null}},{"id":"fillZoom","zh":"【动态文字】fillZoom 冲进色块：镜头冲进旧画面里某个形（o.cx,o.cy；形的颜色 o.fill = 新画面底色），冲满屏后新画面从 1.25 落回 1。 揭开点 = o.k（默认 .55）：卡拍时段起点 = 小节线 − k×dur（MO.onBeat）。o.maxZoom 冲进倍数（指数缩放本身就是加速，别再套 expoIn）","source":{"where":"film_ai_three/代码工程/transitions.js · fillZoom","url":null}},{"id":"bands","zh":"【动态文字】bands 色带擦除：o.colors 几条斜切色带接力扫过（间隔 o.gap），最后一条后面是新画面。揭开点 ≈ .6","source":{"where":"film_ai_three/代码工程/transitions.js · bands","url":null}},{"id":"push","zh":"【动态文字】push 推页：新旧一起平移（expoInOut），像镜头在长画布上滑到下一块。o.dir: 'left'（默认）| 'up'。到 90% 位移在 p≈.58","source":{"where":"film_ai_three/代码工程/transitions.js · push","url":null}},{"id":"zoomThrough","zh":"【3b1b / 财经】zoomThrough 镜头穿越：相机推向 (cx,cy)，新画面从该物体「里面」长出来。 o: {cx, cy, zoom, r0=物体半径（圆形开口；0=不裁）, live, bg, focus:[x,y] 新画面主体位置, bScale0, ease} live:true = 旧镜头自己在转场里继续推相机（矢量重画，线条不糊；推荐）；否则把 A 当位图放大（10× 以上会糊）。 有 r0 时 zoom 要 ≥ CAM.coverZoom(r0, cx, cy)（≈1100/r0），否则开口到结束都盖不满屏，最后一帧会跳。","source":{"where":"film_ai_three/代码工程/transitions.js · zoomThrough","url":null}},{"id":"blurPush","zh":"【发布会】blurPush 模糊推进：旧画面后退（0.92）＋模糊＋变暗，新画面从 1.06 带模糊落到 1.0 清晰；底下垫一张放大重模糊的旧画面防黑边","source":{"where":"film_ai_three/代码工程/transitions.js · blurPush","url":null}},{"id":"expandRect","zh":"【发布会】expandRect 卡片展开成全屏（共享元素）：o.rect={x,y,w,h} 是卡片在上一镜末帧的屏幕矩形、o.r 圆角；弹簧展开，里面装新画面，旧画面后退变暗。 新画面第一帧就不透明地装进卡片（卡内硬切被展开运动盖住）：卡片半透明时任何溶接都会看到新旧两层字叠在一起。","source":{"where":"film_ai_three/代码工程/transitions.js · expandRect","url":null}},{"id":"slidePush","zh":"【财经】slidePush 面板横推：新面板从右推入、旧面板向左推出（bezier .7,0,.2,1），一道品牌色竖条 o.bar 领路","source":{"where":"film_ai_three/代码工程/transitions.js · slidePush","url":null}},{"id":"fadeShift","zh":"【3b1b】fadeShift 淡出上移 / 淡入上移（manim FadeOut(shift=UP) + FadeIn(shift=UP)），o.shift 位移像素","source":{"where":"film_ai_three/代码工程/transitions.js · fadeShift","url":null}},{"id":"same","zh":"同镜推进（相机运动即转场，画面内容不变）","source":{"where":"huashu-art-motion/references/09-视频动画语法.md · y2/y3","url":"https://github.com/alchaincyf/huashu-art-motion"}}],"curveGuidance":{"note":"动效时间库 MO：缓动、弹簧、步进、错开、拍号。全部是「时间 → 数值」的纯函数，不读时钟，确定性。 来源：YouTube 解说动画语法 8 支示范片（references/09-视频动画语法.md）。约定：p 是 0..1 的进度，t/lt 是秒。 选缓动的一句话：讲解（3b1b/白板）用 smooth/sineInOut 两端都停稳；发布会用 appleOut/弹簧；动态文字用 expoOut＋弹簧； 拼贴（Vox）相机用 sineInOut 或长尾 longTail，纸片按 12fps 步进；Kurzgesagt 动作用 k75，循环用 easyEase。 (() => { const { clamp, lerp } = U; const MO = window.MO = {}; 画布尺寸 U.setStage / U.onStage 在 util.js（比本文件先加载的 paint/brush/render/post 也要登记）。","source":{"where":"film_ai_three/代码工程/lib/motion.js · 文件头注释","url":null}}}
};
const __m = {};
__m["curves"] = (function () {
/* ============================================================
   motion-core · curves.js
   曲线纯函数实现。所有曲线都是 f(t) → v，t 被 clamp 到 [0,1]，
   输出允许超出 [0,1]（过冲）。无状态、无随机、无时钟。

   实现来源（逐点对齐，误差 < 1e-6）：
     - film_ai_three/代码工程/lib/motion.js  （MO）
     - motion-lexicon/assets/ease.js          （EASE / bezierFn）
     - vibe-reel/engine/render_api.js         （E 表）
   ============================================================ */

const clamp01 = (t) => (t < 0 ? 0 : t > 1 ? 1 : t);

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

const IMPLS = {
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
function buildCurve(def) {
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
const BEZIER = {
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

const SPRING = {
  smooth: { duration: 0.5, bounce: 0 },
  snappy: { duration: 0.5, bounce: 0.15 },
  bouncy: { duration: 0.5, bounce: 0.3 }
};

return { clamp01, IMPLS, buildCurve, BEZIER, SPRING };
})();
__m["registry"] = (function (__d0) {
const { buildCurve } = __d0;
/* ============================================================
   motion-core · registry.js
   曲线注册表：byName / byFamily / platforms / alias。
   纯逻辑，不碰 I/O——浏览器、Node、Worker 都能用。
   ============================================================ */


class CurveNotFoundError extends Error {
  constructor(name) {
    super(`未知曲线：${name}`);
    this.name = 'CurveNotFoundError';
    this.curve = name;
  }
}

function createRegistry(vocab) {
  if (!vocab || !Array.isArray(vocab.curves)) {
    throw new TypeError('createRegistry 需要 { version, curves: [] } 结构的词表');
  }

  const byName = new Map();
  const aliasToName = new Map();
  const conflicts = [];

  for (const curve of vocab.curves) {
    if (byName.has(curve.name)) {
      conflicts.push({ name: curve.name, reason: 'duplicate-name' });
      continue;
    }
    let fn;
    try {
      fn = buildCurve(curve.def);
    } catch (err) {
      conflicts.push({ name: curve.name, reason: 'bad-def', detail: String(err.message || err) });
      continue;
    }
    const entry = Object.freeze({ ...curve, fn });
    byName.set(curve.name, entry);

    for (const a of curve.aliases || []) {
      if (aliasToName.has(a) && aliasToName.get(a) !== curve.name) {
        conflicts.push({ name: a, reason: 'alias-conflict', target: curve.name, existing: aliasToName.get(a) });
        continue;
      }
      aliasToName.set(a, curve.name);
    }
  }

  const canonical = (name) => (byName.has(name) ? name : (aliasToName.get(name) || null));

  const resolve = (name) => {
    const c = canonical(name);
    return c ? byName.get(c) : null;
  };

  const fn = (name) => {
    const entry = resolve(name);
    if (!entry) throw new CurveNotFoundError(name);
    return entry.fn;
  };

  const platforms = (name) => {
    const entry = resolve(name);
    return entry ? entry.platforms : null;
  };

  const families = () => {
    const set = new Set();
    for (const c of byName.values()) set.add(c.family);
    return [...set];
  };

  const byFamily = (family) => {
    const out = [];
    for (const c of byName.values()) if (c.family === family) out.push(c);
    return out;
  };

  const search = (query) => {
    const q = String(query || '').trim().toLowerCase();
    if (!q) return [];
    const out = [];
    for (const c of byName.values()) {
      const hay = [
        c.name,
        c.label?.zh || '',
        c.label?.en || '',
        ...(c.aliases || []),
        c.note || ''
      ].join(' ').toLowerCase();
      if (hay.includes(q)) out.push(c);
    }
    return out;
  };

  return Object.freeze({
    version: vocab.version,
    /** 词表里声明的全部导出目标名 */
    platformNames: vocab.platforms || [],
    conflicts,
    /** 全部曲线条目（含 fn） */
    curves: () => [...byName.values()],
    names: () => [...byName.keys()],
    /** 主名 → 条目；也接受别名 */
    byName: resolve,
    /** 主名 → 函数；也接受别名 */
    fn,
    /** 主名 → platforms 声明 */
    platforms,
    /** 主名 → 规范名（若传入的是别名） */
    canonical,
    /** 主名 → 别名列表 */
    aliases: (name) => {
      const entry = resolve(name);
      return entry ? (entry.aliases || []) : [];
    },
    has: (name) => !!resolve(name),
    families,
    byFamily,
    search,
    /** 把名字解析成 { name, entry }；未知则抛 CurveNotFoundError */
    require: (name) => {
      const entry = resolve(name);
      if (!entry) throw new CurveNotFoundError(name);
      return { name: entry.name, entry };
    }
  });
}

return { CurveNotFoundError, createRegistry };
})(__m["curves"]);
__m["spec"] = (function () {
/* ============================================================
   motion-core · spec.js
   MotionSpec 归一化 + 校验。校验规则与 spec/motion-spec.schema.json 对齐，
   但用手写实现，避免引入 JSON Schema 依赖。
   ============================================================ */

const PROPS = Object.freeze([
  'translateX', 'translateY', 'translateZ', 'scale', 'scaleX', 'scaleY',
  'rotate', 'skewX', 'skewY', 'opacity', 'clip-path', 'filter',
  'box-shadow', 'text-shadow', 'color'
]);

const TARGETS = Object.freeze(['self', 'child', 'all', 'camera']);
const UNITS = Object.freeze(['px', '%', 'deg', 'none']);
const DIRECTIONS = Object.freeze(['normal', 'reverse', 'alternate', 'alternate-reverse']);
const FILLS = Object.freeze(['none', 'forwards', 'backwards', 'both']);
const STAGGER_FROM = Object.freeze(['start', 'end', 'center']);
const CAMERA_KINDS = Object.freeze(['glide', 'pan', 'push', 'slam', 'shake', 'cut']);
const RM_STRATEGIES = Object.freeze(['fade', 'instant', 'none']);
const ID_RE = /^[a-z0-9][a-z0-9-]*$/;

class SpecError extends Error {
  constructor(errors) {
    super(`MotionSpec 校验失败：${errors.length} 项`);
    this.name = 'SpecError';
    this.errors = errors;
  }
}

const num = (v) => typeof v === 'number' && Number.isFinite(v);

/** 归一化：补默认值、按 start 排序、补 unit/ease。不修改入参。 */
function normalizeSpec(spec) {
  if (!spec || typeof spec !== 'object') throw new TypeError('spec 必须是对象');
  const out = {
    id: spec.id,
    version: spec.version || 1,
    timeline: (spec.timeline || []).map((s, i) => ({
      id: s.id || `t${i + 1}`,
      target: s.target || 'self',
      prop: s.prop,
      from: s.from,
      to: s.to,
      unit: s.unit || 'px',
      start: num(s.start) ? s.start : 0,
      dur: num(s.dur) ? s.dur : 0.5,
      ease: s.ease || 'easeOut',
      ...(s.extra ? { extra: s.extra } : {})
    })),
    loop: {
      count: spec.loop?.count ?? 1,
      direction: spec.loop?.direction || 'normal',
      fill: spec.loop?.fill || 'both'
    },
    stagger: {
      count: spec.stagger?.count ?? 1,
      step: num(spec.stagger?.step) ? spec.stagger.step : 0,
      from: spec.stagger?.from || 'start'
    },
    camera: (spec.camera || []).map((c, i) => ({
      at: num(c.at) ? c.at : 0,
      kind: c.kind,
      dur: num(c.dur) ? c.dur : 1,
      ease: c.ease || 'easeOut',
      ...(c.to ? { to: c.to } : {}),
      ...(num(c.amp) ? { amp: c.amp } : {}),
      ...(num(c.from) ? { from: c.from } : {})
    })),
    reducedMotion: {
      strategy: spec.reducedMotion?.strategy || 'fade',
      dur: num(spec.reducedMotion?.dur) ? spec.reducedMotion.dur : 0.18
    }
  };
  out.timeline.sort((a, b) => a.start - b.start);
  out.camera.sort((a, b) => a.at - b.at);
  return out;
}

/**
 * 校验。
 * @param {object} spec
 * @param {{byName?:Function, has?:Function}} [registry] 用于校验 ease 是否存在
 * @returns {{ok:boolean, errors:Array<{path:string,message:string}>, warnings:Array<string>}}
 */
function validateSpec(spec, registry) {
  const errors = [];
  const warnings = [];
  const at = (path, message) => errors.push({ path, message });

  if (!spec || typeof spec !== 'object') {
    return { ok: false, errors: [{ path: '$', message: 'spec 必须是对象' }], warnings };
  }

  if (typeof spec.id !== 'string' || !ID_RE.test(spec.id)) {
    at('id', `id 必须匹配 ${ID_RE}（收到 ${JSON.stringify(spec.id)}）`);
  }
  if (spec.version !== undefined && spec.version !== 1) {
    at('version', `只支持 version 1（收到 ${spec.version}）`);
  }

  if (!Array.isArray(spec.timeline) || spec.timeline.length === 0) {
    at('timeline', 'timeline 必须是非空数组');
  } else {
    const ids = new Set();
    spec.timeline.forEach((s, i) => {
      const p = `timeline[${i}]`;
      if (!s || typeof s !== 'object') { at(p, '必须是对象'); return; }
      if (!s.id || typeof s.id !== 'string') at(`${p}.id`, '必须有字符串 id');
      else if (ids.has(s.id)) at(`${p}.id`, `id 重复：${s.id}`);
      else ids.add(s.id);
      if (!TARGETS.includes(s.target)) at(`${p}.target`, `必须是 ${TARGETS.join(' / ')}`);
      if (!PROPS.includes(s.prop)) at(`${p}.prop`, `必须是 ${PROPS.join(' / ')}`);
      if (!UNITS.includes(s.unit)) at(`${p}.unit`, `必须是 ${UNITS.join(' / ')}`);
      if (!num(s.start) || s.start < 0) at(`${p}.start`, '必须是非负有限数（秒）');
      if (!num(s.dur) || s.dur <= 0) at(`${p}.dur`, '必须是正有限数（秒）');
      if (typeof s.ease !== 'string' || !s.ease) {
        at(`${p}.ease`, '必须有曲线名');
      } else if (registry && typeof registry.has === 'function' && !registry.has(s.ease)) {
        at(`${p}.ease`, `曲线不存在：${s.ease}`);
      }
      if (s.prop === 'opacity' || s.prop === 'color' || s.prop === 'filter') {
        if (s.unit !== 'none' && s.unit !== 'px') warnings.push(`${p}.unit：${s.prop} 通常不需要单位`);
      }
    });
  }

  if (spec.loop !== undefined) {
    const l = spec.loop;
    if (!Number.isInteger(l.count) || l.count < 1) at('loop.count', '必须是 ≥1 的整数');
    if (!DIRECTIONS.includes(l.direction)) at('loop.direction', `必须是 ${DIRECTIONS.join(' / ')}`);
    if (!FILLS.includes(l.fill)) at('loop.fill', `必须是 ${FILLS.join(' / ')}`);
  }

  if (spec.stagger !== undefined) {
    const s = spec.stagger;
    if (!Number.isInteger(s.count) || s.count < 1) at('stagger.count', '必须是 ≥1 的整数');
    if (!num(s.step)) at('stagger.step', '必须是有限数（秒）');
    if (!STAGGER_FROM.includes(s.from)) at('stagger.from', `必须是 ${STAGGER_FROM.join(' / ')}`);
  }

  if (spec.camera !== undefined) {
    if (!Array.isArray(spec.camera)) {
      at('camera', '必须是数组');
    } else {
      spec.camera.forEach((c, i) => {
        const p = `camera[${i}]`;
        if (!CAMERA_KINDS.includes(c.kind)) at(`${p}.kind`, `必须是 ${CAMERA_KINDS.join(' / ')}`);
        if (!num(c.at) || c.at < 0) at(`${p}.at`, '必须是非负有限数（秒）');
        if (!num(c.dur) || c.dur <= 0) at(`${p}.dur`, '必须是正有限数（秒）');
        if (c.ease && registry && typeof registry.has === 'function' && !registry.has(c.ease)) {
          at(`${p}.ease`, `曲线不存在：${c.ease}`);
        }
        if (c.kind === 'shake' && !num(c.amp)) warnings.push(`${p}.amp：shake 未给幅度`);
        if (c.kind === 'slam' && !num(c.from)) warnings.push(`${p}.from：slam 未给起始缩放`);
      });
    }
  }

  if (!spec.reducedMotion || typeof spec.reducedMotion !== 'object') {
    at('reducedMotion', '必填：{ strategy: fade|instant|none, dur? }');
  } else {
    if (!RM_STRATEGIES.includes(spec.reducedMotion.strategy)) {
      at('reducedMotion.strategy', `必须是 ${RM_STRATEGIES.join(' / ')}`);
    }
    if (spec.reducedMotion.dur !== undefined && (!num(spec.reducedMotion.dur) || spec.reducedMotion.dur < 0)) {
      at('reducedMotion.dur', '必须是非负有限数（秒）');
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}

/** 计算总时长（秒）：timeline 与 camera 的并集。 */
function duration(spec) {
  const t = (spec.timeline || []).reduce((m, s) => Math.max(m, (s.start || 0) + (s.dur || 0)), 0);
  const c = (spec.camera || []).reduce((m, k) => Math.max(m, (k.at || 0) + (k.dur || 0)), 0);
  return Math.max(t, c);
}

/** 把秒转成导出目标单位。 */
function toMs(sec) { return Math.round(sec * 1000); }
function toSec(ms) { return ms / 1000; }

return { PROPS, TARGETS, UNITS, DIRECTIONS, FILLS, STAGGER_FROM, CAMERA_KINDS, RM_STRATEGIES, ID_RE, SpecError, normalizeSpec, validateSpec, duration, toMs, toSec };
})();
__m["exporters\\_util"] = (function (__d0) {
const { clamp01 } = __d0;
/* motion-core · exporters/_util.js
   导出器共用工具：CSS 缓动、采样、transform 合成、分段分组。 */


/** 曲线条目 → CSS easing 字符串。
 *  贝塞尔 → cubic-bezier()；linear/steps → 原样；其余 → linear() 采样。 */
function cssEasing(entry) {
  if (!entry) return 'linear';
  const def = entry.def || {};
  if (def.fn === 'linear') return 'linear';
  if (def.fn === 'bezier') return `cubic-bezier(${def.args.join(', ')})`;
  if (def.fn === 'steps') {
    const a = def.args || {};
    return a.mode === 'start' ? `steps(${a.n}, start)` : `steps(${a.n})`;
  }
  return sampleLinear(entry.fn, 17);
}

/** 采样成 CSS linear()。17 点，首尾必须是 0 / 1。 */
function sampleLinear(fn, n = 17) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    let v = Number(fn(t));
    if (!Number.isFinite(v)) v = t;
    v = Math.max(-1, Math.min(2, v));
    pts.push(i === 0 || i === n - 1 ? String(+v.toFixed(4)) : `${+v.toFixed(4)} ${(t * 100).toFixed(2)}%`);
  }
  return `linear(${pts.join(', ')})`;
}

/** 数值 + 单位 → CSS 值。 */
function cssValue(v, unit) {
  if (typeof v === 'string') return v;
  if (unit === 'none' || unit === undefined) return String(v);
  return `${v}${unit}`;
}

/** 把一组并行动作合成一条 from / to 声明块。 */
function composeDeclarations(segments, end) {
  const transform = [];
  const decls = [];
  for (const seg of segments) {
    const v = end === 'from' ? seg.from : seg.to;
    if (v === undefined || v === null) continue;
    switch (seg.prop) {
      case 'translateX': transform.push(`translateX(${cssValue(v, seg.unit)})`); break;
      case 'translateY': transform.push(`translateY(${cssValue(v, seg.unit)})`); break;
      case 'translateZ': transform.push(`translateZ(${cssValue(v, seg.unit)})`); break;
      case 'scale': transform.push(`scale(${cssValue(v, 'none')})`); break;
      case 'scaleX': transform.push(`scaleX(${cssValue(v, 'none')})`); break;
      case 'scaleY': transform.push(`scaleY(${cssValue(v, 'none')})`); break;
      case 'rotate': transform.push(`rotate(${cssValue(v, seg.unit)})`); break;
      default:
        decls.push(`${seg.prop}: ${cssValue(v, seg.prop === 'opacity' ? 'none' : seg.unit)}`);
    }
  }
  if (transform.length) decls.unshift(`transform: ${transform.join(' ')}`);
  return decls;
}

/** 按 (start, dur, ease) 分组并行动作。 */
function groupSegments(timeline) {
  const groups = new Map();
  for (const seg of timeline) {
    const key = `${seg.start}|${seg.dur}|${seg.ease}`;
    if (!groups.has(key)) groups.set(key, { start: seg.start, dur: seg.dur, ease: seg.ease, segments: [] });
    groups.get(key).segments.push(seg);
  }
  return [...groups.values()].sort((a, b) => a.start - b.start);
}

/** 曲线条目 → JS 表达式（供 film-mo 使用）。 */
function moExpr(entry) {
  if (!entry) return 'MO.linear';
  return `MO.byName('${entry.name}')`;
}

function rkExpr(entry) {
  if (!entry) return 'E.linear';
  return `E.byName('${entry.name}')`;
}

function clamp01Export(t) { return clamp01(t); }

return { cssEasing, sampleLinear, cssValue, composeDeclarations, groupSegments, moExpr, rkExpr, clamp01Export };
})(__m["curves"]);
__m["exporters\\css"] = (function (__d0) {
const { cssEasing, composeDeclarations, groupSegments } = __d0;
/* motion-core · exporters/css.js
   导出为 CSS @keyframes / transition。
   多组并行动作 → 多条 animation 声明（逗号分隔）。 */


const TRANSFORM_PROPS = new Set([
  'transform', 'translateX', 'translateY', 'translateZ', 'scale', 'scaleX', 'scaleY', 'rotate'
]);

function kfName(id, i) { return `mc-${id.replace(/[^a-z0-9-]/gi, '-')}-${i + 1}`; }

function timingOf(group, loop) {
  const ms = Math.round(group.dur * 1000);
  const delay = Math.round((group.start || 0) * 1000);
  const iterations = loop.count ?? 1;
  const direction = loop.direction === 'normal' ? '' : ` ${loop.direction}`;
  const fill = loop.fill === 'both' ? '' : ` ${loop.fill}`;
  return `${ms}ms ${delay}ms ${iterations}${direction}${fill}`;
}

const css = {
  target: 'css',
  label: 'CSS',
  export(spec, { registry, selector = '.el' } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    if (!spec.timeline || spec.timeline.length === 0) {
      return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    }

    const groups = groupSegments(spec.timeline);
    const loop = spec.loop || {};
    const animations = [];
    const blocks = [];

    groups.forEach((g, i) => {
      const name = kfName(spec.id, i);
      const easing = cssEasing(registry.byName(g.ease));
      const from = composeDeclarations(g.segments, 'from');
      const consts = composeDeclarations(g.segments, 'to');
      animations.push(`${name} ${timingOf(g, loop)} ${easing}`);
      blocks.push(`@keyframes ${name} {\n` +
        (from.length ? `  from { ${from.join('; ')}; }\n` : '') +
        (consts.length ? `  to { ${consts.join('; ')}; }\n` : '') +
        `}`);
    });

    for (const seg of spec.timeline) {
      const entry = registry.byName(seg.ease);
      if (entry && !['bezier', 'linear', 'steps'].includes(entry.def.fn)) {
        warnings.push(`${seg.ease} 无法用原生 CSS 曲线表达，已用 linear() 采样近似`);
      }
    }
    if (groups.length > 1) {
      warnings.push(`${groups.length} 组并行动作已导出为 ${groups.length} 条 animation`);
    }

    const code = `${selector} {\n  animation: ${animations.join(', ')};\n}\n${blocks.join('\n')}`;
    return { code, status: 'native', warnings };
  }
};

/** 仅 transition 形式（适合两态切换，只取第一组）。 */
const cssTransition = {
  target: 'css-transition',
  label: 'CSS transition',
  export(spec, { registry, selector = '.el' } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const timeline = (spec.timeline || []).filter((s) =>
      TRANSFORM_PROPS.has(s.prop) || s.prop === 'opacity');
    if (timeline.length === 0) {
      return { code: '', status: 'unavailable', warnings, reason: '没有可导出的 transition 属性' };
    }
    const groups = groupSegments(timeline);
    /* transition 是两态切换，只能表达一组动作；多组时取第一组并告警 */
    if (groups.length > 1) {
      warnings.push(`transition 只能表达一组动作，已取第一组（共 ${groups.length} 组）`);
    }
    const g = groups[0];
    const props = [...new Set(g.segments.map((s) => s.prop))];
    const cssProp = props.every((p) => p === 'opacity') ? 'opacity' : 'transform';
    const ms = Math.round(g.dur * 1000);
    const easing = cssEasing(registry.byName(g.ease));
    const code = [
      `${selector} {`,
      `  transition: ${cssProp} ${ms}ms ${easing};`,
      '}',
      `/* 切到目标状态：${composeDeclarations(g.segments, 'to').join('; ')} */`
    ].join('\n');
    return { code, status: 'native', warnings };
  }
};

return { css, cssTransition };
})(__m["exporters\\_util"]);
__m["exporters\\waapi"] = (function (__d0) {
const { cssEasing, composeDeclarations, groupSegments } = __d0;
/* motion-core · exporters/waapi.js
   导出为 Web Animations API。多组并行动作 → 多次 animate 调用。 */


const waapi = {
  target: 'waapi',
  label: 'Web Animations API',
  export(spec, { registry, selector = 'el' } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    if (!spec.timeline || spec.timeline.length === 0) {
      return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    }

    const groups = groupSegments(spec.timeline);
    const loop = spec.loop || {};
    const calls = [];

    for (const g of groups) {
      const from = composeDeclarations(g.segments, 'from');
      const to = composeDeclarations(g.segments, 'to');
      const opts = {
        duration: Math.round(g.dur * 1000),
        easing: cssEasing(registry.byName(g.ease)),
        delay: Math.round((g.start || 0) * 1000),
        iterations: loop.count ?? 1,
        direction: loop.direction || 'normal',
        fill: loop.fill || 'both'
      };
      for (const seg of g.segments) {
        const entry = registry.byName(seg.ease);
        if (entry && !['bezier', 'linear', 'steps'].includes(entry.def.fn)) {
          warnings.push(`${seg.ease} 用 linear() 采样近似（17 点）`);
        }
      }
      calls.push(
        `${selector}.animate(\n` +
        `  [{ ${from.join('; ')} }, { ${to.join('; ')} }],\n` +
        `  ${JSON.stringify(opts, null, 2).replace(/\n/g, '\n  ')}\n` +
        `);`
      );
    }

    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作导出为 ${groups.length} 次 animate 调用`);
    return { code: calls.join('\n'), status: 'native', warnings };
  }
};

return { waapi };
})(__m["exporters\\_util"]);
__m["exporters\\_values"] = (function (__d0) {
const { groupSegments } = __d0;
/* motion-core · exporters/_values.js
   各平台共用的「spec → 目标值」换算。 */


/** MotionSpec 属性 → 各平台的属性名 */
const PROP_NAME = {
  gsap: { translateX: 'x', translateY: 'y', translateZ: 'z', scale: 'scale', scaleX: 'scaleX', scaleY: 'scaleY', rotate: 'rotation', skewX: 'skewX', skewY: 'skewY', opacity: 'opacity' },
  framer: { translateX: 'x', translateY: 'y', translateZ: 'z', scale: 'scale', scaleX: 'scaleX', scaleY: 'scaleY', rotate: 'rotate', skewX: 'skewX', skewY: 'skewY', opacity: 'opacity' },
  swift: { translateX: 'translationX', translateY: 'translationY', scale: 'scale', scaleX: 'scaleX', scaleY: 'scaleY', rotate: 'rotation', skewX: 'skewX', skewY: 'skewY', opacity: 'opacity' },
  compose: { translateX: 'translationX', translateY: 'translationY', scale: 'scale', scaleX: 'scaleX', scaleY: 'scaleY', rotate: 'rotationZ', skewX: 'skewX', skewY: 'skewY', opacity: 'opacity' },
  tailwind: { translateX: 'translate-x', translateY: 'translate-y', translateZ: 'translate-z', scale: 'scale', scaleX: 'scale-x', scaleY: 'scale-y', rotate: 'rotate', skewX: 'skew-x', skewY: 'skew-y', opacity: 'opacity' }
};

/** 值 → 平台字面量 */
function valueOf(seg, platform) {
  const to = seg.to ?? 0;
  if (platform === 'gsap' || platform === 'framer') {
    if (seg.prop === 'rotate' || seg.prop.startsWith('skew')) return `${to}`;
    if (seg.prop.startsWith('scale')) return `${to}`;
    return seg.unit === 'none' ? `${to}` : `${to}`;
  }
  if (platform === 'swift') {
    if (seg.prop === 'rotate') return `${to}`;
    if (seg.prop.startsWith('scale')) return `${to}`;
    return `${to}`;
  }
  return `${to}`;
}

/** 取第一组动作的目标值（大多数平台一次只导出一组）。 */
function firstGroup(spec) {
  const groups = groupSegments(spec.timeline);
  return groups[0] || null;
}

function warnExtraGroups(spec, warnings) {
  const n = groupSegments(spec.timeline).length;
  if (n > 1) warnings.push(`${n} 组并行动作，已导出第一组`);
}

return { PROP_NAME, valueOf, firstGroup, warnExtraGroups };
})(__m["exporters\\_util"]);
__m["exporters\\gsap"] = (function (__d0, __d1) {
const { groupSegments } = __d0;
const { PROP_NAME } = __d1;
/* motion-core · exporters/gsap.js */



const gsap = {
  target: 'gsap',
  label: 'GSAP',
  export(spec, { registry } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const groups = groupSegments(spec.timeline);
    if (!groups.length) return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作，已导出第一组`);

    const g = groups[0];
    const entry = registry.byName(g.ease);
    const names = PROP_NAME.gsap;

    const props = [];
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) { warnings.push(`GSAP 不支持属性 ${seg.prop}`); continue; }
      const to = seg.to ?? 0;
      props.push(`${name}: ${to}`);
    }
    if (!props.length) return { code: '', status: 'unavailable', warnings, reason: '没有可导出的属性' };

    /* 曲线：优先用词表里的 gsap 等价名；贝塞尔用 CustomEase；其余用最近似命名 */
    let ease;
    if (entry.def.fn === 'bezier') {
      ease = `CustomEase.create("mc-${spec.id}", "M0,0 C${entry.def.args.join(',')} 1,1") /* 需先加载 CustomEase 插件 */`;
    } else if (entry.equiv?.gsap) {
      ease = `"${entry.equiv.gsap}"`;
    } else {
      ease = '"power2.out"';
      warnings.push(`${entry.name} 没有 GSAP 等价命名，用 power2.out 近似`);
    }

    const loop = spec.loop || {};
    const extra = [];
    if ((loop.count ?? 1) > 1) extra.push(`repeat: ${loop.count - 1}`);
    if (loop.direction === 'alternate' || loop.direction === 'alternate-reverse') extra.push('yoyo: true');
    if ((g.start || 0) > 0) extra.push(`delay: ${g.start}`);

    const stagger = spec.stagger || { count: 1, step: 0 };
    if (stagger.count > 1) extra.push(`stagger: ${stagger.step}`);

    const code = [
      `gsap.to(".el", {`,
      `  ${props.join(',\n  ')},`,
      `  duration: ${(g.dur).toFixed(2)},`,
      `  ease: ${ease},`,
      (extra.length ? `  ${extra.join(',\n  ')},` : ''),
      `});`
    ].filter(Boolean).join('\n');

    return { code, status: 'native', warnings };
  }
};

return { gsap };
})(__m["exporters\\_util"], __m["exporters\\_values"]);
__m["exporters\\framer"] = (function (__d0, __d1) {
const { groupSegments } = __d0;
const { PROP_NAME } = __d1;
/* motion-core · exporters/framer.js */



/** Framer 的命名缓动（与核心曲线名对齐） */
const FRAMER_NAMED = new Set(['linear', 'easeIn', 'easeOut', 'easeInOut', 'circIn', 'circOut', 'backIn', 'backOut', 'anticipate']);

const framer = {
  target: 'framer',
  label: 'Framer Motion',
  export(spec, { registry } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const groups = groupSegments(spec.timeline);
    if (!groups.length) return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作，已导出第一组`);

    const g = groups[0];
    const entry = registry.byName(g.ease);
    const names = PROP_NAME.framer;

    const animate = [];
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) { warnings.push(`Framer Motion 不支持属性 ${seg.prop}`); continue; }
      animate.push(`${name}: ${seg.to ?? 0}`);
    }
    if (!animate.length) return { code: '', status: 'unavailable', warnings, reason: '没有可导出的属性' };

    /* 曲线：贝塞尔给数组；命名曲线给名字；其余给最近似命名 + 警告 */
    let ease;
    if (entry.def.fn === 'bezier') {
      ease = `[${entry.def.args.join(', ')}]`;
    } else if (FRAMER_NAMED.has(entry.name)) {
      ease = `"${entry.name}"`;
    } else {
      ease = '"easeOut"';
      warnings.push(`${entry.name} 用 Framer 的 easeOut 近似`);
    }

    const loop = spec.loop || {};
    const transition = [`duration: ${g.dur}`, `ease: ${ease}`];
    if ((loop.count ?? 1) > 1) {
      transition.push(`repeat: ${loop.count - 1}`);
      if (loop.direction === 'alternate' || loop.direction === 'alternate-reverse') transition.push('repeatType: "mirror"');
    }

    const stagger = spec.stagger || { count: 1, step: 0 };
    if (stagger.count > 1) transition.push(`staggerChildren: ${stagger.step}`);

    const code = [
      `<motion.div`,
      `  animate={{ ${animate.join(', ')} }}`,
      `  transition={{ ${transition.join(', ')} }}`,
      `/>`
    ].join('\n');

    return { code, status: 'native', warnings };
  }
};

return { framer };
})(__m["exporters\\_util"], __m["exporters\\_values"]);
__m["exporters\\swift"] = (function (__d0, __d1) {
const { groupSegments } = __d0;
const { PROP_NAME } = __d1;
/* motion-core · exporters/swift.js */



const CURVE = {
  linear: '.curveLinear',
  easeIn: '.curveEaseIn',
  easeOut: '.curveEaseOut',
  easeInOut: '.curveEaseInOut'
};

const swift = {
  target: 'swift',
  label: 'Swift / iOS',
  export(spec, { registry } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const groups = groupSegments(spec.timeline);
    if (!groups.length) return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作，已导出第一组`);

    const g = groups[0];
    const entry = registry.byName(g.ease);
    const names = PROP_NAME.swift;

    const from = [], to = [];
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) { warnings.push(`UIKit 不支持属性 ${seg.prop}`); continue; }
      const a = seg.from ?? 0, b = seg.to ?? 0;
      from.push(`${name}: ${a}`);
      to.push(`${name}: ${b}`);
    }
    if (!to.length) return { code: '', status: 'unavailable', warnings, reason: '没有可导出的属性' };

    const curve = CURVE[entry.name] || '.curveEaseOut';
    if (!CURVE[entry.name]) warnings.push(`${entry.name} 用 UIKit 的 curveEaseOut 近似`);

    const loop = spec.loop || {};
    const opts = [curve];
    if ((loop.count ?? 1) > 1) { opts.push('.repeatAutoreverses'); }
    if ((g.start || 0) > 0) warnings.push('UIKit 单条 animate 不支持 delay，请在调用处处理');

    const stagger = spec.stagger || { count: 1, step: 0 };
    if (stagger.count > 1) warnings.push(`逐项错峰请在外层循环里用延迟 ${stagger.step}s 分别调用`);

    const code = [
      `// 初始状态`,
      `view.transform = .identity`,
      `UIView.animate(withDuration: ${g.dur}, delay: 0, options: [${opts.join(', ')}], animations: {`,
      `  view.transform = .identity${to.length ? ' // ' + to.join(', ') : ''}`,
      `}, completion: nil)`
    ].join('\n');

    /* 逐属性版本更精确：把每个属性单独赋值 */
    const lines = [`view.transform = .identity`];
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) continue;
      lines.push(`${name === 'opacity' ? 'view.alpha' : 'view.' + name} = ${seg.to ?? 0}`);
    }

    const code2 = [
      `// 初始状态`,
      `view.transform = .identity`,
      `UIView.animate(withDuration: ${g.dur}, delay: 0, options: [${opts.join(', ')}], animations: {`,
      `  ${lines.slice(1).join('\n  ')}`,
      `}, completion: nil)`
    ].join('\n');

    return { code: code2, status: 'native', warnings };
  }
};

return { swift };
})(__m["exporters\\_util"], __m["exporters\\_values"]);
__m["exporters\\compose"] = (function (__d0, __d1) {
const { groupSegments } = __d0;
const { PROP_NAME } = __d1;
/* motion-core · exporters/compose.js */



const EASING = {
  linear: 'LinearEasing',
  easeIn: 'FastOutLinearInEasing',
  easeOut: 'LinearOutSlowInEasing',
  easeInOut: 'FastOutSlowInEasing'
};

const compose = {
  target: 'compose',
  label: 'Jetpack Compose',
  export(spec, { registry } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const groups = groupSegments(spec.timeline);
    if (!groups.length) return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作，已导出第一组`);

    const g = groups[0];
    const entry = registry.byName(g.ease);
    const names = PROP_NAME.compose;

    const layer = [];
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) { warnings.push(`Compose 不支持属性 ${seg.prop}`); continue; }
      layer.push(`  ${name} = progress * ${seg.to ?? 0}f`);
    }
    if (!layer.length) return { code: '', status: 'unavailable', warnings, reason: '没有可导出的属性' };

    let easing;
    if (entry.def.fn === 'bezier') {
      const [x1, y1, x2, y2] = entry.def.args;
      easing = `CubicBezierEasing(${x1}f, ${y1}f, ${x2}f, ${y2}f)`;
    } else {
      easing = EASING[entry.name] || 'LinearOutSlowInEasing';
      if (!EASING[entry.name]) warnings.push(`${entry.name} 用 LinearOutSlowInEasing 近似`);
    }

    const loop = spec.loop || {};
    const extra = [];
    if ((loop.count ?? 1) > 1) extra.push(`  iterations = ${loop.count},`);
    if (loop.direction === 'alternate' || loop.direction === 'alternate-reverse') extra.push('  repeatMode = RepeatMode.Reverse,');

    const stagger = spec.stagger || { count: 1, step: 0 };
    if (stagger.count > 1) warnings.push(`逐项错峰请在 items 里用 delay(${Math.round(stagger.step * 1000)})`);

    const code = [
      `val spec = tween<Float>(`,
      `  durationMillis = ${Math.round(g.dur * 1000)},`,
      `  easing = ${easing}`,
      ...extra,
      `)`,
      `var visible by remember { mutableStateOf(false) }`,
      `LaunchedEffect(Unit) { visible = true }`,
      `val progress by animateFloatAsState(targetValue = if (visible) 1f else 0f, animationSpec = spec, label = "motion")`,
      `Modifier.graphicsLayer {`,
      ...layer,
      `}`
    ].join('\n');

    return { code, status: 'native', warnings };
  }
};

return { compose };
})(__m["exporters\\_util"], __m["exporters\\_values"]);
__m["exporters\\tailwind"] = (function (__d0, __d1) {
const { groupSegments } = __d0;
const { PROP_NAME } = __d1;
/* motion-core · exporters/tailwind.js */



const tailwind = {
  target: 'tailwind',
  label: 'Tailwind CSS',
  export(spec, { registry, selector = '' } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    const groups = groupSegments(spec.timeline);
    if (!groups.length) return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    if (groups.length > 1) warnings.push(`${groups.length} 组并行动作，已导出第一组`);

    const g = groups[0];
    const entry = registry.byName(g.ease);
    const names = PROP_NAME.tailwind;

    const start = [], end = [];
    const props = new Set();
    for (const seg of g.segments) {
      const name = names[seg.prop];
      if (!name) { warnings.push(`Tailwind 不支持属性 ${seg.prop}`); continue; }
      props.add(seg.prop === 'opacity' ? 'opacity' : 'transform');
      start.push(`${name}-[${seg.from ?? 0}]`);
      end.push(`${name}-[${seg.to ?? 0}]`);
    }
    if (!end.length) return { code: '', status: 'unavailable', warnings, reason: '没有可导出的属性' };

    let ease;
    if (entry.name === 'linear') ease = 'ease-linear';
    else if (entry.name === 'easeIn') ease = 'ease-in';
    else if (entry.name === 'easeInOut') ease = 'ease-in-out';
    else if (entry.name === 'easeOut') ease = 'ease-out';
    else if (entry.def.fn === 'steps') ease = `ease-[steps(${entry.def.args?.n || 6})]`;
    else if (entry.def.fn === 'bezier') ease = `ease-[cubic-bezier(${entry.def.args.join(',')})]`;
    else { ease = 'ease-out'; warnings.push(`${entry.name} 用 Tailwind 的 ease-out 近似`); }

    const propList = [...props].join(',');
    const dur = Math.round(g.dur * 1000);
    const stagger = spec.stagger || { count: 1, step: 0 };
    const delay = stagger.count > 1 ? ` delay-[${Math.round(stagger.step * 1000)}ms]` : '';

    const code = [
      `<!-- 初始状态 -->`,
      `<div class="transition-[${propList}] duration-[${dur}ms] ${ease}${delay} ${start.join(' ')}"></div>`,
      `<!-- 目标状态 -->`,
      `<div class="transition-[${propList}] duration-[${dur}ms] ${ease}${delay} ${end.join(' ')}"></div>`
    ].join('\n');

    return { code, status: 'native', warnings };
  }
};

return { tailwind };
})(__m["exporters\\_util"], __m["exporters\\_values"]);
__m["exporters\\film-mo"] = (function (__d0, __d1) {
const { moExpr, rkExpr } = __d0;
const { groupSegments } = __d1;
/* motion-core · exporters/film-mo.js
   导出为 film_ai_three / film_ai_chair 的 MO 时间库调用形式。
   目标环境：浏览器 canvas，t 为秒，元素是普通对象（el.x / el.opacity）。
   多组并行动作 → 每组分一段代码。

   对照：film_ai_three/代码工程/lib/motion.js
     MO.seg(t, a, b)  —— [a,b] → 0..1
     MO.byName(name)  —— Phase 2 加到 MO 上的别名解析（本导出器假定它存在）
     MO.step(t, fps)  —— 离散步进
 */



function propOf(seg) {
  switch (seg.prop) {
    case 'translateX': return 'x';
    case 'translateY': return 'y';
    case 'translateZ': return 'z';
    case 'scale': return 'scale';
    case 'scaleX': return 'scaleX';
    case 'scaleY': return 'scaleY';
    case 'rotate': return 'rot';
    case 'opacity': return 'opacity';
    case 'clip-path': return 'clipPath';
    case 'box-shadow': return 'boxShadow';
    case 'text-shadow': return 'textShadow';
    default: return seg.prop;   // filter / color / skewX / skewY 本身就是合法标识符
  }
}

function needsMix(seg) {
  return typeof seg.from === 'string' || typeof seg.to === 'string';
}

function exprOf(seg) {
  if (needsMix(seg)) {
    return `mixStr(${JSON.stringify(seg.from == null ? '' : seg.from)}, ${JSON.stringify(seg.to == null ? '' : seg.to)}, k)`;
  }
  const round = (v) => {
    const r = Math.round(v * 1e6) / 1e6;
    return Object.is(r, -0) ? 0 : r;
  };
  const from = round(seg.from ?? 0);
  const to = round(seg.to ?? 1);
  const delta = round(to - from);
  const mag = Math.abs(delta);
  const unit = mag === 0 ? '0' : mag === 1 ? 'k' : `${mag} * k`;
  const term = delta < 0 ? `- ${unit}` : `+ ${unit}`;
  if (from === 0) return delta < 0 ? `-${unit}` : unit;
  return `${from} ${term}`;
}

/* 非数值属性（clip-path / filter / box-shadow 等）的逐帧混合：
   把两侧字符串里的数字按出现顺序配对插值，其余原样保留。 */
const MIX_STR = [
  'const mixStr = (a, b, k) => {',
  '  const na = (String(a).match(/-?[\\d.]+/g) || []).map(Number);',
  '  const nb = (String(b).match(/-?[\\d.]+/g) || []).map(Number);',
  '  let i = 0;',
  '  return String(a).replace(/-?[\\d.]+/g, () => {',
  '    const v = na[i] + (nb[i] - na[i]) * k;',
  '    i++;',
  '    return String(Math.round(v * 100) / 100);',
  '  });',
  '};'
].join('\n');

function emitGroup(lines, registry, g, { varName, timeVar, count, step }) {
  const ease = registry.byName(g.ease);
  if (!ease) { lines.push(`// ⚠ 曲线不存在：${g.ease}`); return; }
  const dur = g.dur, start = g.start || 0;
  lines.push(`const ease${lines._gi} = ${moExpr(ease)};`);
  lines.push(`const DUR${lines._gi} = ${dur}, START${lines._gi} = ${start}, STEP${lines._gi} = ${step};`);

  if (ease.def.fn === 'steps') {
    const fps = Math.max(1, Math.round((ease.def.args?.n || 6) / dur));
    lines.push(`const k${lines._gi} = MO.step(${timeVar} - START${lines._gi}, ${fps});`);
  } else {
    lines.push(`const k${lines._gi} = ease${lines._gi}(MO.seg(${timeVar}, START${lines._gi}, START${lines._gi} + DUR${lines._gi}));`);
  }

  if (count > 1) {
    lines.push(`for (let i = 0; i < ${count}; i++) {`);
    lines.push(`  const lt = ${timeVar} - (START${lines._gi} + i * STEP${lines._gi});`);
    lines.push(`  const k = ease${lines._gi}(MO.seg(lt, START${lines._gi}, START${lines._gi} + DUR${lines._gi}));`);
    for (const seg of g.segments) lines.push(`  ${varName}[i].${propOf(seg)} = ${exprOf(seg)};`);
    lines.push('}');
  } else {
    for (const seg of g.segments) lines.push(`${varName}.${propOf(seg)} = ${exprOf(seg)};`);
  }
}

const filmMo = {
  target: 'film-mo',
  label: '影片 / Canvas（MO）',
  export(spec, { registry, varName = 'el', timeVar = 't' } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    if (!spec.timeline || spec.timeline.length === 0) {
      return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    }

    const groups = groupSegments(spec.timeline);
    const stagger = spec.stagger || { count: 1, step: 0 };
    const count = stagger.count || 1;
    const step = stagger.step || 0;

    const lines = [
      `// motion-core → film-mo · ${spec.id} · ${groups.length} 组动作` +
        (count > 1 ? ` · ${count} 项 · 错峰 ${Math.round(step * 1000)}ms` : '')
    ];
    if (groups.some((g) => g.segments.some(needsMix))) lines.push(MIX_STR);
    lines._gi = 0;
    groups.forEach((g, i) => {
      lines._gi = i + 1;
      lines.push(`// 动作 ${i + 1}：${g.segments.map((s) => s.prop).join(' + ')} · ${Math.round(g.dur * 1000)}ms · ${registry.byName(g.ease)?.name || g.ease}`);
      emitGroup(lines, registry, g, { varName, timeVar, count, step });
    });
    delete lines._gi;

    if (spec.loop && spec.loop.count > 1) {
      warnings.push(`film-mo 导出未自动处理循环（count=${spec.loop.count}），请在调用处用 MO.seg 包裹`);
    }
    return { code: lines.join('\n'), status: 'native', warnings };
  }
};

/** vibe-reel 的 ease(name, k) 形式。 */
const filmRk = {
  target: 'film-rk',
  label: '知识短片（RK）',
  export(spec, { registry } = {}) {
    const warnings = [];
    if (!registry) return { code: '', status: 'unavailable', warnings, reason: '缺少 registry' };
    if (!spec.timeline || spec.timeline.length === 0) {
      return { code: '', status: 'unavailable', warnings, reason: 'timeline 为空' };
    }
    const groups = groupSegments(spec.timeline);
    const stagger = spec.stagger || { count: 1, step: 0 };
    const lines = [`// motion-core → film-rk · ${spec.id} · ${groups.length} 组动作`];
    if (groups.some((g) => g.segments.some(needsMix))) lines.push(MIX_STR);
    groups.forEach((g, i) => {
      const ease = registry.byName(g.ease);
      lines.push(`// 动作 ${i + 1}：${g.segments.map((s) => s.prop).join(' + ')}`);
      lines.push(`const ease${i + 1} = ${rkExpr(ease)};`);
      lines.push(`const k${i + 1} = ease${i + 1}(seg(t, ${g.start || 0}, ${(g.start || 0) + g.dur}));`);
      const props = g.segments.map((s) => {
        const key = /^[A-Za-z_$][\w$]*$/.test(s.prop) ? s.prop : JSON.stringify(s.prop);
        const expr = needsMix(s)
          ? `mixStr(${JSON.stringify(s.from == null ? '' : s.from)}, ${JSON.stringify(s.to == null ? '' : s.to)}, k${i + 1})`
          : `${s.from ?? 0} + (${s.to ?? 1} - ${s.from ?? 0}) * k${i + 1}`;
        return `  ${key}: ${expr}`;
      });
      lines.push(`const v${i + 1} = {`);
      lines.push(props.join(',\n'));
      lines.push('};');
      lines.push(`Object.assign(el, v${i + 1});   // 或按你的渲染结构取值`);
    });
    if (stagger.count > 1) warnings.push('film-rk 导出未自动处理错峰，请在组件循环里用 ss(t, a+i*step, b+i*step)');
    return { code: lines.join('\n'), status: 'native', warnings };
  }
};

return { filmMo, filmRk };
})(__m["exporters\\_util"], __m["exporters\\_util"]);
__m["exporters\\film-camera"] = (function () {
/* motion-core · exporters/film-camera.js
   把 spec.camera 段转成 film_ai_three 的 CAM.track 事件表。
   对照：film_ai_three/代码工程/lib/camera.js 的 CAM.track(base, events, t)
 */

const filmCamera = {
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

return { filmCamera };
})();
__m["exporters\\json"] = (function (__d0) {
const { normalizeSpec, duration } = __d0;
/* motion-core · exporters/json.js
   输出归一化后的 spec，可选附带 resolved 曲线采样表。 */


const json = {
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

return { json };
})(__m["spec"]);
__m["lint"] = (function (__d0, __d1, __d2) {
const { createRegistry } = __d0;
const { IMPLS } = __d1;
const { validateSpec, PROPS, TARGETS, UNITS, DIRECTIONS, FILLS, STAGGER_FROM, CAMERA_KINDS, RM_STRATEGIES } = __d2;
/* ============================================================
   motion-core · lint.js
   词表静态检查。规则见 DESIGN.md §7。
   ============================================================ */




/** 词表里声明过的全部导出目标 */
const KNOWN_TARGETS = Object.freeze([
  'css', 'css-transition', 'waapi', 'gsap', 'framer', 'swift', 'compose',
  'tailwind', 'film-mo', 'film-rk', 'film-camera', 'json'
]);

/** Phase 0 已实现的导出器 */
const IMPLEMENTED_TARGETS = Object.freeze([
  'css', 'css-transition', 'waapi', 'gsap', 'framer', 'swift', 'compose',
  'tailwind', 'film-mo', 'film-rk', 'film-camera', 'json'
]);

const PLATFORM_VALUES = new Set(['native', 'approximate', 'unavailable']);

function mk() { return { errors: [], warnings: [], stats: {} }; }
const err = (out, path, message) => out.errors.push({ path, message });
const warn = (out, path, message) => out.warnings.push({ path, message });

/* ---------------- 曲线表 ---------------- */

function lintCurves(vocab, { strict = false } = {}) {
  const out = mk();
  out.stats = { curves: 0, aliases: 0, families: [] };

  if (!vocab || !Array.isArray(vocab.curves)) {
    err(out, '$', '词表缺少 curves 数组');
    return out;
  }
  if (!Array.isArray(vocab.platforms) || vocab.platforms.length === 0) {
    err(out, '$', '词表缺少 platforms 清单');
  }

  const names = new Set();
  const aliases = new Map();
  const families = new Set();
  const nativeUnimplemented = new Set();

  vocab.curves.forEach((c, i) => {
    const p = `curves[${i}]`;
    if (!c.name || typeof c.name !== 'string') { err(out, `${p}.name`, '必须有名字'); return; }
    out.stats.curves++;
    families.add(c.family);

    if (names.has(c.name)) err(out, `${p}.name`, `主名重复：${c.name}`);
    names.add(c.name);

    if (!c.label?.zh || !c.label?.en) err(out, `${p}.label`, '必须有 zh 与 en 标签');
    if (!c.family) err(out, `${p}.family`, '必须声明 family');
    if (!c.def || typeof c.def !== 'object') {
      err(out, `${p}.def`, '必须有 def 对象');
    } else {
      if (typeof c.def.fn !== 'string') err(out, `${p}.def.fn`, '必须是字符串');
      else if (!IMPLS[c.def.fn]) err(out, `${p}.def.fn`, `未知实现：${c.def.fn}`);
    }

    // 参数化曲线必须有默认值
    if (Array.isArray(c.params)) {
      c.params.forEach((par, j) => {
        if (!par.name) err(out, `${p}.params[${j}].name`, '参数必须有名字');
        if (par.default === undefined) err(out, `${p}.params[${j}].default`, `参数 ${par.name} 缺少默认值`);
        if (par.enum && !par.enum.includes(par.default)) err(out, `${p}.params[${j}].default`, `参数 ${par.name} 默认值不在 enum 内`);
      });
    }

    // 别名冲突
    for (const a of c.aliases || []) {
      out.stats.aliases++;
      if (!a) { err(out, `${p}.aliases`, '别名不能是空字符串'); continue; }
      if (names.has(a)) err(out, `${p}.aliases`, `别名与主名冲突：${a}`);
      if (aliases.has(a) && aliases.get(a) !== c.name) {
        err(out, `${p}.aliases`, `别名被多个曲线占用：${a}（${aliases.get(a)} 与 ${c.name}）`);
      }
      aliases.set(a, c.name);
    }

    // 平台声明
    if (!c.platforms || typeof c.platforms !== 'object') {
      err(out, `${p}.platforms`, '必须声明 platforms');
    } else {
      for (const [target, level] of Object.entries(c.platforms)) {
        if (!KNOWN_TARGETS.includes(target)) {
          err(out, `${p}.platforms.${target}`, `未知导出目标：${target}`);
          continue;
        }
        if (!PLATFORM_VALUES.has(level)) {
          err(out, `${p}.platforms.${target}`, `能力值必须是 native / approximate / unavailable（收到 ${level}）`);
          continue;
        }
        if (level === 'native' && !IMPLEMENTED_TARGETS.includes(target)) {
          nativeUnimplemented.add(target);
        }
      }
      for (const target of KNOWN_TARGETS) {
        if (!(target in c.platforms)) warn(out, `${p}.platforms.${target}`, `未声明该目标的能力`);
      }
    }

    // equiv 里的内部名必须指向存在的曲线（MO.x / E.x / E.byName('x')）
    if (c.equiv && typeof c.equiv === 'object') {
      for (const key of ['mo', 'rk']) {
        const v = c.equiv[key];
        if (typeof v !== 'string') continue;
        const m = v.match(/byName\('([^']+)'\)/);
        const bare = m ? m[1] : v.replace(/^(MO|E)\./, '').replace(/\(.*$/, '').trim();
        if (bare && !names.has(bare) && !aliases.has(bare) && bare !== 'step') {
          warn(out, `${p}.equiv.${key}`, `${v} 指向的名字 ${bare} 未在 curves.v1.json 中定义`);
        }
      }
    }
  });

  for (const target of [...nativeUnimplemented].sort()) {
    warn(out, '$.platforms', `声明 native 但尚未实现导出器：${target}`);
  }

  out.stats.families = [...families].sort();
  return out;
}

/* ---------------- 术语表 ---------------- */

function lintTerms(termsVocab, registry, { strict = false } = {}, grammarTransitions = new Set()) {
  const out = mk();
  out.stats = { terms: 0, categories: 0, withSpec: 0, withSource: 0, triggers: {} };

  if (!termsVocab || !Array.isArray(termsVocab.terms)) {
    err(out, '$', '术语表缺少 terms 数组');
    return out;
  }
  const cats = new Set((termsVocab.categories || []).map((c) => c.id));
  out.stats.categories = cats.size;
  if (cats.size === 0) err(out, '$.categories', '缺少分类定义');

  const ids = new Set();
  const aliasOwner = new Map();

  termsVocab.terms.forEach((t, i) => {
    const p = `terms[${i}]`;
    if (!t.id) { err(out, `${p}.id`, '术语必须有 id'); return; }
    out.stats.terms++;
    if (ids.has(t.id)) err(out, `${p}.id`, `id 重复：${t.id}`);
    ids.add(t.id);

    if (!t.zh || !t.en) err(out, `${p}.label`, '术语必须有 zh 与 en');
    if (!cats.has(t.cat)) err(out, `${p}.cat`, `分类不存在：${t.cat}`);
    if (!t.vague || !t.say || !t.def) warn(out, `${p}`, '缺少 vague / say / def 之一');

    for (const a of t.alias || []) {
      if (aliasOwner.has(a) && aliasOwner.get(a) !== t.id) {
        err(out, `${p}.alias`, `别名被多个术语占用：${a}`);
      }
      aliasOwner.set(a, t.id);
    }

    // 曲线引用
    if (t.curve && typeof t.curve === 'string') {
      if (!registry.has(t.curve)) err(out, `${p}.curve`, `曲线不存在：${t.curve}`);
    }

    // spec
    if (t.spec) {
      out.stats.withSpec++;
      const res = validateSpec(t.spec, registry);
      for (const e of res.errors) err(out, `${p}.spec.${e.path}`, e.message);
      for (const w of res.warnings) warn(out, `${p}.spec`, w);
    } else if (strict) {
      warn(out, `${p}.spec`, '术语没有 spec');
    }

    // film-grammar 必须有来源，且引用的曲线必须存在
    if (t.cat === 'film-grammar') {
      if (!t.source?.where) err(out, `${p}.source`, 'film-grammar 类术语必须有 source.where');
      else out.stats.withSource++;
      for (const c of t.curves || []) {
        if (!registry.has(c)) err(out, `${p}.curves`, `曲线不存在：${c}`);
      }
      for (const tr of t.transitions || []) {
        if (!grammarTransitions.has(tr)) warn(out, `${p}.transitions`, `转场未在 transitions.js 中找到：${tr}`);
      }
    }

    // trigger 与 film 端能力
    const trigger = t.trigger || 'time';
    out.stats.triggers[trigger] = (out.stats.triggers[trigger] || 0) + 1;
    if (trigger !== 'time' && t.platforms && t.platforms['film-mo'] === 'native') {
      warn(out, `${p}.platforms`, `trigger=${trigger} 的术语不应在 film-mo 声明 native`);
    }

    // 至少一条可用导出（有 spec 却导出不了 = 矛盾；无 spec 是正常的，不报警）
    const plats = t.platforms || {};
    const usable = Object.entries(plats).filter(([, v]) => v === 'native' || v === 'approximate');
    if (t.spec && usable.length === 0) warn(out, `${p}.platforms`, '有 spec 却没有任何可用导出目标');
  });

  return out;
}

/* ---------------- 汇总 ---------------- */

function lintAll({ curvesVocab, termsVocab, grammarVocab }, { strict = false } = {}) {
  const curves = lintCurves(curvesVocab, { strict });
  let registry = null;
  try {
    registry = createRegistry(curvesVocab);
    if (registry.conflicts.length) {
      for (const c of registry.conflicts) err(curves, `curves:${c.name}`, `${c.reason}${c.detail ? '：' + c.detail : ''}`);
    }
    /* 采样三点，抓「签名不匹配导致返回 NaN」这类静默错误 */
    for (const entry of registry.curves()) {
      for (const probe of [0.25, 0.5, 0.75]) {
        const v = entry.fn(probe);
        if (typeof v !== 'number' || !Number.isFinite(v)) {
          err(curves, `curves:${entry.name}`, `fn(${probe}) 不是有限数：${v}`);
        }
      }
    }
  } catch (e) {
    err(curves, '$.registry', `注册表构建失败：${e.message}`);
  }

  const terms = termsVocab
    ? lintTerms(termsVocab, registry, { strict })
    : (strict ? (() => { const o = mk(); warn(o, '$', '未提供术语表'); return o; })() : mk());

  const grammarList = grammarVocab
    ? (Array.isArray(grammarVocab) ? grammarVocab : (grammarVocab.grammars || []))
    : [];
  const grammar = grammarList.length
    ? lintTerms(
        { categories: termsVocab?.categories || [], terms: grammarList },
        registry,
        { strict },
        new Set(grammarVocab?.transitions?.map((t) => t.id) || [])
      )
    : mk();

  const errors = [...curves.errors, ...terms.errors, ...grammar.errors];
  const warnings = [...curves.warnings, ...terms.warnings, ...grammar.warnings];

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    stats: {
      curves: curves.stats,
      terms: terms.stats,
      grammar: grammar.stats
    }
  };
}

return { KNOWN_TARGETS, IMPLEMENTED_TARGETS, lintCurves, lintTerms, lintAll };
})(__m["registry"], __m["curves"], __m["spec"]);
__m["exporters\\index"] = (function (__d0, __d1, __d2, __d3, __d4, __d5, __d6, __d7, __d8, __d9, __d10) {
const { css, cssTransition } = __d0;
const { waapi } = __d1;
const { gsap } = __d2;
const { framer } = __d3;
const { swift } = __d4;
const { compose } = __d5;
const { tailwind } = __d6;
const { filmMo, filmRk } = __d7;
const { filmCamera } = __d8;
const { json } = __d9;
const { IMPLEMENTED_TARGETS } = __d10;
/* motion-core · exporters/index.js
   导出器工厂：createExporters(registry) → { css, waapi, 'film-mo', 'film-rk', json }
   以及通用入口 export(spec, target, opts)。 */












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

function createExporters(registry) {
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
function exportSpec(spec, target, opts = {}) {
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


return { createExporters, exportSpec, css, cssTransition, waapi, gsap, framer, swift, compose, tailwind, filmMo, filmRk, filmCamera, json };
})(__m["exporters\\css"], __m["exporters\\waapi"], __m["exporters\\gsap"], __m["exporters\\framer"], __m["exporters\\swift"], __m["exporters\\compose"], __m["exporters\\tailwind"], __m["exporters\\film-mo"], __m["exporters\\film-camera"], __m["exporters\\json"], __m["lint"]);
__m["browser"] = (function (__d0, __d1, __d2, __d3, __d4, __d5) {
const { createRegistry, CurveNotFoundError } = __d0;
const { buildCurve, IMPLS, BEZIER, SPRING, clamp01 } = __d1;
const { normalizeSpec, validateSpec, duration, toMs, toSec, SpecError, PROPS, TARGETS, UNITS, DIRECTIONS, FILLS, STAGGER_FROM, CAMERA_KINDS, RM_STRATEGIES } = __d2;
const { createExporters, exportSpec, css, cssTransition, waapi, gsap, framer, swift, compose, tailwind, filmMo, filmRk, filmCamera, json } = __d3;
const { lintAll, lintCurves, lintTerms, KNOWN_TARGETS, IMPLEMENTED_TARGETS } = __d4;
const { cssEasing, sampleLinear, composeDeclarations } = __d5;
/* motion-core · src/browser.js
   浏览器 / UMD 入口：不依赖 node:fs，词表由构建时内联传入。
   与 src/index.js 的区别：index.js 是 Node 入口（从磁盘读 vocab）。 */







/**
 * 用内联词表构建一个 core 实例。
 * @param {{curves?:object, terms?:object, grammar?:object}} vocabs
 */
function createBrowserCore(vocabs = {}) {
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

return { createBrowserCore };
})(__m["registry"], __m["curves"], __m["spec"], __m["exporters\\index"], __m["lint"], __m["exporters\\_util"]);
const core = __m["browser"].createBrowserCore({
  curves: __vocab.curves, terms: __vocab.terms, grammar: __vocab.grammar
});
core.__vocab = __vocab;
return core;
});
