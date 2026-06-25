'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { sections } from '@/data/sections';
import { getAllLessons, getLessonById } from '@/data/registry';
import { loadProgress, defaultProgress } from '@/lib/store';
import { UserProgress } from '@/types';

export default function HomePage() {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const allLessons = useMemo(() => getAllLessons(), []);
  const totalLessons = allLessons.length;
  const totalMinutes = allLessons.reduce((s, l) => s + l.estimatedMinutes, 0);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const completedCount = progress.completedLessons.length;

  const currentLesson = progress.currentLessonId ? getLessonById(progress.currentLessonId) : null;
  const currentSection = currentLesson
    ? sections.find((s) => s.id === currentLesson.sectionId)
    : null;

  const recentCompleted = useMemo(() => {
    const recent = progress.completedLessons.slice(-3).reverse();
    return recent
      .map((id) => getLessonById(id))
      .filter((l): l is NonNullable<typeof l> => l !== null);
  }, [progress.completedLessons]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Home</h1>
        <div className="flex items-center gap-4 text-sm text-zinc-500">
          <span className="text-emerald-400">{completedCount}/{totalLessons}</span>
          <span className="hidden sm:inline">lessons</span>
          <span className="hidden text-zinc-700 sm:inline">|</span>
          <span className="hidden sm:inline">⏱ ~{totalMinutes}m</span>
        </div>
      </div>

      {currentLesson && currentSection && (
        <Link
          href={`/sections/${currentLesson.sectionId}/${currentLesson.id}`}
          className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-700/30 bg-emerald-900/15 p-4 transition-colors hover:bg-emerald-900/25"
        >
          <span className="text-2xl">{currentSection.icon}</span>
          <div className="flex-1">
            <p className="text-xs font-medium text-emerald-400">Continue Learning</p>
            <p className="font-medium text-white">{currentLesson.title}</p>
            <p className="text-xs text-zinc-500">{currentSection.title}</p>
          </div>
          <span className="text-lg text-zinc-500">→</span>
        </Link>
      )}

      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Sections</h2>
          <Link href="/sections" className="text-xs font-medium text-emerald-400 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => {
            const done = section.lessonIds.filter((id) => progress.completedLessons.includes(id)).length;
            return (
              <Link
                key={section.id}
                href={`/sections/${section.id}`}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-900"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="truncate font-medium text-white group-hover:text-emerald-400">
                      {section.title}
                    </h3>
                    <p className="text-xs text-zinc-500">
                      {done}/{section.lessonIds.length}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {recentCompleted.length > 0 && (
        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Recently Completed</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {recentCompleted.map((lesson) => {
              const section = sections.find((s) => s.id === lesson.sectionId);
              return (
                <Link
                  key={lesson.id}
                  href={`/sections/${lesson.sectionId}/${lesson.id}`}
                  className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 px-3 py-2 text-sm transition-colors hover:border-zinc-700 hover:bg-zinc-900"
                >
                  <span>{section?.icon}</span>
                  <span className="text-zinc-300">{lesson.title}</span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-4 text-lg font-bold text-white">Featured Lessons</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allLessons.slice(0, 6).map((lesson) => {
            const section = sections.find((s) => s.id === lesson.sectionId);
            return (
              <Link
                key={lesson.id}
                href={`/sections/${lesson.sectionId}/${lesson.id}`}
                className="group rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:border-zinc-700 hover:bg-zinc-900"
              >
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <span>{section?.icon}</span>
                  <span>{section?.title}</span>
                </div>
                <h4 className="mt-2 font-medium text-white">{lesson.title}</h4>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
                      lesson.difficulty === 'beginner'
                        ? 'bg-emerald-900/40 text-emerald-300'
                        : lesson.difficulty === 'intermediate'
                          ? 'bg-amber-900/40 text-amber-300'
                          : 'bg-red-900/40 text-red-300'
                    }`}
                  >
                    {lesson.difficulty}
                  </span>
                  <span className="text-xs text-zinc-500">{lesson.estimatedMinutes} min</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
