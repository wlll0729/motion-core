#!/usr/bin/env python3
"""motion-core → motion-lexicon 集成验证。

检查：
  1) 页面无 pageerror / console.error
  2) window.MC / EASE / EASE_LIST 就位
  3) 实验室的导出 tab 包含 film-mo / film-rk
  4) 详情页「代码写法」菜单包含影片目标，且能导出代码
用法：python scripts/verify-lexicon-integration.py [词典根目录]
"""
import argparse, http.server, socketserver, threading, sys
from pathlib import Path
from playwright.sync_api import sync_playwright

for _s in (sys.stdout, sys.stderr):
    try: _s.reconfigure(encoding='utf-8', errors='replace')
    except Exception: pass

ap = argparse.ArgumentParser()
ap.add_argument('root', nargs='?', default='../motion-lexicon-fork')
args = ap.parse_args()

ROOT = Path(args.root).resolve()

def free_port():
    import socket
    s = socket.socket(); s.bind(('127.0.0.1', 0)); p = s.getsockname()[1]; s.close(); return p

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw): super().__init__(*a, directory=str(ROOT), **kw)
    def log_message(self, *a): pass

PORT = free_port()
httpd = socketserver.TCPServer(('127.0.0.1', PORT), Handler)
threading.Thread(target=httpd.serve_forever, daemon=True).start()

def find_chrome():
    import glob
    for pat in [str(Path.home() / 'AppData/Local/ms-playwright/chromium-*/chrome-win64/chrome.exe')]:
        hits = sorted(glob.glob(pat))
        if hits: return hits[-1]
    return None

CHROME = find_chrome()
results = {}

with sync_playwright() as p:
    kw = {'headless': True, 'args': ['--no-sandbox', '--disable-dev-shm-usage']}
    if CHROME: kw['executable_path'] = CHROME
    browser = p.chromium.launch(**kw)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    errors, cerr = [], []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: cerr.append(m.text) if m.type == 'error' else None)

    page.goto(f'http://127.0.0.1:{PORT}/index.html', wait_until='networkidle')
    page.wait_for_timeout(800)

    results['errors'] = errors
    results['cerr'] = cerr
    results['basic'] = page.evaluate(r"""
    () => ({
      mc: typeof window.MC === 'object',
      curves: window.MC ? window.MC.registry.curves().length : 0,
      vocabTerms: window.MC && window.MC.termsVocab ? window.MC.termsVocab.terms.length : 0,
      ease: typeof window.EASE === 'object',
      easeKeys: window.EASE ? Object.keys(window.EASE).length : 0,
      easeList: Array.isArray(window.EASE_LIST) ? window.EASE_LIST.length : 0,
      legacyCustomBezier: typeof (window.EASE && window.EASE.customBezier) === 'function',
      legacySineOut: typeof (window.EASE && window.EASE.easeOutSine) === 'function',
      newK75: typeof (window.EASE && window.EASE.k75) === 'function',
      newSettle: typeof (window.EASE && window.EASE.settle) === 'function',
      cards: document.querySelectorAll('#sections article[data-id]').length,
      statTerms: document.querySelector('#stat-terms') ? document.querySelector('#stat-terms').textContent : null
    })
    """)

    # 实验室：展开后检查 tab 列表
    page.evaluate("document.querySelector('#lab').open = true")
    page.wait_for_timeout(300)
    results['lab'] = page.evaluate(r"""
    () => {
      const tabs = Array.from(document.querySelectorAll('#lab-tabs .ltab')).map(b => b.textContent);
      const code = document.querySelector('#lab-code').textContent;
      return { tabs, codeHead: code.slice(0, 60) };
    }
    """)

    # 详情页：点开第一张卡片，切到影片 MO
    page.evaluate(r"""
    () => {
      const card = document.querySelector('#sections article[data-id]');
      if (card) card.click();
    }
    """)
    page.wait_for_timeout(600)
    results['detail'] = page.evaluate(r"""
    () => {
      const opts = Array.from(document.querySelectorAll('#dialect-list [data-k]')).map(b => ({
        key: b.dataset.k,
        label: b.querySelector('b') ? b.querySelector('b').textContent : ''
      }));
      const term = window.TERMS_BY_ID ? window.TERMS_BY_ID['stagger']
        : window.TERMS.find(t => t.id === 'stagger');
      const out = {};
      for (const o of opts) {
        DIALECTS.set(o.key);
        const panel = DIALECTS.panelHTML(term);
        out[o.key] = { hasPanel: panel.length > 0, snippet: (DIALECTS.codeFor(term) || '').slice(0, 50) };
      }
      const pageOpts = Array.from(document.querySelectorAll('#page [data-code-format]')).map(b => b.dataset.codeFormat);
      return { opts, out, pageVisible: !document.querySelector('#page').hidden, pageOpts };
    }
    """)
    results['shots'] = page.screenshot(path='/tmp/lexicon-detail.png')

    page.close()
    browser.close()

httpd.shutdown()

print('=== 基础 ===')
b = results['basic']
for k in ['mc', 'ease', 'easeList', 'legacyCustomBezier', 'legacySineOut', 'newK75', 'newSettle']:
    print(f'  {"OK " if b.get(k) else "FAIL"} {k}')
print(f'  · 曲线 {b.get("curves")} 条，词表术语 {b.get("vocabTerms")} 条，EASE 键 {b.get("easeKeys")} 个，EASE_LIST {b.get("easeList")} 条')
print(f'  · 术语卡片 {b.get("cards")} 张（计数显示 {b.get("statTerms")}）')

print('\n=== 实验室 tab ===')
print('  ' + ', '.join(results['lab']['tabs']))
print(f'  代码开头: {results["lab"]["codeHead"]}')

print('\n=== 详情页代码写法 ===')
print(f'  详情页已打开: {results["detail"].get("pageVisible")}')
print(f'  详情面板选项: {results["detail"].get("pageOpts")}')
for o in results['detail']['opts']:
    r = results['detail']['out'][o['key']]
    print(f"  {o['key'].ljust(10)} panel={'OK' if r['hasPanel'] else 'FAIL'}  {r['snippet']}")

print('\n=== 错误 ===')
print(f'  pageerror: {len(results["errors"])}')
for e in results['errors'][:5]: print('   ', e)
print(f'  console.error: {len(results["cerr"])}')
for e in results['cerr'][:5]: print('   ', e)

ok = (b.get('mc') and b.get('ease') and b.get('easeList') > 50
      and b.get('vocabTerms') == 244 and b.get('cards') > 200
      and b.get('legacyCustomBezier') and b.get('newK75')
      and '影片 / Canvas（MO）' in results['lab']['tabs']
      and 'film-mo' in [o['key'] for o in results['detail']['opts']]
      and results['detail']['out']['film-mo']['hasPanel']
      and not results['errors'])
print('\n结论:', '通过' if ok else '未通过')
sys.exit(0 if ok else 1)
