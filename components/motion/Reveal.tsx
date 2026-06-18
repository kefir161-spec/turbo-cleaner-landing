"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, registerGsap, useGSAP, prefersReducedMotion, EASE } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Задержка в секундах. */
  delay?: number;
  /** Смещение по Y, px. */
  y?: number;
  /** Анимировать прямых детей со stagger, а не сам контейнер. */
  stagger?: boolean;
  /** Запуск сразу при монтировании (для первого экрана), без скролл-триггера. */
  immediate?: boolean;
}

/**
 * Появление по скроллу: transform + opacity (без layout-heavy свойств).
 * Финальное состояние — видимое (CSS), так что без JS / при reduced motion
 * контент остаётся читаемым.
 */
export function Reveal({
  children,
  as,
  className,
  delay = 0,
  y = 22,
  stagger = false,
  immediate = false,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = ref.current;
      if (!el) return;
      const targets = stagger ? Array.from(el.children) : el;

      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      // Скрываем до анимации через GSAP (без класса .js на <html> — иначе hydration mismatch).
      gsap.set(targets, { opacity: 0, y });

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: immediate ? 0.9 : 0.8,
          ease: EASE.out,
          delay,
          stagger: stagger ? 0.09 : 0,
          ...(immediate
            ? {}
            : { scrollTrigger: { trigger: el, start: "top 86%", once: true } }),
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag
      ref={ref}
      className={className}
      {...(stagger ? { "data-reveal-group": "" } : { "data-reveal": "" })}
    >
      {children}
    </Tag>
  );
}
