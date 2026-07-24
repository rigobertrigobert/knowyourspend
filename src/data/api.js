// ─────────────────────────────────────────────────────────────
// API PROVIDER LAYER — where live data plugs in later.
//
// Right now the app runs 100% on the curated dataset in
// destinations.js (this was the MVP plan: accurate, fast, free).
//
// When you're ready for live data, you need to create YOUR OWN
// accounts and API keys (nobody can do this for you):
//
//  1. FLIGHTS — Kiwi.com Tequila API
//     → https://tequila.kiwi.com  (register as partner, free tier)
//     → gives real roundtrip prices + "anywhere from X" search
//
//  2. FLIGHTS (alt) — Amadeus Self-Service
//     → https://developers.amadeus.com  (free tier: 2k calls/mo)
//
//  3. ACCOMMODATION — Booking.com Affiliate Partner API
//     → https://www.booking.com/affiliate-program
//     → requires approval; also how you EARN affiliate revenue
//
//  4. DAILY COSTS — Numbeo API
//     → https://www.numbeo.com/common/api.jsp  (paid, ~$100/mo)
//     → or keep manually curated averages (free, current approach)
//
// IMPORTANT: never put API keys in frontend code. Use Netlify
// Functions (serverless) as a proxy:
//   netlify/functions/flights.js → calls Kiwi with your secret key
//   frontend calls /.netlify/functions/flights?to=DPS&month=7
// Keys live in Netlify dashboard → Site settings → Env variables.
// ─────────────────────────────────────────────────────────────

import { calcTrip, findMatches } from "./destinations.js";

export function getTripEstimate(destination, options) {
  return calcTrip(destination, options);
}

export function getBudgetMatches(options) {
  return findMatches(options);
}
