// Read a rendered genealogy chart by tracing the lines that are drawn on it.
//
//   node scripts/mine-chart.mjs [--page 琅邪王氏世系圖] [--out /tmp/chart.json]
//                               [--screenshot out.png]
//
// A clan chart on Chinese Wikipedia is built from {{Tree chart}}, whose source
// is ASCII art: rows of `,`, `-`, `^` and `(` whose columns are supposed to line
// up with the person cells above and below. On a real page they often do not —
// 琅邪王氏世系圖 has rows where the corner sits three columns off — and a parser
// that trusts that alignment produces confident, wrong parentage. Wrong kinship
// is worse than missing kinship, so the source is not what gets parsed.
//
// The browser resolves it. Rendered, the chart is a table in which every person
// is a bordered box and every connecting line is a cell border at a known
// pixel. A vertical stem lands on the centre of the box below it; a parent's
// bottom edge meets the horizontal bar above its children. Tracing that is
// geometry, not guesswork: lines that touch are one connector, whatever the
// wikitext columns said.
//
// Output is a candidate list for `mine-prose.mjs --chart`, which resolves the
// names against the database and builds the usual import plan. A diagram is not
// a sentence, so these carry no quotation — the citation records the chart and
// the section it was read from, and the claim is checkable by looking at it.

import { writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const args = process.argv.slice(2);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const pageTitle = option('--page', '琅邪王氏世系圖');
const outPath = option('--out', '/tmp/chart-candidates.json');
const screenshot = option('--screenshot', null);
// Two drawn lines belong to the same connector when they meet within this many
// pixels. Kept tight: a loose tolerance would bridge one family's bar to the
// next and invent parentage between strangers.
const TOUCH = Number(option('--touch', '3'));

const url = `https://zh.wikipedia.org/wiki/${encodeURIComponent(pageTitle.replace(/ /g, '_'))}`;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 4000, height: 2400 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90_000 });

const charts = await page.evaluate(() => {
  /** The nearest heading above an element, so a claim can say where it was read. */
  const sectionOf = (el) => {
    for (let n = el; n; n = n.previousElementSibling ?? n.parentElement) {
      const h = n.previousElementSibling;
      if (h && /^H[2-4]$/.test(h.tagName)) return h.innerText.replace(/\[.*?\]/g, '').trim();
    }
    return null;
  };

  return [...document.querySelectorAll('table')]
    .map((table) => {
      const nodes = [];
      const segs = [];
      for (const tr of table.rows) {
        for (const td of tr.cells) {
          const r = td.getBoundingClientRect();
          if (!r.width && !r.height) continue;
          const s = getComputedStyle(td);
          const on = (w) => parseFloat(w) > 0;
          const text = td.innerText.trim();
          const a = td.querySelector('a');

          // A person is a fully bordered box with a name in it.
          if (text && on(s.borderTopWidth) && on(s.borderBottomWidth) && on(s.borderLeftWidth)) {
            nodes.push({
              text,
              // The chart writes an office above the name:「睢陵元公\n王祥」.
              // The link is the person; the last line is the fallback.
              link: a?.getAttribute('title')?.replace(/（页面不存在）$/, '') ?? null,
              linked: Boolean(a) && !/（页面不存在）$/.test(a?.getAttribute('title') ?? ''),
              shown: a?.innerText.trim() ?? text.split('\n').pop().trim(),
              x: r.x, y: r.y, w: r.width, h: r.height,
            });
            continue;
          }
          // Lines are borders on otherwise empty cells.
          if (on(s.borderTopWidth)) segs.push({ o: 'h', y: r.y, x1: r.x, x2: r.x + r.width });
          if (on(s.borderBottomWidth)) segs.push({ o: 'h', y: r.y + r.height, x1: r.x, x2: r.x + r.width });
          if (on(s.borderLeftWidth)) segs.push({ o: 'v', x: r.x, y1: r.y, y2: r.y + r.height });
          if (on(s.borderRightWidth)) segs.push({ o: 'v', x: r.x + r.width, y1: r.y, y2: r.y + r.height });
        }
      }
      return { section: sectionOf(table), nodes, segs };
    })
    .filter((c) => c.nodes.length >= 4 && c.segs.length >= 4);
});

