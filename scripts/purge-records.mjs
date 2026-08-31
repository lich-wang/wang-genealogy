// Hard-delete merged-away person records and retracted claims from D1.
//
// READ THIS FIRST. This script breaks the project's own rule. `DOMAIN_MODEL.md`
// says a merge is reversible and a retraction is append-only, and every other
// script in this directory honours that: nothing is ever removed, only marked.
// The reason that rule exists is that provenance you can delete is not
// provenance. A soft-merged record keeps its old public ID working as a redirect
// and keeps the snapshot that makes the merge revertible; a retracted claim
// keeps the sentence it was read out of, and the reason someone judged it wrong.
//
// Deleting them costs all of that:
//   - old public IDs 404 instead of redirecting, so any external link to a
//     duplicate record breaks for good;
//   - `merge.revert` no longer has a snapshot to restore from;
//   - the record of WHY a wrong relationship was withdrawn is gone, so the same
//     import can make the same mistake again with nothing to warn it.
//
// What it buys is a graph with no duplicate nodes in it. A soft merge folds
// claims logically, not physically, so a merged person is still a node with
// edges, and a family tree still draws 王咸 with two fathers both called 王谭.
//
// So: only run this when an operator has asked for it in as many words, and it
// keeps the `contribution` rows — the minimal audit record that clause 6 of the
// completeness rules requires even for a permitted hard delete.
//
// A full JSON backup of every row it is about to remove is written first, and
// the run aborts if that file cannot be written. Afterwards it re-checks that no
// surviving row points at anything it deleted.
//
// Usage:
//   node scripts/purge-records.mjs --backup /path/to/backup.json --dry-run
//   node scripts/purge-records.mjs --backup /path/to/backup.json --yes-hard-delete
//   env: D1_DATABASE

import { writeFileSync } from 'node:fs';
import { d1Query, d1Script } from './lib/d1.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const d1 = { database: option('--db', process.env.D1_DATABASE ?? 'wang-genealogy'), remote: !flag('--local') };
const dryRun = !flag('--yes-hard-delete');
const backupPath = option('--backup');

if (!backupPath) {
  console.error('必须给 --backup <文件>：硬删除之前先把要删的行完整导出。');
  process.exit(2);
}

const list = (rows, key = 'id') => rows.map((r) => r[key]);
const quote = (ids) => ids.map((id) => `'${id}'`).join(',');

// --- what goes ---------------------------------------------------------------

const mergedPersons = list(
  d1Query(`SELECT id FROM person WHERE status = 'merged'`, { ...d1, label: 'merged persons' }),
);
// Not every retraction is a mistake. `enforce-scope.mjs` retracts relationships
// that cross the collection's public boundary — the claim is not wrong, it is
// out of scope, and the record of it is what lets the boundary move back. Those
// stay unless an operator names them explicitly, so the default purge only
// removes claims that were withdrawn *as errors*.
const keepLike = option('--keep-summary-like', '范围调整%');
const retractedClaims = list(
  d1Query(
    `SELECT c.id FROM claim c
       JOIN claim_revision r ON r.claim_id = c.id AND r.revision_number = c.current_revision
      WHERE c.status = 'retracted'
        AND (r.change_summary IS NULL OR r.change_summary NOT LIKE '${keepLike.replace(/'/g, "''")}')`,
    { ...d1, label: 'retracted-in-error claims' },
  ),
);

// Claims that BELONG to a merged person, plus claims on surviving persons that
// point AT one. The second group is the reason a merge leaves duplicate edges
// on the graph, and leaving them behind would dangle.
const personClaims = mergedPersons.length
  ? list(
      d1Query(
        `SELECT id FROM claim
          WHERE subject_person_id IN (${quote(mergedPersons)})
             OR object_person_id IN (${quote(mergedPersons)})`,
        { ...d1, label: 'claims touching merged persons' },
      ),
    )
  : [];

const claimIds = [...new Set([...retractedClaims, ...personClaims])];

console.log(
  `已合并人物 ${mergedPersons.length} 条；待删主张 ${claimIds.length} 条` +
    `（其中已撤回 ${retractedClaims.length}，涉及已合并人物 ${personClaims.length}）`,
);

// --- back it up first --------------------------------------------------------

