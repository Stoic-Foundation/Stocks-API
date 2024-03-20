import { FunctionType, } from "ts-json-schema-generator";
export default class yfNumberTypeFormatter {
    supportsType(type) {
        return type instanceof FunctionType;
    }
    getDefinition() {
        return {};
    }
    getChildren() {
        return [];
    }
}
