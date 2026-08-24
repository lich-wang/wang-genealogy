# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

An open, provenance-first knowledge base for the **historical genealogy of the Wang (王) surname**. The distinguishing design choice: the database never stores a contested value as final truth. A `Person` is only an identity anchor; every name, date, origin, and kinship link is a sourced, versioned, review-tracked `Claim`.

**Current stage: the MVP is implemented and deployed.** `docs/` stays the source of truth for design; the code in `apps/`, `packages/`, and `migrations/` implements it. Live: API on `wang-genealogy-api.lich-wang8718.workers.dev`, site on `wang-genealogy-web.pages.dev`, D1 database `wang-genealogy`.

Documentation is written in Chinese; keep domain identifiers and enum values in lower-case English code style (e.g. `kinship.parent_of`, `source_type`, `accepted`, `disputed`, `merged`).

## Source-of-truth hierarchy for the design

When docs conflict, resolve in this order and reconcile the others:

1. `docs/DOMAIN_MODEL.md` — entities, claims, sources, revisions, merges (authoritative).
2. `docs/API.md` — HTTP contract (`/api/v1`).
3. `docs/COLLABORATION.md` — versioning, dispute, and merge mechanics.
4. `docs/SOURCES_AND_POLICY.md` — provenance, licensing, inclusion boundaries.
5. `docs/PRODUCT.md` — scope, roles, pages.
6. `docs/ARCHITECTURE.md` — deployment, stack and repository-layout decisions.

A change to any entity or lifecycle rule must be propagated across the domain model, API, collaboration, and source-policy docs in the same change. Preserve key terms and status enums verbatim.

## Domain invariants (do not violate in any future code)

These are the reason the project exists — they override convenience:

- **Claims, not fields.** `Person` holds no final name/birth/death. Page summaries are *computed* from currently-accepted claims. Never add a "final value" column to `Person`.
- **One kinship direction.** Parent/child is stored once as `PARENT --kinship.parent_of--> CHILD`, never as two mirrored rows. The API accepts `parent` or `child` relative to the current person and normalizes server-side to `parent_of`.
- **Never infer gender/role** from names or convention. If a source only says "a parent," keep `parent_of` — do not guess father vs. mother.
- **Append-only history.** Every edit appends a `ClaimRevision`; reverting is a *new* revision (`reverts_revision_id`), never an in-place overwrite or deletion.
- **Provenance required.** A public claim must link ≥1 `Source`. Sourceless entries stay as private drafts, never public/indexed.
- **Conflicts coexist.** Contradictory claims are shown side by side (recommended value may be highlighted); a minority view with valid sources is never hidden. This is explicitly *not* last-write-wins.
- **Soft merge only.** Duplicate persons are merged reversibly: source person → `merged`, old public ID redirects permanently to target, full `merge_snapshot_json` retained, claims logically folded (never physically deleted), merges always revertible.
- **Optimistic concurrency.** Claim edits require `expected_revision`; mismatch → `409`.
- **Living/sensitive people are excluded.** Only deceased historical persons are public. Unproven-deceased records go to quarantine — not public, not in search. Never derive/expose modern descendants via kinship. No images, IDs, contact info, DNA/medical/religious data.
- **No hard delete** except legal/privacy/safety incidents, and even then keep a minimal audit record. Deletion is a status field.
- **Uncertain dates** store original text + normalized earliest/latest + precision + calendar note — not a single SQL date.
- **License layering.** Keep source-code, site-text, user-contribution, and external-source licenses distinct. Never relabel NC/SA data as CC0; store a license per `Source`.
- **Script (简体/繁體) is display-only.** Stored claim text keeps the script its source used, tagged via `value_json.language`. Conversion happens at render time (`packages/i18n`, `apps/web/src/i18n.tsx`); never normalize a stored value's script, never write a converted value back, and always keep the original reachable next to the projection. Name matching, search and duplicate hints compare *folded* text so 王賁 and 王贲 are one person.

## Stack and layout

React + TypeScript + Vite on Cloudflare Pages (`apps/web`), Hono + Zod REST API on Cloudflare Workers (`apps/api`), Cloudflare D1 for storage (`migrations/`, ordered SQL). Shared code: `packages/domain` (types, enums, public IDs), `packages/i18n` (简繁 conversion/folding), `packages/validation` (Zod schemas, kinship + date rules). Maintenance scripts in `scripts/` (data imports build a reviewable JSON plan first and then write **only through the HTTP API**, never straight into D1 — the server holds the kinship normalization, cycle checks, provenance gate and audit trail; `audit-data.mjs` re-checks for duplicates afterwards and duplicates are resolved by a reversible merge proposal, never by deletion). Playwright smoke in `e2e/`. No object storage (no images/attachments by policy).

TypeScript: 2-space indent, `camelCase` values/functions, `PascalCase` types/components. Public IDs are unguessable `<prefix>_<22 base58>` strings; all foreign keys and common filters indexed; person merges are atomic (D1 batch); audit and revision writes are append-only.

```bash
npm test          # Vitest
npm run typecheck # all workspace projects
npm run build     # type-check + bundle apps/web
npm run test:e2e  # Playwright smoke; PAGES_URL overrides the target
npm run dev:api   # wrangler dev
npm run dev:web   # vite
```

Run `npm test && npm run typecheck && npm run build` before committing. Pushing to `main` triggers `.github/workflows/deploy.yml`: checks → D1 migrations → Worker → Pages. Worker secrets (`AUTH_SECRET`, `BOOTSTRAP_ADMIN_HASHES`) are managed with `wrangler secret`, never in the repo. Cloudflare credentials for local `wrangler` come from a gitignored `.env` (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`).

## Conventions

- **Commits:** Conventional Commit style, imperative and scoped (e.g. `docs: clarify merge review rules`, `api: validate claim sources`).
- **PRs:** keep focused; call out any change affecting public IDs, source traceability, retention, privacy, or merge semantics.
- **Tests:** prioritize claim normalization, provenance enforcement, append-only revisions, merge rollback, script folding, and exclusion of living/sensitive-person data.
- This project also has an `AGENTS.md` covering the same workflow rules for other agents — keep the two consistent.

## Workspace note

This directory lives in a shared multi-agent home (`/home/linux`); see the parent `/home/linux/CLAUDE.md`. Check `git status`/`git diff` before editing and don't touch other tools' private dirs.
