'use client';

import { useEffect, useMemo, useState } from 'react';
import { sections } from '@/data/sections';
import { getSectionLessons } from '@/data/registry';
import SectionCard from '@/components/SectionCard';
import { loadProgress, defaultProgress } from '@/lib/store';
import { UserProgress } from '@/types';

export default function SectionsPage() {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const sectionLessons = useMemo(
    () => Object.fromEntries(sections.map((s) => [s.id, getSectionLessons(s.id)])),
    []
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-[28px] font-bold text-fg">All Lessons</h1>
      <p className="mt-2 text-muted">
        Choose a section to begin your chess training. Track your progress across 8 sections.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {sections.map((section) => (
          <SectionCard
            key={section.id}
            section={section}
            lessons={sectionLessons[section.id]}
            progress={progress}
          />
        ))}
      </div>
    </div>
  );
}
