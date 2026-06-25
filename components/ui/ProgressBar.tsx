type ProgressBarProps = {
  value: number;
  max: number;
  label?: string;
  className?: string;
};

export default function ProgressBar({ value, max, label, className = '' }: ProgressBarProps) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {label && <span className="text-xs text-zinc-400 whitespace-nowrap">{label}</span>}
      <div className="flex-1 h-2 rounded-full bg-zinc-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-zinc-500 w-8 text-right tabular-nums">{pct}%</span>
    </div>
  );
}
