import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { scenarios } from "@/content/product";
import { cn } from "@/lib/utils";

export function Scenarios() {
  return (
    <Section id="scenarios">
      <SectionHeading eyebrow={scenarios.eyebrow} title={scenarios.title} index="05 / Применение" />

      <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {scenarios.items.map((item) => (
          <article
            key={item.key}
            className="group relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] border border-line"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={cn(
                "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                item.imageClass,
              )}
            />
            <div
              className={cn(
                "absolute inset-0",
                item.overlayClass ?? "bg-gradient-to-t from-ink via-ink/40 to-transparent",
              )}
            />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="text-h3 font-extrabold text-fg">{item.title}</h3>
              <ul className="mt-3 flex flex-col gap-1.5">
                {item.lines.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-fg-muted">
                    <span aria-hidden className="mt-1.5 h-1 w-3 shrink-0 bg-accent" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
