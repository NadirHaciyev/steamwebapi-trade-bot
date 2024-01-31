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

  constructor({ apiKey }: ConstructorParams) {
    this.apiKey = apiKey;
  }
  get trade() {
    return new Trade(this.apiKey);
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    return this;
  }
  getApiKey() {
    return this.apiKey;
  }
}

