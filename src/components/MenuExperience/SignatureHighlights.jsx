import React, { useEffect, useRef } from 'react';

const highlights = [
  { value: "150+", label: "Authentic Dishes" },
  { value: "Live", label: "Food Stations" },
  { value: "10+", label: "Event Types" },
  { value: "100%", label: "Customizable" }
];

export default function SignatureHighlights() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll('.stats-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stats-item--visible');
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-surface-base relative border-y border-border-subtle">
      <style>{`
        .stats-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .stats-item--visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <div className="absolute inset-0 bg-texture-paper opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center divide-x-0 md:divide-x divide-border-subtle">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="stats-item flex flex-col items-center justify-center"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-accent-gold mb-2 md:mb-4">
                {item.value}
              </h3>
              <p className="font-sans text-[9px] md:text-xs tracking-[0.3em] uppercase text-content-secondary">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
