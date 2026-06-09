import React from 'react';
import { motion, useTransform } from 'framer-motion';

export default function Scene6_Hospitality({ progress }) {
  // Scene 6: Active from 0.55 to 0.8
  const scale = useTransform(progress, [0.74, 0.81, 0.85, 0.88], [0.85, 1, 1.2, 1.5]);
  const opacity = useTransform(progress, [0.74, 0.77, 0.85, 0.88], [0, 1, 1, 0]);
  const blur = useTransform(progress, [0.74, 0.77, 0.85, 0.88], ['blur(20px)', 'blur(0px)', 'blur(0px)', 'blur(20px)']);

  return (
    <motion.section 
      className="absolute inset-0 w-full h-full bg-transparent flex flex-col items-center justify-center px-6 overflow-hidden z-40 pointer-events-none"
      style={{ opacity, scale, filter: blur, transformOrigin: '50% 70%' }}
    >
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        <div>
          <span className="font-sans text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-accent-gold/50 mb-6 block">The Celebration</span>
          <h2 className="font-serif text-4xl md:text-6xl text-content-primary/90 max-w-2xl mx-auto leading-[1.1]">
            Royal Hospitality
          </h2>
        </div>
        
        <div className="mt-16 md:mt-24 relative w-full aspect-[21/9] max-w-5xl mx-auto overflow-hidden shadow-[0_0_100px_rgba(203,170,106,0.05)]">
          <div className="absolute inset-0 bg-surface-paper/50 mix-blend-overlay z-10 pointer-events-none"></div>
          <img 
            src="/assets/reference-1.jpeg" 
            alt="Catering and Events" 
            className="w-full h-full object-cover object-center saturate-110 sepia-[0.3]"
          />
        </div>
      </div>
    </motion.section>
  );
}
