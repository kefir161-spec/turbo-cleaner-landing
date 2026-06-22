"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ContactModal } from "@/components/ui/ContactModal";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useBrand, useProduct, useUi } from "@/lib/content-context";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { navLinks } = useProduct();
  const { contactForm } = useBrand();
  const ui = useUi();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-line bg-ink/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <a href="#top" className="rounded-md" aria-label={ui.logoAriaLabel}>
          <Logo />
        </a>

        <nav aria-label={ui.mainNavAriaLabel} className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />

          <span className="hidden md:block">
            <ContactModal>
              <Button size="md">
                {contactForm.triggerLabel}
                <ArrowUpRight className="size-4" aria-hidden />
              </Button>
            </ContactModal>
          </span>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label={ui.openMenu}
                className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface/60 text-fg lg:hidden"
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm data-[state=open]:animate-in" />
              <Dialog.Content className="fixed inset-x-0 top-0 z-50 rounded-b-2xl border-b border-line bg-ink-2 p-5 shadow-2xl focus:outline-none">
                <div className="flex items-center justify-between">
                  <Dialog.Title asChild>
                    <Logo />
                  </Dialog.Title>
                  <Dialog.Description className="sr-only">
                    {ui.mobileNavTitle}
                  </Dialog.Description>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label={ui.closeMenu}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg"
                    >
                      <X className="size-5" aria-hidden />
                    </button>
                  </Dialog.Close>
                </div>
                <div className="mt-4">
                  <LanguageSwitcher className="w-full [&_select]:w-full" />
                </div>
                <nav aria-label={ui.mobileNavAriaLabel} className="mt-4 flex flex-col">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="border-t border-line py-4 text-h3 font-semibold text-fg"
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
                <ContactModal>
                  <Button size="lg" className="mt-5 w-full">
                    {contactForm.triggerLabel}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Button>
                </ContactModal>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
