#!/usr/bin/env node

/** Add home-page status counts to a cached public snapshot without touching D1. */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const directory = resolve(process.argv[2] ?? 'apps/api/tree-snapshot/public');
const indexPath = resolve(directory, 'index.json');
const index = JSON.parse(readFileSync(indexPath, 'utf8'));
const files = readdirSync(directory);

function records(prefix) {
  return files
    .filter((name) => name.startsWith(`${prefix}-`) && name.endsWith('.json'))
    .flatMap((name) => Object.values(JSON.parse(readFileSync(resolve(directory, name), 'utf8'))));
}

const persons = records('persons');
const claims = records('claims').map((record) => record.claim);
const sources = records('sources');
const active = (claim) => !['retracted', 'superseded'].includes(claim.status);

index.status = {
  people: persons.filter((record) => record.summary?.person?.status === 'active').length,
  relationships: claims.filter((claim) => claim?.claim_kind === 'relationship' && active(claim)).length,
  sources: sources.length,
  claims: claims.filter((claim) => claim && active(claim)).length,
  generated_at: index.generated_at,
};

writeFileSync(indexPath, JSON.stringify(index));
console.log(JSON.stringify(index.status));
