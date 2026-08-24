// Thin wrapper around `wrangler d1 execute` for maintenance scripts.
//
// Read-only roster queries and one-off operator maintenance run through here;
// anything that creates or edits genealogy data must go through the HTTP API so
// the server-side invariants (kinship normalization, provenance gates,
// append-only revisions, audit rows) actually run.
//
// Requires wrangler credentials in the environment (CLOUDFLARE_API_TOKEN,
// CLOUDFLARE_ACCOUNT_ID) — see the repo's gitignored .env.

import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const API_DIR = new URL('../../apps/api/', import.meta.url).pathname;

/**
 * `wrangler d1 execute --file` prints progress lines ("├ Checking if file needs
 * uploading") before the JSON payload even in --json mode, so we cut everything
 * ahead of the first array/object.
 */
export function stripWranglerNoise(out) {
  const start = out.search(/^[[{]/m);
  return start > 0 ? out.slice(start) : out;
}

function run(sqlArgs, { database, remote, label }) {
  const out = execFileSync(
    'npx',
    ['wrangler', 'd1', 'execute', database, remote ? '--remote' : '--local', '--json', ...sqlArgs],
    { cwd: API_DIR, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );
  const parsed = JSON.parse(stripWranglerNoise(out));
  const failed = parsed.filter((r) => r.success === false);
  if (failed.length) throw new Error(`${label} failed: ${JSON.stringify(failed)}`);
  return parsed;
}

/** Run one statement and return its rows. */
export function d1Query(sql, options) {
  return run(['--command', sql], options)[0]?.results ?? [];
}

/** Run a multi-statement script (kept in a temp file, as wrangler requires). */
export function d1Script(sql, options) {
  const file = join(mkdtempSync(join(tmpdir(), 'wang-d1-')), 'statements.sql');
  writeFileSync(file, sql, 'utf8');
  return run(['--file', file], options);
}
