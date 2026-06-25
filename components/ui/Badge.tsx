type BadgeProps = {
  children: string;
  variant?: 'beginner' | 'intermediate' | 'advanced' | 'default';
};

const colors: Record<string, string> = {
  beginner: 'bg-emerald-900/50 text-emerald-300 border-emerald-700/50',
  intermediate: 'bg-amber-900/50 text-amber-300 border-amber-700/50',
  advanced: 'bg-red-900/50 text-red-300 border-red-700/50',
  default: 'bg-zinc-700 text-zinc-300 border-zinc-600',
};

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${colors[variant] || colors.default}`}
    >
      {children}
    </span>
  );
}
