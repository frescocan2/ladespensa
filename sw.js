/* ladespensa · service worker
   Estrategia NETWORK-FIRST para el shell: siempre intenta traer la última
   versión de la app; si no hay red, usa la copia en caché (modo offline).
   Firebase y CDNs (otro origen) van siempre a la red. */
const CACHE = 'ladespensa-v12';
const SHELL = ['./', './index.html', './recetas.json'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).catch(() => {}));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'skip-waiting') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;                 // no tocar escrituras
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;       // Firebase/CDN: red normal

  // Network-first: trae la última versión; cae a la caché si no hay conexión.
  e.respondWith(
    fetch(req)
      .then(res => {
        const copia = res.clone();
        caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});

// Notificaciones push (cuando se conecte un servidor de envío, p. ej. FCM)
self.addEventListener('push', e => {
  let data = {};
  try { data = e.data ? e.data.json() : {}; }
  catch (_) { data = { body: e.data ? e.data.text() : '' }; }
  const title = data.title || 'ladespensa';
  const opt = { body: data.body || 'Tienes productos por reponer.', tag: 'ladespensa-falta', renotify: true };
  e.waitUntil(self.registration.showNotification(title, opt));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(ws => {
      for (const w of ws) { if ('focus' in w) return w.focus(); }
      if (clients.openWindow) return clients.openWindow('./');
    })
  );
});
