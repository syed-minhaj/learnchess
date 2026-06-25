import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
};

export default function Card({ children, className = '', onClick, hover = false }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-[12px] border border-border bg-elevated p-5 ${
        hover ? 'cursor-pointer transition-all duration-200 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