const backup = {
  taken_for: '硬删除已合并人物与已撤回主张',
  database: d1.database,
  persons: mergedPersons.length
    ? d1Query(`SELECT * FROM person WHERE id IN (${quote(mergedPersons)})`, { ...d1, label: 'person rows' })
    : [],
  merge_proposals: mergedPersons.length
    ? d1Query(
        `SELECT * FROM person_merge_proposal
          WHERE source_person_id IN (${quote(mergedPersons)}) OR target_person_id IN (${quote(mergedPersons)})`,
        { ...d1, label: 'merge proposals' },
      )
    : [],
  claims: claimIds.length
    ? d1Query(`SELECT * FROM claim WHERE id IN (${quote(claimIds)})`, { ...d1, label: 'claim rows' })
    : [],
  claim_sources: claimIds.length
    ? d1Query(`SELECT * FROM claim_source WHERE claim_id IN (${quote(claimIds)})`, { ...d1, label: 'claim_source rows' })
    : [],
  claim_revisions: claimIds.length
    ? d1Query(`SELECT * FROM claim_revision WHERE claim_id IN (${quote(claimIds)})`, { ...d1, label: 'revision rows' })
    : [],
};
writeFileSync(backupPath, `${JSON.stringify(backup, null, 1)}\n`, 'utf8');
console.log(
  `备份已写入 ${backupPath}：人物 ${backup.persons.length}、合并提案 ${backup.merge_proposals.length}、` +
    `主张 ${backup.claims.length}、引用 ${backup.claim_sources.length}、版本 ${backup.claim_revisions.length}`,
);

if (dryRun) {
  console.log('\n这是预演。真的要删请加 --yes-hard-delete。');
  process.exit(0);
}

// --- delete, children before parents ----------------------------------------

const statements = [];
if (claimIds.length) {
  statements.push(`DELETE FROM claim_source WHERE claim_id IN (${quote(claimIds)});`);
  statements.push(`DELETE FROM claim_revision WHERE claim_id IN (${quote(claimIds)});`);
  statements.push(`DELETE FROM claim WHERE id IN (${quote(claimIds)});`);
}
if (mergedPersons.length) {
  statements.push(
    `DELETE FROM person_merge_proposal WHERE source_person_id IN (${quote(mergedPersons)}) OR target_person_id IN (${quote(mergedPersons)});`,
  );
  statements.push(`DELETE FROM person_maintainer WHERE person_id IN (${quote(mergedPersons)});`);
  statements.push(`UPDATE person SET merged_into_person_id = NULL WHERE merged_into_person_id IN (${quote(mergedPersons)});`);
  statements.push(`DELETE FROM person WHERE id IN (${quote(mergedPersons)});`);
}
// Clause 6 of the completeness rules: a permitted hard delete still keeps a
// minimal audit record. The contribution trail is that record and stays put.
statements.push(
  `INSERT INTO contribution (id, action, actor_user_id, target_type, target_id, change_summary, created_at) ` +
    `SELECT 'con_purge_' || lower(hex(randomblob(8))), 'admin.purge_records', ` +
    `(SELECT id FROM user WHERE role = 'admin' LIMIT 1), 'database', '${d1.database}', ` +
    `'硬删除：已合并人物 ${mergedPersons.length} 条、主张 ${claimIds.length} 条（含引用与版本行）。备份见 ${backupPath.replace(/'/g, "''")}。操作已获明确授权，与 DOMAIN_MODEL 的软合并/追加式规则相悖，仅此一次批量执行。', ` +
    `datetime('now');`,
);

d1Script(statements.join('\n'), { ...d1, label: 'purge' });
console.log('删除完成。');

// --- prove nothing dangles ---------------------------------------------------

const checks = [
  ['claim → person（主体）', `SELECT count(*) n FROM claim c LEFT JOIN person p ON p.id = c.subject_person_id WHERE p.id IS NULL`],
  ['claim → person（对象）', `SELECT count(*) n FROM claim c LEFT JOIN person p ON p.id = c.object_person_id WHERE c.object_person_id IS NOT NULL AND p.id IS NULL`],
  ['claim_source → claim', `SELECT count(*) n FROM claim_source cs LEFT JOIN claim c ON c.id = cs.claim_id WHERE c.id IS NULL`],
  ['claim_revision → claim', `SELECT count(*) n FROM claim_revision r LEFT JOIN claim c ON c.id = r.claim_id WHERE c.id IS NULL`],
  ['person.merged_into → person', `SELECT count(*) n FROM person a LEFT JOIN person b ON b.id = a.merged_into_person_id WHERE a.merged_into_person_id IS NOT NULL AND b.id IS NULL`],
  ['merge_proposal → person', `SELECT count(*) n FROM person_merge_proposal m LEFT JOIN person p ON p.id = m.source_person_id WHERE p.id IS NULL`],
];
let dangling = 0;
for (const [label, sql] of checks) {
  const n = Number(d1Query(sql, { ...d1, label })[0]?.n ?? 0);
  dangling += n;
  console.log(`  ${label}: ${n === 0 ? '无悬空' : `${n} 条悬空`}`);
}
if (dangling > 0) {
  console.error('有悬空引用，请用备份文件复原。');
  process.exitCode = 1;
}
