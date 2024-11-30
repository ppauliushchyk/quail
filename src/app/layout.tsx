import type { Metadata } from "next";
import Script from "next/script";
import React from "react";

import "@/styles/index.scss";

export const metadata: Metadata = {
  description: "",
  title: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-bs-theme="light" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>

      <body>
        {children}

        <Script src="/scripts/popper.min.js" />
        <Script src="/scripts/bootstrap.min.js" />
      </body>
    </html>
  );
}
