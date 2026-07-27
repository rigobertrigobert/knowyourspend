import { useState, useMemo } from "react";
import { DESTINATIONS, MONTHS, TIER_LABELS, TIER_ICONS, ORIGINS } from "./data/destinations.js";
import { getTripEstimate, getBudgetMatches } from "./data/api.js";

const CAT_COLORS = {
  Flights: "#e8614d",
  Accommodation: "#d4883e",
  Food: "#8baa96",
  Activities: "#5b8fa8",
  Transport: "#7c6caa",
  Misc: "#a0896c",
};

export default function App() {
  const [mode, setMode] = useState(null);
  const [step, setStep] = useState(1);

  // shared trip inputs
  const [origin, setOrigin] = useState("Istanbul, Turkey");
  const [destination, setDestination] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [nights, setNights] = useState(7);
  const [month, setMonth] = useState(new Date().getMonth());
  const [tier, setTier] = useState(1);

  // budget-first inputs
  const [budget, setBudget] = useState(2500);

  const costs = useMemo(() => {
    if (!destination) return null;
    if (mode !== "destination" && mode !== "budget-detail") return null;
    return getTripEstimate(destination, { tier, adults, children, nights, month, origin });
  }, [mode, destination, tier, adults, children, nights, month, origin]);

  const matches = useMemo(() => {
    if (mode !== "budget") return [];
    return getBudgetMatches({ budget, adults, children, nights, month, origin });
  }, [mode, budget, adults, children, nights, month, origin]);

  const breakdown = costs
    ? [
        { label: "Flights", value: costs.flights },
        { label: "Accommodation", value: costs.accommodation },
        { label: "Food", value: costs.food },
        { label: "Activities", value: costs.activities },
        { label: "Transport", value: costs.transport },
        { label: "Misc", value: costs.misc },
      ]
    : [];

  const reset = () => {
    setMode(null);
    setStep(1);
    setDestination("");
  };

  const groupLabel = `${adults} adult${adults > 1 ? "s" : ""}${
    children > 0 ? ` + ${children} child${children > 1 ? "ren" : ""}` : ""
  }`;

  return (
    <div className="app">
      <header className="header">
        <h1>
          Unpackie
        </h1>
        <p>Calculate. Discover. Travel.</p>
      </header>

      <main className="container">
        {/* ── MODE PICKER ── */}
        {!mode && (
          <>
            <h2 className="section-title">How do you want to plan?</h2>
            <div className="mode-grid">
              <button className="mode-card" onClick={() => { setMode("destination"); setStep(1); }}>
                <div className="icon">📍</div>
                <div className="title">Destination first</div>
                <div className="sub">I know where I'm going — show me the real cost</div>
              </button>
              <button className="mode-card" onClick={() => { setMode("budget"); setStep(1); }}>
                <div className="icon">💰</div>
                <div className="title">Budget first</div>
                <div className="sub">I have an amount — show me where I can go</div>
              </button>
            </div>
            <p className="data-note">
              Estimates cover flights, stay, food, activities, local transport and extras.
              Pricing researched July 2026 for {Object.keys(DESTINATIONS).length} destinations,
              adjusted for season. More destinations coming.
            </p>
          </>
        )}

        {/* ── DESTINATION-FIRST ── */}
        {mode === "destination" && (
          <>
            <button className="back-link" onClick={reset}>← Change mode</button>

            {step === 1 && (
              <>
                <h2 className="section-title">Trip basics</h2>

                <label className="label" htmlFor="origin">Flying from</label>
                <select id="origin" className="select" value={origin} onChange={(e) => setOrigin(e.target.value)}>
                  {Object.entries(ORIGINS).map(([name, o]) => (
                    <option key={name} value={name}>{o.emoji} {name}</option>
                  ))}
                </select>

                <label className="label" htmlFor="dest">Destination</label>
                <select id="dest" className="select" value={destination} onChange={(e) => setDestination(e.target.value)}>
                  <option value="">Choose a destination…</option>
                  {Object.entries(DESTINATIONS).map(([name, d]) => (
                    <option key={name} value={name}>{d.emoji} {name}</option>
                  ))}
                </select>

                <div className="row2">
                  <div>
                    <label className="label">Adults</label>
                    <Stepper value={adults} onChange={setAdults} min={1} max={8} />
                  </div>
                  <div>
                    <label className="label">Children</label>
                    <Stepper value={children} onChange={setChildren} min={0} max={6} />
                  </div>
                </div>

                <label className="label">Nights</label>
                <Stepper value={nights} onChange={setNights} min={1} max={30} />

                <label className="label">Month of travel</label>
                <div className="month-grid">
                  {MONTHS.map((m, i) => (
                    <button key={m} className={`month-btn ${month === i ? "active" : ""}`} onClick={() => setMonth(i)}>
                      {m}
                    </button>
                  ))}
                </div>
                {destination && (
                  <p className="result-meta" style={{ marginTop: 8 }}>
                    Best value months for {destination.split(",")[0]}: {DESTINATIONS[destination].bestMonths}
                  </p>
                )}

                <button className="btn-primary" disabled={!destination} onClick={() => setStep(2)}>
                  Next — pick your style
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="section-title">How do you travel?</h2>
                <div className="tier-grid">
                  {TIER_LABELS.map((t, i) => (
                    <button key={t} className={`tier-btn ${tier === i ? "active" : ""}`} onClick={() => setTier(i)}>
                      <span className="emoji">{TIER_ICONS[i]}</span>
                      {t}
                    </button>
                  ))}
                </div>
                <div className="btn-row">
                  <button className="btn-secondary" onClick={() => setStep(1)}>← Back</button>
                  <button className="btn-primary" style={{ marginTop: 0, flex: 1.4 }} onClick={() => setStep(3)}>
                    See my estimate
                  </button>
                </div>
              </>
            )}

            {step === 3 && costs && (
              <>
                <h2 className="section-title">
                  {nights} nights in {destination.split(",")[0]}
                </h2>
                <p className="result-meta">
                  {TIER_LABELS[tier]} · {MONTHS[month]} · {groupLabel}
                </p>

                <div className="total-card">
                  <div className="eyebrow">Estimated total</div>
                  <div className="big">${costs.total.toLocaleString()}</div>
                  <div className="subrow">
                    <span>${costs.perPerson.toLocaleString()} / person</span>
                    <span>${costs.perDay.toLocaleString()} / day</span>
                  </div>
                </div>

                <div className="stack-bar">
                  {breakdown.map((b) => {
                    const pct = (b.value / costs.total) * 100;
                    return pct >= 1 ? (
                      <div key={b.label} style={{ width: `${pct}%`, background: CAT_COLORS[b.label] }} />
                    ) : null;
                  })}
                </div>

                <div style={{ marginTop: 10 }}>
                  {breakdown.map((b) => {
                    const linkKey = b.label.toLowerCase();
                    let url = destination && DESTINATIONS[destination]?.links?.[linkKey];
                    // Swap Skyscanner origin code to match selected origin
                    if (url && linkKey === "flights" && origin && ORIGINS[origin]) {
                      url = url.replace(/flights\/[^/]+\//, `flights/${ORIGINS[origin].code}/`);
                    }
                    const Row = url ? "a" : "div";
                    const extra = url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {};
                    return (
                      <Row key={b.label} className={`break-row ${url ? "break-row-link" : ""}`} {...extra}>
                        <span className="left">
                          <span className="dot" style={{ background: CAT_COLORS[b.label] }} />
                          {b.label}
                          {url && <span className="link-arrow">→</span>}
                        </span>
                        <span>
                          <span className="amt">${b.value.toLocaleString()}</span>
                          <span className="pct">{Math.round((b.value / costs.total) * 100)}%</span>
                        </span>
                      </Row>
                    );
                  })}
                </div>

                <div className="btn-row">
                  <button className="btn-secondary" onClick={() => setStep(2)}>← Adjust style</button>
                  <button className="btn-secondary" onClick={reset}>New trip</button>
                </div>
              </>
            )}
          </>
        )}

        {/* ── BUDGET-FIRST ── */}
        {mode === "budget" && (
          <>
            <button className="back-link" onClick={reset}>← Change mode</button>

            {step === 1 && (
              <>
                <h2 className="section-title">What's your budget?</h2>

                <label className="label" htmlFor="origin2">Flying from</label>
                <select id="origin2" className="select" value={origin} onChange={(e) => setOrigin(e.target.value)}>
                  {Object.entries(ORIGINS).map(([name, o]) => (
                    <option key={name} value={name}>{o.emoji} {name}</option>
                  ))}
                </select>

                <label className="label" htmlFor="budget">Total budget (USD)</label>
                <input
                  id="budget"
                  className="input"
                  type="number"
                  inputMode="numeric"
                  value={budget}
                  min={0}
                  onChange={(e) => setBudget(Math.max(0, Number(e.target.value)))}
                />

                <div className="row2">
                  <div>
                    <label className="label">Nights</label>
                    <Stepper value={nights} onChange={setNights} min={1} max={30} />
                  </div>
                  <div>
                    <label className="label">Adults</label>
                    <Stepper value={adults} onChange={setAdults} min={1} max={8} />
                  </div>
                </div>

                <label className="label">Children</label>
                <Stepper value={children} onChange={setChildren} min={0} max={6} />

                <label className="label">Month of travel</label>
                <div className="month-grid">
                  {MONTHS.map((m, i) => (
                    <button key={m} className={`month-btn ${month === i ? "active" : ""}`} onClick={() => setMonth(i)}>
                      {m}
                    </button>
                  ))}
                </div>

                <button className="btn-primary" onClick={() => setStep(2)}>
                  Show me where I can go
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="section-title">
                  {matches.length} option{matches.length !== 1 ? "s" : ""} within budget
                </h2>
                <p className="result-meta" style={{ marginBottom: 16 }}>
                  ${budget.toLocaleString()} · {nights} nights · {groupLabel} · {MONTHS[month]}
                </p>

                {matches.length === 0 ? (
                  <div className="empty-state">
                    <div className="icon">🌍</div>
                    Nothing fits this budget yet. Try more budget, fewer nights, or a cheaper month —
                    off-season can cut costs by 25–30%.
                  </div>
                ) : (
                  matches.map((m, i) => (
                    <div key={i} className="match-card" style={{ cursor: "pointer" }} onClick={() => {
                      setDestination(m.destination);
                      setTier(m.tier);
                      setMode("budget-detail");
                    }}>
                      <div className="match-top">
                        <div>
                          <div className="match-name">{m.emoji} {m.destination}</div>
                          <div className="match-region">{m.region}</div>
                        </div>
                        <span className="tier-chip">{m.tierLabel}</span>
                      </div>
                      <div className="match-bottom">
                        <span className="match-cost">${m.cost.toLocaleString()}</span>
                        <span className="match-left">${m.leftover.toLocaleString()} left over →</span>
                      </div>
                    </div>
                  ))
                )}

                <div className="btn-row">
                  <button className="btn-secondary" onClick={() => setStep(1)}>← Adjust budget</button>
                  <button className="btn-secondary" onClick={reset}>Start over</button>
                </div>
              </>
            )}
          </>
        )}
        {/* ── BUDGET-DETAIL (clicked a match card) ── */}
        {mode === "budget-detail" && costs && (
          <>
            <button className="back-link" onClick={() => { setMode("budget"); setDestination(""); }}>
              ← Back to results
            </button>

            <h2 className="section-title">
              {nights} nights in {destination.split(",")[0]}
            </h2>
            <p className="result-meta">
              {TIER_LABELS[tier]} · {MONTHS[month]} · {groupLabel}
            </p>

            <div className="total-card">
              <div className="eyebrow">Estimated total</div>
              <div className="big">${costs.total.toLocaleString()}</div>
              <div className="subrow">
                <span>${costs.perPerson.toLocaleString()} / person</span>
                <span>${costs.perDay.toLocaleString()} / day</span>
              </div>
              {budget > 0 && (
                <div className="subrow" style={{ marginTop: 4 }}>
                  <span style={{ color: "#6fcf97" }}>
                    ${(budget - costs.total).toLocaleString()} left from your ${budget.toLocaleString()} budget
                  </span>
                </div>
              )}
            </div>

            <div className="stack-bar">
              {[
                { label: "Flights", value: costs.flights },
                { label: "Accommodation", value: costs.accommodation },
                { label: "Food", value: costs.food },
                { label: "Activities", value: costs.activities },
                { label: "Transport", value: costs.transport },
                { label: "Misc", value: costs.misc },
              ].map((b) => {
                const pct = (b.value / costs.total) * 100;
                return pct >= 1 ? (
                  <div key={b.label} style={{ width: `${pct}%`, background: CAT_COLORS[b.label] }} />
                ) : null;
              })}
            </div>

            <div style={{ marginTop: 10 }}>
              {[
                { label: "Flights", value: costs.flights },
                { label: "Accommodation", value: costs.accommodation },
                { label: "Food", value: costs.food },
                { label: "Activities", value: costs.activities },
                { label: "Transport", value: costs.transport },
                { label: "Misc", value: costs.misc },
              ].map((b) => {
                const linkKey = b.label.toLowerCase();
                let url = destination && DESTINATIONS[destination]?.links?.[linkKey];
                if (url && linkKey === "flights" && origin && ORIGINS[origin]) {
                  url = url.replace(/flights\/[^/]+\//, `flights/${ORIGINS[origin].code}/`);
                }
                const Row = url ? "a" : "div";
                const extra = url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Row key={b.label} className={`break-row ${url ? "break-row-link" : ""}`} {...extra}>
                    <span className="left">
                      <span className="dot" style={{ background: CAT_COLORS[b.label] }} />
                      {b.label}
                      {url && <span className="link-arrow">→</span>}
                    </span>
                    <span>
                      <span className="amt">${b.value.toLocaleString()}</span>
                      <span className="pct">{Math.round((b.value / costs.total) * 100)}%</span>
                    </span>
                  </Row>
                );
              })}
            </div>

            <div className="btn-row">
              <button className="btn-secondary" onClick={() => { setMode("budget"); setDestination(""); }}>← Back to results</button>
              <button className="btn-secondary" onClick={reset}>Start over</button>
            </div>
          </>
        )}

      </main>
    </div>
  );
}

function Stepper({ value, onChange, min = 0, max = 8 }) {
  return (
    <div className="stepper">
      <button aria-label="decrease" onClick={() => onChange(Math.max(min, value - 1))}>−</button>
      <span className="val">{value}</span>
      <button aria-label="increase" onClick={() => onChange(Math.min(max, value + 1))}>+</button>
    </div>
  );
}