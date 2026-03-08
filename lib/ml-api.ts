import axios from "axios";

export const mlApi = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

mlApi.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("ml_access_token") : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export function setToken(token: string) {
  localStorage.setItem("ml_access_token", token);
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("ml_access_token");
}

export function clearToken() {
  localStorage.removeItem("ml_access_token");
  localStorage.removeItem("ml_user");
}
