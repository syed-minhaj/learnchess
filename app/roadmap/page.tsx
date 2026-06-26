'use client';

import { useMemo } from 'react';
import { sections } from '@/data/sections';
import { getAllLessons } from '@/data/registry';
import { loadProgress } from '@/lib/store';
import StageCard from '@/components/StageCard';

export default function RoadmapPage() {
  const progress = useMemo(() => loadProgress(), []);
  const allLessons = useMemo(() => getAllLessons(), []);

  const completedLessons = progress.completedLessons;
  const passedTests = progress.passedTests;
  const totalLessons = allLessons.length;
  const totalPassed = passedTests.length;

  let globalIndex = 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-[24px] font-semibold text-fg">Roadmap</h1>
        <p className="mt-1 text-sm text-muted">
          Complete lessons and pass tests to master every concept.
        </p>
      </div>

      <div className="mx-auto mb-8 max-w-xs rounded-[12px] border border-border bg-elevated p-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">Tests passed</span>
          <span className="font-medium text-fg">
            {totalPassed} / {totalLessons}
          </span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${(totalPassed / totalLessons) * 100}%` }}
          />
        </div>
      </div>

      {/* Zig-zag path */}
      <div className="relative">
        {/* Central path line (desktop only) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 max-md:hidden" />

        {sections.map((section) => {
          const sectionLessons = allLessons.filter(
            (l) => l.sectionId === section.id
          );
          if (sectionLessons.length === 0) return null;

          const startIndex = globalIndex;
          globalIndex += sectionLessons.length;

          return (
            <div key={section.id} className="relative">
              {/* Section header */}
              <div className="relative z-20 mb-4 mt-8 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-5 py-1.5 shadow-sm">
                  <span className="text-lg">{section.icon}</span>
                  <span className="text-sm font-semibold text-fg">
                    {section.title}
                  </span>
                </div>
              </div>

              {/* Stages */}
              {sectionLessons.map((lesson, i) => {
                const number = startIndex + i + 1;
                const isLeft = number % 2 !== 0;

                return (
                  <div key={lesson.id} className="relative py-2 md:py-3">
                    {/* Desktop: zig-zag */}
                    <div className="hidden md:flex md:items-center">
                      <div
                        className={`flex w-full items-center ${
                          isLeft ? '' : 'flex-row-reverse'
                        }`}
                      >
                        {/* Card side */}
                        <div className="flex-1">
                          <div className="relative">
                            {/* Connector line from card edge toward center */}
                            <div
                              className={`absolute top-1/2 h-0.5 w-8 -translate-y-1/2 bg-border ${
                                isLeft ? 'right-0' : 'left-0'
                              }`}
                            />
                            <StageCard
                              number={number}
                              lessonId={lesson.id}
                              sectionId={section.id}
                              title={lesson.title}
                              difficulty={lesson.difficulty}
                              sectionTitle={section.title}
                              sectionIcon={section.icon}
                              lessonCompleted={completedLessons.includes(lesson.id)}
                              testPassed={passedTests.includes(lesson.id)}
                            />
                          </div>
                        </div>

                        {/* Node on path */}
                        <div className="relative z-10 mx-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-elevated text-sm font-bold text-accent shadow-sm">
                          {number}
                        </div>

                        {/* Spacer */}
                        <div className="flex-1" />
                      </div>
                    </div>

                    {/* Mobile: list */}
                    <div className="md:hidden">
                      <StageCard
                        number={number}
                        lessonId={lesson.id}
                        sectionId={section.id}
                        title={lesson.title}
                        difficulty={lesson.difficulty}
                        sectionTitle={section.title}
                        sectionIcon={section.icon}
                        lessonCompleted={completedLessons.includes(lesson.id)}
                        testPassed={passedTests.includes(lesson.id)}
                      />
                    </div>
                  </div>
                );
              })}

              {/* Spacer between sections */}
              <div className="relative z-10 my-1 flex justify-center max-md:hidden">
                <div className="h-4 w-0.5 bg-border" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
