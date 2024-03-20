"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_json_schema_generator_1 = require("ts-json-schema-generator");
class yfNumberTypeFormatter {
    supportsType(type) {
        return type instanceof ts_json_schema_generator_1.NumberType;
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
exports.default = yfNumberTypeFormatter;
