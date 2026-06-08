import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const stations = [
  {
    name: "Paneer Taco",
    description: "A modern fusion of Mexican street style and robust Indian tandoori flavors. Smoked paneer, zesty chutneys, and crisp shells.",
    tag: "Fusion Grill",
    image: "/assets/menu_paneer_opt.webp"
  },
  {
    name: "Raj Kachori",
    description: "The King of Chaats. A giant, crispy orb filled with spiced lentils, yogurt, sweet dates, and vibrant tamarind chutney.",
    tag: "Heritage Chaat",
    image: "/assets/menu-1_opt.webp"
  },
  {
    name: "Chole Bhature",
    description: "Puffed, golden-fried breads served alongside rich, deeply spiced chickpea curry. The ultimate Delhi street comfort.",
    tag: "Delhi Classic",
    image: "/assets/chole_bhature.jpg"
  },
  {
    name: "Dosa Station",
    description: "Paper-thin, crispy rice crepes made fresh on the griddle. Served with coconut chutney and piping hot sambar.",
    tag: "South Indian",
    image: "/assets/menu-2_opt.webp"
  },
  {
    name: "Jalebi",
    description: "Swirls of fermented batter fried to a crisp and soaked in saffron syrup. Best enjoyed piping hot.",
    tag: "Sweet Ending",
    image: "/assets/menu_street_opt.webp"
  }
];

const StationSpotlight = ({ name, description, tag, index, image }) => {
  const ref = useRef(null);

  // Alternate layout
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 mb-32`}
    >
      {/* Visual Component */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative group overflow-hidden bg-primary-cream/5 rounded-[2rem] border border-primary-cream/10">
        <img 
          src={image} 
          alt={name} 
          loading="lazy" 
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold mb-6 block">
          {tag}
        </span>
        <h3 className="font-serif text-5xl md:text-7xl text-primary-cream mb-8 leading-none">
          {name}
        </h3>
        <p className="font-sans text-sm md:text-base text-primary-cream/60 leading-relaxed max-w-md mb-12">
          {description}
        </p>
        <button className="self-start font-sans text-xs tracking-widest uppercase text-primary-cream border-b border-primary-gold pb-2 hover:text-primary-gold transition-colors">
          Add to Experience
        </button>
      </div>
    </motion.div>
  );
};

export default function LiveStations() {
  return (
    <section className="py-32 bg-[#050403] relative border-t border-[#CBAA6A]/10">
      <div className="absolute inset-0 bg-texture-paper opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-32">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold/70 block mb-4">
            Interactive Culinary Theater
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-primary-cream">
            Live Stations
          </h2>
        </div>

        <div>
          {stations.map((station, idx) => (
            <StationSpotlight key={idx} index={idx} {...station} />
          ))}
        </div>
      </div>
    </section>
  );
}
