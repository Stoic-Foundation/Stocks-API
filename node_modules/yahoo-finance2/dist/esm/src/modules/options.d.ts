import type { ModuleOptionsWithValidateTrue, ModuleOptionsWithValidateFalse, ModuleThis } from "../lib/moduleCommon.js";
import { Quote } from "./quote.js";
export interface OptionsResult {
    [key: string]: any;
    underlyingSymbol: string;
    expirationDates: Date[];
    strikes: number[];
    hasMiniOptions: boolean;
    quote: Quote;
    options: Option[];
}
export interface Option {
    [key: string]: any;
    expirationDate: Date;
    hasMiniOptions: boolean;
    calls: CallOrPut[];
    puts: CallOrPut[];
}
export interface CallOrPut {
    [key: string]: any;
    contractSymbol: string;
    strike: number;
    currency?: string;
    lastPrice: number;
    change: number;
    percentChange?: number;
    volume?: number;
    openInterest?: number;
    bid?: number;
    ask?: number;
    contractSize: "REGULAR";
    expiration: Date;
    lastTradeDate: Date;
    impliedVolatility: number;
    inTheMoney: boolean;
}
export interface OptionsOptions {
    formatted?: boolean;
    lang?: string;
    region?: string;
    date?: Date | number | string;
}
export default function options(this: ModuleThis, symbol: string, queryOptionsOverrides: OptionsOptions, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<OptionsResult>;
export default function options(this: ModuleThis, symbol: string, queryOptionsOverrides: OptionsOptions, moduleOptions?: ModuleOptionsWithValidateFalse): Promise<any>;
