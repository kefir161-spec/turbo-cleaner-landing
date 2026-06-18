import type { Metadata, Viewport } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { brand, links } from "@/content/brand";
import { media } from "@/lib/assets";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description =
  "Turbo Cleaner — система продувки цилиндрических воздушных фильтров сельскохозяйственной, грузовой, карьерной и дорожно-строительной техники.";

export const metadata: Metadata = {
  metadataBase: new URL(links.site),
  title: {
    default: `${brand.product} — система очистки воздушных фильтров техники`,
    template: `%s — ${brand.product}`,
  },
  description,
  applicationName: brand.product,
  keywords: [
    "Turbo Cleaner",
    "продувка воздушного фильтра",
    "очистка фильтра трактора",
    "цилиндрический воздушный фильтр",
    "обслуживание фильтра спецтехники",
  ],
  authors: [{ name: brand.companyFull }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: brand.companyFull,
    title: `${brand.product} — контролируемая продувка воздушных фильтров`,
    description,
    images: [{ url: media.og, width: 1200, height: 630, alt: "Turbo Cleaner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.product} — система очистки воздушных фильтров`,
    description,
    images: [media.og],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
