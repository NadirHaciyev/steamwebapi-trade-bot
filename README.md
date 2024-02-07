# Steamwebapi Trade Bot

<p align="center">
  Wrapper created for 
  <a href="https://www.steamwebapi.com/">
    Steamwebapi
  </a>
</p>

<p align="center">
    <a href="https://github.com/NadirHaciyev/steamwebapi-trade-bot/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/steamwebapi-trade-bot.svg" alt="License"></a>
    <a href="https://www.npmjs.com/package/steamwebapi-trade-bot"><img src="https://img.shields.io/npm/dt/steamwebapi-trade-bot.svg" alt="Total Downloads"></a>
    <a href="https://github.com/NadirHaciyev/steamwebapi-trade-bot/releases"><img src="https://img.shields.io/npm/v/steamwebapi-trade-bot.svg" alt="Latest Release"></a>
</p>

This library provides convenient access to the Steamwebapi REST API from TypeScript or JavaScript.

To learn how to use the Steamwebapi API, check out our [API Reference](https://www.steamwebapi.com/api/list) and [Documentation](https://www.steamwebapi.com/api/doc/steam-trading-bot-api).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Config Defaults](#config-defaults)
- [Handling Errors](#handling-errors)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
pnpm add steamwebapi-trade-bot
# or
npm install steamwebapi-trade-bot
# or
yarn add steamwebapi-trade-bot
```

## Usage

To use this wrapper, you first need to obtain an API key from the Steam Web API. Follow these steps to get your API key:

1. Go to the [Steam Web API Key Page](https://steamwebapi.com).
2. Log in with your Steam account. If you do not have an account, you will need to create one.
3. Fill in the required information to request an API key. This key will be necessary to access the Steam Web API.

The code below shows how to get started using the Steamwebapi Trade Bot API.

<!-- The full API of this library can be found in [api.md file](api.md) along with many [code examples](https://github.com/NadirHaciyev/steamwebapi-trade-bot/tree/main/examples). The code below shows how to get started using the Steamwebapi API. -->

<!-- prettier-ignore -->
```ts
import Trade from "steamwebapi-trade-bot";

// Create instance by providing API Key
const trade = new Trade("STEAMWEBAPI_API_KEY");

// Get Trade Offers
async function main() {
  const offers = await trade.getOffers({ /* options */ });

  console.log(offers.data);
}

main();
```

### Config Defaults

You can specify config defaults that will be applied to every request.

**Custom instance defaults**

```ts
// Set config defaults when creating the instance
const trade = new Trade("STEAMWEBAPI_API_KEY", { assetid: "ASSET_ID" });

// Override per-request:
await trade.getOffers({ assetid: "NEW_ASSET_ID" });
```

**Global trade defaults**

```ts
trade.defaults.assetid = "ASSET_ID";
trade.defaults.steamcommunityapikey = "STEAM_COMMUNITY_API_KEY";
```

## Examples

For more examples check the [examples directory](https://github.com/NadirHaciyev/steamwebapi-trade-bot/tree/main/examples).

## Contributing

Contributions to this project are welcome! If you encounter a bug or have a feature request, feel free to open an issue. Pull requests with improvements or new features are also appreciated.

## License

This API wrapper is licensed under the [MIT License](LICENSE).
