type TraitMeterProps = {
  label: string;
  value: number;
  max?: number;
};

export function TraitMeter({ label, value, max = 5 }: TraitMeterProps) {
  const percent = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-normal uppercase tracking-[0.14em] text-ivory/60">
        <span>{label}</span>
        <span>
          {value}/{max}
        </span>
      </div>
      <div className="h-3 rounded-full border border-ivory/25 bg-navy">
        <div
          className="h-full rounded-full border-r border-ivory/30 bg-cork"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
