"use client";

import { ToastContainer } from "react-toastify";
import "./globals.css";
import { CookiesProvider } from "react-cookie";
import "react-toastify/ReactToastify.css";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const domainUrl = process.env.NEXT_PUBLIC_COOKIES_DOMAIN;

  return (
    <html lang="en">
      <body>
        <CookiesProvider
          defaultSetOptions={{
            path: "/",
            domain: domainUrl,
          }}
        >
          <Suspense>
            <ToastContainer position="top-center" />
            {children}
          </Suspense>
        </CookiesProvider>
      </body>
    </html>
  );
}
