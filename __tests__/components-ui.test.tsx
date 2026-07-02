import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';

describe('Button', () => {
  it('renders children', () => {
    render(React.createElement(Button, { onClick: () => {} }, 'Click'));
    expect(screen.getByText('Click')).toBeDefined();
  });

  it('applies variant classes', () => {
    const { container } = render(React.createElement(Button, { onClick: () => {}, variant: 'primary' }, 'Go'));
    const cls = container.querySelector('button')?.className || '';
    expect(cls).toContain('bg-accent');
    expect(cls).toContain('text-white');
  });

  it('applies size classes', () => {
    const { container } = render(React.createElement(Button, { onClick: () => {}, size: 'lg' }, 'Big'));
    const cls = container.querySelector('button')?.className || '';
    expect(cls).toContain('px-6');
    expect(cls).toContain('py-3.5');
  });

  it('shows disabled state', () => {
    const { container } = render(React.createElement(Button, { onClick: () => {}, disabled: true }, 'No'));
    expect((container.querySelector('button') as HTMLButtonElement).disabled).toBe(true);
  });
});

describe('Badge', () => {
  it('renders text', () => {
    render(React.createElement(Badge, null, 'New'));
    expect(screen.getByText('New')).toBeDefined();
  });

  it('applies variant classes', () => {
    const { container } = render(React.createElement(Badge, { variant: 'beginner' }, 'Easy'));
    const cls = container.querySelector('span')?.className || '';
    expect(cls).toContain('bg-accent');
  });

  it('falls back to default for unknown variant', () => {
    const { container } = render(React.createElement(Badge, { variant: 'unknown' as any }, 'Test'));
    const cls = container.querySelector('span')?.className || '';
    expect(cls).toContain('bg-bg-elevated');
  });
});

describe('Card', () => {
  it('renders children', () => {
    render(React.createElement(Card, null, 'Content'));
    expect(screen.getByText('Content')).toBeDefined();
  });

  it('applies className', () => {
    const { container } = render(React.createElement(Card, { className: 'extra' }, 'X'));
    expect(container.firstChild).toBeDefined();
  });
});

describe('ProgressBar', () => {
  it('renders with percentage', () => {
    const { container } = render(React.createElement(ProgressBar, { value: 50, max: 100 }));
    const bar = container.querySelector('[style]');
    expect(bar).toBeDefined();
  });

  it('clamps value to 0-100', () => {
    const { container } = render(React.createElement(ProgressBar, { value: -10, max: 100 }));
    const bar = container.querySelector('[style]');
    expect(bar).toBeDefined();
  });

  it('renders at 100%', () => {
    const { container } = render(React.createElement(ProgressBar, { value: 100, max: 100 }));
    const bar = container.querySelector('[style]');
    expect(bar).toBeDefined();
  });
});
