import { brand } from "@/content/brand";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Показать текстовый дескриптор под названием. */
  withDescriptor?: boolean;
  /** Только знак, без подписи. */
  markOnly?: boolean;
}

/**
 * Вымышленный бренд AERIX. Знак — турбинный вихрь (поток воздуха + вращение).
 * Монохромный: использует currentColor, акцентная середина — переменная темы.
 */
export function Logo({ className, withDescriptor = false, markOnly = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-7 w-7 shrink-0" />
      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span className="text-[1.05rem] font-extrabold tracking-[0.18em] text-fg">
            {brand.company}
          </span>
          {withDescriptor && (
            <span className="mt-1 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-fg-faint">
              {brand.descriptor}
            </span>
          )}
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      role="img"
      aria-label={`${brand.company} logo`}
    >
      <g fill="currentColor">
        <path d="M16 16C17 9.6 21 6.7 25 7.6C23.6 11.6 20.6 14 16 16Z" />
        <path d="M16 16C17 9.6 21 6.7 25 7.6C23.6 11.6 20.6 14 16 16Z" transform="rotate(120 16 16)" />
        <path d="M16 16C17 9.6 21 6.7 25 7.6C23.6 11.6 20.6 14 16 16Z" transform="rotate(240 16 16)" />
      </g>
      <circle cx="16" cy="16" r="2.1" className="fill-ink" />
      <circle cx="16" cy="16" r="1.15" className="fill-accent" />
    </svg>
  );
}
