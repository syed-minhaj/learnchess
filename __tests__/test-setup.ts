import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  useParams: () => ({}),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    onClick,
    className,
    ...props
  }: {
    children: React.ReactNode;
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
  }) =>
    React.createElement(
      'a',
      { href, onClick, className, ...props },
      children
    ),
}));

// Mock Web Speech API
const mockUtterance = {
  rate: 1,
  pitch: 1,
  volume: 1,
  voice: null,
  text: '',
  onend: null as (() => void) | null,
  onerror: null as (() => void) | null,
  lang: '',
};
const mockSpeak = vi.fn();
const mockCancel = vi.fn();
const mockGetVoices = vi.fn(() => []);

Object.defineProperty(window, 'speechSynthesis', {
  value: {
    speak: mockSpeak,
    cancel: mockCancel,
    getVoices: mockGetVoices,
    speaking: false,
    pending: false,
    paused: false,
  },
  writable: true,
});

globalThis.SpeechSynthesisUtterance = vi.fn(() => ({
  ...mockUtterance,
})) as any;

import React from 'react';
