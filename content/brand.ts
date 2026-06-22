/**
 * Static brand configuration (non-translatable).
 * Translatable strings live in content/texts/{locale}.ts
 */
export const brand = {
  company: "AERIX",
  companyFull: "AERIX Industrial",
  descriptor: "industrial air tools",
  product: "Turbo Cleaner",
  year: new Date().getFullYear(),
} as const;

export const links = {
  site: process.env.NEXT_PUBLIC_SITE_URL ?? "https://turbo-cleaner.example",
} as const;
