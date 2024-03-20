import type { ModuleOptionsWithValidateTrue, ModuleOptionsWithValidateFalse, ModuleThis } from "../lib/moduleCommon.js";
export interface SearchQuoteYahoo {
    [key: string]: any;
    symbol: string;
    isYahooFinance: true;
    exchange: string;
    exchDisp?: string;
    shortname?: string;
    longname?: string;
    index: "quotes";
    score: number;
    newListingDate?: Date;
    prevName?: string;
    nameChangeDate?: Date;
    sector?: string;
    industry?: string;
    dispSecIndFlag?: boolean;
}
export interface SearchQuoteYahooEquity extends SearchQuoteYahoo {
    quoteType: "EQUITY";
    typeDisp: "Equity";
}
export interface SearchQuoteYahooOption extends SearchQuoteYahoo {
    quoteType: "OPTION";
    typeDisp: "Option";
}
export interface SearchQuoteYahooETF extends SearchQuoteYahoo {
    quoteType: "ETF";
    typeDisp: "ETF";
}
export interface SearchQuoteYahooFund extends SearchQuoteYahoo {
    quoteType: "MUTUALFUND";
    typeDisp: "Fund";
}
export interface SearchQuoteYahooIndex extends SearchQuoteYahoo {
    quoteType: "INDEX";
    typeDisp: "Index";
}
export interface SearchQuoteYahooCurrency extends SearchQuoteYahoo {
    quoteType: "CURRENCY";
    typeDisp: "Currency";
}
export interface SearchQuoteYahooCryptocurrency extends SearchQuoteYahoo {
    quoteType: "CRYPTOCURRENCY";
    typeDisp: "Cryptocurrency";
}
export interface SearchQuoteYahooFuture extends SearchQuoteYahoo {
    quoteType: "FUTURE";
    typeDisp: "Future" | "Futures";
}
export interface SearchQuoteNonYahoo {
    [key: string]: any;
    index: string;
    name: string;
    permalink: string;
    isYahooFinance: false;
}
export interface SearchNews {
    [key: string]: any;
    uuid: string;
    title: string;
    publisher: string;
    link: string;
    providerPublishTime: Date;
    type: string;
    thumbnail?: {
        resolutions: SearchNewsThumbnailResolution[];
    };
    relatedTickers?: string[];
}
export interface SearchNewsThumbnailResolution {
    url: string;
    width: number;
    height: number;
    tag: string;
}
export interface SearchResult {
    [key: string]: any;
    explains: Array<any>;
    count: number;
    quotes: Array<SearchQuoteYahooEquity | SearchQuoteYahooOption | SearchQuoteYahooETF | SearchQuoteYahooFund | SearchQuoteYahooIndex | SearchQuoteYahooCurrency | SearchQuoteYahooCryptocurrency | SearchQuoteNonYahoo | SearchQuoteYahooFuture>;
    news: Array<SearchNews>;
    nav: Array<any>;
    lists: Array<any>;
    researchReports: Array<any>;
    totalTime: number;
    screenerFieldResults?: Array<any>;
    culturalAssets?: Array<any>;
    timeTakenForQuotes: number;
    timeTakenForNews: number;
    timeTakenForAlgowatchlist: number;
    timeTakenForPredefinedScreener: number;
    timeTakenForCrunchbase: number;
    timeTakenForNav: number;
    timeTakenForResearchReports: number;
    timeTakenForScreenerField?: number;
    timeTakenForCulturalAssets?: number;
}
export interface SearchOptions {
    lang?: string;
    region?: string;
    quotesCount?: number;
    newsCount?: number;
    enableFuzzyQuery?: boolean;
    quotesQueryId?: string;
    multiQuoteQueryId?: string;
    newsQueryId?: string;
    enableCb?: boolean;
    enableNavLinks?: boolean;
    enableEnhancedTrivialQuery?: boolean;
}
export default function search(this: ModuleThis, query: string, queryOptionsOverrides?: SearchOptions, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<SearchResult>;
export default function search(this: ModuleThis, query: string, queryOptionsOverrides?: SearchOptions, moduleOptions?: ModuleOptionsWithValidateFalse): Promise<any>;
