import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { comparison } from "@/content/product";

export function Comparison() {
  return (
    <Section id="comparison">
      <SectionHeading
        eyebrow={comparison.eyebrow}
        title={comparison.title}
        intro={comparison.note}
        index="07 / Сравнение"
      />

      <Reveal stagger className="mt-12 grid gap-4 md:grid-cols-2">
        {/* Обычная трубка */}
        <article className="rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:p-8">
          <span className="mono-label">Подход А</span>
          <h3 className="mt-2 text-h3 font-bold text-fg">{comparison.manual.title}</h3>
          <ul className="mt-5 flex flex-col gap-3">
            {comparison.manual.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-fg-muted">
                <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-fg-faint" />
                <span className="text-[0.95rem] leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Turbo Cleaner */}
        <article className="rounded-[var(--radius-card)] border border-accent/40 bg-[linear-gradient(180deg,rgba(255,122,26,0.07),transparent_60%)] p-6 sm:p-8">
          <span className="mono-label text-accent">Подход Б</span>
          <h3 className="mt-2 text-h3 font-bold text-fg">{comparison.turbo.title}</h3>
          <ul className="mt-5 flex flex-col gap-3">
            {comparison.turbo.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-fg">
                <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                <span className="text-[0.95rem] leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </Section>
  );
}
