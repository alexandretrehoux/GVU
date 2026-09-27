/* Grandeur, Valeur, Unité — service worker (A. Trehoux)
 * Démarrage immédiat depuis le cache, mise à jour en arrière-plan quand le réseau est disponible :
 * une nouvelle version publiée est prise en compte au lancement suivant.
 * Pour forcer le renouvellement complet (icônes comprises), changer CACHE. */
const CACHE = 'gvu-v1';
const FILES = ['./', './index.html', './manifest.webmanifest', './icons/apple-touch-icon.png',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-512-maskable.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const key = req.mode === 'navigate' ? './index.html' : req;
  const cacheP = caches.open(CACHE);
  // version réseau : met le cache à jour pour le prochain lancement
  const fresh = cacheP.then(cache => fetch(req).then(resp => {
    if (resp && resp.ok) return cache.put(key, resp.clone()).then(() => resp);
    return resp;
  }));
  e.respondWith(cacheP.then(cache => cache.match(key, { ignoreSearch: true })).then(hit => hit || fresh));
  e.waitUntil(fresh.catch(() => {}));
});
