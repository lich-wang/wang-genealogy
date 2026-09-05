-- Cover the two hottest authenticated kinship checks:
-- walking from a child to its parents during cycle detection, and resolving
-- active relationships without scanning unrelated claims.
CREATE INDEX IF NOT EXISTS idx_claim_object_predicate_status_subject
  ON claim(object_person_id, predicate, status, subject_person_id)
  WHERE object_person_id IS NOT NULL;

-- Source creation is idempotent. Cover its exact identity lookup so a reused
-- source costs an index probe and performs zero writes.
CREATE INDEX IF NOT EXISTS idx_source_identity
  ON source(source_type, canonical_url, external_identifier);

-- Supporting-source gates and source detail pages both begin at source_id and
-- then need the claim/stance without returning to the table for those columns.
CREATE INDEX IF NOT EXISTS idx_claim_source_source_claim_stance
  ON claim_source(source_id, claim_id, stance);
