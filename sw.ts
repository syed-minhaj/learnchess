import { CacheFirst, NetworkFirst, Serwist, NetworkOnly } from 'serwist';

const OFFLINE_RESPONSE = new Response(
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>You're Offline</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#15191c;color:#e0e0e0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:2rem}
h1{font-size:1.5rem;margin-bottom:.75rem;color:#fff}
p{font-size:.95rem;color:#a0a0a0;max-width:28rem;line-height:1.5}
.spinner{width:40px;height:40px;border:3px solid #2a2f33;border-top-color:#3b7a57;border-radius:50%;animation:spin .8s linear infinite;margin-bottom:1.5rem}
@keyframes spin{to{transform:rotate(360deg)}}
.retry-btn{margin-top:1.5rem;padding:.6rem 1.5rem;border:none;border-radius:8px;background:#3b7a57;color:#fff;font-size:.9rem;cursor:pointer}
.retry-btn:hover{background:#2d5f43}
</style>
</head>
<body>
<div class="spinner"></div>
<h1>No internet connection</h1>
<p>You appear to be offline. Reconnect to continue where you left off.</p>
<button class="retry-btn" onclick="window.location.reload()">Try again</button>
</body>
</html>`,
  {
    status: 200,
    statusText: 'OK',
    headers: { 'Content-Type': 'text/html' },
  },
);

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
    {
      matcher: ({ request, sameOrigin }) => sameOrigin && request.mode === 'navigate',
      handler: new NetworkOnly(),
    },
  ],
});

serwist.setCatchHandler(async ({ request }) => {
  if (request.mode === 'navigate') {
    return OFFLINE_RESPONSE.clone();
  }
  return Response.error();
});

serwist.addEventListeners();
