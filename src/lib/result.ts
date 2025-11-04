export type ValidationError = {
  field: string;
  message: string;
};

export type Result<T> =
  | { success: true; data: T }
  | { success: false; errors: ValidationError[] };

export function createSuccessResult<T>(data: T): Result<T> {
  return { success: true, data };
}

export function createFailureResult<T>(errors: ValidationError[]): Result<T> {
  return { success: false, errors };
}

export function createSingleErrorResult<T>(
  field: string,
  message: string
): Result<T> {
  return { success: false, errors: [{ field, message }] };
}
