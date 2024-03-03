import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.API_BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
