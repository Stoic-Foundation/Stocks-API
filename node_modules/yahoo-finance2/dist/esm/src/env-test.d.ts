/// <reference types="node" />
import { URLSearchParams } from "url";
import fetch from "node-fetch";
declare function fetchDevel(): Promise<(url: fetch.RequestInfo, init?: fetch.RequestInit | undefined) => Promise<fetch.Response>>;
declare const _default: {
    fetch: typeof fetch;
    fetchDevel: typeof fetchDevel;
    URLSearchParams: typeof URLSearchParams;
};
export default _default;
