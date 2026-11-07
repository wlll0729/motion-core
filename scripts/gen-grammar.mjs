/* 生成 vocab/grammar.film.v1.json：8 种影视语法 + 转场表 + 曲线选型指引。
 *
 * 数据源：
 *   huashu-art-motion/references/09-视频动画语法.md  （8 种语法总览表）
 *   film_ai_three/代码工程/transitions.js            （45 个转场 + 代码注释）
 *   film_ai_three/代码工程/lib/motion.js             （曲线选型注释）
 *
 * 运行：node scripts/gen-grammar.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const HUASHU = join(ROOT, '..', 'huashu-art-motion', 'references', '09-视频动画语法.md');
const TRANSITIONS = join(ROOT, '..', 'film_ai_three', '代码工程', 'transitions.js');
const MOTION = join(ROOT, '..', 'film_ai_three', '代码工程', 'lib', 'motion.js');
const OUT = join(ROOT, 'vocab', 'grammar.film.v1.json');

/* ---------------- 8 种语法（人工整理自 huashu 总览表） ---------------- */

const GRAMMARS = [
  {
    id: 'y1-kurzgesagt',
    zh: 'Kurzgesagt 扁平科普',
    en: 'Kurzgesagt flat explainer',
    scope: '讲尺度、讲「里面是什么」、讲机制系统；娓娓道来的科普腔',
    core: '把抽象概念画成一个具体的物，放进能无限缩放的发光世界，相机在尺度之间穿行；环境轻轻动，主体在口播节点上变化',
    shot: '硬切镜头 7–9s，视觉单元每 4.6–6.7s 换一次',
    curves: ['k75', 'easyEase'],
    transitions: ['lensReveal', 'matchCut'],
    demo: 'demos/y1_kurzgesagt',
    source: { where: 'huashu-art-motion/references/09-视频动画语法.md · y1', url: 'https://github.com/alchaincyf/huashu-art-motion' }
  },
  {
    id: 'y2-vox',
    zh: 'Vox 拼贴',
    en: 'Vox collage',
    scope: '有真实档案、新闻、截图、人物的论证；「看这一句」「注意这个数字」',
    core: '论证摆在一张有真实材料的桌面上，相机像调查记者的眼睛在桌上移动，线和笔一顿一顿画上去',
    shot: '慢档中位 3.3s（一张卡 3–7s）；快档 1.4–1.8s',
    curves: ['sineInOut', 'longTail', 'steps'],
    transitions: ['cut', 'same', 'slidePush'],
    demo: 'demos/y2_vox',
    source: { where: 'huashu-art-motion/references/09-视频动画语法.md · y2', url: 'https://github.com/alchaincyf/huashu-art-motion' }
  },
  {
    id: 'y3-whiteboard',
    zh: '白板手绘（RSA）',
    en: 'Whiteboard (RSA)',
    scope: '推理链、步骤、「为什么」；边讲边推导',
    core: '说一句写一句，相机跟着论证在一张大白板上移动，最后拉远看全图',
    shot: '每块停留中位 6.6s',
    curves: ['sineInOut'],
    transitions: ['same'],
    demo: 'demos/y3_whiteboard',
    source: { where: 'huashu-art-motion/references/09-视频动画语法.md · y3', url: 'https://github.com/alchaincyf/huashu-art-motion' }
  },
  {
    id: 'y4-storytime',
    zh: '故事型简笔角色',
    en: 'Storytime stick figures',
    scope: '第一人称讲经历、翻车、笑点；观众要的是「这个人」',
    core: '口播是主角，画面是给口播配的表情包：姿势 0.1s 快切后定住，笑点靠切到反应特写并在那一下闭嘴',
    shot: 'ASL 2.43s（中位 1.87s）',
    curves: ['expoOut', 'settle'],
    transitions: ['cut', 'smash', 'whip'],
    demo: 'demos/y4_storytime',
    source: { where: 'huashu-art-motion/references/09-视频动画语法.md · y4', url: 'https://github.com/alchaincyf/huashu-art-motion' }
  },
  {
    id: 'y5-kinetic-type',
    zh: '动态文字',
    en: 'Kinetic typography',
    scope: '清单、「X 个阶段」、金句、数字开场、章节卡',
    core: '字就是演员：关键词踩重音砸进来，主词大到一眼读完，画面永远只有一个焦点',
    shot: '一小节一个镜头（120BPM 约 2s）',
    curves: ['expoOut', 'springHz', 'expoIn'],
    transitions: ['fillZoom', 'bands', 'push'],
    demo: 'demos/y5_kinetic_type',
    source: { where: 'huashu-art-motion/references/09-视频动画语法.md · y5', url: 'https://github.com/alchaincyf/huashu-art-motion' }
  },
  {
    id: 't1-3b1b',
    zh: '3Blue1Brown',
    en: '3Blue1Brown',
    scope: '讲一个机制怎么一步步变成另一个东西：网络、矩阵、梯度、概率',
    core: '黑底上只放正在讲的那一个东西，用 Transform 把上一个概念直接变成下一个，颜色＝概念名，几乎不切',
    shot: '单个动画 1–3s＋停 1s；一个概念 8–20s',
    curves: ['smooth'],
    transitions: ['zoomThrough', 'fadeShift'],
    demo: 'demos/t1_3b1b',
    source: { where: 'huashu-art-motion/references/09-视频动画语法.md · t1', url: 'https://github.com/alchaincyf/huashu-art-motion' }
  },
  {
    id: 't2-keynote-ui',
    zh: '发布会界面',
    en: 'Keynote UI',
    scope: '产品/功能发布、版本更新、教程步骤、参数公布',
    core: '一屏一件事，产品截图或实物当主角并推近，名词和数字在口播说到时落定；光斑底、玻璃卡是可选包装，慎用',
    shot: '演讲一屏 5–8s；产品快剪 1.5–3s',
    curves: ['spring', 'appleOut'],
    transitions: ['blurPush', 'expandRect'],
    demo: 'demos/t2_keynote_ui',
    source: { where: 'huashu-art-motion/references/09-视频动画语法.md · t2', url: 'https://github.com/alchaincyf/huashu-art-motion' }
  },
  {
    id: 't3-finance-chart',
    zh: '财经图表',
    en: 'Finance charts',
    scope: '营收、股价、份额、拐点；观众会截图较真的数字',
    core: '先搭坐标系，再让数据长出来，最后只标一件事；数值永远诚实，动画只决定怎么出现',
    shot: '一张图 2.5–6s',
    curves: ['quintOut', 'smooth'],
    transitions: ['slidePush', 'zoomThrough'],
    demo: 'demos/t3_finance_chart',
    source: { where: 'huashu-art-motion/references/09-视频动画语法.md · t3', url: 'https://github.com/alchaincyf/huashu-art-motion' }
  }
];

