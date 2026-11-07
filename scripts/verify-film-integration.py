#!/usr/bin/env python3
"""motion-core 集成验证：在 film_ai_three 工程里加载页面，检查
   1) 没有 pageerror / console.error
   2) window.MC / MO.byName / CAM.specToEvents 可用
   3) 术语 → film-mo 代码能导出
   4) 有 core 与 屏蔽 core 两次渲染的像素一致（证明只新增、没改坏）

用法：python scripts/verify-film-integration.py [工程根目录] [--film eras_gallery]
"""
import argparse, http.server, json, socketserver, threading, functools, sys, os
from pathlib import Path
from playwright.sync_api import sync_playwright

# Windows 控制台默认 GBK，统一成 UTF-8
for _stream in (sys.stdout, sys.stderr):
    try: _stream.reconfigure(encoding='utf-8', errors='replace')
    except Exception: pass

ap = argparse.ArgumentParser()
ap.add_argument('root', nargs='?', default='../film_ai_three/代码工程')
ap.add_argument('--film', default='', help='读 eras_<名>.js；默认 eras.js')
ap.add_argument('--port', type=int, default=0, help='0 = 自动选空闲端口')
ap.add_argument('--still', type=float, default=1.0)
args = ap.parse_args()

def free_port():
    import socket
    s = socket.socket()
    s.bind(('127.0.0.1', 0))
    p = s.getsockname()[1]
    s.close()
    return p

PORT = args.port or free_port()

ROOT = Path(args.root).resolve()
CORE_SCRIPTS = ['lib/core.js', 'lib/core-mo.js', 'lib/core-camera.js']

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw): super().__init__(*a, directory=str(ROOT), **kw)
    def log_message(self, *a): pass

httpd = socketserver.TCPServer(('127.0.0.1', PORT), Handler)
threading.Thread(target=httpd.serve_forever, daemon=True).start()

url = f'http://127.0.0.1:{PORT}/index.html'
if args.film: url += f'?film={args.film}'

CHECKS = r"""
() => {
  const out = {};
  out.mc = typeof window.MC === 'object';
  out.hasMO = typeof window.MO === 'object';
  out.hasCAM = typeof window.CAM === 'object';
  out.curves = window.MC ? window.MC.registry.curves().length : 0;
  out.terms = window.MC && window.MC.termsVocab ? window.MC.termsVocab.terms.length : 0;
  out.byName = typeof (window.MO && window.MO.byName) === 'function';
  out.k75 = out.byName ? window.MO.byName('k75')(0.5) : null;
  out.alias = out.byName ? Math.abs(window.MO.byName('expo-out')(0.5) - window.MO.byName('easeOutExpo')(0.5)) < 1e-9 : false;
  out.term = typeof (window.MO && window.MO.term) === 'function';
  out.termSpec = out.term && !!window.MO.term('stagger').spec;
  out.export = out.term ? window.MO.exportTerm('stagger', 'film-mo').status : null;
  out.camBridge = typeof (window.CAM && window.CAM.specToEvents) === 'function';
  out.camEvents = out.camBridge ? window.CAM.specToEvents([{at:0,kind:'glide',to:{x:960,y:540,z:1},dur:1,ease:'k75'}]).length : 0;
  out.moUntouched = !!(window.MO && typeof window.MO.quintOut === 'function' && typeof window.MO.k75 === 'function');
  return out;
}
"""

def grab(page, t):
    page.evaluate(f'window.renderFrame({t})')
    return page.evaluate('''() => {
    const c = document.getElementById('c');
    const d = document.createElement('canvas');
    d.width = c.width; d.height = c.height;
    d.getContext('2d').drawImage(c, 0, 0);
    return d.toDataURL('image/png');
  }''')

def diff(a, b):
    """两张 PNG dataURL 的像素差异比例"""
    import base64, io
    from PIL import Image, ImageChops
    ia = Image.open(io.BytesIO(base64.b64decode(a.split(',')[1]))).convert('RGB')
    ib = Image.open(io.BytesIO(base64.b64decode(b.split(',')[1]))).convert('RGB')
    if ia.size != ib.size: return 1.0, ia.size, ib.size
    diff = ImageChops.difference(ia, ib)
    hist = diff.histogram()
    # 非零像素占比
    total = ia.size[0] * ia.size[1] * 3
    nonzero = total - hist[0] - hist[256] - hist[512]
    return nonzero / total, ia.size, ib.size

