import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Scene5_CinematicPause() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0.5]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[150vh] bg-[#050403] overflow-hidden flex items-center justify-center"
    >
      
      {/* MASSIVE ENVIRONMENTAL BACKGROUND */}
      <motion.div 
        className="absolute inset-0 w-full h-[130%]"
        style={{ y: backgroundY }}
      >
        <img 
          src="/assets/delhi_palace_night.png" 
          alt="Delhi Palace Night Atmosphere" 
          className="w-full h-full object-cover object-center saturate-[0.85] contrast-125"
        />
        <div className="absolute inset-0 bg-[#050403]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-transparent to-[#0a0908] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(226,160,96,0.1)_0%,_transparent_60%)] z-10" />
      </motion.div>

      {/* FOREGROUND CONTENT */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 md:px-8 w-full max-w-5xl"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* 
          Mobile: text-3xl font-semibold for impact and legibility 
          Tablet: text-5xl comfortable 
          Desktop: text-7xl cinematic 
        */}
        <h2 className="
          font-serif tracking-tighter leading-tight drop-shadow-2xl text-[#F5EFEB]/90
          text-3xl font-semibold
          md:text-5xl md:font-medium
          lg:text-7xl lg:font-normal
        ">
          Some Celebrations Deserve<br/>More Than Catering.
        </h2>
        
        <p className="
          mt-6 md:mt-8 font-sans uppercase leading-relaxed text-[#CBAA6A] max-w-xl mx-auto
          text-[10px] tracking-[0.25em] font-medium opacity-90
          md:text-xs md:tracking-[0.3em] md:font-normal md:opacity-80
        ">
          Crafting unforgettable hospitality experiences across every gathering.
        </p>

        <button className="mt-12 md:mt-16 group relative">
          <div className="absolute inset-0 bg-[#CBAA6A] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-1000 rounded-full" />
          {/* Tablet: slightly larger tap target */}
          <div className="relative px-10 md:px-12 py-4 border border-[#CBAA6A]/30 rounded-full bg-black/50 backdrop-blur-sm text-[#CBAA6A] font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase transition-all duration-700 hover:bg-[#CBAA6A]/10 hover:border-[#CBAA6A]/60 font-medium md:font-normal">
            Begin Your Celebration
          </div>
        </button>
      </motion.div>

    </section>
  );
}
