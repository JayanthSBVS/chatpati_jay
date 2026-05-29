import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function Scene4_MenuGlimpse({ progress }) {
  const isMobile = useIsMobile();

  // FRAME B: STREET CHAOS (CHOLE BHATURE)
  // Crossfades elegantly out exactly as Paneer crosses in.
  const bOpacity = useTransform(progress, [0, 0.45, 0.5, 0.55, 0.65, 1], [0, 0, 1, 1, 0, 0], { clamp: true });
  const bScale = useTransform(progress, [0, 0.45, 0.65, 1], [0.95, 0.95, 1.05, 1.05], { clamp: true });

  // FRAME C: MINIMAL ELEGANCE (PANEER CURRY)
  // Reaches full opacity precisely when Chole is disappearing, leaving no blank gap.
  const cOpacity = useTransform(progress, [0, 0.55, 0.65, 0.7, 0.8, 1], [0, 0, 1, 1, 0, 0], { clamp: true });
  const cScale = useTransform(progress, [0, 0.55, 0.8, 1], [0.98, 0.98, 1.02, 1.02], { clamp: true });

  // FRAME D: THE FEAST (BUTTER CHICKEN)
  // Reaches full opacity as Paneer disappears.
  const dOpacity = useTransform(progress, [0, 0.7, 0.8, 0.95, 1.0], [0, 0, 1, 1, 1], { clamp: true });
  const dScale = useTransform(progress, [0, 0.75, 1.0], isMobile ? [1, 1, 1.02] : [0.95, 0.95, 1.1], { clamp: true }); 
  
  // Typography dissolves early
  const dTextOpacity = useTransform(progress, [0, 0.85, 0.88, 0.92, 0.95, 1], [0, 0, 1, 1, 0, 0], { clamp: true });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-30">
      
      {/* FRAME B: STREET CHAOS (CHOLE BHATURE) */}
      <motion.div className="absolute inset-0 flex items-center justify-center bg-[#110f0e]" style={{ opacity: bOpacity, scale: bScale }}>
        {/* DESKTOP */}
        <div className="hidden md:block absolute right-0 w-[70%] h-[120%] rotate-[-5deg] overflow-hidden">
          <img src="/assets/menu_chole.png" alt="Chole Bhature" className="w-full h-full object-cover saturate-200 contrast-125 mix-blend-lighten" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#110f0e] z-10" />
        </div>
        <div className="hidden md:flex relative z-20 w-full max-w-6xl px-8 flex-col items-start pt-32">
          <h2 className="font-serif text-[10rem] text-[#E2A060] leading-[0.8] tracking-tighter opacity-80 mix-blend-screen">Chole Bhature</h2>
          <div className="absolute top-[60%] left-[10%] rotate-90 origin-left">
            <span className="font-sans text-[8px] tracking-[0.5em] uppercase text-[#F5EFEB]/40">Overpowering Scale</span>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden relative z-20 w-full h-full flex-col items-center justify-center px-6 text-center">
          <div className="w-[80%] aspect-square rounded-full overflow-hidden mb-12 opacity-80 shadow-[0_0_50px_rgba(226,160,96,0.1)]">
            <img src="/assets/menu_chole.png" alt="Chole Bhature" className="w-full h-full object-cover saturate-150 contrast-125" />
          </div>
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#CBAA6A]/60 mb-6">Street Fire</span>
          <h2 className="font-serif text-5xl text-[#E2A060] leading-none tracking-tighter opacity-90">Chole Bhature</h2>
        </div>
      </motion.div>

      {/* FRAME C: MINIMAL ELEGANCE (PANEER CURRY) */}
      <motion.div className="absolute inset-0 flex items-center justify-center bg-[#050404]" style={{ opacity: cOpacity, scale: cScale }}>
        {/* DESKTOP */}
        <div className="hidden md:block absolute bottom-0 right-0 w-[80%] h-[80%] opacity-50">
          <img src="/assets/menu_paneer.png" alt="Paneer Curry" className="w-full h-full object-cover object-top" style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)' }} />
        </div>
        <div className="hidden md:flex relative z-10 w-full max-w-6xl px-8 flex-col items-center text-center">
          <h2 className="font-serif text-5xl text-[#F5EFEB]/80 tracking-widest font-light">Paneer Curry</h2>
          <span className="font-sans text-[8px] tracking-[1em] uppercase text-[#CBAA6A]/40 mt-12 block">Expensive Silence</span>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden relative z-10 w-full h-full flex-col items-center justify-center px-6 text-center">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#CBAA6A]/60 mb-6">Expensive Silence</span>
          <h2 className="font-serif text-4xl text-[#F5EFEB]/90 tracking-widest font-light mb-16">Paneer Curry</h2>
          <div className="w-[80%] h-[40vh] opacity-60 mix-blend-screen">
            <img src="/assets/menu_paneer.png" alt="Paneer Curry" className="w-full h-full object-cover object-center" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent)' }} />
          </div>
        </div>
      </motion.div>

      {/* FRAME D: THE FEAST (THE LEGENDARY MOMENT) */}
      <motion.div className="absolute inset-0 flex items-center justify-center bg-[#0a0503]" style={{ opacity: dOpacity, scale: dScale }}>
        <img src="/assets/menu_feast.png" alt="Butter Chicken" className="absolute inset-0 w-full h-full object-cover saturate-150 contrast-125" />
        <div className="absolute inset-0 bg-[#0a0503]/60 z-10 mix-blend-multiply md:bg-[#0a0503]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0503] via-transparent to-transparent z-10"></div>
        
        <motion.div 
          className="hidden md:flex relative z-20 w-full max-w-6xl px-8 flex-col items-center justify-center h-full"
          style={{ opacity: dTextOpacity }}
        >
          <h2 className="font-serif text-[16rem] text-[#F5EFEB] leading-[0.75] tracking-tighter opacity-80 mix-blend-overlay">
            The Feast
          </h2>
        </motion.div>

        {/* MOBILE */}
        <motion.div 
          className="flex md:hidden relative z-20 w-full h-full flex-col items-center justify-center px-6 text-center"
          style={{ opacity: dTextOpacity }}
        >
          <h2 className="font-serif text-6xl text-[#F5EFEB] leading-none tracking-tighter opacity-90 drop-shadow-2xl">
            The Feast
          </h2>
        </motion.div>
      </motion.div>

    </div>
  );
}
