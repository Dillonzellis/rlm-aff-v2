import { Footer } from "@/components/sections/layout/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Baskervville, Montserrat } from "next/font/google";

const basker = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-basker",
});
const mont = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "RLM Affairs",
  description: "Event Space and More",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${basker.variable} ${mont.variable} bg-zinc-50 font-sans font-light text-zinc-800`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
