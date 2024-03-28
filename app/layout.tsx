import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { AuthSessionProvider } from "@/components/ClientSessionProvider";

const madimiOne = localFont({
  src: [
    { path: "../public/fonts/madimi_one/MadimiOne-Regular.ttf", weight: "500" },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Webventure",
    default: "Webventure",
  },
  description: "Your companion in learning web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={madimiOne.className}>
        <AuthSessionProvider>
          <Navbar />
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
