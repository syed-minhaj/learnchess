import { describe, it, expect } from 'vitest';
import { getLessonsBySection, getSectionLessons } from '@/data/registry';
import { Chess } from 'chess.js';
import { getAllLessons, getTestForLesson, getNextLessonId, getLessonById } from '@/data/registry';
import { sections } from '@/data/sections';

describe('sections integrity', () => {
  it('has 8 sections', () => {
    expect(sections).toHaveLength(8);
  });

  it('every section has a unique id', () => {
    const ids = sections.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every section has at least one lesson', () => {
    for (const section of sections) {
      expect(section.lessonIds.length).toBeGreaterThan(0);
    }
  });
});

describe('lesson registry', () => {
  it('contains exactly 48 lessons', () => {
    const lessons = getAllLessons();
    expect(lessons).toHaveLength(48);
  });

  it('every lesson has a unique id', () => {
    const lessons = getAllLessons();
    const ids = lessons.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every lesson has a valid sectionId', () => {
    const sectionIds = new Set(sections.map((s) => s.id));
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      expect(sectionIds.has(lesson.sectionId)).toBe(true);
    }
  });

  it('every lesson has mainLine with at least 1 move', () => {
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      expect(lesson.mainLine.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('every lesson references a valid startingFen', () => {
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      try {
        new Chess(lesson.startingFen);
      } catch {
        expect.fail(`Invalid FEN in lesson "${lesson.id}": ${lesson.startingFen}`);
      }
    }
  });

  it('every lesson move is playable from startingFen', () => {
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      const game = new Chess(lesson.startingFen);
      for (let i = 0; i < lesson.mainLine.length; i++) {
        const move = lesson.mainLine[i];
        try {
          const result = game.move(move.san);
          expect(result).toBeTruthy();
        } catch (e: any) {
          expect.fail(
            `Move ${i + 1} ("${move.san}") in lesson "${lesson.id}" is illegal: ${e.message}`
          );
        }
      }
    }
  });

  it('all moves have explanations', () => {
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      for (const move of lesson.mainLine) {
        expect(move.explanation).toBeTruthy();
      }
    }
  });

  it('every lesson in sections.lessonIds exists in the registry', () => {
    const lessonIds = new Set(getAllLessons().map((l) => l.id));
    for (const section of sections) {
      for (const id of section.lessonIds) {
        expect(lessonIds.has(id)).toBe(true);
      }
    }
  });
});

describe('getLessonById', () => {
  it('finds an existing lesson', () => {
    const lesson = getLessonById('forks');
    expect(lesson).toBeDefined();
    expect(lesson!.id).toBe('forks');
  });

  it('returns undefined for missing lesson', () => {
    expect(getLessonById('nonexistent')).toBeUndefined();
  });
});

describe('test data integrity', () => {
  const lessons = getAllLessons();

  it('every lesson has a test', () => {
    for (const lesson of lessons) {
      const test = getTestForLesson(lesson.id);
      expect(test).toBeDefined();
    }
  });

  it('every test has a valid FEN', () => {
    for (const lesson of lessons) {
      const test = getTestForLesson(lesson.id);
      if (!test) continue;
      try {
        new Chess(test.fen);
      } catch {
        expect.fail(`Invalid test FEN in "${lesson.id}": ${test.fen}`);
      }
    }
  });

  it('every test can be completed from start to finish', () => {
    for (const lesson of lessons) {
      const test = getTestForLesson(lesson.id);
      if (!test || test.root.length === 0) continue;

      const playPath = (nodes: { userMove: string; botResponse?: string; children?: any[] }[], fen: string): boolean => {
        for (const node of nodes) {
          const game = new Chess(fen);
          try { game.move(node.userMove); } catch { continue; }
          if (node.botResponse) {
            try { game.move(node.botResponse); } catch { continue; }
          }
          if (node.children && node.children.length > 0) {
            return playPath(node.children, game.fen());
          }
          return true;
        }
        return false;
      };

      if (!playPath(test.root, test.fen)) {
        expect.fail(`Test "${lesson.id}" has no playable path from start to finish`);
      }
    }
  });

  it('every test completes to a leaf (pass condition reachable)', () => {
    for (const lesson of lessons) {
      const test = getTestForLesson(lesson.id);
      if (!test || test.root.length === 0) continue;

      const hasLeaf = (nodes: any[]): boolean =>
        nodes.some((n) => !n.children || n.children.length === 0 || hasLeaf(n.children));

      if (!hasLeaf(test.root)) {
        expect.fail(`Test "${lesson.id}" has no leaf nodes — pass condition unreachable`);
      }
    }
  });

  it('every test prompt is non-empty', () => {
    const lessons = getAllLessons();
    for (const lesson of lessons) {
      const test = getTestForLesson(lesson.id);
      if (!test) continue;
      expect(test.prompt.length).toBeGreaterThan(0);
    }
  });

  it('every test has correct userColor matching the position', () => {
    for (const lesson of lessons) {
      const test = getTestForLesson(lesson.id);
      if (!test) continue;
      const game = new Chess(test.fen);
      const turn = game.turn();
      expect(test.userColor).toBe(turn);
    }
  });
});

describe('getNextLessonId', () => {
  it('returns the next lesson in global order', () => {
    const first = getNextLessonId('open-sicilian');
    expect(first).toBe('italian-game');
  });

  it('returns null for the last lesson', () => {
    const last = getNextLessonId('zugzwang');
    expect(last).toBeNull();
  });

  it('transitions between sections', () => {
    const between = getNextLessonId('queens-gambit');
    expect(between).toBe('forks');
  });
});

describe('global stage coverage', () => {
  it('every section lessonId has a matching lesson in the registry', () => {
    const allIds = new Set(getAllLessons().map((l) => l.id));
    const sectionIds = sections.flatMap((s) => s.lessonIds);
    expect(sectionIds.length).toBe(new Set(sectionIds).size);
    for (const id of sectionIds) {
      expect(allIds.has(id)).toBe(true);
    }
  });

  it('getLessonsBySection returns empty for unknown section', () => {
    const lessons = getLessonsBySection('unknown-section');
    expect(lessons).toEqual([]);
  });

  it('getSectionLessons returns empty for unknown section', () => {
    const lessons = getSectionLessons('unknown');
    expect(lessons).toEqual([]);
  });
});
