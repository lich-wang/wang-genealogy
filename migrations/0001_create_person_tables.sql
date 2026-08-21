-- 0001_create_person_tables.sql
-- Core schema for the provenance-first Wang genealogy knowledge base.
--
-- Invariants encoded here:
--   * Person holds NO final name/date/origin — only identity + status.
--   * Kinship stored one direction only (parent_of); see claim table.
--   * Every write appends; revisions and contributions are append-only.
--   * Deletion is a status field (person.status = 'suppressed'), not DROP/DELETE.
--   * Uncertain dates live inside claim.value_json, never a bare SQL date.

PRAGMA foreign_keys = ON;

-- ---------------------------------------------------------------------------
-- User: site contributor account (never a genealogy person).
-- ---------------------------------------------------------------------------
CREATE TABLE user (
  id             TEXT PRIMARY KEY,
  display_name   TEXT NOT NULL,
  email_hash     TEXT UNIQUE,           -- sha-256 of normalized email; null if external-only
  external_login TEXT UNIQUE,           -- e.g. "github:12345" for future OAuth
  password_hash  TEXT,                  -- PBKDF2 hash for built-in email auth; null if external-only
  role           TEXT NOT NULL DEFAULT 'contributor'
                   CHECK (role IN ('contributor','maintainer','reviewer','admin')),
  status         TEXT NOT NULL DEFAULT 'active'
                   CHECK (status IN ('active','restricted','banned')),
  created_at     TEXT NOT NULL
);

-- ---------------------------------------------------------------------------
-- Person: identity anchor. No contested values stored directly.
-- ---------------------------------------------------------------------------
CREATE TABLE person (
  id                    TEXT PRIMARY KEY,
  status                TEXT NOT NULL DEFAULT 'candidate'
                          CHECK (status IN ('candidate','active','merged','suppressed')),
  merged_into_person_id TEXT REFERENCES person(id),
  created_by_user_id    TEXT NOT NULL REFERENCES user(id),
  created_at            TEXT NOT NULL,
  updated_at            TEXT NOT NULL,
  current_revision      INTEGER NOT NULL DEFAULT 0,
  -- A merged person must point somewhere; a non-merged person must not.
  CHECK (
    (status = 'merged' AND merged_into_person_id IS NOT NULL)
    OR (status <> 'merged' AND merged_into_person_id IS NULL)
  ),
  CHECK (merged_into_person_id IS NULL OR merged_into_person_id <> id)
);

CREATE INDEX idx_person_status ON person(status);
CREATE INDEX idx_person_merged_into ON person(merged_into_person_id);
CREATE INDEX idx_person_created_by ON person(created_by_user_id);

-- ---------------------------------------------------------------------------
-- Claim: sourced, versioned assertion. Properties and relationships unified.
-- ---------------------------------------------------------------------------
CREATE TABLE claim (
  id                 TEXT PRIMARY KEY,
  subject_person_id  TEXT NOT NULL REFERENCES person(id),
  claim_kind         TEXT NOT NULL CHECK (claim_kind IN ('property','relationship')),
  predicate          TEXT NOT NULL,
  object_person_id   TEXT REFERENCES person(id),   -- relationship claims only
  value_json         TEXT,                          -- property claims only (JSON)
  status             TEXT NOT NULL DEFAULT 'proposed'
                       CHECK (status IN ('proposed','accepted','disputed','retracted','superseded')),
  confidence         TEXT NOT NULL DEFAULT 'unknown'
                       CHECK (confidence IN ('unknown','low','medium','high')),
  created_by_user_id TEXT NOT NULL REFERENCES user(id),
  created_at         TEXT NOT NULL,
  updated_at         TEXT NOT NULL,
  current_revision   INTEGER NOT NULL DEFAULT 1,
  -- Shape must match kind.
  CHECK (
    (claim_kind = 'relationship' AND object_person_id IS NOT NULL AND value_json IS NULL)
    OR (claim_kind = 'property' AND object_person_id IS NULL AND value_json IS NOT NULL)
  ),
  -- parent_of (and other kinship) may not point a person at itself.
  CHECK (object_person_id IS NULL OR object_person_id <> subject_person_id)
);

CREATE INDEX idx_claim_subject ON claim(subject_person_id);
CREATE INDEX idx_claim_object ON claim(object_person_id);
CREATE INDEX idx_claim_predicate ON claim(predicate);
CREATE INDEX idx_claim_status ON claim(status);
CREATE INDEX idx_claim_subject_predicate ON claim(subject_person_id, predicate);
-- Prevent exact duplicate relationship edges (same subject/predicate/object).
CREATE UNIQUE INDEX uq_claim_relationship
  ON claim(subject_person_id, predicate, object_person_id)
  WHERE object_person_id IS NOT NULL;

-- ---------------------------------------------------------------------------
-- ClaimRevision: append-only history. Revert = new revision, never overwrite.
-- ---------------------------------------------------------------------------
CREATE TABLE claim_revision (
  id                  TEXT PRIMARY KEY,
  claim_id            TEXT NOT NULL REFERENCES claim(id),
  revision_number     INTEGER NOT NULL,
  snapshot_json       TEXT NOT NULL,
  change_summary      TEXT,
  created_by_user_id  TEXT NOT NULL REFERENCES user(id),
  created_at          TEXT NOT NULL,
  reverts_revision_id TEXT REFERENCES claim_revision(id),
  UNIQUE (claim_id, revision_number)
);

