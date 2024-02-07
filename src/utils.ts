import axios, { AxiosInstance } from "axios";
import { ApiError } from "./error";

const client: AxiosInstance = axios.create({
  baseURL: "https://www.steamwebapi.com/steam/api/trade",
  params: {},
});

client.interceptors.response.use(
  null,
  (error: any) => {
    const message = error.response?.data?.error?.[0] ?? error.message;
    const status =
      error.response?.data?.status ?? error.response?.status ?? 500;

    throw new ApiError({ message, status });
  },
  { synchronous: true }
);

type Params = Record<string, any>;
type MergeKeys = string[] | null;

const mergeParams = (
  params: Params,
  defaultParams: Params,
  mergeKeys: MergeKeys
) => {
  const obj: Params = {};

  mergeKeys?.forEach((key) => {
    obj[key] = params?.[key] ?? defaultParams?.[key];
  });

  return obj;
};

export { client, mergeParams };
