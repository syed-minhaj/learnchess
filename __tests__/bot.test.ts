import { describe, it, expect } from 'vitest';
import { createLessonEngine, applyUserMove, applyBotMove, getHint } from '@/lib/bot';
import { Lesson } from '@/types';

const mockLesson: Lesson = {
  id: 'forks',
  sectionId: 'tactics',
  title: 'Forks',
  description: 'Test lesson',
  difficulty: 'beginner',
  startingFen: 'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK2R b KQkq - 0 4',
  userColor: 'b',
  estimatedMinutes: 10,
  mainLine: [
    { san: 'Ne4', explanation: 'Forking the bishop and pawn.', hint: 'Move your knight to e4.' },
    { san: 'dxe4', explanation: 'White captures.' },
  ],
};

const simpleLesson: Lesson = {
  id: 'simple',
  sectionId: 'tactics',
  title: 'Simple',
  description: 'Simple test',
  difficulty: 'beginner',
  startingFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  userColor: 'w',
  estimatedMinutes: 5,
  mainLine: [
    { san: 'e4', explanation: 'Good move.', hint: 'Push e4.' },
  ],
};

describe('createLessonEngine', () => {
  it('creates an engine with the lesson state', () => {
    const engine = createLessonEngine(mockLesson);
    expect(engine.moveIndex).toBe(0);
    expect(engine.moves).toEqual([]);
    expect(engine.isComplete).toBe(false);
    expect(engine.isUserTurn).toBe(true);
  });

  it('sets isUserTurn based on starting FEN turn', () => {
    const engine = createLessonEngine(simpleLesson);
    expect(engine.isUserTurn).toBe(true);
  });
});

describe('applyUserMove', () => {
  it('accepts a correct user move', () => {
    const engine = createLessonEngine(mockLesson);
    const result = applyUserMove(engine, mockLesson, 'f6', 'e4');
    expect(result.valid).toBe(true);
    expect(result.explanation).toBe(mockLesson.mainLine[0].explanation);
    expect(engine.moveIndex).toBe(1);
    expect(engine.isUserTurn).toBe(false);
  });

  it('rejects a wrong move and returns hint', () => {
    const engine = createLessonEngine(mockLesson);
    const result = applyUserMove(engine, mockLesson, 'b8', 'c6');
    expect(result.valid).toBe(false);
    expect(result.expectedSan).toBe('Ne4');
    expect(result.hint).toBeTruthy();
  });

  it('rejects move when lesson is complete', () => {
    const engine = createLessonEngine(mockLesson);
    engine.isComplete = true;
    const result = applyUserMove(engine, mockLesson, 'f6', 'e4');
    expect(result.valid).toBe(false);
  });

  it('rejects move when not user turn', () => {
    const engine = createLessonEngine(mockLesson);
    engine.isUserTurn = false;
    const result = applyUserMove(engine, mockLesson, 'f6', 'e4');
    expect(result.valid).toBe(false);
  });

  it('rejects when no expected move', () => {
    const engine = createLessonEngine(mockLesson);
    engine.moveIndex = 99;
    const result = applyUserMove(engine, mockLesson, 'f6', 'e4');
    expect(result.valid).toBe(false);
  });

  it('rejects when expected move parse fails', () => {
    const badLesson: Lesson = {
      ...mockLesson,
      mainLine: [{ san: 'Qh4', explanation: 'Does not exist here.' }],
    };
    const engine = createLessonEngine(badLesson);
    const result = applyUserMove(engine, badLesson, 'b8', 'c6');
    expect(result.valid).toBe(false);
  });

  it('rejects invalid algebraic input', () => {
    const engine = createLessonEngine(mockLesson);
    const result = applyUserMove(engine, mockLesson, 'f6', 'f7');
    expect(result.valid).toBe(false);
  });
});

