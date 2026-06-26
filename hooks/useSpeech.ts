'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useSpeech() {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isSpeakingRef = useRef(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const mountedRef = useRef(true);
  const genRef = useRef(0);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (isMuted || !text || typeof window === 'undefined' || !window.speechSynthesis) return;

      window.speechSynthesis.cancel();
      isSpeakingRef.current = true;
      setIsSpeaking(true);

      const cleaned = text
        .replace(/!!/g, '__DBL__')
        .replace(/#/g, '... checkmate')
        .replace(/!/g, ',')
        .replace(/__DBL__/g, ' \u2014 brilliant!');

      const gen = ++genRef.current;

      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(
        (v) => v.lang.startsWith('en') && v.name.toLowerCase().includes('female')
      ) || voices.find((v) => v.lang.startsWith('en'));

      const words = cleaned.split(/\s+/).filter(Boolean);
      const chunkSize = 6;
      const chunks: string[] = [];
      for (let i = 0; i < words.length; i += chunkSize) {
        chunks.push(words.slice(i, i + chunkSize).join(' '));
      }

      const speakChunk = (index: number) => {
        if (!mountedRef.current || !isSpeakingRef.current) return;

        const utterance = new SpeechSynthesisUtterance(chunks[index]);
        utterance.rate = 1;
        utterance.pitch = 1 + (Math.random() - 0.5) * 0.15;
        utterance.volume = 1;

        if (englishVoice) utterance.voice = englishVoice;

        utterance.onend = () => {
          if (genRef.current !== gen) return;
          if (index + 1 < chunks.length) {
            speakChunk(index + 1);
          } else {
            isSpeakingRef.current = false;
            if (mountedRef.current) setIsSpeaking(false);
          }
        };
        utterance.onerror = () => {
          if (genRef.current !== gen) return;
          isSpeakingRef.current = false;
          if (mountedRef.current) setIsSpeaking(false);
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      };

      speakChunk(0);
    },
    [isMuted]
  );

  const stop = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    isSpeakingRef.current = false;
    setIsSpeaking(false);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      if (!prev) stop();
      return !prev;
    });
  }, [stop]);

  return { speak, stop, isSpeaking, isMuted, toggleMute, isSpeakingRef };
}
