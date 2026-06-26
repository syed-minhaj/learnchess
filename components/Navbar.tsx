'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/', label: 'Home', icon: '♟' },
  { href: '/sections', label: 'Lessons', icon: '📖' },
  { href: '/roadmap', label: 'Roadmap', icon: '🗺️' },
  { href: '/analysis', label: 'Analysis', icon: '🔍' },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop top bar */}
      <nav className="hidden border-b border-border bg-elevated md:block">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-base font-semibold text-fg">
            <span className="text-lg">♟</span>
            <span>LearnChess</span>
          </Link>

          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`rounded-[12px] px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(tab.href)
                    ? 'bg-accent/15 text-accent'
                    : 'text-muted hover:bg-elevated hover:text-fg'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-elevated md:hidden">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-2 text-xs font-medium transition-colors ${
                isActive(tab.href) ? 'text-accent' : 'text-muted'
              }`}
            >
              <span className="text-base">{tab.icon}</span>
              <span>{tab.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
