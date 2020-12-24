const growthLyne = "growth-lyne-v1"
const assets = [
  
  "/index.html",
  "/about.html",
  "/contact.html",
  "/knowledgelibrary.html",
  "/offerings.html",
  "/css/style.css",
  "/js/main.js",
  "/growthlyne/images/business-improvements-1024x576.jpg",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(growthLyne).then(cache => {
      return cache.addAll(assets)
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
});

