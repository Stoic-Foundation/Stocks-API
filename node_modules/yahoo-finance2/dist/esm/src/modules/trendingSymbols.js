const queryOptionsDefaults = {
    lang: "en-US",
    count: 5,
};
export default function trendingSymbols(query, queryOptionsOverrides, moduleOptions) {
    return this._moduleExec({
        moduleName: "trendingSymbols",
        query: {
            url: "https://${YF_QUERY_HOST}/v1/finance/trending/" + query,
            schemaKey: "#/definitions/TrendingSymbolsOptions",
            defaults: queryOptionsDefaults,
            overrides: queryOptionsOverrides,
        },
        result: {
            schemaKey: "#/definitions/TrendingSymbolsResult",
            transformWith(result) {
                if (!result.finance)
                    throw new Error("Unexpected result: " + JSON.stringify(result));
                return result.finance.result[0];
            },
        },
        moduleOptions,
    });
}
