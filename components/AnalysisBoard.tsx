'use client';

import { useCallback, useRef, useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { getLegalMoves } from '@/lib/chess';
import Button from './ui/Button';

export default function AnalysisBoard() {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [history, setHistory] = useState<string[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [status, setStatus] = useState('');
  const gameRef = useRef(game);

  const updateGame = useCallback((g: Chess) => {
    gameRef.current = g;
    setFen(g.fen());
    setHistory(g.history());
    if (g.isCheckmate()) setStatus('Checkmate!');
    else if (g.isDraw()) setStatus('Draw');
    else if (g.isCheck()) setStatus('Check');
    else setStatus(g.turn() === 'w' ? 'White to move' : 'Black to move');
  }, []);

  const canDragPiece = useCallback(
    () => true,
    []
  );

  const onPieceDrop = useCallback(
    ({ sourceSquare, targetSquare }: { sourceSquare: string; targetSquare: string | null }) => {
      if (!targetSquare) return false;
      const clone = new Chess(gameRef.current.fen());
      try {
        clone.move({ from: sourceSquare, to: targetSquare, promotion: 'q' });
        updateGame(clone);
        return true;
      } catch {
        return false;
      }
    },
    [updateGame]
  );

  const reset = () => {
    const g = new Chess();
    setGame(g);
    gameRef.current = g;
    setFen(g.fen());
    setHistory([]);
    setStatus('White to move');
  };

  const undo = () => {
    const g = new Chess(gameRef.current.fen());
    try {
      g.undo();
      updateGame(g);
    } catch {}
  };

  const copyFen = async () => {
    try {
      await navigator.clipboard.writeText(fen);
    } catch {}
  };

  const loadFen = () => {
    const input = prompt('Enter FEN:');
    if (!input) return;
    try {
      const g = new Chess(input);
      updateGame(g);
    } catch {
      alert('Invalid FEN');
    }
  };

  const flip = () => setFlipped((f) => !f);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-[20px] font-semibold text-fg">Analysis Board</h1>
        <p className="mt-1 text-sm text-muted">
          Set up positions, play moves, and analyze freely.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-center">
        <div className="w-full max-w-[480px]">
          <div className="aspect-square overflow-hidden shadow-lg shadow-black/20">
            <Chessboard
              options={{
                id: 'analysis-board',
                position: fen,
                boardOrientation: flipped ? 'black' : 'white',
                allowDragging: true,
                canDragPiece,
                onPieceDrop,
                showAnimations: false,
                showNotation: true,
                darkSquareStyle: { backgroundColor: '#779556' },
                lightSquareStyle: { backgroundColor: '#EBECD0' },
                boardStyle: { borderRadius: '0', boxShadow: 'none' },
              }}
            />
          </div>
        </div>

        <div className="flex w-full max-w-[320px] flex-col gap-4">
          <div className="rounded-[12px] border border-border bg-elevated p-4 text-center">
            <p className="text-sm font-medium text-fg">{status}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={reset}>New Game</Button>
            <Button size="sm" variant="secondary" onClick={undo}>Undo</Button>
            <Button size="sm" variant="ghost" onClick={flip}>
              Flip {flipped ? '⬜' : '⬛'}
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="ghost" onClick={copyFen}>Copy FEN</Button>
            <Button size="sm" variant="ghost" onClick={loadFen}>Load FEN</Button>
          </div>

          <div className="rounded-[12px] border border-border bg-elevated p-3">
            <h3 className="mb-2 text-xs font-medium text-muted">Move History</h3>
            <div className="max-h-40 overflow-y-auto">
              {history.length === 0 ? (
                <p className="text-xs text-muted/60">No moves yet.</p>
              ) : (
                <div className="font-mono text-xs text-fg tabular-nums">
                  {Array.from({ length: Math.ceil(history.length / 2) }, (_, i) => {
                    const w = history[i * 2];
                    const b = history[i * 2 + 1];
                    return (
                      <div key={i} className="flex gap-2 py-0.5">
                        <span className="w-6 text-muted">{i + 1}.</span>
                        <span>{w || ''}</span>
                        <span>{b || ''}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[12px] border border-border bg-elevated p-3">
            <h3 className="mb-1 text-xs font-medium text-muted">FEN</h3>
            <p className="break-all font-mono text-xs text-muted tabular-nums">{fen}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
