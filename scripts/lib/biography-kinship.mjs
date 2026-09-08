import { foldKey } from '../../packages/i18n/src/script.ts';

const GENERATION_BY_TERM = new Map([
  ['父親', 1],
  ['父亲', 1],
  ['父', 1],
  ['祖父', 2],
  ['曾祖父', 3],
  ['高祖父', 4],
]);

const CHINESE_DIGIT = new Map([
  ['一', 1], ['二', 2], ['三', 3], ['四', 4], ['五', 5],
  ['六', 6], ['七', 7], ['八', 8], ['九', 9], ['十', 10],
]);

// Only extract a personal name when the grammar supplies both a paternal term
// and a clear end to the name. This deliberately ignores vague mentions such
// as “随父入京” and never tries to identify someone from proximity alone.
const NAMED_PATERNAL_ANCESTOR =
  /((?:[一二三四五六七八九十\d]+世祖)|高祖父|曾祖父|祖父|父親|父亲|父)(?:是|為|为|乃)?\s*(王[\p{Script=Han}]{1,3}?)(?=[，,。、；;：:\s]|和(?:他|她|其)|與|与|皆|都|曾|是|為|为|任|官|在|於|于|因|隨|随|$)/gu;

function generationForTerm(term) {
  const known = GENERATION_BY_TERM.get(term);
  if (known) return known;
  const match = /^([一二三四五六七八九十\d]+)世祖$/.exec(term);
  if (!match) return null;
  const generation = CHINESE_DIGIT.get(match[1]) ?? Number(match[1]);
  return Number.isInteger(generation) && generation > 1 ? generation : null;
}

export function extractNamedPaternalAncestors(text) {
  const mentions = [];
  for (const match of String(text ?? '').matchAll(NAMED_PATERNAL_ANCESTOR)) {
    const generation = generationForTerm(match[1]);
    if (generation) mentions.push({ term: match[1], name: match[2], generation });
  }
  return mentions;
}

/**
 * Return the unambiguous, gapless father → grandfather → great-grandfather
 * chain stated in a biography. Short or incomplete lists are left to ordinary
 * editorial review; a complete three-generation chain must not disappear from
 * the structured relationship data.
 */
export function completeNamedPaternalChain(text) {
  const byGeneration = new Map();
  for (const mention of extractNamedPaternalAncestors(text)) {
    const names = byGeneration.get(mention.generation) ?? new Set();
    names.add(mention.name);
    byGeneration.set(mention.generation, names);
  }
  const chain = [];
  for (let generation = 1; ; generation += 1) {
    const names = byGeneration.get(generation);
    if (!names || names.size !== 1) break;
    chain.push([...names][0]);
  }
  return chain.length >= 3 ? chain : [];
}

const active = (claim) => !['retracted', 'superseded'].includes(claim?.status);
const fatherClaim = (claim) =>
  claim?.predicate === 'kinship.father_of' ||
  (claim?.predicate === 'kinship.parent_of' && claim?.parent_role === 'father');

export function validateCompletePaternalChains(records) {
  const errors = [];
  for (const record of records.values()) {
    const summary = record.properties
      ?.find((field) => field.predicate === 'bio.summary')
      ?.recommended?.claim?.value_json?.text;
    const expected = completeNamedPaternalChain(summary);
    if (!expected.length) continue;

    let current = record;
    for (let generation = 1; generation <= expected.length; generation += 1) {
      const expectedName = expected[generation - 1];
      const item = (current.relationships?.parents ?? []).find((candidate) =>
        active(candidate.claim) &&
        fatherClaim(candidate.claim) &&
        foldKey(candidate.object_person?.display_name ?? '') === foldKey(expectedName),
      );
      const parentId = item?.object_person?.id ?? item?.claim?.subject_person_id;
      const parent = parentId ? records.get(parentId) : null;
      if (!item || !parent || parent.id === current.id) {
        errors.push(
          `${record.id}: 简介写明父系链 ${expected.join(' → ')}，` +
          `但第 ${generation} 代“${expectedName}”没有对应的 father_of 关系`,
        );
        break;
      }
      current = parent;
    }
  }
  return errors;
}
