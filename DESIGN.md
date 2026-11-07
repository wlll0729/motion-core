# motion-core 设计稿

> 版本：v0.6（Phase 0–5 全部完成）
> 日期：2026-11-07
> 状态：五个 Phase 全部交付并验收

---

## 0. 一句话

把「动效」抽成一层独立内核：**一份术语表 + 一份曲线注册表 + 一份 MotionSpec + 一组导出器**，让
motion-lexicon（Web 交互词典）、film_ai_three / film_ai_chair（Canvas 影视）、vibe-reel（无旁白知识短片）
三端共用。内核不做渲染，只出数据、曲线、spec 和代码字符串。

---

## 1. 为什么要做

### 1.1 现状：三套互不相通的词汇表

| 维度 | motion-lexicon | film_ai_three / film_ai_chair | vibe-reel |
|---|---|---|---|
| 曲线实现 | `assets/ease.js`（`EASE` + `EASE_LIST`，14 条） | `lib/motion.js`（`MO`，约 32 条曲线 + 13 个时间工具） | `engine/render_api.js`（`E` 表，8 条） |
| 命名 | CSS 风（`easeOut`、`easeOutExpo`） | manim / AE / CSS 混合（`expoOut`、`k75`、`longTail`、`appleOut`） | 极简（`in`/`out`/`io`/`back`/`spring`/`expo`） |
| 术语 | 244 条，16 类，有 `vague/say/def/demo` | 无词条，知识散在 `09-视频动画语法.md`、`transitions.js`、代码注释里 | 无词条，知识散在 skill 文档里 |
| 平台导出 | CSS / WAAPI（v306 后只剩这两个） | 无导出，直接写场景代码 | 无导出 |
| 能力声明 | `compilable()` 看 spec 是否存在 | 无 | 无 |
| 场景描述 | `demo: {kind, frames, e, d, st, loop, play, multi}` | `MO.anim(lt,start,dur,ease)` + `CAM.track(events)` | `fade(t,a,b)` + `ease(name,k)` |

### 1.2 三个具体痛点

**痛点一：同一个曲线，三个名字。**
「快出慢停」在词典叫 `easeOut` / `expoOut`，在 film 叫 `expoOut` / `emphasized` / `longTail`，在 vibe-reel 叫 `out`。
选型口诀只存在于注释里——`lib/motion.js` 开头那段「讲解用 smooth/sineInOut，发布会用 appleOut/弹簧」
就是一份没有词条化、无法检索、无法校验的隐性知识。

**痛点二：平台能力不可靠。**
词典 v306 之前导出 8 个平台，能力判断只看 `specOf(term)` 是否存在，结果出现方向反了、曲线被静默替换、
Framer 缺 JSX `<` 等问题。v306 审计后直接砍到只剩 CSS/WAAPI——不是不能做更多，而是缺少一个
可机器验证的「术语 × 平台」能力矩阵。

**痛点三：内容缺「怎么用」。**
词典 244 条术语有定义，但没有「什么场景用、什么场景别用、出处」；而 film 项目
`huashu-art-motion/references/09-视频动画语法.md`（57KB，8 种语法）、`transitions.js`（70KB，几十种转场）、
MO 注释里的选型口诀，全是这种知识，却没有词条形态。词典自己的审查报告
（`docs/project-review-2026-10-11.md`）把「实现一致性」打最低分 1/4，并点名要
`content/ spec/ engine/ demos/ exporters/` 分层——这正是本设计要做的事。

### 1.3 目标

1. 曲线、术语、能力矩阵**只存一份**，三端同步。
2. 任何术语都能导出到任何支持的平台，且**能机器验证**；不支持就明确说不支持。
3. 术语带 `when / avoid / source`，可检索「这个镜头该用什么」，而不只是「这个词什么意思」。
4. 三端保留各自渲染层，互不侵入。

### 1.4 非目标

- 不做渲染器（DOM / Canvas / SwiftUI 各自实现）。
- 不统一「交互触发」（hover / scroll / drag）——那层无法统一。
- 不重写 film 的 `lib/`、`engine.js`、`transitions.js`。
- 不要求 motion-lexicon 作者接受——core 是独立仓库。

---

## 2. 设计原则

1. **内核不做渲染。** 只输出数据、曲线、spec、代码字符串。
2. **纯函数。** 所有曲线是 `f(t) → v`，无状态、无随机（随机交给调用方种子）。
   这与 film 项目的「画面是 t 的纯函数」铁律一致。
3. **框架无关。** 一份代码三种形态：ESM（Node/构建）、UMD（`<script>`）、Node API（lint/测试）。
   静态站、Canvas、命令行都能加载。
4. **数据驱动。** 术语 / 曲线 / 语法都是 JSON，代码只负责解释。
5. **能力是数据。** 每个术语声明 `platforms`，导出器按它拒绝或降级，不再靠运行时猜测。
6. **增量可落地。** 与现有项目并存，不要求一次性重写；每个阶段都能独立交付、独立验证。
7. **明确的不支持。** `unavailable` 是合法状态，导出器不产出代码、只给原因——
   修掉词典「默默换成另一种语言」的老毛病。

