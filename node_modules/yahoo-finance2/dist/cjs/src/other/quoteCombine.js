"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quote_js_1 = __importDefault(require("../modules/quote.js"));
const validateAndCoerceTypes_js_1 = __importDefault(require("../lib/validateAndCoerceTypes.js"));
const DEBOUNCE_TIME = 50;
const slugMap = new Map();
function quoteCombine(query, queryOptionsOverrides = {}, moduleOptions) {
    const symbol = query;
    if (typeof symbol !== "string")
        throw new Error("quoteCombine expects a string query parameter, received: " +
            JSON.stringify(symbol, null, 2));
    (0, validateAndCoerceTypes_js_1.default)({
        source: "quoteCombine",
        type: "options",
        object: queryOptionsOverrides,
        schemaKey: "#/definitions/QuoteOptions",
        options: this._opts.validation,
    });
    // Make sure we only combine requests with same options
    const slug = JSON.stringify(queryOptionsOverrides);
    let entry = slugMap.get(slug);
    if (!entry) {
        entry = {
            timeout: null,
            queryOptionsOverrides,
            symbols: new Map(),
        };
        slugMap.set(slug, entry);
    }
    if (entry.timeout)
        clearTimeout(entry.timeout);
    const thisQuote = quote_js_1.default.bind(this);
    return new Promise((resolve, reject) => {
        let symbolPromiseCallbacks = entry.symbols.get(symbol);
        /* istanbul ignore else */
        if (!symbolPromiseCallbacks) {
            symbolPromiseCallbacks = [];
            entry.symbols.set(symbol, symbolPromiseCallbacks);
        }
        symbolPromiseCallbacks.push({ resolve, reject });
        entry.timeout = setTimeout(() => {
            slugMap.delete(slug);
            const symbols = Array.from(entry.symbols.keys());
            // @ts-ignore
            thisQuote(symbols, queryOptionsOverrides, moduleOptions)
                .then((results) => {
                for (let result of results) {
                    for (let promise of entry.symbols.get(result.symbol)) {
                        promise.resolve(result);
                        promise.resolved = true;
                    }
                }
                // Check for symbols we asked for and didn't get back,
                // e.g. non-existant symbols (#150)
                for (let [symbol, promises] of entry.symbols) {
                    for (let promise of promises) {
                        if (!promise.resolved) {
                            promise.resolve(undefined);
                        }
                    }
                }
            })
                .catch((error) => {
                for (let symbolPromiseCallbacks of entry.symbols.values())
                    for (let promise of symbolPromiseCallbacks)
                        promise.reject(error);
            });
        }, DEBOUNCE_TIME);
    });
}
exports.default = quoteCombine;
