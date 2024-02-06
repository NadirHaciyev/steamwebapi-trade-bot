<p align="center">
  <a href="https://github.com/NadirHaciyev/steamwebapi-wrapper">
    <picture>
      <img alt="Steamwebapi Wrapper" src="https://raw.githubusercontent.com/NadirHaciyev/steamwebapi-wrapper/HEAD/.github/steamwebapi-wrapper-logo.svg" width="300" style="max-width: 100%; aspect-ratio: 5 / 1.5;">
    </picture>
  </a>
</p>

<p align="center">
  Wrapper created for 
  <a href="https://www.steamwebapi.com/">
    Steamwebapi
  </a>
</p>

<p align="center">
    <a href="https://github.com/NadirHaciyev/steamwebapi-wrapper/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/steamwebapi-wrapper.svg" alt="License"></a>
    <a href="https://www.npmjs.com/package/steamwebapi-wrapper"><img src="https://img.shields.io/npm/dt/steamwebapi-wrapper.svg" alt="Total Downloads"></a>
    <a href="https://github.com/NadirHaciyev/steamwebapi-wrapper/releases"><img src="https://img.shields.io/npm/v/steamwebapi-wrapper.svg" alt="Latest Release"></a>
</p>
<!-- Steamwebapi is a free and open-source API wrapper for interacting with the Steam Web API. It provides easy access to various Steam services such as Inventory, Profile, CS:GO Items, Rust Items, Dota Items, Team Fortress Items, and more without the risk of Steam blocking. -->

This library provides convenient access to the Steamwebapi REST API from TypeScript or JavaScript.

To learn how to use the Steamwebapi API, check out our [API Reference](https://www.steamwebapi.com/api/list) and [Documentation](https://www.steamwebapi.com/api/doc).

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
pnpm add steamwebapi-wrapper
# or
npm install steamwebapi-wrapper
# or
yarn add steamwebapi-wrapper
```

## Usage

To use this wrapper, you first need to obtain an API key from the Steam Web API. Follow these steps to get your API key:

1. Go to the [Steam Web API Key Page](https://steamwebapi.com).
2. Log in with your Steam account. If you do not have an account, you will need to create one.
3. Fill in the required information to request an API key. This key will be necessary to access the Steam Web API.

The full API of this library can be found in [api.md file](api.md) along with many [code examples](https://github.com/NadirHaciyev/steamwebapi-wrapper/tree/main/examples). The code below shows how to get started using the Steamwebapi API.

<!-- prettier-ignore -->
```ts
import SteamWebApi from "steamwebapi-wrapper";

// Create instance by providing API Key
const swa = new SteamWebApi({ apiKey: "STEAMWEBAPI_API_KEY" });

// Get Trade Offers
async function main() {
  const offers = await swa.trade.getOffers({ /* options */ });

  console.log(offers.data);
}

main();
```

### Config Defaults

You can specify config defaults that will be applied to every request.

**Custom instance defaults**

```ts
// Set config defaults when creating the instance
const trade = swa.trade.create({ assetid: "ASSET_ID" });

// Override per-request:
await trade.getOffers({ assetid: "NEW_ASSET_ID" });
```

**Global trade defaults**

```ts
swa.trade.defaults.assetid = "ASSET_ID";
swa.trade.defaults.steamcommunityapikey = "STEAM_COMMUNITY_API_KEY";
```

## Handling Errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `WrapperError` will be thrown:

<!-- prettier-ignore -->
```ts
async function main() {
  const offers = await swa.getOffers({
      steamcommunityapikey: "STEAM_COMMUNITY_API_KEY",
    }).catch((err) => {
      if (err instanceof SteamWebApi.APIError) {
        console.log(err.status); // 400
        console.log(err.message); // Unknown Error
      } else {
        throw err;
      }
    });
}

main();
```

Error codes are as followed:

| Status Code | Error Type                                                           |
| ----------- | -------------------------------------------------------------------- |
| 401         | `Unauthorized access due to missing or invalid steamcommunityapikey` |
| 421         | `Missing required parameters or rate limit exceeded`                 |
| 422         | `Invalid JSON format in the request`                                 |
| 489         | `Invalid steamcommunityapikey`                                       |
| 500         | `Internal server error or unexpected error from the Steam API`       |
| N/A         | `APIConnectionError`                                                 |

## Examples

For more examples check the [examples directory](https://github.com/NadirHaciyev/steamwebapi-wrapper/tree/main/examples).

## Contributing

Contributions to this project are welcome! If you encounter a bug or have a feature request, feel free to open an issue. Pull requests with improvements or new features are also appreciated.

## License

This API wrapper is licensed under the [MIT License](LICENSE).
