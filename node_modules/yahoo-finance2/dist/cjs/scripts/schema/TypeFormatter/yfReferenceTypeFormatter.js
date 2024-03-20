"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_json_schema_generator_1 = require("ts-json-schema-generator");
class yfReferenceTypeFormatter extends ts_json_schema_generator_1.DefinitionTypeFormatter {
    getDefinition(type) {
        const ref = type.getName();
        const types = ["TwoNumberRange", "DateInMs"];
        if (types.includes(ref))
            return {
                // @ts-ignore
                yahooFinanceType: ref,
            };
        else
            return super.getDefinition(type);
    }
}
exports.default = yfReferenceTypeFormatter;
