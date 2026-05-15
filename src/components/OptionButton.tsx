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
      className={`group flex min-h-14 w-full items-center justify-between gap-3 rounded-[1.35rem] border-2 px-4 py-3 text-left font-sketch text-base font-bold transition duration-200 ${
        selected
          ? "translate-x-0.5 -translate-y-0.5 rotate-[-0.4deg] border-ink bg-butter shadow-sketch"
          : "border-ink/[0.55] bg-white/75 hover:-translate-y-0.5 hover:border-ink hover:bg-white"
      }`}
      aria-pressed={selected}
    >
      <span className="flex items-center gap-3">
        {icon ? <span className="text-grape">{icon}</span> : null}
        <span>{label}</span>
      </span>
      <span
        className={`grid size-7 place-items-center rounded-full border-2 border-ink transition ${
          selected ? "bg-leaf text-white" : "bg-cream text-transparent"
        }`}
      >
        <Check size={16} strokeWidth={3} />
      </span>
    </button>
  );
}
