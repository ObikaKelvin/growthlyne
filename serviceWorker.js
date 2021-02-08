const growthLyne = "growth-lyne-v1"
const assets = [
  
  "/growthlyne/index.html",
  "/growthlyne//about.html",
  "/growthlyne//contact.html",
  "/growthlyne//knowledgelibrary.html",
  "/growthlyne//offerings.html",
  "/growthlyne/css/style1.css",
  "/growthlyne/js/main.js",
  "/growthlyne/images/business-improvements-1024x576.jpg",
  "/growthlyne/images/Professional-Headshot-6.jpg"
  
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

