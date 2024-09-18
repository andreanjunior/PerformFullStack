import type { z, ZodIssue } from 'zod';
export type ResponseValidationErrorDetails = {
    error: ZodIssue[];
    method: string;
    url: string;
};
export declare class ResponseValidationError extends Error {
    details: ResponseValidationErrorDetails;
    constructor(validationResult: z.SafeParseReturnType<unknown, unknown>, method: string, url: string);
}
