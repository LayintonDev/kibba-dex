import type { Metadata } from "next";
import {Poppins, Rubik, Manrope} from "next/font/google"
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import ExchangeSection from "@/components/ExchangeSection";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins" ,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: [ "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Kibba",
  description: "A Cryptp Dex Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} relative  antialiased`}
      >
        <Header/>
        <ExchangeSection/>
        {children}
      </body>
    </html>
  );
}
