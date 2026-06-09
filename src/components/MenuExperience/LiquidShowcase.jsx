import React from 'react';

const drinks = [
  {
    name: "Mango Lassi",
    ingredients: "Alphonso Mango, Sweet Yogurt, Cardamom, Pistachio",
    description: "The classic tropical cooler. Rich, thick, and perfectly balanced.",
    image: "/assets/mango_lassi_1780917929199_opt.webp"
  },
  {
    name: "Sweet Lassi",
    ingredients: "Fresh Yogurt, Malai, Saffron Strands, Rose Water",
    description: "A decadent, creamy staple topped with a rich layer of fresh malai.",
    image: "/assets/sweet_lassi_1780917946995_opt.webp"
  },
  {
    name: "Salt Lassi",
    ingredients: "Whipped Yogurt, Roasted Cumin, Black Salt, Fresh Mint",
    description: "Frothy, savory, and immensely refreshing to cleanse the palate.",
    image: "/assets/salt_lassi_1780917969166_opt.webp"
  },
  {
    name: "Aam Ka Panna",
    ingredients: "Green Mango, Roasted Cumin, Black Salt, Mint",
    description: "A tangy, refreshing summer essential that awakens the senses.",
    image: "/assets/aam_ka_panna_1780917981215_opt.webp"
  },
  {
    name: "Thandai",
    ingredients: "Almonds, Saffron, Rose Petals, Fennel, Milk",
    description: "A royal, festive cooler steeped in tradition and luxury.",
    image: "/assets/thandai_1780918002624_opt.webp"
  }
];

export default function LiquidShowcase() {
  return (
    <section className="py-24 md:py-32 bg-[#050403] relative overflow-hidden border-t border-[#CBAA6A]/10">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 text-center">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold/70 block mb-4">
            Signature Beverages
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-primary-cream">
            The Liquid Showcase
          </h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {drinks.map((drink, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>

                {/* Image */}
                <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden relative border border-[#CBAA6A]/10 shadow-2xl">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h4 className="font-serif text-4xl md:text-6xl text-primary-cream mb-6">
                    {drink.name}
                  </h4>
                  <div className="mb-8">
                    <span className="font-sans text-[9px] tracking-widest uppercase text-primary-cream/40 block mb-2">Ingredients</span>
                    <p className="font-serif text-xl md:text-2xl text-primary-gold leading-relaxed">{drink.ingredients}</p>
                  </div>
                  <p className="font-sans text-sm md:text-base text-primary-cream/60 leading-relaxed max-w-md font-light">
                    {drink.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
