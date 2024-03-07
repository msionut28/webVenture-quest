import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar"

const roboto = Roboto({ subsets: ["latin"], weight: '500' });

export const metadata: Metadata = {
  title: "Webventure",
  description: "Your companion in learning web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