---

## 3. 架构总览

```
motion-core/                         ← 独立仓库，唯一真相源
├── vocab/
│   ├── terms.v1.json                ← 术语（中英 / 别名 / 分类 / 适用 / 慎用 / 来源）
│   ├── curves.v1.json               ← 曲线注册表（名字 → 定义 + 各平台等价物）
│   └── grammar.film.v1.json         ← 8 种影视语法 + 转场表
├── spec/
│   └── motion-spec.schema.json      ← MotionSpec 结构定义
├── src/
│   ├── curves.js                    ← 纯函数实现（bezier / spring / back / elastic / steps …）
│   ├── registry.js                  ← byName / byCategory / platforms / alias
│   ├── spec.js                      ← MotionSpec 归一化 + 校验
│   ├── exporters/
│   │   ├── css.js                   ← transition / keyframes
│   │   ├── waapi.js
│   │   ├── gsap.js  framer.js
│   │   ├── swift.js  compose.js  tailwind.js
│   │   ├── film-mo.js               ← MO.anim(...) 形式
│   │   ├── film-rk.js               ← ease(name,k) 形式
│   │   ├── film-camera.js           ← CAM.track events 形式
│   │   └── json.js                  ← 原样 spec（喂场景）
│   └── lint.js
├── bin/motion-lint
├── test/
└── DESIGN.md
```

### 3.1 数据流

```
                    ┌─────────────────────────────────────┐
                    │  vocab/*.json  （人写 / 工具生成）   │
                    └──────────────┬──────────────────────┘
                                   │ 加载 + 校验
                                   ▼
                    ┌─────────────────────────────────────┐
                    │  registry  （byName / platforms）   │
                    └──────┬───────────────┬──────────────┘
                           │               │
                    曲线   │               │  术语+spec
                           ▼               ▼
                    ┌─────────────┐  ┌──────────────┐
                    │  curves.js  │  │   spec.js    │
                    └──────┬──────┘  └──────┬───────┘
                           └───────┬────────┘
                                   ▼
                    ┌─────────────────────────────────────┐
                    │           exporters/*               │
                    └───────┬──────────┬──────────┬───────┘
                            │          │          │
                     ┌──────▼───┐ ┌────▼─────┐ ┌──▼────────┐
                     │ 词典站点 │ │ film 工程 │ │ vibe-reel │
                     └──────────┘ └──────────┘ └───────────┘
```

---

## 4. 数据模型

### 4.1 曲线注册表 `vocab/curves.v1.json`

```json
{
  "version": 1,
  "curves": [
    {
      "name": "k75",
      "label": { "zh": "Kurzgesagt 75% 影响", "en": "Kurzgesagt 75% influence" },
      "family": "out",
      "fn": "bezier(0.75, 0, 0.25, 1)",
      "params": [],
      "equiv": {
        "css": "cubic-bezier(0.75, 0, 0.25, 1)",
        "waapi": "cubic-bezier(0.75, 0, 0.25, 1)",
        "gsap": "power2.out",
        "framer": "easeOut",
        "mo": "MO.k75",
        "rk": "E.out"
      },
      "platforms": {
        "css": "native", "waapi": "native", "gsap": "approximate",
        "framer": "approximate", "swift": "unavailable",
        "compose": "unavailable", "tailwind": "approximate",
        "film-mo": "native", "film-rk": "native", "json": "native"
      },
      "note": "Kurzgesagt 角色/物体动作的主力曲线。"
    },
    {
      "name": "spring",
      "label": { "zh": "弹簧", "en": "Spring" },
      "family": "spring",
      "fn": "spring({duration: 0.5, bounce: 0.15})",
      "params": [
        { "name": "duration", "default": 0.5, "min": 0.1, "max": 3, "unit": "s" },
        { "name": "bounce", "default": 0.15, "min": 0, "max": 1 }
      ],
      "equiv": { "mo": "MO.spring", "rk": "E.spring" },
      "platforms": { "css": "unavailable", "waapi": "unavailable", "gsap": "native",
                     "framer": "native", "swift": "native", "compose": "native",
                     "film-mo": "native", "film-rk": "native", "json": "native" }
    }
  ]
}
```

**字段说明**

| 字段 | 含义 |
|---|---|
| `name` | 主名，全局唯一。用 CSS / 影视通用命名（驼峰） |
| `family` | `in` / `out` / `in-out` / `spring` / `back` / `elastic` / `bounce` / `steps` / `special` |
| `fn` | 声明式定义，解析成纯函数。支持 `linear` / `bezier(...)` / `power(n)` / `sine` / `expo` / `back(s)` / `elastic` / `bounce` / `spring({..})` / `steps(n)` / `sampled([...])` |
| `params` | 参数化曲线的参数清单（含默认值、范围） |
| `equiv` | 各平台的等价写法。缺失表示该平台无对应写法 |
| `platforms` | `native` / `approximate` / `unavailable` |
| `aliases` | 别名数组，见 4.1.1 |

#### 4.1.1 命名冲突必须显式解决

现状已经存在冲突，registry 必须处理：

