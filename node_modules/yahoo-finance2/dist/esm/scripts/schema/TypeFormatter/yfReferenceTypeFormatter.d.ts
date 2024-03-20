import { Definition, DefinitionTypeFormatter, DefinitionType } from "ts-json-schema-generator";
export default class yfReferenceTypeFormatter extends DefinitionTypeFormatter {
    getDefinition(type: DefinitionType): Definition;
}
