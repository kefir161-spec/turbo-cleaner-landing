"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ContactModal } from "@/components/ui/ContactModal";
import { Button } from "@/components/ui/Button";
import { useBrand } from "@/lib/content-context";

export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const { contactForm } = useBrand();

  useEffect(() => {
    const hero = document.getElementById("top");
    const offer = document.getElementById("final");
    if (!hero || !offer) return;

    const obs = new IntersectionObserver(
      ([heroEntry, offerEntry]) => {
        const pastHero = heroEntry && !heroEntry.isIntersecting;
        const atOffer = offerEntry?.isIntersecting ?? false;
        setVisible(pastHero && !atOffer);
      },
      { threshold: 0.1 },
    );

    obs.observe(hero);
    obs.observe(offer);
    return () => obs.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <ContactModal>
        <Button size="lg" className="w-full">
          {contactForm.triggerLabel}
          <ArrowUpRight className="size-4" aria-hidden />
        </Button>
      </ContactModal>
    </div>
  );
}
