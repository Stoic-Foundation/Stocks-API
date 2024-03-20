"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const queryOptionsDefaults = {};
function quote(query, queryOptionsOverrides, moduleOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const symbols = typeof query === "string" ? query : query.join(",");
        const returnAs = queryOptionsOverrides && queryOptionsOverrides.return;
        const results = yield this._moduleExec({
            moduleName: "quote",
            query: {
                url: "https://${YF_QUERY_HOST}/v7/finance/quote",
                needsCrumb: true,
                schemaKey: "#/definitions/QuoteOptions",
                defaults: queryOptionsDefaults,
                runtime: { symbols },
                overrides: queryOptionsOverrides,
                transformWith(queryOptions) {
                    // Options validation ensures this is a string[]
                    if (queryOptions.fields)
                        queryOptions.fields.join(",");
                    // Don't pass this on to Yahoo
                    delete queryOptions.return;
                    return queryOptions;
                },
            },
            result: {
                schemaKey: "#/definitions/QuoteResponseArray",
                transformWith(rawResult) {
                    var _a;
                    let results = (_a = rawResult === null || rawResult === void 0 ? void 0 : rawResult.quoteResponse) === null || _a === void 0 ? void 0 : _a.result;
                    if (!results || !Array.isArray(results))
                        throw new Error("Unexpected result: " + JSON.stringify(rawResult));
                    // Filter out quoteType==='NONE'
                    // So that delisted stocks will be undefined just like symbol-not-found
                    results = results.filter((quote) => (quote === null || quote === void 0 ? void 0 : quote.quoteType) !== "NONE");
                    return results;
                },
            },
            moduleOptions,
        });
        if (returnAs) {
            switch (returnAs) {
                case "array":
                    return results;
                case "object":
                    const object = {};
                    for (let result of results)
                        object[result.symbol] = result;
                    return object; // TODO: type
                case "map":
                    const map = new Map();
                    for (let result of results)
                        map.set(result.symbol, result);
                    return map; // TODO: type
            }
        }
        else {
            // By default, match the query input shape (string or string[]).
            return typeof query === "string"
                ? results[0]
                : results;
        }
    });
}
exports.default = quote;
