'use client';

import { useCallback, useMemo } from 'react';
import { Chessboard } from 'react-chessboard';
import { getLegalMoves } from '@/lib/chess';
import { Chess } from 'chess.js';

type ChessBoardProps = {
  game: Chess;
  onMove: (from: string, to: string) => void;
  orientation?: 'white' | 'black';
  disabled?: boolean;
  lastMove?: { from: string; to: string } | null;
  flipped?: boolean;
  userColor?: 'w' | 'b';
  hintMove?: { from: string; to: string } | null;
};

export default function ChessBoard({
  game,
  onMove,
  orientation = 'white',
  disabled = false,
  lastMove = null,
  flipped = false,
  userColor,
  hintMove = null,
}: ChessBoardProps) {
  const boardOrientation = flipped ? (orientation === 'white' ? 'black' : 'white') : orientation;

  const squareStyles = useMemo(() => {
    const styles: Record<string, React.CSSProperties> = {};
    if (lastMove) {
      const highlight = 'rgba(246, 246, 105, 0.41)';
      styles[lastMove.from] = { backgroundColor: highlight };
      styles[lastMove.to] = { backgroundColor: highlight };
    }
    if (hintMove) {
      const hintColor = 'rgba(59, 122, 87, 0.35)';
      styles[hintMove.from] = { backgroundColor: hintColor };
      styles[hintMove.to] = { backgroundColor: hintColor };
    }
    return styles;
  }, [lastMove, hintMove]);

  const arrows = useMemo(() => {
    if (!hintMove) return [];
    return [{ startSquare: hintMove.from, endSquare: hintMove.to, color: '#3B7A57' }];
  }, [hintMove]);

  const canDragPiece = useCallback(
    ({ piece }: { piece: { pieceType: string } }) => {
      if (disabled) return false;
      const activeColor = userColor ?? (orientation === 'white' ? 'w' : 'b');
      const pieceColor = piece.pieceType[0];
      return pieceColor === activeColor;
    },
    [disabled, userColor, orientation]
  );

  const onPieceDrop = useCallback(
    ({ sourceSquare, targetSquare }: { sourceSquare: string; targetSquare: string | null }) => {
      if (disabled || !targetSquare) return false;
      const legalMoves = getLegalMoves(game, sourceSquare);
      if (!legalMoves.includes(targetSquare)) return false;
      onMove(sourceSquare, targetSquare);
      return true;
    },
    [disabled, game, onMove]
  );

  return (
    <div className="mx-auto w-full max-w-[480px]">
      <div className="aspect-square overflow-hidden shadow-lg shadow-black/20">
        <Chessboard
          options={{
            id: 'chess-board',
            position: game.fen(),
            boardOrientation,
            allowDragging: !disabled,
            canDragPiece,
            onPieceDrop,
            squareStyles,
            arrows,
            showAnimations: false,
            showNotation: true,
            darkSquareStyle: { backgroundColor: '#779556' },
            lightSquareStyle: { backgroundColor: '#EBECD0' },
            boardStyle: {
              borderRadius: '0',
              boxShadow: 'none',
            },
          }}
        />
      </div>
    </div>
  );
}
