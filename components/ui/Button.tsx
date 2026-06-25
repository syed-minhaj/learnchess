import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed';
  const variants = {
    primary: 'rounded-[12px] bg-accent text-white hover:bg-accent-hover active:bg-accent-hover',
    secondary: 'rounded-[12px] bg-bg-elevated text-text-primary border border-border hover:bg-border active:opacity-80',
    ghost: 'rounded-[12px] text-text-secondary hover:text-text-primary hover:bg-bg-elevated',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-[13px]',
    md: 'px-4 py-2.5 text-[14px]',
    lg: 'px-6 py-3.5 text-[15px]',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
