"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, localeLabels, type AppLocale } from "@/i18n/routing";
import { useContent, useUi } from "@/lib/content-context";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale } = useContent();
  const pathname = usePathname();
  const router = useRouter();
  const { languageLabel } = useUi();

  const switchLocale = (next: AppLocale) => {
    if (next === locale) return;
    const segments = pathname.split("/").filter(Boolean);
    if (locales.includes(segments[0] as AppLocale)) {
      segments[0] = next;
    } else {
      segments.unshift(next);
    }
    router.push(`/${segments.join("/")}`);
  };

  return (
    <label className={cn("relative inline-flex items-center", className)}>
      <span className="sr-only">{languageLabel}</span>
      <Globe className="pointer-events-none absolute left-3 size-4 text-fg-faint" aria-hidden />
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value as AppLocale)}
        aria-label={languageLabel}
        className="appearance-none rounded-full border border-line bg-surface/60 py-2 pl-9 pr-8 text-sm text-fg-muted transition-colors hover:border-fg-faint hover:text-fg focus:border-accent focus:outline-none"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {localeLabels[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
