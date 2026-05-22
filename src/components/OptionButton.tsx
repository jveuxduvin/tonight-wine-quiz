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
      className={`group flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left font-body text-base font-normal transition duration-500 ease-out ${
        selected
          ? "scale-[1.012] border-cork bg-[#e6c99a] text-navy shadow-[0_18px_48px_rgba(202,160,100,0.16)]"
          : "border-ivory/25 bg-ivory/[0.045] text-ivory hover:-translate-y-1 hover:border-cork hover:bg-ivory/[0.08] hover:shadow-[0_14px_38px_rgba(0,0,0,0.16)]"
      }`}
      aria-pressed={selected}
    >
      <span className="flex items-center gap-3">
        {icon ? <span className="text-cork">{icon}</span> : null}
        <span>{label}</span>
      </span>
      <span
        className={`grid size-7 place-items-center rounded-full border transition duration-500 ease-out ${
          selected ? "border-cork bg-cork text-navy shadow-[0_0_18px_rgba(202,160,100,0.28)]" : "border-ivory/35 bg-transparent text-transparent"
        }`}
      >
        <Check size={16} strokeWidth={3} />
      </span>
    </button>
  );
}
