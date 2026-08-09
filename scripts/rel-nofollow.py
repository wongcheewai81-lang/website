"""Add rel="nofollow noopener" (+ noreferrer for media) to outbound links.

Categories:
  - DOFOLLOW: properties Dr Wong owns or vouches for (clinic, hospital,
    his own Scholar profile, WhatsApp/Maps deep links)
  - NOFOLLOW (+ noopener): third-party citations, government, manufacturers,
    pharma, academic indexes
  - NOFOLLOW + noopener + NOREFERRER: publisher/media sites (avoid leaking
    referral path of patients)
  - FLAG: ResearchGate profile — left unchanged, user decides
"""
from __future__ import annotations
import re
import sys
from pathlib import Path
from typing import Optional

ROOT = Path(__file__).resolve().parents[1]

# Domain -> action
# Keys are matched against the href hostname (without leading "www.").
NOFOLLOW = {
    'expertscape.com',
    'pubmed.ncbi.nlm.nih.gov',
    'pmc.ncbi.nlm.nih.gov',
    'clinicaltrials.gov',
    'retinatoday.com',
    'newsroom.astellas.com',
    'astellas.com',
    'roche.com',
    'forpatients.roche.com',
    'zeiss.com',
    'luxturna.com',
    'moh.gov.sg',
}
NOFOLLOW_NOREFERRER = {
    'mettanews.id',
    'straitstimes.com',
    'channelnewsasia.com',
}
DOFOLLOW = {
    'asiapacificeyecentre.com',
    'asiapacificeyecentre.com.sg',
    'gleneagles.com.sg',
    'scholar.google.com',
}
SKIP = {
    'wa.me',
    'maps.google.com',
    'drwongcheewai.com',
    'cheewaiwong.com',
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'cdn.tailwindcss.com',
    'schema.org',
    'placehold.co',
    'formspree.io',
    'business.google.com',
    'www.googletagmanager.com',
    'googleads.g.doubleclick.net',
    'researchgate.net',  # FLAGGED for user decision — leave unchanged
}

ANCHOR_RE = re.compile(r'<a\b([^>]*?)>', re.IGNORECASE | re.DOTALL)
HREF_RE   = re.compile(r'\bhref\s*=\s*"([^"]+)"', re.IGNORECASE)
REL_RE    = re.compile(r'\brel\s*=\s*"([^"]*)"', re.IGNORECASE)
HOST_RE   = re.compile(r'^https?://([^/]+)', re.IGNORECASE)

def host_of(href: str) -> Optional[str]:
    m = HOST_RE.match(href)
    if not m:
        return None
    h = m.group(1).lower()
    if h.startswith('www.'):
        h = h[4:]
    return h

def desired_rel(host: str, current_rel: str) -> Optional[str]:
    """Return the new rel value, or None to leave unchanged."""
    tokens = set(current_rel.split()) if current_rel else set()
    if host in NOFOLLOW:
        new = {'nofollow', 'noopener'} | tokens
    elif host in NOFOLLOW_NOREFERRER:
        new = {'nofollow', 'noopener', 'noreferrer'} | tokens
    else:
        return None
    if new == tokens:
        return None
    # Stable order
    order = ['nofollow', 'noopener', 'noreferrer']
    out = [t for t in order if t in new] + sorted(t for t in new if t not in order)
    return ' '.join(out)

def transform_anchor(match: re.Match) -> str:
    inner = match.group(1)
    href_m = HREF_RE.search(inner)
    if not href_m:
        return match.group(0)
    host = host_of(href_m.group(1))
    if not host or host in SKIP or host in DOFOLLOW:
        return match.group(0)
    rel_m = REL_RE.search(inner)
    current = rel_m.group(1) if rel_m else ''
    new_rel = desired_rel(host, current)
    if new_rel is None:
        return match.group(0)
    if rel_m:
        new_inner = inner[:rel_m.start(1)] + new_rel + inner[rel_m.end(1):]
    else:
        # Insert rel after href
        insert_at = href_m.end()
        new_inner = inner[:insert_at] + f' rel="{new_rel}"' + inner[insert_at:]
    return f'<a{new_inner}>'

def process(path: Path) -> int:
    src = path.read_text(encoding='utf-8')
    new = ANCHOR_RE.sub(transform_anchor, src)
    if new == src:
        return 0
    path.write_text(new, encoding='utf-8')
    # Count anchors changed (approximate by diff of '<a' occurrences with rel)
    return new.count('rel="nofollow') - src.count('rel="nofollow')

def main() -> None:
    html_files = sorted(p for p in ROOT.rglob('*.html')
                        if 'node_modules' not in p.parts
                        and '.git' not in p.parts)
    total = 0
    for p in html_files:
        added = process(p)
        if added:
            print(f'{p.relative_to(ROOT)}: +{added} nofollow link(s)')
            total += added
    print(f'\nTotal: {total} link(s) updated across {len(html_files)} HTML files')

if __name__ == '__main__':
    main()
