const cacheName = 'site-static-v2';
const assets = [
  '/',
  '/favicon.ico',
  '/logo192.png',
  '/main.6297310c0c46aa8515e4.hot-update.js',
  '/static/js/1.chunk.js',
  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  '/sockjs-node',
  // 'https://opentdb.com/api_category.php',
  // 'https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-speech-sign-text-quiz-time-vector-illustration-png-image_1824077.jpg',
  'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&category=',
];

// // install event
// self.addEventListener('install', evt => {
//   //console.log('service worker installed');
//   evt.waitUntil(
//     caches.open(staticCacheName).then((cache) => {
//       console.log('caching shell assets');
//       cache.addAll(assets);
//     })
//   );
// });

// // activate event
// self.addEventListener('activate', evt => {
//   //console.log('service worker activated');
//   evt.waitUntil(
//     caches.keys().then(keys => {
//       //console.log(keys);
//       return Promise.all(keys
//         .filter(key => key !== staticCacheName && key !== dynamicCacheName)
//         .map(key => caches.delete(key))
//       );
//     })
//   );
// });

// // fetch event
// self.addEventListener('fetch', evt => {
//   //console.log('fetch event', evt);
//   evt.respondWith(
//     caches.match(evt.request).then(cacheRes => {
//       return cacheRes || fetch(evt.request).then(fetchRes => {
//         return caches.open(cacheName).then(cache => {
//           cache.put(evt.request.url, fetchRes.clone());
//           return fetchRes;
//         })
//       });
//     })
//   );
// });

self.addEventListener("activate", function(e) {
  console.log("[ServiceWorker] Activate");
});

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
   caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(cacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    })
  );
});