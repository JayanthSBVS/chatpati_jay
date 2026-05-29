import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Scene8_ExperienceWall() {
  const containerRef = React.useRef(null);
  
  // Local scroll tracking for the wall's parallax and emergence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative h-[150vh] w-full bg-[#0a0503] flex items-center justify-center overflow-hidden">
      
      {/* Saffron Light Beam Background DNA */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(203,170,106,0.1)_0%,_transparent_50%)]" />

      <motion.div 
        className="relative z-10 w-[90%] md:w-[80%] h-[80vh] flex items-center justify-center overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]"
        style={{ scale, opacity }}
      >
        <motion.img 
          src="/assets/human_wall.png" 
          alt="Hospitality and Memory" 
          className="absolute inset-0 w-full h-[120%] object-cover opacity-80"
          style={{ y: yImage }}
        />
        <div className="absolute inset-0 bg-[#0a0503]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0503] via-transparent to-transparent" />
        
        <div className="relative z-20 text-center flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-7xl text-[#F5EFEB] leading-[1.1] tracking-tighter opacity-90 mix-blend-overlay">
            Every Gathering Deserves<br/>A Memory Worth Serving
          </h2>
          <span className="mt-12 font-sans text-[10px] md:text-xs tracking-[0.5em] text-[#CBAA6A] uppercase opacity-70">
            The Hosting Experience
          </span>
        </div>
      </motion.div>
    </section>
  );
}
