self.addEventListener('install', (e) => { console.log('SGS App SW Installed'); });
self.addEventListener('fetch', (e) => { e.respondWith(fetch(e.request)); });