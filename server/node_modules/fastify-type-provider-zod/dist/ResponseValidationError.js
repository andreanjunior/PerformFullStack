"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseValidationError = void 0;
class ResponseValidationError extends Error {
    constructor(validationResult, method, url) {
        super("Response doesn't match the schema");
        this.name = 'ResponseValidationError';
        this.details = {
            error: validationResult.error?.issues ?? [],
            method,
            url,
        };
    }
}
exports.ResponseValidationError = ResponseValidationError;
