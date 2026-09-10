#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const rootDir = resolve(new URL('..', import.meta.url).pathname);
const contentDir = resolve(rootDir, option('--content', 'content/persons'));
const outputPath = resolve(rootDir, option('--out', 'scripts/.cache/person-online-review/queue.json'));
const statePath = resolve(rootDir, option('--state', 'scripts/.cache/person-online-review/state.json'));
const pathPrefix = `${contentDir.slice(rootDir.length + 1).replaceAll('\\', '/')}/`;

const log = execFileSync(
  'git',
  ['log', '--diff-filter=A', '--format=@@%cI\t%H', '--name-only', '--', pathPrefix],
  { cwd: rootDir, encoding: 'utf8', maxBuffer: 128 * 1024 * 1024 },
);

// git log is newest first. Overwriting while walking it leaves the oldest A
// record for a path, which is the time that file first entered current history.
const additions = new Map();
let commit = null;
for (const line of log.split(/\r?\n/)) {
  if (line.startsWith('@@')) {
    const [committedAt, sha] = line.slice(2).split('\t');
    commit = { committed_at: committedAt, commit: sha };
  } else if (commit && line.startsWith(pathPrefix) && line.endsWith('.md')) {
    additions.set(line, commit);
  }
}

const entries = readdirSync(contentDir)
  .filter((name) => name.endsWith('.md'))
  .map((filename) => {
    const path = `${pathPrefix}${filename}`;
    // Queue generation only needs top-level scalar fields. Avoid parsing all
    // nested claim/source YAML for tens of thousands of large person files.
    const frontmatter = readFileSync(resolve(contentDir, filename), 'utf8').split('\n---', 1)[0];
    const scalar = (name) => frontmatter.match(new RegExp(`^${name}:\\s*(.+)$`, 'm'))?.[1]?.trim() ?? null;
    const added = additions.get(path) ?? null;
    return {
      person_id: scalar('id'),
      display_name: scalar('display_name'),
      status: scalar('status'),
      path,
      added_at: added?.committed_at ?? null,
      added_commit: added?.commit ?? null,
    };
  })
  .sort((a, b) =>
    String(b.added_at ?? '').localeCompare(String(a.added_at ?? '')) ||
    a.path.localeCompare(b.path) ||
    a.person_id.localeCompare(b.person_id),
  )
  .map((entry, index) => ({ position: index + 1, ...entry }));

const queue = {
  schema: 'wang-person-online-review-queue/v1',
  generated_at: new Date().toISOString(),
  ordering: 'first Git addition commit time descending; path and person_id ascending as tie-breakers',
  total: entries.length,
  missing_git_addition: entries.filter((entry) => !entry.added_at).length,
  entries,
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(queue, null, 2)}\n`);

if (!readState(statePath)) {
  mkdirSync(dirname(statePath), { recursive: true });
  writeFileSync(statePath, `${JSON.stringify({
    schema: 'wang-person-online-review-state/v1',
    queue_generated_at: queue.generated_at,
    next_position: 1,
    completed: 0,
    results: {},
  }, null, 2)}\n`);
}

console.log(JSON.stringify({
  output: outputPath,
  state: statePath,
  total: queue.total,
  missing_git_addition: queue.missing_git_addition,
  first: entries.slice(0, 10),
}, null, 2));

function readState(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    if (error?.code === 'ENOENT') return null;
    throw error;
  }
}
