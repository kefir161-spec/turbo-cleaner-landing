"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoModal } from "@/components/media/VideoModal";
import { DustCanvas } from "@/components/motion/DustCanvas";
import { gsap, registerGsap, useGSAP } from "@/lib/motion";
import { howItWorks, demos } from "@/content/product";
import { cn } from "@/lib/utils";

const DOT_TOP = ["14%", "46%", "78%"];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const scopeRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const demo = demos.items[0];

  useGSAP(
    () => {
      registerGsap();
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => self.isActive && setActive(i),
          },
        });
      });
    },
    { scope: scopeRef },
  );

  return (
    <Section id="how">
      <SectionHeading
        eyebrow={howItWorks.eyebrow}
        title={howItWorks.title}
        intro={howItWorks.intro}
        index="02 / Принцип"
      />

      <div ref={scopeRef} className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Визуальная панель */}
        <div className="lg:sticky lg:top-[12vh] lg:h-[76vh]">
          <div className="relative h-[52vh] overflow-hidden rounded-[var(--radius-card)] border border-line bg-ink-2 lg:h-full">
            {howItWorks.steps.map((step, i) => (
              <Image
                key={step.n}
                src={step.image}
                alt={step.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
                className={cn(
                  "transition-opacity duration-700 ease-out",
                  step.imageClass,
                  active === i ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
            <DustCanvas className="opacity-50" density={28} />

            {/* Прогресс-рейка этапов */}
            <div className="absolute left-4 top-4 bottom-4 flex w-1 flex-col rounded-full bg-line">
              <div
                className="w-full rounded-full bg-accent transition-[height] duration-500 ease-out"
                style={{ height: `${((active + 1) / howItWorks.steps.length) * 100}%` }}
              />
            </div>

            {/* Индикатор положения рабочей части */}
            <div
              aria-hidden
              className="absolute right-6 size-3 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_18px_4px_rgba(255,122,26,0.5)] transition-[top] duration-500 ease-out"
              style={{ top: DOT_TOP[active] }}
            />

            {/* Активный callout */}
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-line bg-ink/70 px-4 py-3 backdrop-blur-md">
              <span className="font-mono text-xs tracking-wide text-accent">
                {howItWorks.steps[active].callout}
              </span>
              <VideoModal
                src={demo.src}
                poster={demo.poster}
                caption={demo.caption}
                orientation={demo.orientation}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-[#1a0e03]"
                >
                  <Play className="size-3.5" aria-hidden />
                  Видео
                </button>
              </VideoModal>
            </div>
          </div>
        </div>

        {/* Этапы */}
        <ol className="flex flex-col">
          {howItWorks.steps.map((step, i) => (
            <li
              key={step.n}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="flex min-h-[44vh] flex-col justify-center border-b border-line py-8 last:border-b-0 lg:min-h-[76vh]"
            >
              <div
                className={cn(
                  "transition-opacity duration-500",
                  active === i ? "opacity-100" : "lg:opacity-40",
                )}
              >
                <span className="font-mono text-sm text-accent">{step.n}</span>
                <h3 className="mt-3 text-h2 font-extrabold text-fg">{step.title}</h3>
                <p className="mt-4 max-w-md text-lead text-fg-muted">{step.text}</p>
                <span className="mt-5 inline-block rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs tracking-wide text-fg-muted">
                  {step.callout}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
