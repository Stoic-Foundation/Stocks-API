/// <reference lib="dom" />
declare function fetchDevel(): void;
declare const _default: {
    fetch: typeof fetch;
    fetchDevel: typeof fetchDevel;
    URLSearchParams: {
        new (init?: string | string[][] | URLSearchParams | Record<string, string> | undefined): URLSearchParams;
        prototype: URLSearchParams;
    };
};
export default _default;
