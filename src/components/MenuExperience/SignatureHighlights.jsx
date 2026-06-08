import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const highlights = [
  { value: "150+", label: "Authentic Dishes" },
  { value: "Live", label: "Food Stations" },
  { value: "10+", label: "Event Types" },
  { value: "100%", label: "Customizable" }
];

export default function SignatureHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-[#050403] relative border-y border-[#CBAA6A]/10">
      <div className="absolute inset-0 bg-texture-paper opacity-20 pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center divide-x-0 md:divide-x divide-[#CBAA6A]/10">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-gold mb-2 md:mb-4">
                {item.value}
              </h3>
              <p className="font-sans text-[9px] md:text-xs tracking-[0.3em] uppercase text-primary-cream/70">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
