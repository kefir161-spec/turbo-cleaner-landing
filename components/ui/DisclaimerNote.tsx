"use client";

import { cn } from "@/lib/utils";
import { useProduct } from "@/lib/content-context";

export function DisclaimerNote({ className }: { className?: string }) {
  const { disclaimer } = useProduct();

  return (
    <p className={cn("text-xs leading-relaxed text-fg-faint", className)}>{disclaimer}</p>
  );
}
