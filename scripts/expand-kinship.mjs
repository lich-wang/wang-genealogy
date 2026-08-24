// Walk the kinship graph outward one generation per round until nothing new is
// found.
//
//   node scripts/expand-kinship.mjs [--max-rounds 20] [--max-new 400]
//                                   [--sources wikidata,cbdb] [--stop-at 2000]
//
// Each round is: fetch-kinship (ask the unexpanded frontier) → import-kinship
// (write through the API) and stops when a round has no one left to ask about.
// Both steps are idempotent, so an interrupted run is resumed by running this
// again — `scripts/.cache/expanded-keys.json` remembers who has been asked.
//
// `--stop-at` is a guard, not a target: this database is a 王-surname genealogy,
// and following parent/child links through imperial in-laws can pull in whole
// dynasties. When the person count passes it the loop stops and says so instead
// of quietly importing another few thousand people.

import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { d1Query } from './lib/d1.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const option = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const maxRounds = Number(option('--max-rounds', '20'));
const maxNew = option('--max-new', '400');
const sources = option('--sources', 'wikidata,cbdb');
const stopAt = Number(option('--stop-at', '2000'));
const planPath = new URL('kinship-data.json', import.meta.url).pathname;
const d1 = {
  database: option('--db', process.env.D1_DATABASE ?? 'wang-genealogy'),
  remote: !flag('--local'),
};

const scriptDir = new URL('.', import.meta.url).pathname;

function run(script, scriptArgs) {
  const result = spawnSync('node', [`${scriptDir}${script}`, ...scriptArgs], {
    stdio: ['ignore', 'inherit', 'inherit'],
    env: process.env,
  });
  if (result.status !== 0) {
    throw new Error(`${script} exited with ${result.status}`);
  }
}

const personCount = () =>
  Number(
    d1Query("SELECT COUNT(*) AS n FROM person WHERE status = 'active'", {
      ...d1,
      label: 'count',
    })[0]?.n ?? 0,
  );

let round = 0;
let before = personCount();
console.log(`起点：${before} 人`);

while (round < maxRounds) {
  round += 1;
  console.log(`\n═══ 第 ${round} 轮 ═══`);
  run('fetch-kinship.mjs', ['--hops', '1', '--max-new', maxNew, '--sources', sources, ...(flag('--local') ? ['--local'] : [])]);

  const plan = JSON.parse(readFileSync(planPath, 'utf8'));
  if (!plan.expanded_keys?.length) {
    console.log('没有待展开的人物，扩展完成。');
    break;
  }
  if (plan.persons.length === 0 && plan.edges.length === 0) {
    console.log('本轮没有发现新的人物或关系，扩展完成。');
    run('import-kinship.mjs', []); // still records the frontier as expanded
    break;
  }

  run('import-kinship.mjs', []);

  const after = personCount();
  console.log(`第 ${round} 轮：${before} → ${after} 人（+${after - before}）`);
  before = after;

  if (after >= stopAt) {
    console.log(
      `\n达到 --stop-at ${stopAt} 上限，暂停。` +
        '\n继续请提高 --stop-at；这是护栏而非终点，剩余前沿仍记录在 scripts/.cache/expanded-keys.json。',
    );
    break;
  }
  if (plan.capped_relationships > 0) {
    console.log(`（本轮因 --max-new 上限留下 ${plan.capped_relationships} 条关系，下一轮会继续）`);
  }
}

if (round >= maxRounds) console.log(`\n达到 --max-rounds ${maxRounds}，暂停。`);
console.log(`\n最终：${personCount()} 人`);
