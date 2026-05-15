type TraitMeterProps = {
  label: string;
  value: number;
  max?: number;
};

export function TraitMeter({ label, value, max = 5 }: TraitMeterProps) {
  const percent = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.08em] text-ink/70">
        <span>{label}</span>
        <span>
          {value}/{max}
        </span>
      </div>
      <div className="h-3 rounded-full border-2 border-ink bg-cream">
        <div
          className="h-full rounded-full border-r-2 border-ink bg-grape"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
