-- Exact distance for a sourced ancestor_of assertion. NULL means the source
-- confirms descent but does not identify how many generations lie between the
-- two named people. A one-generation edge must use kinship.parent_of instead.
ALTER TABLE claim
ADD COLUMN generation_count INTEGER
CHECK (
  generation_count IS NULL
  OR (
    claim_kind = 'relationship'
    AND predicate = 'kinship.ancestor_of'
    AND generation_count BETWEEN 2 AND 100
  )
);
