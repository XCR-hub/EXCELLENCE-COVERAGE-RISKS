## XCR-Bon

This project includes a basic service worker that caches core assets for
offline usage. On the first visit the service worker caches `index.html`,
`manifest.json`, icons and other important files so subsequent visits can serve
these resources from cache. The service worker is conservative: it only handles
same‑origin HTTP(S) `GET` requests, preventing errors when browser extensions
or other schemes are fetched.

No additional setup is required; the service worker registers automatically on
page load.
