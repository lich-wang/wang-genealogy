import { generateId, webRandom, type IdEntity } from '@wang/domain';

export const newId = (entity: IdEntity): string => generateId(entity, webRandom);

export const nowIso = (): string => new Date().toISOString();

export const addDaysIso = (days: number): string =>
  new Date(Date.now() + days * 86_400_000).toISOString();

export function parseJson<T>(value: string | null): T | null {
  if (value == null) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}
