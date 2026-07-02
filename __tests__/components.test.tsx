import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import React from 'react';
import Navbar from '@/components/Navbar';
import StageCard from '@/components/StageCard';
import MoveHistory from '@/components/MoveHistory';
import SectionCard from '@/components/SectionCard';
import TestPanel from '@/components/TestPanel';
import BotCommentary from '@/components/BotCommentary';
import { Section, Lesson } from '@/types';
import { defaultProgress } from '@/lib/store';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
}));

vi.mock('@/lib/store', () => ({
  defaultProgress: { completedLessons: [], passedTests: [], movesPlayed: {} },
}));

describe('Navbar', () => {
  it('renders nav link labels', () => {
    render(React.createElement(Navbar));
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Lessons').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Roadmap').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Analysis').length).toBeGreaterThanOrEqual(1);
  });

  it('renders the brand name', () => {
    render(React.createElement(Navbar));
    expect(screen.getByText('LearnChess')).toBeDefined();
  });
});

describe('StageCard', () => {
  const basic = {
    number: 1,
    lessonId: 'lesson1',
    sectionId: 'tactics',
    title: 'Forking Knights',
    difficulty: 'beginner' as const,
    sectionTitle: 'Tactics',
    sectionIcon: '⚔️',
    lessonCompleted: false,
    testPassed: false,
  };

  it('renders title', () => {
    render(React.createElement(StageCard, basic));
    expect(screen.getByText('Forking Knights')).toBeDefined();
  });

  it('shows test passed icon in test column', () => {
    render(React.createElement(StageCard, { ...basic, testPassed: true }));
    // Test column shows ✅, lesson column shows ◻️
    expect(screen.getByText('✅')).toBeDefined();
    expect(screen.getByText('◻️')).toBeDefined();
  });

  it('shows lesson done when only lesson completed', () => {
    render(React.createElement(StageCard, { ...basic, lessonCompleted: true }));
    expect(screen.getByText('Lesson done')).toBeDefined();
  });

  it('shows complete when both done', () => {
    render(React.createElement(StageCard, { ...basic, lessonCompleted: true, testPassed: true }));
    expect(screen.getByText('Complete')).toBeDefined();
  });

  it('shows available when nothing done', () => {
    render(React.createElement(StageCard, basic));
    expect(screen.getByText('Available')).toBeDefined();
  });
});

describe('MoveHistory', () => {
  const moves = [
    { san: 'e4', isBot: false },
    { san: 'e5', isBot: true },
    { san: 'Nf3', isBot: false },
  ];

  it('renders move list', () => {
    const { container } = render(React.createElement(MoveHistory, { moves }));
    expect(container.querySelectorAll('div').length).toBeGreaterThan(0);
  });

  it('handles empty moves', () => {
    const { container } = render(React.createElement(MoveHistory, { moves: [] }));
    expect(container.querySelectorAll('div').length).toBeGreaterThan(0);
  });
});

describe('BotCommentary', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders text with typewriter effect', () => {
    render(React.createElement(BotCommentary, { text: 'Good move!' }));
    act(() => { vi.advanceTimersByTime(100); });
    expect(screen.getByText(/Good move/)).toBeDefined();
  });

  it('renders hint text', () => {
    render(React.createElement(BotCommentary, { text: 'Think about forks.', isTyping: false }));
    expect(screen.getByText('Think about forks.')).toBeDefined();
  });

  it('renders nothing when no text', () => {
    const { container } = render(React.createElement(BotCommentary, {}));
    expect(container.firstChild).toBeNull();
  });

  it('renders coach label', () => {
    render(React.createElement(BotCommentary, { text: 'Hi', isTyping: false }));
    expect(screen.getByText('Coach')).toBeDefined();
  });
});

describe('SectionCard', () => {
  const section: Section = {
    id: 'tactics',
    title: 'Tactics',
    description: 'Learn tactical patterns',
    icon: '⚔️',
    lessonIds: ['fork1', 'fork2'],
    order: 1,
    color: '#ff6',
  };

  const lessons: Lesson[] = [
    { id: 'fork1', sectionId: 'tactics', title: 'Forks', description: 'Fork pieces', difficulty: 'beginner', startingFen: '', userColor: 'w', estimatedMinutes: 5, mainLine: [] },
    { id: 'fork2', sectionId: 'tactics', title: 'Double Attacks', description: '', difficulty: 'intermediate', startingFen: '', userColor: 'w', estimatedMinutes: 10, mainLine: [] },
  ];

  it('renders section info', () => {
    render(React.createElement(SectionCard, { section, lessons, progress: defaultProgress }));
    expect(screen.getByText('Tactics')).toBeDefined();
    expect(screen.getByText('Learn tactical patterns')).toBeDefined();
  });

  it('shows lesson count', () => {
    render(React.createElement(SectionCard, { section, lessons, progress: defaultProgress }));
    expect(screen.getByText('2 lessons')).toBeDefined();
  });
});

describe('TestPanel', () => {
  it('renders prompt and progress', () => {
    render(React.createElement(TestPanel, {
      prompt: 'Find the fork',
      moveCount: 1,
      totalMoves: 3,
      passed: false,
      failed: false,
      onRetry: vi.fn(),
      onBack: vi.fn(),
    }));
    expect(screen.getByText('Find the fork')).toBeDefined();
    expect(screen.getByText('1/3')).toBeDefined();
  });

  it('shows passed state', () => {
    render(React.createElement(TestPanel, {
      prompt: '',
      moveCount: 3,
      totalMoves: 3,
      passed: true,
      failed: false,
      onRetry: vi.fn(),
      onBack: vi.fn(),
    }));
    expect(screen.getByText('Test Passed! 🎉')).toBeDefined();
  });

  it('shows failed state', () => {
    render(React.createElement(TestPanel, {
      prompt: '',
      moveCount: 1,
      totalMoves: 3,
      passed: false,
      failed: true,
      onRetry: vi.fn(),
      onBack: vi.fn(),
    }));
    expect(screen.getByText('Wrong Move')).toBeDefined();
  });

  it('shows next stage button when handler provided', () => {
    render(React.createElement(TestPanel, {
      prompt: '',
      moveCount: 3,
      totalMoves: 3,
      passed: true,
      failed: false,
      onRetry: vi.fn(),
      onBack: vi.fn(),
      onNextStage: vi.fn(),
    }));
    expect(screen.getByText('Next Stage →')).toBeDefined();
  });
});
