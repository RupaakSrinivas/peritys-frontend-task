"use client";

import { useAuthStore } from "@/store/auth";

export default function Profile() {
    const { login, isLoggedIn, initializeFromLocalStorage } = useAuthStore();
    return (
        <div>
            <h1>Profile Page</h1>
        </div>
    )

}
