import { Lesson, TestScenario } from '@/types';
import { openingLessons } from './openings';
import { tacticLessons } from './tactics';
import { middlegameLessons } from './middlegame';
import { endgameLessons } from './endgame';
import { checkmateLessons } from './checkmates';
import { famousGameLessons } from './famous-games';
import { pawnStructureLessons } from './pawn-structures';
import { defenseLessons } from './defense';
import { testData } from './tests';

const registry: Record<string, Lesson[]> = {
  openings: openingLessons,
  tactics: tacticLessons,
  middlegame: middlegameLessons,
  endgame: endgameLessons,
  checkmates: checkmateLessons,
  'famous-games': famousGameLessons,
  'pawn-structures': pawnStructureLessons,
  defense: defenseLessons,
};

export function getLessonsBySection(sectionId: string): Lesson[] {
  return registry[sectionId] || [];
}

export function getAllLessons(): Lesson[] {
  return Object.values(registry).flat();
}

export function getLessonById(id: string): Lesson | undefined {
  return getAllLessons().find((l) => l.id === id);
}

export function getSectionLessons(sectionId: string): Lesson[] {
  return registry[sectionId] || [];
}

export function getTestForLesson(lessonId: string): TestScenario | undefined {
  return testData[lessonId];
}

export function getNextLessonId(lessonId: string): string | null {
  const ordered = getAllLessons();
  const idx = ordered.findIndex((l) => l.id === lessonId);
  if (idx < 0 || idx >= ordered.length - 1) return null;
  return ordered[idx + 1].id;
}
