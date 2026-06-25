type BadgeProps = {
  children: string;
  variant?: 'beginner' | 'intermediate' | 'advanced' | 'default';
};

const colors: Record<string, string> = {
  beginner: 'bg-accent/20 text-accent border-accent/30',
  intermediate: 'bg-warn/20 text-warn border-warn/30',
  advanced: 'bg-danger/20 text-danger border-danger/30',
  default: 'bg-bg-elevated text-text-secondary border-border',
};

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-[6px] border px-2.5 py-0.5 text-[12px] font-medium capitalize leading-[16px] ${colors[variant] || colors.default}`}
    >
      {children}
    </span>
  );
}
