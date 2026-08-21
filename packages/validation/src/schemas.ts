import {
  CLAIM_SOURCE_STANCE,
  CONFIDENCE,
  LICENSE_CODE,
  PROPERTY_PREDICATES,
  RELATIONSHIP_INPUT,
  SOURCE_TYPE,
} from '@wang/domain';
import { z } from 'zod';

const nonEmpty = z.string().trim().min(1);

// --- auth ---
export const signupSchema = z.object({
  display_name: nonEmpty.max(80),
  email: z.string().trim().email().max(200),
  password: z.string().min(10).max(200),
});

export const loginSchema = z.object({
  email: z.string().trim().email().max(200),
  password: z.string().min(1).max(200),
});

// --- sources ---
export const uncertainDateInputSchema = z.object({
  original_text: z.string().max(200),
  calendar_note: z.string().max(500).optional(),
});

export const sourceRefSchema = z.object({
  source_id: nonEmpty,
  stance: z.enum(CLAIM_SOURCE_STANCE).default('supports'),
  locator: z.string().max(500).optional(),
  quotation: z.string().max(2000).optional(),
  interpretation_note: z.string().max(2000).optional(),
});

export const createSourceSchema = z.object({
  source_type: z.enum(SOURCE_TYPE),
  title: nonEmpty.max(500),
  creator: z.string().max(200).optional(),
  publisher: z.string().max(200).optional(),
  published_at_text: z.string().max(200).optional(),
  canonical_url: z.string().url().max(1000).optional(),
  external_identifier: z.string().max(200).optional(),
  license_code: z.enum(LICENSE_CODE).default('unknown'),
  accessed_at: z.string().datetime().optional(),
  metadata_json: z.record(z.unknown()).optional(),
});

// --- persons & claims ---
export const propertyValueSchema = z.object({
  text: z.string().max(500).optional(),
  language: z.string().max(20).optional(),
  date: uncertainDateInputSchema.optional(),
});
export type PropertyValueInput = z.infer<typeof propertyValueSchema>;

export const createPropertyClaimSchema = z.object({
  claim_kind: z.literal('property'),
  predicate: z.enum(PROPERTY_PREDICATES),
  value: propertyValueSchema,
  confidence: z.enum(CONFIDENCE).default('unknown'),
  sources: z.array(sourceRefSchema).default([]),
  change_summary: z.string().max(500).optional(),
});

export const createRelationshipSchema = z.object({
  relationship: z.enum(RELATIONSHIP_INPUT),
  related_person_id: nonEmpty,
  confidence: z.enum(CONFIDENCE).default('unknown'),
  sources: z.array(sourceRefSchema).default([]),
  change_summary: z.string().max(500).optional(),
});

export const createPersonSchema = z.object({
  // Anchor creation requires an initial name claim; sources optional but a
  // sourceless person stays a private draft (candidate + not indexed).
  name: createPropertyClaimSchema
    .pick({ value: true, confidence: true, sources: true })
    .extend({ predicate: z.literal('name.primary').default('name.primary') }),
  change_summary: z.string().max(500).optional(),
});

// --- revisions / disputes / reverts ---
export const reviseClaimSchema = z.object({
  expected_revision: z.number().int().nonnegative(),
  patch: z
    .object({
      confidence: z.enum(CONFIDENCE).optional(),
      value: propertyValueSchema.optional(),
      status: z.enum(['accepted', 'disputed', 'superseded']).optional(),
    })
    .refine((p) => Object.keys(p).length > 0, { message: 'patch 不能为空' }),
  change_summary: z.string().max(500).optional(),
});

export const disputeSchema = z.object({
  reason: z.string().max(1000).optional(),
  change_summary: z.string().max(500).optional(),
});

export const retractSchema = disputeSchema;

export const revertSchema = z.object({
  target_revision_id: nonEmpty,
  change_summary: z.string().max(500).optional(),
});

// --- merges ---
export const createMergeSchema = z.object({
  target_person_id: nonEmpty,
  reason: z.string().max(1000).optional(),
  supporting_claim_ids: z.array(nonEmpty).default([]),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type CreateSourceInput = z.infer<typeof createSourceSchema>;
export type CreatePropertyClaimInput = z.infer<typeof createPropertyClaimSchema>;
export type CreateRelationshipInput = z.infer<typeof createRelationshipSchema>;
export type CreatePersonInput = z.infer<typeof createPersonSchema>;
export type ReviseClaimInput = z.infer<typeof reviseClaimSchema>;
export type CreateMergeInput = z.infer<typeof createMergeSchema>;
