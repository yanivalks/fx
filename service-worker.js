self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('fx-cache').then(function(cache) {
      return cache.addAll([
        './index_fx_final_svg_safe8.html',
        './manifest.json',
        './icon.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});