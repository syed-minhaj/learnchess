'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Chess } from 'chess.js';
import { sections } from '@/data/sections';
import { getLessonById, getTestForLesson } from '@/data/registry';
import { MoveRecord } from '@/types';
import ChessBoard from '@/components/ChessBoard';
import LessonPanel from '@/components/LessonPanel';
import QuizPanel from '@/components/QuizPanel';
import { loadProgress, completeLesson, setCurrentLesson, hasPassedTest } from '@/lib/store';
import { useSpeech } from '@/hooks/useSpeech';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const sectionId = params.sectionId as string;
  const lessonId = params.lessonId as string;

  const lesson = useMemo(() => getLessonById(lessonId), [lessonId]);

  const [game, setGame] = useState<Chess | null>(null);
  const [moveIndex, setMoveIndex] = useState(0);
  const [moves, setMoves] = useState<MoveRecord[]>([]);
  const [hint, setHint] = useState<string | null>(null);
  const [hintMove, setHintMove] = useState<{ from: string; to: string } | null>(null);
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(null);
  const [userExplanation, setUserExplanation] = useState<string | null>(null);
  const [botExplanation, setBotExplanation] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState<number | undefined>(undefined);
  const [testPassed, setTestPassed] = useState(false);

  const gameRef = useRef<Chess | null>(null);

  const { speak, toggleMute, isMuted, isSpeaking, isSpeakingRef } = useSpeech();

  useEffect(() => {
    if (!lesson) return;
    const g = new Chess(lesson.startingFen);
    gameRef.current = g;
    setGame(g);
    setMoveIndex(0);
    setMoves([]);
    setHint(null);
    setHintMove(null);
    setIsComplete(false);
    setShowQuiz(false);
    setLastMove(null);
    setUserExplanation(null);
    setBotExplanation(null);
    setCurrentLesson(lesson.id);

    const initialUserTurn = g.turn() === lesson.userColor;
    setIsUserTurn(initialUserTurn);
    setHint(!initialUserTurn ? null : lesson.mainLine[0]?.hint || null);
    setQuizScore(loadProgress().quizScores[lesson.id]);
    setTestPassed(hasPassedTest(lesson.id));
  }, [lesson]);

  useEffect(() => {
    if (userExplanation && !isMuted) speak(userExplanation);
  }, [userExplanation]);

  useEffect(() => {
    if (botExplanation && !isMuted) speak(botExplanation);
  }, [botExplanation]);

  useEffect(() => {
    if (!lesson || !game || isUserTurn || isComplete) return;

    if (isSpeakingRef.current) return;

    const timer = setTimeout(() => {
      const g = gameRef.current;
      if (!g || !lesson) return;

      const idx = moveIndex;
      if (idx >= lesson.mainLine.length) return;

      const botMove = lesson.mainLine[idx];
      try {
        const result = g.move(botMove.san);
        gameRef.current = g;
        setGame(g);
        const newIdx = idx + 1;
        setMoveIndex(newIdx);
        setMoves((prev) => [...prev, { san: result.san, isBot: true, explanation: botMove.explanation }]);
        setBotExplanation(botMove.explanation || null);
        setLastMove({ from: result.from, to: result.to });

        if (newIdx >= lesson.mainLine.length) {
          setIsComplete(true);
          setIsUserTurn(false);
          completeLesson(lesson.id);
        } else {
          setIsUserTurn(true);
          setHint(lesson.mainLine[newIdx]?.hint || null);
        }
      } catch {}
    }, 500);

    return () => clearTimeout(timer);
  }, [lesson, game, isUserTurn, isComplete, moveIndex, isSpeaking]);

  const handleMove = useCallback(
    (from: string, to: string) => {
      if (!lesson || isComplete || !isUserTurn) return;
      const g = gameRef.current;
      if (!g) return;
      if (g.turn() !== lesson.userColor) return;

      const idx = moveIndex;
      if (idx >= lesson.mainLine.length) return;

      const expectedMove = lesson.mainLine[idx];
      const testGame = new Chess(g.fen());
      try {
        testGame.move({ from, to, promotion: 'q' });
        const expectedTest = new Chess(g.fen());
        expectedTest.move(expectedMove.san);

        if (testGame.fen() !== expectedTest.fen()) {
          setHint(expectedMove.hint || 'Try a different move.');
          return;
        }

        const result = g.move({ from, to, promotion: 'q' });
        gameRef.current = g;
        setGame(g);
        setLastMove({ from: result.from, to: result.to });

        setMoves((prev) => [...prev, { san: result.san, isBot: false, explanation: expectedMove.explanation }]);
        setUserExplanation(expectedMove.explanation || null);
        setBotExplanation(null);
        setHint(null);
        setHintMove(null);
        setIsUserTurn(false);
        setMoveIndex(idx + 1);
      } catch {
        setHint(expectedMove.hint || 'Invalid move. Try again.');
      }
    },
    [lesson, isComplete, isUserTurn, moveIndex]
  );

  const handleHint = useCallback(() => {
    if (!lesson || isComplete) return;
    const m = lesson.mainLine[moveIndex];
    if (m?.hint) {
      setHint(m.hint);
      if (!isMuted) speak(m.hint);
    }

    const g = gameRef.current;
    if (!g) return;
    try {
      const preview = new Chess(g.fen());
      const result = preview.move(m.san);
      if (result) {
        setHintMove({ from: result.from, to: result.to });
      }
    } catch {}
  }, [lesson, isComplete, moveIndex, isMuted, speak]);

  const handleQuizComplete = useCallback(
    (score: number) => {
      const progress = loadProgress();
      progress.quizScores[lessonId] = score;
      setQuizScore(score);
      try {
        localStorage.setItem('chess-lessons-progress', JSON.stringify(progress));
      } catch {}
    },
    [lessonId]
  );

  const nextLesson = useMemo(() => {
    if (!lesson) return null;
    const section = sections.find((s) => s.id === lesson.sectionId);
    if (!section) return null;
    const idx = section.lessonIds.indexOf(lesson.id);
    if (idx < 0 || idx >= section.lessonIds.length - 1) return null;
    return `/sections/${section.id}/${section.lessonIds[idx + 1]}`;
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-[20px] font-semibold text-fg">Lesson not found</h1>
        <Link href="/sections" className="mt-4 inline-block text-accent hover:underline">
          ← Back to sections
        </Link>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <div className="animate-pulse text-muted">Loading lesson...</div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link
        href={`/sections/${sectionId}`}
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
      >
        ← Back to {sections.find((s) => s.id === sectionId)?.title || 'Lessons'}
      </Link>

      <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-center">
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={handleHint}
            disabled={!isUserTurn || isComplete}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-all hover:opacity-80 active:opacity-60 disabled:invisible"
            aria-label="Show hint"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
            </svg>
          </button>
          <ChessBoard
            game={game}
            onMove={handleMove}
            orientation="white"
            disabled={isComplete || !isUserTurn}
            lastMove={lastMove}
            flipped={lesson.userColor === 'b'}
            userColor={lesson.userColor}
            hintMove={hintMove}
          />
        </div>

        <div className="flex w-full max-w-[380px] flex-col gap-4">
          <LessonPanel
            lesson={lesson}
            moves={moves}
            hint={hint}
            isUserTurn={isUserTurn}
            isComplete={isComplete}
            onRequestHint={handleHint}
            onNextLesson={nextLesson ? () => router.push(nextLesson) : null}
            onShowQuiz={lesson.quiz && lesson.quiz.length > 0 ? () => setShowQuiz(true) : undefined}
            onShowTest={getTestForLesson(lesson.id) ? () => router.push(`/roadmap/${lesson.id}/test`) : undefined}
            testPassed={testPassed}
            quizScore={quizScore !== null ? quizScore : undefined}
            userExplanation={userExplanation}
            botExplanation={botExplanation}
            isMuted={isMuted}
            onToggleMute={toggleMute}
          />

          {showQuiz && lesson.quiz && lesson.quiz.length > 0 && (
            <QuizPanel
              questions={lesson.quiz}
              lessonId={lesson.id}
              onComplete={(score) => {
                handleQuizComplete(score);
                setShowQuiz(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
