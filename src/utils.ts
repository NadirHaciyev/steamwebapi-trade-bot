import axios, { AxiosInstance } from "axios";
import { AxiosError } from "./core/error-handler";

const client: AxiosInstance = axios.create({
  baseURL: "https://www.steamwebapi.com",
  params: {},
});

client.interceptors.response.use(
  null,
  (error) => {
    const message = error.response?.data?.error?.[0] ?? error.message;
    const status =
      error.response?.data?.status ?? error.response?.status ?? 500;

    throw new AxiosError({ message, status });
  },
  { synchronous: true }
);

export { client };
