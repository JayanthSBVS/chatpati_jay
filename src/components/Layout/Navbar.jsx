import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          <div className="absolute inset-0 bg-surface-paper/80 backdrop-blur-md h-[150%]" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}></div>
        </div>
        
        <Link to="/" className="relative z-10 pointer-events-auto font-serif text-2xl tracking-widest text-content-primary uppercase">
          Chatpati <span className="text-accent-gold">Delhi</span>
        </Link>
        
        {/* Desktop + Tablet Links & Theme Toggle */}
        <div className="relative z-10 pointer-events-auto hidden md:flex items-center gap-8 lg:gap-12 font-sans text-[10px] lg:text-xs tracking-[0.2em] uppercase text-content-primary">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className="relative group overflow-hidden"
              >
                <span className={`block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full ${isActive ? 'text-accent-gold' : ''}`}>{item.label}</span>
                <span className="absolute top-0 left-0 block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full text-accent-gold group-hover:translate-y-0">{item.label}</span>
              </Link>
            )
          })}
          
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-surface-accent transition-colors"
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {theme === 'dark' ? <Moon className="w-4 h-4 text-content-primary" /> : <Sun className="w-4 h-4 text-content-primary" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Hamburger — hidden at md+ */}
        <div className="relative z-[60] flex md:hidden items-center gap-4 pointer-events-auto">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-surface-accent transition-colors"
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {theme === 'dark' ? <Moon className="w-4 h-4 text-content-primary" /> : <Sun className="w-4 h-4 text-content-primary" />}
            </motion.div>
          </button>

          <button 
            className="flex flex-col gap-2 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-8 h-[1px] bg-content-primary transition-transform duration-500 origin-right ${menuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
            <div className={`w-8 h-[1px] bg-content-primary transition-transform duration-500 origin-right ${menuOpen ? 'rotate-45 translate-y-[2px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* FULLSCREEN MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 z-40 bg-surface-base transition-all duration-700 ease-in-out md:hidden flex flex-col justify-center items-center ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
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
              className={`font-serif text-4xl tracking-widest uppercase transition-colors hover:text-accent-gold ${location.pathname === item.path ? 'text-accent-gold' : 'text-content-primary'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="absolute bottom-12 flex flex-col items-center">
          <div className="w-[1px] h-12 bg-gradient-to-b from-border-subtle to-transparent mb-8" />
          <span className="font-sans text-[8px] tracking-[0.4em] uppercase text-accent-gold/50">Chatpati Experience</span>
        </div>
      </div>
    </>
  );
}