describe('applyBotMove', () => {
  it('makes a bot move after user move', () => {
    const engine = createLessonEngine(mockLesson);
    applyUserMove(engine, mockLesson, 'f6', 'e4');
    const result = applyBotMove(engine, mockLesson);
    expect(result).not.toBeNull();
    expect(result!.san).toBe('dxe4');
    expect(engine.moveIndex).toBe(2);
    expect(engine.isComplete).toBe(true);
  });

  it('returns null when lesson is complete', () => {
    const engine = createLessonEngine(mockLesson);
    engine.isComplete = true;
    const result = applyBotMove(engine, mockLesson);
    expect(result).toBeNull();
  });

  it('returns null when not bot turn', () => {
    const engine = createLessonEngine(mockLesson);
    const result = applyBotMove(engine, mockLesson);
    expect(result).toBeNull();
  });

  it('returns null when no bot move', () => {
    const engine = createLessonEngine(mockLesson);
    engine.isUserTurn = false;
    engine.moveIndex = 99;
    const result = applyBotMove(engine, mockLesson);
    expect(result).toBeNull();
  });

  it('handles single-move lesson completion', () => {
    const engine = createLessonEngine(simpleLesson);
    applyUserMove(engine, simpleLesson, 'e2', 'e4');
    // Lesson is complete after user's single move; no bot move to apply
    expect(engine.isComplete).toBe(true);
    expect(applyBotMove(engine, simpleLesson)).toBeNull();
  });
});

describe('applyBotMove additional coverage', () => {
  it('handles multi-move lesson where bot plays twice consecutively', () => {
    // Lesson where: user moves (index 0), bot moves (index 1 B->W), bot moves again (index 2 B->B)
    const multiBotLesson: Lesson = {
      id: 'multi-bot',
      sectionId: 'tactics',
      title: 'Multi Bot',
      description: '',
      difficulty: 'beginner',
      startingFen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      userColor: 'b',
      estimatedMinutes: 5,
      mainLine: [
        { san: 'e5', explanation: 'User pushes.' },
        { san: 'Nf3', explanation: 'Bot develops.' },
        { san: 'Nc6', explanation: 'User develops.' },
      ],
    };
    const engine = createLessonEngine(multiBotLesson);
    applyUserMove(engine, multiBotLesson, 'e7', 'e5');
    // Bot plays Nf3
    applyBotMove(engine, multiBotLesson);
    expect(engine.currentHint).toBeNull();
    expect(engine.currentExplanation).toBeNull();
  });



  it('returns null when bot move throws', () => {
    const badLesson: Lesson = {
      id: 'bad-bot',
      sectionId: 'tactics',
      title: 'Bad Bot',
      description: '',
      difficulty: 'beginner',
      startingFen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      userColor: 'b',
      estimatedMinutes: 5,
      mainLine: [
        { san: 'e5', explanation: 'User push.' },
        { san: 'Qh4', explanation: 'Invalid move from this position.' },
      ],
    };
    const engine = createLessonEngine(badLesson);
    applyUserMove(engine, badLesson, 'e7', 'e5');
    // Bot tries Qh4 - should throw
    const result = applyBotMove(engine, badLesson);
    expect(result).toBeNull();
  });
});

describe('getHint', () => {
  it('returns hint for current move', () => {
    const engine = createLessonEngine(mockLesson);
    const hint = getHint(engine, mockLesson);
    expect(hint).toBe(mockLesson.mainLine[0].hint);
  });

  it('returns null when lesson is complete', () => {
    const engine = createLessonEngine(mockLesson);
    engine.isComplete = true;
    expect(getHint(engine, mockLesson)).toBeNull();
  });

  it('returns null when move has no hint', () => {
    const noHintLesson: Lesson = {
      ...mockLesson,
      mainLine: [{ san: 'Ne4', explanation: 'Test' }],
    };
    const engine = createLessonEngine(noHintLesson);
    expect(getHint(engine, noHintLesson)).toBeNull();
  });
});
