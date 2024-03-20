import type { ValidationOptions } from "./validateAndCoerceTypes.js";
import type { QueueOptions } from "./queue.js";
import { ExtendedCookieJar } from "./cookieJar.js";
export interface Logger {
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    debug: (...args: any[]) => void;
}
export interface YahooFinanceOptions {
    YF_QUERY_HOST?: string;
    cookieJar?: ExtendedCookieJar;
    queue?: QueueOptions;
    validation?: ValidationOptions;
    logger?: Logger;
}
declare const options: YahooFinanceOptions;
export default options;