| 名字 | motion-lexicon | film `MO` | 处置（已定） |
|---|---|---|---|
| `snappy` | `bezier(0.85,0,0.15,1)` | `spring({duration:0.5,bounce:0.15})` | **`snappy` 归 spring**（MO 用法更明确）；bezier 那条改名 **`quick-cut`** |
| `smooth` | `smoothstep`（三次 `3t²−2t³`） | `smooth`（五次 `6t⁵−15t⁴+10t³`，manim） | **`smooth` 归五次**（MO / manim 语义）；三次那条叫 **`smoothstep`** |
| `spring` | 无 | `spring(t,{duration,bounce})` 参数化；vibe-reel `E.spring` 是固定曲线 | **参数化优先**；固定曲线登记为 `spring-default` |
| `emphasized` | `bezier(0.2,0,0,1)` | `bezier(0.2,0,0,1)` | 一致，直接合并 |
| `easeIn` / `cubicIn` | `easeIn = t³` | `cubicIn = t³` | 一致，`easeIn` 为主名，`cubicIn` 为别名 |
| `easeOut` / `cubicOut` | `easeOut = bezier(0.33,1,0.68,1)` | `cubicOut = 1−(1−t)³` | **不同曲线，都保留**；二者不可互作别名 |
| `backOut` / `easeOutBack` | `easeOutBack = bezier(0.34,1.56,0.64,1)` | `backOut(s=1.70158)` | 数学等价（bezier 是它的近似），**都保留**，标注近似关系 |

**规则**：主名冲突时，`v1` 必须给出唯一归属；另一方用别名或新名。lint 检查同名不同 `def`。

### 4.2 术语表 `vocab/terms.v1.json`

```json
{
  "version": 1,
  "categories": [
    { "id": "easing", "zh": "缓动与曲线", "en": "Easing & Curves" },
    { "id": "film-grammar", "zh": "影片与解说语法", "en": "Film & Explainer Grammar" }
  ],
  "terms": [
    {
      "id": "slide-in",
      "zh": "滑入入场",
      "en": "Slide-in entrance",
      "alias": ["slide in", "滑入", "从边缘进入"],
      "cat": "entrance",
      "vague": "从旁边滑进来",
      "say": "元素从右侧 46px 外滑入，480ms ease-out",
      "def": "新内容从屏幕外滑入视野，给出明确的来路。",
      "when": ["新内容进入视野", "抽屉 / 面板展开", "列表项补入"],
      "avoid": ["需要保持空间关系的场合（用 shared-element）", "高频微交互（显得慢）"],
      "trigger": "entrance",
      "curve": "easeOut",
      "spec": { "$ref": "specs/slide-in.json" },
      "source": { "where": "Material Design 动效指南", "url": "https://…" },
      "demo": { "kind": "frames", "stage": "track" }
    },
    {
      "id": "k75",
      "zh": "Kurzgesagt 75% 影响",
      "en": "Kurzgesagt 75% influence",
      "alias": ["k75", "75% influence"],
      "cat": "film-grammar",
      "vague": "像科普片那种很顺的减速",
      "say": "这条动效用 k75，起步快、长尾落定",
      "def": "Kurzgesagt 在动效指南里给出的主力曲线：75% influence 的 ease-out。",
      "when": ["角色 / 物体的位移动作", "科普片的主体运动"],
      "avoid": ["UI 微交互（太拖）", "需要快速响应的点击反馈"],
      "trigger": "time",
      "curve": "k75",
      "spec": { "$ref": "specs/k75.json" },
      "source": { "where": "Kurzgesagt 动效指南 §6.2", "url": "https://…" },
      "demo": { "kind": "curve", "stage": "curve" }
    }
  ]
}
```

**与 motion-lexicon 现有字段的对应**

| 现有字段 | core 字段 | 说明 |
|---|---|---|
| `id` / `zh` / `en` / `cat` / `alias` | 同名 | 直接迁移 |
| `vague` / `say` / `def` | 同名 | 直接迁移 |
| `code` | 删除 | 由 exporter 生成，不再手存 |
| `demo` | `demo` | 保留，但 `kind` 改成引用 spec + 演示方式 |
| — | `when` / `avoid` | **新增**，补审查报告指出的缺口 |
| — | `source` | **新增**，film-grammar 类必填 |
| — | `spec` | **新增**，统一动效规格 |
| — | `trigger` | `time` / `entrance` / `exit` / `hover` / `press` / `scroll` / `drag` |

**触发方式**是统一的关键分类：只有 `trigger: time` 的术语能被 film 直接消费；
其余术语在 film 端标 `unavailable`，但曲线部分仍可复用。

### 4.3 MotionSpec `spec/motion-spec.schema.json`

