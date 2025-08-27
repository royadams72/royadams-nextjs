import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/base/_body.scss";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Roy Adams Portfolio",
  description: "Created by Roy Adams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
