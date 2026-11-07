#!/usr/bin/env python3
"""一键全量验证：motion-core 自身 + 三个消费方。

    python scripts/verify-all.py [--quick]

--quick 只跑不需要浏览器的部分（lint / 测试 / 构建一致性）。
默认跑全部，包括 4 个 Playwright 集成验证。

任何一项失败退出码非 0。
"""
import argparse, subprocess, sys, time
from pathlib import Path

for _s in (sys.stdout, sys.stderr):
    try: _s.reconfigure(encoding='utf-8', errors='replace')
    except Exception: pass

ROOT = Path(__file__).resolve().parent.parent
WORKSPACE = ROOT.parent
SKILL = Path.home() / '.agents' / 'skills' / 'vibe-reel'

if not (SKILL / 'engine' / 'render_api.js').exists():
    alt = WORKSPACE / 'skills' / 'vibe-reel'
    if (alt / 'engine' / 'render_api.js').exists():
        SKILL = alt

results = []


def run(name, cmd, cwd=ROOT, timeout=600):
    print(f'\n{"=" * 72}\n▶ {name}\n{"=" * 72}')
    t0 = time.time()
    r = subprocess.run(cmd, cwd=str(cwd), shell=isinstance(cmd, str),
                       capture_output=True, text=True, encoding='utf-8', errors='replace',
                       timeout=timeout)
    dt = time.time() - t0
    tail = '\n'.join((r.stdout or '').splitlines()[-6:])
    print(tail)
    if r.returncode:
        err = '\n'.join((r.stderr or '').splitlines()[-6:])
        print(err)
    ok = r.returncode == 0
    results.append((name, ok, dt))
    print(f'{"✓" if ok else "✗"} {name}  ({dt:.1f}s)')
    return ok


ap = argparse.ArgumentParser()
ap.add_argument('--quick', action='store_true')
args = ap.parse_args()

# ---- motion-core 自身 ----
run('core: lint', ['node', 'bin/motion-lint.js', 'vocab/', '--strict'])
run('core: test', ['node', '--test'] + [str(p) for p in sorted((ROOT / 'test').glob('*.test.mjs'))])
run('core: build', ['node', 'scripts/build-umd.mjs'])

# 构建产物必须与已提交的一致
r = subprocess.run(['git', 'diff', '--exit-code', '--', 'dist/'], cwd=str(ROOT),
                   capture_output=True, text=True)
results.append(('core: dist 与源码同步', r.returncode == 0, 0))
print(f'\n{"✓" if r.returncode == 0 else "✗"} core: dist 与源码同步')

if args.quick:
    print('\n--quick：跳过浏览器集成验证')
else:
    lexicon = WORKSPACE / 'motion-lexicon-fork'
    if (lexicon / 'index.html').exists():
        run('lexicon: check.sh', ['python', 'check.sh'], cwd=lexicon)
        run('lexicon: 集成验证', ['python', 'scripts/verify-lexicon-integration.py'])
    else:
        print('\n::notice::未找到 motion-lexicon-fork，跳过词典验证')
        results.append(('lexicon: 集成验证', True, 0))

    for name, proj in [
        ('film_ai_three', WORKSPACE / 'film_ai_three' / '代码工程'),
        ('film_ai_chair', WORKSPACE / 'film_ai_chair' / '代码工程'),
    ]:
        if (proj / 'index.html').exists():
            run(f'film: {name}', ['python', 'scripts/verify-film-integration.py', str(proj)])
        else:
            print(f'\n::notice::未找到 {proj}，跳过')
            results.append((f'film: {name}', True, 0))

    onion = WORKSPACE / 'films' / 'onion-tears'
    if (onion / 'index.html').exists():
        run('vibe-reel: 集成验证', ['python', 'scripts/verify-vibe-reel-integration.py', str(onion)])
    else:
        print('\n::notice::未找到 films/onion-tears，跳过')
        results.append(('vibe-reel: 集成验证', True, 0))

print(f'\n{"=" * 72}\n汇总\n{"=" * 72}')
bad = 0
for name, ok, dt in results:
    print(f'  {"✓" if ok else "✗"} {name:<32} {dt:>6.1f}s')
    if not ok:
        bad += 1
print(f'\n{len(results) - bad}/{len(results)} 通过')
sys.exit(1 if bad else 0)