/* ---------------- 转场表（从 transitions.js 抽取名字 + 注释） ---------------- */

function extractTransitions() {
  const lines = readFileSync(TRANSITIONS, 'utf8').split('\n');
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^  (\w+)\(c, A, B, p/);
    if (!m) continue;
    const notes = [];
    for (let j = i - 1; j >= 0 && /^\s*(\/\/\s*|\/\*)/.test(lines[j]); j--) {
      notes.unshift(lines[j].replace(/^\s*\/\/\s?/, '').trim());
    }
    out.push({
      id: m[1],
      zh: notes.join(' ') || undefined,
      source: { where: `film_ai_three/代码工程/transitions.js · ${m[1]}`, url: null }
    });
  }
  /* 「same」不在 transitions.js 里——它是相机运动式的同镜推进（y2/y3 语法的转场） */
  out.push({
    id: 'same',
    zh: '同镜推进（相机运动即转场，画面内容不变）',
    source: { where: 'huashu-art-motion/references/09-视频动画语法.md · y2/y3', url: 'https://github.com/alchaincyf/huashu-art-motion' }
  });
  return out;
}

/* ---------------- 曲线选型指引（从 lib/motion.js 注释抽取） ---------------- */

function extractCurveGuidance() {
  const src = readFileSync(MOTION, 'utf8');
  const head = src.slice(0, src.indexOf('// ---------- 时间片'));
  const lines = head.split('\n').map((l) => l.replace(/^\s*\/\/\s?/, '').trim()).filter(Boolean);
  return {
    note: lines.join(' '),
    source: { where: 'film_ai_three/代码工程/lib/motion.js · 文件头注释', url: null }
  };
}

/* ---------------- 组装 ---------------- */

const transitions = extractTransitions();
const guidance = extractCurveGuidance();

const vocab = {
  version: 1,
  note: '影视语法与转场表。grammars 是人工整理的语法条目；transitions 从 transitions.js 抽取；curveGuidance 是 MO 的选型注释。',
  grammars: GRAMMARS.map((g) => ({
    ...g,
    cat: 'film-grammar',
    /* 对齐 terms schema：vague/say/def 是检索与展示用的字段 */
    vague: g.scope,
    say: g.core,
    def: `${g.core} 镜头时长：${g.shot}。`,
    trigger: 'time'
  })),
  transitions,
  curveGuidance: guidance
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(vocab, null, 2) + '\n', 'utf8');

console.log(`写入 ${OUT}`);
console.log(`语法 ${vocab.grammars.length} 条，转场 ${transitions.length} 条`);
const noNote = transitions.filter((t) => !t.zh).map((t) => t.id);
if (noNote.length) console.log(`无注释的转场（${noNote.length}）：${noNote.join(', ')}`);