CREATE INDEX idx_claim_revision_claim ON claim_revision(claim_id);

-- ---------------------------------------------------------------------------
-- Source: reusable bibliographic/API/web record. No images by policy.
-- ---------------------------------------------------------------------------
CREATE TABLE source (
  id                  TEXT PRIMARY KEY,
  source_type         TEXT NOT NULL
                        CHECK (source_type IN ('book','genealogy','gazetteer','epitaph',
                          'biography','exam_record','api_record','website','user_testimony')),
  title               TEXT NOT NULL,
  creator             TEXT,
  publisher           TEXT,
  published_at_text   TEXT,
  canonical_url       TEXT,
  external_identifier TEXT,
  license_code        TEXT NOT NULL DEFAULT 'unknown',
  accessed_at         TEXT,
  metadata_json       TEXT,
  created_by_user_id  TEXT NOT NULL REFERENCES user(id),
  created_at          TEXT NOT NULL
);

CREATE INDEX idx_source_type ON source(source_type);
CREATE INDEX idx_source_external ON source(external_identifier);
CREATE INDEX idx_source_created_by ON source(created_by_user_id);

-- ---------------------------------------------------------------------------
-- ClaimSource: many-to-many claim<->source with stance and locator.
-- ---------------------------------------------------------------------------
CREATE TABLE claim_source (
  id                  TEXT PRIMARY KEY,
  claim_id            TEXT NOT NULL REFERENCES claim(id),
  source_id           TEXT NOT NULL REFERENCES source(id),
  stance              TEXT NOT NULL DEFAULT 'supports'
                        CHECK (stance IN ('supports','contradicts','mentions')),
  locator             TEXT,
  quotation           TEXT,
  interpretation_note TEXT,
  added_by_user_id    TEXT NOT NULL REFERENCES user(id),
  created_at          TEXT NOT NULL,
  UNIQUE (claim_id, source_id, stance)
);

CREATE INDEX idx_claim_source_claim ON claim_source(claim_id);
CREATE INDEX idx_claim_source_source ON claim_source(source_id);

-- ---------------------------------------------------------------------------
-- PersonMaintainer: non-exclusive follow/maintain relationship.
-- ---------------------------------------------------------------------------
CREATE TABLE person_maintainer (
  id              TEXT PRIMARY KEY,
  person_id       TEXT NOT NULL REFERENCES person(id),
  user_id         TEXT NOT NULL REFERENCES user(id),
  maintainer_role TEXT NOT NULL DEFAULT 'maintainer',
  created_at      TEXT NOT NULL,
  UNIQUE (person_id, user_id)
);

CREATE INDEX idx_person_maintainer_person ON person_maintainer(person_id);
CREATE INDEX idx_person_maintainer_user ON person_maintainer(user_id);

-- ---------------------------------------------------------------------------
-- PersonMergeProposal: reversible soft merge with full snapshot retained.
-- ---------------------------------------------------------------------------
CREATE TABLE person_merge_proposal (
  id                  TEXT PRIMARY KEY,
  source_person_id    TEXT NOT NULL REFERENCES person(id),
  target_person_id    TEXT NOT NULL REFERENCES person(id),
  status              TEXT NOT NULL DEFAULT 'proposed'
                        CHECK (status IN ('proposed','reviewing','approved','rejected','reverted')),
  reason              TEXT,
  created_by_user_id  TEXT NOT NULL REFERENCES user(id),
  approved_by_user_id TEXT REFERENCES user(id),
  created_at          TEXT NOT NULL,
  resolved_at         TEXT,
  merge_snapshot_json TEXT,
  CHECK (source_person_id <> target_person_id)
);

CREATE INDEX idx_merge_source ON person_merge_proposal(source_person_id);
CREATE INDEX idx_merge_target ON person_merge_proposal(target_person_id);
CREATE INDEX idx_merge_status ON person_merge_proposal(status);

-- ---------------------------------------------------------------------------
-- Contribution: immutable audit trail for every write action.
-- ---------------------------------------------------------------------------
CREATE TABLE contribution (
  id              TEXT PRIMARY KEY,
  action          TEXT NOT NULL,
  actor_user_id   TEXT NOT NULL REFERENCES user(id),
  target_type     TEXT NOT NULL,
  target_id       TEXT NOT NULL,
  change_summary  TEXT,
  before_revision INTEGER,
  after_revision  INTEGER,
  created_at      TEXT NOT NULL
);

CREATE INDEX idx_contribution_target ON contribution(target_type, target_id);
CREATE INDEX idx_contribution_actor ON contribution(actor_user_id);
CREATE INDEX idx_contribution_created_at ON contribution(created_at);

-- ---------------------------------------------------------------------------
-- Session: signed-token auth sessions (built-in email auth for MVP).
-- ---------------------------------------------------------------------------
CREATE TABLE session (
  id         TEXT PRIMARY KEY,        -- opaque token id (the signed part references this)
  user_id    TEXT NOT NULL REFERENCES user(id),
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE INDEX idx_session_user ON session(user_id);
