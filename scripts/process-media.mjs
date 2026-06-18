/**
 * Готовит оптимизированные копии материалов из исходных папок проекта в `public/assets`.
 * Исходники не изменяются. Требует devDependencies: sharp, ffmpeg-static.
 * Запуск: `pnpm assets`
 */
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";
import ffmpegPath from "ffmpeg-static";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "public", "assets");
const SRC = (...p) => path.join(ROOT, ...p);

for (const d of ["product", "scenes", "video", "og", "brand"]) {
  fs.mkdirSync(path.join(OUT, d), { recursive: true });
}
sharp.cache(false);

const imageJobs = [
  ["Озон фото для/All.png", "product/kit-full.webp", 1600, true],
  ["Озон фото для/Equipment.png", "product/kit-parts.webp", 1600, true],
  ["Озон фото для/Assembling.png", "product/assembled.webp", 1600, true],
  ["sources/product/pneumatic-gun.png", "product/pneumatic-gun.webp", 1200, true],
  ["Озон фото для/Box.png", "product/box.webp", 1100, true],
  ["Озон фото для/Usage.jpg", "product/cutaway.webp", 900, false],
  ["sources/scenes/studio-filters-en.png", "scenes/studio-filters-en.webp", 1600, false],
  ["sources/scenes/road-construction-en.png", "scenes/road-construction-en.webp", 1280, false],
  ["Turbo Cleaner Яндекс/Turbo Cleaner продувка фильтра 11.png", "scenes/field-kit.webp", 1600, false],
  ["Turbo Cleaner Яндекс/Turbo Cleaner продувка фильтра воздушного 12.png", "scenes/blow-through.webp", 1600, false],
  ["Turbo Cleaner Яндекс/Turbo Cleaner восстановление фильтра 15.png", "scenes/restore.webp", 1600, false],
  ["Turbo Cleaner Яндекс/Turbo Cleaner очистка в поле 20.jpg", "scenes/filter-dust.webp", 1280, false],
  ["Turbo Cleaner Яндекс/Turbo Cleaner удаление пыли 18.jpg", "scenes/dust-cloud.webp", 1280, false],
  ["Turbo Cleaner Яндекс/Turbo Cleaner забился фильтр воздушный трактора 40.jpg", "scenes/operator.webp", 1280, false],
  ["Turbo Cleaner Яндекс/Turbo Cleaner очистка фильтров для карьеров 32.jpg", "scenes/hands-rotor.webp", 1280, false],
  ["Turbo Cleaner Яндекс/Turbo Cleaner фильтр Акрос 21.jpg", "scenes/field-clean.webp", 900, false],
];

for (const [src, out, width, alpha] of imageJobs) {
  const inPath = SRC(src);
  if (!fs.existsSync(inPath)) {
    console.log("MISSING", src);
    continue;
  }
  await sharp(inPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: alpha ? 86 : 80, effort: 5, alphaQuality: 100 })
    .toFile(path.join(OUT, out));
  console.log("IMG", out);
}

await sharp(SRC("Turbo Cleaner Яндекс/Turbo Cleaner продувка фильтра 11.png"))
  .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
  .jpeg({ quality: 82 })
  .toFile(path.join(OUT, "og", "og.jpg"));
console.log("IMG og/og.jpg");

function ff(args) {
  const r = spawnSync(ffmpegPath, args, { stdio: ["ignore", "ignore", "inherit"] });
  if (r.status !== 0) console.log("FFMPEG FAIL", args.join(" "));
}

async function makePoster(src, outName, t, width) {
  const tmp = path.join(OUT, "video", "__poster.png");
  ff(["-y", "-ss", String(t), "-i", src, "-frames:v", "1", tmp]);
  if (!fs.existsSync(tmp)) return;
  await sharp(tmp).resize({ width, withoutEnlargement: true }).webp({ quality: 72 }).toFile(path.join(OUT, "video", outName));
  fs.rmSync(tmp, { force: true });
  console.log("POSTER", outName);
}

const HERO = SRC("Wildberries фото/TurboCleaner исходник.mp4");
ff(["-y", "-i", HERO, "-vf", "scale=1280:-2", "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "25", "-pix_fmt", "yuv420p", "-movflags", "+faststart", path.join(OUT, "video", "hero.mp4")]);
ff(["-y", "-i", HERO, "-vf", "scale=720:-2", "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "28", "-pix_fmt", "yuv420p", "-movflags", "+faststart", path.join(OUT, "video", "hero-mobile.mp4")]);
ff(["-y", "-i", HERO, "-vf", "scale=1280:-2", "-an", "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "36", "-row-mt", "1", "-cpu-used", "4", path.join(OUT, "video", "hero.webm")]);
await makePoster(HERO, "hero-poster.webp", 4, 1280);

const clips = [
  [SRC("РЭЦ буклеты 2/Видео работы Turbocleaner.mp4"), "demo-1", 848, 25, 6],
  [SRC("Turbo Cleaner Яндекс/Turbo Cleaner система очистки фильтра 6.mp4"), "demo-vertical", 478, 26, 4],
  [SRC("Wildberries фото/Отзыв 3.mp4"), "demo-2", 848, 26, 8],
  [SRC("Wildberries фото/Отзыв номер 1.mp4"), "demo-vertical-2", 474, 27, 5],
];
for (const [src, name, w, crf, pt] of clips) {
  if (!fs.existsSync(src)) {
    console.log("MISSING VID", src);
    continue;
  }
  ff(["-y", "-i", src, "-vf", `scale=${w}:-2`, "-an", "-c:v", "libx264", "-preset", "slow", "-crf", String(crf), "-pix_fmt", "yuv420p", "-movflags", "+faststart", path.join(OUT, "video", name + ".mp4")]);
  await makePoster(src, name + "-poster.webp", pt, w);
  console.log("VID", name + ".mp4");
}

console.log("DONE");
