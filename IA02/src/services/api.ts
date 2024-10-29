import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_UNSPLASH_ENDPOINT || "http://localhost:3000";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || "";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export default api;
