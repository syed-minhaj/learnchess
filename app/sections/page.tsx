'use client';

import { sections } from '@/data/sections';
import { getSectionLessons } from '@/data/registry';
import SectionCard from '@/components/SectionCard';
import { loadProgress } from '@/lib/store';

export default function SectionsPage() {
  const progress = loadProgress();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-white">All Lessons</h1>
      <p className="mt-2 text-zinc-400">
        Choose a section to begin your chess training. Track your progress across 8 sections.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {sections.map((section) => {
          const lessons = getSectionLessons(section.id);
          return (
            <SectionCard
              key={section.id}
              section={section}
              lessons={lessons}
              progress={progress}
            />
          );
        })}
      </div>
    </div>
  );
}
