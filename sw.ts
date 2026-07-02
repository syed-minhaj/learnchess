import { CacheFirst, NetworkFirst, Serwist } from 'serwist';

const serwist = new Serwist({
  precacheEntries: (self as unknown as { __SW_MANIFEST: unknown }).__SW_MANIFEST as never[],
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    {
      matcher: /\/_next\/static\/.+$/i,
      handler: new CacheFirst(),
    },
    {
      matcher: /\/_next\/data\/.+$/i,
      handler: new NetworkFirst({ networkTimeoutSeconds: 3 }),
    },
    {
      matcher: /\/manifest\.json$/i,
      handler: new CacheFirst(),
    },
    {
      matcher: /\/favicon\.(?:ico|png)$/i,
      handler: new CacheFirst(),
    },
  ],
});

serwist.addEventListeners();
