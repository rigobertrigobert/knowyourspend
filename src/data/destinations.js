// ─────────────────────────────────────────────────────────────
// KnowYourSpend — Curated destination dataset
// Researched July 2026. Sources: BudgetYourTrip, Booking.com,
// Numbeo, Skyscanner, Gotripzi, travel cost guides.
// All prices in USD. Tiers: [budget, midRange, luxury]
// Per-night (accommodation) or per-person-per-day (others).
// Flight = roundtrip per adult, reference origin US/EU hubs.
// ─────────────────────────────────────────────────────────────

export const DESTINATIONS = {
  // ── SOUTHEAST ASIA ──────────────────────────────────────
  "Bali, Indonesia": {
    region: "Southeast Asia", emoji: "🌴", airportCode: "DPS",
    flight: [450, 600, 1100], accommodation: [12, 50, 200],
    food: [5, 15, 45], activities: [8, 25, 70],
    transport: [3, 12, 40], misc: [5, 12, 25],
    seasonality: [0.75,0.75,0.85,0.85,1.0,1.0,1.3,1.3,1.0,0.85,0.85,1.0],
    bestMonths: "Apr–Jun, Sep–Oct",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/dps/", accommodation:"https://www.booking.com/searchresults.html?ss=Bali", food:"https://www.numbeo.com/cost-of-living/in/Bali", activities:"https://www.viator.com/Bali/d283-ttd", transport:"https://www.rome2rio.com/s/Bali" },
  },
  "Bangkok, Thailand": {
    region: "Southeast Asia", emoji: "🛺", airportCode: "BKK",
    flight: [400, 550, 1050], accommodation: [10, 35, 120],
    food: [3, 12, 40], activities: [5, 20, 60],
    transport: [2, 8, 30], misc: [3, 8, 20],
    seasonality: [0.7,0.7,0.8,0.8,1.0,1.0,1.2,1.2,1.0,0.8,0.8,1.0],
    bestMonths: "Oct–Nov, Feb–Mar",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/bkkt/", accommodation:"https://www.booking.com/searchresults.html?ss=Bangkok", food:"https://www.numbeo.com/cost-of-living/in/Bangkok", activities:"https://www.viator.com/Bangkok/d191-ttd", transport:"https://www.rome2rio.com/s/Bangkok" },
  },
  "Chiang Mai, Thailand": {
    region: "Southeast Asia", emoji: "🏯", airportCode: "CNX",
    flight: [420, 580, 1080], accommodation: [8, 25, 100],
    food: [2, 10, 35], activities: [4, 15, 50],
    transport: [1.5, 6, 25], misc: [2, 6, 15],
    seasonality: [0.65,0.65,0.8,0.8,1.0,1.0,1.15,1.15,1.0,0.8,0.8,0.9],
    bestMonths: "Oct–Feb",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/cnx/", accommodation:"https://www.booking.com/searchresults.html?ss=Chiang+Mai", food:"https://www.numbeo.com/cost-of-living/in/Chiang-Mai", activities:"https://www.viator.com/Chiang-Mai/d286-ttd", transport:"https://www.rome2rio.com/s/Chiang-Mai" },
  },
  "Phuket, Thailand": {
    region: "Southeast Asia", emoji: "🏖️", airportCode: "HKT",
    flight: [450, 600, 1100], accommodation: [15, 45, 180],
    food: [4, 14, 45], activities: [8, 25, 70],
    transport: [3, 10, 35], misc: [4, 10, 22],
    seasonality: [0.8,0.8,0.85,0.85,0.9,0.9,1.2,1.2,1.0,0.85,0.85,1.15],
    bestMonths: "Nov–Mar",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/hkt/", accommodation:"https://www.booking.com/searchresults.html?ss=Phuket", food:"https://www.numbeo.com/cost-of-living/in/Phuket", activities:"https://www.viator.com/Phuket/d349-ttd", transport:"https://www.rome2rio.com/s/Phuket" },
  },
  "Hanoi, Vietnam": {
    region: "Southeast Asia", emoji: "🍜", airportCode: "HAN",
    flight: [420, 580, 1100], accommodation: [8, 30, 120],
    food: [3, 10, 35], activities: [4, 15, 50],
    transport: [1.5, 5, 20], misc: [2, 6, 15],
    seasonality: [0.8,0.8,0.85,1.0,1.0,0.9,0.9,0.9,1.0,1.1,1.1,0.9],
    bestMonths: "Oct–Dec, Mar–Apr",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/hana/", accommodation:"https://www.booking.com/searchresults.html?ss=Hanoi", food:"https://www.numbeo.com/cost-of-living/in/Hanoi", activities:"https://www.viator.com/Hanoi/d351-ttd", transport:"https://www.rome2rio.com/s/Hanoi" },
  },

  // ── EAST ASIA ───────────────────────────────────────────
  "Tokyo, Japan": {
    region: "East Asia", emoji: "🗼", airportCode: "TYO",
    flight: [500, 700, 1350], accommodation: [45, 120, 300],
    food: [8, 20, 60], activities: [10, 30, 90],
    transport: [6, 15, 45], misc: [10, 20, 40],
    seasonality: [0.9,0.9,1.15,1.15,1.0,1.0,1.0,1.0,1.0,1.15,1.15,1.0],
    bestMonths: "Mar–Apr, Oct–Nov",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/tyoa/", accommodation:"https://www.booking.com/searchresults.html?ss=Tokyo", food:"https://www.numbeo.com/cost-of-living/in/Tokyo", activities:"https://www.viator.com/Tokyo/d334-ttd", transport:"https://www.rome2rio.com/s/Tokyo" },
  },
  "Seoul, South Korea": {
    region: "East Asia", emoji: "🎎", airportCode: "ICN",
    flight: [480, 680, 1300], accommodation: [25, 80, 250],
    food: [6, 18, 55], activities: [8, 25, 70],
    transport: [3, 10, 30], misc: [5, 12, 25],
    seasonality: [0.85,0.85,1.0,1.15,1.1,1.0,1.0,1.0,1.1,1.15,1.0,0.85],
    bestMonths: "Mar–May, Sep–Nov",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/sela/", accommodation:"https://www.booking.com/searchresults.html?ss=Seoul", food:"https://www.numbeo.com/cost-of-living/in/Seoul", activities:"https://www.viator.com/Seoul/d973-ttd", transport:"https://www.rome2rio.com/s/Seoul" },
  },

  // ── SOUTH ASIA ──────────────────────────────────────────
  "Colombo, Sri Lanka": {
    region: "South Asia", emoji: "🫖", airportCode: "CMB",
    flight: [400, 550, 1050], accommodation: [10, 35, 150],
    food: [3, 10, 35], activities: [5, 15, 50],
    transport: [2, 6, 25], misc: [2, 6, 15],
    seasonality: [1.0,1.0,0.9,0.9,0.8,0.8,0.85,0.85,0.9,0.9,0.9,1.1],
    bestMonths: "Dec–Mar",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/cmb/", accommodation:"https://www.booking.com/searchresults.html?ss=Colombo", food:"https://www.numbeo.com/cost-of-living/in/Colombo", activities:"https://www.viator.com/Colombo/d929-ttd", transport:"https://www.rome2rio.com/s/Colombo" },
  },

  // ── WESTERN EUROPE ──────────────────────────────────────
  "Lisbon, Portugal": {
    region: "Western Europe", emoji: "🚋", airportCode: "LIS",
    flight: [280, 450, 850], accommodation: [35, 80, 250],
    food: [8, 20, 55], activities: [8, 25, 65],
    transport: [5, 12, 40], misc: [5, 10, 20],
    seasonality: [0.8,0.8,0.85,1.15,1.15,1.15,1.15,1.15,1.0,1.0,0.8,0.95],
    bestMonths: "Apr–May, Sep–Oct",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/lis/", accommodation:"https://www.booking.com/searchresults.html?ss=Lisbon", food:"https://www.numbeo.com/cost-of-living/in/Lisbon", activities:"https://www.viator.com/Lisbon/d538-ttd", transport:"https://www.rome2rio.com/s/Lisbon" },
  },
  "Barcelona, Spain": {
    region: "Western Europe", emoji: "🎭", airportCode: "BCN",
    flight: [300, 500, 900], accommodation: [30, 90, 280],
    food: [10, 25, 70], activities: [10, 30, 80],
    transport: [4, 12, 40], misc: [6, 14, 28],
    seasonality: [0.8,0.8,0.9,1.0,1.1,1.2,1.3,1.3,1.1,1.0,0.8,0.85],
    bestMonths: "Apr–Jun, Sep–Oct",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/bcn/", accommodation:"https://www.booking.com/searchresults.html?ss=Barcelona", food:"https://www.numbeo.com/cost-of-living/in/Barcelona", activities:"https://www.viator.com/Barcelona/d562-ttd", transport:"https://www.rome2rio.com/s/Barcelona" },
  },
  "Paris, France": {
    region: "Western Europe", emoji: "🗼", airportCode: "PAR",
    flight: [320, 520, 950], accommodation: [40, 120, 350],
    food: [12, 30, 80], activities: [10, 30, 80],
    transport: [5, 12, 35], misc: [8, 15, 30],
    seasonality: [0.8,0.8,0.9,1.1,1.1,1.2,1.2,1.2,1.1,1.0,0.85,0.9],
    bestMonths: "Apr–Jun, Sep–Oct",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/pari/", accommodation:"https://www.booking.com/searchresults.html?ss=Paris", food:"https://www.numbeo.com/cost-of-living/in/Paris", activities:"https://www.viator.com/Paris/d479-ttd", transport:"https://www.rome2rio.com/s/Paris" },
  },
  "Rome, Italy": {
    region: "Western Europe", emoji: "🏛️", airportCode: "ROM",
    flight: [310, 500, 920], accommodation: [30, 90, 280],
    food: [10, 25, 65], activities: [10, 28, 75],
    transport: [4, 10, 35], misc: [5, 12, 25],
    seasonality: [0.8,0.8,0.9,1.1,1.15,1.2,1.2,1.2,1.1,1.05,0.85,0.9],
    bestMonths: "Apr–Jun, Sep–Oct",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/rome/", accommodation:"https://www.booking.com/searchresults.html?ss=Rome", food:"https://www.numbeo.com/cost-of-living/in/Rome", activities:"https://www.viator.com/Rome/d511-ttd", transport:"https://www.rome2rio.com/s/Rome" },
  },
  "London, UK": {
    region: "Western Europe", emoji: "💂", airportCode: "LON",
    flight: [300, 480, 900], accommodation: [45, 140, 400],
    food: [14, 35, 90], activities: [12, 35, 90],
    transport: [8, 18, 45], misc: [8, 18, 35],
    seasonality: [0.8,0.8,0.85,1.0,1.1,1.2,1.3,1.3,1.1,1.0,0.85,0.9],
    bestMonths: "May–Jun, Sep",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/lond/", accommodation:"https://www.booking.com/searchresults.html?ss=London", food:"https://www.numbeo.com/cost-of-living/in/London", activities:"https://www.viator.com/London/d737-ttd", transport:"https://www.rome2rio.com/s/London" },
  },
  "Prague, Czech Republic": {
    region: "Central Europe", emoji: "🏰", airportCode: "PRG",
    flight: [320, 480, 880], accommodation: [20, 60, 200],
    food: [6, 16, 45], activities: [6, 18, 55],
    transport: [3, 8, 25], misc: [4, 8, 18],
    seasonality: [0.75,0.75,0.85,1.0,1.1,1.15,1.2,1.2,1.1,1.0,0.8,0.9],
    bestMonths: "Apr–Jun, Sep–Oct",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/prg/", accommodation:"https://www.booking.com/searchresults.html?ss=Prague", food:"https://www.numbeo.com/cost-of-living/in/Prague", activities:"https://www.viator.com/Prague/d526-ttd", transport:"https://www.rome2rio.com/s/Prague" },
  },

  // ── TURKEY & MIDDLE EAST ────────────────────────────────
  "Istanbul, Turkey": {
    region: "Western Asia", emoji: "🕌", airportCode: "IST",
    flight: [250, 400, 800], accommodation: [15, 55, 200],
    food: [5, 16, 50], activities: [5, 20, 60],
    transport: [2, 8, 30], misc: [3, 8, 20],
    seasonality: [0.75,0.75,0.85,1.1,1.1,1.2,1.2,1.2,1.1,1.0,0.8,0.85],
    bestMonths: "Apr–May, Sep–Oct",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/ista/", accommodation:"https://www.booking.com/searchresults.html?ss=Istanbul", food:"https://www.numbeo.com/cost-of-living/in/Istanbul", activities:"https://www.viator.com/Istanbul/d585-ttd", transport:"https://www.rome2rio.com/s/Istanbul" },
  },
  "Dubai, UAE": {
    region: "Middle East", emoji: "🏙️", airportCode: "DXB",
    flight: [350, 550, 1100], accommodation: [35, 100, 350],
    food: [10, 25, 70], activities: [15, 40, 100],
    transport: [4, 12, 40], misc: [8, 15, 30],
    seasonality: [1.2,1.2,1.1,0.9,0.75,0.65,0.6,0.6,0.7,0.85,1.1,1.25],
    bestMonths: "Nov–Mar",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/dxba/", accommodation:"https://www.booking.com/searchresults.html?ss=Dubai", food:"https://www.numbeo.com/cost-of-living/in/Dubai", activities:"https://www.viator.com/Dubai/d828-ttd", transport:"https://www.rome2rio.com/s/Dubai" },
  },

  // ── AFRICA ──────────────────────────────────────────────
  "Zanzibar, Tanzania": {
    region: "East Africa", emoji: "🐚", airportCode: "ZNZ",
    flight: [350, 500, 900], accommodation: [15, 50, 200],
    food: [4, 12, 40], activities: [10, 30, 80],
    transport: [3, 10, 35], misc: [4, 10, 20],
    seasonality: [0.9,0.9,0.8,0.75,0.8,1.0,1.2,1.25,1.1,1.0,0.85,1.1],
    bestMonths: "Jun–Oct",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/znz/", accommodation:"https://www.booking.com/searchresults.html?ss=Zanzibar", food:"https://www.numbeo.com/cost-of-living/in/Zanzibar", activities:"https://www.viator.com/Zanzibar/d5442-ttd", transport:"https://www.rome2rio.com/s/Zanzibar" },
  },
  "Marrakech, Morocco": {
    region: "North Africa", emoji: "🕌", airportCode: "RAK",
    flight: [300, 450, 850], accommodation: [12, 45, 180],
    food: [4, 12, 40], activities: [5, 18, 55],
    transport: [2, 6, 25], misc: [3, 8, 18],
    seasonality: [0.85,0.85,1.0,1.1,1.0,0.8,0.75,0.75,0.9,1.1,1.0,0.9],
    bestMonths: "Mar–Apr, Sep–Nov",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/rak/", accommodation:"https://www.booking.com/searchresults.html?ss=Marrakech", food:"https://www.numbeo.com/cost-of-living/in/Marrakesh", activities:"https://www.viator.com/Marrakech/d5408-ttd", transport:"https://www.rome2rio.com/s/Marrakech" },
  },
  "Cape Town, South Africa": {
    region: "Southern Africa", emoji: "🦁", airportCode: "CPT",
    flight: [500, 700, 1300], accommodation: [20, 60, 220],
    food: [6, 16, 50], activities: [8, 25, 70],
    transport: [3, 10, 35], misc: [4, 10, 22],
    seasonality: [1.2,1.2,1.1,0.9,0.8,0.75,0.75,0.75,0.85,1.0,1.1,1.2],
    bestMonths: "Oct–Mar",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/cpt/", accommodation:"https://www.booking.com/searchresults.html?ss=Cape+Town", food:"https://www.numbeo.com/cost-of-living/in/Cape-Town", activities:"https://www.viator.com/Cape-Town/d318-ttd", transport:"https://www.rome2rio.com/s/Cape-Town" },
  },

  // ── AMERICAS ────────────────────────────────────────────
  "Mexico City, Mexico": {
    region: "North America", emoji: "🌮", airportCode: "MEX",
    flight: [350, 500, 950], accommodation: [20, 60, 180],
    food: [5, 15, 50], activities: [5, 18, 55],
    transport: [2, 8, 30], misc: [3, 8, 20],
    seasonality: [0.8,0.8,1.1,1.1,0.9,0.9,0.9,0.9,0.9,1.0,1.0,1.1],
    bestMonths: "Mar–Apr, Oct–Nov",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/mexa/", accommodation:"https://www.booking.com/searchresults.html?ss=Mexico+City", food:"https://www.numbeo.com/cost-of-living/in/Mexico-City", activities:"https://www.viator.com/Mexico-City/d628-ttd", transport:"https://www.rome2rio.com/s/Mexico-City" },
  },
  "Cancún, Mexico": {
    region: "North America", emoji: "🌊", airportCode: "CUN",
    flight: [280, 450, 850], accommodation: [25, 80, 300],
    food: [6, 18, 55], activities: [10, 30, 80],
    transport: [3, 10, 35], misc: [5, 12, 25],
    seasonality: [1.1,1.1,1.2,1.1,0.9,0.85,0.85,0.8,0.75,0.8,0.9,1.15],
    bestMonths: "Dec–Apr",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/cuna/", accommodation:"https://www.booking.com/searchresults.html?ss=Cancun", food:"https://www.numbeo.com/cost-of-living/in/Cancun", activities:"https://www.viator.com/Cancun/d631-ttd", transport:"https://www.rome2rio.com/s/Cancun" },
  },
  "Buenos Aires, Argentina": {
    region: "South America", emoji: "💃", airportCode: "BUE",
    flight: [450, 650, 1200], accommodation: [15, 45, 180],
    food: [5, 14, 45], activities: [5, 16, 50],
    transport: [2, 6, 22], misc: [3, 7, 18],
    seasonality: [0.9,0.9,1.0,1.0,0.8,0.75,0.75,0.75,0.85,1.0,1.1,1.1],
    bestMonths: "Oct–Dec, Mar–Apr",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/buea/", accommodation:"https://www.booking.com/searchresults.html?ss=Buenos+Aires", food:"https://www.numbeo.com/cost-of-living/in/Buenos-Aires", activities:"https://www.viator.com/Buenos-Aires/d901-ttd", transport:"https://www.rome2rio.com/s/Buenos-Aires" },
  },
  "Medellín, Colombia": {
    region: "South America", emoji: "🌺", airportCode: "MDE",
    flight: [300, 480, 900], accommodation: [12, 40, 160],
    food: [4, 12, 40], activities: [5, 15, 50],
    transport: [1.5, 5, 20], misc: [2, 6, 15],
    seasonality: [1.0,1.0,0.95,0.9,0.9,0.95,1.0,1.0,0.9,0.9,0.9,1.1],
    bestMonths: "Dec–Mar, Jun–Aug",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/mdea/", accommodation:"https://www.booking.com/searchresults.html?ss=Medellin", food:"https://www.numbeo.com/cost-of-living/in/Medellin", activities:"https://www.viator.com/Medellin/d5765-ttd", transport:"https://www.rome2rio.com/s/Medellin" },
  },

  // ── OCEANIA ─────────────────────────────────────────────
  "Sydney, Australia": {
    region: "Oceania", emoji: "🦘", airportCode: "SYD",
    flight: [550, 800, 1500], accommodation: [40, 120, 350],
    food: [12, 28, 70], activities: [10, 30, 80],
    transport: [6, 15, 40], misc: [8, 16, 30],
    seasonality: [1.2,1.2,1.1,0.9,0.8,0.75,0.75,0.8,0.9,1.0,1.1,1.2],
    bestMonths: "Sep–Nov, Mar–May",
    links: { flights:"https://www.skyscanner.com/transport/flights/nyca/syda/", accommodation:"https://www.booking.com/searchresults.html?ss=Sydney", food:"https://www.numbeo.com/cost-of-living/in/Sydney", activities:"https://www.viator.com/Sydney/d357-ttd", transport:"https://www.rome2rio.com/s/Sydney" },
  },
};

