import React from 'react';

const StatCard = ({ label, value, sub }) => (
  <div className="border border-border-subtle rounded-xl p-5 bg-surface-card">
    <span className="font-serif text-4xl md:text-5xl text-content-primary block mb-1">{value}</span>
    <span className="font-sans text-[10px] tracking-widest uppercase text-accent-gold block">{label}</span>
    {sub && <span className="font-sans text-xs text-content-secondary mt-1 block">{sub}</span>}
  </div>
);

export default function CuisineQuickFacts({ quickFacts }) {
  if (!quickFacts) return null;
  const { totalDishes, vegCount, nonVegCount, liveStations, bestFor } = quickFacts;

  return (
    <section className="py-16 bg-surface-base border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent-gold/70 block mb-10">
          At a Glance
        </span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard label="Total Dishes" value={totalDishes} />
          <StatCard label="Vegetarian" value={vegCount} sub={`${Math.round((vegCount / totalDishes) * 100)}% of menu`} />
          <StatCard label="Non-Vegetarian" value={nonVegCount} />
          <StatCard
            label="Live Stations"
            value={liveStations.length > 0 ? liveStations.length : '—'}
            sub={liveStations.length > 0 ? liveStations[0] : 'Not applicable'}
          />
        </div>

        {bestFor && bestFor.length > 0 && (
          <div>
            <span className="font-sans text-[10px] tracking-widest uppercase text-content-secondary block mb-4">
              Perfect For
            </span>
            <div className="flex flex-wrap gap-3">
              {bestFor.map((event, i) => (
                <span
                  key={i}
                  className="font-sans text-xs tracking-widest uppercase text-accent-gold border border-border-subtle px-4 py-2 rounded-full"
                >
                  ✓ {event}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
