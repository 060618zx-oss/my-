const CACHE_NAME = 'ai-paint-v1';
const assets = ['./', './index.html', './manifest.json', './icon-192.jpg', './icon-512.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));

});
