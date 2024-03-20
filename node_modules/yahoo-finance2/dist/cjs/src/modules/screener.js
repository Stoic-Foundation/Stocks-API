"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queryOptionsDefaults = {
    lang: "en-US",
    region: "US",
    scrIds: "day_gainers",
    count: 5,
};
function screener(queryOptionsOverrides, moduleOptions) {
    return this._moduleExec({
        moduleName: "screener",
        query: {
            url: "https://${YF_QUERY_HOST}/v1/finance/screener/predefined/saved",
            schemaKey: "#/definitions/ScreenerOptions",
            defaults: queryOptionsDefaults,
            overrides: queryOptionsOverrides,
            needsCrumb: true,
        },
        result: {
            schemaKey: "#/definitions/ScreenerResult",
            transformWith(result) {
                // console.log(result);
                if (!result.finance)
                    throw new Error("Unexpected result: " + JSON.stringify(result));
                return result.finance.result[0];
            },
        },
        moduleOptions,
    });
}
exports.default = screener;
// aggressive_small_caps
// conservative_foreign_funds
// day_gainers
// day_losers
// growth_technology_stocks
// high_yield_bond
// most_actives
// most_shorted_stocks
// portfolio_anchors
// small_cap_gainers
// solid_large_growth_funds
// solid_midcap_growth_funds
// top_mutual_funds
// undervalued_growth_stocks
// undervalued_large_caps
