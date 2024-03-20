import type { ModuleOptionsWithValidateTrue, ModuleOptionsWithValidateFalse, ModuleThis } from "../lib/moduleCommon.js";
export interface TrendingSymbol {
    [key: string]: any;
    symbol: string;
}
export interface TrendingSymbolsResult {
    [key: string]: any;
    count: number;
    quotes: TrendingSymbol[];
    jobTimestamp: number;
    startInterval: number;
}
export interface TrendingSymbolsOptions {
    lang?: string;
    region?: string;
    count?: number;
}
export default function trendingSymbols(this: ModuleThis, query: string, queryOptionsOverrides?: TrendingSymbolsOptions, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<TrendingSymbolsResult>;
export default function trendingSymbols(this: ModuleThis, query: string, queryOptionsOverrides?: TrendingSymbolsOptions, moduleOptions?: ModuleOptionsWithValidateFalse): Promise<any>;
