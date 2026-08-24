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

const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

/**
 * Long import runs make thousands of these calls, and the Cloudflare API drops
 * one occasionally ({"error":{"text":"fetch failed"}}). Retry transient
 * failures rather than losing a multi-hour expansion to one dropped packet;
 * a SQL error is not transient and fails immediately.
 */
function run(sqlArgs, { database, remote, label }, attempts = 4) {
  const argv = ['wrangler', 'd1', 'execute', database, remote ? '--remote' : '--local', '--json', ...sqlArgs];
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    let out;
    try {
      out = execFileSync('npx', argv, { cwd: API_DIR, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
    } catch (err) {
      out = String(err.stdout ?? '');
      lastError = err;
    }
    let parsed;
    try {
      parsed = JSON.parse(stripWranglerNoise(out));
    } catch {
      parsed = null;
    }
    if (Array.isArray(parsed)) {
      const failed = parsed.filter((r) => r.success === false);
      if (failed.length) throw new Error(`${label} failed: ${JSON.stringify(failed)}`);
      return parsed;
    }
    const message = parsed?.error?.text ?? out.slice(0, 200);
    lastError = new Error(`${label}: ${message}`);
    const transient = /fetch failed|timeout|ECONN|502|503|504|Internal error/i.test(message);
    if (!transient) throw lastError;
    console.error(`  ! D1 ${label} 第 ${attempt} 次失败（${message}），重试中`);
    if (attempt < attempts) sleep(2000 * attempt);
  }
  throw lastError ?? new Error(`${label} failed`);
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
