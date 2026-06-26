'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Chess } from 'chess.js';
import { TestNode } from '@/types';
import { getAllLessons, getNextLessonId, getTestForLesson } from '@/data/registry';
import ChessBoard from '@/components/ChessBoard';
import TestPanel from '@/components/TestPanel';
import { passTest } from '@/lib/store';

export default function TestPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params.lessonId as string;

  const lesson = useMemo(() => getAllLessons().find((l) => l.id === lessonId), [lessonId]);
  const test = useMemo(() => getTestForLesson(lessonId), [lessonId]);

  const [game, setGame] = useState<Chess | null>(null);
  const [moveCount, setMoveCount] = useState(0);
  const [totalMoves, setTotalMoves] = useState(0);
  const [passed, setPassed] = useState(false);
  const [failed, setFailed] = useState(false);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(null);

  const gameRef = useRef<Chess | null>(null);
  const currentNodeRef = useRef<TestNode[] | null>(null);

  useEffect(() => {
    if (!test) return;
    const g = new Chess(test.fen);
    gameRef.current = g;
    setGame(g);
    setMoveCount(0);
    setPassed(false);
    setFailed(false);
    setLastMove(null);
    currentNodeRef.current = test.root;

    let total = 1;
    let node = test.root[0];
    while (node && node.children && node.children.length > 0) {
      total++;
      node = node.children[0];
    }
    setTotalMoves(total);
  }, [test]);

  const handleMove = useCallback(
    (from: string, to: string) => {
      if (passed || failed) return;
      if (!test || !gameRef.current) return;

      const currentNodes = currentNodeRef.current;
      if (!currentNodes || currentNodes.length === 0) return;

      const g = gameRef.current;
      const testGame = new Chess(g.fen());

      try {
        testGame.move({ from, to, promotion: 'q' });
      } catch {
        return;
      }

      const playedFen = testGame.fen();

      const matchedNode = currentNodes.find((n) => {
        try {
          const expected = new Chess(g.fen());
          expected.move(n.userMove);
          return expected.fen() === playedFen;
        } catch {
          return false;
        }
      });

      if (!matchedNode) {
        setFailed(true);
        return;
      }

      try {
        const result = g.move({ from, to, promotion: 'q' });
        gameRef.current = g;
        setGame(g);
        setLastMove({ from: result.from, to: result.to });
        setMoveCount((c) => c + 1);

        const botSan = matchedNode.botResponse;
        if (botSan) {
          setTimeout(() => {
            const g2 = gameRef.current;
            if (!g2) return;
            try {
              const botResult = g2.move(botSan);
              gameRef.current = g2;
              setGame(g2);
              setLastMove({ from: botResult.from, to: botResult.to });
            } catch {}
          }, 400);
        }

        if (matchedNode.children && matchedNode.children.length > 0) {
          currentNodeRef.current = matchedNode.children;
        } else {
          currentNodeRef.current = null;
          setMoveCount((prev) => {
            const next = prev + 1;
            if (next >= totalMoves) {
              setPassed(true);
              passTest(lessonId);
            }
            return next;
          });
        }
      } catch {
        setFailed(true);
      }
    },
    [test, passed, failed, totalMoves, lessonId]
  );

  const handleRetry = useCallback(() => {
    if (!test) return;
    const g = new Chess(test.fen);
    gameRef.current = g;
    setGame(g);
    setMoveCount(0);
    setPassed(false);
    setFailed(false);
    setLastMove(null);
    currentNodeRef.current = test.root;
  }, [test]);

  const handleBack = useCallback(() => {
    router.push('/roadmap');
  }, [router]);

  const nextStageInfo = useMemo(() => {
    const nextId = getNextLessonId(lessonId);
    if (!nextId) return null;
    const nextLesson = getAllLessons().find((l) => l.id === nextId);
    if (!nextLesson) return null;
    return { id: nextId, sectionId: nextLesson.sectionId };
  }, [lessonId]);

  const handleNextStage = useCallback(() => {
    if (!nextStageInfo) return;
    router.push(`/sections/${nextStageInfo.sectionId}/${nextStageInfo.id}`);
  }, [nextStageInfo, router]);

  if (!lesson) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-[20px] font-semibold text-fg">Lesson not found</h1>
        <Link href="/roadmap" className="mt-4 inline-block text-accent hover:underline">
          ← Back to Roadmap
        </Link>
      </div>
    );
  }

  if (!test) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-[20px] font-semibold text-fg">No test available</h1>
        <p className="mt-2 text-sm text-muted">This lesson doesn't have a test yet.</p>
        <Link href="/roadmap" className="mt-4 inline-block text-accent hover:underline">
          ← Back to Roadmap
        </Link>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <div className="animate-pulse text-muted">Loading test...</div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link
        href="/roadmap"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
      >
        ← Back to Roadmap
      </Link>

      <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:justify-center">
        <div className="flex flex-col items-center gap-2">
          <ChessBoard
            game={game}
            onMove={handleMove}
            orientation="white"
            disabled={passed || failed}
            lastMove={lastMove}
            flipped={test.userColor === 'b'}
            userColor={test.userColor}
          />
        </div>

        <div className="flex w-full max-w-[380px] flex-col gap-4">
          <TestPanel
            prompt={test.prompt}
            moveCount={moveCount}
            totalMoves={totalMoves}
            passed={passed}
            failed={failed}
            onRetry={handleRetry}
            onBack={handleBack}
            onNextStage={nextStageInfo ? handleNextStage : null}
          />
        </div>
      </div>
    </div>
  );
}
