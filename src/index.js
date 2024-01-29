"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class SteamWebApi {
    constructor({ apiKey }) {
        this.apiKey = apiKey;
    }
    getTradeOffers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const offers = yield utils_1.client.get("/tradeoffer", {
                    params: { key: this.apiKey },
                });
                if (!offers)
                    throw new Error("Trade offers not founded");
                return offers;
            }
            catch (error) {
                return error;
            }
        });
    }
    sendTradeOffer(offerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield utils_1.client.post("/tradeoffer", offerData, {
                    params: { key: this.apiKey },
                });
                return true;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = SteamWebApi;
