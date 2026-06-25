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
};

export default function ChessBoard({
  game,
  onMove,
  orientation = 'white',
  disabled = false,
  lastMove = null,
  flipped = false,
  userColor,
}: ChessBoardProps) {
  const boardOrientation = flipped ? (orientation === 'white' ? 'black' : 'white') : orientation;

  const squareStyles = useMemo(() => {
    const styles: Record<string, React.CSSProperties> = {};
    if (lastMove) {
      styles[lastMove.from] = { backgroundColor: 'rgba(155, 199, 0, 0.41)' };
      styles[lastMove.to] = { backgroundColor: 'rgba(155, 199, 0, 0.41)' };
    }
    return styles;
  }, [lastMove]);

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
      <div className="aspect-square overflow-hidden rounded-lg shadow-lg shadow-black/30">
        <Chessboard
          options={{
            id: 'chess-board',
            position: game.fen(),
            boardOrientation,
            allowDragging: !disabled,
            canDragPiece,
            onPieceDrop,
            squareStyles,
            showAnimations: false,
            showNotation: true,
            darkSquareStyle: { backgroundColor: '#769656' },
            lightSquareStyle: { backgroundColor: '#eeeed2' },
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
