import Ajv from "ajv";
export declare const ajv: Ajv;
export declare function resolvePath(obj: any, instancePath: string): any;
export interface ValidationOptions {
    logErrors?: boolean;
    logOptionsErrors?: boolean;
}
export interface ValidateParams {
    source: string;
    type: "options" | "result";
    object: object;
    schemaKey: string;
    options: ValidationOptions;
}
declare function disallowAdditionalProps(show?: boolean): void;
declare function validate({ source, type, object, schemaKey, options, }: ValidateParams): void;
export { disallowAdditionalProps };
export default validate;
