import type { ParentRole } from '@wang/domain';

const FATHER_EVIDENCE = /P22|父親|父亲|生父|養父|养父|嫡父|親父|亲父|[（(]父[）)]/;
const MOTHER_EVIDENCE = /P25|母親|母亲|生母|養母|养母|嫡母|親母|亲母|[（(]母[）)]/;

export interface ParentRoleEvidence {
  role: ParentRole | null;
  conflict: boolean;
}

/**
 * Infer a parent role only from citation locators that explicitly name it.
 * Quotations are deliberately excluded: a biography can mention both parents
 * while supporting an edge to just one of them. Ambiguous/conflicting evidence
 * remains neutral and must be reviewed by a person.
 */
export function parentRoleFromLocators(locators: Array<string | null | undefined>): ParentRoleEvidence {
  let father = false;
  let mother = false;
  for (const locator of locators) {
    if (!locator) continue;
    father ||= FATHER_EVIDENCE.test(locator);
    mother ||= MOTHER_EVIDENCE.test(locator);
  }
  if (father && mother) return { role: null, conflict: true };
  return { role: father ? 'father' : mother ? 'mother' : null, conflict: false };
}
