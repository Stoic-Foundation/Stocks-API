import type { ModuleOptionsWithValidateTrue, ModuleOptionsWithValidateFalse, ModuleThis } from "../lib/moduleCommon.js";
export interface ChartResultObject {
    [key: string]: any;
    meta: ChartMeta;
    timestamp?: Array<number>;
    events?: ChartEventsObject;
    indicators: ChartIndicatorsObject;
}
export interface ChartResultArray {
    meta: ChartMeta;
    events?: ChartEventsArray;
    quotes: Array<ChartResultArrayQuote>;
}
export interface ChartResultArrayQuote {
    [key: string]: any;
    date: Date;
    high: number | null;
    low: number | null;
    open: number | null;
    close: number | null;
    volume: number | null;
    adjclose?: number | null;
}
export interface ChartMeta {
    [key: string]: any;
    currency: string;
    symbol: string;
    exchangeName: string;
    instrumentType: string;
    firstTradeDate: Date | null;
    regularMarketTime: Date;
    gmtoffset: number;
    timezone: string;
    exchangeTimezoneName: string;
    regularMarketPrice: number;
    chartPreviousClose?: number;
    previousClose?: number;
    scale?: number;
    priceHint: number;
    currentTradingPeriod: {
        [key: string]: any;
        pre: ChartMetaTradingPeriod;
        regular: ChartMetaTradingPeriod;
        post: ChartMetaTradingPeriod;
    };
    tradingPeriods?: ChartMetaTradingPeriods;
    dataGranularity: string;
    range: string;
    validRanges: Array<string>;
}
export interface ChartMetaTradingPeriod {
    [key: string]: any;
    timezone: string;
    start: Date;
    end: Date;
    gmtoffset: number;
}
export interface ChartMetaTradingPeriods {
    [key: string]: any;
    pre?: Array<Array<ChartMetaTradingPeriod>>;
    post?: Array<Array<ChartMetaTradingPeriod>>;
    regular?: Array<Array<ChartMetaTradingPeriod>>;
}
export interface ChartEventsObject {
    [key: string]: any;
    dividends?: ChartEventDividends;
    splits?: ChartEventSplits;
}
export interface ChartEventsArray {
    [key: string]: any;
    dividends?: Array<ChartEventDividend>;
    splits?: Array<ChartEventSplit>;
}
export interface ChartEventDividends {
    [key: string]: ChartEventDividend;
}
export interface ChartEventDividend {
    [key: string]: any;
    amount: number;
    date: Date;
}
export interface ChartEventSplits {
    [key: string]: ChartEventSplit;
}
export interface ChartEventSplit {
    [key: string]: any;
    date: Date;
    numerator: number;
    denominator: number;
    splitRatio: string;
}
export interface ChartIndicatorsObject {
    [key: string]: any;
    quote: Array<ChartIndicatorQuote>;
    adjclose?: Array<ChartIndicatorAdjclose>;
}
export interface ChartIndicatorQuote {
    [key: string]: any;
    high: Array<number | null>;
    low: Array<number | null>;
    open: Array<number | null>;
    close: Array<number | null>;
    volume: Array<number | null>;
}
export interface ChartIndicatorAdjclose {
    [key: string]: any;
    adjclose?: Array<number | null>;
}
export interface ChartOptions {
    period1: Date | string | number;
    period2?: Date | string | number;
    useYfid?: boolean;
    interval?: "1m" | "2m" | "5m" | "15m" | "30m" | "60m" | "90m" | "1h" | "1d" | "5d" | "1wk" | "1mo" | "3mo";
    includePrePost?: boolean;
    events?: string;
    lang?: string;
    return?: "array" | "object";
}
export interface ChartOptionsWithReturnArray extends ChartOptions {
    return?: "array";
}
export interface ChartOptionsWithReturnObject extends ChartOptions {
    return: "object";
}
export declare const _chart: typeof chart;
export default function chart(this: ModuleThis, symbol: string, queryOptionsOverrides: ChartOptionsWithReturnObject, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<ChartResultObject>;
export default function chart(this: ModuleThis, symbol: string, queryOptionsOverrides: ChartOptionsWithReturnArray, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<ChartResultArray>;
export default function chart(this: ModuleThis, symbol: string, queryOptionsOverrides: ChartOptions, moduleOptions?: ModuleOptionsWithValidateFalse): Promise<any>;
