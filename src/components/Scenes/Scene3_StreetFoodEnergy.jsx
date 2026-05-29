import React from 'react';
import { motion, useTransform } from 'framer-motion';

export default function Scene3_StreetFoodEnergy({ progress }) {
  // Scene 3: Active from 0.35 to 0.6
  const scale = useTransform(progress, [0.16, 0.21, 0.24, 0.26], [0.85, 1, 1.2, 1.5]);
  const opacity = useTransform(progress, [0.16, 0.18, 0.24, 0.26], [0, 1, 1, 0]);
  const blur = useTransform(progress, [0.16, 0.18, 0.24, 0.26], ['blur(20px)', 'blur(0px)', 'blur(0px)', 'blur(20px)']);

  return (
    <motion.section 
      className="absolute inset-0 w-full h-full bg-transparent flex flex-col md:flex-row items-center justify-center overflow-hidden z-30 pointer-events-none"
      style={{ opacity, scale, filter: blur, transformOrigin: '30% 50%' }}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(226,100,50,0.15)_0%,_transparent_70%)]"></div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[60%] h-[60vh] md:h-[100vh] relative">
          <img 
            src="/assets/menu-1.jpeg" 
            alt="Delhi Street Food Macro" 
            className="w-full h-full object-cover object-center saturate-200 contrast-[1.4] sepia-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0908] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-[#0a0908] z-10"></div>
        </div>

        <div className="w-full md:w-[40%] flex flex-col justify-center px-8 md:px-16 mt-16 md:mt-0">
          <h2 className="font-serif text-5xl md:text-8xl text-[#E2A060] leading-[0.8] tracking-tighter mb-8">
            Street <br/> Fire
          </h2>
          <p className="font-sans text-[10px] md:text-xs text-[#F5EFEB]/60 tracking-[0.2em] uppercase leading-loose max-w-xs">
            Heat. Oil. Spice. <br/><br/>
            The unfiltered, chaotic energy of the streets, distilled into pure emotional flavor.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
