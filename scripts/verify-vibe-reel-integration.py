#!/usr/bin/env python3
"""motion-core → vibe-reel 集成验证。

检查：
  1) 页面无 pageerror / console.error
  2) RK.core / E.byName / E.k75 等就位，且历史 E 表没被改（逐帧确定性）
  3) 同一时刻「有 core」与「屏蔽 core」两次渲染像素一致（只新增，未改坏）
用法：python scripts/verify-vibe-reel-integration.py [工程目录]
"""
import argparse, base64, http.server, io, socketserver, sys, threading
from pathlib import Path
from playwright.sync_api import sync_playwright

for _s in (sys.stdout, sys.stderr):
    try: _s.reconfigure(encoding='utf-8', errors='replace')
    except Exception: pass

# 相对路径一律相对本脚本解析（motion-core/scripts/ → 工作区根是上两级）
SCRIPT = Path(__file__).resolve()
WORKSPACE = SCRIPT.parent.parent.parent
SKILL = WORKSPACE.parent / 'skills' / 'vibe-reel'      # <workspace>/skills/vibe-reel
USER_SKILL = Path.home() / '.agents' / 'skills' / 'vibe-reel'
if not (SKILL / 'engine' / 'render_api.js').exists() and (USER_SKILL / 'engine' / 'render_api.js').exists():
    SKILL = USER_SKILL
ENGINE = SKILL / 'engine'

ap = argparse.ArgumentParser()
ap.add_argument('proj', nargs='?', default='films/onion-tears')
ap.add_argument('--times', default='4.0,9.0,25.0')
args = ap.parse_args()

PROJ = (WORKSPACE / args.proj).resolve() if not Path(args.proj).is_absolute() else Path(args.proj).resolve()
TIMES = [float(x) for x in args.times.split(',')]

if not (PROJ / 'index.html').exists():
    sys.exit(f'[致命] 不是 vibe-reel 工程（缺 index.html）：{PROJ}')

class Handler(http.server.SimpleHTTPRequestHandler):
    proj = None
    def translate_path(self, path):
        p = path.split('?', 1)[0].split('#', 1)[0]
        if p.startswith('/engine/'):
            return str(ENGINE / p[len('/engine/'):])
        if p.startswith('/vibe/'):
            return str(ENGINE / p[len('/vibe/'):])
        return str(self.proj / p.lstrip('/')) if p not in ('/', '') else str(self.proj / 'index.html')
    def do_GET(self):
        if self.path.startswith('/favicon'):
            self.send_response(204); self.end_headers(); return
        super().do_GET()
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()
    def log_message(self, *a): pass

def free_port():
    import socket
    s = socket.socket(); s.bind(('127.0.0.1', 0)); p = s.getsockname()[1]; s.close(); return p

def find_chrome():
    import glob
    hits = sorted(glob.glob(str(Path.home() / 'AppData/Local/ms-playwright/chromium-*/chrome-win64/chrome.exe')))
    return hits[-1] if hits else None

def pixel_diff(a, b):
    """返回 (显著差异像素占比, 说明)。显著 = 任一通道差 > 8/255。
       只看「有没有 ≥1 的差」会把抗锯齿噪声算成 100%，没有意义。"""
    from PIL import Image, ImageChops
    import numpy as np
    ia = Image.open(io.BytesIO(a)).convert('RGB')
    ib = Image.open(io.BytesIO(b)).convert('RGB')
    if ia.size != ib.size:
        return 1.0, 'size mismatch'
    d = np.asarray(ImageChops.difference(ia, ib), dtype=np.int16)
    maxch = d.max(axis=2)
    significant = float((maxch > 8).mean())
    return significant, f'平均绝对差 {d.mean():.3f}/255，显著像素 {significant:.4%}'

