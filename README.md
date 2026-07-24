# KnowYourSpend

The true total cost of your next trip — flights, stay, food, activities, everything.
Two modes: **Destination first** ("what will Bali cost me?") and **Budget first**
("I have $2,000 — where can I go?").

Built with React + Vite. Installable as an app (PWA) on iPhone and Android.

---

## Run it locally (2 minutes)

```bash
npm install
npm run dev
```

Open http://localhost:5173 — done.

> This is a complete standalone project. You do NOT need your earlier
> `knowyourspend` Vite folder — this replaces it.

---

## Deploy to Netlify (same as HayHay / Denkfield)

1. Push this folder to a new GitHub repo
2. Netlify → **Add new site** → **Import an existing project** → pick the repo
3. Netlify auto-detects everything (the `netlify.toml` is already configured)
4. Deploy → your site is live at `something.netlify.app`
5. Rename it in Site settings → e.g. `knowyourspend.netlify.app`

Free. No domain purchase needed until you want one from Namecheap.

---

## "App" on phones — how the PWA works

The project ships with a manifest + service worker, so:

- **Android:** visit the site in Chrome → menu → **Add to Home screen** → it installs like an app
- **iPhone:** visit in Safari → Share → **Add to Home Screen**
- Works offline after first visit, full-screen, has an app icon

If you later want real app stores (Google Play / App Store), wrap this exact
codebase with **CapacitorJS** (capacitorjs.com) — no rewrite needed. That's a
later step, only worth it once the web version has traction.

---

## Where things live

```
src/App.jsx               → all UI (both modes)
src/styles.css            → design system (colors, fonts, layout)
src/data/destinations.js  → THE DATASET + cost engine (edit here to add destinations)
src/data/api.js           → future live-API layer (read the comments!)
public/                   → PWA manifest, service worker, icons
netlify.toml              → deploy config (already done)
```

## Adding a destination

Open `src/data/destinations.js`, copy an existing block, fill in numbers from
your research template. Save. That's it — both modes pick it up automatically.

## About live APIs (flights, hotels)

The app currently runs on the curated July-2026 dataset — accurate, fast, free.
Live APIs (Kiwi, Amadeus, Booking.com affiliate) all require **your own**
accounts and keys — see `src/data/api.js` for exactly which ones, where to sign
up, and how to wire them in safely with Netlify Functions when you're ready.

## Renaming the app

When you settle on a name (ParaGezi? ParaTrip?), change it in:
- `index.html` (title + meta)
- `public/manifest.webmanifest` (name, short_name)
- `src/App.jsx` (the header)
- `package.json` (name)
