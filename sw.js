const CACHE='vocabulary-v9';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(ASSETS);await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith((async()=>{if(event.request.mode==='navigate'){try{const response=await fetch(event.request);const cache=await caches.open(CACHE);cache.put('./index.html',response.clone());return response}catch(e){return await caches.match('./index.html')}}const cached=await caches.match(event.request);if(cached)return cached;return fetch(event.request)})())});
