import SteamWebApi from "../dist/index.cjs";

function trade() {
  const swa = new SteamWebApi({ apiKey: "your_api_key" });

  // Create a new trade offer
  swa.trade.createOffer({
    /* create params https://www.steamwebapi.com/api/list */
  });
}
