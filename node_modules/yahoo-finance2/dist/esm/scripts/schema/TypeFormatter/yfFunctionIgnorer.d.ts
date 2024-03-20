import { BaseType, FunctionType, Definition, SubTypeFormatter } from "ts-json-schema-generator";
export default class yfNumberTypeFormatter implements SubTypeFormatter {
    supportsType(type: FunctionType): boolean;
    getDefinition(): Definition;
    getChildren(): BaseType[];
}