```json
{
  "id": "slide-in",
  "version": 1,
  "timeline": [
    {
      "id": "move",
      "target": "self",
      "prop": "translateX",
      "from": 46,
      "to": 0,
      "unit": "px",
      "start": 0,
      "dur": 0.48,
      "ease": "easeOut"
    },
    {
      "id": "fade",
      "target": "self",
      "prop": "opacity",
      "from": 0,
      "to": 1,
      "start": 0,
      "dur": 0.32,
      "ease": "easeOut"
    }
  ],
  "loop": { "count": 1, "direction": "normal", "fill": "both" },
  "stagger": { "count": 1, "step": 0, "from": "start" },
  "camera": [
    { "at": 0, "kind": "glide", "to": { "x": 960, "y": 540, "z": 1 }, "dur": 0.48, "ease": "easeOut" }
  ],
  "reducedMotion": { "strategy": "fade", "dur": 0.18 }
}
```

**规则**

1. `start` / `dur` 单位**秒**；导出器负责转各平台单位（ms / 帧）。
2. `prop` 取值：`translateX` / `translateY` / `translateZ` / `scale` / `scaleX` / `scaleY` /
   `rotate` / `opacity` / `clip-path` / `filter` / `color`。
3. 一条 timeline 项 = 一次动作；多条按 `start` 排序，允许并行（不同 `prop` 或不同 `target`）。
4. `ease` 必须是 `curves.v1.json` 里存在的主名或别名。
5. `loop.count` 为整数；`direction` ∈ `normal / reverse / alternate / alternate-reverse`；
   `fill` ∈ `none / forwards / backwards / both`。
6. `stagger.from` ∈ `start / end / center`；`count` 必须 ≥ 1。
7. `reducedMotion.strategy` ∈ `fade / instant / none`；**必填**（词典已把减弱动效当一等公民）。
8. `camera` 可选，仅 `trigger: time` 的术语使用；`kind` ∈ `glide / pan / slam / shake / cut / push`，
   与 film 的 `CAM.track` 事件一一对应。

### 4.4 影视语法表 `vocab/grammar.film.v1.json`

复用 terms schema，但 `cat: "film-grammar"`，并增加影视专属字段：

```json
{
  "id": "kurzgesagt",
  "zh": "Kurzgesagt 主体动作",
  "en": "Kurzgesagt character motion",
  "cat": "film-grammar",
  "grammar": {
    "shot": "medium / close-up",
    "driver": "time",
    "signature": "黑色角色 + 75% influence 曲线 + 强烈形变",
    "recurring": ["形变", "逐层入场", "对比色高光"]
  },
  "curve": "k75",
  "source": { "where": "Kurzgesagt 动效指南", "url": "https://…" }
}
```

内容来源：`huashu-art-motion/references/09-视频动画语法.md`（8 种语法）、
`film_ai_three/代码工程/transitions.js`（几十种转场）、`lib/motion.js` 注释里的选型口诀。

---

## 5. 曲线层

### 5.1 实现

```
curves.v1.json ──声明──▶ curves.js ──实现──▶ registry
                                              ├─ byName(name) → fn
                                              ├─ byCategory(cat) → [names]
                                              ├─ platforms(name) → {...}
                                              └─ aliases → name
```

`src/curves.js` 提供的原语：

| 原语 | 说明 | 来源 |
|---|---|---|
| `linear()` | 匀速 | — |
| `bezier(x1,y1,x2,y2)` | 牛顿迭代求 y | 照搬 `MO.bezier` / `ease.js bezierFn`（两者一致） |
| `power(n)` | `t^n` 族 | `cubicIn/Out` 等 |
| `sine()` | 正弦族 | — |
| `expo()` | 指数族 | — |
| `back(s=1.70158)` | 过冲 | 照搬 `MO.backOut` |
| `elastic()` | 橡皮筋 | 照搬 `MO.elasticOut` / `ease.js easeOutElastic` |
| `bounce()` | 落地弹跳 | 照搬 `ease.js easeOutBounce` |
| `spring({duration,bounce})` | SwiftUI 参数化弹簧 | 照搬 `MO.spring` |
| `steps(n)` | 离散台阶 | 照搬 `ease.js EASE.steps` |
| `sampled(points)` | 任意曲线（用于无法解析表达的形状） | 新增 |
| `compose(fns)` | 串联（先压缩再位移等） | 新增 |

**约束**

- 输入 clamp 到 `[0,1]`，输出允许超出（过冲）。
- 无状态、无随机、无 `Date.now()`。
- 每个曲线与参考实现逐点对比，误差 `< 1e-6`（见 §10）。

### 5.2 别名与命名归一

- 主名用 CSS / 影视通用名。
- 别名表覆盖三种习惯：

```
"ease-out"    → "easeOut"
"expo-out"    → "easeOutExpo"
"power3.out"  → "easeOutExpo"
"快出慢停"     → "easeOut"
"k75"         → "k75"
"苹果发布会"   → "appleOut"
"AE Easy Ease"→ "easyEase"
```

- lint 检查：别名不得指向不存在的曲线；不同术语不得抢同一别名。

---

## 6. Exporters

### 6.1 接口

```js
/**
 * @param {object} spec    MotionSpec
 * @param {string} target  css | css-keyframes | waapi | gsap | framer | swift | compose |
 *                          tailwind | film-mo | film-rk | film-camera | json
 * @param {object} options { params?: {...}, lang?: 'zh'|'en' }
 * @returns {{ code: string, status: 'native'|'approximate'|'unavailable',
 *             warnings: string[], reason?: string }}
 */
export function export(spec, target, options) { … }
```

