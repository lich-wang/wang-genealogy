// Lazy upgrade of the 简体→繁體 converter to phrase level.
//
// Kept in its own module so that importing @wang/i18n does NOT pull the ~1 MB
// phrase dictionary into a bundle. Only the web app imports this file, and only
// the dictionary itself is dynamically imported, so it becomes a separate chunk
// fetched once a reader actually asks for 繁體.

import { hasHantPhraseDict, registerHantPhraseDict } from './script.ts';

function importStPhrases(): Promise<{ default: string }> {
  // @ts-ignore untyped opencc-js dictionary subpath (see ./dicts.ts)
  return import('opencc-js/dict/STPhrases');
}

let pending: Promise<boolean> | null = null;

/**
 * Fetch and register the phrase dictionary. Idempotent, concurrency-safe, and
 * non-fatal: if the chunk fails to load we keep the character-level converter,
 * which is already correct for names and most place names.
 */
export function loadHantPhrases(): Promise<boolean> {
  if (hasHantPhraseDict()) return Promise.resolve(true);
  pending ??= importStPhrases()
    .then((mod) => {
      registerHantPhraseDict(mod.default);
      return true;
    })
    .catch(() => {
      pending = null;
      return false;
    });
  return pending;
}