if (screenshot) await page.screenshot({ path: screenshot, fullPage: true });
await browser.close();

// --- trace the lines --------------------------------------------------------

const near = (a, b) => Math.abs(a - b) <= TOUCH;
const spans = (v, lo, hi) => v >= lo - TOUCH && v <= hi + TOUCH;

/** Do two drawn segments meet? */
function touching(a, b) {
  if (a.o === 'h' && b.o === 'h') {
    return near(a.y, b.y) && a.x1 <= b.x2 + TOUCH && b.x1 <= a.x2 + TOUCH;
  }
  if (a.o === 'v' && b.o === 'v') {
    return near(a.x, b.x) && a.y1 <= b.y2 + TOUCH && b.y1 <= a.y2 + TOUCH;
  }
  const [h, v] = a.o === 'h' ? [a, b] : [b, a];
  return spans(v.x, h.x1, h.x2) && spans(h.y, v.y1, v.y2);
}

/** Union-find over the segments: one component is one connector. */
const parent = segs_parent(charts);
function segs_parent(charts) {
  for (const chart of charts) {
    const p = chart.segs.map((_, i) => i);
    const find = (i) => (p[i] === i ? i : (p[i] = find(p[i])));
    for (let i = 0; i < chart.segs.length; i += 1) {
      for (let j = i + 1; j < chart.segs.length; j += 1) {
        if (touching(chart.segs[i], chart.segs[j])) p[find(i)] = find(j);
      }
    }
    chart.component = chart.segs.map((_, i) => find(i));
  }
  return null;
}

/** Does a point sit on this segment? */
const onSeg = (s, x, y) =>
  s.o === 'h' ? near(s.y, y) && spans(x, s.x1, s.x2) : near(s.x, x) && spans(y, s.y1, s.y2);

const relations = [];
for (const chart of charts) {
  const groups = new Map();
  for (const [i, c] of chart.component.entries()) {
    groups.set(c, [...(groups.get(c) ?? []), chart.segs[i]]);
  }

  for (const group of groups.values()) {
    // A box hanging below the connector is a child; one sitting above it, a
    // parent. Contact is at the middle of the box's own edge, which is where
    // the template draws the stem.
    const above = [];
    const below = [];
    for (const n of chart.nodes) {
      const cx = n.x + n.w / 2;
      if (group.some((s) => onSeg(s, cx, n.y + n.h))) above.push(n);
      if (group.some((s) => onSeg(s, cx, n.y))) below.push(n);
    }
    for (const p of above) {
      for (const c of below) {
        if (p === c || p.y >= c.y) continue;
        relations.push({
          section: chart.section,
          parent: { name: p.shown, title: p.linked ? p.link : null },
          child: { name: c.shown, title: c.linked ? c.link : null },
        });
      }
    }
  }
}

// One pair, however many line groups happen to join them.
const seen = new Set();
const unique = relations.filter((r) => {
  const k = `${r.parent.name}|${r.child.name}`;
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

const out = [
  {
    article: pageTitle,
    corpus: 'zhwiki-chart',
    relations: unique.map((r) => ({
      subject: r.parent.name,
      subject_title: r.parent.title,
      other: r.child.name,
      other_title: r.child.title,
      other_is: 'child',
      term: `世系圖${r.section ? `（${r.section}）` : ''}`,
    })),
  },
];
writeFileSync(outPath, `${JSON.stringify(out, null, 2)}\n`, 'utf8');

const people = new Set(unique.flatMap((r) => [r.parent.name, r.child.name]));
console.error(
  `《${pageTitle}》：${charts.length} 张图、${charts.reduce((n, c) => n + c.nodes.length, 0)} 个人物框 → ` +
    `${unique.length} 条父子关系，涉及 ${people.size} 人`,
);
console.error(`written to ${outPath}`);
