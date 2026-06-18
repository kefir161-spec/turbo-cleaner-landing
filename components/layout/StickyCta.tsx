"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ContactModal } from "@/components/ui/ContactModal";
import { contactForm } from "@/content/brand";
import { cn } from "@/lib/utils";

/**
 * Ненавязчивый sticky-CTA: появляется после первого экрана, прячется у финального
 * оффера, не перекрывает контент на мобильных (учитывает safe-area).
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.9;
      const final = document.getElementById("final");
      const beforeFinal = final
        ? final.getBoundingClientRect().top > window.innerHeight * 0.6
        : true;
      setVisible(past && beforeFinal);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-300",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <ContactModal>
        <button
          type="button"
          className="flex items-center gap-3 rounded-full border border-accent-dim/60 bg-ink-2/90 py-2 pl-5 pr-2 text-sm font-semibold text-fg shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md"
        >
          <span>{contactForm.triggerLabel}</span>
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent text-[#1a0e03]">
            <ArrowUpRight className="size-4" aria-hidden />
          </span>
        </button>
      </ContactModal>
    </div>
  );
}
