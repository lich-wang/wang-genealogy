import type { ApiError } from '@wang/domain';

/** Typed application error carrying an HTTP status, machine code, and Chinese message. */
export class AppError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = 'AppError';
  }

  toBody(): ApiError {
    return { error: this.code, message: this.message, details: this.details };
  }
}

export const notFound = (msg = '未找到物件') => new AppError(404, 'not_found', msg);
export const unauthorized = (msg = '需要登入') => new AppError(401, 'unauthorized', msg);
export const forbidden = (msg = '沒有許可權') => new AppError(403, 'forbidden', msg);
export const badRequest = (code: string, msg: string, details?: unknown) =>
  new AppError(400, code, msg, details);
export const conflict = (code: string, msg: string, details?: unknown) =>
  new AppError(409, code, msg, details);
