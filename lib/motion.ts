import { useSyncExternalStore } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

let registered = false;

/** Регистрирует плагины GSAP один раз (только на клиенте). */
export function registerGsap(): void {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  registered = true;
}

/** Учитывает системную настройку «уменьшить движение». */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Грубая проверка «слабого» устройства / тонкого канала для деградации эффектов. */
export function isLowPowerDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const cores = navigator.hardwareConcurrency ?? 8;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
    .connection;
  const slowNet = conn?.saveData === true || /2g/.test(conn?.effectiveType ?? "");
  return cores <= 2 || slowNet;
}

function subscribeReducedMotion(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

/**
 * Можно ли включать «тяжёлые» эффекты (видео, частицы, parallax).
 * На сервере и при reduced motion / слабом устройстве — false.
 * Через useSyncExternalStore, чтобы не вызывать setState внутри эффекта.
 */
export function useEnhancedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => !prefersReducedMotion() && !isLowPowerDevice(),
    () => false,
  );
}

export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
} as const;

export { gsap, ScrollTrigger, useGSAP };
