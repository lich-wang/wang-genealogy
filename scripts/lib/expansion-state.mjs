// Which persons have already had their kinship queried.
//
// Expansion walks outward one generation per round, so each round only needs to
// ask about the people discovered in the previous one. Without this the loop
// re-queries the whole database every round and never has a clear finish line;
// with it, "no unexpanded persons left" is exactly the stopping condition.
//
// The file is a local cache (gitignored). Losing it costs time, not
// correctness: re-expanding an already-expanded person is idempotent.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const STATE_FILE = new URL('../.cache/expanded-keys.json', import.meta.url).pathname;

export function loadExpanded() {
  if (!existsSync(STATE_FILE)) return new Set();
  try {
    return new Set(JSON.parse(readFileSync(STATE_FILE, 'utf8')).keys ?? []);
  } catch {
    return new Set();
  }
}

export function saveExpanded(keys) {
  mkdirSync(dirname(STATE_FILE), { recursive: true });
  writeFileSync(STATE_FILE, JSON.stringify({ keys: [...keys].sort() }, null, 0), 'utf8');
}

export function markExpanded(keys) {
  const all = loadExpanded();
  for (const key of keys) all.add(key);
  saveExpanded(all);
  return all;
}
