'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border bg-elevated">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-fg">
          <span>♟</span>
          <span>LearnChess</span>
        </Link>

        <div className="flex items-center gap-6">
          <NavLink href="/" active={pathname === '/'}>Home</NavLink>
          <NavLink href="/sections" active={pathname.startsWith('/sections')}>Lessons</NavLink>
          <NavLink href="/analysis" active={pathname === '/analysis'}>Analysis</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`text-sm transition-colors ${
        active ? 'text-accent font-medium' : 'text-muted hover:text-fg'
      }`}
    >
      {children}
    </Link>
  );
}
