import { mergeParams } from "./../helpers";
import { client } from "../utils";
import type {
  AcceptParamsType,
  CancelParamsType,
  CreateParamsType,
  DeclineParamsType,
  StatusParamsType,
  DefaultParams,
} from "../types/trade";
import { InternalServerError } from "../core/error-handler";

export interface ITrade {
  create: (defaultParams: DefaultParams) => Trade;
  createOffer: (createParams: CreateParamsType) => void;
  getOffers: (statusParams: StatusParamsType) => void;
  cancelOffer: (cancelParams: CancelParamsType) => void;
  declineOffer: (declineParams: DeclineParamsType) => void;
  acceptOffer: (acceptParams: AcceptParamsType) => void;
}

const TRADE_URL = "https://www.steamwebapi.com/steam/api/trade";
export default class Trade implements ITrade {
  defaults: DefaultParams = {};

  constructor(apiKey: string) {
    client.defaults.params.key = apiKey;
    client.defaults.baseURL = TRADE_URL;
  }

  create(defaultParams: DefaultParams): Trade {
    this.defaults = { ...defaultParams };

    return this;
  }

  async createOffer(createParams: CreateParamsType) {
    const params = mergeParams(createParams, this.defaults, [
      "steamloginsecure",
      "partneritemassetids",
      "myitemsassetids",
      "tradelink",
      "partnersteamid",
      "message",
      "game",
    ]);

    try {
      const createRes = await client.post("/create", params);

      if (createRes.status !== 200) throw new Error("Trade Offer not created");

      return createRes;
    } catch (error) {
      return error;
    }
  }

  async getOffers(statusParams: StatusParamsType) {
    const params = mergeParams(statusParams, this.defaults, [
      "steamcommunityapikey",
      "partnersteamid",
      "assetid",
    ]);

    try {
      const offersRes = await client.post("/status", params);
      if (offersRes.status !== 200) {
        throw new InternalServerError("Unknown Error");
      }

      return offersRes;
    } catch (error) {
      return error;
    }
  }

  async cancelOffer(cancelParams: CancelParamsType) {
    const params = mergeParams(cancelParams, this.defaults, [
      "steamloginsecure",
      "tradeofferid",
    ]);

    try {
      const cancelRes = await client.put("/cancel", params);
      if (cancelRes.status !== 200) throw new Error("An error occurred");

      return { success: true };
    } catch (error) {
      return error;
    }
  }

  async declineOffer(declineParams: DeclineParamsType) {
    const params = mergeParams(declineParams, this.defaults, [
      "steamloginsecure",
      "tradeofferid",
    ]);

    try {
      const declineRes = await client.put("/decline", params);
      if (declineRes.status !== 200) throw new Error("An error occurred");

      return { success: true };
    } catch (error) {
      return error;
    }
  }

  async acceptOffer(acceptParams: AcceptParamsType) {
    const params = mergeParams(acceptParams, this.defaults, [
      "steamloginsecure",
      "partnersteamid",
      "tradeofferid",
    ]);

    try {
      const acceptRes = await client.put("/accept", params);
      if (acceptRes.status !== 200) throw new Error("An error occurred");

      return { success: true };
    } catch (error) {
      return error;
    }
  }
}
