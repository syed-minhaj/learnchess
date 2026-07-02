'use client';

import { UserProgress } from '@/types';

const STORAGE_KEY = 'chess-lessons-progress';

export const defaultProgress: UserProgress = {
  completedLessons: [],
  currentLessonId: null,
  lessonMovesPlayed: {},
  quizScores: {},
  passedTests: [],
};

function cloneProgress(p: UserProgress): UserProgress {
  return JSON.parse(JSON.stringify(p));
}

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return cloneProgress(defaultProgress);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return cloneProgress(defaultProgress);
    const parsed = JSON.parse(raw);
    return { ...cloneProgress(defaultProgress), ...parsed, quizScores: parsed.quizScores || {} };
  } catch {
    return cloneProgress(defaultProgress);
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}

export function completeLesson(lessonId: string): void {
  const progress = loadProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
  }
  delete progress.lessonMovesPlayed[lessonId];
  if (progress.currentLessonId === lessonId) {
    progress.currentLessonId = null;
  }
  saveProgress(progress);
}

export function setCurrentLesson(lessonId: string): void {
  const progress = loadProgress();
  progress.currentLessonId = lessonId;
  progress.lessonMovesPlayed[lessonId] = 0;
  saveProgress(progress);
}

export function updateMovesPlayed(lessonId: string, moves: number): void {
  const progress = loadProgress();
  progress.lessonMovesPlayed[lessonId] = moves;
  saveProgress(progress);
}

export function passTest(lessonId: string): void {
  const progress = loadProgress();
  if (!progress.passedTests.includes(lessonId)) {
    progress.passedTests.push(lessonId);
  }
  saveProgress(progress);
}

export function hasPassedTest(lessonId: string): boolean {
  return loadProgress().passedTests.includes(lessonId);
}

export function clearProgress(): void {
  saveProgress(defaultProgress);
}
