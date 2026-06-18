import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,border-color,color] duration-200 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#1a0e03] hover:bg-accent-bright shadow-[0_8px_30px_-12px_rgba(255,122,26,0.7)]",
  secondary:
    "border border-line bg-surface/60 text-fg hover:border-fg-faint hover:bg-surface-2",
  ghost: "text-fg-muted hover:text-fg",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.95rem] sm:h-14 sm:px-8",
};

function buttonClassName(variant: Variant, size: Size, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface ButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {}

/** Кнопка с теми же вариантами, что и LinkButton. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      data-magnetic={variant === "primary" ? "" : undefined}
      className={buttonClassName(variant, size, className)}
      {...props}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps extends CommonProps {
  href: string;
  /** Внешняя ссылка — открывается в новой вкладке с безопасными атрибутами. */
  external?: boolean;
}

/** Ссылка-кнопка. Для внешних ссылок проставляет target/rel автоматически. */
export function LinkButton({
  href,
  external = false,
  variant = "primary",
  size = "md",
  className,
  children,
}: LinkButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      {...externalProps}
      data-magnetic={variant === "primary" ? "" : undefined}
      className={buttonClassName(variant, size, className)}
    >
      {children}
    </a>
  );
}
