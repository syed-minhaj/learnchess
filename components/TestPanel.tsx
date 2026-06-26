'use client';

import Button from './ui/Button';

type TestPanelProps = {
  prompt: string;
  moveCount: number;
  totalMoves: number;
  passed: boolean;
  failed: boolean;
  onRetry: () => void;
  onBack: () => void;
  onNextStage?: (() => void) | null;
};

export default function TestPanel({
  prompt,
  moveCount,
  totalMoves,
  passed,
  failed,
  onRetry,
  onBack,
  onNextStage,
}: TestPanelProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-lg">🎯</span>
          <h2 className="text-[20px] font-semibold text-fg">Test</h2>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{prompt}</p>
      </div>

      <div className="rounded-[12px] border border-border bg-elevated p-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Progress</span>
          <span className="font-medium text-fg">
            {moveCount}/{totalMoves}
          </span>
        </div>
        <div className="mt-2 flex gap-1">
          {Array.from({ length: totalMoves }).map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-colors ${
                i < moveCount
                  ? 'bg-success'
                  : i === moveCount && failed
                  ? 'bg-danger'
                  : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>

      {passed && (
        <div className="rounded-[12px] border border-success/20 bg-success/10 p-5 text-center">
          <p className="text-[22px] font-semibold text-success">Test Passed! 🎉</p>
          <p className="mt-1 text-sm text-muted">
            You successfully demonstrated the concept.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {onNextStage && (
              <Button onClick={onNextStage} className="w-full py-3 text-base font-semibold">
                Next Stage →
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={onBack}>
              Back to Roadmap
            </Button>
            <Button variant="ghost" size="sm" onClick={onRetry}>
              Retry Test
            </Button>
          </div>
        </div>
      )}

      {failed && !passed && (
        <div className="rounded-[12px] border border-danger/20 bg-danger/10 p-5 text-center">
          <p className="text-[22px] font-semibold text-danger">Wrong Move</p>
          <p className="mt-1 text-sm text-muted">
            That move doesn't match the expected idea.
          </p>
          <Button onClick={onRetry} className="mt-4 w-full py-3 text-base font-semibold">
            Retry Test
          </Button>
        </div>
      )}

      {!passed && !failed && (
        <div className="rounded-[12px] border border-border bg-elevated p-3 text-center text-sm text-accent">
          Make your move on the board.
        </div>
      )}
    </div>
  );
}
