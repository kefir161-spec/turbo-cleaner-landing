"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { useProduct, useUi } from "@/lib/content-context";
import { media } from "@/lib/assets";

export function Kit() {
  const { kit } = useProduct();
  const {
    sectionKit,
    kitAssembled,
    kitAssemblyTime,
    kitMainAlt,
    kitPartsAlt,
    kitBoxAlt,
  } = useUi();

  return (
    <Section id="kit" className="bg-ink-2">
      <SectionHeading eyebrow={kit.eyebrow} title={kit.title} index={sectionKit} />

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
        <Reveal className="lg:sticky lg:top-24">
          <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_70%)]">
            <div className="relative aspect-[1600/744]">
              <Image
                src={media.assembled}
                alt={kitMainAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6"
              />
            </div>
            <div className="flex items-center justify-between border-t border-line px-5 py-3">
              <span className="mono-label">{kitAssembled}</span>
              <span className="font-mono text-xs text-accent">{kitAssemblyTime}</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="relative aspect-[1600/938] overflow-hidden rounded-2xl border border-line bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),transparent_70%)]">
              <Image
                src={media.kitParts}
                alt={kitPartsAlt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-contain p-3"
              />
            </div>
            <div className="relative aspect-[1600/938] overflow-hidden rounded-2xl border border-line bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),transparent_70%)]">
              <Image
                src={media.box}
                alt={kitBoxAlt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-contain p-3"
              />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          <Reveal stagger className="flex flex-col gap-3">
            {kit.items.map((item, i) => (
              <article
                key={item.title}
                className="group flex gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/50"
                tabIndex={0}
              >
                <span className="font-mono text-sm text-fg-faint transition-colors group-hover:text-accent group-focus:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-h3 font-bold text-fg">{item.title}</h3>
                    {item.qty && (
                      <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-accent">
                        {item.qty}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{item.desc}</p>
                </div>
              </article>
            ))}
          </Reveal>
          <Reveal as="p" className="mt-2 text-sm text-fg-faint">
            {kit.note}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
