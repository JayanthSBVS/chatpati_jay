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

  // Environmental Light/Color Morphs
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["#140d05", "#1c0b05", "#0a1208", "#050505"] // Royal Gold -> Warm Joy -> Mehndi Green -> Pitch Black
  );

  return (
    <motion.section 
      ref={containerRef} 
      className="relative h-[400vh] w-full"
      style={{ backgroundColor }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Global DNA Overlay */}
        <div className="absolute inset-0 pointer-events-none z-50 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.8)_100%)]" />

        <motion.div className="flex w-[400vw] h-full" style={{ x }}>
          
          {/* 1. WEDDINGS & ENGAGEMENTS */}
          <div className="w-[100vw] h-full flex items-center justify-center relative">
            <img src="/assets/event_wedding.png" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Weddings" />
            <div className="relative z-10 w-full max-w-5xl px-8">
              <span className="font-sans text-[10px] tracking-[0.4em] text-[#CBAA6A] uppercase">Weddings & Engagements</span>
              <h2 className="font-serif text-5xl md:text-8xl text-[#F5EFEB] mt-4 tracking-tighter">Royal Grandeur</h2>
            </div>
          </div>

          {/* 2. FAMILY CELEBRATIONS */}
          <div className="w-[100vw] h-full flex items-center justify-center relative">
            <img src="/assets/event_family.png" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" alt="Family" />
            <div className="relative z-10 w-full max-w-5xl px-8">
              <span className="font-sans text-[10px] tracking-[0.4em] text-[#E2A060] uppercase">Family Celebrations</span>
              <h2 className="font-serif text-5xl md:text-8xl text-[#F5EFEB] mt-4 tracking-tighter">Intimate Joy</h2>
            </div>
          </div>

          {/* 3. FESTIVE GATHERINGS (MEHNDI) */}
          <div className="w-[100vw] h-full flex items-center justify-center relative">
            <img src="/assets/event_mehndi.png" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Festive" />
            <div className="relative z-10 w-full max-w-5xl px-8">
              <span className="font-sans text-[10px] tracking-[0.4em] text-[#5A6B4E] uppercase">Festive Gatherings</span>
              <h2 className="font-serif text-5xl md:text-8xl text-[#F5EFEB] mt-4 tracking-tighter">Organic Chaos</h2>
            </div>
          </div>

          {/* 4. PRESTIGE EVENTS (CORPORATE) */}
          <div className="w-[100vw] h-full flex items-center justify-center relative">
            <img src="/assets/event_corporate.png" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen" alt="Prestige" />
            <div className="relative z-10 w-full max-w-5xl px-8">
              <span className="font-sans text-[10px] tracking-[0.4em] text-[#A0A0A0] uppercase">Prestige Events</span>
              <h2 className="font-serif text-5xl md:text-8xl text-[#F5EFEB] mt-4 tracking-tighter">Dark Elegance</h2>
            </div>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}
