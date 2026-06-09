import React from 'react';

export default function CuisineStory({ paragraph }) {
  if (!paragraph) return null;
  return (
    <section className="py-20 bg-[#0a0908]">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="w-12 h-[1px] bg-primary-gold mb-10" />
        <p className="font-serif text-xl md:text-2xl text-primary-cream/75 leading-relaxed italic">
          {paragraph}
        </p>
        <div className="w-12 h-[1px] bg-primary-gold/30 mt-10 ml-auto" />
      </div>
    </section>
  );
}
