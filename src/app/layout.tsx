"use client";

import { Inter } from "next/font/google";
import "../styles/globals.css";
import { useAuthStore } from "@/store/auth";
import { useEffect } from "react";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { login, isLoggedIn, initializeFromLocalStorage } = useAuthStore();

  useEffect(() => {
    if (isLoggedIn) {
      return () => {
        null;
      };
    } else {
      initializeFromLocalStorage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, login]);

  useEffect(() => {
    initializeFromLocalStorage();
  }, [initializeFromLocalStorage]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
