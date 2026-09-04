import { describe, expect, it } from 'vitest';
import { requestEmailVerificationSchema, signupSchema } from './schemas.ts';

describe('registration email verification validation', () => {
  it('requires the signed verification token at signup', () => {
    expect(signupSchema.safeParse({
      display_name: '贡献者',
      email: 'reader@example.com',
      password: 'long-enough-password',
    }).success).toBe(false);
  });

  it('accepts a valid challenge request and verified signup shape', () => {
    expect(requestEmailVerificationSchema.safeParse({ email: ' reader@example.com ' }).success).toBe(true);
    expect(signupSchema.safeParse({
      display_name: '贡献者',
      email: 'reader@example.com',
      password: 'long-enough-password',
      verification_token: 'ev_example.signature',
    }).success).toBe(true);
  });
});
