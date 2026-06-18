/**
 * Единый конфигурационный файл бренда.
 * Название компании вымышленное. Чтобы заменить бренд — правьте только этот файл.
 * Логотип — компонент `components/ui/Logo.tsx` (и `app/icon.svg` для favicon).
 */
export const brand = {
  /** Вымышленная компания-поставщик (НЕ реальный производитель). */
  company: "AERIX",
  companyFull: "AERIX Industrial",
  /** Короткий дескриптор под лого. */
  descriptor: "industrial air tools",
  /** Название продукта — остаётся как есть. */
  product: "Turbo Cleaner",
  /** Год для строки copyright. */
  year: new Date().getFullYear(),
} as const;

/** Внешние ссылки. */
export const links = {
  /** Канонический адрес сайта (замените при деплое или через NEXT_PUBLIC_SITE_URL). */
  site: process.env.NEXT_PUBLIC_SITE_URL ?? "https://turbo-cleaner.example",
} as const;

/** Тексты формы обратной связи. */
export const contactForm = {
  triggerLabel: "Связаться с нами",
  title: "Связаться с нами",
  description:
    "Оставьте контакты — ответим по наличию, цене и совместимости с вашей техникой.",
  nameLabel: "Имя",
  namePlaceholder: "Как к вам обращаться",
  phoneLabel: "Телефон",
  phonePlaceholder: "+7 (___) ___-__-__",
  messageLabel: "Сообщение",
  messagePlaceholder: "Вопрос или комментарий",
  submitLabel: "Отправить",
} as const;
