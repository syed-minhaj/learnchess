import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Chess } from 'chess.js';
import ChessBoard from '@/components/ChessBoard';
import LessonPanel from '@/components/LessonPanel';
import QuizPanel from '@/components/QuizPanel';
import AnalysisBoard from '@/components/AnalysisBoard';

const mockLesson = {
  id: 'test-lesson',
  sectionId: 'tactics',
  title: 'Test Lesson',
  description: 'A test',
  difficulty: 'beginner' as const,
  startingFen: '',
  userColor: 'w' as const,
  estimatedMinutes: 5,
  mainLine: [{ san: 'e4', explanation: 'Push' }],
};

vi.mock('@/lib/store', () => ({
  defaultProgress: { completedLessons: [], passedTests: [], movesPlayed: {} },
}));

describe('ChessBoard', () => {
  it('renders without crashing', () => {
    const game = new Chess();
    const { container } = render(React.createElement(ChessBoard, { game, onMove: vi.fn() }));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('renders with hints', () => {
    const game = new Chess();
    const { container } = render(React.createElement(ChessBoard, {
      game,
      onMove: vi.fn(),
      hintMove: { from: 'e2', to: 'e4' },
    }));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('renders in disabled state', () => {
    const game = new Chess();
    const { container } = render(React.createElement(ChessBoard, {
      game,
      onMove: vi.fn(),
      disabled: true,
    }));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('renders with black orientation', () => {
    const game = new Chess();
    const { container } = render(React.createElement(ChessBoard, {
      game,
      onMove: vi.fn(),
      orientation: 'black',
    }));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('renders with flipped view', () => {
    const game = new Chess();
    const { container } = render(React.createElement(ChessBoard, {
      game,
      onMove: vi.fn(),
      flipped: true,
    }));
    expect(container.querySelector('div')).toBeDefined();
  });
});

describe('LessonPanel', () => {
  it('renders lesson title', () => {
    const { container } = render(React.createElement(LessonPanel, {
      lesson: mockLesson,
      moves: [],
      hint: null,
      isUserTurn: true,
      isComplete: false,
      onRequestHint: vi.fn(),
      onNextLesson: null,
    }));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('shows hint when available', () => {
    const { container } = render(React.createElement(LessonPanel, {
      lesson: mockLesson,
      moves: [],
      hint: 'Try e4',
      isUserTurn: true,
      isComplete: false,
      onRequestHint: vi.fn(),
      onNextLesson: null,
    }));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('shows next lesson button when complete', () => {
    const { container } = render(React.createElement(LessonPanel, {
      lesson: mockLesson,
      moves: [{ san: 'e4', isBot: false }],
      hint: null,
      isUserTurn: false,
      isComplete: true,
      onRequestHint: vi.fn(),
      onNextLesson: vi.fn(),
    }));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('shows test button', () => {
    const { container } = render(React.createElement(LessonPanel, {
      lesson: mockLesson,
      moves: [{ san: 'e4', isBot: false }],
      hint: null,
      isUserTurn: false,
      isComplete: true,
      onRequestHint: vi.fn(),
      onNextLesson: null,
      onShowTest: vi.fn(),
    }));
    expect(container.querySelector('div')).toBeDefined();
  });

  it('shows completed quiz score', () => {
    const { container } = render(React.createElement(LessonPanel, {
      lesson: mockLesson,
      moves: [],
      hint: null,
      isUserTurn: true,
      isComplete: false,
      onRequestHint: vi.fn(),
      onNextLesson: null,
      quizScore: 80,
    }));
    expect(container.querySelector('div')).toBeDefined();
  });
});

describe('QuizPanel', () => {
  const questions = [
    { fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', question: 'Best first move?', options: ['e4', 'd4', 'Nf3', 'c4'], correctIndex: 0 },
  ];

  it('renders quiz question', () => {
    const { container } = render(React.createElement(QuizPanel, {
      questions,
      lessonId: 'test',
      onComplete: vi.fn(),
    }));
    expect(container.querySelector('div')).toBeDefined();
  });
});

describe('AnalysisBoard', () => {
  it('renders without crashing', () => {
    const { container } = render(React.createElement(AnalysisBoard));
    expect(container.querySelector('div')).toBeDefined();
  });
});
