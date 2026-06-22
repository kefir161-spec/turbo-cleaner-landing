import { defineRouting } from "next-intl/routing";

export const locales = ["en", "de", "fr", "es", "pl", "it", "bg", "sk"] as const;

export type AppLocale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
});

export const localeLabels: Record<AppLocale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  pl: "Polski",
  it: "Italiano",
  bg: "Български",
  sk: "Slovenčina",
};
