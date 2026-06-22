"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { useProduct, useUi } from "@/lib/content-context";
import { media } from "@/lib/assets";

export function Problem() {
  const { problem } = useProduct();
  const { sectionProblem, problemImageAlt, problemImageCaption } = useUi();

  return (
    <Section id="problem">
      <SectionHeading eyebrow={problem.eyebrow} title={problem.title} index={sectionProblem} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-line">
          <Image
            src={media.studioFilters}
            alt={problemImageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <span className="absolute bottom-4 left-4 mono-label text-fg-muted">
            {problemImageCaption}
          </span>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-4">
            {problem.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-lead text-fg-muted">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal stagger className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {problem.points.map((pt) => (
              <div key={pt.title} className="bg-surface p-5">
                <h3 className="text-h3 font-bold text-fg">{pt.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{pt.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
