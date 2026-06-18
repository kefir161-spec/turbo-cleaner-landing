import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  /** Убрать боковые поля контейнера (для full-bleed секций). */
  bleed?: boolean;
  as?: "section" | "div";
}

export function Section({ id, className, children, bleed = false, as = "section" }: SectionProps) {
  const Tag = as;
  return (
    <Tag id={id} className={cn("relative py-[clamp(4rem,9vw,8.5rem)]", className)}>
      <div className={cn(!bleed && "container-page")}>{children}</div>
    </Tag>
  );
}
