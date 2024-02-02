import Trade, { type ITrade } from "./trade";

interface ConstructorParams {
  apiKey: string;
}

interface ISteamWebApi {
  trade: ITrade;
  setApiKey: (apiKey: string) => void;
  getApiKey: () => string;
}

export default class SteamWebApi implements ISteamWebApi {
  private apiKey: string;
  trade: Trade;

  constructor({ apiKey }: ConstructorParams) {
    this.apiKey = apiKey;
    this.trade = new Trade(apiKey);
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    return this;
  }
  getApiKey() {
    return this.apiKey;
  }
}
