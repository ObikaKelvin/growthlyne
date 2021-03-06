const GROWTHLYNE = "growth-lyne-v2";

var CURRENT_CACHES = {
  prefetch: 'prefetch-cache-v' + GROWTHLYNE
};


const assets = [
  
  "/growthlyne/index.html",
  "/growthlyne/about.html",
  "/growthlyne/contact.html",
  "/growthlyne/knowledgelibrary.html",
  "/growthlyne/offerings.html",
  "/growthlyne/css/style1.css",
  "/growthlyne/js/main.js",
  "/growthlyne/images/business-improvements-1024x576.jpg",
  "/growthlyne/images/Professional-Headshot-6.jpg"
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(GROWTHLYNE).then(cache => {
      return cache.addAll(assets)
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
    // fetchEvent.respondWith(
    //   caches.match(fetchEvent.request).then(res => {
    //     return res || fetch(fetchEvent.request)
    //   })
    // )
});

