import { client } from "../utils";
import type {
  AcceptParamsType,
  CancelParamsType,
  CreateParamsType,
  DeclineParamsType,
  StatusParamsType,
} from "../types/trade";

export interface ITrade {
  createOffer: (createParams: CreateParamsType) => void;
  getOffersStatus: (statusParams: StatusParamsType) => void;
  cancelOffer: (cancelParams: CancelParamsType) => void;
  declineOffer: (declineParams: DeclineParamsType) => void;
  acceptOffer: (acceptParams: AcceptParamsType) => void;
}

export default class Trade implements ITrade {
  constructor(apiKey: string) {
    client.defaults.params.apiKey = apiKey;
    client.defaults.params.baseUrl =
      "https//www.steamwebapi.com/steam/api/trade";
  }

  async createOffer(createParams: CreateParamsType) {
    try {
      const createRes = await client.post("/create", createParams);

      if (createRes.status !== 200) throw new Error("Trade Offer not created");

      return createRes;
    } catch (error) {
      return error;
    }
  }

  async getOffersStatus(statusParams: StatusParamsType) {
    try {
      const offersStatusRes = await client.post("/status", statusParams);
      if (offersStatusRes.status !== 200) throw new Error("An error occurred");

      return offersStatusRes;
    } catch (error) {
      return error;
    }
  }

  async cancelOffer(cancelParams: CancelParamsType) {
    try {
      const cancelRes = await client.put("/cancel", cancelParams);
      if (cancelRes.status !== 200) throw new Error("An error occurred");

      return { success: true };
    } catch (error) {
      return error;
    }
  }

  async declineOffer(declineParams: DeclineParamsType) {
    try {
      const declineRes = await client.put("/decline", declineParams);
      if (declineRes.status !== 200) throw new Error("An error occurred");

      return { success: true };
    } catch (error) {
      return error;
    }
  }

  async acceptOffer(acceptParams: AcceptParamsType) {
    try {
      const acceptRes = await client.put("/accept", acceptParams);
      if (acceptRes.status !== 200) throw new Error("An error occurred");

      return { success: true };
    } catch (error) {
      return error;
    }
  }
}
