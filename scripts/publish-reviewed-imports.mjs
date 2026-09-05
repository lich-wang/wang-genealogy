#!/usr/bin/env node

/** Publish reviewed, pending API import plans as immutable static resources. */
import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const registryPath = resolve(root, 'scripts/reviewed-import-queue.json');
const output = resolve(process.argv[2] ?? resolve(root, 'apps/api/tree-snapshot/import-queue'));
if (!output.startsWith(resolve(root, 'apps/api/tree-snapshot') + '/')) {
  throw new Error(`unsafe import queue output: ${output}`);
}

const registry = JSON.parse(readFileSync(registryPath, 'utf8'));
mkdirSync(dirname(output), { recursive: true });
const stagingRoot = mkdtempSync(join(dirname(output), '.reviewed-imports-stage-'));
const stagedOutput = resolve(stagingRoot, basename(output));
mkdirSync(stagedOutput, { recursive: true });
const publishedNames = new Set();

const published = registry.entries.map((entry) => {
  const plan = entry.plan ? JSON.parse(readFileSync(resolve(root, entry.plan), 'utf8')) : null;
  let artifactPaths;
  let publishedShards;
  if (entry.kind === 'person_expansion_shards') {
    const manifest = JSON.parse(readFileSync(resolve(root, entry.manifest), 'utf8'));
    const manifestDir = dirname(resolve(root, entry.manifest));
    let people = 0;
    let sources = 0;
    let relationships = 0;
    publishedShards = manifest.shards.map((shard) => {
      const relativePath = `${entry.shard_directory}/${shard.file}`;
      const shardPlan = JSON.parse(readFileSync(resolve(root, relativePath), 'utf8'));
      if (
        shardPlan.persons.length !== shard.people ||
        shardPlan.sources.length !== shard.sources ||
        shardPlan.edges.length !== shard.relationships
      ) throw new Error(`${entry.id}: ${shard.file} count mismatch`);
      people += shard.people;
      sources += shard.sources;
      relationships += shard.relationships;
      if (resolve(root, relativePath) !== resolve(manifestDir, shard.file)) {
        throw new Error(`${entry.id}: shard path is outside manifest directory`);
      }
      return shard.file;
    });
    if (people !== entry.people_accepted || people !== manifest.accepted) throw new Error(`${entry.id}: people_accepted count mismatch`);
    if (manifest.skipped !== entry.people_rejected) throw new Error(`${entry.id}: people_rejected count mismatch`);
    if (sources !== entry.sources || relationships !== entry.relationships) throw new Error(`${entry.id}: source/relationship count mismatch`);
    if (entry.manual_review !== 0) throw new Error(`${entry.id}: unresolved manual review`);
    artifactPaths = [entry.manifest, entry.report, ...publishedShards.map((file) => `${entry.shard_directory}/${file}`)];
  } else if (entry.kind === 'person_expansion') {
    const stats = JSON.parse(readFileSync(resolve(root, entry.stats), 'utf8'));
    const actual = {
      people_accepted: stats.roster_review.accepted,
      people_rejected: stats.roster_review.excluded,
      plan_people: plan.persons.length,
      relationships: plan.edges.length,
    };
    for (const key of Object.keys(actual)) {
      if (actual[key] !== entry[key]) throw new Error(`${entry.id}: ${key} count mismatch`);
    }
    if (entry.manual_review !== 0) throw new Error(`${entry.id}: unresolved manual review`);
    artifactPaths = [entry.plan, entry.stats, entry.report];
  } else {
    const decisions = JSON.parse(readFileSync(resolve(root, entry.decisions), 'utf8'));
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
    artifactPaths = [entry.plan, entry.decisions, entry.report];
  }

  const files = artifactPaths.map((relativePath) => {
    const source = resolve(root, relativePath);
    const name = basename(relativePath);
    if (publishedNames.has(name)) throw new Error(`duplicate published artifact name: ${name}`);
    publishedNames.add(name);
    const body = readFileSync(source);
    copyFileSync(source, resolve(stagedOutput, name));
    return {
      name,
      bytes: body.length,
      sha256: createHash('sha256').update(body).digest('hex'),
    };
  });
  const paths = Object.fromEntries(
    ['plan', 'decisions', 'stats', 'report', 'manifest']
      .filter((key) => entry[key])
      .map((key) => [key, basename(entry[key])]),
  );
  return { ...entry, ...paths, ...(publishedShards ? { shards: publishedShards } : {}), files };
});

if (publishedNames.has('index.json')) throw new Error('artifact name index.json is reserved');
writeFileSync(resolve(stagedOutput, 'index.json'), JSON.stringify({
  schema_version: registry.schema_version,
  purpose: 'reviewed plans pending idempotent import through the HTTP API',
  entries: published,
}));
const backupRoot = mkdtempSync(join(dirname(output), '.reviewed-imports-backup-'));
const backupOutput = resolve(backupRoot, basename(output));
let movedExisting = false;
try {
  if (existsSync(output)) {
    renameSync(output, backupOutput);
    movedExisting = true;
  }
  renameSync(stagedOutput, output);
  rmSync(backupRoot, { recursive: true, force: true });
  rmSync(stagingRoot, { recursive: true, force: true });
} catch (error) {
  if (movedExisting && !existsSync(output) && existsSync(backupOutput)) renameSync(backupOutput, output);
  rmSync(backupRoot, { recursive: true, force: true });
  rmSync(stagingRoot, { recursive: true, force: true });
  throw error;
}
console.log(JSON.stringify({ output, entries: published.length, files: published.reduce((sum, entry) => sum + entry.files.length, 1) }));
