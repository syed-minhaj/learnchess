'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { sections } from '@/data/sections';
import { getSectionLessons } from '@/data/registry';
import { loadProgress, defaultProgress } from '@/lib/store';
import { UserProgress } from '@/types';
import Badge from '@/components/ui/Badge';
import ProgressBar from '@/components/ui/ProgressBar';

export default function SectionDetailPage() {
  const params = useParams();
  const sectionId = params.sectionId as string;

  const [progress, setProgress] = useState<UserProgress>(defaultProgress);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const section = sections.find((s) => s.id === sectionId);
  const lessons = getSectionLessons(sectionId);

  if (!section) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-[20px] font-semibold text-fg">Section not found</h1>
        <Link href="/sections" className="mt-4 inline-block text-accent hover:underline">
          ← Back to sections
        </Link>
      </div>
    );
  }

  const completed = lessons.filter((l) => progress.completedLessons.includes(l.id)).length;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/sections"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
      >
        ← All Sections
      </Link>

      <div className="mt-4 flex items-start gap-4">
        <span className="text-4xl">{section.icon}</span>
        <div className="flex-1">
          <h1 className="text-[28px] font-bold text-fg">{section.title}</h1>
          <p className="mt-2 text-muted">{section.description}</p>
          <div className="mt-3 flex items-center gap-4 text-sm text-muted">
            <span className="tabular-nums">{lessons.length} lessons</span>
          </div>
          <ProgressBar
            value={completed}
            max={lessons.length}
            label={`${completed}/${lessons.length} completed`}
            className="mt-3"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {lessons.map((lesson) => {
          const isCompleted = progress.completedLessons.includes(lesson.id);
          const isInProgress = progress.currentLessonId === lesson.id;
          return (
            <Link
              key={lesson.id}
              href={`/sections/${section.id}/${lesson.id}`}
              className={`rounded-[12px] border p-5 transition-all ${
                isCompleted
                  ? 'border-success/20 bg-success/5'
                  : isInProgress
                    ? 'border-warn/20 bg-warn/5'
                    : 'border-border bg-elevated hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-fg">{lesson.title}</h3>
                {isCompleted && <span className="text-success">✓</span>}
                {isInProgress && !isCompleted && <span className="text-warn">⋯</span>}
              </div>
              <p className="mt-1 text-sm text-muted line-clamp-2">{lesson.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <Badge variant={lesson.difficulty}>{lesson.difficulty}</Badge>
                <span className="text-xs text-muted tabular-nums">{lesson.estimatedMinutes} min</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
