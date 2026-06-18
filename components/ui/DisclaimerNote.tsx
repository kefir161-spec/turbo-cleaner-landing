import { Info } from "lucide-react";
import { disclaimer } from "@/content/product";
import { cn } from "@/lib/utils";

/** Обязательное примечание о продувке и повторном использовании элемента. */
export function DisclaimerNote({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "flex gap-3 rounded-2xl border border-line bg-surface/50 p-4 sm:p-5",
        className,
      )}
    >
      <Info className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
      <p className="text-sm leading-relaxed text-fg-muted">{disclaimer}</p>
    </aside>
  );
}
