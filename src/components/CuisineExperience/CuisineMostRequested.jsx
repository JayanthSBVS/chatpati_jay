import React from 'react';
import BackgroundTypography from '../ui/BackgroundTypography';

export default function CuisineMostRequested({ dishes }) {
  if (!dishes || dishes.length === 0) return null;

  // Take top 3 dishes as "Most Requested"
  const topDishes = dishes.slice(0, 3);

  return (
    <section className="py-24 bg-[#0a0908]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold mb-4 block">
            Guest Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-cream">
            Most Requested
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topDishes.map((dish, index) => (
              <div
                key={dish.id || index}
                className="group p-8 bg-black/40 border border-[#CBAA6A]/10 rounded-2xl hover:border-primary-gold/40 transition-colors duration-500 flex flex-col justify-between h-full relative overflow-hidden"
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Depth Typography */}
                <BackgroundTypography text={dish.name} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl text-primary-cream group-hover:text-primary-gold transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <span
                      className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 ml-3 ${
                        dish.diet === 'veg' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      aria-label={dish.diet === 'veg' ? 'Vegetarian' : 'Non-vegetarian'}
                    />
                  </div>
                  <p className="font-sans text-sm text-primary-cream/60 leading-relaxed relative z-10">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