**铁律**

- `status: unavailable` 时 `code` 必须为空字符串，只给 `reason`。
- `approximate` 必须在 `warnings` 里说明差异（例：「Framer 无同名曲线，用最近似命名，可能与预览有差」）。
- 导出器**不得**退回成另一种语言或另一种曲线——这是词典 v306 之前的错误。

### 6.2 平台映射表

| target | 时长 | 曲线 | 循环 | 错峰 |
|---|---|---|---|---|
| `css-transition` | `transition: <prop> <ms> <ease>` | css equiv；缺失则 `linear()` 采样 33 点 | ❌ | ❌ |
| `css-keyframes` | `animation: <name> <ms> <ease> <delay> <iter> <dir> <fill>` | 同上 | `infinite` / 次数 | `calc(var(--i) * <step>ms)` |
| `waapi` | `el.animate(kf, {duration, easing, delay, iterations, direction, fill})` | 同上 | 同上 | `delay` |
| `gsap` | `gsap.to(sel, {x, duration, ease})` | `GSAP_NAME` 或 `CustomEase` | `repeat` / `yoyo` | `stagger` |
| `framer` | `<motion.div animate={} transition={{duration, ease}}/>` | 命名数组 `[x1,y1,x2,y2]` | `repeat` / `repeatType` | `staggerChildren` / `delayChildren` |
| `swift` | `UIView.animate(withDuration:delay:options:animations:)` | curve 枚举 | `options` | `delay` |
| `compose` | `tween(durationMillis, easing)` | 内置 `Easing` | `repeatMode` | `delayMillis` |
| `tailwind` | `transition-[...] duration-[...] ease-[...]` | 命名或任意值 | ❌ | `delay-[...]` |
| **`film-mo`** | `MO.anim(lt, start, dur, MO.byName(ease))` | 直接 | `MO.seg` + 循环 | 逐项 `start + i*step` |
| **`film-rk`** | `ss(t, a, b)` / `ease(name, k)` | 直接 | 窗口函数 | 逐项偏移 |
| **`film-camera`** | `CAM.track(base, events, t)` | 事件表 | — | — |
| `json` | 原样 spec | — | — | — |

### 6.3 film-mo exporter 示例

输入 `slide-in` spec，输出：

```js
// motion-core → film-mo · slide-in · 480ms · easeOut · 5 项 · 错峰 90ms
const DUR = 0.48, START = 0, STEP = 0.09, COUNT = 5;
const ease = MO.byName('easeOut');
for (let i = 0; i < COUNT; i++) {
  const lt = t - (START + i * STEP);
  const k = ease(MO.seg(lt, START, START + DUR));   // 0→1
  el[i].x = 46 * (1 - k);                            // px
  el[i].opacity = Math.min(1, lt / 0.32);            // fade 段
}
```

### 6.4 film-camera exporter 示例

把 spec 的 `camera` 段转成 `CAM.track` 事件：

```js
// spec.camera: [{ at: 0, kind: 'glide', to: {x:960,y:540,z:1}, dur: 0.48, ease: 'easeOut' }]
const cam = CAM.track({ x: 1240, y: 540, z: 1 }, [
  { at: 0, kind: 'glide', x: 960, y: 540, dur: 0.48 }
], t);
```

映射规则：`glide` / `pan` → `CAM.track` 的 `glide|pan`；`slam` → `slam`（带 `from`）；
`shake` → `shake`（带 `amp`）；`push` → `CAM.pushTo`；`cut` → `cut`。

### 6.5 json exporter

输出 resolved spec：把 `ease` 名字换成 33 点采样表，把 `camera` 换成事件表，
供 `scenes/*.js` 直接 `import` 或 `fetch`。这是「配方 → 镜头 spec」的落点。

---

## 7. Lint

```bash
motion-lint vocab/ --strict
```

| # | 检查 | 级别 |
|---|---|---|
| 1 | 术语 `id` 唯一、`cat` 必须存在 | error |
| 2 | `curve` 字段必须在 curves 表中 | error |
| 3 | 曲线主名唯一、`fn` 可解析、参数有默认值 | error |
| 4 | 别名不得指向不存在的曲线；不同术语不得抢同一别名 | error |
| 5 | spec：timeline 非空、`start`/`dur` 有限且 ≥ 0、`prop` 合法 | error |
| 6 | spec：`ease` 必须存在、`loop`/`stagger`/`reducedMotion` 合法 | error |
| 7 | `reducedMotion` 必填 | error |
| 8 | `platforms` 声明为 `native` 的 target，导出器必须真的能产出代码 | error |
| 9 | `cat: film-grammar` 的术语必须有 `source` | error |
| 10 | 每个术语至少一条可用导出（除显式声明 `unavailable`） | warn |
| 11 | `trigger` 不是 `time` 的术语，在 film 端必须标 `unavailable` | warn |
| 12 | 术语 `zh`/`en` 齐全 | warn（i18n 完整性） |

