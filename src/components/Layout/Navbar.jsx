import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setHasScrolled(latest > 50);
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Story', path: '/about' },
    { label: 'Menu', path: '/menu' },
    { label: 'Catering', path: '/catering' },
    { label: 'Reservations', path: '/contact' }
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden && !menuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 pt-8 pb-6 px-8 flex justify-between items-start pointer-events-none"
      >
        {/* Absolute positioning for the blur so it doesn't clip children */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${hasScrolled && !menuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-[#0a0908]/80 backdrop-blur-md h-[150%]" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}></div>
        </div>
        
        <Link to="/" className="relative z-10 pointer-events-auto font-serif text-2xl tracking-widest text-primary-cream uppercase">
          Chatpati <span className="text-primary-gold">Delhi</span>
        </Link>
        
        {/* Desktop + Tablet Links */}
        <div className="relative z-10 pointer-events-auto hidden md:flex gap-8 lg:gap-12 font-sans text-[10px] lg:text-xs tracking-[0.2em] uppercase text-primary-cream">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className="relative group overflow-hidden"
              >
                <span className={`block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full ${isActive ? 'text-primary-gold' : ''}`}>{item.label}</span>
                <span className="absolute top-0 left-0 block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full text-primary-gold group-hover:translate-y-0">{item.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Mobile Hamburger — hidden at md+ */}
        <button 
          className="relative z-[60] flex md:hidden flex-col gap-2 pointer-events-auto p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-8 h-[1px] bg-primary-cream transition-transform duration-500 origin-right ${menuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
          <div className={`w-8 h-[1px] bg-primary-cream transition-transform duration-500 origin-right ${menuOpen ? 'rotate-45 translate-y-[2px]' : ''}`} />
        </button>
      </motion.nav>

      {/* FULLSCREEN MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-40 bg-[#050403] transition-all duration-700 ease-in-out md:hidden flex flex-col justify-center items-center ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Subtle Palace Texture & Glow */}
        <div className="absolute inset-0 pointer-events-none bg-texture-paper opacity-20 mix-blend-multiply"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgba(226,160,96,0.15)_0%,_transparent_60%)]"></div>

        <div className="flex flex-col items-center gap-10 mt-12">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`font-serif text-4xl tracking-widest uppercase transition-colors hover:text-[#CBAA6A] ${location.pathname === item.path ? 'text-[#CBAA6A]' : 'text-[#F5EFEB]/90'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="absolute bottom-12 flex flex-col items-center">
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#CBAA6A]/30 to-transparent mb-8" />
          <span className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#CBAA6A]/50">Chatpati Experience</span>
        </div>
      </div>
    </>
  );
}
