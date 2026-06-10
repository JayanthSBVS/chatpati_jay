import React, { useEffect, useRef } from 'react';

import { assets } from '../../data/assetMap';

const cuisines = [
  { id: 'delhi-street-food', label: "Delhi Street Food", hero: assets.cover.delhi },
  { id: 'north-indian-classics', label: "North Indian Classics", hero: assets.cover.north_indian },
  { id: 'mumbai-specialties', label: "Mumbai Specialties", hero: assets.cover.mumbai },
  { id: 'indo-chinese', label: "Indo-Chinese", hero: assets.cover.indo_chinese },
  { id: 'south-indian-traditions', label: "South Indian Traditions", hero: assets.cover.south_indian },
  { id: 'signature-refreshments', label: "Signature Refreshments", hero: assets.cover.refreshments },
];

export default function CuisineJourney() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.cuisine-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cuisine-item--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px 0px' }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);


  return (
    <section id="cuisine-journey" className="py-32 relative bg-surface-card overflow-hidden">
      <style>{`
        .cuisine-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .cuisine-item--visible {
          opacity: 1;
          transform: translateY(0);
        }
        .cuisine-item:nth-child(2) { transition-delay: 0.08s; }
        .cuisine-item:nth-child(3) { transition-delay: 0.14s; }
        .cuisine-item:nth-child(4) { transition-delay: 0.2s; }
        .cuisine-item:nth-child(5) { transition-delay: 0.26s; }
        .cuisine-item:nth-child(6) { transition-delay: 0.32s; }
      `}</style>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_var(--color-border-subtle)_0%,_transparent_70%)] pointer-events-none" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent-gold/70 block mb-4">
            The Breadth of Flavor
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-content-primary">
            A Journey Across <br />
            <span className="italic text-accent-gold font-light">Subcontinental Tastes</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {cuisines.map((cuisine) => (
            <div
              key={cuisine.id}
              className="cuisine-item border-b border-primary-cream/10 pb-8 flex items-end justify-between transition-all duration-500"
            >
              <h3 className="font-serif text-3xl md:text-5xl lg:text-7xl text-content-secondary">
                {cuisine.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
