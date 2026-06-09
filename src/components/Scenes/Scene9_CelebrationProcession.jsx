import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Scene9_CelebrationProcession() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // X-axis drift to simulate walking through 4 worlds (400vw)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <motion.section 
      ref={containerRef} 
      className="relative h-[400vh] w-full bg-surface-base"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Global DNA Overlay */}
        <div className="absolute inset-0 pointer-events-none z-50 opacity-40 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(ellipse at center, transparent 50%, var(--surface-card) 100%)' }} />

        <motion.div className="flex w-[400vw] h-full" style={{ x }}>
          
          {/* 1. WEDDINGS & ENGAGEMENTS */}
          <div className="w-[100vw] h-full flex items-center justify-center relative">
            <img src="/assets/event_wedding.png" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 'var(--img-opacity-hero)', mixBlendMode: 'var(--img-blend-luminosity)' }} alt="Weddings" />
            <div className="relative z-10 w-full max-w-5xl px-6 md:px-8">
              <span className="
                font-sans tracking-[0.4em] text-accent-gold uppercase block mb-3
                text-[9px] font-medium opacity-90 drop-shadow-md
                md:text-[10px] md:font-normal md:opacity-100
              ">Weddings &amp; Engagements</span>
              <h2 className="
                font-serif text-primary-cream tracking-tighter drop-shadow-2xl
                text-4xl font-bold leading-tight
                md:text-6xl md:font-semibold
                lg:text-8xl lg:font-normal
                mt-2 md:mt-4
              ">Royal Grandeur</h2>
            </div>
          </div>

          {/* 2. FAMILY CELEBRATIONS */}
          <div className="w-[100vw] h-full flex items-center justify-center relative">
            <img src="/assets/event_family.png" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 'var(--img-opacity-hero)', mixBlendMode: 'var(--img-blend-overlay)' }} alt="Family" />
            <div className="relative z-10 w-full max-w-5xl px-6 md:px-8">
              <span className="
                font-sans tracking-[0.4em] text-[#E2A060] uppercase block mb-3
                text-[9px] font-medium opacity-90 drop-shadow-md
                md:text-[10px] md:font-normal md:opacity-100
              ">Family Celebrations</span>
              <h2 className="
                font-serif text-primary-cream tracking-tighter drop-shadow-2xl
                text-4xl font-bold leading-tight
                md:text-6xl md:font-semibold
                lg:text-8xl lg:font-normal
                mt-2 md:mt-4
              ">Intimate Joy</h2>
            </div>
          </div>

          {/* 3. FESTIVE GATHERINGS (MEHNDI) */}
          <div className="w-[100vw] h-full flex items-center justify-center relative">
            <img src="/assets/event_mehndi.png" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 'var(--img-opacity-hero)', mixBlendMode: 'var(--img-blend-overlay)' }} alt="Festive" />
            <div className="relative z-10 w-full max-w-5xl px-6 md:px-8">
              <span className="
                font-sans tracking-[0.4em] text-[#5A6B4E] uppercase block mb-3
                text-[9px] font-semibold opacity-90 drop-shadow-md
                md:text-[10px] md:font-normal md:opacity-100
              ">Festive Gatherings</span>
              <h2 className="
                font-serif text-primary-cream tracking-tighter drop-shadow-2xl
                text-4xl font-bold leading-tight
                md:text-6xl md:font-semibold
                lg:text-8xl lg:font-normal
                mt-2 md:mt-4
              ">Organic Chaos</h2>
            </div>
          </div>

          {/* 4. PRESTIGE EVENTS (CORPORATE) */}
          <div className="w-[100vw] h-full flex items-center justify-center relative">
            <img src="/assets/event_corporate.png" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 'var(--img-opacity-hero)', mixBlendMode: 'var(--img-blend-screen)' }} alt="Prestige" />
            <div className="relative z-10 w-full max-w-5xl px-6 md:px-8">
              <span className="
                font-sans tracking-[0.4em] text-[#A0A0A0] uppercase block mb-3
                text-[9px] font-medium opacity-90 drop-shadow-md
                md:text-[10px] md:font-normal md:opacity-100
              ">Prestige Events</span>
              <h2 className="
                font-serif text-primary-cream tracking-tighter drop-shadow-2xl
                text-4xl font-bold leading-tight
                md:text-6xl md:font-semibold
                lg:text-8xl lg:font-normal
                mt-2 md:mt-4
              ">Dark Elegance</h2>
            </div>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}
