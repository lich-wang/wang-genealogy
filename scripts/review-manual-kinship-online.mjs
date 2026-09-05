#!/usr/bin/env node

/** Collect fresh Wikidata and CBDB evidence for Luna's manual kinship queue. */
import { readFileSync, writeFileSync } from 'node:fs';
import { foldKey } from '../packages/i18n/src/index.ts';

const input = process.argv[2] ?? 'scripts/luna-kinship-round3-decisions-2026-09.json';
const output = process.argv[3] ?? 'scripts/luna-kinship-round3-online-evidence-2026-09.json';
const decisions = JSON.parse(readFileSync(input, 'utf8')).manual_review;
const qids = [...new Set(decisions.flatMap((item) => item.id.match(/Q\d+/g) ?? []))];
const entities = {};
for (let i = 0; i < qids.length; i += 40) {
  const ids = qids.slice(i, i + 40).join('|');
  const url = `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${ids}&props=claims|labels|descriptions&languages=zh|zh-hans|zh-hant&format=json&origin=*`;
  const response = await fetch(url, { headers: { 'user-agent': 'wang-genealogy-review/1.0' } });
  if (!response.ok) throw new Error(`Wikidata ${response.status}`);
  Object.assign(entities, (await response.json()).entities);
}

const cbdbIds = [...new Set(decisions.flatMap((item) =>
  item.evidence.map((e) => /^cbdb:(\d+)$/.exec(e.source_key)?.[1]).filter(Boolean)))];
const cbdb = {};
for (const id of cbdbIds) {
  const url = `https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=${id}&o=json`;
  const response = await fetch(url, { headers: { 'user-agent': 'wang-genealogy-review/1.0' } });
  if (!response.ok) throw new Error(`CBDB ${id}: ${response.status}`);
  cbdb[id] = await response.json();
}

const qid = (key) => /^wd:(Q\d+)$/.exec(key)?.[1] ?? null;
const hasTarget = (entity, property, target) =>
  (entity?.claims?.[property] ?? []).some((claim) => claim.mainsnak?.datavalue?.value?.id === target);
const names = (item) => item.kind === 'spouse'
  ? [item.endpoints.a_name, item.endpoints.b_name]
  : [item.endpoints.parent_name, item.endpoints.child_name];

const reviews = decisions.map((item) => {
  const [leftKey, rightKey] = item.kind === 'spouse'
    ? [item.endpoints.a, item.endpoints.b]
    : [item.endpoints.parent, item.endpoints.child];
  const leftQid = qid(leftKey);
  const rightQid = qid(rightKey);
  const wdChecks = [];
  if (leftQid && rightQid) {
    if (item.kind === 'spouse') {
      wdChecks.push({ side: leftQid, property: 'P26', confirmed: hasTarget(entities[leftQid], 'P26', rightQid) });
      wdChecks.push({ side: rightQid, property: 'P26', confirmed: hasTarget(entities[rightQid], 'P26', leftQid) });
    } else {
      wdChecks.push({ side: leftQid, property: 'P40', confirmed: hasTarget(entities[leftQid], 'P40', rightQid) });
      wdChecks.push({ side: rightQid, property: 'P22/P25', confirmed: hasTarget(entities[rightQid], 'P22', leftQid) || hasTarget(entities[rightQid], 'P25', leftQid) });
    }
  }
  const wantedNames = new Set(names(item).map(foldKey));
  const cbdbChecks = item.evidence.flatMap((e) => {
    const id = /^cbdb:(\d+)$/.exec(e.source_key)?.[1];
    if (!id || !cbdb[id]) return [];
    const record = cbdb[id];
    const anchor = record.BasicInfo?.ChName ?? '';
    const matches = (record.PersonKinshipInfo?.Kinship ?? []).filter((kin) => {
      if (!wantedNames.has(foldKey(anchor)) || !wantedNames.has(foldKey(kin.KinPersonName ?? ''))) return false;
      if (item.kind === 'spouse') return /妻|夫|配偶/.test(kin.KinRelName ?? '');
      if (item.kind === 'adoptive_parent') return /嗣父|養父|养父/.test(kin.KinRelName ?? '');
      return /父|母|子|女/.test(kin.KinRelName ?? '');
    });
    return [{ id, url: `https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=${id}&o=json`, anchor, matches }];
  });
  const wdConfirmed = wdChecks.filter((check) => check.confirmed).length;
  const sourcedCbdb = cbdbChecks.some((check) => check.matches.some((match) => match.Source && match.Source !== '未知'));
  let recommendation = 'manual_review';
  let reason = '在线资料仍不足以排除同名误挂。';
  if (item.kind === 'adoptive_parent') {
    recommendation = sourcedCbdb ? 'replace_existing_with_adoptive' : 'manual_review';
    reason = sourcedCbdb
      ? 'CBDB 在线记录以具名文献支持嗣父关系，应先撤回同端点的亲生关系，再导入收养关系。'
      : reason;
  } else if (sourcedCbdb || wdConfirmed === 2) {
    recommendation = 'accepted';
    reason = sourcedCbdb
      ? 'CBDB 在线记录给出对应关系及具名底本，可排除仅凭同名自动挂接。'
      : 'Wikidata 两端在线条目互相指向同一稳定 QID，可确认本计划使用的是对应同名人物。';
  } else if (wdConfirmed === 1 && item.evidence.length > 1) {
    recommendation = 'accepted_low_confidence';
    reason = '在线 Wikidata 明确单向指向稳定 QID，且计划另有独立记录；可低置信度采纳。';
  }
  return { ...item, online: { wikidata: wdChecks, cbdb: cbdbChecks }, recommendation, reason };
});

writeFileSync(output, JSON.stringify({
  schema_version: 1,
  reviewed_at: new Date().toISOString(),
  sources: {
    wikidata: 'https://www.wikidata.org/w/api.php',
    cbdb: 'https://cbdb.fas.harvard.edu/cbdbapi/',
  },
  counts: Object.groupBy(reviews, (item) => item.recommendation),
  reviews,
}, null, 2) + '\n');
console.log(JSON.stringify(Object.fromEntries(Object.entries(Object.groupBy(reviews, (item) => item.recommendation)).map(([key, value]) => [key, value.length]))));
