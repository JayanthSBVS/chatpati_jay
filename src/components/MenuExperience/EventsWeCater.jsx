import React from 'react';
import { assets } from '../../data/assetMap';

const events = [
  {
    title: "The Grand Wedding",
    experience: "Royal Buffet Setup",
    station: "Live Chaat & Dosa Counters",
    dishes: "Purani Delhi Jahangiri Chicken, Dum Aloo",
    image: assets.events.wedding
  },
  {
    title: "Mehndi & Sangeet",
    experience: "Vibrant Street Food Vibe",
    station: "Raj Kachori & Jalebi Station",
    dishes: "Aloo Tikki, Malai Soya Chaap",
    image: assets.events.mehndi
  },
  {
    title: "Corporate Gala",
    experience: "Sophisticated Plated or Buffet",
    station: "Paneer Taco Live Grill",
    dishes: "Lamb Chops, Malai Kofta",
    image: assets.events.corporate
  },
  {
    title: "Family Celebration",
    experience: "Fun & Interactive Dining",
    station: "Chole Bhature Stand",
    dishes: "Veg Hakka Noodles, Chicken Lollypop",
    image: assets.events.family
  },
  {
    title: "Holiday Party",
    experience: "Warm Winter Feast",
    station: "Tawa Kathal Sukkha",
    dishes: "Sarso Ka Saag, Butter Chicken",
    image: assets.menu.feast
  }
];

export default function EventsWeCater() {
  return (
    <section className="py-24 w-full bg-surface-accent relative border-t border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent-gold/70 block mb-2">
          Tailored Experiences
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-content-primary">
          Events We Cater
        </h2>
      </div>

      {/* Native CSS horizontal snap — no GSAP, no JS scroll */}
      <div className="flex gap-6 px-6 md:px-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8">
        {events.map((ev, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[85vw] md:w-[420px] lg:w-[480px] rounded-2xl border border-border-subtle bg-surface-paper p-8 md:p-10 flex flex-col justify-between group hover:border-accent-gold/30 transition-colors duration-500 relative overflow-hidden"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <img
                src={ev.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-35"
              />
              <div className="absolute inset-0" style={{ background: 'var(--section-overlay)' }} />
            </div>

            <div className="relative z-10">
              <span className="font-serif text-6xl text-content-ghost absolute -top-2 -right-2 pointer-events-none select-none">
                0{i + 1}
              </span>
              <h3 className="font-serif text-3xl text-accent-gold mb-8">
                {ev.title}
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="font-sans text-[9px] tracking-widest uppercase text-content-secondary mb-1">Recommended Experience</h4>
                  <p className="font-serif text-lg text-content-primary">{ev.experience}</p>
                </div>

                <div className="w-8 h-[1px] bg-border-subtle" />

                <div>
                  <h4 className="font-sans text-[9px] tracking-widest uppercase text-content-secondary mb-1">Live Station Focus</h4>
                  <p className="font-serif text-lg text-content-primary">{ev.station}</p>
                </div>

                <div className="w-8 h-[1px] bg-border-subtle" />

                <div>
                  <h4 className="font-sans text-[9px] tracking-widest uppercase text-content-secondary mb-1">Signature Highlights</h4>
                  <p className="font-serif text-lg text-content-primary">{ev.dishes}</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8">
              <button className="font-sans text-xs tracking-widest uppercase text-content-primary hover:text-accent-gold active:scale-[0.98] active:opacity-80 transition-all duration-100 flex items-center gap-4 py-4 w-full md:w-auto">
                Inquire <div className="w-8 h-[1px] bg-current" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
