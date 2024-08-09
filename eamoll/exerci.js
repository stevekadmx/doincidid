addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Try to get the response from a cache.
      const cachedResponse = await caches.match(event.request);
      
      // Return it if we found one.
      if (cachedResponse) return cachedResponse;
      
      // If we didn't find a match in the cache, use the network.
      return fetch(event.request);
    })()
  );
});
