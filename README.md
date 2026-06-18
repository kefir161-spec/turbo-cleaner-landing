# Turbo Cleaner — лендинг

Продающий одностраничный лендинг системы продувки цилиндрических воздушных
фильтров техники **Turbo Cleaner**. Премиальная инженерная подача в стиле
cinematic industrial minimalism.

> Бренд компании (**AERIX**) — вымышленный. Turbo Cleaner — наименование продукта.
> Технические данные взяты только из материалов проекта; недоказуемые
> маркетинговые утверждения исключены (см. `docs/assets-audit.md`).

## Стек

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS 4**
- **GSAP 3.15 + ScrollTrigger** (`@gsap/react`) — скролл-сцены и появления
- **Radix UI** (Dialog, Accordion) — доступные диалог и аккордеон
- **lucide-react** — второстепенные иконки
- **sharp** — оптимизация изображений (Next Image)

## Запуск

```bash
pnpm install
pnpm dev          # разработка → http://localhost:3000
```

Сборка и проверки:

```bash
pnpm build        # production-сборка
pnpm start        # запуск production-сервера
pnpm typecheck    # tsc --noEmit
pnpm lint         # eslint
```

## Контент и конфигурация

- `content/brand.ts` — **единый файл бренда** (название компании, ссылки). Меняется за минуту.
- `content/product.ts` — весь контент: характеристики, FAQ, сценарии, комплект,
  совместимость, сравнение, демонстрации, предупреждение.
- `lib/assets.ts` — пути к медиа в `public/assets`.

## Материалы

Оптимизированные копии лежат в `public/assets` (исходники в корне проекта не
изменяются). Перегенерировать из исходников:

```bash
pnpm assets       # требует devDeps: sharp, ffmpeg-static
```

## Структура

```text
app/            layout, page, globals.css, icon.svg
components/
  layout/       Header, Footer, StickyCta
  sections/     Hero, Problem, HowItWorks, Specs, Compatibility,
                Scenarios, Kit, Comparison, Demos, Faq, FinalOffer
  media/        HeroMedia, VideoModal
  motion/       Reveal, DustCanvas
  ui/           Logo, Button, Section, SectionHeading, DisclaimerNote
content/        brand.ts, product.ts
lib/            assets.ts, motion.ts, compatibility.ts, utils.ts
public/assets/  product / scenes / video / og
docs/           assets-audit.md
scripts/        process-media.mjs
```

## Доступность и производительность

- Семантическая разметка, один `h1`, доступные Dialog/Accordion, видимый focus.
- Полная поддержка `prefers-reduced-motion`: scrub/parallax/частицы отключаются,
  контент остаётся видимым; видео деградирует до постера.
- Тяжёлые сцены — только клиентские компоненты; GSAP-контексты очищаются,
  видео и анимации останавливаются вне вьюпорта и при скрытой вкладке.
```
