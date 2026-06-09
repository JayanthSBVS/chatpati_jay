import React from 'react';
import BackgroundTypography from '../ui/BackgroundTypography';

// Gradient accent colors per chapter for visual differentiation
const chapterAccents = {
  appetizers: 'from-[#7A3B1E]',
  'chaat-station': 'from-[#6B4226]',
  'mumbai-special': 'from-[#1A3A4A]',
  'snacks-ka-chaska': 'from-[#3D2B1F]',
  curries: 'from-[#6B3A2A]',
  'biryani-rice': 'from-[#4A3520]',
  'tandoor-breads': 'from-[#5C3D28]',
  'indo-chinese': 'from-[#1A2E1A]',
  'south-indian': 'from-[#2A3D1A]',
  desserts: 'from-[#5C2A3D]',
  drinks: 'from-[#1A2A3D]',
};

export default function ChapterHero({ title, description, chapterId }) {
  const accent = chapterAccents[chapterId] || 'from-[#3D2B1F]';

  return (
    <section className={`relative min-h-[45vh] flex items-end bg-gradient-to-b ${accent} to-surface-base overflow-hidden`}>
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-texture-paper opacity-10 pointer-events-none" />

      {/* Background Typography */}
      <BackgroundTypography text={title} />

      {/* Gold rule at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-32 w-full">
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent-gold/70 block mb-5">
          Menu Chapter
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-content-primary mb-6 leading-none">
          {title}
        </h1>
        {description && (
          <p className="font-sans text-sm md:text-base text-content-secondary max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
