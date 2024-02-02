import axios, { AxiosInstance } from "axios";

export const client: AxiosInstance = axios.create({
  baseURL: "https://www.steamwebapi.com",
});
