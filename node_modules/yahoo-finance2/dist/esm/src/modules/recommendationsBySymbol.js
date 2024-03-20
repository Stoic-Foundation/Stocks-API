const queryOptionsDefaults = {};
export default function recommendationsBySymbol(query, queryOptionsOverrides, moduleOptions) {
    const symbols = typeof query === "string" ? query : query.join(",");
    return this._moduleExec({
        moduleName: "recommendationsBySymbol",
        query: {
            url: "https://${YF_QUERY_HOST}/v6/finance/recommendationsbysymbol/" +
                symbols,
            schemaKey: "#/definitions/RecommendationsBySymbolOptions",
            defaults: queryOptionsDefaults,
            overrides: queryOptionsOverrides,
        },
        result: {
            schemaKey: "#/definitions/RecommendationsBySymbolResponseArray",
            transformWith(result) {
                if (!result.finance)
                    throw new Error("Unexpected result: " + JSON.stringify(result));
                return result.finance.result;
            },
        },
        moduleOptions,
    }).then((results) => {
        return typeof query === "string"
            ? results[0]
            : results;
    });
}
