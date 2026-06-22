export type Locale = "en" | "de" | "fr" | "es" | "pl" | "it" | "bg" | "sk";

export type CompatStepId = "machine" | "filter" | "diameter" | "air";

export interface Spec {
  value: string;
  unit?: string;
  label: string;
  note: string;
}

export interface CompatStep {
  id: CompatStepId;
  question: string;
  hint: string;
  options: { id: string; label: string; tone: "ok" | "warn" | "stop" | "unknown" }[];
}

export interface CompatResult {
  tone: "possible" | "clarify" | "out" | "check";
  title: string;
  text: string;
}

export interface Scenario {
  key: string;
  title: string;
  image: string;
  alt: string;
  lines: [string, string];
  imageClass?: string;
  overlayClass?: string;
}

export interface KitItem {
  title: string;
  desc: string;
  qty?: string;
}

export interface DemoClip {
  id: string;
  src: string;
  poster: string;
  caption: string;
  duration: string;
  orientation: "landscape" | "portrait";
}

export interface SiteTexts {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    twitterTitle: string;
  };
  brand: {
    contactForm: {
      triggerLabel: string;
      title: string;
      description: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
    };
  };
  ui: {
    scrollDown: string;
    heroAriaLabel: string;
    logoAriaLabel: string;
    mainNavAriaLabel: string;
    openMenu: string;
    closeMenu: string;
    mobileNavTitle: string;
    mobileNavAriaLabel: string;
    footerNavAriaLabel: string;
    footerTagline: string;
    footerCopyright: string;
    closeForm: string;
    closeVideo: string;
    playBgVideo: string;
    pauseBgVideo: string;
    watchVideo: string;
    compatibilityReset: string;
    compatibilityResult: string;
    compatibilityPlaceholder: string;
    compatibilityAnswered: string;
    sectionProblem: string;
    sectionHowItWorks: string;
    sectionSpecs: string;
    sectionCompatibility: string;
    sectionScenarios: string;
    sectionKit: string;
    sectionComparison: string;
    sectionDemos: string;
    sectionFaq: string;
    approachA: string;
    approachB: string;
    howItWorksVideo: string;
    problemImageAlt: string;
    problemImageCaption: string;
    kitAssembled: string;
    kitAssemblyTime: string;
    kitMainAlt: string;
    kitPartsAlt: string;
    kitBoxAlt: string;
    finalOfferAlt: string;
    languageLabel: string;
  };
  product: ProductTexts;
}

export interface ProductTexts {
  navLinks: { href: string; label: string }[];
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    leadBrand: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    points: { title: string; text: string }[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { title: string; text: string; callout: string; alt: string }[];
  };
  specs: {
    eyebrow: string;
    title: string;
    items: Spec[];
  };
  compatibility: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: CompatStep[];
  };
  compatResults: Record<CompatResult["tone"], CompatResult>;
  scenarios: {
    eyebrow: string;
    title: string;
    items: { title: string; alt: string; lines: [string, string] }[];
  };
  kit: {
    eyebrow: string;
    title: string;
    items: KitItem[];
    note: string;
  };
  comparison: {
    eyebrow: string;
    title: string;
    note: string;
    manual: { title: string; points: string[] };
    turbo: { title: string; points: string[] };
  };
  demos: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { caption: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  finalOffer: {
    eyebrow: string;
    title: string;
    summary: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  disclaimer: string;
}

export interface ProductContent extends Omit<ProductTexts, "howItWorks" | "scenarios" | "demos"> {
  howItWorks: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: {
      n: string;
      title: string;
      text: string;
      callout: string;
      alt: string;
      image: string;
      imageClass: string;
    }[];
  };
  scenarios: {
    eyebrow: string;
    title: string;
    items: Scenario[];
  };
  demos: {
    eyebrow: string;
    title: string;
    intro: string;
    items: DemoClip[];
  };
}

export interface SiteContent extends Omit<SiteTexts, "product"> {
  locale: Locale;
  product: ProductContent;
}
