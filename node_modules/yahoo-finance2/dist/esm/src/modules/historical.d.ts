import type { ModuleOptionsWithValidateTrue, ModuleOptionsWithValidateFalse, ModuleThis } from "../lib/moduleCommon.js";
export type HistoricalHistoryResult = Array<HistoricalRowHistory>;
export type HistoricalDividendsResult = Array<HistoricalRowDividend>;
export type HistoricalStockSplitsResult = Array<HistoricalRowStockSplit>;
export type HistoricalResult = HistoricalHistoryResult | HistoricalDividendsResult | HistoricalStockSplitsResult;
export interface HistoricalRowHistory {
    [key: string]: any;
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    adjClose?: number;
    volume: number;
}
export interface HistoricalRowDividend {
    date: Date;
    dividends: number;
}
export interface HistoricalRowStockSplit {
    date: Date;
    stockSplits: string;
}
export interface HistoricalOptions {
    period1: Date | string | number;
    period2?: Date | string | number;
    interval?: "1d" | "1wk" | "1mo";
    events?: string;
    includeAdjustedClose?: boolean;
}
export interface HistoricalOptionsEventsHistory extends HistoricalOptions {
    events?: "history";
}
export interface HistoricalOptionsEventsDividends extends HistoricalOptions {
    events: "dividends";
}
export interface HistoricalOptionsEventsSplit extends HistoricalOptions {
    events: "split";
}
export default function historical(this: ModuleThis, symbol: string, queryOptionsOverrides: HistoricalOptionsEventsHistory, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<HistoricalHistoryResult>;
export default function historical(this: ModuleThis, symbol: string, queryOptionsOverrides: HistoricalOptionsEventsDividends, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<HistoricalDividendsResult>;
export default function historical(this: ModuleThis, symbol: string, queryOptionsOverrides: HistoricalOptionsEventsSplit, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<HistoricalStockSplitsResult>;
export default function historical(this: ModuleThis, symbol: string, queryOptionsOverrides: HistoricalOptions, moduleOptions?: ModuleOptionsWithValidateFalse): Promise<any>;
