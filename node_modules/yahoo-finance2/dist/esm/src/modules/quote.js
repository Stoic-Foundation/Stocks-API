const queryOptionsDefaults = {};
export default async function quote(query, queryOptionsOverrides, moduleOptions) {
    const symbols = typeof query === "string" ? query : query.join(",");
    const returnAs = queryOptionsOverrides && queryOptionsOverrides.return;
    const results = await this._moduleExec({
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
}
