import React from 'react';

const eventImages = {
  'Weddings': '/assets/event_wedding_opt.webp',
  'Grand Receptions': '/assets/event_wedding_opt.webp',
  'All Celebrations': '/assets/event_wedding_opt.webp',
  'All Events': '/assets/event_family_opt.webp',
  'Mehndi': '/assets/event_mehndi_opt.webp',
  'Birthday Parties': '/assets/event_family_opt.webp',
  'Casual Celebrations': '/assets/event_family_opt.webp',
  'Corporate Events': '/assets/event_corporate_opt.webp',
  'Corporate Breakfasts': '/assets/event_corporate_opt.webp',
  'Family Dinners': '/assets/event_family_opt.webp',
  'Welcome Drinks': '/assets/event_wedding_opt.webp',
  'Festive Occasions': '/assets/event_mehndi_opt.webp',
  'Cocktail Parties': '/assets/event_corporate_opt.webp',
  'Morning Ceremonies': '/assets/event_wedding_opt.webp',
  'Evening Snacks': '/assets/event_mehndi_opt.webp',
  'Cocktail Hours': '/assets/event_corporate_opt.webp',
  'Informal Gatherings': '/assets/event_family_opt.webp',
  'Casual Gatherings': '/assets/event_family_opt.webp',
};

export default function CateringUpsell({ bestFor }) {
  if (!bestFor || bestFor.length === 0) return null;

  return (
    <section className="py-20 bg-[#050403] border-t border-[#CBAA6A]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold/70 block mb-3">
            Ideal For
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-primary-cream">
            Perfect For These Events
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {bestFor.map((event, i) => {
            const img = eventImages[event];
            return (
              <div
                key={i}
                className="group relative flex items-center gap-3 border border-[#CBAA6A]/20 rounded-xl px-5 py-4 bg-black/30 hover:border-primary-gold/50 transition-colors duration-300 cursor-default"
              >
                {img && (
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <img src={img} alt={event} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                )}
                <span className="font-sans text-sm text-primary-cream group-hover:text-primary-gold transition-colors duration-300">
                  {event}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-[#CBAA6A]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl text-primary-cream mb-1">Planning an event?</p>
            <p className="font-sans text-sm text-primary-cream/50">Get a customized menu built around your specific requirements.</p>
          </div>
          <a
            href="/contact"
            className="font-sans text-xs tracking-widest uppercase px-8 py-4 bg-primary-gold text-[#050403] hover:bg-primary-cream transition-colors duration-300 whitespace-nowrap"
          >
            Book Catering
          </a>
        </div>
      </div>
    </section>
  );
}
