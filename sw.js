/* Rotation service worker: keeps the app opening offline. */
const APP_CACHE = 'rotation-app-1.7.1';
const FONT_CACHE = 'rotation-fonts-1';
const APP_FILES = ['./', './index.html', './manifest.webmanifest', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', './rotation-template.xlsx', './lib/u2netp.json', './lib/u2netp.bin', './lib/LICENSE-U2Net.txt'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(APP_CACHE);
    await c.addAll(APP_FILES.map(u => new Request(u, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if ((k.startsWith('rotation-') || k.startsWith('lemari-')) && k !== APP_CACHE && k !== FONT_CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    e.respondWith((async () => {
      const c = await caches.open(APP_CACHE);
      try {
        // Check the server first so updates show on the next open. Fall back to the saved copy offline.
        const res = await fetch(url.href, { cache: 'no-cache', credentials: 'same-origin' });
        if (res.ok) { c.put(req, res.clone()); return res; }
        // the site answered with an error (say it moved): keep using the saved copy
        const saved = (await c.match(req, { ignoreSearch: true })) || (req.mode === 'navigate' ? await c.match('./index.html') : null);
        return saved || res;
      } catch (err) {
        return (await c.match(req, { ignoreSearch: true })) || (req.mode === 'navigate' ? await c.match('./index.html') : Response.error());
      }
    })());
    return;
  }
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith((async () => {
      const c = await caches.open(FONT_CACHE);
      const hit = await c.match(req);
      const net = fetch(req).then(res => { if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    })());
  }
});
