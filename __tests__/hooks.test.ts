import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSpeech } from '@/hooks/useSpeech';

// SpeechSynthesisUtterance must be a proper constructor
class MockUtterance {
  rate = 1;
  pitch = 1;
  volume = 1;
  voice = null;
  text = '';
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;
  lang = '';
  constructor(text: string) {
    this.text = text;
  }
}

let speakImpl: ((u: any) => void) | null = null;

beforeEach(() => {
  vi.clearAllMocks();
  (globalThis as any).SpeechSynthesisUtterance = MockUtterance;
  speakImpl = null;
  const mockSpeak = vi.fn().mockImplementation((utterance: any) => {
    if (speakImpl) speakImpl(utterance);
  });
  window.speechSynthesis.speak = mockSpeak as any;
  window.speechSynthesis.cancel = vi.fn() as any;
});

afterEach(() => {
  speakImpl = null;
});

describe('useSpeech', () => {
  it('returns speaking false initially', () => {
    const { result } = renderHook(() => useSpeech());
    expect(result.current.isSpeaking).toBe(false);
  });

  it('returns isMuted false initially', () => {
    const { result } = renderHook(() => useSpeech());
    expect(result.current.isMuted).toBe(false);
  });

  it('speak creates an utterance', () => {
    const { result } = renderHook(() => useSpeech());
    act(() => {
      result.current.speak('Hello world');
    });
    expect(window.speechSynthesis.speak).toHaveBeenCalled();
  });

  it('does not speak when muted', () => {
    const { result } = renderHook(() => useSpeech());
    act(() => {
      result.current.toggleMute();
    });
    act(() => {
      result.current.speak('Hello');
    });
    expect(window.speechSynthesis.speak).not.toHaveBeenCalled();
  });

  it('toggleMute toggles isMuted', () => {
    const { result } = renderHook(() => useSpeech());
    act(() => {
      result.current.toggleMute();
    });
    expect(result.current.isMuted).toBe(true);
    act(() => {
      result.current.toggleMute();
    });
    expect(result.current.isMuted).toBe(false);
  });

  it('cancels previous utterance on new speak', () => {
    const { result } = renderHook(() => useSpeech());
    act(() => {
      result.current.speak('First');
    });
    act(() => {
      result.current.speak('Second');
    });
    expect(window.speechSynthesis.cancel).toHaveBeenCalled();
  });

  it('handles onend for single chunk', () => {
    let utterance: any = null;
    speakImpl = (u: any) => { utterance = u; };
    const { result } = renderHook(() => useSpeech());
    act(() => {
      result.current.speak('Hello');
    });
    expect(utterance).not.toBeNull();
    act(() => {
      utterance.onend();
    });
    expect(result.current.isSpeaking).toBe(false);
  });

  it('handles onend for multi-chunk text', () => {
    const utterances: any[] = [];
    speakImpl = (u: any) => { utterances.push(u); };
    const { result } = renderHook(() => useSpeech());
    act(() => {
      result.current.speak('one two three four five six seven eight');
    });
    expect(utterances.length).toBe(1);
    // Fire onend for first chunk -> should trigger second chunk
    act(() => {
      utterances[0].onend();
    });
    expect(window.speechSynthesis.speak).toHaveBeenCalledTimes(2);
  });

  it('uses english female voice when available', () => {
    const mockGetVoices = vi.fn(() => [
      { lang: 'en-US', name: 'Female English Voice' },
    ] as any);
    window.speechSynthesis.getVoices = mockGetVoices as any;
    const { result } = renderHook(() => useSpeech());
    act(() => {
      result.current.speak('Hello');
    });
    expect(window.speechSynthesis.speak).toHaveBeenCalled();
  });

  it('falls back to any english voice when no female voice', () => {
    const mockGetVoices = vi.fn(() => [
      { lang: 'en-US', name: 'Male English Voice' },
    ] as any);
    window.speechSynthesis.getVoices = mockGetVoices as any;
    const { result } = renderHook(() => useSpeech());
    act(() => {
      result.current.speak('Hi');
    });
    expect(window.speechSynthesis.speak).toHaveBeenCalled();
  });

  it('handles onerror callback', () => {
    let utterance: any = null;
    speakImpl = (u: any) => { utterance = u; };
    const { result } = renderHook(() => useSpeech());
    act(() => {
      result.current.speak('Hello');
    });
    act(() => {
      utterance.onerror();
    });
    expect(result.current.isSpeaking).toBe(false);
  });

  it('stop cancels speech', () => {
    const { result } = renderHook(() => useSpeech());
    act(() => {
      result.current.speak('Hello');
    });
    act(() => {
      result.current.stop();
    });
    expect(window.speechSynthesis.cancel).toHaveBeenCalled();
    expect(result.current.isSpeaking).toBe(false);
  });

  it('speak does nothing for empty text', () => {
    const { result } = renderHook(() => useSpeech());
    act(() => {
      result.current.speak('');
    });
    expect(window.speechSynthesis.speak).not.toHaveBeenCalled();
  });

  it('cleans up on unmount', () => {
    const { result, unmount } = renderHook(() => useSpeech());
    act(() => {
      result.current.speak('Hello');
    });
    unmount();
    expect(window.speechSynthesis.cancel).toHaveBeenCalled();
  });
});
