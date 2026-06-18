import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
  /** Порядковый индекс секции для технической маркировки. */
  index?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  index,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-accent" />
        <span className="mono-label text-accent">{eyebrow}</span>
        {index && (
          <span className="mono-label ml-auto hidden sm:inline">{index}</span>
        )}
      </div>
      <h2 className="text-h2 font-extrabold text-fg max-w-[20ch]">{title}</h2>
      {intro && (
        <p
          className={cn(
            "text-lead text-fg-muted max-w-[58ch]",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