export const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export const TIER_LABELS = ["Budget", "Mid-range", "Luxury"];
export const TIER_ICONS = ["🎒", "🧳", "💎"];
export const CHILD_DISCOUNT = 0.6;

// ── Origin cities with flight price multipliers ──────────
// Base prices in the dataset are calibrated from US East Coast.
// Multipliers adjust for distance/route availability from each origin.
// "nearby" destinations get cheaper, "far" ones get pricier.
export const ORIGINS = {
  "New York, US":       { code: "nyca",  region: "north_america", emoji: "🗽" },
  "Los Angeles, US":    { code: "laxa",  region: "north_america", emoji: "🌴" },
  "London, UK":         { code: "lond",  region: "europe",        emoji: "💂" },
  "Paris, France":      { code: "pari",  region: "europe",        emoji: "🗼" },
  "Istanbul, Turkey":   { code: "ista",  region: "turkey",        emoji: "🕌" },
  "Dubai, UAE":         { code: "dxba",  region: "middle_east",   emoji: "🏙️" },
  "Sydney, Australia":  { code: "syda",  region: "oceania",       emoji: "🦘" },
  "São Paulo, Brazil":  { code: "saoa",  region: "south_america", emoji: "🇧🇷" },
  "Mumbai, India":      { code: "boma",  region: "south_asia",    emoji: "🇮🇳" },
  "Tokyo, Japan":       { code: "tyoa",  region: "east_asia",     emoji: "🎌" },
};

