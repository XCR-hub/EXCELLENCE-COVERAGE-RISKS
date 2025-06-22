## XCR-Bon

This project now includes a basic service worker that caches core assets for
offline usage. When the application is first loaded the service worker caches
`index.html`, `manifest.json`, icons and other important files. Subsequent
visits will serve these files from cache when available.

No additional setup is required; the service worker registers automatically on
page load.
