'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function useSpeech() {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isSpeakingRef = useRef(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const mountedRef = useRef(true);

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

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(
        (v) => v.lang.startsWith('en') && v.name.toLowerCase().includes('female')
      ) || voices.find((v) => v.lang.startsWith('en'));

      if (englishVoice) utterance.voice = englishVoice;

      utterance.onend = () => {
        isSpeakingRef.current = false;
        if (mountedRef.current) setIsSpeaking(false);
      };
      utterance.onerror = () => {
        isSpeakingRef.current = false;
        if (mountedRef.current) setIsSpeaking(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
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
