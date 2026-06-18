import { ArrowUpRight, MoveDown } from "lucide-react";
import { HeroMedia } from "@/components/media/HeroMedia";
import { DustCanvas } from "@/components/motion/DustCanvas";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton, Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";
import { hero } from "@/content/product";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-12 pt-28 sm:pb-16"
      aria-label="Turbo Cleaner — система продувки воздушных фильтров"
    >
      <HeroMedia />
      <DustCanvas className="opacity-70" density={40} />

      <div className="container-page relative z-10">
        <Reveal stagger immediate className="flex max-w-3xl flex-col gap-6">
          <span className="mono-label text-accent">{hero.eyebrow}</span>

          <h1 className="text-mega font-extrabold text-fg">
            {hero.titleLead}{" "}
            <span className="text-accent">{hero.titleAccent}</span>
          </h1>

          <p className="max-w-2xl text-lead text-fg-muted">
            <strong className="font-semibold text-fg">{hero.leadBrand}</strong>
            {" — "}
            {hero.lead}
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ContactModal>
              <Button size="lg">
                {hero.primaryCta}
                <ArrowUpRight className="size-4" aria-hidden />
              </Button>
            </ContactModal>
            <LinkButton href="#how" variant="secondary" size="lg">
              {hero.secondaryCta}
            </LinkButton>
          </div>
        </Reveal>

        <div className="mt-12 flex items-center gap-3 text-fg-faint">
          <MoveDown className="size-4 animate-bounce" aria-hidden />
          <span className="mono-label">Листайте вниз</span>
        </div>
      </div>
    </section>
  );
}
