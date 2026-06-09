import React from 'react';

export default function RecommendedEvents({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <section className="py-20 bg-surface-base border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent-gold/70 block mb-3">
            Tailored For
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-content-primary">
            Recommended Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-border-subtle hover:border-accent-gold/40 transition-colors duration-400"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.label}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 bg-surface-card">
                <h3 className="font-serif text-xl text-accent-gold mb-3">{event.label}</h3>
                <p className="font-sans text-sm text-content-secondary leading-relaxed">
                  {event.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
