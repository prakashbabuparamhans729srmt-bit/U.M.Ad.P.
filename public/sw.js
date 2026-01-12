// This is a basic service worker.
self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  // You can pre-cache assets here if needed.
});

self.addEventListener('fetch', (event) => {
  // This service worker doesn't intercept fetch requests.
  // It's mainly here to satisfy PWA criteria.
  event.respondWith(fetch(event.request));
});
