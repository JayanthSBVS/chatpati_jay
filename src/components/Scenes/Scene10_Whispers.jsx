import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Scene10_Whispers() {
  const containerRef = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-surface-base overflow-hidden flex flex-col items-center">
      
      {/* PART 1: THE QUIET INVITATION (CTA) */}
      <div className="relative w-full min-h-[50vh] flex flex-col items-center justify-center py-16 px-6 md:px-8">
        <h2 className="
          font-serif tracking-widest font-light text-center leading-relaxed text-content-primary/90
          text-3xl
          md:text-4xl
          lg:text-5xl
          max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl
        ">
          Bring Delhi To<br/>Your Celebration.
        </h2>
        <button className="mt-12 md:mt-16 group relative">
          <div className="absolute inset-0 bg-accent-gold blur-md opacity-20 group-hover:opacity-50 transition-opacity duration-1000 rounded-full" />
          <div className="relative px-10 md:px-12 py-4 border border-accent-gold/30 rounded-full bg-transparent text-accent-gold font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase transition-all duration-700 hover:bg-accent-gold/10 hover:border-accent-gold/60 font-medium md:font-normal">
            Begin The Journey
          </div>
        </button>
      </div>

      {/* PART 2: WHISPERS OF THE EXPERIENCE (REVIEWS) */}
      {/*
        On mobile/tablet the parallax floating fragments would overflow badly,
        so we switch to a clean vertical stacked card layout on small screens.
        Desktop keeps the original floating editorial layout.
      */}
      <div className="relative w-full mt-4 flex flex-col items-center">

        {/* Gold sub-label */}
        <span className="
          font-sans tracking-[0.4em] text-accent-gold uppercase mb-10
          text-[9px] font-medium opacity-85
          md:text-[9px] md:opacity-70 md:font-normal
        ">Whispers From The Table</span>

        {/* ── MOBILE + TABLET: stacked cards ── */}
        <div className="flex lg:hidden flex-col items-center gap-8 px-6 md:px-12 pb-20 w-full max-w-2xl mx-auto">
          {[
            { quote: '"Best Chole Bhature in NJ."', source: '— Real Guest', size: 'text-2xl md:text-3xl' },
            { quote: '"Everything is so damn good."', source: '— Real Guest', size: 'text-3xl md:text-4xl', extra: '' },
            { quote: '"Our guests still talk about it."', source: '— Wedding Reception', size: 'text-xl md:text-2xl' },
          ].map(({ quote, source, size, extra }, i) => (
            <div key={i} className={`text-center max-w-sm md:max-w-md ${i % 2 === 1 ? 'text-right self-end' : 'text-left self-start'}`}>
              <p className={`font-serif ${size} text-content-primary/80 leading-snug italic font-medium ${extra ?? ''}`}>
                {quote}
              </p>
              <span className="font-sans text-[9px] tracking-[0.2em] text-accent-gold uppercase mt-3 block font-medium">
                {source}
              </span>
            </div>
          ))}
        </div>

        {/* ── DESKTOP: original parallax floating layout ── */}
        <div className="hidden lg:block relative w-full h-[120vh]">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(203,170,106,0.05)_0%,_transparent_60%)]" />

          <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[20%] max-w-sm">
            <p className="font-serif text-4xl text-content-primary/70 leading-snug italic">
              "Best Chole Bhature in NJ."
            </p>
            <span className="font-sans text-[9px] tracking-[0.2em] text-accent-gold/50 uppercase mt-4 block">— Real Guest</span>
          </motion.div>

          <motion.div style={{ y: y2 }} className="absolute top-[50%] right-[15%] max-w-sm text-right">
            <p className="font-serif text-5xl text-content-primary/90 leading-snug italic">
              "Everything is so<br/>damn good."
            </p>
            <span className="font-sans text-[9px] tracking-[0.2em] text-accent-gold/50 uppercase mt-4 block text-right">— Real Guest</span>
          </motion.div>

          <motion.div style={{ y: y3 }} className="absolute bottom-[20%] left-[30%] max-w-md">
            <p className="font-serif text-3xl text-content-primary/60 leading-snug italic">
              "Our guests still talk about it."
            </p>
            <span className="font-sans text-[9px] tracking-[0.2em] text-accent-gold/50 uppercase mt-4 block">— Wedding Reception</span>
          </motion.div>

          <div className="absolute top-[25%] left-[15%] w-32 h-32 bg-[#E2A060] rounded-full blur-[100px] opacity-10 pointer-events-none" />
          <div className="absolute top-[55%] right-[20%] w-48 h-48 bg-accent-gold rounded-full blur-[120px] opacity-10 pointer-events-none" />
        </div>

      </div>

    </section>
  );
}
