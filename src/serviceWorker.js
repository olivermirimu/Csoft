const resourcesToCache = [
  '/',
  '/style.css',
  '/script.js',
  '/homeSlider.js',
  '/assets/images/limbo.png',
  '/assets/images/depresed.jpg',
  '/assets/images/breakout-area.jpg',
  'manifest.json'
];

const cacheName = 'cache-v1';

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => {
    return cache.addAll(resourcesToCache);
  }).catch(err => {
    console.log('install error: ', err);
  }));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keyList=>{
return Promise.all(keyList.map(key =>{
  key
}))
  }));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cachedResponse => {
    return cachedResponse || fetch(event.request);
  }));
});

self.addEventListener('push', event => {
  const title = 'Push push';
  const body = 'So this is what we call a push notification';
  const icon = '/assets/clowm.jpg';
  const tag = 'simple-push';
  event.waitUntil(self.registration.showNotification(title, {
    body: body,
    icon: icon,
    tag: tag
  }));
});