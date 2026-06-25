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
        <h1 className="text-2xl font-bold text-white">Section not found</h1>
        <Link href="/sections" className="mt-4 inline-block text-emerald-400 hover:underline">
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
        className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white"
      >
        ← All Sections
      </Link>

      <div className="mt-4 flex items-start gap-4">
        <span className="text-4xl">{section.icon}</span>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white">{section.title}</h1>
          <p className="mt-2 text-zinc-400">{section.description}</p>
          <div className="mt-3 flex items-center gap-4 text-sm text-zinc-500">
            <span>{lessons.length} lessons</span>
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
              className={`rounded-xl border p-5 transition-all ${
                isCompleted
                  ? 'border-emerald-700/30 bg-emerald-900/10'
                  : isInProgress
                    ? 'border-amber-700/30 bg-amber-900/10'
                    : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-white">{lesson.title}</h3>
                {isCompleted && <span className="text-emerald-400">✓</span>}
                {isInProgress && !isCompleted && <span className="text-amber-400">⋯</span>}
              </div>
              <p className="mt-1 text-sm text-zinc-400 line-clamp-2">{lesson.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <Badge variant={lesson.difficulty}>{lesson.difficulty}</Badge>
                <span className="text-xs text-zinc-500">{lesson.estimatedMinutes} min</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
