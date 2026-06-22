import { asset } from "@/lib/assets";

export const howItWorksMedia = [
  {
    n: "01",
    image: asset("product/pneumatic-gun.webp"),
    imageClass: "object-contain object-center p-6",
  },
  {
    n: "02",
    image: asset("product/cutaway.webp"),
    imageClass: "object-contain p-3",
  },
  {
    n: "03",
    image: asset("scenes/operator.webp"),
    imageClass: "object-cover object-[center_35%]",
  },
] as const;

export const scenarioMedia = [
  {
    key: "agro",
    image: asset("scenes/studio-filters-en.webp"),
  },
  {
    key: "truck",
    image: asset("scenes/operator.webp"),
  },
  {
    key: "road",
    image: asset("scenes/road-construction-en.webp"),
    imageClass: "object-[center_25%]",
  },
  {
    key: "quarry",
    image: asset("scenes/field-clean.webp"),
  },
] as const;

export const demoMedia = [
  {
    id: "demo-1",
    src: asset("video/demo-1.mp4"),
    poster: asset("video/demo-1-poster.webp"),
    duration: "0:19",
    orientation: "landscape" as const,
  },
  {
    id: "demo-2",
    src: asset("video/demo-2.mp4"),
    poster: asset("video/demo-2-poster.webp"),
    duration: "0:35",
    orientation: "landscape" as const,
  },
  {
    id: "demo-vertical",
    src: asset("video/demo-vertical.mp4"),
    poster: asset("video/demo-vertical-poster.webp"),
    duration: "0:18",
    orientation: "portrait" as const,
  },
  {
    id: "demo-vertical-2",
    src: asset("video/demo-vertical-2.mp4"),
    poster: asset("video/demo-vertical-2-poster.webp"),
    duration: "0:16",
    orientation: "portrait" as const,
  },
] as const;
