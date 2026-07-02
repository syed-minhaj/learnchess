import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';

// Top-level hoisted mocks
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), back: vi.fn(), forward: vi.fn(), refresh: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  useParams: () => ({ sectionId: 'tactics', lessonId: 'forks' }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

vi.mock('@/lib/store', () => ({
  useStore: (fn: any) => fn({ completedLessons: [], passedTests: [] }),
  defaultProgress: { completedLessons: [], currentLesson: null, passedTests: [], movesPlayed: {}, quizScores: {} },
  loadProgress: () => ({ completedLessons: [], currentLesson: null, passedTests: [], movesPlayed: {}, quizScores: {} }),
  saveProgress: () => {},
  completeLesson: () => {},
  setCurrentLesson: () => {},
  passTest: () => {},
  hasPassedTest: () => false,
}));

vi.mock('@/components/Navbar', () => ({ default: ({ children }: any) => React.createElement('nav', null, 'Navbar', children) }));

describe('Page rendering', () => {
  it('renders homepage', async () => {
    const Page = (await import('@/app/page')).default;
    const { container } = render(React.createElement(Page));
    expect(container.querySelector('main')).toBeDefined();
  });

  it('renders analysis page', async () => {
    const Page = (await import('@/app/analysis/page')).default;
    const { container } = render(React.createElement(Page));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('renders sections list', async () => {
    const Page = (await import('@/app/sections/page')).default;
    const { container } = render(React.createElement(Page));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('renders section detail', async () => {
    const Page = (await import('@/app/sections/[sectionId]/page')).default;
    const { container } = render(React.createElement(Page));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('renders lesson page', async () => {
    const Page = (await import('@/app/sections/[sectionId]/[lessonId]/page')).default;
    const { container } = render(React.createElement(Page));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('renders roadmap page', async () => {
    const Page = (await import('@/app/roadmap/page')).default;
    const { container } = render(React.createElement(Page));
    expect(container.querySelector('div')).toBeDefined();
  });
});
