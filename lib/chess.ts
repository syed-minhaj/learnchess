import { Chess } from 'chess.js';

export function createGame(fen?: string): Chess {
  try {
    return fen ? new Chess(fen) : new Chess();
  } catch {
    return new Chess();
  }
}

export function makeMove(chess: Chess, from: string, to: string, promotion?: string): { success: boolean; fen: string; san: string; gameOver: boolean } {
  try {
    const move = chess.move({ from, to, promotion: promotion || 'q' });
    return {
      success: true,
      fen: chess.fen(),
      san: move.san,
      gameOver: chess.isGameOver(),
    };
  } catch {
    return {
      success: false,
      fen: chess.fen(),
      san: '',
      gameOver: chess.isGameOver(),
    };
  }
}

export function makeSanMove(chess: Chess, san: string): { success: boolean; fen: string; san: string; gameOver: boolean } {
  try {
    const move = chess.move(san);
    return {
      success: true,
      fen: chess.fen(),
      san: move.san,
      gameOver: chess.isGameOver(),
    };
  } catch {
    return {
      success: false,
      fen: chess.fen(),
      san: '',
      gameOver: chess.isGameOver(),
    };
  }
}

export function getLegalMoves(chess: Chess, square: string): string[] {
  const s = square as any;
  try {
    const moves = chess.moves({ square: s, verbose: true });
    return moves.map((m) => m.to);
  } catch {
    return [];
  }
}

export function cloneGame(chess: Chess): Chess {
  return new Chess(chess.fen());
}

export function moveMatches(clone: Chess, move: { from: string; to: string; promotion?: string }): boolean {
  try {
    clone.move({ from: move.from, to: move.to, promotion: move.promotion || 'q' });
    return true;
  } catch {
    return false;
  }
}
