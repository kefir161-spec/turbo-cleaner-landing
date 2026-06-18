"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { faq } from "@/content/product";

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} index="09 / Вопросы" />
        </div>

        <Reveal>
          <Accordion.Root type="single" collapsible className="flex flex-col">
            {faq.items.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="border-b border-line first:border-t"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span className="text-h3 font-semibold text-fg">{item.q}</span>
                    <Plus
                      className="size-5 shrink-0 text-accent transition-transform duration-300 group-data-[state=open]:rotate-45"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="acc-content">
                  <p className="max-w-2xl pb-5 pr-8 text-[0.95rem] leading-relaxed text-fg-muted">
                    {item.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </Section>
  );
}
