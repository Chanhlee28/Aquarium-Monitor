const CACHE="aquarium-monitor-v4";
const FILES=["./","./index.html","./manifest.json","./sw.js","./icon-192.png","./icon-512.png","./apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(new URL(e.request.url).origin===self.location.origin)e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)))});
