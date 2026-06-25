import { MoveRecord } from '@/types';

type MoveHistoryProps = {
  moves: MoveRecord[];
};

export default function MoveHistory({ moves }: MoveHistoryProps) {
  if (moves.length === 0) {
    return (
      <div className="rounded-[12px] border border-border p-4 text-center text-sm text-muted">
        No moves yet. Follow the coach&apos;s instructions!
      </div>
    );
  }

  return (
    <div className="max-h-48 overflow-y-auto rounded-[12px] border border-border">
      <table className="w-full text-sm">
        <thead className="sticky top-0 bg-elevated">
          <tr className="border-b border-border text-xs text-muted">
            <th className="w-10 px-2 py-1.5 text-left font-medium">#</th>
            <th className="px-2 py-1.5 text-left font-medium">White</th>
            <th className="px-2 py-1.5 text-left font-medium">Black</th>
            <th className="px-2 py-1.5 text-left font-medium">Info</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil(moves.length / 2) }, (_, i) => {
            const w = moves[i * 2];
            const b = moves[i * 2 + 1];
            return (
              <tr key={i} className="border-b border-border/50 hover:bg-surface">
                <td className="px-2 py-1.5 text-muted tabular-nums">{i + 1}.</td>
                <td className={`px-2 py-1.5 font-mono tabular-nums ${w ? 'text-fg' : ''}`}>
                  {w && (
                    <span className="flex items-center gap-1">
                      {w.san}
                    </span>
                  )}
                </td>
                <td className={`px-2 py-1.5 font-mono tabular-nums ${b ? 'text-fg' : ''}`}>
                  {b && (
                    <span className="flex items-center gap-1">
                      {b.san}
                    </span>
                  )}
                </td>
                <td className="px-2 py-1.5">
                  {w?.explanation && (
                    <span className="text-xs text-muted line-clamp-1" title={w.explanation}>
                      {w.explanation.slice(0, 40)}...
                    </span>
                  )}
                  {!w?.explanation && b?.explanation && (
                    <span className="text-xs text-muted line-clamp-1" title={b.explanation}>
                      {b.explanation.slice(0, 40)}...
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
