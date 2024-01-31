import { client } from "../utils";

interface OfferDataParams {}

export interface ITrade {
  getTradeOffers: () => void;
  sendTradeOffer: (offerData: OfferDataParams) => void;
}

export default class Trade implements ITrade {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    client.defaults.params.apiKey = apiKey;
  }

  async getTradeOffers() {
    try {
      const offers = await client.get("/tradeoffer", {
        params: { key: this.apiKey },
      });

      if (!offers) throw new Error("Trade offers not founded");

      return offers;
    } catch (error) {
      return error;
    }
  }

  async getTradeOffer(id: string) {
    try {
      const offer = await client.get("/tradeoffer", {});
    } catch (error) {
      return error;
    }
  }

  async sendTradeOffer(offerData: OfferDataParams) {
    try {
      await client.post("/tradeoffer", offerData, {
        params: { key: this.apiKey },
      });

      return true;
    } catch (error) {
      return error;
    }
  }
}
