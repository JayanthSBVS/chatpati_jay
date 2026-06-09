import React from 'react';
import { Link } from 'react-router-dom';

export default function LuxuryCTA() {
  return (
    <section className="h-[80vh] bg-[#050403] relative flex items-center justify-center overflow-hidden border-t border-[#CBAA6A]/20">
      <div className="absolute inset-0 bg-texture-paper opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(203,170,106,0.15)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 text-center px-4">
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold/70 block mb-8">
          Begin Your Journey
        </span>

        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-cream mb-12 leading-none">
          Let's Create An <br />
          <span className="italic text-primary-gold font-light">Unforgettable Celebration</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/contact"
            className="px-8 py-4 font-sans text-xs tracking-widest uppercase transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center min-w-[200px] bg-primary-gold text-[#050403] hover:bg-primary-cream hover:shadow-lg hover:shadow-primary-gold/20"
          >
            Book Catering
          </Link>
          <Link
            to="/packages"
            className="px-8 py-4 font-sans text-xs tracking-widest uppercase transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center min-w-[200px] border border-primary-gold text-primary-gold hover:bg-primary-gold/10"
          >
            Explore Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
