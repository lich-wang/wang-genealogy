import fs from 'node:fs';
import path from 'node:path';
import { formatPersonMarkdown } from './lib/person-markdown.mjs';

const snapshotDir = path.resolve(process.argv[2] ?? 'apps/api/tree-snapshot/public');
const outputDir = path.resolve(process.argv[3] ?? 'content/persons');
fs.mkdirSync(outputDir, { recursive: true });

const summaries = new Map();
for (const name of fs.readdirSync(snapshotDir).filter((name) => /^persons-[0-9a-z]+\.json$/.test(name)).sort()) {
  const shard = JSON.parse(fs.readFileSync(path.join(snapshotDir, name), 'utf8'));
  for (const [id, entry] of Object.entries(shard)) summaries.set(id, entry.summary ?? entry);
}

if (summaries.size === 0) throw new Error(`没有在 ${snapshotDir} 找到人物快照`);
for (const [id, summary] of [...summaries].sort(([a], [b]) => a.localeCompare(b))) {
  fs.writeFileSync(path.join(outputDir, `${id}.md`), formatPersonMarkdown(summary));
}
console.log(`已迁移 ${summaries.size} 位人物到 ${outputDir}`);
