'use client';

import { useEffect, useState } from 'react';

type BotCommentaryProps = {
  text: string | null;
  isTyping?: boolean;
};

export default function BotCommentary({ text, isTyping = true }: BotCommentaryProps) {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!text) {
      setDisplayed('');
      return;
    }

    if (!isTyping) {
      setDisplayed(text);
      return;
    }

    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [text, isTyping]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  if (!text) return null;

  return (
    <div className="rounded-lg border border-emerald-700/30 bg-emerald-900/20 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700/40 text-sm">
          🤖
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-emerald-400">Coach</p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-300">
            {displayed}
            {showCursor && displayed.length < (text?.length || 0) && (
              <span className="ml-0.5 animate-pulse text-emerald-400">▌</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
