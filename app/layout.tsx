import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Constantinople Chronicles",
  description:
    "Visualisasi data editorial tentang kejatuhan Konstantinopel pada 29 Mei 1453 — akhir dari sebuah kekaisaran, awal dari dunia modern.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Kejatuhan Konstantinopel 1453",
    description:
      "Visualisasi data editorial tentang kejatuhan Konstantinopel pada 29 Mei 1453.",
    images: ["/opengraph.jpg"],
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
