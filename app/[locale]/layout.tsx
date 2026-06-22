import type { Metadata, Viewport } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getContent } from "@/content";
import { ContentProvider } from "@/lib/content-context";
import { brand, links } from "@/content/brand";
import { media } from "@/lib/assets";
import "../globals.css";

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

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { metadata: m } = getContent(locale);

  return {
    metadataBase: new URL(links.site),
    title: {
      default: m.title,
      template: `%s — ${brand.product}`,
    },
    description: m.description,
    applicationName: brand.product,
    keywords: m.keywords,
    authors: [{ name: brand.companyFull }],
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}`]),
      ),
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_GB" : `${locale}_${locale.toUpperCase()}`,
      siteName: brand.companyFull,
      title: m.ogTitle,
      description: m.description,
      images: [{ url: media.og, width: 1200, height: 630, alt: brand.product }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.twitterTitle,
      description: m.description,
      images: [media.og],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  colorScheme: "dark",
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <html lang={locale} className={`${manrope.variable} ${plexMono.variable}`}>
      <body>
        <ContentProvider content={content}>{children}</ContentProvider>
      </body>
    </html>
  );
}
