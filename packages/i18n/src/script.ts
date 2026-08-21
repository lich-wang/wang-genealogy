// Chinese script (繁體 / 简体) conversion for the display layer.
//
// Why this lives in the domain layer and not in a UI component:
//
//   * Stored claim text is EVIDENCE. A name copied from a Simplified source is
//     recorded exactly as the source wrote it, so the database inevitably holds
//     a mixture of 简体 and 繁體 values. We must never rewrite a stored value to
//     "normalize" its script — that would silently edit a sourced claim.
//   * Therefore the script the reader sees is a *projection* computed at render
//     time, exactly like a person's summary is computed from claims. The
//     original text stays available next to the projection.
//   * The same folding is what makes 王賁 and 王贲 resolve to ONE person in
//     search instead of looking like two different people.
//
// Bundle budget: the 繁體→简体 direction is many-to-one and small (~20 kB gzip),
// so it is always loaded. The 简体→繁體 direction needs phrase context to be
// fully correct (之后 → 之後, not 之后), and that phrase dictionary is ~400 kB
// gzip. We ship the cheap character-level converter eagerly and let the web app
// upgrade to the phrase-level one on demand — see ./hant-phrases.ts.

import { ConverterFactory } from 'opencc-js/core';
import {
  CJK_COMPATIBILITY_IDEOGRAPHS,
  ST_CHARACTERS,
  TS_CHARACTERS,
  TS_PHRASES,
} from './dicts.ts';

/** The two Chinese scripts the site renders. Values are BCP-47 script subtags. */
export const ZH_SCRIPTS = ['zh-Hans', 'zh-Hant'] as const;
export type ZhScript = (typeof ZH_SCRIPTS)[number];

export const DEFAULT_ZH_SCRIPT: ZhScript = 'zh-Hans';

export function isZhScript(value: unknown): value is ZhScript {
  return typeof value === 'string' && (ZH_SCRIPTS as readonly string[]).includes(value);
}

// --- converters ---------------------------------------------------------------

const toHansConverter = ConverterFactory(
  [CJK_COMPATIBILITY_IDEOGRAPHS],
  [TS_PHRASES, TS_CHARACTERS],
);

/** Rebuilt if a phrase dictionary is registered later (see ./hant-phrases.ts). */
let toHantConverter = ConverterFactory([CJK_COMPATIBILITY_IDEOGRAPHS], [ST_CHARACTERS]);
let hantPhrasesRegistered = false;

/**
 * Upgrade the 简体→繁體 converter with a phrase dictionary. Called by the web
 * app after it lazily fetches the (large) phrase data; the API never calls it,
 * which keeps the Worker bundle small.
 */
export function registerHantPhraseDict(phraseDict: string): void {
  toHantConverter = ConverterFactory(
    [CJK_COMPATIBILITY_IDEOGRAPHS],
    [phraseDict, ST_CHARACTERS],
  );
  hantPhrasesRegistered = true;
  hantCache.clear();
}

/** Whether the phrase-level 简体→繁體 dictionary is active. */
export function hasHantPhraseDict(): boolean {
  return hantPhrasesRegistered;
}

// --- memoization --------------------------------------------------------------

// Conversion is called once per rendered string per render pass, so a small
// bounded cache removes almost all of the cost. Cleared wholesale when full —
// no LRU bookkeeping needed for strings this short-lived.
const CACHE_LIMIT = 4096;
const hansCache = new Map<string, string>();
const hantCache = new Map<string, string>();

function memoized(cache: Map<string, string>, text: string, convert: (s: string) => string): string {
  const hit = cache.get(text);
  if (hit !== undefined) return hit;
  const value = convert(text);
  if (cache.size >= CACHE_LIMIT) cache.clear();
  cache.set(text, value);
  return value;
}

/** 繁體 → 简体. Deterministic and lossless enough to use as a folding key. */
export function toHans(text: string): string {
  if (!text) return text;
  return memoized(hansCache, text, toHansConverter);
}

/** 简体 → 繁體. Character-level until the phrase dictionary is registered. */
export function toHant(text: string): string {
  if (!text) return text;
  return memoized(hantCache, text, toHantConverter);
}

export function convertTo(script: ZhScript, text: string): string {
  return script === 'zh-Hans' ? toHans(text) : toHant(text);
}

// --- language tags ------------------------------------------------------------

/**
 * Whether a claim value carrying this `language` tag may be script-converted.
 * Romanizations (`zh-Latn-pinyin`) and non-Chinese text are left alone; an
 * absent tag is treated as Chinese, which is the site's working assumption.
 */
export function isConvertibleLanguage(language: string | null | undefined): boolean {
  if (!language) return true;
  const tag = language.trim().toLowerCase();
  if (tag.length === 0) return true;
  if (!tag.startsWith('zh')) return false;
  // zh-Latn / zh-Latn-pinyin / zh-Latn-wadegile …
  return !tag.split('-').includes('latn');
}

// --- detection ---------------------------------------------------------------

/**
 * Best-effort script of a Chinese string, by counting characters that only
 * exist in one script. Returns null for script-neutral text such as 王 — most
 * short Han strings genuinely carry no script signal, and guessing would be
 * worse than admitting it.
 */
export function detectScript(text: string): ZhScript | null {
  if (!text) return null;
  let hant = 0;
  let hans = 0;
  for (const char of text) {
    if (toHansConverter(char) !== char) hant += 1;
    else if (toHantConverter(char) !== char) hans += 1;
  }
  if (hant === hans) return null;
  return hant > hans ? 'zh-Hant' : 'zh-Hans';
}

/**
 * Script-insensitive equality: 王賁 and 王贲 are the same name. Folds both sides
 * to 简体 because that direction is many-to-one and therefore stable.
 */
export function sameScriptInsensitive(a: string, b: string): boolean {
  return toHans(a.trim()) === toHans(b.trim());
}

/** Folding key for grouping/deduplicating names regardless of script. */
export function foldKey(text: string): string {
  return toHans(text.trim());
}

/**
 * The forms a stored value could plausibly take, for `LIKE`-style lookups where
 * the stored side cannot be folded (search over `claim.value_json`). Ordered
 * with the caller's own input first and deduplicated.
 */
export function scriptVariants(text: string): string[] {
  const base = text.trim();
  if (!base) return [];
  const out = [base];
  for (const variant of [toHans(base), toHant(base)]) {
    if (variant && !out.includes(variant)) out.push(variant);
  }
  return out;
}
