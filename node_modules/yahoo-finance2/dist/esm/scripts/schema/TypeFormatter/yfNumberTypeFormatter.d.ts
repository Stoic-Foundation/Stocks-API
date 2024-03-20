import { BaseType, Definition, NumberType, SubTypeFormatter } from "ts-json-schema-generator";
export default class yfNumberTypeFormatter implements SubTypeFormatter {
    supportsType(type: NumberType): boolean;
    getDefinition(_type: NumberType): Definition;
    getChildren(_type: NumberType): BaseType[];
}
