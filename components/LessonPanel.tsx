'use client';

import { Lesson, MoveRecord } from '@/types';
import MoveHistory from './MoveHistory';
import ProgressBar from './ui/ProgressBar';
import Button from './ui/Button';

type LessonPanelProps = {
  lesson: Lesson;
  moves: MoveRecord[];
  hint: string | null;
  isUserTurn: boolean;
  isComplete: boolean;
  onRequestHint: () => void;
  onNextLesson: (() => void) | null;
  onShowQuiz?: () => void;
  quizScore?: number;
  userExplanation?: string | null;
  botExplanation?: string | null;
};

export default function LessonPanel({
  lesson,
  moves,
  hint,
  isUserTurn,
  isComplete,
  onRequestHint,
  onNextLesson,
  onShowQuiz,
  quizScore,
  userExplanation,
  botExplanation,
}: LessonPanelProps) {

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-[20px] font-semibold text-fg">{lesson.title}</h2>
        <p className="mt-1 text-sm text-muted">{lesson.description}</p>
      </div>

      <ProgressBar
        value={moves.length}
        max={lesson.mainLine.length}
        label="Progress"
      />

      {isComplete && (
        <div className="rounded-[12px] border border-success/20 bg-success/10 p-4 text-center">
          <p className="text-[20px] font-semibold text-success">Lesson Complete!</p>
          <p className="mt-1 text-sm text-muted">
            You played through {moves.length} move{moves.length !== 1 ? 's' : ''}.
          </p>

          {quizScore !== undefined && (
            <p className="mt-1 text-sm text-warn">
              Quiz: {quizScore}/{lesson.quiz?.length || 0}
            </p>
          )}

          {onShowQuiz && (
            <Button onClick={onShowQuiz} variant="secondary" className="mt-3">
              Take Quiz
            </Button>
          )}

          {onNextLesson && (
            <Button onClick={onNextLesson} className="mt-2">
              Next Lesson →
            </Button>
          )}

          {!onNextLesson && (
            <p className="mt-2 text-xs text-muted">This is the last lesson in this section.</p>
          )}
        </div>
      )}

      {userExplanation && (
        <div className="rounded-[12px] border border-accent/20 bg-accent/10 p-3">
          <p className="text-xs font-medium text-accent">Your move</p>
          <p className="mt-0.5 text-sm text-fg">{userExplanation}</p>
        </div>
      )}

      {botExplanation && (
        <div className="rounded-[12px] border border-accent/20 bg-accent/5 p-3">
          <p className="text-xs font-medium text-accent">Coach</p>
          <p className="mt-0.5 text-sm text-fg">{botExplanation}</p>
        </div>
      )}

      {isUserTurn && !isComplete && (
        <div className="rounded-[12px] border border-border bg-elevated p-3 text-center text-sm text-accent">
          Your turn — make a move on the board.
        </div>
      )}

      {!isUserTurn && !isComplete && (
        <div className="rounded-[12px] border border-border bg-elevated p-3 text-center text-sm text-muted">
          Coach is thinking...
        </div>
      )}

      {hint && !isComplete && (
        <div className="rounded-[12px] border border-warn/20 bg-warn/10 p-3">
          <p className="text-xs font-medium text-warn">Hint</p>
          <p className="mt-0.5 text-sm text-fg">{hint}</p>
        </div>
      )}

      {isUserTurn && !isComplete && (
        <Button variant="ghost" size="sm" onClick={onRequestHint} className="self-start">
          Need a hint?
        </Button>
      )}

      <div>
        <h3 className="mb-2 text-sm font-medium text-muted">Move History</h3>
        <MoveHistory moves={moves} />
      </div>
    </div>
  );
}
