-- Record whether the parent endpoint is explicitly the father or mother.
-- NULL remains meaningful: the source establishes parentage but not the role.
ALTER TABLE claim ADD COLUMN parent_role TEXT
  CHECK (
    parent_role IS NULL
    OR (
      parent_role IN ('father', 'mother')
      AND predicate IN (
        'kinship.parent_of',
        'kinship.adoptive_parent_of',
        'kinship.step_parent_of'
      )
    )
  );
