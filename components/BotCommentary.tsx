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
      i += 3;
      if (i >= text.length) {
        setDisplayed(text);
        clearInterval(interval);
      } else {
        setDisplayed(text.slice(0, i));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [text, isTyping]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  if (!text) return null;

  return (
    <div className="rounded-[12px] border border-accent/20 bg-accent/10 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm">
          ♟
        </div>
        <div className="flex-1">
          <p className="text-[13px] font-medium text-accent">Coach</p>
          <p className="mt-1 text-[14px] leading-relaxed text-text-secondary">
            {displayed}
            {showCursor && displayed.length < (text?.length || 0) && (
              <span className="ml-0.5 animate-pulse text-accent">▌</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
