'use client';

import { useState } from 'react';
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

  const game = new Chess(q.fen);

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
    <div className="rounded-lg border border-zinc-700/50 bg-zinc-800/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-zinc-300">
          Quiz — {index + 1}/{questions.length}
        </h3>
        <span className="text-xs text-zinc-500">
          {correct}/{showResult ? (selected === q.correctSan ? correct : correct) : correct} correct
        </span>
      </div>

      <div className="mx-auto mb-4 max-w-[280px]">
        <div className="aspect-square overflow-hidden rounded-lg">
          <Chessboard
            options={{
              id: `quiz-board-${lessonId}`,
              position: q.fen,
              boardOrientation: 'white',
              allowDragging: false,
              showAnimations: false,
              showNotation: true,
              darkSquareStyle: { backgroundColor: '#769656' },
              lightSquareStyle: { backgroundColor: '#eeeed2' },
              boardStyle: { borderRadius: '0', boxShadow: 'none' },
            }}
          />
        </div>
      </div>

      <p className="mb-3 text-sm text-zinc-200">{q.prompt}</p>

      <div className="space-y-2">
        {q.options.map((opt) => {
          const isCorrect = opt.san === q.correctSan;
          const isSelected = opt.san === selected;
          let bg = 'bg-zinc-700/50 hover:bg-zinc-700 border-zinc-600/50';
          if (showResult && isCorrect) bg = 'bg-emerald-900/40 border-emerald-600/50';
          else if (showResult && isSelected && !isCorrect) bg = 'bg-red-900/40 border-red-600/50';

          return (
            <button
              key={opt.san}
              onClick={() => handleSelect(opt.san)}
              disabled={showResult}
              className={`w-full rounded-lg border p-3 text-left text-sm transition-colors ${bg}`}
            >
              <span className="font-mono text-zinc-300">{opt.san}</span>
              <span className="ml-2 text-zinc-400">{opt.label}</span>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-3">
          {selected === q.correctSan ? (
            <p className="text-sm text-emerald-400">Correct! {q.explanation}</p>
          ) : (
            <p className="text-sm text-red-400">Incorrect. {q.explanation}</p>
          )}
          <Button onClick={handleNext} size="sm" className="mt-2">
            {isLast ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </div>
      )}
    </div>
  );
}
