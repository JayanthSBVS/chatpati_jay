import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MagneticButton = ({ children, to, primary }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative z-10"
    >
      <Link 
        to={to}
        className={`px-8 py-4 font-sans text-xs tracking-widest uppercase transition-all duration-500 flex items-center justify-center min-w-[200px]
          ${primary 
            ? 'bg-primary-gold text-[#050403] hover:bg-primary-cream' 
            : 'border border-primary-gold text-primary-gold hover:bg-primary-gold/10'
          }
        `}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default function LuxuryCTA() {
  return (
    <section className="h-[80vh] bg-[#050403] relative flex items-center justify-center overflow-hidden border-t border-[#CBAA6A]/20">
      <div className="absolute inset-0 bg-texture-paper opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(203,170,106,0.15)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 text-center px-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold/70 block mb-8"
        >
          Begin Your Journey
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-cream mb-12 leading-none"
        >
          Let's Create An <br />
          <span className="italic text-primary-gold font-light">Unforgettable Celebration</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton to="/contact" primary={true}>
            Book Catering
          </MagneticButton>
          <MagneticButton to="/packages" primary={false}>
            Explore Packages
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
