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
      className={`rounded-xl border border-zinc-700/50 bg-zinc-800/60 p-5 backdrop-blur-sm ${
        hover ? 'cursor-pointer transition-all duration-200 hover:border-emerald-600/50 hover:bg-zinc-800 hover:shadow-lg hover:shadow-emerald-900/10' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
