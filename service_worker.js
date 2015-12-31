/*Service Worker Install Event */

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('waglite_cache').then(function(cache) {
      return cache.addAll([
        

      ]);
    })
  );
  console.log('Installed', event);
});

/*Service Worker fetch Event */

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('waglite_cache').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
