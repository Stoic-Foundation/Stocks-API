import { QuoteSummaryResult } from "./quoteSummary-iface.js";
import type { ModuleOptionsWithValidateTrue, ModuleOptionsWithValidateFalse, ModuleThis } from "../lib/moduleCommon.js";
export declare const quoteSummary_modules: string[];
export type QuoteSummaryModules = "assetProfile" | "balanceSheetHistory" | "balanceSheetHistoryQuarterly" | "calendarEvents" | "cashflowStatementHistory" | "cashflowStatementHistoryQuarterly" | "defaultKeyStatistics" | "earnings" | "earningsHistory" | "earningsTrend" | "financialData" | "fundOwnership" | "fundPerformance" | "fundProfile" | "incomeStatementHistory" | "incomeStatementHistoryQuarterly" | "indexTrend" | "industryTrend" | "insiderHolders" | "insiderTransactions" | "institutionOwnership" | "majorDirectHolders" | "majorHoldersBreakdown" | "netSharePurchaseActivity" | "price" | "quoteType" | "recommendationTrend" | "secFilings" | "sectorTrend" | "summaryDetail" | "summaryProfile" | "topHoldings" | "upgradeDowngradeHistory";
export interface QuoteSummaryOptions {
    formatted?: boolean;
    modules?: Array<QuoteSummaryModules> | "all";
}
export default function quoteSummary(this: ModuleThis, symbol: string, queryOptionsOverrides?: QuoteSummaryOptions, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<QuoteSummaryResult>;
export default function quoteSummary(this: ModuleThis, symbol: string, queryOptionsOverrides?: QuoteSummaryOptions, moduleOptions?: ModuleOptionsWithValidateFalse): Promise<any>;
