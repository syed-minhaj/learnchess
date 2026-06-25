import { MoveRecord } from '@/types';

type MoveHistoryProps = {
  moves: MoveRecord[];
};

export default function MoveHistory({ moves }: MoveHistoryProps) {
  if (moves.length === 0) {
    return (
      <div className="rounded-lg border border-zinc-700/50 p-4 text-center text-sm text-zinc-500">
        No moves yet. Follow the coach&apos;s instructions!
      </div>
    );
  }

  return (
    <div className="max-h-48 overflow-y-auto rounded-lg border border-zinc-700/50">
      <table className="w-full text-sm">
        <thead className="sticky top-0 bg-zinc-800">
          <tr className="border-b border-zinc-700/50 text-xs text-zinc-500">
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
              <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                <td className="px-2 py-1.5 text-zinc-500">{i + 1}.</td>
                <td className={`px-2 py-1.5 font-mono ${w ? 'text-zinc-100' : ''}`}>
                  {w && (
                    <span className="flex items-center gap-1">
                      {w.san}
                      {w.isBot && <span className="text-xs text-emerald-500">🤖</span>}
                    </span>
                  )}
                </td>
                <td className={`px-2 py-1.5 font-mono ${b ? 'text-zinc-100' : ''}`}>
                  {b && (
                    <span className="flex items-center gap-1">
                      {b.san}
                      {b.isBot && <span className="text-xs text-emerald-500">🤖</span>}
                    </span>
                  )}
                </td>
                <td className="px-2 py-1.5">
                  {w?.explanation && (
                    <span className="text-xs text-zinc-400 line-clamp-1" title={w.explanation}>
                      {w.explanation.slice(0, 40)}...
                    </span>
                  )}
                  {!w?.explanation && b?.explanation && (
                    <span className="text-xs text-zinc-400 line-clamp-1" title={b.explanation}>
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
