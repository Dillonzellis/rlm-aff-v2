import { Footer } from "@/components/containers/layout/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Baskervville, Montserrat } from "next/font/google";
import { Header } from "@/components/containers/layout/Header";

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
        className={`${basker.variable} ${mont.variable} bg-gray-50 font-sans font-light text-gray-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
