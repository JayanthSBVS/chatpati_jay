import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MenuManuscript() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Lock body scroll when manuscript is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const nextPage = () => setCurrentPage(2);
  const prevPage = () => setCurrentPage(1);

  return (
    <>
      {/* Quiet Sacred Invitation (Trigger) */}
      <motion.div 
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center transition-all duration-1000 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <button 
          onClick={toggleMenu}
          className="group relative flex flex-col items-center gap-3 cursor-pointer py-4 px-8"
        >
          {/* Subtle breathing glow behind */}
          <motion.div 
            animate={{ opacity: [0.1, 0.25, 0.1] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-accent-gold blur-[20px] rounded-full mix-blend-screen pointer-events-none" 
          />
          
          <span className="relative z-10 font-sans text-[9px] tracking-[0.4em] uppercase text-accent-gold/70 group-hover:text-content-primary transition-colors duration-700">
            Open Manuscript
          </span>
          
          {/* Minimal separator line */}
          <div className="relative w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent transition-all duration-700" />
        </button>
      </motion.div>

      {/* The Tactile Interactive Manuscript Payoff */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-[#050403] flex items-center justify-center p-4 md:p-12 overflow-hidden"
          >
            {/* Background Texture & Lighting */}
            <div className="absolute inset-0 pointer-events-none bg-texture-paper opacity-30 mix-blend-multiply"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_0%,_rgba(203,170,106,0.1)_0%,_transparent_60%)] pointer-events-none"></div>

            {/* Close Button */}
            <button 
              onClick={toggleMenu}
              className="absolute top-8 md:top-12 right-8 md:right-12 z-50 text-accent-gold/60 hover:text-accent-gold font-sans text-[10px] tracking-[0.3em] uppercase transition-colors"
            >
              Close Manuscript
            </button>

            {/* Book Container */}
            <div className="relative w-full max-w-6xl h-full max-h-[85vh] md:max-h-[90vh] flex flex-col items-center justify-center mt-8 md:mt-0">
              
              {/* Image Container with Soft Shadow Depth & Tactile Swipe */}
              <div className="relative w-full h-[70vh] md:h-full flex items-center justify-center overflow-hidden rounded-md md:shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;
                    if (swipe < -50 && currentPage === 1) nextPage();
                    else if (swipe > 50 && currentPage === 2) prevPage();
                  }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                  <AnimatePresence mode="wait">
                    {currentPage === 1 ? (
                      <motion.img 
                        key="page1"
                        src="/assets/menu-1.jpeg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute w-auto h-full object-contain pointer-events-none drop-shadow-2xl md:drop-shadow-none"
                      />
                    ) : (
                      <motion.img 
                        key="page2"
                        src="/assets/menu-2.jpeg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute w-auto h-full object-contain pointer-events-none drop-shadow-2xl md:drop-shadow-none"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Tactile Lighting Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-transparent pointer-events-none md:hidden"></div>
              </div>

              {/* Page Controls & Position Cues */}
              <div className="absolute bottom-4 md:bottom-8 flex flex-col items-center gap-6 w-full px-6">
                
                {/* Visible Dots Cue for Swiping */}
                <div className="flex gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${currentPage === 1 ? 'bg-accent-gold' : 'bg-accent-gold/20'}`} />
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${currentPage === 2 ? 'bg-accent-gold' : 'bg-accent-gold/20'}`} />
                </div>

                <div className="flex w-full justify-between items-center max-w-sm">
                  <button 
                    onClick={prevPage}
                    className={`font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase transition-all duration-500 py-4 px-6 ${currentPage === 1 ? 'opacity-20 pointer-events-none text-white' : 'opacity-100 text-accent-gold hover:scale-110'}`}
                  >
                    Previous
                  </button>
                  <div className="font-serif italic text-white/40 text-xs hidden md:block">
                    Swipe or Tap
                  </div>
                  <button 
                    onClick={nextPage}
                    className={`font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase transition-all duration-500 py-4 px-6 ${currentPage === 2 ? 'opacity-20 pointer-events-none text-white' : 'opacity-100 text-accent-gold hover:scale-110'}`}
                  >
                    Next Page
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
