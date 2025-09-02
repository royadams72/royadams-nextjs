import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import type { Metadata } from "next";
import "./_globals.scss";
import Header from "@/components/Header";
import Background from "@/components/Background";

export const metadata: Metadata = {
  title: "Roy Adams Portfolio",
  description: "Created by Roy Adams",
};
gsap.registerPlugin(ScrollTrigger, SplitText);
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
          <Background />
        </main>
      </body>
    </html>
  );
}
