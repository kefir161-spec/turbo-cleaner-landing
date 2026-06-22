import type { SiteTexts } from "../types";

export const en: SiteTexts = {
  metadata: {
    title: "Turbo Cleaner — air filter cleaning system for machinery",
    description:
      "Turbo Cleaner — controlled blow-cleaning system for cylindrical air filters on agricultural, truck, quarry and road construction equipment.",
    keywords: [
      "Turbo Cleaner",
      "air filter blow cleaning",
      "tractor filter cleaning",
      "cylindrical air filter",
      "heavy equipment filter maintenance",
    ],
    ogTitle: "Turbo Cleaner — controlled air filter blow cleaning",
    twitterTitle: "Turbo Cleaner — air filter cleaning system for machinery",
  },
  brand: {
    contactForm: {
      triggerLabel: "Contact us",
      title: "Contact us",
      description:
        "Leave your details — we will reply about availability, pricing and compatibility with your equipment.",
      nameLabel: "Name",
      namePlaceholder: "How should we address you",
      phoneLabel: "Phone",
      phonePlaceholder: "+44 (___) ___ ____",
      messageLabel: "Message",
      messagePlaceholder: "Question or comment",
      submitLabel: "Send",
    },
  },
  ui: {
    scrollDown: "Scroll down",
    heroAriaLabel: "Turbo Cleaner — air filter blow-cleaning system",
    logoAriaLabel: "AERIX — back to top",
    mainNavAriaLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileNavTitle: "Page sections",
    mobileNavAriaLabel: "Mobile navigation",
    footerNavAriaLabel: "Footer navigation",
    footerTagline:
      "— controlled blow-cleaning system for cylindrical air filters on equipment operating in dusty conditions.",
    footerCopyright: "— product name.",
    closeForm: "Close form",
    closeVideo: "Close video",
    playBgVideo: "Play background video",
    pauseBgVideo: "Pause background video",
    watchVideo: "Watch",
    compatibilityReset: "Reset",
    compatibilityResult: "Result",
    compatibilityPlaceholder:
      "Answer four questions — we will show a preliminary compatibility estimate.",
    compatibilityAnswered: "Answered: {answered} of {total}.",
    sectionProblem: "01 / Problem",
    sectionHowItWorks: "02 / Principle",
    sectionSpecs: "03 / Specs",
    sectionCompatibility: "04 / Compatibility",
    sectionScenarios: "05 / Applications",
    sectionKit: "06 / Kit",
    sectionComparison: "07 / Comparison",
    sectionDemos: "08 / Video",
    sectionFaq: "09 / FAQ",
    approachA: "Approach A",
    approachB: "Approach B",
    howItWorksVideo: "Video",
    problemImageAlt:
      "Cylindrical air filters and Turbo Cleaner in a dusty environment",
    problemImageCaption: "Dusty environment / maintenance",
    kitAssembled: "Assembled unit",
    kitAssemblyTime: "≈ 1 min assembly",
    kitMainAlt:
      "Turbo Cleaner assembled: pneumatic gun, extension rod, cone restrictor and rotor",
    kitPartsAlt: "Interchangeable rotors, cone restrictor, pneumatic gun and extension rod",
    kitBoxAlt: "Turbo Cleaner packaging",
    finalOfferAlt:
      "Complete Turbo Cleaner kit: rotors, cone restrictor, pneumatic gun, extension rod and packaging",
    languageLabel: "Language",
  },
  product: {
    navLinks: [
      { href: "#how", label: "How it works" },
      { href: "#compatibility", label: "Compatibility" },
      { href: "#kit", label: "Kit" },
      { href: "#faq", label: "FAQ" },
    ],
    hero: {
      eyebrow: "Air filter blow-cleaning system",
      titleLead: "Dust stays",
      titleAccent: "outside",
      leadBrand: "Turbo Cleaner",
      lead:
        "a tool for controlled blow-cleaning of cylindrical air filters on engines of equipment that constantly works in dust. The rotor is matched to the filter's inner diameter and distributes compressed air across the entire inner surface.",
      primaryCta: "Contact us",
      secondaryCta: "See how it works",
    },
    problem: {
      eyebrow: "Operating conditions",
      title: "The filter takes on all the dust of the working day",
      paragraphs: [
        "In the field, on construction sites and in quarries, the air filter clogs faster than you would like. It must be serviced regularly — sometimes several times per shift.",
        "Blow-cleaning with a regular tube works, but the result depends on how the operator directs the jet: at what angle, for how long and along which path. From one time to the next — it varies.",
      ],
      points: [
        {
          title: "High dust levels",
          text: "Harvesting, dirt roads and dusty yards continuously load the filter.",
        },
        {
          title: "Regular maintenance",
          text: "Clean intake air is needed constantly, not once a season.",
        },
        {
          title: "Skill dependency",
          text: "Manual blow-cleaning gives different results with different operators and on different shifts.",
        },
        {
          title: "Downtime at the wrong time",
          text: "During the season, every equipment stop is especially unwelcome.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Compressed air — across the entire inner surface of the filter",
      intro:
        "Three steps, a repeatable process. The operator follows the instructions and watches for when dust stops exiting the filter.",
      steps: [
        {
          title: "Connect to compressor",
          text: "The Turbo Cleaner pneumatic gun connects to a compressed air source via a standard quick-release coupling.",
          callout: "Source: receiver from 100 L, 8 bar",
          alt: "Turbo Cleaner pneumatic gun with quick-release fitting for compressor connection",
        },
        {
          title: "Rotor — inside the filter",
          text: "The rotor is matched to the filter's inner diameter and inserted into the cylindrical filter element. The cone restrictor «Pyramid» covers the inlet and keeps dust out of the clean cavity.",
          callout: "Rotor for Ø 80–250 mm",
          alt: "Diagram: rotor inside cylindrical filter, cone restrictor and flow direction",
        },
        {
          title: "Blow-cleaning and control",
          text: "The airflow spins the rotor and the jet blows dust out of the pleats. A linear motion covers the entire surface — until dust exit stops, approximately three minutes.",
          callout: "≈ 3 minutes per element",
          alt: "Operator blow-cleaning a cylindrical filter, dust exiting the element",
        },
      ],
    },
    specs: {
      eyebrow: "Technical data",
      title: "Parameters, not marketing adjectives",
      items: [
        {
          value: "80–250",
          unit: "mm",
          label: "Filter inner diameter",
          note: "Approximate range of compatible cylindrical elements.",
        },
        {
          value: "4",
          unit: "pcs",
          label: "Interchangeable rotors",
          note: "Matched to different filter inner diameters.",
        },
        {
          value: "from 100",
          unit: "L",
          label: "Receiver volume",
          note: "Recommended volume to maintain flow without pressure drops.",
        },
        {
          value: "8",
          unit: "bar",
          label: "Compressor pressure",
          note: "Recommended pressure that can be maintained steadily.",
        },
        {
          value: "up to 4",
          unit: "bar",
          label: "Rotor jet at 8 bar inlet",
          note: "At 10 bar inlet — up to 5 bar at rotor outlet.",
        },
        {
          value: "≈ 3",
          unit: "min",
          label: "Blow-cleaning one element",
          note: "Guideline. Exact time — until visible dust exit stops.",
        },
        {
          value: "≈ 1",
          unit: "min",
          label: "Device assembly",
          note: "Stated preparation time before use.",
        },
        {
          value: "1",
          unit: "year",
          label: "Warranty",
          note: "Stated manufacturer warranty.",
        },
      ],
    },
    compatibility: {
      eyebrow: "Compatibility check",
      title: "Will Turbo Cleaner fit your equipment",
      intro:
        "A short check against basic parameters. Nothing is sent — the calculation runs in your browser. This is a preliminary guide, not a replacement for the filter manufacturer's instructions.",
      steps: [
        {
          id: "machine",
          question: "Equipment type",
          hint: "Which machine are you selecting filter cleaning for",
          options: [
            { id: "agro", label: "Agricultural", tone: "ok" },
            { id: "truck", label: "Truck / commercial", tone: "ok" },
            { id: "quarry", label: "Quarry / mining", tone: "ok" },
            { id: "road", label: "Road construction", tone: "ok" },
            { id: "other", label: "Other", tone: "unknown" },
          ],
        },
        {
          id: "filter",
          question: "Filter type",
          hint: "Turbo Cleaner is designed for dry cylindrical elements",
          options: [
            { id: "cyl", label: "Cylindrical dry air filter", tone: "ok" },
            { id: "other", label: "Other or unknown type", tone: "stop" },
          ],
        },
        {
          id: "diameter",
          question: "Filter inner diameter",
          hint: "Measured at the inner seating surface of the element",
          options: [
            { id: "in", label: "From 80 to 250 mm", tone: "ok" },
            { id: "less", label: "Less than 80 mm", tone: "stop" },
            { id: "more", label: "More than 250 mm", tone: "stop" },
            { id: "unknown", label: "Unknown", tone: "warn" },
          ],
        },
        {
          id: "air",
          question: "Compressed air source",
          hint: "Compressor characteristics affect flow stability",
          options: [
            { id: "ok", label: "Receiver from 100 L and steady 8 bar", tone: "ok" },
            { id: "near", label: "On-board compressor with similar parameters", tone: "warn" },
            { id: "unknown", label: "Parameters unknown", tone: "warn" },
            { id: "low", label: "Below recommended parameters", tone: "stop" },
          ],
        },
      ],
    },
    compatResults: {
      possible: {
        tone: "possible",
        title: "Basic parameters suggest compatibility is possible",
        text: "Parameters fall within the stated range. Before blow-cleaning, check the filter and equipment operating manuals.",
      },
      clarify: {
        tone: "clarify",
        title: "Parameters need clarification",
        text: "Clarify the filter inner diameter and compressor specifications — not enough data for a preliminary assessment.",
      },
      out: {
        tone: "out",
        title: "Parameters exceed the stated range",
        text: "Based on the data provided, the filter or air source is outside the range Turbo Cleaner is designed for.",
      },
      check: {
        tone: "check",
        title: "Check whether blow-cleaning is permitted",
        text: "Check in the filter and equipment manufacturer's manual whether blow-cleaning and reuse of the element is allowed.",
      },
    },
    scenarios: {
      eyebrow: "Where it is used",
      title: "Equipment that cannot afford downtime",
      items: [
        {
          title: "Agriculture",
          alt: "Turbo Cleaner and cylindrical air filters in a dusty environment",
          lines: ["Combines and tractors during harvest", "Filter service right in the field"],
        },
        {
          title: "Truck fleet",
          alt: "Operator blow-cleaning a cylindrical filter",
          lines: ["Trucks on dirt roads", "Loaders and warehouse equipment"],
        },
        {
          title: "Road construction",
          alt: "Full air filter cleaning on a construction site",
          lines: ["Road construction equipment", "Working in constant dust"],
        },
        {
          title: "Quarries and dusty yards",
          alt: "Filter cleaning in field conditions with dust exiting",
          lines: ["Quarry equipment", "Dusty yards and open pits"],
        },
      ],
    },
    kit: {
      eyebrow: "What's in the kit",
      title: "Assembles in about a minute",
      items: [
        {
          title: "Interchangeable rotors",
          qty: "4 pcs",
          desc: "For different inner diameters of cylindrical filters.",
        },
        {
          title: "Cone restrictor «Pyramid»",
          desc: "Covers the inlet and keeps dust out of the clean filter cavity.",
        },
        {
          title: "Pneumatic gun",
          desc: "Delivers compressed air, connects to a compressor.",
        },
        {
          title: "Extension rod",
          desc: "Connects the gun and working head, sets the reach length.",
        },
        {
          title: "Manual and packaging",
          desc: "Assembly and operation guide, transport packaging.",
        },
      ],
      note: "Photos show the actual kit contents. Composition and appearance may vary by manufacturer.",
    },
    comparison: {
      eyebrow: "Process comparison",
      title: "Regular tube and Turbo Cleaner",
      note: "The work process is compared, not cleaning effectiveness.",
      manual: {
        title: "Regular blow-cleaning tube",
        points: [
          "Operator manually directs a localised jet",
          "Result depends on trajectory and processing time",
          "Filter surface must be covered sequentially",
        ],
      },
      turbo: {
        title: "Turbo Cleaner",
        points: [
          "Rotor matched to filter inner diameter",
          "Work process runs inside the cylindrical element",
          "Jet pressure limited by design within stated parameters",
          "Completion guide — visible dust exit stops and instructions",
        ],
      },
    },
    demos: {
      eyebrow: "Video",
      title: "What it looks like in operation",
      intro:
        "Real footage of the device at work. Captions describe what happens in the video; names and farms are not listed — we do not provide unverified attribution.",
      items: [
        { caption: "Dust exiting filter pleats during blow-cleaning" },
        { caption: "Cylindrical filter cleaning in field conditions" },
        { caption: "Cleaning process demonstration" },
        { caption: "Filter blow-cleaning with Turbo Cleaner rotor" },
      ],
    },
    faq: {
      eyebrow: "Questions & answers",
      title: "The essentials",
      items: [
        {
          q: "Which filters is Turbo Cleaner designed for?",
          a: "For dry cylindrical air filters on engines of equipment operating in dusty conditions. The device is not intended for cabin, foam, oil filters, fluid systems or turbochargers.",
        },
        {
          q: "How do I choose the right rotor?",
          a: "The rotor is matched to the filter's inner diameter. The kit includes four interchangeable rotors for a range of approximately 80 to 250 mm. Measure the element's inner diameter and select the matching rotor per the manual.",
        },
        {
          q: "What compressor is required?",
          a: "A compressor with a receiver from 100 litres, capable of maintaining 8 bar over time, is recommended. Flow evenness depends on pressure stability.",
        },
        {
          q: "How long does blow-cleaning take?",
          a: "Approximately three minutes per element. Exact time is determined in practice — until visible dust exit stops.",
        },
        {
          q: "How do I know cleaning is complete?",
          a: "The main guide is when noticeable dust stops exiting the filter. Also check the recommendations in the manual.",
        },
        {
          q: "What pressure does the rotor create?",
          a: "Jet pressure at the rotor outlet is limited by design: at 8 bar inlet — no more than 4 bar, at 10 bar — no more than 5 bar.",
        },
        {
          q: "Does the device require maintenance?",
          a: "No complex technical maintenance is stated. The device assembles in about a minute and requires no special skills.",
        },
        {
          q: "Can any filter be blow-cleaned?",
          a: "No. Whether blow-cleaning and reuse is permitted is determined by the filter and equipment manufacturer. Damaged, wet, oil-contaminated and non-cleanable elements must be replaced.",
        },
        {
          q: "Does cleaning replace buying a new filter?",
          a: "No. Blow-cleaning does not cancel scheduled filter replacement and does not make the element new. It is interim maintenance per manufacturer rules.",
        },
        {
          q: "What if the filter is damaged or oil-contaminated?",
          a: "Such an element should not be blow-cleaned — it must be replaced. Blow-cleaning is intended for dry dust contamination of intact elements.",
        },
        {
          q: "Will my equipment's on-board compressor work?",
          a: "If it is close to recommended parameters (receiver around 100 L, steady 8 bar) — probably yes. With lower parameters, flow may be weaker. Check your compressor specifications.",
        },
        {
          q: "What is included in the kit?",
          a: "Four interchangeable rotors for different diameters, cone restrictor «Pyramid», pneumatic gun, extension rod, manual and packaging.",
        },
      ],
    },
    finalOffer: {
      eyebrow: "Ready to try",
      title: "Clean filter. Working equipment.",
      summary: [
        "Four interchangeable rotors",
        "Filters Ø 80–250 mm",
        "Compressor from 100 L · 8 bar",
        "1 year warranty",
      ],
      primaryCta: "Contact us",
      secondaryCta: "Check compatibility",
    },
    disclaimer:
      "Whether blow-cleaning and reuse of the filter element is permitted is determined by the filter and equipment manufacturer. Check the operating manual before use. Damaged, wet, oil-contaminated and non-cleanable elements must be replaced.",
  },
};
