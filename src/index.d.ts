export interface DefaultParams {
  steamloginsecure?: string;
  partnersteamid?: string;
  tradeofferid?: string;
  steamcommunityapikey?: string;
  assetid?: string;
  partneritemassetids?: string;
  myitemsassetids?: string;
  tradelink?: string;
  message?: string;
  game?: string;
}

export type CreateParamsType = {
  steamloginsecure?: boolean;
  partneritemassetids?: string;
  myitemsassetids?: string;
  tradelink?: string;
  partnersteamid?: string;
  message?: string;
  game?: string;
};

export type StatusParamsType = {
  steamcommunityapikey?: string;
  partnersteamid?: string;
  assetid?: string;
};

export type CancelParamsType = {
  steamloginsecure?: string;
  tradeofferid?: string;
};

export type DeclineParamsType = {
  steamloginsecure?: string;
  tradeofferid?: string;
};

export type AcceptParamsType = {
  steamloginsecure?: string;
  tradeofferid?: string;
  partnersteamid?: string;
};