results = {}
with sync_playwright() as p:
    kw = {'headless': True, 'args': ['--no-sandbox', '--disable-dev-shm-usage']}
    chrome = find_chrome()
    if chrome: kw['executable_path'] = chrome
    browser = p.chromium.launch(**kw)

    # --- 有 core ---
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', free_port()), type('H', (Handler,), {'proj': PROJ}))
    port = srv.server_address[1]
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    url = f'http://127.0.0.1:{port}/index.html'

    page = browser.new_page(viewport={'width': 960, 'height': 540})
    errors, cerr = [], []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: cerr.append(m.text) if m.type == 'error' else None)
    page.goto(url, wait_until='networkidle')
    page.wait_for_function('window.RK && window.RK.core && window.RK.core.registry', timeout=20000)
    page.wait_for_timeout(600)

    results['api'] = page.evaluate(r"""
    () => {
      const RK = window.RK, E = RK.E, MC = RK.core;
      return {
        core: !!MC,
        curves: MC ? MC.registry.curves().length : 0,
        terms: MC && MC.termsVocab ? MC.termsVocab.terms.length : 0,
        byName: typeof E.byName === 'function',
        k75: typeof E.k75 === 'function',
        settle: typeof E.settle === 'function',
        appleOut: typeof E.appleOut === 'function',
        /* 历史表必须逐字节不变（vibe-reel 既有片子依赖它） */
        legacy: ['linear','smooth','in','out','io','back','spring','expo'].map(k => typeof E[k]).join(','),
        legacySmooth: E.smooth(0.5),
        coreSmoothstep: MC ? MC.registry.fn('smoothstep')(0.5) : null,
        coreSmooth: MC ? MC.registry.fn('smooth')(0.5) : null,
        aliasExpo: Math.abs(E.byName('expo-out')(0.5) - E.byName('easeOutExpo')(0.5)) < 1e-9,
        names: typeof E.names === 'function' ? E.names().length : 0,
      };
    }
    """)
    results['errors'] = errors
    results['cerr'] = cerr
    results['shots'] = []
    for t in TIMES:
        page.evaluate(f'seek({t})')
        results['shots'].append(page.screenshot(type='png'))
    page.close()
    srv.shutdown()

    # --- 噪声基线：另一个也有 core 的页面（跨上下文字体栅格化噪声）---
    srv3 = http.server.ThreadingHTTPServer(('127.0.0.1', free_port()), type('H', (Handler,), {'proj': PROJ}))
    port3 = srv3.server_address[1]
    threading.Thread(target=srv3.serve_forever, daemon=True).start()
    page3 = browser.new_page(viewport={'width': 960, 'height': 540})
    page3.goto(f'http://127.0.0.1:{port3}/index.html', wait_until='networkidle')
    page3.wait_for_function('window.RK && window.RK.core', timeout=20000)
    page3.wait_for_timeout(600)
    results['noise'] = []
    for t in TIMES:
        page3.evaluate(f'seek({t})')
        results['noise'].append(page3.screenshot(type='png'))
    page3.close()
    srv3.shutdown()

    # --- 屏蔽 core.js（基线）---
    srv2 = http.server.ThreadingHTTPServer(('127.0.0.1', free_port()), type('H', (Handler,), {'proj': PROJ}))
    port2 = srv2.server_address[1]
    threading.Thread(target=srv2.serve_forever, daemon=True).start()
    page2 = browser.new_page(viewport={'width': 960, 'height': 540})
    page2.route('**/*', lambda r: r.abort() if r.request.url.endswith('/engine/core.js') else r.continue_())
    page2.goto(f'http://127.0.0.1:{port2}/index.html', wait_until='networkidle')
    page2.wait_for_function('window.RK && window.RK.E', timeout=20000)
    page2.wait_for_timeout(600)
    results['baseline'] = []
    for t in TIMES:
        page2.evaluate(f'seek({t})')
        results['baseline'].append(page2.screenshot(type='png'))
    page2.close()
    srv2.shutdown()
    browser.close()

a = results['api']
print('=== API ===')
for k in ['core', 'byName', 'k75', 'settle', 'appleOut', 'aliasExpo']:
    print(f'  {"OK " if a.get(k) else "FAIL"} {k}')
print(f'  · 曲线 {a.get("curves")} 条，术语 {a.get("terms")} 条，E.names() {a.get("names")} 个')
print(f'  · 历史 E 键类型: {a.get("legacy")}')
print(f'  · E.smooth(0.5)={a.get("legacySmooth")}  core smoothstep(0.5)={a.get("coreSmoothstep")}  core smooth(0.5)={a.get("coreSmooth")}')

print('\n=== 错误 ===')
print(f'  pageerror: {len(results["errors"])}')
for e in results['errors'][:5]: print('   ', e)
print(f'  console.error: {len(results["cerr"])}')
for e in results['cerr'][:5]: print('   ', e)

print('\n=== 像素回归（有 core vs 屏蔽 core，与自比噪声对比）===')
worst = 0.0
worst_noise = 0.0
for t, x, y, n in zip(TIMES, results['shots'], results['baseline'], results['noise']):
    try:
        r, note = pixel_diff(x, y)
        nz, nnote = pixel_diff(x, n)
        worst = max(worst, r)
        worst_noise = max(worst_noise, nz)
        print(f'  t={t}: {note}   |  自比噪声 {nnote}')
    except Exception as e:
        print(f'  t={t}: 跳过（{e}）')
        worst = 1.0
# 判定：与自比噪声同量级就算通过（core 没有引入超出噪声的差异）
ratio = worst / max(worst_noise, 1e-6)
if worst <= max(0.002, worst_noise * 2):
    print(f'  [OK] 差异与自比噪声同量级（{worst:.4%} vs {worst_noise:.4%}，比值 {ratio:.2f}）——只新增，未改坏')
else:
    print(f'  [!] 差异明显大于噪声（{worst:.4%} vs {worst_noise:.4%}，比值 {ratio:.2f}）——core 接入可能影响了既有渲染')

ok = (a.get('core') and a.get('byName') and a.get('k75')
      and a.get('legacySmooth') == a.get('coreSmoothstep')
      and not results['errors']
      and worst <= max(0.002, worst_noise * 2))
print('\n结论:', '通过' if ok else '未通过')
sys.exit(0 if ok else 1)
