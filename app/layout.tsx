import type { Metadata } from "next";
import { Anton, Nunito } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  title: "A Thousand Women | Women's Health & Empowerment in Africa",
  description:
    "A Thousand Women empowers women and girls across Africa through women's health education, menstrual equity, advocacy and community-led solutions.",
  keywords: [
    "women's health education in developing countries",
    "women's health in Africa",
    "menstrual health education",
    "menstrual equity in Africa",
    "period poverty in Africa",
    "women and girls empowerment Africa",
  ],
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

        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-59R2Y6Q8VG"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-59R2Y6Q8VG');
          `}
        </Script>
      </body>
    </html>
  );
}