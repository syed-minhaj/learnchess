import Link from 'next/link';
import { Section, Lesson, UserProgress } from '@/types';
import Card from './ui/Card';
import Badge from './ui/Badge';
import ProgressBar from './ui/ProgressBar';

type SectionCardProps = {
  section: Section;
  lessons: Lesson[];
  progress: UserProgress;
};

export default function SectionCard({ section, lessons, progress }: SectionCardProps) {
  const completed = lessons.filter((l) => progress.completedLessons.includes(l.id)).length;

  return (
    <Link href={`/sections/${section.id}`}>
      <Card hover className="h-full">
        <div className="flex items-start gap-4">
          <span className="mt-1 text-3xl">{section.icon}</span>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white">{section.title}</h3>
            <p className="mt-1 text-sm text-zinc-400 line-clamp-2">{section.description}</p>
            <div className="mt-3 flex items-center gap-3 text-xs text-zinc-500">
              <span>{lessons.length} lessons</span>
              <span>·</span>
              <span>
                {lessons.reduce((s, l) => s + l.estimatedMinutes, 0)} min
              </span>
            </div>
            <ProgressBar
              value={completed}
              max={lessons.length}
              label={`${completed}/${lessons.length}`}
              className="mt-3"
            />
          </div>
        </div>
      </Card>
    </Link>
  );
}