// Flight multiplier: origin_region → destination_region → multiplier
// relative to the US East Coast baseline in the dataset.
const FLIGHT_MULT = {
  north_america: {
    "Southeast Asia": 1.0, "East Asia": 1.0, "South Asia": 1.1,
    "Western Europe": 0.85, "Central Europe": 0.9, "Western Asia": 1.0,
    "Middle East": 1.0, "East Africa": 1.1, "North Africa": 0.95,
    "Southern Africa": 1.15, "North America": 0.5, "South America": 0.7,
    "Oceania": 1.1,
  },
  europe: {
    "Southeast Asia": 0.85, "East Asia": 0.9, "South Asia": 0.75,
    "Western Europe": 0.35, "Central Europe": 0.3, "Western Asia": 0.45,
    "Middle East": 0.55, "East Africa": 0.7, "North Africa": 0.4,
    "Southern Africa": 0.8, "North America": 0.85, "South America": 0.9,
    "Oceania": 1.15,
  },
  turkey: {
    "Southeast Asia": 0.75, "East Asia": 0.85, "South Asia": 0.6,
    "Western Europe": 0.4, "Central Europe": 0.35, "Western Asia": 0.2,
    "Middle East": 0.35, "East Africa": 0.55, "North Africa": 0.35,
    "Southern Africa": 0.75, "North America": 0.95, "South America": 1.0,
    "Oceania": 1.1,
  },
  middle_east: {
    "Southeast Asia": 0.6, "East Asia": 0.75, "South Asia": 0.45,
    "Western Europe": 0.55, "Central Europe": 0.55, "Western Asia": 0.3,
    "Middle East": 0.2, "East Africa": 0.45, "North Africa": 0.5,
    "Southern Africa": 0.65, "North America": 1.0, "South America": 1.1,
    "Oceania": 0.9,
  },
  oceania: {
    "Southeast Asia": 0.5, "East Asia": 0.6, "South Asia": 0.7,
    "Western Europe": 1.1, "Central Europe": 1.1, "Western Asia": 1.0,
    "Middle East": 0.85, "East Africa": 1.0, "North Africa": 1.1,
    "Southern Africa": 1.0, "North America": 1.1, "South America": 1.2,
    "Oceania": 0.3,
  },
  south_america: {
    "Southeast Asia": 1.15, "East Asia": 1.2, "South Asia": 1.2,
    "Western Europe": 0.85, "Central Europe": 0.9, "Western Asia": 1.0,
    "Middle East": 1.1, "East Africa": 1.1, "North Africa": 0.95,
    "Southern Africa": 1.0, "North America": 0.65, "South America": 0.4,
    "Oceania": 1.2,
  },
  south_asia: {
    "Southeast Asia": 0.45, "East Asia": 0.6, "South Asia": 0.25,
    "Western Europe": 0.7, "Central Europe": 0.7, "Western Asia": 0.4,
    "Middle East": 0.35, "East Africa": 0.5, "North Africa": 0.6,
    "Southern Africa": 0.7, "North America": 1.0, "South America": 1.15,
    "Oceania": 0.8,
  },
  east_asia: {
    "Southeast Asia": 0.4, "East Asia": 0.25, "South Asia": 0.55,
    "Western Europe": 0.9, "Central Europe": 0.9, "Western Asia": 0.75,
    "Middle East": 0.7, "East Africa": 0.9, "North Africa": 0.9,
    "Southern Africa": 0.95, "North America": 1.0, "South America": 1.2,
    "Oceania": 0.6,
  },
};

