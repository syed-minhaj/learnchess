import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./__tests__/test-setup.ts'],
    include: ['__tests__/**/*.test.ts', '__tests__/**/*.test.tsx'],
    css: true,
    coverage: {
      all: true,
      include: ['**/*.ts', '**/*.tsx'],
      exclude: [
        '**/node_modules/**',
        '**/.next/**',
        '**/__tests__/**',
        'next.config.ts',
        'vitest.config.ts',
        'postcss.config.*',
        'next-env.d.ts',
        'scripts/**',
        'types/index.ts',
      ],
    },
  },
});
