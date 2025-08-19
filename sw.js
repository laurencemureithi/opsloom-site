
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('opsloom-v1').then(cache => cache.addAll([
    '/index.html','/services.html','/projects.html','/contact.html','/assets/logo.svg','/assets/logo.png','/manifest.json'
  ])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
