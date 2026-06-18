"use client";

import { useState } from "react";
import { ArrowUpRight, Check, CircleHelp, RotateCcw, TriangleAlert, XCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { compatibility, compatResults, type CompatResult } from "@/content/product";
import { evaluate, type Selections } from "@/lib/compatibility";
import { ContactModal } from "@/components/ui/ContactModal";
import { contactForm } from "@/content/brand";
import { cn } from "@/lib/utils";

const resultStyles: Record<
  CompatResult["tone"],
  { icon: typeof Check; ring: string; text: string }
> = {
  possible: { icon: Check, ring: "border-emerald-500/40 bg-emerald-500/5", text: "text-emerald-400" },
  clarify: { icon: CircleHelp, ring: "border-accent/40 bg-accent/5", text: "text-accent" },
  check: { icon: TriangleAlert, ring: "border-accent/40 bg-accent/5", text: "text-accent" },
  out: { icon: XCircle, ring: "border-red-500/40 bg-red-500/5", text: "text-red-400" },
};

export function Compatibility() {
  const [sel, setSel] = useState<Selections>({});
  const tone = evaluate(sel);
  const result = tone ? compatResults[tone] : null;

  const choose = (step: keyof Selections, option: string) =>
    setSel((prev) => ({ ...prev, [step]: option }));

  const answered = Object.keys(sel).length;
  const ResultIcon = result ? resultStyles[result.tone].icon : null;

  return (
    <Section id="compatibility">
      <SectionHeading
        eyebrow={compatibility.eyebrow}
        title={compatibility.title}
        intro={compatibility.intro}
        index="04 / Совместимость"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        {/* Шаги */}
        <div className="flex flex-col gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line">
          {compatibility.steps.map((step, i) => (
            <fieldset key={step.id} className="bg-surface p-5 sm:p-6">
              <legend className="contents">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-h3 font-bold text-fg">{step.question}</span>
                </div>
              </legend>
              <p className="mt-1 pl-7 text-sm text-fg-faint">{step.hint}</p>
              <div className="mt-4 flex flex-wrap gap-2 pl-7">
                {step.options.map((opt) => {
                  const selected = sel[step.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => choose(step.id, opt.id)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition-colors",
                        selected
                          ? "border-accent bg-accent text-[#1a0e03] font-semibold"
                          : "border-line bg-ink-2 text-fg-muted hover:border-fg-faint hover:text-fg",
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        {/* Результат */}
        <div className="lg:sticky lg:top-24">
          <div
            className={cn(
              "rounded-[var(--radius-card)] border p-6 transition-colors",
              result ? resultStyles[result.tone].ring : "border-line bg-surface",
            )}
            role="status"
            aria-live="polite"
          >
            {result && ResultIcon ? (
              <>
                <ResultIcon
                  className={cn("size-7", resultStyles[result.tone].text)}
                  aria-hidden
                />
                <h3 className="mt-4 text-h3 font-bold text-fg">{result.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{result.text}</p>
                <ContactModal>
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-bright"
                  >
                    {contactForm.triggerLabel}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </button>
                </ContactModal>
                <button
                  type="button"
                  onClick={() => setSel({})}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-fg-faint hover:text-fg"
                >
                  <RotateCcw className="size-3.5" aria-hidden />
                  Сбросить
                </button>
              </>
            ) : (
              <>
                <span className="mono-label text-fg-faint">Результат</span>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  Ответьте на четыре вопроса — покажем предварительный ориентир по
                  совместимости. Отвечено: {answered} из {compatibility.steps.length}.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