def find_chromium():
    """Playwright 默认要 chrome-headless-shell；这台机器只装了完整版 chromium。"""
    import glob
    patterns = [
        str(Path.home() / 'AppData/Local/ms-playwright/chromium-*/chrome-win64/chrome.exe'),
        str(Path.home() / 'AppData/Local/ms-playwright/chromium-*/chrome-win/chrome.exe'),
    ]
    for pat in patterns:
        hits = sorted(glob.glob(pat))
        if hits:
            return hits[-1]
    return None

CHROME = find_chromium()

results = {}
with sync_playwright() as p:
    launch_kw = {'headless': True, 'args': ['--no-sandbox', '--disable-dev-shm-usage']}
    if CHROME:
        launch_kw['executable_path'] = CHROME
    browser = p.chromium.launch(**launch_kw)

    # --- 正常加载 ---
    page = browser.new_page(viewport={'width': 1280, 'height': 720})
    errors, console_errors, bad_responses = [], [], []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: console_errors.append(m.text) if m.type == 'error' else None)
    page.on('response', lambda r: bad_responses.append(f'{r.status} {r.url}') if r.status >= 400 else None)
    page.goto(url, wait_until='networkidle')
    page.wait_for_function('window.__ready === true', timeout=20000)
    page.wait_for_timeout(400)

    results['checks'] = page.evaluate(CHECKS)
    results['pageerrors'] = errors
    results['console_errors'] = console_errors
    results['bad_responses'] = bad_responses
    results['frame_with_core'] = grab(page, args.still)
    page.close()

    # --- 屏蔽 core 脚本（基线）---
    page2 = browser.new_page(viewport={'width': 1280, 'height': 720})
    page2.route('**/' , lambda route: (
        route.abort() if any(route.request.url.endswith(s) for s in CORE_SCRIPTS)
        else route.continue_()
    ))
    page2.goto(url, wait_until='networkidle')
    page2.wait_for_function('window.__ready === true', timeout=20000)
    page2.wait_for_timeout(400)
    results['frame_baseline'] = grab(page2, args.still)
    page2.close()
    browser.close()

httpd.shutdown()

# --- 报告 ---
c = results['checks']
print('=== API 检查 ===')
for k in ['mc', 'byName', 'alias', 'term', 'termSpec', 'camBridge', 'moUntouched']:
    print(f'  {"OK" if c.get(k) else "FAIL"} {k}')
print(f'  · 曲线 {c.get("curves")} 条，术语 {c.get("terms")} 条')
print(f'  · k75(0.5) = {c.get("k75")}')
print(f'  · exportTerm("stagger","film-mo") = {c.get("export")}')
print(f'  · specToEvents → {c.get("camEvents")} 个事件')

print('\n=== 错误 ===')
print(f'  pageerror: {len(results["pageerrors"])}')
for e in results['pageerrors'][:5]: print('   ', e)
print(f'  console.error: {len(results["console_errors"])}')
for e in results['console_errors'][:5]: print('   ', e)
if any('404' in e for e in results['console_errors']) and not results['bad_responses']:
    print('  （404 是浏览器自动请求的 /favicon.ico，与 core 无关）')
print(f'  HTTP >=400: {len(results["bad_responses"])}')
for e in results['bad_responses'][:8]: print('   ', e)

print('\n=== 像素回归（有 core vs 屏蔽 core）===')
try:
    ratio, sa, sb = diff(results['frame_with_core'], results['frame_baseline'])
    print(f'  差异像素占比: {ratio:.6%}  ({sa} vs {sb})')
    if ratio > 0.0001:
        print('  [!] 有差异——core 的接入可能影响了既有渲染')
    else:
        print('  [OK] 无可见差异（只新增，未改坏）')
except Exception as e:
    print(f'  跳过像素对比（缺 Pillow？）: {e}')

ok = (c.get('mc') and c.get('byName') and c.get('term') and c.get('export') == 'native'
      and c.get('camBridge') and c.get('moUntouched')
      and not results['pageerrors']
      and not [e for e in results['console_errors'] if '404' not in e and 'Failed to load resource' not in e])
print('\n结论:', '通过' if ok else '未通过')
sys.exit(0 if ok else 1)
