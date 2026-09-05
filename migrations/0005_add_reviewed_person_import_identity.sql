-- Database-enforced idempotency for staff-reviewed historical roster imports.
-- The final INSERT in a transactional D1 batch claims all three unique keys;
-- a concurrent duplicate therefore rolls the whole batch back.
CREATE TABLE reviewed_person_import (
  identity_key    TEXT PRIMARY KEY,
  source_identity TEXT NOT NULL UNIQUE,
  folded_name     TEXT NOT NULL UNIQUE,
  content_hash    TEXT NOT NULL CHECK (length(content_hash) = 64),
  source_id       TEXT NOT NULL UNIQUE REFERENCES source(id),
  person_id       TEXT NOT NULL UNIQUE REFERENCES person(id),
  created_by_user_id TEXT NOT NULL REFERENCES user(id),
  created_at      TEXT NOT NULL
);
