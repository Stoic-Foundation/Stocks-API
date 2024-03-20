import { ExtendedCookieJar } from "./cookieJar.js";
const options = {
    YF_QUERY_HOST: process.env.YF_QUERY_HOST || "query2.finance.yahoo.com",
    cookieJar: new ExtendedCookieJar(),
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
export default options;
