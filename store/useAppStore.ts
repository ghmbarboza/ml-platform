import { create } from "zustand";

interface MLUser {
  id: string;
  nickname: string;
  email?: string;
  site_id: string;
}

interface AppStore {
  user: MLUser | null;
  accessToken: string | null;
  setUser: (user: MLUser) => void;
  setAccessToken: (token: string) => void;
  logout: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  accessToken: typeof window !== "undefined" ? localStorage.getItem("ml_access_token") : null,
  setUser: (user) => {
    localStorage.setItem("ml_user", JSON.stringify(user));
    set({ user });
  },
  setAccessToken: (token) => {
    localStorage.setItem("ml_access_token", token);
    set({ accessToken: token });
  },
  logout: () => {
    localStorage.removeItem("ml_access_token");
    localStorage.removeItem("ml_user");
    set({ user: null, accessToken: null });
  },
}));
