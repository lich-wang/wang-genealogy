-- Durable idempotency for staff-reviewed, set-based relationship imports.
-- The registry makes a retry after an uncertain HTTP response a zero-write
-- no-op instead of relying on a duplicate-edge error.
CREATE TABLE reviewed_relationship_import (
  identity_key       TEXT PRIMARY KEY,
  content_hash       TEXT NOT NULL CHECK (length(content_hash) = 64),
  claim_id           TEXT NOT NULL UNIQUE REFERENCES claim(id),
  subject_person_id  TEXT NOT NULL REFERENCES person(id),
  predicate          TEXT NOT NULL,
  object_person_id   TEXT NOT NULL REFERENCES person(id),
  created_by_user_id TEXT NOT NULL REFERENCES user(id),
  created_at         TEXT NOT NULL,
  CHECK (subject_person_id <> object_person_id)
);

CREATE INDEX idx_reviewed_relationship_import_endpoints
  ON reviewed_relationship_import(subject_person_id, predicate, object_person_id);

-- Relationship-only plans legitimately contain homonyms (for example several
-- independently identified 王氏 records). Their reviewed identity is the
-- external-record key, not a globally unique folded display name.
CREATE TABLE reviewed_kinship_person_import (
  identity_key       TEXT PRIMARY KEY,
  content_hash       TEXT NOT NULL CHECK (length(content_hash) = 64),
  person_id          TEXT NOT NULL UNIQUE REFERENCES person(id),
  created_by_user_id TEXT NOT NULL REFERENCES user(id),
  created_at         TEXT NOT NULL
);
