#!/usr/bin/env node

/** Publish reviewed, pending API import plans as immutable static resources. */
import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const registryPath = resolve(root, 'scripts/reviewed-import-queue.json');
const output = resolve(process.argv[2] ?? resolve(root, 'apps/api/tree-snapshot/import-queue'));
if (!output.startsWith(resolve(root, 'apps/api/tree-snapshot') + '/')) {
  throw new Error(`unsafe import queue output: ${output}`);
}

const registry = JSON.parse(readFileSync(registryPath, 'utf8'));
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

const published = registry.entries.map((entry) => {
  const decisions = JSON.parse(readFileSync(resolve(root, entry.decisions), 'utf8'));
  const plan = JSON.parse(readFileSync(resolve(root, entry.plan), 'utf8'));
  const actual = {
    accepted: decisions.accepted.length,
    rejected: decisions.rejected.length,
    repairs: decisions.repairs?.length ?? 0,
    manual_review: decisions.manual_review.length,
  };
  for (const key of Object.keys(actual)) {
    if (actual[key] !== entry[key]) throw new Error(`${entry.id}: ${key} count mismatch`);
  }
  if (plan.edges.length !== entry.accepted) throw new Error(`${entry.id}: approved plan edge count mismatch`);

  const files = [entry.plan, entry.decisions, entry.report].map((relativePath) => {
    const source = resolve(root, relativePath);
    const name = basename(relativePath);
    const body = readFileSync(source);
    copyFileSync(source, resolve(output, name));
    return {
      name,
      bytes: body.length,
      sha256: createHash('sha256').update(body).digest('hex'),
    };
  });
  return { ...entry, plan: basename(entry.plan), decisions: basename(entry.decisions), report: basename(entry.report), files };
});

writeFileSync(resolve(output, 'index.json'), JSON.stringify({
  schema_version: registry.schema_version,
  purpose: 'reviewed plans pending idempotent import through the HTTP API',
  entries: published,
}));
console.log(JSON.stringify({ output, entries: published.length, files: published.length * 3 + 1 }));
