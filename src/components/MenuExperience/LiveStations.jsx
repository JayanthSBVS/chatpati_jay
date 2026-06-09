import React, { useEffect, useRef } from 'react';
import { assets } from '../../data/assetMap';

const stations = [
  {
    name: "Paneer Taco",
    description: "A modern fusion of Mexican street style and robust Indian tandoori flavors. Smoked paneer, zesty chutneys, and crisp shells.",
    tag: "Fusion Grill",
    image: assets.menu.paneer
  },
  {
    name: "Raj Kachori",
    description: "The King of Chaats. A giant, crispy orb filled with spiced lentils, yogurt, sweet dates, and vibrant tamarind chutney.",
    tag: "Heritage Chaat",
    image: assets.menu.chaat
  },
  {
    name: "Chole Bhature",
    description: "Puffed, golden-fried breads served alongside rich, deeply spiced chickpea curry. The ultimate Delhi street comfort.",
    tag: "Delhi Classic",
    image: assets.menu.chole
  },
  {
    name: "Dosa Station",
    description: "Paper-thin, crispy rice crepes made fresh on the griddle. Served with coconut chutney and piping hot sambar.",
    tag: "South Indian",
    image: assets.menu.dosa
  },
  {
    name: "Jalebi",
    description: "Swirls of fermented batter fried to a crisp and soaked in saffron syrup. Best enjoyed piping hot.",
    tag: "Sweet Ending",
    image: assets.menu.street
  }
];

export default function LiveStations() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Single shared IntersectionObserver for the entire section
    // Each item gets a CSS class added when it enters the viewport
    const items = section.querySelectorAll('.station-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('station-item--visible');
            observer.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold: 0.15, rootMargin: '-50px 0px' }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-8 pb-16 md:py-32 bg-surface-paper relative border-t border-border-subtle"
    >
      <style>{`
        .station-item {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .station-item--visible {
          opacity: 1;
          transform: translateY(0);
        }
        .station-item:nth-child(2) { transition-delay: 0.1s; }
        .station-item:nth-child(3) { transition-delay: 0.15s; }
        .station-item:nth-child(4) { transition-delay: 0.2s; }
        .station-item:nth-child(5) { transition-delay: 0.25s; }
      `}</style>

      <div className="absolute inset-0 bg-texture-paper opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-32">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent-gold/70 block mb-4">
            Interactive Culinary Theater
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-content-primary">
            Live Stations
          </h2>
        </div>

        <div>
          {stations.map((station, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`station-item flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 mb-32`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative group overflow-hidden bg-surface-card rounded-[2rem] border border-border-subtle">
                  <img
                    src={station.image}
                    alt={station.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: 'saturate(var(--img-saturate)) contrast(var(--img-contrast))', opacity: 'var(--img-opacity-card)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent-gold mb-6 block">
                    {station.tag}
                  </span>
                  <h3 className="font-serif text-5xl md:text-7xl text-content-primary mb-8 leading-none">
                    {station.name}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-content-secondary leading-relaxed max-w-md mb-12">
                    {station.description}
                  </p>
                  <button className="self-start font-sans text-xs tracking-widest uppercase text-content-primary border-b border-border-subtle pb-2 hover:text-accent-gold hover:border-accent-gold transition-colors">
                    Add to Experience
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
