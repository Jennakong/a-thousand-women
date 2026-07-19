import type { Metadata } from "next";
import { Anton, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "A Thousand Women",
  description:
    "Empowering women and girls through education, empowerment, and advocacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${nunito.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}