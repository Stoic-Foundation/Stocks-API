import { DefinitionTypeFormatter, } from "ts-json-schema-generator";
export default class yfReferenceTypeFormatter extends DefinitionTypeFormatter {
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
