/**
 * People who belong to the Wang genealogy even though the surname did not yet
 * exist. This is deliberately a closed list, not a general exception for
 * non-Wang relatives.
 */
export const PROGENITOR_NAMES = new Set([
  '姬晋',
  '姬晉',
  '太子晋',
  '太子晉',
  '王子乔',
  '王子喬',
  '王子晋',
  '王子晉',
  '宗敬',
  '毕公高',
  '畢公高',
  '田安',
  '比干',
]);

/** A full-scope person: Wang by name/title, or a named pre-surname progenitor. */
export function isWangScopeName(name) {
  return (
    typeof name === 'string' &&
    (name.startsWith('王') ||
      /王(皇后|皇太后|太后|夫人|氏|美人|婕妤|后)/.test(name) ||
      PROGENITOR_NAMES.has(name.trim()))
  );
}

/** Only a relationship withdrawn by the scope job may be restored by it. */
export function wasRetractedByScope(claim) {
  return (
    claim?.status === 'retracted' &&
    claim?.current_change_summary === '范围调整：撤回超出收录范围的亲属关系'
  );
}
