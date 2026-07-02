import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import {
  defaultProgress,
  loadProgress,
  saveProgress,
  completeLesson,
  setCurrentLesson,
  updateMovesPlayed,
  passTest,
  hasPassedTest,
  clearProgress,
} from '@/lib/store';

beforeEach(() => {
  localStorage.clear();
});

describe('defaultProgress', () => {
  it('has all required fields', () => {
    expect(defaultProgress).toEqual({
      completedLessons: [],
      currentLessonId: null,
      lessonMovesPlayed: {},
      quizScores: {},
      passedTests: [],
    });
  });
});

describe('loadProgress', () => {
  it('returns default when nothing is stored', () => {
    const progress = loadProgress();
    expect(progress).toEqual(defaultProgress);
  });

  it('returns stored progress', () => {
    const saved = {
      completedLessons: ['forks'],
      currentLessonId: 'pins',
      lessonMovesPlayed: { forks: 5 },
      quizScores: { forks: 3 },
      passedTests: ['forks'],
    };
    localStorage.setItem('chess-lessons-progress', JSON.stringify(saved));
    const loaded = loadProgress();
    expect(loaded.completedLessons).toEqual(['forks']);
    expect(loaded.currentLessonId).toBe('pins');
    expect(loaded.passedTests).toEqual(['forks']);
  });

  it('merges with defaults for partial data', () => {
    localStorage.setItem('chess-lessons-progress', JSON.stringify({ completedLessons: ['forks'] }));
    const loaded = loadProgress();
    expect(loaded.completedLessons).toEqual(['forks']);
    expect(loaded.passedTests).toEqual([]);
  });

  it('returns default on corrupt data', () => {
    localStorage.setItem('chess-lessons-progress', '{broken json');
    const loaded = loadProgress();
    expect(loaded.completedLessons).toEqual([]);
    expect(loaded.passedTests).toEqual([]);
  });

  it('handles localStorage.setItem throwing', () => {
    const setItem = Storage.prototype.setItem;
    Storage.prototype.setItem = vi.fn(() => { throw new Error('quota exceeded'); });
    const progress = { ...loadProgress(), completedLessons: ['test'] };
    saveProgress(progress);
    Storage.prototype.setItem = setItem;
  });

  it('returns default when window is undefined in loadProgress', () => {
    const windowSpy = vi.spyOn(globalThis as any, 'window', 'get');
    windowSpy.mockImplementation(() => undefined as any);
    const result = loadProgress();
    expect(result.completedLessons).toEqual([]);
    windowSpy.mockRestore();
  });

  it('handles saveProgress when window is undefined', () => {
    const windowSpy = vi.spyOn(globalThis as any, 'window', 'get');
    windowSpy.mockImplementation(() => undefined as any);
    saveProgress(defaultProgress);
    windowSpy.mockRestore();
  });
});

describe('saveProgress', () => {
  it('persists progress', () => {
    const progress = { ...defaultProgress, completedLessons: ['forks'] };
    saveProgress(progress);
    const raw = localStorage.getItem('chess-lessons-progress');
    expect(raw).toBe(JSON.stringify(progress));
  });
});

describe('completeLesson', () => {
  it('adds lesson to completed', () => {
    completeLesson('forks');
    const progress = loadProgress();
    expect(progress.completedLessons).toContain('forks');
  });

  it('is idempotent', () => {
    completeLesson('forks');
    completeLesson('forks');
    const progress = loadProgress();
    expect(progress.completedLessons.filter((id) => id === 'forks')).toHaveLength(1);
  });

  it('clears currentLessonId if matching', () => {
    setCurrentLesson('forks');
    completeLesson('forks');
    const progress = loadProgress();
    expect(progress.currentLessonId).toBeNull();
  });

  it('clears lessonMovesPlayed', () => {
    setCurrentLesson('forks');
    updateMovesPlayed('forks', 5);
    completeLesson('forks');
    const progress = loadProgress();
    expect(progress.lessonMovesPlayed['forks']).toBeUndefined();
  });
});

describe('setCurrentLesson', () => {
  it('sets the current lesson', () => {
    setCurrentLesson('forks');
    const progress = loadProgress();
    expect(progress.currentLessonId).toBe('forks');
  });

  it('initializes movesPlayed to 0', () => {
    setCurrentLesson('forks');
    const progress = loadProgress();
    expect(progress.lessonMovesPlayed['forks']).toBe(0);
  });
});

describe('updateMovesPlayed', () => {
  it('updates the move count', () => {
    setCurrentLesson('forks');
    updateMovesPlayed('forks', 3);
    const progress = loadProgress();
    expect(progress.lessonMovesPlayed['forks']).toBe(3);
  });
});

describe('passTest / hasPassedTest', () => {
  it('marks test as passed', () => {
    passTest('forks');
    expect(hasPassedTest('forks')).toBe(true);
  });

  it('returns false for tests not passed', () => {
    expect(hasPassedTest('nonexistent')).toBe(false);
  });

  it('is idempotent', () => {
    passTest('forks');
    passTest('forks');
    const progress = loadProgress();
    expect(progress.passedTests.filter((id) => id === 'forks')).toHaveLength(1);
  });
});

describe('clearProgress', () => {
  it('resets to defaults', () => {
    completeLesson('forks');
    passTest('forks');
    clearProgress();
    const progress = loadProgress();
    expect(progress.completedLessons).toEqual([]);
    expect(progress.passedTests).toEqual([]);
  });
});
