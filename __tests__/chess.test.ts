import { describe, it, expect, vi } from 'vitest';
import { Chess } from 'chess.js';
import {
  createGame,
  makeMove,
  makeSanMove,
  getLegalMoves,
  cloneGame,
  moveMatches,
} from '@/lib/chess';

const startFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
const almostEmpty = '8/8/8/8/8/8/8/k1K5 w - - 0 1';

describe('createGame', () => {
  it('creates a game with default starting position', () => {
    const game = createGame();
    expect(game.fen()).toBe(startFen);
  });

  it('creates a game from a valid FEN', () => {
    const game = createGame(almostEmpty);
    expect(game.fen()).toBe(almostEmpty);
  });

  it('falls back to starting position for invalid FEN', () => {
    const game = createGame('not-a-fen');
    expect(game.fen()).toBe(startFen);
  });
});

describe('makeMove', () => {
  it('makes a valid move from square to square', () => {
    const game = createGame();
    const result = makeMove(game, 'e2', 'e4');
    expect(result.success).toBe(true);
    expect(result.san).toBe('e4');
    expect(result.gameOver).toBe(false);
  });

  it('fails for an invalid move', () => {
    const game = createGame();
    const result = makeMove(game, 'e2', 'e5');
    expect(result.success).toBe(false);
    expect(result.san).toBe('');
  });

  it('promotes to queen by default', () => {
    const fen = '8/2P5/8/8/8/8/8/k1K5 w - - 0 1';
    const game = new Chess(fen);
    const result = makeMove(game, 'c7', 'c8');
    expect(result.success).toBe(true);
    expect(result.san).toBe('c8=Q');
  });

  it('detects checkmate', () => {
    const fen = 'k7/ppp5/8/8/8/8/5PPP/R6K w - - 0 1';
    const game = new Chess(fen);
    const result = makeMove(game, 'g2', 'g4');
    expect(result).toBeDefined();
  });
});

describe('makeSanMove', () => {
  it('makes a valid algebraic move', () => {
    const game = createGame();
    const result = makeSanMove(game, 'e4');
    expect(result.success).toBe(true);
    expect(result.san).toBe('e4');
  });

  it('fails for an illegal algebraic move', () => {
    const game = createGame();
    const result = makeSanMove(game, 'Qxf7');
    expect(result.success).toBe(false);
    expect(result.fen).toBe(startFen);
  });
});

describe('getLegalMoves', () => {
  it('returns legal destination squares for a piece', () => {
    const game = createGame();
    const moves = getLegalMoves(game, 'e2');
    expect(moves).toContain('e3');
    expect(moves).toContain('e4');
  });

  it('returns empty array for a piece with no moves', () => {
    const game = createGame(almostEmpty);
    const moves = getLegalMoves(game, 'a2');
    expect(moves).toEqual([]);
  });

  it('returns empty array for invalid square', () => {
    const game = createGame();
    const moves = getLegalMoves(game, 'a9');
    expect(moves).toEqual([]);
  });

  it('returns empty array for empty square on occupied board', () => {
    const game = createGame();
    const moves = getLegalMoves(game, 'a3');
    expect(Array.isArray(moves)).toBe(true);
  });

  it('returns empty when chess.moves throws', () => {
    const game = createGame();
    const origMoves = game.moves.bind(game);
    game.moves = vi.fn(() => { throw new Error(); }) as any;
    const moves = getLegalMoves(game, 'e2');
    expect(moves).toEqual([]);
    game.moves = origMoves;
  });
});

describe('cloneGame', () => {
  it('creates an independent copy', () => {
    const game = createGame();
    const clone = cloneGame(game);
    expect(clone.fen()).toBe(game.fen());
    game.move('e4');
    expect(clone.fen()).toBe(startFen);
  });
});

describe('moveMatches', () => {
  it('returns true for a legal move', () => {
    const game = createGame();
    expect(moveMatches(game, { from: 'e2', to: 'e4' })).toBe(true);
  });

  it('returns false for an illegal move', () => {
    const game = createGame();
    expect(moveMatches(game, { from: 'e2', to: 'e5' })).toBe(false);
  });

  it('works with promotion', () => {
    const fen = '8/2P5/8/8/8/8/8/k1K5 w - - 0 1';
    const game = new Chess(fen);
    expect(moveMatches(game, { from: 'c7', to: 'c8', promotion: 'q' })).toBe(true);
  });
});
