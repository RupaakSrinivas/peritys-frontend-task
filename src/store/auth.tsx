import { create } from "zustand";

export interface user {
    username: string;
    token: string;
}

export interface authStore {
    username: string;
    token: string;
    isLoggedIn: boolean;
    login: (props: user) => void;
    logout: () => void;
    initializeFromLocalStorage: () => void;
}

export const useAuthStore = create<authStore>((set) => ({
    username: "",
    token: "",
    isLoggedIn: false,
    login: (props: user) => {
        localStorage.setItem("user", JSON.stringify(props));
        set({ isLoggedIn: true });
    },
    logout: () => {
        localStorage.removeItem("user");
        set({ isLoggedIn: false });
    },
    initializeFromLocalStorage: () => {
        const user = localStorage.getItem("user");
        if (user) {
            set({ isLoggedIn: true });
        }
    },
}));
