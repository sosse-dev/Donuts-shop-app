import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Annie_Use_Your_Telescope } from "next/font/google";

const font1 = Annie_Use_Your_Telescope({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-font1",
});

export const metadata: Metadata = {
  title: "Donut Shop",
  description: "Donut, Donut and Donuts!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font1.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
