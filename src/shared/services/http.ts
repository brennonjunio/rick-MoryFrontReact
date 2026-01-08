import axios from "axios";

export const http = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

http.interceptors.request.use((config) => {
  return config;
});
