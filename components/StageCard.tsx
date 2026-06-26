'use client';

import Link from 'next/link';
import Badge from './ui/Badge';
import { Difficulty } from '@/types';

type StageCardProps = {
  number: number;
  lessonId: string;
  sectionId: string;
  title: string;
  difficulty: Difficulty;
  sectionTitle: string;
  sectionIcon: string;
  lessonCompleted: boolean;
  testPassed: boolean;
};

export default function StageCard({
  number,
  lessonId,
  sectionId,
  title,
  difficulty,
  sectionTitle,
  sectionIcon,
  lessonCompleted,
  testPassed,
}: StageCardProps) {
  const isFullyComplete = lessonCompleted && testPassed;
  const statusText = isFullyComplete
    ? 'Complete'
    : testPassed
    ? 'Test passed'
    : lessonCompleted
    ? 'Lesson done'
    : 'Available';

  return (
    <Link
      href={`/sections/${sectionId}/${lessonId}`}
      className={`group block rounded-[12px] border p-3 transition-all hover:shadow-md ${
        isFullyComplete
          ? 'border-success/30 bg-success/[0.04]'
          : 'border-border bg-elevated hover:border-accent/30'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-medium text-fg">{title}</h3>
            <Badge variant={difficulty}>{difficulty}</Badge>
          </div>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
            <span>{sectionIcon}</span>
            <span className="truncate">{sectionTitle}</span>
            <span className="mx-1">·</span>
            <span>{statusText}</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-[10px] uppercase tracking-wide text-muted">Lesson</span>
            <span className="text-base">{lessonCompleted ? '✅' : '◻️'}</span>
          </div>
          <Link
            href={`/roadmap/${lessonId}/test`}
            onClick={(e) => e.stopPropagation()}
            className={`flex flex-col items-center gap-0.5 rounded-lg px-2.5 py-1 transition-all ${
              testPassed
                ? 'bg-success/10'
                : 'bg-accent/5 hover:bg-accent/15'
            }`}
          >
            <span className="text-[10px] uppercase tracking-wide text-muted">Test</span>
            <span className="text-base">{testPassed ? '✅' : '🎯'}</span>
          </Link>
        </div>
      </div>
    </Link>
  );
}