输出：人类可读 + JSON；退出码非 0。

---

## 8. 三端接入

### 8.1 motion-lexicon

| 现有文件 | 接入方式 |
|---|---|
| `assets/data1.js` / `data2.js` / `runtime.js` / `compound.js` | 术语对象由 `vocab/terms.v1.json` 生成；保留薄适配层，避免一次性重写 244 条 |
| `assets/ease.js`（`EASE` / `EASE_LIST`） | 由 `curves.v1.json` + `src/curves.js` 替代 |
| `assets/lab.js`（8 个 tab） | 改调 core exporters；新增 `film-mo` / `film-rk` 两个 tab |
| `assets/dialects.js`（`compilable` / `status`） | 能力判断改读 core 的 `platforms` 数据 |
| `check.sh` | 保留原检查，追加 `motion-lint` |
| `index.html` | 加 `core.umd.js` 的 `<script>` |

**归属**：motion-lexicon 是作者 linhuangjie 的仓库，已停更 3 周。
两条路：① 向上游提 PR；② fork 后自行维护。**需用户决策**。

### 8.2 film_ai_three / film_ai_chair

| 现有文件 | 接入方式 |
|---|---|
| `lib/motion.js`（`MO`） | 保留；新增 `lib/core.js`（core UMD），提供 `MO.byName()`；逐文件把 `MO.*` 委托给 core |
| `lib/camera.js`（`CAM`） | 保留；新增 `lib/core-camera.js`，做 `spec.camera ↔ CAM.track events` 双向转换 |
| `examples/*.json`（cues） | 由 core 的 json exporter 生成 |
| `engine.js` / `eras.js` / `transitions.js` | **不动**（遵守现有作者规范） |
| 各 `scenes/*.js` | **不动**；只在需要时把硬编码曲线换成 `MO.byName('…')` |

**收益**：场景代码可以用词典的术语名写曲线，例如
`const e = MO.byName('k75')(k);` 取代 `MO.bezier(0.75,0,0.25,1)(k)`。

### 8.3 vibe-reel

| 现有文件 | 接入方式 |
|---|---|
| `engine/render_api.js`（`E` 表、`ease()`） | `E` 表换成 `core.byName()`；`ease(name,k)` 保留为薄封装 |
| `engine/kit.js`（组件的 `fade` / `ss`） | **不动**——那是窗口函数，不是曲线 |
| `kr.py` 的 `new` 模板 | 工程内 vendor 一份 `core.umd.js` |
| `engine/audio.py` 等 | 不动 |

**约束**：技能包是只读安装，改动要么提回 skill 仓库，要么在工程内 vendor。

---

## 9. 迁移路线

每个阶段独立交付、独立验证。

### Phase 0 — 建 core（不碰任何现有项目）

- [ ] 仓库骨架、ESM + UMD 构建
- [ ] `curves.v1.json`：合并 14 条 Web 曲线 + 32 条 MO 曲线，去重、解决冲突（`snappy` 等）
- [ ] `src/curves.js` + `src/registry.js`
- [ ] `spec/motion-spec.schema.json` + `src/spec.js`
- [ ] `src/lint.js`，全量 lint 通过
- [ ] 曲线层测试（与 MO / ease.js 逐点对比）

**验收**：`motion-lint` 对空词表通过；随机抽 10 条曲线与参考实现误差 < 1e-6。

### Phase 1 — 词典接入

- [ ] `vocab/terms.v1.json`：迁移 244 条术语，补 `when` / `avoid` / `source`
- [ ] 新增 `film-grammar` 分类（8 种语法 + 代表转场）
- [ ] `lab.js` 接 core exporters，新增 `film-mo` / `film-rk` tab
- [ ] `dialects.js` 能力判断改读 core
- [ ] `check.sh` 追加 `motion-lint`
- [ ] 端到端：抽 20 条术语，导出到 film-mo，canvas 渲一帧无异常

**验收**：词典测试与自检全通过；`film-mo` tab 能产出可运行代码。

### Phase 2 — film 接入

- [ ] `lib/core.js` + `MO.byName()`
- [ ] `lib/core-camera.js`（spec.camera ↔ CAM.track）
- [ ] `examples/*.json` 改由 core json exporter 生成
- [ ] 选 3 个场景做试点：硬编码曲线 → `MO.byName('术语名')`
- [ ] 试点场景渲染结果与改前一致（截图对比）

**验收**：试点场景逐帧一致；`lib/` 原有文件未改。

### Phase 3 — vibe-reel 接入

- [ ] `E` 表接 core；`ease()` 变薄封装
- [ ] `kr.py new` 模板加 `core.umd.js`
- [ ] 用一条现有片子（如 `films/onion-tears`）验证 `ease()` 行为不变

### Phase 4 — CI 闭环

- [ ] core 的 lint 接进三端发布
- [ ] 取代词典现在「Pages 直接部署、不跑自检」的状态
- [ ] 词典 `check.sh` 更名 `check.py`（它本来是 Python）

---

## 10. 测试策略

