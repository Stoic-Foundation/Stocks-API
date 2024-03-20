import { NumberType, } from "ts-json-schema-generator";
export default class yfNumberTypeFormatter {
    supportsType(type) {
        return type instanceof NumberType;
    }
    getDefinition(_type) {
        return {
            // @ts-ignore
            yahooFinanceType: "number",
        };
    }
    getChildren(_type) {
        return [];
    }
}
