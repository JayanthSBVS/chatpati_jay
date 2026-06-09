import React, { useRef } from 'react';
import { assets } from '../../data/assetMap';

export default function HeroSection() {
  const containerRef = useRef(null);

  const exploreMenu = (e) => {
    e.preventDefault();
    const el = document.getElementById('cuisine-journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-surface-base">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollIndicatorDrop {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          30%  { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(1); transform-origin: top; }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
      
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={assets.menu.fire} 
          alt="" 
          fetchPriority="high"
          loading="eager" 
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 'var(--img-opacity-hero)' }}
        />
        <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
        <div className="absolute inset-0 bg-texture-paper opacity-35 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent-gold mb-6 md:mb-8 block font-medium">
          A Legacy of Flavor
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-content-primary leading-[1.1] mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Where Every Event <br />
          <span className="italic font-light text-accent-gold">Becomes a</span> <br />
          Culinary Celebration
        </h1>

        <p className="font-sans text-xs md:text-sm text-content-secondary tracking-widest max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Immersive catering experiences crafted to elevate your most cherished moments. 
          Discover the breadth of our artisanal menus.
        </p>
      </div>

      {/* Desktop Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <span className="font-sans text-[10px] tracking-widest text-content-primary/40 uppercase block mb-4">Explore Experience</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-content-primary/40 to-transparent mx-auto">
          <div 
            style={{ animation: 'scrollIndicatorDrop 2s ease-out 1.5s 1 forwards' }}
            className="w-full h-full bg-accent-gold origin-top"
          />
        </div>
      </div>

      {/* Mobile-only thumb-zone CTA */}
      <div className="absolute bottom-12 left-0 right-0 px-6 md:hidden flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
        <a 
          href="#cuisine-journey" 
          onClick={exploreMenu}
          className="w-full max-w-[300px] min-h-[56px] flex items-center justify-center bg-accent-gold/10 border border-accent-gold/30 text-accent-gold font-sans text-sm tracking-widest uppercase rounded-sm hover:bg-accent-gold/20 active:scale-[0.98] active:opacity-80 transition-all duration-100"
        >
          ↓ Explore Menu
        </a>
      </div>
    </section>
  );
}

