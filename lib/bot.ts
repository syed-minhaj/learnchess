import { Chess } from 'chess.js';
import { Lesson, LessonMove, MoveRecord } from '@/types';
import { createGame, makeSanMove } from './chess';

export type LessonEngine = {
  game: Chess;
  moveIndex: number;
  moves: MoveRecord[];
  isComplete: boolean;
  currentExplanation: string | null;
  currentHint: string | null;
  isUserTurn: boolean;
};

export function createLessonEngine(lesson: Lesson): LessonEngine {
  const game = createGame(lesson.startingFen);
  const isUserTurn = game.turn() === lesson.userColor;
  return {
    game,
    moveIndex: 0,
    moves: [],
    isComplete: false,
    currentExplanation: null,
    currentHint: null,
    isUserTurn,
  };
}

export function applyUserMove(
  engine: LessonEngine,
  lesson: Lesson,
  from: string,
  to: string,
  promotion?: string
): { valid: boolean; expectedSan?: string; explanation?: string; hint?: string } {
  if (engine.isComplete) return { valid: false };
  if (!engine.isUserTurn) return { valid: false };

  const expectedMove = lesson.mainLine[engine.moveIndex];
  if (!expectedMove) return { valid: false };

  const testGame = createGame(engine.game.fen());
  try {
    const result = testGame.move({ from, to, promotion: promotion || 'q' });
    const userSan = result.san;

    const expectedTest = createGame(engine.game.fen());
    try {
      expectedTest.move(expectedMove.san);
    } catch {
      return { valid: false };
    }

    if (testGame.fen() === expectedTest.fen()) {
      engine.game.move({ from, to, promotion: promotion || 'q' });
      engine.moves.push({ san: userSan, isBot: false });
      engine.moveIndex++;
      engine.isComplete = engine.moveIndex >= lesson.mainLine.length;
      engine.isUserTurn = false;

      if (!engine.isComplete && engine.moveIndex < lesson.mainLine.length) {
        const botMove = lesson.mainLine[engine.moveIndex];
        engine.currentExplanation = botMove.explanation;
        engine.currentHint = null;
      }

      return { valid: true, explanation: expectedMove.explanation };
    }

    return {
      valid: false,
      expectedSan: expectedMove.san,
      hint: expectedMove.hint,
    };
  } catch {
    return {
      valid: false,
      expectedSan: expectedMove.san,
      hint: expectedMove.hint,
    };
  }
}

export function applyBotMove(
  engine: LessonEngine,
  lesson: Lesson
): { san: string; explanation: string } | null {
  if (engine.isComplete) return null;
  if (engine.isUserTurn) return null;

  const botMove = lesson.mainLine[engine.moveIndex];
  if (!botMove) return null;

  try {
    const result = engine.game.move(botMove.san);
    engine.moves.push({ san: result.san, isBot: true, explanation: botMove.explanation });
    engine.moveIndex++;
    engine.isComplete = engine.moveIndex >= lesson.mainLine.length;
    engine.isUserTurn = !engine.isComplete;

    if (!engine.isComplete && engine.isUserTurn) {
      const nextMove = lesson.mainLine[engine.moveIndex];
      engine.currentHint = nextMove.hint || null;
      engine.currentExplanation = null;
    } else if (!engine.isComplete) {
      const nextBotMove = lesson.mainLine[engine.moveIndex];
      engine.currentExplanation = nextBotMove.explanation;
    }

    return { san: result.san, explanation: botMove.explanation };
  } catch {
    return null;
  }
}

export function getHint(
  engine: LessonEngine,
  lesson: Lesson
): string | null {
  if (engine.isComplete) return null;
  const move = lesson.mainLine[engine.moveIndex];
  return move?.hint || null;
}
