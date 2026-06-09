import React from 'react';
import { motion, useTransform } from 'framer-motion';

export default function Scene7_Closing({ progress }) {
  // Scene 7: Active from 0.75 to 1.0
  const scale = useTransform(progress, [0.86, 0.9, 1], [0.85, 1, 1]);
  const opacity = useTransform(progress, [0.86, 0.9, 1], [0, 1, 1]);
  const blur = useTransform(progress, [0.86, 0.9, 1], ['blur(20px)', 'blur(0px)', 'blur(0px)']);

  return (
    <motion.section 
      className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-[#050404] flex flex-col items-center justify-center px-6 overflow-hidden z-50 pointer-events-none"
      style={{ opacity, scale, filter: blur, transformOrigin: '50% 50%' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-gold/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center w-full mt-32">
        <div>
          <h2 className="font-serif text-5xl md:text-7xl text-content-primary/90 tracking-tighter">
            Reserve the Evening
          </h2>
          <p className="mt-8 font-sans text-[8px] md:text-[10px] text-accent-gold/50 tracking-[0.4em] uppercase max-w-md mx-auto">
            Experience the soul of Delhi.
          </p>
        </div>

        <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-12 border-t border-content-primary/5 pt-12">
          <div className="flex flex-col items-center md:items-start gap-4 pointer-events-auto">
            <h3 className="font-serif text-3xl text-accent-gold/80">Chatpati Delhi</h3>
            <p className="font-sans text-[10px] md:text-xs text-content-primary/30 uppercase tracking-[0.2em]">Modern Flavors. Royal Hospitality.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right pointer-events-auto">
            <a href="mailto:info@chatpatidelhi.com" className="font-sans text-[10px] md:text-xs text-content-primary/30 uppercase tracking-[0.2em] hover:text-accent-gold transition-colors">info@chatpatidelhi.com</a>
            <a href="#" className="font-sans text-[10px] md:text-xs text-content-primary/30 uppercase tracking-[0.2em] hover:text-accent-gold transition-colors">Follow us on Instagram</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
