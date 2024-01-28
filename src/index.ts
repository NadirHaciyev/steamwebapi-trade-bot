import { client } from "./utils";

interface OfferDataParams {}

interface ConstructorParams {
  apiKey: string;
}

class SteamWebApi {
  private apiKey: string;

  constructor({ apiKey }: ConstructorParams) {
    this.apiKey = apiKey;
  }

  async getTradeOffers(): Promise<any> {
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

  async sendTradeOffer(offerData: OfferDataParams): Promise<boolean> {
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

export default SteamWebApi;
