CREATE TABLE github_account (
  github_id   INTEGER PRIMARY KEY,
  login       TEXT NOT NULL,
  avatar_url  TEXT,
  status      TEXT NOT NULL DEFAULT 'active'
                CHECK (status IN ('active', 'restricted', 'banned')),
  created_at  TEXT NOT NULL,
  updated_at  TEXT NOT NULL
);

CREATE TABLE github_oauth_credential (
  github_id               INTEGER PRIMARY KEY
                            REFERENCES github_account(github_id) ON DELETE CASCADE,
  access_token_ciphertext TEXT NOT NULL,
  refresh_token_ciphertext TEXT,
  scopes                  TEXT NOT NULL,
  access_expires_at       TEXT,
  refresh_expires_at      TEXT,
  updated_at              TEXT NOT NULL
);

CREATE TABLE site_session (
  token_hash  TEXT PRIMARY KEY,
  github_id   INTEGER NOT NULL
                REFERENCES github_account(github_id) ON DELETE CASCADE,
  csrf_token  TEXT NOT NULL,
  created_at  TEXT NOT NULL,
  expires_at  TEXT NOT NULL,
  revoked_at  TEXT
);

CREATE INDEX site_session_account ON site_session(github_id);
CREATE INDEX site_session_expiry ON site_session(expires_at);

CREATE TABLE account_preference (
  github_id    INTEGER PRIMARY KEY
                 REFERENCES github_account(github_id) ON DELETE CASCADE,
  script       TEXT CHECK (script IN ('zh-Hans', 'zh-Hant')),
  updated_at   TEXT NOT NULL
);

CREATE TABLE account_security_audit (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  github_id   INTEGER,
  action      TEXT NOT NULL,
  outcome     TEXT NOT NULL,
  created_at  TEXT NOT NULL
);

CREATE INDEX account_security_audit_account_time
  ON account_security_audit(github_id, created_at DESC);

-- This database intentionally has no Person, Claim, Source, contribution,
-- Markdown, diff, PR-body, or genealogy foreign-key table.
