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
