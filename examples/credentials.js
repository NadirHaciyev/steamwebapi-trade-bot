import SteamWebApi from "../dist/index.cjs";

function credentials() {
  const swa = new SteamWebApi({ apiKey: "your_api_key" });

  // Set new Api Key
  swa.setApiKey("new_api_key");

  // Get Api Key
  swa.getApiKey();
}
