import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ContactModal } from "@/components/ui/ContactModal";
import { navLinks } from "@/content/product";
import { brand, contactForm } from "@/content/brand";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="container-page flex flex-col gap-10 py-12 sm:py-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Logo withDescriptor />
            <p className="mt-4 text-sm text-fg-faint">
              {brand.product} — система контролируемой продувки цилиндрических
              воздушных фильтров техники, работающей в запылённых условиях.
            </p>
          </div>

          <nav aria-label="Навигация в подвале" className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            <ContactModal>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-bright"
              >
                {contactForm.triggerLabel}
                <ArrowUpRight className="size-4" aria-hidden />
              </button>
            </ContactModal>
          </nav>
        </div>

        <div className="hairline flex flex-col gap-2 pt-6 text-xs text-fg-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {brand.year} {brand.companyFull}. {brand.product} — наименование продукта.
          </p>
          <p className="font-mono tracking-wide">industrial air tools</p>
        </div>
      </div>
    </footer>
  );
}
