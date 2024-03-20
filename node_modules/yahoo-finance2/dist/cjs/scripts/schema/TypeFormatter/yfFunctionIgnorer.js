"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_json_schema_generator_1 = require("ts-json-schema-generator");
class yfNumberTypeFormatter {
    supportsType(type) {
        return type instanceof ts_json_schema_generator_1.FunctionType;
    }
    getDefinition() {
        return {};
    }
    getChildren() {
        return [];
    }
}
exports.default = yfNumberTypeFormatter;
