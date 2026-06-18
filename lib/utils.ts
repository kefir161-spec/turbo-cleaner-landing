type ClassValue = string | number | false | null | undefined;

/** Минималистичный объединитель классов без лишних зависимостей. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