| 层 | 方法 |
|---|---|
| **曲线层** | 每个曲线与参考实现（`MO` / `ease.js`）在 `t∈[0,1]` 上取 1001 点对比，误差 `< 1e-6` |
| **导出器** | 每个 target 产出可解析代码：JS/CSS 用 `node --check`；Swift/Kotlin 做语法检查；快照测试 |
| **spec 校验** | 边界用例：0 时长、负 delay、未知曲线、缺失 `reducedMotion`、`stagger.count=0` |
| **端到端** | 随机抽 N 条术语 → 导出 film-mo → canvas 渲一帧 → 无异常、无 NaN |
| **lint** | 全量术语跑一遍，0 error |
| **回归** | 词典现有测试（atelier / atlas / dialects / page-book）必须继续通过 |

---

## 11. 边界（明确不做）

1. **不做渲染器。** DOM / Canvas / SwiftUI 各自实现，core 只出代码字符串。
2. **不统一交互触发。** hover / scroll / drag 无法用时间轴表达，留在词典；
   core 只管「时间 → 数值」那部分。
3. **不重写 film 的 `lib/`。** 只并存、逐步收敛；遵守现有「不改 lib」的规矩。
4. **不要求 motion-lexicon 作者接受。** core 独立仓库，词典侧可 fork。
5. **不追求全平台 native。** `unavailable` 是合法状态，明确标出好过默默替换。
6. **不动 vibe-reel 的引擎级问题**（如 `audio.py` 的下混削波）——那是独立议题，
   在工程内绕过或提回 skill 仓库，不塞进 core。

---

## 12. 第一期交付清单

- [x] `vocab/curves.v1.json`（56 条曲线，含冲突处置）
- [x] `src/curves.js` + `src/registry.js` + 曲线层测试
- [x] `spec/motion-spec.schema.json` + `src/spec.js`
- [x] exporters：`css` / `css-transition` / `waapi` / `film-mo` / `film-rk` / `film-camera` / `json`
- [x] `bin/motion-lint` + 全量 lint 通过（0 error，5 条 Phase 0 预期提示）
- [x] 端到端验证（`examples/` + `scripts/demo.mjs`）
- [x] 三端接入方案写进 README

## 12.1 Phase 1 交付清单（内容层）

- [x] `vocab/terms.v1.json`：244 条术语、17 类（含新增 `film-grammar`）、80 条含 MotionSpec
- [x] `vocab/grammar.film.v1.json`：8 种影视语法 + 46 个转场 + 曲线选型指引
- [x] `vocab/alias-conflicts.v1.json`：上游 14 组别名冲突的处置记录
- [x] 术语 `platforms` 从 spec 与曲线集合派生，与导出器实测一致
- [x] 37 项测试全通过（含「平台能力声明 vs 导出结果」一致性检查）
- [x] `scripts/gen-terms.mjs` / `gen-grammar.mjs`：从上游数据可重复生成

## 12.2 Phase 2 交付清单（film 接入）

- [x] `src/browser.js`：浏览器入口 `createBrowserCore(vocabs)`
- [x] `scripts/build-umd.mjs`：手写 ESM → UMD 构建（无第三方打包器）
- [x] `dist/core.umd.js`：390 KB，暴露 `window.MC`，Node/浏览器双环境验证通过
- [x] film_ai_three / film_ai_chair 各新增 `lib/core.js`、`lib/core-mo.js`、`lib/core-camera.js`
- [x] `MO.byName()` / `MO.term()` / `MO.exportTerm()` / `CAM.specToEvents()` / `CAM.trackFromSpec()`
- [x] `scripts/verify-film-integration.py`：API 检查 + 像素级回归
- [x] **验收：两个工程均 0 pageerror、像素差异 0.000000%**（证明只新增、未改坏既有渲染）
- [x] `MOTION-CORE.md` 接入说明

**未改动**：`lib/motion.js`、`lib/camera.js`、`engine.js`、`eras.js`、`transitions.js`、各 `scenes/*.js`
——遵守了工程原有的「不要改 lib」规矩。

## 12.3 Phase 3 交付清单（词典接入，本地 fork）

- [x] `assets/core.js`：UMD 构建引入词典
- [x] `assets/ease.js` 改为 core 的兼容层：旧键名保留（`customBezier` / `easeInSine` / `easeOutQuad` …），新增 core 全部曲线，`EASE_LIST` 从 14 条扩到 56 条
- [x] `assets/lab.js` 的 8 个手写导出 tab → core 的 **10 个 tab**（新增「影片 / Canvas（MO）」「知识短片（RK）」）
- [x] core 补齐 5 个导出器（GSAP / Framer / Swift / Compose / Tailwind），**词典无回归**
- [x] `assets/dialects.js` 能力判断改读 core 的 `platforms`；「代码写法」菜单新增影片目标
- [x] `check.sh` 增加 `core` 检查项（跑 core lint + 校验 `assets/core.js` 与 dist 同步）
- [x] 词典 4 个测试全通过（dialects 测试按新目标更新）
- [x] 词典版本 337 → 338
- [x] **验收：`verify-lexicon-integration.py` 通过**（244 张卡片渲染、10 个 tab、4 个代码写法目标、0 pageerror）

