"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookieJar_js_1 = require("./cookieJar.js");
const options = {
    YF_QUERY_HOST: process.env.YF_QUERY_HOST || "query2.finance.yahoo.com",
    cookieJar: new cookieJar_js_1.ExtendedCookieJar(),
    queue: {
        concurrency: 4, // Min: 1, Max: Infinity
        timeout: 60,
    },
    validation: {
        logErrors: true,
        logOptionsErrors: true,
    },
    logger: {
        info: (...args) => console.log(...args),
        warn: (...args) => console.error(...args),
        error: (...args) => console.error(...args),
        debug: (...args) => console.log(...args),
    },
};
exports.default = options;
