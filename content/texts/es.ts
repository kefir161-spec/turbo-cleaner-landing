import type { SiteTexts } from "../types";

export const es: SiteTexts = {
  metadata: {
    title: "Turbo Cleaner — sistema de limpieza de filtros de aire para maquinaria",
    description:
      "Turbo Cleaner — sistema de limpieza por soplado controlado para filtros de aire cilíndricos en maquinaria agrícola, camiones, canteras y obra vial.",
    keywords: [
      "Turbo Cleaner",
      "limpieza por soplado filtro de aire",
      "limpieza filtro tractor",
      "filtro de aire cilíndrico",
      "mantenimiento filtro maquinaria pesada",
    ],
    ogTitle: "Turbo Cleaner — limpieza por soplado controlado de filtros de aire",
    twitterTitle: "Turbo Cleaner — sistema de limpieza de filtros de aire para maquinaria",
  },
  brand: {
    contactForm: {
      triggerLabel: "Contacto",
      title: "Contacto",
      description:
        "Deje sus datos — le responderemos sobre disponibilidad, precios y compatibilidad con su equipo.",
      nameLabel: "Nombre",
      namePlaceholder: "Cómo debemos dirigirnos a usted",
      phoneLabel: "Teléfono",
      phonePlaceholder: "+34 (___) ___ ____",
      messageLabel: "Mensaje",
      messagePlaceholder: "Pregunta o comentario",
      submitLabel: "Enviar",
    },
  },
  ui: {
    scrollDown: "Desplazarse hacia abajo",
    heroAriaLabel: "Turbo Cleaner — sistema de limpieza por soplado de filtros de aire",
    logoAriaLabel: "AERIX — volver arriba",
    mainNavAriaLabel: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mobileNavTitle: "Secciones de la página",
    mobileNavAriaLabel: "Navegación móvil",
    footerNavAriaLabel: "Navegación del pie de página",
    footerTagline:
      "— sistema de limpieza por soplado controlado para filtros de aire cilíndricos en equipos que operan en condiciones polvorientas.",
    footerCopyright: "— nombre del producto.",
    closeForm: "Cerrar formulario",
    closeVideo: "Cerrar vídeo",
    playBgVideo: "Reproducir vídeo de fondo",
    pauseBgVideo: "Pausar vídeo de fondo",
    watchVideo: "Ver",
    compatibilityReset: "Restablecer",
    compatibilityResult: "Resultado",
    compatibilityPlaceholder:
      "Responda cuatro preguntas — mostraremos una estimación preliminar de compatibilidad.",
    compatibilityAnswered: "Respondidas: {answered} de {total}.",
    sectionProblem: "01 / Problema",
    sectionHowItWorks: "02 / Principio",
    sectionSpecs: "03 / Datos",
    sectionCompatibility: "04 / Compatibilidad",
    sectionScenarios: "05 / Aplicaciones",
    sectionKit: "06 / Kit",
    sectionComparison: "07 / Comparación",
    sectionDemos: "08 / Vídeo",
    sectionFaq: "09 / FAQ",
    approachA: "Enfoque A",
    approachB: "Enfoque B",
    howItWorksVideo: "Vídeo",
    problemImageAlt:
      "Filtros de aire cilíndricos y Turbo Cleaner en entorno polvoriento",
    problemImageCaption: "Entorno polvoriento / mantenimiento",
    kitAssembled: "Unidad montada",
    kitAssemblyTime: "≈ 1 min de montaje",
    kitMainAlt:
      "Turbo Cleaner montado: pistola neumática, barra de extensión, cono restrictor y rotor",
    kitPartsAlt: "Rotores intercambiables, cono restrictor, pistola neumática y barra de extensión",
    kitBoxAlt: "Embalaje Turbo Cleaner",
    finalOfferAlt:
      "Kit completo Turbo Cleaner: rotores, cono restrictor, pistola neumática, barra de extensión y embalaje",
    languageLabel: "Idioma",
  },
  product: {
    navLinks: [
      { href: "#how", label: "Funcionamiento" },
      { href: "#compatibility", label: "Compatibilidad" },
      { href: "#kit", label: "Kit" },
      { href: "#faq", label: "FAQ" },
    ],
    hero: {
      eyebrow: "Sistema de limpieza por soplado de filtros de aire",
      titleLead: "El polvo se queda",
      titleAccent: "fuera",
      leadBrand: "Turbo Cleaner",
      lead:
        "una herramienta para la limpieza por soplado controlado de filtros de aire cilíndricos en motores de equipos que trabajan constantemente en polvo. El rotor se adapta al diámetro interior del filtro y distribuye el aire comprimido por toda la superficie interior.",
      primaryCta: "Contacto",
      secondaryCta: "Ver cómo funciona",
    },
    problem: {
      eyebrow: "Condiciones de operación",
      title: "El filtro absorbe todo el polvo de la jornada laboral",
      paragraphs: [
        "En el campo, en obras y en canteras, el filtro de aire se obstruye más rápido de lo deseado. Debe mantenerse con regularidad — a veces varias veces por turno.",
        "La limpieza por soplado con un tubo convencional funciona, pero el resultado depende de cómo el operario dirige el chorro: en qué ángulo, durante cuánto tiempo y por qué trayectoria. De una vez a otra — varía.",
      ],
      points: [
        {
          title: "Altos niveles de polvo",
          text: "Cosecha, caminos de tierra y patios polvorientos cargan el filtro de forma continua.",
        },
        {
          title: "Mantenimiento regular",
          text: "Se necesita aire de admisión limpio de forma constante, no una vez por temporada.",
        },
        {
          title: "Dependencia del operario",
          text: "La limpieza manual por soplado da resultados distintos según el operario y el turno.",
        },
        {
          title: "Parada en el momento inadecuado",
          text: "En temporada, cada parada del equipo es especialmente indeseable.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Funcionamiento",
      title: "Aire comprimido — por toda la superficie interior del filtro",
      intro:
        "Tres pasos, un proceso repetible. El operario sigue las instrucciones y observa cuándo deja de salir polvo del filtro.",
      steps: [
        {
          title: "Conexión al compresor",
          text: "La pistola neumática Turbo Cleaner se conecta a una fuente de aire comprimido mediante un acoplamiento rápido estándar.",
          callout: "Fuente: depósito desde 100 L, 8 bar",
          alt: "Pistola neumática Turbo Cleaner con acoplamiento rápido para conexión al compresor",
        },
        {
          title: "Rotor — dentro del filtro",
          text: "El rotor se adapta al diámetro interior del filtro y se inserta en el elemento filtrante cilíndrico. El cono restrictor «Pyramid» cubre la entrada y evita que el polvo entre en la cavidad limpia.",
          callout: "Rotor para Ø 80–250 mm",
          alt: "Diagrama: rotor dentro del filtro cilíndrico, cono restrictor y dirección del flujo",
        },
        {
          title: "Limpieza por soplado y control",
          text: "El flujo de aire hace girar el rotor y el chorro expulsa el polvo de los pliegues. Un movimiento lineal cubre toda la superficie — hasta que deja de salir polvo, aproximadamente tres minutos.",
          callout: "≈ 3 min por elemento",
          alt: "Operario limpiando un filtro cilíndrico por soplado, polvo saliendo del elemento",
        },
      ],
    },
    specs: {
      eyebrow: "Datos técnicos",
      title: "Parámetros, no adjetivos de marketing",
      items: [
        {
          value: "80–250",
          unit: "mm",
          label: "Diámetro interior del filtro",
          note: "Rango aproximado de elementos cilíndricos compatibles.",
        },
        {
          value: "4",
          unit: "pcs",
          label: "Rotores intercambiables",
          note: "Adaptados a distintos diámetros interiores de filtro.",
        },
        {
          value: "from 100",
          unit: "L",
          label: "Volumen del depósito",
          note: "Volumen recomendado para mantener el caudal sin caídas de presión.",
        },
        {
          value: "8",
          unit: "bar",
          label: "Presión del compresor",
          note: "Presión recomendada que puede mantenerse de forma estable.",
        },
        {
          value: "up to 4",
          unit: "bar",
          label: "Chorro del rotor a 8 bar de entrada",
          note: "A 10 bar de entrada — hasta 5 bar en la salida del rotor.",
        },
        {
          value: "≈ 3",
          unit: "min",
          label: "Limpieza por soplado de un elemento",
          note: "Orientación. Tiempo exacto — hasta que deje de salir polvo visible.",
        },
        {
          value: "≈ 1",
          unit: "min",
          label: "Montaje del dispositivo",
          note: "Tiempo de preparación indicado antes del uso.",
        },
        {
          value: "1",
          unit: "year",
          label: "Garantía",
          note: "Garantía del fabricante indicada.",
        },
      ],
    },
    compatibility: {
      eyebrow: "Comprobación de compatibilidad",
      title: "¿Encaja Turbo Cleaner en su equipo?",
      intro:
        "Comprobación breve según parámetros básicos. No se envía nada — el cálculo se ejecuta en su navegador. Es una guía preliminar, no un sustituto de las instrucciones del fabricante del filtro.",
      steps: [
        {
          id: "machine",
          question: "Tipo de equipo",
          hint: "Para qué máquina selecciona la limpieza de filtro",
          options: [
            { id: "agro", label: "Agrícola", tone: "ok" },
            { id: "truck", label: "Camión / comercial", tone: "ok" },
            { id: "quarry", label: "Cantera / minería", tone: "ok" },
            { id: "road", label: "Obra vial", tone: "ok" },
            { id: "other", label: "Otro", tone: "unknown" },
          ],
        },
        {
          id: "filter",
          question: "Tipo de filtro",
          hint: "Turbo Cleaner está diseñado para elementos cilíndricos secos",
          options: [
            { id: "cyl", label: "Filtro de aire cilíndrico seco", tone: "ok" },
            { id: "other", label: "Otro tipo o desconocido", tone: "stop" },
          ],
        },
        {
          id: "diameter",
          question: "Diámetro interior del filtro",
          hint: "Medido en la superficie de asiento interior del elemento",
          options: [
            { id: "in", label: "De 80 a 250 mm", tone: "ok" },
            { id: "less", label: "Menos de 80 mm", tone: "stop" },
            { id: "more", label: "Más de 250 mm", tone: "stop" },
            { id: "unknown", label: "Desconocido", tone: "warn" },
          ],
        },
        {
          id: "air",
          question: "Fuente de aire comprimido",
          hint: "Las características del compresor afectan la estabilidad del caudal",
          options: [
            { id: "ok", label: "Depósito desde 100 L y 8 bar estables", tone: "ok" },
            { id: "near", label: "Compresor embarcado con parámetros similares", tone: "warn" },
            { id: "unknown", label: "Parámetros desconocidos", tone: "warn" },
            { id: "low", label: "Por debajo de los parámetros recomendados", tone: "stop" },
          ],
        },
      ],
    },
    compatResults: {
      possible: {
        tone: "possible",
        title: "Los parámetros básicos sugieren compatibilidad posible",
        text: "Los parámetros están dentro del rango indicado. Antes de la limpieza por soplado, consulte los manuales de operación del filtro y del equipo.",
      },
      clarify: {
        tone: "clarify",
        title: "Los parámetros requieren aclaración",
        text: "Aclare el diámetro interior del filtro y las especificaciones del compresor — datos insuficientes para una evaluación preliminar.",
      },
      out: {
        tone: "out",
        title: "Los parámetros superan el rango indicado",
        text: "Según los datos proporcionados, el filtro o la fuente de aire quedan fuera del rango para el que Turbo Cleaner está diseñado.",
      },
      check: {
        tone: "check",
        title: "Compruebe si la limpieza por soplado está permitida",
        text: "Consulte en el manual del fabricante del filtro y del equipo si la limpieza por soplado y la reutilización del elemento están permitidas.",
      },
    },
    scenarios: {
      eyebrow: "Ámbitos de aplicación",
      title: "Equipos que no pueden permitirse paradas",
      items: [
        {
          title: "Agricultura",
          alt: "Turbo Cleaner y filtros de aire cilíndricos en entorno polvoriento",
          lines: ["Cosechadoras y tractores durante la cosecha", "Mantenimiento del filtro directamente en el campo"],
        },
        {
          title: "Flota de camiones",
          alt: "Operario limpiando un filtro cilíndrico por soplado",
          lines: ["Camiones en caminos de tierra", "Cargadoras y equipos de almacén"],
        },
        {
          title: "Obra vial",
          alt: "Limpieza completa del filtro de aire en una obra",
          lines: ["Maquinaria de obra vial", "Trabajo en polvo constante"],
        },
        {
          title: "Canteras y patios polvorientos",
          alt: "Limpieza de filtro en campo con salida de polvo visible",
          lines: ["Maquinaria de cantera", "Patios polvorientos y fosas a cielo abierto"],
        },
      ],
    },
    kit: {
      eyebrow: "Contenido del kit",
      title: "Montaje en aproximadamente un minuto",
      items: [
        {
          title: "Rotores intercambiables",
          qty: "4 pcs",
          desc: "Para distintos diámetros interiores de filtros cilíndricos.",
        },
        {
          title: "Cono restrictor «Pyramid»",
          desc: "Cubre la entrada y evita que el polvo entre en la cavidad limpia del filtro.",
        },
        {
          title: "Pistola neumática",
          desc: "Suministra aire comprimido, se conecta a un compresor.",
        },
        {
          title: "Barra de extensión",
          desc: "Une la pistola y la cabeza de trabajo, define el alcance.",
        },
        {
          title: "Manual y embalaje",
          desc: "Guía de montaje y operación, embalaje de transporte.",
        },
      ],
      note: "Las fotos muestran el contenido real del kit. La composición y el aspecto pueden variar según el fabricante.",
    },
    comparison: {
      eyebrow: "Comparación de procesos",
      title: "Tubo convencional y Turbo Cleaner",
      note: "Se compara el proceso de trabajo, no la eficacia de la limpieza.",
      manual: {
        title: "Tubo de limpieza por soplado convencional",
        points: [
          "El operario dirige manualmente un chorro localizado",
          "El resultado depende de la trayectoria y del tiempo de tratamiento",
          "La superficie del filtro debe cubrirse secuencialmente",
        ],
      },
      turbo: {
        title: "Turbo Cleaner",
        points: [
          "Rotor adaptado al diámetro interior del filtro",
          "Proceso de trabajo dentro del elemento cilíndrico",
          "Presión del chorro limitada por diseño dentro de los parámetros indicados",
          "Criterio de finalización — deja de salir polvo visible e instrucciones",
        ],
      },
    },
    demos: {
      eyebrow: "Vídeo",
      title: "Cómo se ve en funcionamiento",
      intro:
        "Imágenes reales del dispositivo en acción. Los subtítulos describen lo que ocurre en el vídeo; no se indican nombres ni explotaciones — no proporcionamos atribuciones no verificadas.",
      items: [
        { caption: "Polvo saliendo de los pliegues del filtro durante la limpieza por soplado" },
        { caption: "Limpieza de filtro cilíndrico en condiciones de campo" },
        { caption: "Demostración del proceso de limpieza" },
        { caption: "Limpieza por soplado del filtro con rotor Turbo Cleaner" },
      ],
    },
    faq: {
      eyebrow: "Preguntas y respuestas",
      title: "Lo esencial",
      items: [
        {
          q: "¿Para qué filtros está diseñado Turbo Cleaner?",
          a: "Para filtros de aire cilíndricos secos en motores de equipos que operan en condiciones polvorientas. El dispositivo no está destinado a filtros de cabina, espuma, aceite, sistemas de fluidos ni turbocompresores.",
        },
        {
          q: "¿Cómo elegir el rotor adecuado?",
          a: "El rotor se adapta al diámetro interior del filtro. El kit incluye cuatro rotores intercambiables para un rango de aproximadamente 80 a 250 mm. Mida el diámetro interior del elemento y seleccione el rotor correspondiente según el manual.",
        },
        {
          q: "¿Qué compresor se necesita?",
          a: "Se recomienda un compresor con depósito desde 100 litros, capaz de mantener 8 bar de forma sostenida. La uniformidad del caudal depende de la estabilidad de la presión.",
        },
        {
          q: "¿Cuánto dura la limpieza por soplado?",
          a: "Aproximadamente tres minutos por elemento. El tiempo exacto se determina en la práctica — hasta que deje de salir polvo visible.",
        },
        {
          q: "¿Cómo saber que la limpieza está completa?",
          a: "El principal indicador es cuando deja de salir polvo notable del filtro. Consulte también las recomendaciones del manual.",
        },
        {
          q: "¿Qué presión genera el rotor?",
          a: "La presión del chorro en la salida del rotor está limitada por diseño: a 8 bar de entrada — no más de 4 bar, a 10 bar — no más de 5 bar.",
        },
        {
          q: "¿El dispositivo requiere mantenimiento?",
          a: "No se indica mantenimiento técnico complejo. El dispositivo se monta en aproximadamente un minuto y no requiere habilidades especiales.",
        },
        {
          q: "¿Se puede limpiar por soplado cualquier filtro?",
          a: "No. Si la limpieza por soplado y la reutilización están permitidas lo determina el fabricante del filtro y del equipo. Los elementos dañados, húmedos, contaminados por aceite y no limpiables deben sustituirse.",
        },
        {
          q: "¿La limpieza sustituye la compra de un filtro nuevo?",
          a: "No. La limpieza por soplado no cancela el reemplazo programado del filtro ni hace el elemento nuevo. Es un mantenimiento intermedio según las normas del fabricante.",
        },
        {
          q: "¿Qué hacer si el filtro está dañado o contaminado por aceite?",
          a: "Ese elemento no debe limpiarse por soplado — debe sustituirse. La limpieza por soplado está destinada a la contaminación seca por polvo de elementos intactos.",
        },
        {
          q: "¿Funcionará el compresor embarcado de mi equipo?",
          a: "Si se acerca a los parámetros recomendados (depósito de unos 100 L, 8 bar estables) — probablemente sí. Con parámetros inferiores, el caudal puede ser menor. Consulte las especificaciones de su compresor.",
        },
        {
          q: "¿Qué incluye el kit?",
          a: "Cuatro rotores intercambiables para distintos diámetros, cono restrictor «Pyramid», pistola neumática, barra de extensión, manual y embalaje.",
        },
      ],
    },
    finalOffer: {
      eyebrow: "Listo para probar",
      title: "Filtro limpio. Equipo operativo.",
      summary: [
        "Cuatro rotores intercambiables",
        "Filtros Ø 80–250 mm",
        "Compresor desde 100 L · 8 bar",
        "1 año de garantía",
      ],
      primaryCta: "Contacto",
      secondaryCta: "Comprobar compatibilidad",
    },
    disclaimer:
      "Si la limpieza por soplado y la reutilización del elemento filtrante están permitidas lo determina el fabricante del filtro y del equipo. Consulte el manual de operación antes del uso. Los elementos dañados, húmedos, contaminados por aceite y no limpiables deben sustituirse.",
  },
};
