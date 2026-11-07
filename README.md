# motion-core

> 动效内核：**一份术语表 + 一份曲线注册表 + 一份 MotionSpec + 一组导出器**。
> motion-lexicon（Web 交互词典）、film_ai_three / film_ai_chair（Canvas 影视）、
> vibe-reel（无旁白知识短片）三端共用。

内核**不做渲染**，只出数据、曲线、spec 和代码字符串。

设计稿见 [DESIGN.md](DESIGN.md)。

## 状态

| Phase | 内容 | 状态 |
|---|---|---|
| 0 | 曲线层 + registry + spec + lint + 导出器 | **已完成** |
| 1 | 内容层：术语表 + 影视语法表 | **已完成** |
| 2 | film 接入（UMD + `MO.byName()` + 镜头桥） | **已完成** |
| 3 | 词典接入（实验室 10 个导出 tab + 能力判断接 core） | **已完成（本地 fork）** |
| 4 | vibe-reel 接入（`E.byName()`，历史 E 表原样保留） | **已完成** |
| 5 | CI 闭环 | 待开工 |

## 目录

```
vocab/
  curves.v1.json        曲线注册表（56 条，10 个族，12 个平台能力声明）
  terms.v1.json         术语表（244 条，17 类，80 条含 MotionSpec）
  grammar.film.v1.json  影视语法表（8 种语法 + 46 个转场）
  alias-conflicts.v1.json  上游别名冲突的处置记录（14 组）
spec/
  motion-spec.schema.json
dist/
  core.umd.js           浏览器 / Node 通用构建（暴露 window.MC）
src/
  curves.js             纯函数实现（bezier / spring / back / elastic / steps / settle …）
  registry.js           byName / byFamily / platforms / alias / search
  spec.js               MotionSpec 归一化 + 校验
  browser.js            浏览器入口（createBrowserCore，词表由构建内联）
  index.js              Node 入口（从磁盘读 vocab）
  exporters/
    _util.js            CSS 缓动 / 采样 / transform 合成
    _values.js          各平台属性名与取值换算
    css.js              @keyframes / transition
    waapi.js            Web Animations API
    gsap.js             GSAP
    framer.js           Framer Motion
    swift.js            UIKit
    compose.js          Jetpack Compose
    tailwind.js         Tailwind CSS
    film-mo.js          MO.anim(...) 形式
    film-rk.js          ease(name,k) 形式
    film-camera.js      CAM.track 事件表
    json.js             结构化 spec（喂场景）
    index.js            工厂 + 通用入口
  lint.js
bin/motion-lint.js
examples/               端到端示例 spec
test/                   37 项回归测试 + 黄金采样
scripts/                生成参考采样 / 术语 / 语法 / 演示 / 构建 UMD / 集成验证
```

## 用法

```js
import { registry, createExporters, validateSpec } from 'motion-core';

const ex = createExporters(registry);
const spec = { id: 'slide-in', version: 1, timeline: [/* … */], reducedMotion: { strategy: 'fade' } };

validateSpec(spec, registry);          // { ok, errors, warnings }
ex['film-mo'](spec);                   // { code, status, warnings }
ex.css(spec);                          // → @keyframes + animation
ex.json(spec);                         // → 归一化 spec + 曲线采样表
```

命令行：

```bash
node bin/motion-lint.js vocab/ --strict   # 词表静态检查
node scripts/gen-terms.mjs                # 从词典数据重新生成 terms.v1.json
node scripts/gen-grammar.mjs              # 重新生成 grammar.film.v1.json
node scripts/gen-reference.mjs            # 从参考实现重新生成曲线黄金采样
node scripts/build-umd.mjs                # 构建 dist/core.umd.js
node scripts/demo.mjs                     # 端到端导出示例
node scripts/demo.mjs --term stagger      # 按术语 ID 导出
node --test "test/*.test.mjs"             # 37 项测试
python scripts/verify-lexicon-integration.py ../motion-lexicon-fork   # 词典集成验证
python scripts/verify-film-integration.py ../film_ai_three/代码工程   # film 集成验证
python scripts/verify-vibe-reel-integration.py films/onion-tears      # vibe-reel 集成验证
```

## 曲线从哪来

`vocab/curves.v1.json` 的每条实现都与真实参考实现逐点对齐（误差 < 1e-6）：

- `film_ai_three/代码工程/lib/motion.js`（`MO`，30 条曲线）
- `motion-lexicon/assets/ease.js`（`EASE`，14 条曲线 + 贝塞尔求解）
- `vibe-reel/engine/render_api.js`（`E` 表，8 条）

黄金采样在 `test/fixtures/reference.json`，由 `scripts/gen-reference.mjs` 生成；
参考源被搬走也不影响测试运行。

**命名冲突已处置**（详见 DESIGN.md §4.1.1）：`snappy` 归弹簧、贝塞尔那条改名 `quick-cut`；
`smooth` 归五次（MO/manim）、三次那条叫 `smoothstep`。

## 边界

- 内核不做渲染。
- 只统一「时间 → 数值」那一层；hover / scroll / drag 等交互触发留在各端。
- `unavailable` 是合法状态，导出器不产出代码、只给原因。

## 许可

MIT
