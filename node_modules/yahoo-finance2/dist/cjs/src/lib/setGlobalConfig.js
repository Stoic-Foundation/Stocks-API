"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateAndCoerceTypes_js_1 = __importDefault(require("./validateAndCoerceTypes.js"));
const cookieJar_js_1 = require("./cookieJar.js");
function setGlobalConfig(_config) {
    // Instances (e.g. cookieJar) don't validate well :)
    const { cookieJar, logger } = _config, config = __rest(_config, ["cookieJar", "logger"]);
    (0, validateAndCoerceTypes_js_1.default)({
        object: config,
        source: "setGlobalConfig",
        type: "options",
        options: this._opts.validation,
        schemaKey: "#/definitions/YahooFinanceOptions",
    });
    mergeObjects(this._opts, config);
    if (cookieJar) {
        if (!(cookieJar instanceof cookieJar_js_1.ExtendedCookieJar))
            throw new Error("cookieJar must be an instance of ExtendedCookieJar");
        this._opts.cookieJar = cookieJar;
    }
    if (logger) {
        if (typeof logger.info !== "function")
            throw new Error("logger.info must be a function");
        if (typeof logger.warn !== "function")
            throw new Error("logger.warn must be a function");
        if (typeof logger.error !== "function")
            throw new Error("logger.error must be a function");
        if (typeof logger.debug !== "function")
            throw new Error("logger.debug must be a function");
        this._opts.logger = logger;
    }
}
exports.default = setGlobalConfig;
function mergeObjects(original, objToMerge) {
    const ownKeys = Reflect.ownKeys(objToMerge);
    for (const key of ownKeys) {
        if (typeof objToMerge[key] === "object") {
            mergeObjects(original[key], objToMerge[key]);
        }
        else {
            original[key] = objToMerge[key];
        }
    }
}
