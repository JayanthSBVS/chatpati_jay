import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function Scene1_RoyalEntrance({ progress }) {
  const isMobile = useIsMobile();

  // Scene 1: Active from 0 to 0.30 (30% of 1000vh scroll)
  const scale = useTransform(progress, [0, 0.3], isMobile ? [1, 1.05] : [1, 1.5], { clamp: true });
  // explicitly map 0 and 1 to prevent Safari dropping invalid extrapolated CSS
  const opacity = useTransform(progress, [0, 0.25, 0.3, 1], [1, 1, 0, 0], { clamp: true });
  
  const archScale = useTransform(progress, [0, 0.3], isMobile ? [1, 1.02] : [1, 1.8], { clamp: true });

  return (
    <motion.section 
      className="absolute inset-0 w-full h-full bg-[#110f0e] flex items-center overflow-hidden z-10 pointer-events-none transform-gpu"
      style={{ opacity }}
    >
      <div className="absolute top-0 right-[-20%] w-[140%] h-[140%] z-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_40%,_rgba(203,170,106,0.12)_0%,_transparent_60%)]" />

      {/* DESKTOP COMPOSITION */}
      <motion.div 
        className="hidden md:flex absolute inset-0 z-10 items-center justify-end pointer-events-none transform-gpu"
        style={{ scale: archScale, transformOrigin: '70% 50%' }}
      >
        <div className="relative w-[120%] md:w-[70%] h-[110vh] translate-x-[10%] opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-[#110f0e] via-[#110f0e]/50 to-transparent z-20 w-[60%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#110f0e] to-transparent z-20 h-[30%] top-auto bottom-0"></div>
          <img 
            src="/assets/floral-arch.jpeg" 
            alt="Mughal Palace Atmosphere" 
            className="w-full h-full object-cover object-left"
          />
        </div>
      </motion.div>

      <motion.div 
        className="hidden md:block relative z-20 w-full pl-6 md:pl-16 pt-32 transform-gpu"
        style={{ scale, transformOrigin: '20% 50%' }}
      >
        <div className="flex flex-col items-start w-full">
          <span className="font-sans text-[10px] tracking-[0.5em] text-[#CBAA6A] uppercase mb-12 ml-2 opacity-60">
            A Royal Dining Chamber
          </span>

          <h1 className="font-serif text-[12rem] lg:text-[16rem] text-[#F5EFEB] tracking-tighter leading-[0.75] opacity-90">
            Chatpati
          </h1>
          <h1 className="font-serif text-[11rem] lg:text-[14rem] text-[#CBAA6A] tracking-tighter leading-[0.75] ml-[20%] mt-[-2%]">
            Delhi
          </h1>
          
          <div className="mt-48 ml-[10%] w-[1px] h-24 bg-[#CBAA6A]/30" />
        </div>
      </motion.div>

      {/* MOBILE COMPOSITION */}
      <motion.div 
        className="flex md:hidden absolute inset-0 z-10 flex-col items-center justify-center pt-24 transform-gpu"
        style={{ scale: archScale, transformOrigin: '50% 50%' }}
      >
        <div className="relative w-[90%] h-[60vh] opacity-40 rounded-t-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#110f0e] via-[#110f0e]/50 to-transparent z-20 h-[60%] top-auto bottom-0"></div>
          <img 
            src="/assets/floral-arch.jpeg" 
            alt="Mughal Palace Atmosphere" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>

      <motion.div 
        className="flex md:hidden relative z-20 w-full h-full flex-col items-center justify-center px-6 text-center transform-gpu"
        style={{ scale, transformOrigin: '50% 50%' }}
      >
        <span className="font-sans text-[9px] tracking-[0.4em] text-[#CBAA6A] uppercase mb-8 opacity-70">
          A Royal Dining Chamber
        </span>

        <h1 className="font-serif text-6xl text-[#F5EFEB] tracking-tighter leading-none opacity-90 mb-2">
          Chatpati
        </h1>
        <h1 className="font-serif text-6xl text-[#CBAA6A] tracking-tighter leading-none italic">
          Delhi
        </h1>
        
        <div className="mt-16 w-[1px] h-16 bg-gradient-to-b from-[#CBAA6A]/40 to-transparent" />
      </motion.div>
    </motion.section>
  );
}
