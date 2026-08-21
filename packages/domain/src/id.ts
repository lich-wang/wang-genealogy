// Unguessable public IDs: "<prefix>_<22 base58 chars>" (~128 bits entropy).
// IDs are immutable; merges never reuse or rewrite them.

const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const ID_RANDOM_LEN = 22;

export const ID_PREFIX = {
  user: 'u',
  person: 'p',
  claim: 'c',
  revision: 'rev',
  source: 's',
  claimSource: 'cs',
  maintainer: 'pm',
  merge: 'm',
  contribution: 'ct',
} as const;

export type IdEntity = keyof typeof ID_PREFIX;

/**
 * Generate a public ID. `random` receives the number of bytes and must return
 * cryptographically-secure bytes (crypto.getRandomValues in Workers/browser).
 */
export function generateId(
  entity: IdEntity,
  random: (bytes: number) => Uint8Array,
): string {
  const bytes = random(ID_RANDOM_LEN);
  let out = '';
  for (let i = 0; i < ID_RANDOM_LEN; i++) {
    out += BASE58[bytes[i]! % 58];
  }
  return `${ID_PREFIX[entity]}_${out}`;
}

/** Web-crypto-backed random source usable in Workers and browsers. */
export const webRandom = (bytes: number): Uint8Array =>
  crypto.getRandomValues(new Uint8Array(bytes));

export function isEntityId(entity: IdEntity, value: string): boolean {
  return value.startsWith(`${ID_PREFIX[entity]}_`);
}
