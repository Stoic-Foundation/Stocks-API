const queryOptionsDefaults = {
    lang: "en-US",
    region: "US",
    scrIds: "day_gainers",
    count: 5,
};
export default function dailyGainers(queryOptionsOverrides, moduleOptions) {
    return this._moduleExec({
        moduleName: "dailyGainers",
        query: {
            url: "https://${YF_QUERY_HOST}/v1/finance/screener/predefined/saved",
            schemaKey: "#/definitions/DailyGainersOptions",
            defaults: queryOptionsDefaults,
            overrides: queryOptionsOverrides,
            needsCrumb: true,
        },
        result: {
            schemaKey: "#/definitions/DailyGainersResult",
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
