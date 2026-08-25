// Transport for the Wikimedia sites this project reads: throttled, retrying,
// and cached on disk.
//
// Split out because there is more than one such site now. Chinese Wikipedia
// carries modern prose about a person; Chinese Wikisource carries the histories
// themselves — 晉書 卷八十 *is* 王羲之's biography, and states his kinship in the
// words the Tang compilers used. Both are read the same way.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const USER_AGENT = 'wang-genealogy-kinship/0.4 (https://wang-genealogy-web.pages.dev)';
const CACHE_ROOT = new URL('../.cache/', import.meta.url).pathname;
const SPACING_MS = 200;

let lastRequestAt = 0;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * One throttled, retrying request.
 *
 * Wikimedia answers a burst with 429 and a plain-text body, so a caller that
 * only checks `res.ok` and moves on loses the whole batch without noticing —
 * which is exactly how a sitelink lookup once reported that none of 1410
 * persons had an article. Requests are spaced globally across every host, and
 * 429/5xx is retried with backoff; a request that still fails throws rather
 * than returning empty.
 */
export async function wikiFetch(url, { attempts = 4 } = {}) {
  for (let attempt = 1; ; attempt += 1) {
    const wait = SPACING_MS - (Date.now() - lastRequestAt);
    if (wait > 0) await sleep(wait);
    lastRequestAt = Date.now();

    const res = await fetch(url, { headers: { 'user-agent': USER_AGENT } });
    if (res.ok) return res;
    const retryable = res.status === 429 || res.status >= 500;
    if (!retryable || attempt >= attempts) {
      throw new Error(`${res.status} ${res.statusText} — ${url.slice(0, 120)}`);
    }
    const after = Number(res.headers.get('retry-after'));
    const backoff = Number.isFinite(after) && after > 0 ? after * 1000 : 1000 * 2 ** attempt;
    console.error(`  ${res.status}，${Math.round(backoff / 1000)}s 后重试（第 ${attempt} 次）`);
    await sleep(backoff);
  }
}

const cacheName = (title) => `${Buffer.from(title).toString('base64url')}.wiki`;

/**
 * A page's wikitext, cached on disk. Returns null when there is no such page —
 * an empty cache file records that answer so re-runs do not ask again.
 */
export async function fetchPage(host, title, { cache = true, dir } = {}) {
  const cacheDir = join(CACHE_ROOT, dir ?? host.replace(/\W+/g, '_'));
  const file = join(cacheDir, cacheName(title));
  if (cache && existsSync(file)) {
    const text = readFileSync(file, 'utf8');
    return text === '' ? null : text;
  }
  const url = `https://${host}/w/index.php?title=${encodeURIComponent(title)}&action=raw`;
  let text = null;
  try {
    text = await (await wikiFetch(url)).text();
  } catch (e) {
    // A 404 is an answer — there is no such page, so cache it. Anything else
    // survived the retries and is a real failure; do not poison the cache with
    // a "missing" that every later run would trust.
    if (!/^404 /.test(e.message)) throw e;
  }
  mkdirSync(cacheDir, { recursive: true });
  writeFileSync(file, text ?? '', 'utf8');
  return text;
}

/** A site search, returning page titles best-first. */
export async function searchTitles(host, query, { limit = 10 } = {}) {
  const url =
    `https://${host}/w/api.php?action=query&list=search&format=json&srlimit=${limit}` +
    `&srsearch=${encodeURIComponent(query)}`;
  const data = await (await wikiFetch(url)).json();
  return (data.query?.search ?? []).map((r) => ({ title: r.title, size: r.size }));
}
