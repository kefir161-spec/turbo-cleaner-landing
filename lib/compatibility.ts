import type { CompatStepId, CompatResult } from "@/content/types";

export type Selections = Partial<Record<CompatStepId, string>>;

/**
 * Осторожная оценка совместимости по базовым параметрам.
 * Никогда не выдаёт «100% подходит» — только предварительный ориентир.
 */
export function evaluate(s: Selections): CompatResult["tone"] | null {
  const { machine, filter, diameter, air } = s;
  if (!machine || !filter || !diameter || !air) return null;

  // Жёсткий выход за диапазон.
  if (diameter === "less" || diameter === "more" || air === "low") return "out";

  // Неизвестный/другой тип фильтра — нужно свериться с руководством.
  if (filter === "other") return "check";

  // Не хватает данных для оценки.
  if (diameter === "unknown" || air === "near" || air === "unknown" || machine === "other")
    return "clarify";

  // Базовые параметры в пределах заявленного диапазона.
  return "possible";
}
