import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function Scene1_RoyalEntrance({ progress }) {
  const isMobile = useIsMobile();

  // Scene 1: Active from 0 to 0.30 (30% of 1000vh scroll)
  const scale = useTransform(progress, [0, 0.3], isMobile ? [1, 1.05] : [1, 1.5], { clamp: true });
  const opacity = useTransform(progress, [0, 0.25, 0.3, 1], [1, 1, 0, 0], { clamp: true });
  
  const archScale = useTransform(progress, [0, 0.3], isMobile ? [1, 1.02] : [1, 1.8], { clamp: true });

  return (
    <motion.section 
      className="absolute inset-0 w-full h-full bg-surface-base flex items-center overflow-hidden z-10 pointer-events-none transform-gpu"
      style={{ opacity }}
    >
      <div className="absolute top-0 right-[-20%] w-[140%] h-[140%] z-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_40%,_rgba(203,170,106,0.12)_0%,_transparent_60%)]" />

      {/* ── DESKTOP (lg+) COMPOSITION ── */}
      <motion.div 
        className="hidden lg:flex absolute inset-0 z-10 items-center justify-end pointer-events-none transform-gpu"
        style={{ scale: archScale, transformOrigin: '70% 50%' }}
      >
        <div className="relative w-[70%] h-[110vh] translate-x-[10%]" style={{ opacity: 'var(--img-opacity-hero)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-surface-base via-surface-base/20 to-transparent z-20 w-[40%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/10 to-transparent z-20 h-[30%] top-auto bottom-0"></div>
          <img 
            src="/assets/floral-arch.jpeg" 
            alt="Mughal Palace Atmosphere" 
            className="w-full h-full object-cover object-left"
          />
        </div>
      </motion.div>

      <motion.div 
        className="hidden lg:block relative z-20 w-full pl-6 lg:pl-16 pt-32 transform-gpu"
        style={{ scale, transformOrigin: '20% 50%' }}
      >
        <div className="flex flex-col items-start w-full">
          <span className="font-sans text-[10px] tracking-[0.5em] text-accent-gold uppercase mb-12 ml-2 opacity-60">
            A Royal Dining Chamber
          </span>

          <h1 className="font-serif text-[9rem] xl:text-[12rem] 2xl:text-[16rem] text-content-primary tracking-tighter leading-[0.75] drop-shadow-2xl">
            Chatpati
          </h1>
          <h1 className="font-serif text-[8rem] xl:text-[11rem] 2xl:text-[14rem] text-accent-gold tracking-tighter leading-[0.75] ml-[20%] mt-[-2%] drop-shadow-xl">
            Delhi
          </h1>
          
          <div className="mt-48 ml-[10%] w-[1px] h-24 bg-accent-gold/30" />
        </div>
      </motion.div>

      {/* ── TABLET (md–lg) COMPOSITION ── */}
      <motion.div
        className="hidden md:flex lg:hidden absolute inset-0 z-10 items-center justify-end pointer-events-none transform-gpu"
        style={{ scale: archScale, transformOrigin: '70% 50%' }}
      >
        <div className="relative w-[60%] h-[110vh] translate-x-[5%]" style={{ opacity: 'var(--img-opacity-hero)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-surface-base via-surface-base/20 to-transparent z-20 w-[40%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/10 to-transparent z-20 h-[30%] top-auto bottom-0"></div>
          <img 
            src="/assets/floral-arch.jpeg" 
            alt="Mughal Palace Atmosphere" 
            className="w-full h-full object-cover object-left"
          />
        </div>
      </motion.div>

      <motion.div
        className="hidden md:block lg:hidden relative z-20 w-full pl-10 pt-24 transform-gpu"
        style={{ scale, transformOrigin: '20% 50%' }}
      >
        <div className="flex flex-col items-start w-full">
          <span className="font-sans text-[9px] tracking-[0.45em] text-accent-gold uppercase mb-8 ml-1 opacity-60">
            A Royal Dining Chamber
          </span>
          {/* Tablet: large but not desktop-extreme sizes */}
          <h1 className="font-serif text-[5.5rem] text-content-primary tracking-tighter leading-[0.78] font-semibold drop-shadow-xl">
            Chatpati
          </h1>
          <h1 className="font-serif text-[5rem] text-accent-gold tracking-tighter leading-[0.78] ml-[18%] mt-[-1%] drop-shadow-md">
            Delhi
          </h1>
          <div className="mt-24 ml-[8%] w-[1px] h-16 bg-accent-gold/30" />
        </div>
      </motion.div>

      {/* ── MOBILE COMPOSITION ── */}
      <motion.div 
        className="flex md:hidden absolute inset-0 z-10 flex-col items-center justify-center pt-24 transform-gpu"
        style={{ scale: archScale, transformOrigin: '50% 50%' }}
      >
        <div className="relative w-[90%] h-[60vh] rounded-t-full overflow-hidden" style={{ opacity: 'var(--img-opacity-hero)' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/20 to-transparent z-20 h-[50%] top-auto bottom-0"></div>
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
        <span className="font-sans text-[9px] tracking-[0.4em] text-accent-gold uppercase mb-8 opacity-70">
          A Royal Dining Chamber
        </span>

        {/* Mobile: heavier font weight so gold/cream text pops */}
        <h1 className="font-serif text-[3.8rem] text-content-primary tracking-tighter leading-none mb-2 font-bold drop-shadow-lg">
          Chatpati
        </h1>
        <h1 className="font-serif text-[3.8rem] text-accent-gold tracking-tighter leading-none italic font-semibold drop-shadow-md">
          Delhi
        </h1>
        
        <div className="mt-16 w-[1px] h-16 bg-gradient-to-b from-accent-gold/40 to-transparent" />
      </motion.div>

    </motion.section>
  );
}
