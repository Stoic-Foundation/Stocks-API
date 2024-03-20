"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryOptionsDefaults = {
    lang: "en-US",
    region: "US",
    quotesCount: 6,
    newsCount: 4,
    enableFuzzyQuery: false,
    quotesQueryId: "tss_match_phrase_query",
    multiQuoteQueryId: "multi_quote_single_token_query",
    newsQueryId: "news_cie_vespa",
    enableCb: true,
    enableNavLinks: true,
    enableEnhancedTrivialQuery: true,
};
function search(query, queryOptionsOverrides, moduleOptions) {
    return this._moduleExec({
        moduleName: "search",
        query: {
            url: "https://${YF_QUERY_HOST}/v1/finance/search",
            schemaKey: "#/definitions/SearchOptions",
            defaults: queryOptionsDefaults,
            runtime: { q: query },
            overrides: queryOptionsOverrides,
        },
        result: {
            schemaKey: "#/definitions/SearchResult",
        },
        moduleOptions,
    });
}
exports.default = search;
