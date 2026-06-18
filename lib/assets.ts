/** Базовый путь к оптимизированным материалам в `public/assets`. */
export const ASSET_BASE = "/assets";

/** Собирает путь к ассету. Все ссылки на медиа идут через эту функцию. */
export function asset(path: string): string {
  return `${ASSET_BASE}/${path.replace(/^\/+/, "")}`;
}

/** Часто используемые ассеты. */
export const media = {
  hero: {
    mp4: asset("video/hero.mp4"),
    webm: asset("video/hero.webm"),
    mobileMp4: asset("video/hero-mobile.mp4"),
    poster: asset("video/hero-poster.webp"),
  },
  cutaway: asset("product/cutaway.webp"),
  kitFull: asset("product/kit-full.webp"),
  kitParts: asset("product/kit-parts.webp"),
  assembled: asset("product/assembled.webp"),
  box: asset("product/box.webp"),
  studioFilters: asset("scenes/studio-filters-en.webp"),
  filterDust: asset("scenes/filter-dust.webp"),
  dustCloud: asset("scenes/dust-cloud.webp"),
  handsRotor: asset("scenes/hands-rotor.webp"),
  og: asset("og/og.jpg"),
} as const;