export function getFlightMultiplier(originKey, destRegion) {
  const origin = ORIGINS[originKey];
  if (!origin) return 1;
  const regionMults = FLIGHT_MULT[origin.region];
  if (!regionMults) return 1;
  return regionMults[destRegion] ?? 1;
}

// ── Core cost engine ─────────────────────────────────────────
export function calcTrip(dest, { tier, adults, children, nights, month, origin }) {
  const d = DESTINATIONS[dest];
  if (!d) return null;
  const season = d.seasonality[month];
  const people = adults + children;
  const flightMult = origin ? getFlightMultiplier(origin, d.region) : 1;

  const flightAdult = d.flight[tier] * season * flightMult;
  const flights = flightAdult * adults + flightAdult * CHILD_DISCOUNT * children;

  const rooms = Math.ceil(people / 2);
  const accommodation = d.accommodation[tier] * season * rooms * nights;

  const perDay = (arr) => arr[tier] * (adults + CHILD_DISCOUNT * children) * nights;
  const food = perDay(d.food);
  const activities = perDay(d.activities);
  const transport = d.transport[tier] * people * nights;
  const misc = d.misc[tier] * people * nights;

  const total = flights + accommodation + food + activities + transport + misc;

  return {
    flights: Math.round(flights),
    accommodation: Math.round(accommodation),
    food: Math.round(food),
    activities: Math.round(activities),
    transport: Math.round(transport),
    misc: Math.round(misc),
    total: Math.round(total),
    perPerson: Math.round(total / people),
    perDay: Math.round(total / nights),
  };
}

// Budget-first: every (destination × tier) combo that fits
export function findMatches({ budget, adults, children, nights, month, origin }) {
  const matches = [];
  for (const dest of Object.keys(DESTINATIONS)) {
    for (const tier of [0, 1, 2]) {
      const c = calcTrip(dest, { tier, adults, children, nights, month, origin });
      if (c && c.total <= budget) {
        matches.push({
          destination: dest,
          region: DESTINATIONS[dest].region,
          emoji: DESTINATIONS[dest].emoji,
          tier,
          tierLabel: TIER_LABELS[tier],
          cost: c.total,
          leftover: Math.round(budget - c.total),
        });
      }
    }
  }
  return matches.sort((a, b) => b.leftover - a.leftover);
}
