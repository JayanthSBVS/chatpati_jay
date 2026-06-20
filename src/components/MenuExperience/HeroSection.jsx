import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
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
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 'var(--img-opacity-hero)' }}
        >
          <source src="/assets/menu-page_hero_section_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
        <div className="absolute inset-0 bg-texture-paper opacity-35 mix-blend-multiply" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent-gold mb-6 md:mb-8 block font-medium">
          A Legacy of Flavor
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-ivory leading-[1.1] mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Where Every Event <br />
          <span className="italic font-light text-accent-gold">Becomes a</span> <br />
          Culinary Celebration
        </h1>

        <p className="font-sans text-xs md:text-sm text-primary-cream/90 tracking-widest max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Immersive catering experiences crafted to elevate your most cherished moments. 
          Discover the breadth of our artisanal menus.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in relative z-20" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#cuisine-journey" 
            onClick={exploreMenu} 
            className="w-full sm:w-auto px-10 py-4 bg-accent-gold text-surface-base font-sans text-xs tracking-widest uppercase hover:bg-content-primary transition-colors duration-300"
          >
            Explore Menu
          </a>
          <Link 
            to="/cuisine/live-stations" 
            className="w-full sm:w-auto px-10 py-4 border border-accent-gold text-accent-gold font-sans text-xs tracking-widest uppercase hover:bg-accent-gold hover:text-surface-base transition-colors duration-300 backdrop-blur-sm"
          >
            Live Stations
          </Link>
        </div>
      </div>

      {/* Desktop Scroll indicator */}
      <div className="absolute bottom-4 lg:bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 animate-fade-in pointer-events-none z-0" style={{ animationDelay: '1.5s' }}>
        <span className="font-sans text-[10px] tracking-widest text-content-primary/40 uppercase block mb-4">Explore Experience</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-content-primary/40 to-transparent mx-auto">
          <div 
            style={{ animation: 'scrollIndicatorDrop 2s ease-out 1.5s 1 forwards' }}
            className="w-full h-full bg-accent-gold origin-top"
          />
        </div>
      </div>


    </section>
  );
}

