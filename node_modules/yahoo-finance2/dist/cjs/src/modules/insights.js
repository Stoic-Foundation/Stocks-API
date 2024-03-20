"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryOptionsDefaults = {
    lang: "en-US",
    region: "US",
    getAllResearchReports: true,
    reportsCount: 2,
};
function trendingSymbols(symbol, queryOptionsOverrides, moduleOptions) {
    return this._moduleExec({
        moduleName: "insights",
        query: {
            assertSymbol: symbol,
            url: "https://${YF_QUERY_HOST}/ws/insights/v2/finance/insights",
            schemaKey: "#/definitions/InsightsOptions",
            defaults: queryOptionsDefaults,
            overrides: queryOptionsOverrides,
            runtime: { symbol },
        },
        result: {
            schemaKey: "#/definitions/InsightsResult",
            transformWith(result) {
                if (!result.finance)
                    throw new Error("Unexpected result: " + JSON.stringify(result));
                return result.finance.result;
            },
        },
        moduleOptions,
    });
}
exports.default = trendingSymbols;
