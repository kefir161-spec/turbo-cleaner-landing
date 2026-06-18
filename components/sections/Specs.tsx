import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { specs } from "@/content/product";

export function Specs() {
  return (
    <Section id="specs" className="bg-ink-2">
      <SectionHeading eyebrow={specs.eyebrow} title={specs.title} index="03 / Параметры" />

      <Reveal
        stagger
        className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {specs.items.map((item, i) => (
          <article key={item.label} className="group relative bg-surface p-5 sm:p-6">
            <span className="absolute right-4 top-4 font-mono text-[0.65rem] text-fg-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-[clamp(1.8rem,1.2rem+1.6vw,2.6rem)] font-medium leading-none text-fg">
                {item.value}
              </span>
              {item.unit && (
                <span className="font-mono text-sm text-accent">{item.unit}</span>
              )}
            </div>
            <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-fg">
              {item.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.note}</p>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
            />
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
