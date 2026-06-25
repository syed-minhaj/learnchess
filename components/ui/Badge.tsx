type BadgeProps = {
  children: string;
  variant?: 'beginner' | 'intermediate' | 'advanced' | 'default';
};

const colors: Record<string, string> = {
  beginner: 'bg-success/15 text-success border-success/30',
  intermediate: 'bg-warn/15 text-warn border-warn/30',
  advanced: 'bg-danger/15 text-danger border-danger/30',
  default: 'bg-elevated text-muted border-border',
};

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-[6px] border px-2.5 py-0.5 text-xs font-medium capitalize ${colors[variant] || colors.default}`}
    >
      {children}
    </span>
  );
}
