// CBDB (China Biographical Database) access for the kinship pipeline.
//
// CBDB answers one person per request, so responses are cached on disk and
// requests are spaced out — it is a shared academic service, not a CDN.
//
// Licensing: CBDB data is CC BY-NC-SA 4.0. Every claim we take from it must
// carry that license on its own Source record; it can never be folded into the
// site's CC BY-SA contribution license or relabelled CC0.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { mapChineseKinshipTerm } from '../../packages/validation/src/kinship.ts';

const API = 'https://cbdb.fas.harvard.edu/cbdbapi/person.php';
const USER_AGENT = 'wang-genealogy-kinship/0.2 (https://wang-genealogy-web.pages.dev)';
const CACHE_DIR = new URL('../.cache/cbdb/', import.meta.url).pathname;
const REQUEST_SPACING_MS = 500;
const MAX_ATTEMPTS = 4;

export const CBDB_SOURCE_TEMPLATE = {
  source_type: 'api_record',
  creator: 'China Biographical Database (CBDB)',
  publisher: 'Harvard University / Academia Sinica / Peking University',
  license_code: 'CC-BY-NC-SA-4.0',
};

export const cbdbPersonUrl = (id) => `${API}?id=${id}&o=json`;

let lastRequestAt = 0;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * One person record, from cache when possible. Returns null for ids CBDB does
 * not know (or answers unusably), which callers treat as "no CBDB data".
 */
export async function fetchPerson(id, { cache = true } = {}) {
  const key = String(id).replace(/\D/g, '');
  if (!key) return null;
  const file = join(CACHE_DIR, `${key}.json`);
  if (cache && existsSync(file)) {
    const cached = JSON.parse(readFileSync(file, 'utf8'));
    return cached.__missing ? null : cached;
  }

  // A shared academic service resets connections under load; back off and retry
  // rather than hammering it, and never cache a transport failure as "missing".
  let person = null;
  let transportError = null;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    const wait = REQUEST_SPACING_MS - (Date.now() - lastRequestAt);
    if (wait > 0) await sleep(wait);
    lastRequestAt = Date.now();
    try {
      const res = await fetch(cbdbPersonUrl(key), { headers: { 'user-agent': USER_AGENT } });
      const text = await res.text();
      transportError = null;
      if (res.ok) {
        try {
          const info = JSON.parse(text)?.Package?.PersonAuthority?.PersonInfo?.Person;
          person = Array.isArray(info) ? (info[0] ?? null) : (info ?? null);
        } catch {
          person = null;
        }
      }
      break;
    } catch (err) {
      transportError = err;
      if (attempt < MAX_ATTEMPTS) await sleep(1000 * 2 ** (attempt - 1));
    }
  }
  if (transportError) {
    console.error(`  ! CBDB ${key} 请求失败（${transportError.message}），本次跳过`);
    return null;
  }
  mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(file, JSON.stringify(person ?? { __missing: true }), 'utf8');
  return person;
}

const asArray = (value) => (value == null ? [] : Array.isArray(value) ? value : [value]);

/** Trim CBDB's disambiguating parenthetical: "吳氏(王益妻)" -> "吳氏". */
export function cleanName(name) {
  return String(name ?? '')
    .replace(/[（(][^）)]*[）)]\s*$/u, '')
    .trim();
}

export function basicInfo(person) {
  const b = person?.BasicInfo;
  if (!b) return null;
  const year = (value) => {
    const n = Number(String(value ?? '').trim());
    return Number.isFinite(n) && n !== 0 ? n : null;
  };
  return {
    id: String(b.PersonId),
    name: cleanName(b.ChName) || cleanName(b.EngName),
    name_raw: String(b.ChName ?? '').trim(),
    english_name: String(b.EngName ?? '').trim() || null,
    birth_year: year(b.YearBirth),
    death_year: year(b.YearDeath),
    dynasty: String(b.Dynasty ?? '').trim() || null,
    dynasty_birth: String(b.DynastyBirth ?? '').trim() || null,
  };
}

/** Kinship rows for one CBDB person, already mapped onto our vocabulary. */
export function kinship(person) {
  const rows = asArray(person?.PersonKinshipInfo?.Kinship ?? person?.PersonKinshipInfo);
  return rows
    .filter((row) => row && row.KinPersonId)
    .map((row) => {
      const mapped = mapChineseKinshipTerm(row.KinRelName);
      return {
        cbdb: String(row.KinPersonId),
        name: cleanName(row.KinPersonName),
        name_raw: String(row.KinPersonName ?? '').trim(),
        kind: mapped.input,
        term: mapped.term,
        term_raw: mapped.raw,
        // CBDB records which work the statement came from; keep it so a reader
        // can go one step past CBDB itself.
        cited_source: String(row.Source ?? '').trim() || null,
      };
    });
}
