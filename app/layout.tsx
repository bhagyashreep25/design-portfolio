import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkleCursor from "@/components/SparkleCursor";

const recoleta = localFont({
  src: [
    { path: "../public/fonts/Recoleta-Light.ttf", weight: "300" },
    { path: "../public/fonts/Recoleta-Regular.ttf", weight: "400" },
    { path: "../public/fonts/Recoleta-Medium.ttf", weight: "500" },
    { path: "../public/fonts/Recoleta-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/Recoleta-Bold.ttf", weight: "700" },
    { path: "../public/fonts/Recoleta-Black.ttf", weight: "900" },
  ],
  variable: "--font-recoleta",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bhagyashree Phadnis — Product Designer",
    template: "%s — Bhagyashree Phadnis",
  },
  description:
    "Portfolio of Bhagyashree Phadnis, an engineer turned product designer specializing in visually appealing, data-driven experiences.",
  metadataBase: new URL("https://www.bhagyashreephadnis.com"),
  openGraph: {
    title: "Bhagyashree Phadnis — Product Designer",
    description:
      "An engineer turned product designer specializing in visually appealing, data-driven experiences that enhance the lives of users.",
    url: "https://www.bhagyashreephadnis.com",
    siteName: "Bhagyashree Phadnis",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 1419,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhagyashree Phadnis — Product Designer",
    description:
      "An engineer turned product designer specializing in visually appealing, data-driven experiences that enhance the lives of users.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${recoleta.variable} ${manrope.variable} ${caveat.variable}`}>
      <head>
        {/* If JS never runs, AnimateIn's content would stay invisible forever
            since it relies on a client effect to reveal itself. noscript's
            contents are only parsed as real markup when scripting is off, so
            this style only ever takes effect in exactly that case. */}
        <noscript>
          <style>{`.js-animate { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-[#4c4c4c] focus:shadow-lg"
        >
          Skip to content
        </a>
        <SparkleCursor />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
