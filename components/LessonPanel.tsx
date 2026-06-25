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
        <h2 className="text-xl font-bold text-white">{lesson.title}</h2>
        <p className="mt-1 text-sm text-zinc-400">{lesson.description}</p>
      </div>

      <ProgressBar
        value={moves.length}
        max={lesson.mainLine.length}
        label="Progress"
      />

      {isComplete && (
        <div className="rounded-lg border border-emerald-700/30 bg-emerald-900/20 p-4 text-center">
          <p className="text-lg font-bold text-emerald-400">Lesson Complete!</p>
          <p className="mt-1 text-sm text-zinc-400">
            You played through {moves.length} move{moves.length !== 1 ? 's' : ''}.
          </p>

          {quizScore !== undefined && (
            <p className="mt-1 text-sm text-amber-300">
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
            <p className="mt-2 text-xs text-zinc-500">This is the last lesson in this section.</p>
          )}
        </div>
      )}

      {userExplanation && (
        <div className="rounded-lg border border-emerald-700/30 bg-emerald-900/20 p-3">
          <p className="text-xs font-medium text-emerald-400">Your move</p>
          <p className="mt-0.5 text-sm text-emerald-200">{userExplanation}</p>
        </div>
      )}

      {botExplanation && (
        <div className="rounded-lg border border-blue-700/30 bg-blue-900/20 p-3">
          <p className="text-xs font-medium text-blue-400">Coach</p>
          <p className="mt-0.5 text-sm text-blue-200">{botExplanation}</p>
        </div>
      )}

      {isUserTurn && !isComplete && (
        <div className="rounded-lg border border-amber-700/30 bg-amber-900/20 p-3 text-center text-sm text-amber-300">
          Your turn — make a move on the board.
        </div>
      )}

      {!isUserTurn && !isComplete && (
        <div className="rounded-lg border border-zinc-700/30 bg-zinc-800/50 p-3 text-center text-sm text-zinc-400">
          Coach is thinking...
        </div>
      )}

      {hint && !isComplete && (
        <div className="rounded-lg border border-blue-700/30 bg-blue-900/20 p-3">
          <p className="text-xs font-medium text-blue-400">Hint</p>
          <p className="mt-0.5 text-sm text-blue-200">{hint}</p>
        </div>
      )}

      {isUserTurn && !isComplete && (
        <Button variant="ghost" size="sm" onClick={onRequestHint} className="self-start">
          Need a hint?
        </Button>
      )}

      <div>
        <h3 className="mb-2 text-sm font-medium text-zinc-400">Move History</h3>
        <MoveHistory moves={moves} />
      </div>
    </div>
  );
}
