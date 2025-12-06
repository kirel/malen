const CACHE_NAME = 'malen-drawing-app-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.png',
  '/favicon.ico',
  '/icon-180.png',
  '/icon-192.png',
  '/icon-512.png',
  '/splash/apple-touch-startup-image-750x1334.png',
  '/splash/apple-touch-startup-image-1170x2532.png',
  '/splash/apple-touch-startup-image-1290x2796.png',
  '/splash/apple-touch-startup-image-1334x750.png',
  '/splash/apple-touch-startup-image-2048x2732.png',
  '/splash/apple-touch-startup-image-2532x1170.png',
  '/splash/apple-touch-startup-image-2732x2048.png',
  '/splash/apple-touch-startup-image-2796x1290.png'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});