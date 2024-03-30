"use client";

import { Inter } from "next/font/google";
import "../styles/globals.css";
import { useAuthStore } from "@/store/auth";
import { useEffect } from "react";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Suspense } from "react";
import { useCartStore } from "@/store/cart";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import LoadingScreen from "@/components/loadingScreen";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { login, isLoggedIn, initializeFromLocalStorage } = useAuthStore();
  const { initializeCartFromLocalStorage } = useCartStore();
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
    initializeCartFromLocalStorage();
  }, [initializeFromLocalStorage, initializeCartFromLocalStorage]);

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          {LoadingScreen()}
          <Header />
          <Navbar />
          <Suspense>{children}</Suspense>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
