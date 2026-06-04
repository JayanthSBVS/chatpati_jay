import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function Scene4_MenuGlimpse({ progress }) {
  const isMobile = useIsMobile();

  // FRAME B: STREET CHAOS (CHOLE BHATURE)
  const bOpacity = useTransform(progress, [0, 0.45, 0.5, 0.55, 0.65, 1], [0, 0, 1, 1, 0, 0], { clamp: true });
  const bScale = useTransform(progress, [0, 0.45, 0.65, 1], [0.95, 0.95, 1.05, 1.05], { clamp: true });

  // FRAME C: MINIMAL ELEGANCE (PANEER CURRY)
  const cOpacity = useTransform(progress, [0, 0.55, 0.65, 0.7, 0.8, 1], [0, 0, 1, 1, 0, 0], { clamp: true });
  const cScale = useTransform(progress, [0, 0.55, 0.8, 1], [0.98, 0.98, 1.02, 1.02], { clamp: true });

  // FRAME D: THE FEAST (BUTTER CHICKEN)
  const dOpacity = useTransform(progress, [0, 0.7, 0.8, 0.95, 1.0], [0, 0, 1, 1, 1], { clamp: true });
  const dScale = useTransform(progress, [0, 0.75, 1.0], isMobile ? [1, 1, 1.02] : [0.95, 0.95, 1.1], { clamp: true }); 
  
  const dTextOpacity = useTransform(progress, [0, 0.85, 0.88, 0.92, 0.95, 1], [0, 0, 1, 1, 0, 0], { clamp: true });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-30">
      
      {/* ══ FRAME B: CHOLE BHATURE ══ */}
      <motion.div className="absolute inset-0 flex items-center justify-center bg-[#110f0e]" style={{ opacity: bOpacity, scale: bScale }}>
        
        {/* DESKTOP (lg+) */}
        <div className="hidden lg:block absolute right-0 w-[70%] h-[120%] rotate-[-5deg] overflow-hidden">
          <img src="/assets/menu_chole.png" alt="Chole Bhature" className="w-full h-full object-cover saturate-200 contrast-125 mix-blend-lighten" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#110f0e] z-10" />
        </div>
        <div className="hidden lg:flex relative z-20 w-full max-w-6xl px-8 flex-col items-start pt-32">
          <h2 className="font-serif text-[10rem] text-[#E2A060] leading-[0.8] tracking-tighter opacity-80 mix-blend-screen">Chole Bhature</h2>
          <div className="absolute top-[60%] left-[10%] rotate-90 origin-left">
            <span className="font-sans text-[8px] tracking-[0.5em] uppercase text-[#F5EFEB]/40">Overpowering Scale</span>
          </div>
        </div>

        {/* TABLET (md–lg) */}
        <div className="hidden md:block lg:hidden absolute right-0 w-[60%] h-[110%] rotate-[-3deg] overflow-hidden">
          <img src="/assets/menu_chole.png" alt="Chole Bhature" className="w-full h-full object-cover saturate-175 contrast-120 mix-blend-lighten" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#110f0e] z-10" />
        </div>
        <div className="hidden md:flex lg:hidden relative z-20 w-full px-10 flex-col items-start pt-24">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#CBAA6A] opacity-70 mb-4">Street Fire</span>
          <h2 className="font-serif text-[5.5rem] text-[#E2A060] leading-[0.85] tracking-tighter opacity-90 font-semibold">Chole<br/>Bhature</h2>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden relative z-20 w-full h-full flex-col items-center justify-center px-6 text-center">
          <div className="w-[80%] aspect-square rounded-full overflow-hidden mb-10 opacity-80 shadow-[0_0_50px_rgba(226,160,96,0.1)]">
            <img src="/assets/menu_chole.png" alt="Chole Bhature" className="w-full h-full object-cover saturate-150 contrast-125" />
          </div>
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#CBAA6A] mb-4 font-medium opacity-80">Street Fire</span>
          <h2 className="font-serif text-[2.8rem] text-[#E2A060] leading-tight tracking-tight opacity-95 font-bold">Chole Bhature</h2>
        </div>
      </motion.div>

      {/* ══ FRAME C: PANEER CURRY ══ */}
      <motion.div className="absolute inset-0 flex items-center justify-center bg-[#050404]" style={{ opacity: cOpacity, scale: cScale }}>
        
        {/* DESKTOP (lg+) */}
        <div className="hidden lg:block absolute bottom-0 right-0 w-[80%] h-[80%] opacity-50">
          <img src="/assets/menu_paneer.png" alt="Paneer Curry" className="w-full h-full object-cover object-top" style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)' }} />
        </div>
        <div className="hidden lg:flex relative z-10 w-full max-w-6xl px-8 flex-col items-center text-center">
          <h2 className="font-serif text-5xl text-[#F5EFEB]/80 tracking-widest font-light">Paneer Curry</h2>
          <span className="font-sans text-[8px] tracking-[1em] uppercase text-[#CBAA6A]/40 mt-12 block">Expensive Silence</span>
        </div>

        {/* TABLET (md–lg) */}
        <div className="hidden md:block lg:hidden absolute bottom-0 right-0 w-[70%] h-[65%] opacity-45">
          <img src="/assets/menu_paneer.png" alt="Paneer Curry" className="w-full h-full object-cover object-top" style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)' }} />
        </div>
        <div className="hidden md:flex lg:hidden relative z-10 w-full px-10 flex-col items-center text-center">
          <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#CBAA6A] mb-6 font-medium opacity-75">Expensive Silence</span>
          <h2 className="font-serif text-[3.5rem] text-[#F5EFEB]/90 tracking-wider font-normal">Paneer Curry</h2>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden relative z-10 w-full h-full flex-col items-center justify-center px-6 text-center">
          <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#CBAA6A] mb-5 font-medium opacity-80">Expensive Silence</span>
          <h2 className="font-serif text-[2.6rem] text-[#F5EFEB]/95 tracking-widest font-semibold mb-12">Paneer Curry</h2>
          <div className="w-[80%] h-[38vh] opacity-60 mix-blend-screen">
            <img src="/assets/menu_paneer.png" alt="Paneer Curry" className="w-full h-full object-cover object-center" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent)' }} />
          </div>
        </div>
      </motion.div>

      {/* ══ FRAME D: THE FEAST ══ */}
      <motion.div className="absolute inset-0 flex items-center justify-center bg-[#0a0503]" style={{ opacity: dOpacity, scale: dScale }}>
        <img src="/assets/menu_feast.png" alt="Butter Chicken" className="absolute inset-0 w-full h-full object-cover saturate-150 contrast-125" />
        <div className="absolute inset-0 bg-[#0a0503]/60 z-10 mix-blend-multiply md:bg-[#0a0503]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0503] via-transparent to-transparent z-10"></div>
        
        {/* Desktop title */}
        <motion.div 
          className="hidden lg:flex relative z-20 w-full max-w-6xl px-8 flex-col items-center justify-center h-full"
          style={{ opacity: dTextOpacity }}
        >
          <h2 className="font-serif text-[13rem] text-[#F5EFEB] leading-[0.75] tracking-tighter opacity-80 mix-blend-overlay">
            The Feast
          </h2>
        </motion.div>

        {/* Tablet title */}
        <motion.div 
          className="hidden md:flex lg:hidden relative z-20 w-full px-10 flex-col items-center justify-center h-full"
          style={{ opacity: dTextOpacity }}
        >
          <h2 className="font-serif text-[5rem] text-[#F5EFEB] leading-none tracking-tighter opacity-90 drop-shadow-2xl font-semibold">
            The Feast
          </h2>
        </motion.div>

        {/* Mobile title */}
        <motion.div 
          className="flex md:hidden relative z-20 w-full h-full flex-col items-center justify-center px-6 text-center"
          style={{ opacity: dTextOpacity }}
        >
          <h2 className="font-serif text-[3rem] text-[#F5EFEB] leading-none tracking-tighter opacity-95 drop-shadow-2xl font-bold">
            The Feast
          </h2>
        </motion.div>
      </motion.div>

    </div>
  );
}
