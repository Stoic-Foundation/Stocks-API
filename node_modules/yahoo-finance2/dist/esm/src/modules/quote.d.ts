import type { ModuleOptionsWithValidateTrue, ModuleOptionsWithValidateFalse, ModuleThis } from "../lib/moduleCommon.js";
import type { DateInMs, TwoNumberRange } from "../lib/commonTypes.js";
export interface QuoteBase {
    [key: string]: any;
    language: string;
    region: string;
    quoteType: string;
    typeDisp?: string;
    quoteSourceName?: string;
    triggerable: boolean;
    currency?: string;
    customPriceAlertConfidence?: string;
    marketState: "REGULAR" | "CLOSED" | "PRE" | "PREPRE" | "POST" | "POSTPOST";
    tradeable: boolean;
    cryptoTradeable?: boolean;
    exchange: string;
    shortName?: string;
    longName?: string;
    messageBoardId?: string;
    exchangeTimezoneName: string;
    exchangeTimezoneShortName: string;
    gmtOffSetMilliseconds: number;
    market: string;
    esgPopulated: boolean;
    fiftyTwoWeekLowChange?: number;
    fiftyTwoWeekLowChangePercent?: number;
    fiftyTwoWeekRange?: TwoNumberRange;
    fiftyTwoWeekHighChange?: number;
    fiftyTwoWeekHighChangePercent?: number;
    fiftyTwoWeekLow?: number;
    fiftyTwoWeekHigh?: number;
    fiftyTwoWeekChangePercent?: number;
    dividendDate?: Date;
    earningsTimestamp?: Date;
    earningsTimestampStart?: Date;
    earningsTimestampEnd?: Date;
    trailingAnnualDividendRate?: number;
    trailingPE?: number;
    trailingAnnualDividendYield?: number;
    epsTrailingTwelveMonths?: number;
    epsForward?: number;
    epsCurrentYear?: number;
    priceEpsCurrentYear?: number;
    sharesOutstanding?: number;
    bookValue?: number;
    fiftyDayAverage?: number;
    fiftyDayAverageChange?: number;
    fiftyDayAverageChangePercent?: number;
    twoHundredDayAverage?: number;
    twoHundredDayAverageChange?: number;
    twoHundredDayAverageChangePercent?: number;
    marketCap?: number;
    forwardPE?: number;
    priceToBook?: number;
    sourceInterval: number;
    exchangeDataDelayedBy: number;
    firstTradeDateMilliseconds?: DateInMs;
    priceHint: number;
    postMarketChangePercent?: number;
    postMarketTime?: Date;
    postMarketPrice?: number;
    postMarketChange?: number;
    regularMarketChange?: number;
    regularMarketChangePercent?: number;
    regularMarketTime?: Date;
    regularMarketPrice?: number;
    regularMarketDayHigh?: number;
    regularMarketDayRange?: TwoNumberRange;
    regularMarketDayLow?: number;
    regularMarketVolume?: number;
    regularMarketPreviousClose?: number;
    preMarketChange?: number;
    preMarketChangePercent?: number;
    preMarketTime?: Date;
    preMarketPrice?: number;
    bid?: number;
    ask?: number;
    bidSize?: number;
    askSize?: number;
    fullExchangeName: string;
    financialCurrency?: string;
    regularMarketOpen?: number;
    averageDailyVolume3Month?: number;
    averageDailyVolume10Day?: number;
    displayName?: string;
    symbol: string;
    underlyingSymbol?: string;
    ytdReturn?: number;
    trailingThreeMonthReturns?: number;
    trailingThreeMonthNavReturns?: number;
    ipoExpectedDate?: Date;
    newListingDate?: Date;
    nameChangeDate?: Date;
    prevName?: string;
    averageAnalystRating?: string;
    pageViewGrowthWeekly?: number;
    openInterest?: number;
    beta?: number;
}
export interface QuoteCryptoCurrency extends QuoteBase {
    quoteType: "CRYPTOCURRENCY";
    circulatingSupply: number;
    fromCurrency: string;
    toCurrency: string;
    lastMarket: string;
    coinImageUrl?: string;
    volume24Hr?: number;
    volumeAllCurrencies?: number;
    startDate?: Date;
}
export interface QuoteCurrency extends QuoteBase {
    quoteType: "CURRENCY";
}
export interface QuoteEtf extends QuoteBase {
    quoteType: "ETF";
}
export interface QuoteEquity extends QuoteBase {
    quoteType: "EQUITY";
    dividendRate?: number;
    dividendYield?: number;
}
export interface QuoteFuture extends QuoteBase {
    quoteType: "FUTURE";
    headSymbolAsString: string;
    contractSymbol: boolean;
    underlyingExchangeSymbol: string;
    expireDate: Date;
    expireIsoDate: number;
}
export interface QuoteIndex extends QuoteBase {
    quoteType: "INDEX";
}
export interface QuoteOption extends QuoteBase {
    quoteType: "OPTION";
    strike: number;
    openInterest: number;
    expireDate: number;
    expireIsoDate: number;
    underlyingSymbol: string;
}
export interface QuoteMutualfund extends QuoteBase {
    quoteType: "MUTUALFUND";
}
export type Quote = QuoteCryptoCurrency | QuoteCurrency | QuoteEtf | QuoteEquity | QuoteFuture | QuoteIndex | QuoteMutualfund | QuoteOption;
export type QuoteField = keyof Quote;
export type ResultType = "array" | "object" | "map";
export type QuoteResponseArray = Quote[];
export type QuoteResponseMap = Map<string, Quote>;
export type QuoteResponseObject = {
    [key: string]: Quote;
};
export interface QuoteOptions {
    fields?: QuoteField[];
    return?: ResultType;
}
export interface QuoteOptionsWithReturnArray extends QuoteOptions {
    return?: "array";
}
export interface QuoteOptionsWithReturnMap extends QuoteOptions {
    return: "map";
}
export interface QuoteOptionsWithReturnObject extends QuoteOptions {
    return: "object";
}
export default function quote(this: ModuleThis, query: string[], queryOptionsOverrides?: QuoteOptionsWithReturnArray, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<QuoteResponseArray>;
export default function quote(this: ModuleThis, query: string[], queryOptionsOverrides?: QuoteOptionsWithReturnMap, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<QuoteResponseMap>;
export default function quote(this: ModuleThis, query: string[], queryOptionsOverrides?: QuoteOptionsWithReturnObject, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<QuoteResponseObject>;
export default function quote(this: ModuleThis, query: string, queryOptionsOverrides?: QuoteOptions, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<Quote>;
export default function quote(this: ModuleThis, query: string | string[], queryOptionsOverrides?: QuoteOptions, moduleOptions?: ModuleOptionsWithValidateFalse): Promise<any>;
