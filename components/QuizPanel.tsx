'use client';

import { useMemo, useState } from 'react';
import { Chess } from 'chess.js';
import { QuizQuestion } from '@/types';
import { Chessboard } from 'react-chessboard';
import Button from './ui/Button';

type QuizPanelProps = {
  questions: QuizQuestion[];
  lessonId: string;
  onComplete: (score: number) => void;
};

export default function QuizPanel({ questions, lessonId, onComplete }: QuizPanelProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(0);

  const q = questions[index];
  if (!q) {
    onComplete(correct);
    return null;
  }

  const game = useMemo(() => new Chess(q.fen), [q.fen]);

  const handleSelect = (san: string) => {
    if (showResult) return;
    setSelected(san);
    setShowResult(true);
    if (san === q.correctSan) setCorrect((c) => c + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    if (index + 1 >= questions.length) {
      onComplete(correct + (selected === q.correctSan ? 1 : 0));
      return;
    }
    setIndex((i) => i + 1);
  };

  const isLast = index + 1 >= questions.length;

  return (
    <div className="rounded-[12px] border border-border bg-elevated p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-fg">
          Quiz — {index + 1}/{questions.length}
        </h3>
        <span className="text-xs text-muted">
          {correct}/{showResult ? (selected === q.correctSan ? correct : correct) : correct} correct
        </span>
      </div>

      <div className="mx-auto mb-4 max-w-[280px]">
        <div className="aspect-square overflow-hidden shadow-lg shadow-black/10">
          <Chessboard
            options={{
              id: `quiz-board-${lessonId}`,
              position: q.fen,
              boardOrientation: 'white',
              allowDragging: false,
              showAnimations: false,
              showNotation: true,
              darkSquareStyle: { backgroundColor: '#779556' },
              lightSquareStyle: { backgroundColor: '#EBECD0' },
              boardStyle: { borderRadius: '0', boxShadow: 'none' },
            }}
          />
        </div>
      </div>

      <p className="mb-3 text-sm text-fg">{q.prompt}</p>

      <div className="space-y-2">
        {q.options.map((opt) => {
          const isCorrect = opt.san === q.correctSan;
          const isSelected = opt.san === selected;
          let bg = 'bg-surface border-border hover:bg-elevated';
          if (showResult && isCorrect) bg = 'bg-success/15 border-success/40';
          else if (showResult && isSelected && !isCorrect) bg = 'bg-danger/15 border-danger/40';

          return (
            <button
              key={opt.san}
              onClick={() => handleSelect(opt.san)}
              disabled={showResult}
              className={`w-full rounded-[12px] border p-3 text-left text-sm transition-colors ${bg}`}
            >
              <span className="font-mono text-fg tabular-nums">{opt.san}</span>
              <span className="ml-2 text-muted">{opt.label}</span>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-3">
          {selected === q.correctSan ? (
            <p className="text-sm text-success">Correct! {q.explanation}</p>
          ) : (
            <p className="text-sm text-danger">Incorrect. {q.explanation}</p>
          )}
          <Button onClick={handleNext} size="sm" className="mt-2">
            {isLast ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </div>
      )}
    </div>
  );
}
