import type { ModuleOptionsWithValidateFalse, ModuleOptionsWithValidateTrue, ModuleThis } from "../lib/moduleCommon.js";
export interface RecommendationsBySymbolResponse {
    [key: string]: any;
    recommendedSymbols: Array<{
        [key: string]: any;
        score: number;
        symbol: string;
    }>;
    symbol: string;
}
export type RecommendationsBySymbolResponseArray = RecommendationsBySymbolResponse[];
export interface RecommendationsBySymbolOptions {
}
export default function recommendationsBySymbol(this: ModuleThis, query: string, queryOptionsOverrides?: RecommendationsBySymbolOptions, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<RecommendationsBySymbolResponse>;
export default function recommendationsBySymbol(this: ModuleThis, query: string | string[], queryOptionsOverrides?: RecommendationsBySymbolOptions, moduleOptions?: ModuleOptionsWithValidateTrue): Promise<RecommendationsBySymbolResponseArray>;
export default function recommendationsBySymbol(this: ModuleThis, query: string | string[], queryOptionsOverrides?: RecommendationsBySymbolOptions, moduleOptions?: ModuleOptionsWithValidateFalse): Promise<any>;
