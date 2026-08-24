import type { RelationshipInput, RelationshipPredicate } from '@wang/domain';

/**
 * Normalize a natural-language relationship submitted relative to the current
 * person into a single stored edge anchored on the PARENT.
 *
 * Domain invariant: parent/child is stored ONCE as PARENT --parent_of--> CHILD,
 * never two mirrored rows. We never infer gender/role — "parent" stays
 * parent_of, we do not guess father vs. mother.
 */
export interface NormalizedEdge {
  predicate: RelationshipPredicate;
  subject_person_id: string; // the person the edge is stored on
  object_person_id: string; // the target
}

export function normalizeRelationship(
  currentPersonId: string,
  input: RelationshipInput,
  relatedPersonId: string,
): NormalizedEdge {
  if (currentPersonId === relatedPersonId) {
    throw new KinshipError('self_relationship', '不能把人物关联到其自身。');
  }

  switch (input) {
    case 'parent':
      // "related is the CURRENT person's parent" => related --parent_of--> current
      return {
        predicate: 'kinship.parent_of',
        subject_person_id: relatedPersonId,
        object_person_id: currentPersonId,
      };
    case 'child':
      // "related is the CURRENT person's child" => current --parent_of--> related
      return {
        predicate: 'kinship.parent_of',
        subject_person_id: currentPersonId,
        object_person_id: relatedPersonId,
      };
    case 'spouse':
      // Symmetric; store canonically with the lexicographically-smaller id as subject
      // so the two directions collapse to one row.
      return currentPersonId < relatedPersonId
        ? {
            predicate: 'kinship.spouse_of',
            subject_person_id: currentPersonId,
            object_person_id: relatedPersonId,
          }
        : {
            predicate: 'kinship.spouse_of',
            subject_person_id: relatedPersonId,
            object_person_id: currentPersonId,
          };
    default: {
      const _exhaustive: never = input;
      throw new KinshipError('unknown_relationship', `未知的关系类型：${String(_exhaustive)}`);
    }
  }
}

/**
 * Chinese kinship terms, as external genealogical databases write them, mapped
 * onto the three directions this API accepts.
 *
 * Deliberately narrow. The model stores `kinship.parent_of` and
 * `kinship.spouse_of`; a sibling, an uncle, a son-in-law or a 十世孫 has no
 * faithful representation here, so those terms return null and the caller
 * reports them instead of forcing them into a predicate that would misstate the
 * source. Gendered terms (父/母, 長子/長女) all collapse onto the same neutral
 * direction — the original term belongs in the citation, not in the predicate.
 *
 * 妾 is intentionally absent: a concubinage is not the same statement as
 * `spouse_of`, and inventing that equivalence is exactly the kind of inference
 * this project forbids.
 */
const KINSHIP_TERM_PATTERNS: ReadonlyArray<{ input: RelationshipInput; pattern: RegExp }> = [
  { input: 'parent', pattern: /^(父|母|生父|生母|嫡父|嫡母|親父|親母|亲父|亲母)$/ },
  {
    input: 'child',
    pattern:
      /^([長长次三四五六七八九十百]?[子女]|[兒儿]子|女[兒儿]|幼[子女]|庶[子女]|嫡[子女]|獨子|独子|末子|季子|仲子|叔子)$/,
  },
  {
    input: 'spouse',
    pattern:
      /^(妻|妻子|夫|丈夫|正妻|嫡妻|元配|原配|繼室|继室|夫人|第[一二三四五六七八九]任妻|第[一二三四五六七八九]任夫)$/,
  },
];

export interface MappedKinshipTerm {
  /** Direction to submit relative to the person the term was recorded on, or null. */
  input: RelationshipInput | null;
  /** The single term we matched on, after splitting the source's alias list. */
  term: string;
  /** The source's full term string, kept for citations. */
  raw: string;
}

/**
 * Map one source term. Databases like CBDB pack aliases into one field
 * ("從祖;伯叔祖"); the first alias is the canonical one.
 */
export function mapChineseKinshipTerm(term: string | null | undefined): MappedKinshipTerm {
  const raw = String(term ?? '').trim();
  const primary = raw.split(/[;；]/)[0]!.trim();
  for (const { input, pattern } of KINSHIP_TERM_PATTERNS) {
    if (pattern.test(primary)) return { input, term: primary, raw };
  }
  return { input: null, term: primary, raw };
}

export class KinshipError extends Error {
  constructor(
    public code: string,
    message: string,
  ) {
    super(message);
    this.name = 'KinshipError';
  }
}

/**
 * Detect an obvious ancestor cycle that adding parent_of(parent -> child) would
 * create, given a function that returns the known parents of a person. We only
 * REPORT cycles; callers must never auto-delete historical data because of one.
 */
export function wouldCreateAncestorCycle(
  parentId: string,
  childId: string,
  getParentsOf: (personId: string) => string[],
): boolean {
  if (parentId === childId) return true;
  // Walk up from the proposed parent: if we ever reach the child, adding
  // child -> ... -> parent -> child closes a loop.
  const seen = new Set<string>();
  const stack = [parentId];
  while (stack.length > 0) {
    const node = stack.pop()!;
    if (node === childId) return true;
    if (seen.has(node)) continue;
    seen.add(node);
    for (const p of getParentsOf(node)) stack.push(p);
  }
  return false;
}
