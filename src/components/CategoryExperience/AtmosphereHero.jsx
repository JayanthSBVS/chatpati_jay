import React from 'react';
import BackgroundTypography from '../ui/BackgroundTypography';

export default function AtmosphereHero({ title, atmosphere }) {
  return (
    <section id="story" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0908]">
      {/* Background Image with Parallax-like attachment on desktop */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center lg:bg-fixed opacity-40 mix-blend-screen"
        style={{ backgroundImage: `url(${atmosphere.heroImage})` }}
      />
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/50 to-transparent" />
      
      {/* Background Typography */}
      <BackgroundTypography text={title} />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary-cream mb-8 tracking-wide">
          {title}
        </h1>
        
        <p className="text-lg md:text-2xl font-serif italic text-primary-gold leading-relaxed mb-12">
          {atmosphere.story}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          {atmosphere.visualMotifs.map((motif, index) => (
            <span 
              key={index} 
              className="text-xs uppercase tracking-[0.2em] text-primary-cream/60 border border-[#CBAA6A]/20 px-4 py-2 rounded-full"
            >
              {motif}
            </span>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator — CSS pulse, not continuous JS bounce */}
      <div className="absolute bottom-10 z-20 text-center opacity-70">
        <span className="block text-primary-cream/65 text-xs uppercase tracking-widest mb-2">Explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary-gold to-transparent mx-auto" />
      </div>
    </section>
  );
}
