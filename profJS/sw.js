const VERSION = 'v1'
/* primero vamos a crear un precache */
self.addEventListener('install',event =>{ 
    event.waitUntil(precache())
});

/*escuchamos peticiones del browser*/
self.addEventListener('fetch', event =>{
    const request = event.request;
    //get
    if(request.method != 'GET'){ return; }
    //buscar en cache
    event.respondWith(cacheResponse(request));
    //actualizar el cache
    event.waitUntil(updateCache(request));
})


//funciones que manipulan cache
async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/Autoplay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/naruto.mp4'
    ]);
}

async function cacheResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request); //si no encuentro respondo con lo que venga de internet
}

async function updateCache(){
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request,response);
}