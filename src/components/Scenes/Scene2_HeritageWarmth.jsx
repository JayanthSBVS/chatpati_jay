import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function Scene2_HeritageWarmth({ progress }) {
  const isMobile = useIsMobile();

  // Scene 2: Active from 0.30 to 0.45
  const scale = useTransform(progress, [0, 0.3, 0.35, 0.4, 0.45, 1], 
    isMobile ? [0.95, 0.95, 1, 1, 1.05, 1.05] : [0.9, 0.9, 1, 1, 1.1, 1.1],
    { clamp: true }
  );
  const opacity = useTransform(progress, [0, 0.3, 0.35, 0.4, 0.45, 1], [0, 0, 1, 1, 0, 0], { clamp: true });
  
  return (
    <motion.section 
      className="absolute inset-0 w-full h-full bg-transparent flex flex-col items-center justify-center px-6 overflow-hidden z-20 pointer-events-none transform-gpu"
      style={{ opacity, scale, transformOrigin: '50% 50%' }}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(203,170,106,0.08)_0%,_transparent_60%)]"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center px-4">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-[#F5EFEB]/90 max-w-4xl leading-snug md:leading-[1] tracking-wide md:tracking-tight">
          A lineage of flavor, preserved in the shadows of Purani Delhi.
        </h2>
        <p className="mt-16 md:mt-12 font-sans text-[9px] md:text-[10px] text-[#CBAA6A]/60 tracking-[0.4em] uppercase max-w-md mx-auto leading-loose">
          Where time slows down and heritage speaks through every aroma.
        </p>
      </div>
    </motion.section>
  );
}
