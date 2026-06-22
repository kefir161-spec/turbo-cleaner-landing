"use client";

import { type FormEvent, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useBrand, useUi } from "@/lib/content-context";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm text-fg placeholder:text-fg-faint transition-colors focus:border-accent focus:outline-none";

interface ContactModalProps {
  children: ReactNode;
}

export function ContactModal({ children }: ContactModalProps) {
  const { contactForm } = useBrand();
  const { closeForm } = useUi();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink/85 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[60] max-h-[min(92vh,720px)] w-[min(94vw,480px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-line bg-ink-2 p-5 shadow-2xl focus:outline-none sm:p-6"
          aria-describedby="contact-form-description"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-h3 font-bold text-fg">
                {contactForm.title}
              </Dialog.Title>
              <Dialog.Description
                id="contact-form-description"
                className="mt-2 text-sm leading-relaxed text-fg-muted"
              >
                {contactForm.description}
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label={closeForm}
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-fg hover:bg-surface-2"
              >
                <X className="size-4" aria-hidden />
              </button>
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <label className="flex flex-col gap-2">
              <span className="mono-label text-fg-faint">{contactForm.nameLabel}</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder={contactForm.namePlaceholder}
                className={fieldClass}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="mono-label text-fg-faint">{contactForm.phoneLabel}</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder={contactForm.phonePlaceholder}
                className={fieldClass}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="mono-label text-fg-faint">{contactForm.messageLabel}</span>
              <textarea
                name="message"
                rows={4}
                placeholder={contactForm.messagePlaceholder}
                className={cn(fieldClass, "resize-y min-h-[7rem]")}
              />
            </label>

            <Button type="submit" size="lg" className="mt-1 w-full">
              {contactForm.submitLabel}
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
