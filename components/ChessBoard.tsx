'use client';

import { useCallback, useMemo, useState } from 'react';
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

const dotStyle = 'radial-gradient(circle at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 22%, transparent 23%, transparent 100%)';
const ringStyle = 'radial-gradient(circle at center, transparent 0%, transparent 62%, rgba(0,0,0,0.25) 63%, rgba(0,0,0,0.25) 100%)';

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
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);

  const boardOrientation = flipped ? (orientation === 'white' ? 'black' : 'white') : orientation;

  const legalSquares = useMemo(() => {
    if (!selectedSquare) return [];
    return getLegalMoves(game, selectedSquare);
  }, [game, selectedSquare]);

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
    if (selectedSquare && !disabled) {
      styles[selectedSquare] = {
        ...styles[selectedSquare],
        backgroundColor: 'rgba(246, 246, 105, 0.55)',
      };
      for (const sq of legalSquares) {
        const piece = game.get(sq as any);
        styles[sq] = {
          ...styles[sq],
          background: piece ? ringStyle : dotStyle,
        };
      }
    }
    return styles;
  }, [lastMove, hintMove, selectedSquare, legalSquares, disabled, game]);

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
      setSelectedSquare(null);
      onMove(sourceSquare, targetSquare);
      return true;
    },
    [disabled, game, onMove]
  );

  const onSquareClick = useCallback(
    ({ square }: { square: string }) => {
      if (disabled) return;
      const piece = game.get(square as any);
      const turn = game.turn();
      const activeColor = userColor ?? (orientation === 'white' ? 'w' : 'b');

      if (selectedSquare) {
        if (square === selectedSquare) {
          setSelectedSquare(null);
          return;
        }
        if (legalSquares.includes(square)) {
          setSelectedSquare(null);
          onMove(selectedSquare, square);
          return;
        }
      }

      if (piece && piece.color === turn && piece.color === activeColor) {
        setSelectedSquare(square);
      } else {
        setSelectedSquare(null);
      }
    },
    [disabled, game, selectedSquare, legalSquares, onMove, userColor, orientation]
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
            onSquareClick,
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
