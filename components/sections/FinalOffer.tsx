import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton, Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";
import { DisclaimerNote } from "@/components/ui/DisclaimerNote";
import { DustCanvas } from "@/components/motion/DustCanvas";
import { finalOffer } from "@/content/product";
import { media } from "@/lib/assets";

export function FinalOffer() {
  return (
    <Section
      id="final"
      className="relative overflow-hidden border-t border-line bg-[radial-gradient(circle_at_70%_0%,rgba(255,122,26,0.1),transparent_55%)]"
    >
      <DustCanvas className="opacity-40" density={32} />

      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal className="flex flex-col gap-6">
          <span className="mono-label text-accent">{finalOffer.eyebrow}</span>
          <h2 className="text-h1 font-extrabold text-fg">{finalOffer.title}</h2>

          <ul className="flex flex-wrap gap-2">
            {finalOffer.summary.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-fg-muted"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ContactModal>
              <Button size="lg">
                {finalOffer.primaryCta}
                <ArrowUpRight className="size-4" aria-hidden />
              </Button>
            </ContactModal>
            <LinkButton href="#compatibility" variant="secondary" size="lg">
              {finalOffer.secondaryCta}
            </LinkButton>
          </div>

          <DisclaimerNote className="mt-2" />
        </Reveal>

        <Reveal className="relative aspect-[1600/938] overflow-hidden rounded-[var(--radius-card)] border border-line bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.07),transparent_70%)]">
          <Image
            src={media.kitFull}
            alt="Полный комплект Turbo Cleaner: роторы, конусный ограничитель, пневмопистолет, штанга и упаковка"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-6"
          />
        </Reveal>
      </div>
    </Section>
  );
}
