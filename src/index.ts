import { mergeParams } from "./utils";
import { client } from "./utils";
import type {
  AcceptParamsType,
  CancelParamsType,
  CreateParamsType,
  DeclineParamsType,
  StatusParamsType,
  DefaultParams,
} from "./index.d";
import { ApiError } from "./error";

interface ITrade {
  setApiKey: (apiKey: string) => void;
  getApiKey: () => string;
  createOffer: (createParams: CreateParamsType) => void;
  getOffers: (statusParams: StatusParamsType) => void;
  cancelOffer: (cancelParams: CancelParamsType) => void;
  declineOffer: (declineParams: DeclineParamsType) => void;
  acceptOffer: (acceptParams: AcceptParamsType) => void;
}

const ERROR = {
  message: "Unknown Error",
  status: 500,
};

export default class Trade implements ITrade {
  defaults: DefaultParams;
  private apiKey: string;

  constructor(apiKey: string, config: DefaultParams) {
    this.apiKey = apiKey;
    client.defaults.params.key = apiKey;

    this.defaults = { ...config };
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    return this;
  }

  getApiKey() {
    return this.apiKey;
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

      if (createRes.status !== 200) throw new ApiError(ERROR);

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
      if (offersRes.status !== 200) throw new ApiError(ERROR);

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
      if (cancelRes.status !== 200) throw new ApiError(ERROR);

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
      if (declineRes.status !== 200) throw new ApiError(ERROR);

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
      if (acceptRes.status !== 200) throw new ApiError(ERROR);

      return { success: true };
    } catch (error) {
      return error;
    }
  }
}
