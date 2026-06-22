import type { Locale, SiteContent, SiteTexts, ProductContent } from "./types";
import { demoMedia, howItWorksMedia, scenarioMedia } from "./media";
import { en } from "./texts/en";
import { de } from "./texts/de";
import { fr } from "./texts/fr";
import { es } from "./texts/es";
import { pl } from "./texts/pl";
import { it } from "./texts/it";
import { bg } from "./texts/bg";
import { sk } from "./texts/sk";

const textsByLocale: Record<Locale, SiteTexts> = { en, de, fr, es, pl, it, bg, sk };

export function composeContent(locale: Locale): SiteContent {
  const texts = textsByLocale[locale] ?? textsByLocale.en;
  const { product: p, ...rest } = texts;

  const product: ProductContent = {
    ...p,
    howItWorks: {
      ...p.howItWorks,
      steps: p.howItWorks.steps.map((step, i) => ({
        ...step,
        ...howItWorksMedia[i],
      })),
    },
    scenarios: {
      ...p.scenarios,
      items: p.scenarios.items.map((item, i) => ({
        ...item,
        ...scenarioMedia[i],
      })),
    },
    demos: {
      ...p.demos,
      items: p.demos.items.map((item, i) => ({
        ...item,
        ...demoMedia[i],
      })),
    },
  };

  return {
    locale,
    ...rest,
    product,
  };
}

export function getContent(locale: string): SiteContent {
  const key = locale in textsByLocale ? (locale as Locale) : "en";
  return composeContent(key);
}

export {
  type Locale,
  type SiteContent,
  type SiteTexts,
  type CompatStepId,
  type CompatResult,
  type DemoClip,
} from "./types";
