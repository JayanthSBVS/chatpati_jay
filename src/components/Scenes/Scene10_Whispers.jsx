import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Scene10_Whispers() {
  const containerRef = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Slow float for review fragments based on scroll
  const y1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] overflow-hidden flex flex-col items-center">
      
      {/* PART 1: THE QUIET INVITATION (CTA) */}
      <div className="relative w-full h-[50vh] flex flex-col items-center justify-center">
        <h2 className="font-serif text-3xl md:text-5xl text-[#F5EFEB]/90 tracking-widest font-light text-center leading-relaxed max-w-4xl px-8">
          Bring Delhi To<br/>Your Celebration.
        </h2>
        <button className="mt-16 group relative">
          <div className="absolute inset-0 bg-[#CBAA6A] blur-md opacity-20 group-hover:opacity-50 transition-opacity duration-1000 rounded-full" />
          <div className="relative px-12 py-4 border border-[#CBAA6A]/30 rounded-full bg-transparent text-[#CBAA6A] font-sans text-xs tracking-[0.3em] uppercase transition-all duration-700 hover:bg-[#CBAA6A]/10 hover:border-[#CBAA6A]/60">
            Begin The Journey
          </div>
        </button>
      </div>

      {/* PART 2: WHISPERS OF THE EXPERIENCE (REVIEWS) */}
      <div className="relative w-full h-[120vh] mt-8 flex flex-col items-center">
        {/* Quiet Editorial Heading */}
        <div className="absolute top-[10%] z-20 text-center">
          <span className="font-sans text-[9px] tracking-[0.4em] text-[#CBAA6A]/60 uppercase">Whispers From The Table</span>
        </div>

        {/* Background Palace Night Glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(203,170,106,0.05)_0%,_transparent_60%)]" />

        {/* Floating Fragments */}
        <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[10%] md:left-[20%] max-w-sm">
          <p className="font-serif text-2xl md:text-4xl text-[#F5EFEB]/70 leading-snug italic">
            "Best Chole Bhature in NJ."
          </p>
          <span className="font-sans text-[9px] tracking-[0.2em] text-[#CBAA6A]/50 uppercase mt-4 block">— Real Guest</span>
        </motion.div>

        <motion.div style={{ y: y2 }} className="absolute top-[50%] right-[10%] md:right-[15%] max-w-sm text-right">
          <p className="font-serif text-3xl md:text-5xl text-[#F5EFEB]/90 leading-snug italic mix-blend-screen">
            "Everything is so<br/>damn good."
          </p>
          <span className="font-sans text-[9px] tracking-[0.2em] text-[#CBAA6A]/50 uppercase mt-4 block text-right">— Real Guest</span>
        </motion.div>

        <motion.div style={{ y: y3 }} className="absolute bottom-[20%] left-[15%] md:left-[30%] max-w-md">
          <p className="font-serif text-xl md:text-3xl text-[#F5EFEB]/60 leading-snug italic">
            "Our guests still talk about it."
          </p>
          <span className="font-sans text-[9px] tracking-[0.2em] text-[#CBAA6A]/50 uppercase mt-4 block">— Wedding Reception</span>
        </motion.div>

        {/* Lighting Sources framing the reviews */}
        <div className="absolute top-[25%] left-[15%] w-32 h-32 bg-[#E2A060] rounded-full blur-[100px] opacity-10 pointer-events-none" />
        <div className="absolute top-[55%] right-[20%] w-48 h-48 bg-[#CBAA6A] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      </div>

    </section>
  );
}