**未改动**：词典的数据文件（`data1.js` / `data2.js` / `runtime.js` / `compound.js`）、`app.js`、`motion.js`、`i18n.js`。

**待办**：本地 fork 已就绪，等网络/凭据恢复后推上游或提 PR。

## 12.4 Phase 4 交付清单（vibe-reel 接入）

- [x] `engine/core.js`：UMD 构建进 vibe-reel 技能目录
- [x] `engine/render_api.js`：**只新增** core 曲线与 `E.byName()`，历史 `E` 表逐字节保留（既有片子依赖它的逐帧确定性）
- [x] `RK.core` 暴露整份词表；`E.byName / E.has / E.names / E.entry`
- [x] `kr.py` 的 `INDEX_TEMPLATE` 加载 `engine/core.js`
- [x] `films/onion-tears/index.html` 同步
- [x] core 补 `quadInOut`（vibe-reel 的 `E.io` 就是它，core 原来缺）
- [x] `scripts/verify-vibe-reel-integration.py`：API + 像素回归（与跨上下文噪声对比）
- [x] **验收：3 个时刻的 with/without 差异与 with/with 噪声比值 0.94–1.0**；`kr.py selftest` 两次抓帧逐字节一致

**命名差异（有意保留）**：vibe-reel 的 `E.smooth` 是三次 smoothstep；core 的 `smooth` 是五次 manim smooth，core 的 `smoothstep` 才与 vibe-reel 的 `smooth` 同一条。

**未改动**：`engine/render_api.js` 的历史 `E` 表与 `ease()`、`engine/kit.js`、`engine/styles.js`、`audio.py`、`qa.py`、任何 `film.js`。

**待办**：技能包改动应提回 vibe-reel 仓库（`alchaincyf/vibe-reel` 或用户自己的副本）。

## 12.5 Phase 5 交付清单（CI 闭环）

- [x] `motion-core/.github/workflows/ci.yml`：lint（--strict）+ 37 项测试 + `dist/` 同步校验 + 词表可重复生成校验
- [x] `motion-core/.gitattributes`：固定 LF，避免 `git diff --exit-code` 被换行符漂移误报
- [x] `motion-core/package.json` 增加 `ci` / `gen` 脚本
- [x] `motion-lexicon-fork/.github/workflows/pages.yml` 拆成 `check` → `deploy`，**自检不过就不部署**
- [x] `scripts/verify-all.py`：一键跑 9 项（core 4 项 + 三个消费方 5 项）
- [x] `templates/ci/film-ai.yml` / `templates/ci/vibe-reel.yml`：两个非 git 工程的 CI 模板
- [x] film 工程 `lib/core.sha256` 哈希清单（供 CI 校验 core.js 与构建产物同步）
- [x] **验收：`python scripts/verify-all.py` → 9/9 通过**

**仍待人工处理**：词典 fork 与 motion-core 都还没推到 GitHub（网络/凭据），
所以两个仓库的 CI 目前只在本地跑过，尚未在 GitHub Actions 上实跑。

---

## 13. 决策（已定）

| # | 问题 | 决定 | 理由 |
|---|---|---|---|
| 1 | motion-lexicon 归属 | **先 fork，同时向上游提一份 PR** | 作者已停更 3 周，PR 大概率无回应；但提一份表明善意，且 core 独立于词典，fork 不阻塞 Phase 0 |
| 2 | `snappy` 冲突归属 | **`snappy` 归 spring**；bezier 那条改名 `quick-cut` | MO 的 `snappy` 语义更明确（bounce 0.15 的弹簧），且 `quick-cut` 更贴切地描述了那条贝塞尔的用途 |
| 3 | 术语 ID 是否沿用现有 | **沿用**（`slide-in` 等） | 迁移成本最低；244 条现有 ID 已被词典站点深链引用 |
| 4 | 是否保留 `demo` 字段 | **保留** | `demo` 里有 spec 表达不了的演示（3D、shader、粒子球等），由 spec 派生会丢信息 |
| 5 | core 是否发 npm | **先 vendor，跑通再考虑发 npm** | 三端接入方式未验证前不引入包管理依赖；vendor 一份 UMD 即可 |

**补充决定**：`smooth` 冲突按 §4.1.1 处置——`smooth` = 五次（MO/manim），三次那条叫 `smoothstep`。

---

*本设计稿基于对以下代码的实际阅读：*
- *motion-lexicon：`assets/ease.js`、`assets/lab.js`、`assets/dialects.js`、`assets/data1.js`、`assets/app.js`、`docs/project-review-2026-10-11.md`*
- *film_ai_three：`lib/motion.js`、`lib/camera.js`、`lib/kit.js`、`transitions.js`、`engine.js`、`eras.js`、`scenes/s02.js`、`examples/y1_kurzgesagt.json`、`时代作者规范.md`*
- *vibe-reel：`engine/render_api.js`、`references/components.md`、`SKILL.md`*
- *huashu-art-motion：`references/09-视频动画语法.md`、`README.md`*
- *films/onion-tears：`film.js`、`storyboard.md`、`index.html`*
