import type { ReactNode } from "react";
import { Check } from "lucide-react";

type OptionButtonProps<T extends string> = {
  label: string;
  value: T;
  selected: boolean;
  icon?: ReactNode;
  onSelect: (value: T) => void;
};

export function OptionButton<T extends string>({
  label,
  value,
  selected,
  icon,
  onSelect,
}: OptionButtonProps<T>) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`group flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left font-body text-base font-normal transition duration-300 ease-out ${
        selected
          ? "scale-[1.015] border-cork bg-[#e6c99a] text-navy shadow-soft"
          : "border-ivory/25 bg-ivory/[0.045] text-ivory hover:-translate-y-0.5 hover:border-cork hover:bg-ivory/[0.08]"
      }`}
      aria-pressed={selected}
    >
      <span className="flex items-center gap-3">
        {icon ? <span className="text-cork">{icon}</span> : null}
        <span>{label}</span>
      </span>
      <span
        className={`grid size-7 place-items-center rounded-full border transition duration-300 ease-out ${
          selected ? "border-cork bg-cork text-navy" : "border-ivory/35 bg-transparent text-transparent"
        }`}
      >
        <Check size={16} strokeWidth={3} />
      </span>
    </button>
  );
}
