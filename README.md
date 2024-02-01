<p align="center">
  <a href="https://github.com/NadirHaciyev/steamwebapi-wrapper">
    <picture>
      <img alt="Steamwebapi Wrapper" src="https://raw.githubusercontent.com/NadirHaciyev/steamwebapi-wrapper/HEAD/.github/steamwebapi-wrapper-logo.svg" width="500" style="max-width: 100%; aspect-ratio: 5 / 1.5;">
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

## Description

Steamwebapi is a free and open-source API wrapper for interacting with the Steam Web API. It provides easy access to various Steam services such as Inventory, Profile, CS:GO Items, Rust Items, Dota Items, Team Fortress Items, and more without the risk of Steam blocking.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

Using pnpm:

```bash
$ pnpm add steamwebapi-wrapper
```

Using npm:

```bash
$ npm install steamwebapi-wrapper
```

Using yarn:

```bash
$ yarn add steamwebapi-wrapper
```

## Usage

To use this wrapper, you first need to obtain an API key from the Steam Web API. Follow these steps to get your API key:

1. Go to the [Steam Web API Key Page](https://steamwebapi.com).
2. Log in with your Steam account. If you do not have an account, you will need to create one.
3. Fill in the required information to request an API key. This key will be necessary to access the Steam Web API.

Once you have your API key, you can use the wrapper as follows:

```ts
import SteamWebApi from "steamwebapi-wrapper";

// Create instance by providing API Key
const swa = new SteamWebApi({ apiKey: "your_api_key" });

// Get all trade offers
swa.trade
  .getAllTradeOffers()
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
```

## API Endpoints

The API wrapper supports the following endpoints:

- **Currency**

  - Get a list of currencies
  - Get exchange rates for currencies

- **Profiles**

  - Get random steam profile
  - Get a steam profile with high valued inventory

- **Items**

  - Get Steam items
  - Get information about Steam items
  - Find Steam items
  - Get details of a specific Steam item
  - Get item history

- **Inventory**

  - Get Steam inventory
  - Get Steam inventory tracked by day

- **Profile**
  - Get Steam IDs
  - Get Steam profiles
  - Get Steam friend lists

## Examples

For more examples check the [examples directory](https://github.com/oguzhantasimaz/steam-web-api-go/tree/main/examples).

## Contributing

Contributions to this project are welcome! If you encounter a bug or have a feature request, feel free to open an issue. Pull requests with improvements or new features are also appreciated.

## License

This API wrapper is licensed under the [MIT License](LICENSE).
