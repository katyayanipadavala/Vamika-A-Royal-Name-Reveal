# Netlify deployment notes

This is a Vite + TanStack Start React project. It is **not** a plain static HTML upload, so keep the build command enabled.

Netlify settings for the repository root:
- Branch to deploy: `main`
- Base directory: leave blank
- Build command: `bun run build`
- Publish directory: `dist`

The `package.json` includes the `build` script and `netlify.toml` contains the matching settings. Do not delete `package.json`, `bun.lock`, `src/`, `vite.config.ts`, or `netlify.toml`. No hand-written root `index.html` is required; the Vite/TanStack build generates the output.

Image fixes in this version:
- All image paths point to files that exist under `public/images/`.
- The cradle image appears once in the gallery.
- The gallery contains four square photos: cradle, sleeping baby, flower setup, and family photo.
- The invitation screen's rectangular card displays the thali image.
- The old missing `vaamika-image33.jpg.asset.json` import is not used.

After replacing the repository files on GitHub, trigger a fresh deploy on Netlify and choose **Clear cache and deploy site** if an older build is still cached.
