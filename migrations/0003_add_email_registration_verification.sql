-- A registration is allowed only after the claimant sends a message from the
-- claimed mailbox to the per-challenge Email Routing address.
CREATE TABLE email_registration_verification (
  id          TEXT PRIMARY KEY,
  email_hash  TEXT NOT NULL,
  code_hash   TEXT NOT NULL UNIQUE,
  status      TEXT NOT NULL DEFAULT 'pending'
                CHECK (status IN ('pending','verified','consumed')),
  created_at  TEXT NOT NULL,
  expires_at  TEXT NOT NULL,
  verified_at TEXT,
  consumed_at TEXT
);

CREATE INDEX idx_email_verification_email ON email_registration_verification(email_hash);
CREATE INDEX idx_email_verification_expiry ON email_registration_verification(expires_at);
