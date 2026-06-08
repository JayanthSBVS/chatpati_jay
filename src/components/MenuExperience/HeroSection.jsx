import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050403]">
      {/* 
        PERFORMANCE OPTIMIZATION:
        Removed useScroll, useTransform, scale, and y translation.
        Removed mix-blend-screen.
        Background is now entirely static, eliminating all layout shift and compositor repaints during scroll.
      */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/assets/menu_fire.png" 
          alt="" 
          loading="eager" 
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050403]/80 via-[#050403]/50 to-[#050403]" />
        <div className="absolute inset-0 bg-texture-paper opacity-30 mix-blend-overlay" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-primary-gold mb-8"
        >
          A Legacy of Flavor
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-cream leading-[1.1] mb-6"
        >
          Where Every Event <br />
          <span className="italic font-light text-primary-gold">Becomes a</span> <br />
          Culinary Celebration
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-sm md:text-base text-primary-cream/60 max-w-xl mx-auto font-light leading-relaxed"
        >
          Immersive catering experiences crafted to elevate your most cherished moments. 
          Discover the breadth of our artisanal menus.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary-gold/70">Explore Experience</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary-gold/50 to-transparent overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-primary-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
