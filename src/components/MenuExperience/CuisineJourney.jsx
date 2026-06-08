import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const regions = [
  "Delhi Street Food",
  "North Indian Classics",
  "Mumbai Specialties",
  "Indo-Chinese Fusion",
  "South Indian Traditions"
];

const RegionItem = ({ region, idx }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="group border-b border-primary-cream/10 pb-8 flex items-end justify-between hover:border-primary-gold/50 transition-colors duration-500 cursor-default"
    >
      <h3 className="font-serif text-3xl md:text-5xl lg:text-7xl text-primary-cream/40 group-hover:text-primary-cream transition-colors duration-500">
        {region}
      </h3>
      <span className="font-sans text-xs tracking-widest text-primary-gold/0 group-hover:text-primary-gold/100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
        Explore
      </span>
    </motion.div>
  );
};

export default function CuisineJourney() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-32 relative bg-[#0a0908] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_rgba(203,170,106,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold/70 block mb-4">
            The Breadth of Flavor
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-cream">
            A Journey Across <br />
            <span className="italic text-primary-gold font-light">Subcontinental Tastes</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12">
          {regions.map((region, idx) => (
            <RegionItem key={region} region={region} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
