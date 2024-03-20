import type { ErrorObject } from "ajv/dist/types";
export declare class BadRequestError extends Error {
    name: string;
}
export declare class HTTPError extends Error {
    name: string;
}
export declare class InvalidOptionsError extends Error {
    name: string;
}
export declare class NoEnvironmentError extends Error {
    name: string;
}
export declare class FailedYahooValidationError extends Error {
    name: string;
    result: any;
    errors?: null | ErrorObject[];
    constructor(message: string, { result, errors }: {
        result: any;
        errors?: null | ErrorObject[];
    });
}
type ErrorsIndex = {
    [key: string]: any;
};
declare const errors: ErrorsIndex;
export default errors;
