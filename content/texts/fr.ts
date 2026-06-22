import type { SiteTexts } from "../types";

export const fr: SiteTexts = {
  metadata: {
    title: "Turbo Cleaner — système de nettoyage de filtres à air pour engins",
    description:
      "Turbo Cleaner — système de nettoyage par soufflage contrôlé pour filtres à air cylindriques sur engins agricoles, poids lourds, carrières et travaux routiers.",
    keywords: [
      "Turbo Cleaner",
      "nettoyage par soufflage filtre à air",
      "nettoyage filtre tracteur",
      "filtre à air cylindrique",
      "entretien filtre engins lourds",
    ],
    ogTitle: "Turbo Cleaner — nettoyage par soufflage contrôlé de filtres à air",
    twitterTitle: "Turbo Cleaner — système de nettoyage de filtres à air pour engins",
  },
  brand: {
    contactForm: {
      triggerLabel: "Nous contacter",
      title: "Nous contacter",
      description:
        "Laissez vos coordonnées — nous vous répondrons sur la disponibilité, les tarifs et la compatibilité avec votre équipement.",
      nameLabel: "Nom",
      namePlaceholder: "Comment souhaitez-vous être appelé",
      phoneLabel: "Téléphone",
      phonePlaceholder: "+33 (___) ___ ____",
      messageLabel: "Message",
      messagePlaceholder: "Question ou commentaire",
      submitLabel: "Envoyer",
    },
  },
  ui: {
    scrollDown: "Défiler vers le bas",
    heroAriaLabel: "Turbo Cleaner — système de nettoyage par soufflage de filtres à air",
    logoAriaLabel: "AERIX — retour en haut",
    mainNavAriaLabel: "Navigation principale",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    mobileNavTitle: "Sections de la page",
    mobileNavAriaLabel: "Navigation mobile",
    footerNavAriaLabel: "Navigation du pied de page",
    footerTagline:
      "— système de nettoyage par soufflage contrôlé pour filtres à air cylindriques sur engins en conditions poussiéreuses.",
    footerCopyright: "— nom du produit.",
    closeForm: "Fermer le formulaire",
    closeVideo: "Fermer la vidéo",
    playBgVideo: "Lire la vidéo d'arrière-plan",
    pauseBgVideo: "Mettre en pause la vidéo d'arrière-plan",
    watchVideo: "Regarder",
    compatibilityReset: "Réinitialiser",
    compatibilityResult: "Résultat",
    compatibilityPlaceholder:
      "Répondez à quatre questions — nous afficherons une estimation préliminaire de compatibilité.",
    compatibilityAnswered: "Répondu : {answered} sur {total}.",
    sectionProblem: "01 / Problème",
    sectionHowItWorks: "02 / Principe",
    sectionSpecs: "03 / Données",
    sectionCompatibility: "04 / Compatibilité",
    sectionScenarios: "05 / Applications",
    sectionKit: "06 / Kit",
    sectionComparison: "07 / Comparaison",
    sectionDemos: "08 / Vidéo",
    sectionFaq: "09 / FAQ",
    approachA: "Approche A",
    approachB: "Approche B",
    howItWorksVideo: "Vidéo",
    problemImageAlt:
      "Filtres à air cylindriques et Turbo Cleaner en environnement poussiéreux",
    problemImageCaption: "Environnement poussiéreux / maintenance",
    kitAssembled: "Unité assemblée",
    kitAssemblyTime: "≈ 1 min d'assemblage",
    kitMainAlt:
      "Turbo Cleaner assemblé : pistolet pneumatique, tige d'extension, cône restrictif et rotor",
    kitPartsAlt: "Rotors interchangeables, cône restrictif, pistolet pneumatique et tige d'extension",
    kitBoxAlt: "Emballage Turbo Cleaner",
    finalOfferAlt:
      "Kit Turbo Cleaner complet : rotors, cône restrictif, pistolet pneumatique, tige d'extension et emballage",
    languageLabel: "Langue",
  },
  product: {
    navLinks: [
      { href: "#how", label: "Fonctionnement" },
      { href: "#compatibility", label: "Compatibilité" },
      { href: "#kit", label: "Kit" },
      { href: "#faq", label: "FAQ" },
    ],
    hero: {
      eyebrow: "Système de nettoyage par soufflage de filtres à air",
      titleLead: "La poussière reste",
      titleAccent: "dehors",
      leadBrand: "Turbo Cleaner",
      lead:
        "un outil de nettoyage par soufflage contrôlé des filtres à air cylindriques sur les moteurs d'engins travaillant en permanence dans la poussière. Le rotor est adapté au diamètre intérieur du filtre et répartit l'air comprimé sur toute la surface intérieure.",
      primaryCta: "Nous contacter",
      secondaryCta: "Voir le fonctionnement",
    },
    problem: {
      eyebrow: "Conditions d'exploitation",
      title: "Le filtre absorbe toute la poussière de la journée de travail",
      paragraphs: [
        "Sur le terrain, sur les chantiers et dans les carrières, le filtre à air s'encrasse plus vite qu'on ne le souhaiterait. Il doit être entretenu régulièrement — parfois plusieurs fois par poste.",
        "Le nettoyage par soufflage avec un tuyau classique fonctionne, mais le résultat dépend de la façon dont l'opérateur dirige le jet : à quel angle, pendant combien de temps et selon quelle trajectoire. D'une fois à l'autre — cela varie.",
      ],
      points: [
        {
          title: "Fortes concentrations de poussière",
          text: "Récolte, pistes en terre et cours poussiéreuses chargent le filtre en continu.",
        },
        {
          title: "Entretien régulier",
          text: "Un air d'admission propre est nécessaire en permanence, pas une fois par saison.",
        },
        {
          title: "Dépendance à l'opérateur",
          text: "Le nettoyage manuel par soufflage donne des résultats différents selon l'opérateur et le poste.",
        },
        {
          title: "Arrêt au mauvais moment",
          text: "En saison, chaque immobilisation d'engin est particulièrement indésirable.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Fonctionnement",
      title: "Air comprimé — sur toute la surface intérieure du filtre",
      intro:
        "Trois étapes, un processus reproductible. L'opérateur suit les instructions et observe quand la poussière cesse de sortir du filtre.",
      steps: [
        {
          title: "Raccordement au compresseur",
          text: "Le pistolet pneumatique Turbo Cleaner se raccorde à une source d'air comprimé via un raccord rapide standard.",
          callout: "Source : réservoir à partir de 100 L, 8 bar",
          alt: "Pistolet pneumatique Turbo Cleaner avec raccord rapide pour connexion au compresseur",
        },
        {
          title: "Rotor — à l'intérieur du filtre",
          text: "Le rotor est adapté au diamètre intérieur du filtre et inséré dans l'élément filtrant cylindrique. Le cône restrictif «Pyramid» couvre l'entrée et empêche la poussière d'entrer dans la cavité propre.",
          callout: "Rotor pour Ø 80–250 mm",
          alt: "Schéma : rotor à l'intérieur du filtre cylindrique, cône restrictif et sens d'écoulement",
        },
        {
          title: "Nettoyage par soufflage et contrôle",
          text: "Le flux d'air fait tourner le rotor et le jet expulse la poussière des plis. Un mouvement linéaire couvre toute la surface — jusqu'à l'arrêt de la sortie de poussière, environ trois minutes.",
          callout: "≈ 3 min par élément",
          alt: "Opérateur nettoyant un filtre cylindrique par soufflage, poussière sortant de l'élément",
        },
      ],
    },
    specs: {
      eyebrow: "Données techniques",
      title: "Des paramètres, pas des adjectifs marketing",
      items: [
        {
          value: "80–250",
          unit: "mm",
          label: "Diamètre intérieur du filtre",
          note: "Plage approximative des éléments cylindriques compatibles.",
        },
        {
          value: "4",
          unit: "pcs",
          label: "Rotors interchangeables",
          note: "Adaptés aux différents diamètres intérieurs de filtre.",
        },
        {
          value: "from 100",
          unit: "L",
          label: "Volume du réservoir",
          note: "Volume recommandé pour maintenir le débit sans chute de pression.",
        },
        {
          value: "8",
          unit: "bar",
          label: "Pression du compresseur",
          note: "Pression recommandée pouvant être maintenue de façon stable.",
        },
        {
          value: "up to 4",
          unit: "bar",
          label: "Jet du rotor à 8 bar en entrée",
          note: "À 10 bar en entrée — jusqu'à 5 bar en sortie du rotor.",
        },
        {
          value: "≈ 3",
          unit: "min",
          label: "Nettoyage par soufflage d'un élément",
          note: "Indication. Durée exacte — jusqu'à l'arrêt visible de la sortie de poussière.",
        },
        {
          value: "≈ 1",
          unit: "min",
          label: "Assemblage de l'appareil",
          note: "Temps de préparation indiqué avant utilisation.",
        },
        {
          value: "1",
          unit: "year",
          label: "Garantie",
          note: "Garantie fabricant indiquée.",
        },
      ],
    },
    compatibility: {
      eyebrow: "Vérification de compatibilité",
      title: "Turbo Cleaner convient-il à votre équipement",
      intro:
        "Vérification rapide selon les paramètres de base. Rien n'est envoyé — le calcul s'effectue dans votre navigateur. Il s'agit d'un guide préliminaire, pas d'un substitut aux instructions du fabricant du filtre.",
      steps: [
        {
          id: "machine",
          question: "Type d'engin",
          hint: "Pour quelle machine sélectionnez-vous le nettoyage de filtre",
          options: [
            { id: "agro", label: "Agricole", tone: "ok" },
            { id: "truck", label: "Poids lourd / utilitaire", tone: "ok" },
            { id: "quarry", label: "Carrière / mines", tone: "ok" },
            { id: "road", label: "Travaux routiers", tone: "ok" },
            { id: "other", label: "Autre", tone: "unknown" },
          ],
        },
        {
          id: "filter",
          question: "Type de filtre",
          hint: "Turbo Cleaner est conçu pour les éléments cylindriques secs",
          options: [
            { id: "cyl", label: "Filtre à air cylindrique sec", tone: "ok" },
            { id: "other", label: "Autre type ou inconnu", tone: "stop" },
          ],
        },
        {
          id: "diameter",
          question: "Diamètre intérieur du filtre",
          hint: "Mesuré sur la surface d'appui intérieure de l'élément",
          options: [
            { id: "in", label: "De 80 à 250 mm", tone: "ok" },
            { id: "less", label: "Moins de 80 mm", tone: "stop" },
            { id: "more", label: "Plus de 250 mm", tone: "stop" },
            { id: "unknown", label: "Inconnu", tone: "warn" },
          ],
        },
        {
          id: "air",
          question: "Source d'air comprimé",
          hint: "Les caractéristiques du compresseur influencent la stabilité du débit",
          options: [
            { id: "ok", label: "Réservoir à partir de 100 L et 8 bar stables", tone: "ok" },
            { id: "near", label: "Compresseur embarqué avec paramètres similaires", tone: "warn" },
            { id: "unknown", label: "Paramètres inconnus", tone: "warn" },
            { id: "low", label: "En dessous des paramètres recommandés", tone: "stop" },
          ],
        },
      ],
    },
    compatResults: {
      possible: {
        tone: "possible",
        title: "Les paramètres de base suggèrent une compatibilité possible",
        text: "Les paramètres se situent dans la plage indiquée. Avant le nettoyage par soufflage, consultez les manuels d'utilisation du filtre et de l'équipement.",
      },
      clarify: {
        tone: "clarify",
        title: "Les paramètres nécessitent des précisions",
        text: "Précisez le diamètre intérieur du filtre et les spécifications du compresseur — données insuffisantes pour une évaluation préliminaire.",
      },
      out: {
        tone: "out",
        title: "Les paramètres dépassent la plage indiquée",
        text: "D'après les données fournies, le filtre ou la source d'air se situe en dehors de la plage pour laquelle Turbo Cleaner est conçu.",
      },
      check: {
        tone: "check",
        title: "Vérifiez si le nettoyage par soufflage est autorisé",
        text: "Consultez le manuel du fabricant du filtre et de l'équipement pour savoir si le nettoyage par soufflage et la réutilisation de l'élément sont autorisés.",
      },
    },
    scenarios: {
      eyebrow: "Domaines d'application",
      title: "Des engins qui ne peuvent pas se permettre l'immobilisation",
      items: [
        {
          title: "Agriculture",
          alt: "Turbo Cleaner et filtres à air cylindriques en environnement poussiéreux",
          lines: ["Moissonneuses et tracteurs pendant la récolte", "Entretien du filtre directement sur le terrain"],
        },
        {
          title: "Flotte de poids lourds",
          alt: "Opérateur nettoyant un filtre cylindrique par soufflage",
          lines: ["Poids lourds sur pistes en terre", "Chargeuses et engins d'entrepôt"],
        },
        {
          title: "Travaux routiers",
          alt: "Nettoyage complet du filtre à air sur un chantier",
          lines: ["Engins de travaux routiers", "Travail en poussière permanente"],
        },
        {
          title: "Carrières et cours poussiéreuses",
          alt: "Nettoyage de filtre sur le terrain avec sortie de poussière visible",
          lines: ["Engins de carrière", "Cours poussiéreuses et fosses à ciel ouvert"],
        },
      ],
    },
    kit: {
      eyebrow: "Contenu du kit",
      title: "Assemblage en environ une minute",
      items: [
        {
          title: "Rotors interchangeables",
          qty: "4 pcs",
          desc: "Pour différents diamètres intérieurs de filtres cylindriques.",
        },
        {
          title: "Cône restrictif «Pyramid»",
          desc: "Couvre l'entrée et empêche la poussière d'entrer dans la cavité propre du filtre.",
        },
        {
          title: "Pistolet pneumatique",
          desc: "Fournit l'air comprimé, se raccorde à un compresseur.",
        },
        {
          title: "Tige d'extension",
          desc: "Relie le pistolet et la tête de travail, définit la portée.",
        },
        {
          title: "Manuel et emballage",
          desc: "Guide d'assemblage et d'utilisation, emballage de transport.",
        },
      ],
      note: "Les photos montrent le contenu réel du kit. La composition et l'apparence peuvent varier selon le fabricant.",
    },
    comparison: {
      eyebrow: "Comparaison des processus",
      title: "Tuyau classique et Turbo Cleaner",
      note: "Le processus de travail est comparé, pas l'efficacité du nettoyage.",
      manual: {
        title: "Tuyau de nettoyage par soufflage classique",
        points: [
          "L'opérateur dirige manuellement un jet localisé",
          "Le résultat dépend de la trajectoire et du temps de traitement",
          "La surface du filtre doit être couverte séquentiellement",
        ],
      },
      turbo: {
        title: "Turbo Cleaner",
        points: [
          "Rotor adapté au diamètre intérieur du filtre",
          "Processus de travail à l'intérieur de l'élément cylindrique",
          "Pression du jet limitée par conception dans les paramètres indiqués",
          "Critère de fin — arrêt visible de la sortie de poussière et instructions",
        ],
      },
    },
    demos: {
      eyebrow: "Vidéo",
      title: "À quoi cela ressemble en fonctionnement",
      intro:
        "Images réelles de l'appareil en action. Les légendes décrivent ce qui se passe dans la vidéo ; les noms et exploitations ne sont pas mentionnés — nous ne fournissons pas d'attributions non vérifiées.",
      items: [
        { caption: "Poussière sortant des plis du filtre pendant le nettoyage par soufflage" },
        { caption: "Nettoyage de filtre cylindrique sur le terrain" },
        { caption: "Démonstration du processus de nettoyage" },
        { caption: "Nettoyage par soufflage du filtre avec rotor Turbo Cleaner" },
      ],
    },
    faq: {
      eyebrow: "Questions & réponses",
      title: "L'essentiel",
      items: [
        {
          q: "Pour quels filtres Turbo Cleaner est-il conçu ?",
          a: "Pour les filtres à air cylindriques secs sur les moteurs d'engins en conditions poussiéreuses. L'appareil n'est pas destiné aux filtres de cabine, mousse, huile, systèmes de fluides ou turbocompresseurs.",
        },
        {
          q: "Comment choisir le bon rotor ?",
          a: "Le rotor est adapté au diamètre intérieur du filtre. Le kit comprend quatre rotors interchangeables pour une plage d'environ 80 à 250 mm. Mesurez le diamètre intérieur de l'élément et sélectionnez le rotor correspondant selon le manuel.",
        },
        {
          q: "Quel compresseur est nécessaire ?",
          a: "Un compresseur avec réservoir à partir de 100 litres, capable de maintenir 8 bar dans la durée, est recommandé. La régularité du débit dépend de la stabilité de la pression.",
        },
        {
          q: "Combien de temps dure le nettoyage par soufflage ?",
          a: "Environ trois minutes par élément. La durée exacte se détermine en pratique — jusqu'à l'arrêt visible de la sortie de poussière.",
        },
        {
          q: "Comment savoir que le nettoyage est terminé ?",
          a: "Le principal indicateur est l'arrêt de la poussière notable sortant du filtre. Consultez également les recommandations du manuel.",
        },
        {
          q: "Quelle pression le rotor génère-t-il ?",
          a: "La pression du jet en sortie du rotor est limitée par conception : à 8 bar en entrée — pas plus de 4 bar, à 10 bar — pas plus de 5 bar.",
        },
        {
          q: "L'appareil nécessite-t-il un entretien ?",
          a: "Aucun entretien technique complexe n'est indiqué. L'appareil s'assemble en environ une minute et ne nécessite pas de compétences particulières.",
        },
        {
          q: "Tous les filtres peuvent-ils être nettoyés par soufflage ?",
          a: "Non. L'autorisation du nettoyage par soufflage et de la réutilisation est déterminée par le fabricant du filtre et de l'équipement. Les éléments endommagés, humides, contaminés par l'huile et non nettoyables doivent être remplacés.",
        },
        {
          q: "Le nettoyage remplace-t-il l'achat d'un nouveau filtre ?",
          a: "Non. Le nettoyage par soufflage ne remplace pas le remplacement programmé du filtre et ne rend pas l'élément neuf. Il s'agit d'un entretien intermédiaire selon les règles du fabricant.",
        },
        {
          q: "Que faire si le filtre est endommagé ou contaminé par l'huile ?",
          a: "Un tel élément ne doit pas être nettoyé par soufflage — il doit être remplacé. Le nettoyage par soufflage est destiné à la contamination sèche par la poussière d'éléments intacts.",
        },
        {
          q: "Le compresseur embarqué de mon engin fonctionnera-t-il ?",
          a: "S'il est proche des paramètres recommandés (réservoir d'environ 100 L, 8 bar stables) — probablement oui. Avec des paramètres inférieurs, le débit peut être plus faible. Vérifiez les spécifications de votre compresseur.",
        },
        {
          q: "Que contient le kit ?",
          a: "Quatre rotors interchangeables pour différents diamètres, cône restrictif «Pyramid», pistolet pneumatique, tige d'extension, manuel et emballage.",
        },
      ],
    },
    finalOffer: {
      eyebrow: "Prêt à essayer",
      title: "Filtre propre. Engin opérationnel.",
      summary: [
        "Quatre rotors interchangeables",
        "Filtres Ø 80–250 mm",
        "Compresseur à partir de 100 L · 8 bar",
        "1 an de garantie",
      ],
      primaryCta: "Nous contacter",
      secondaryCta: "Vérifier la compatibilité",
    },
    disclaimer:
      "L'autorisation du nettoyage par soufflage et de la réutilisation de l'élément filtrant est déterminée par le fabricant du filtre et de l'équipement. Consultez le manuel d'utilisation avant emploi. Les éléments endommagés, humides, contaminés par l'huile et non nettoyables doivent être remplacés.",
  },
};
