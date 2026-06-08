import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { menuData } from '../../data/menuData';

gsap.registerPlugin(ScrollTrigger);

// Helper to format the chapter number
const formatChapter = (index) => `Chapter ${String(index + 1).padStart(2, '0')}`;

const Chapter = ({ title, description, veg, nonVeg, items, index, image }) => {
  const chapterRef = useRef(null);
  const leftColRef = useRef(null);

  // GSAP scrub removed for performance optimization. Text now flows naturally.

  return (
    <section ref={chapterRef} className="min-h-screen py-24 md:py-32 flex items-center relative border-b border-[#CBAA6A]/10 overflow-hidden">
      
      {/* Background paper texture for the section */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* Left Column: Title & Intro */}
        <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-center relative">
          {image && (
            <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 w-48 h-64 rounded-2xl overflow-hidden opacity-50 border border-primary-gold/20 shadow-2xl pointer-events-none transform -rotate-3 group-hover:rotate-0 transition-transform duration-700">
              <img src={image} alt={title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
          )}
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold mb-6 block relative z-10">
            {formatChapter(index)}
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-primary-cream mb-8 leading-none relative z-10">
            {title}
          </h2>
          {description && (
            <p className="font-sans text-sm md:text-base text-primary-cream/60 leading-relaxed max-w-md relative z-10">
              {description}
            </p>
          )}
        </div>

        {/* Right Column: Menu Items */}
        <div className="lg:col-span-7 flex flex-col gap-16 pt-12 lg:pt-0">
          {/* If the data has veg/nonVeg arrays (like Appetizers, Curries) */}
          {veg && (
            <div className="space-y-6">
              <h3 className="font-sans text-xs tracking-widest uppercase text-primary-gold border-b border-primary-gold/30 pb-4 mb-8">Vegetarian</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {veg.map((item, i) => (
                  <li key={i} className="font-serif text-xl md:text-2xl text-primary-cream/90 hover:text-primary-gold transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {nonVeg && (
            <div className="space-y-6 mt-12">
              <h3 className="font-sans text-xs tracking-widest uppercase text-primary-gold border-b border-primary-gold/30 pb-4 mb-8">Non-Vegetarian</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {nonVeg.map((item, i) => (
                  <li key={i} className="font-serif text-xl md:text-2xl text-primary-cream/90 hover:text-primary-gold transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* If the data has a flat items array (like Chaat Station, Desserts) */}
          {items && items.length > 0 && typeof items[0] === 'string' && (
            <div className="space-y-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {items.map((item, i) => (
                  <li key={i} className="font-serif text-xl md:text-2xl text-primary-cream/90 hover:text-primary-gold transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Special case for Biryani */}
          {title === "Biryani & Rice" && menuData.biryani.biryani && (
            <>
              <div className="space-y-6">
                <h3 className="font-sans text-xs tracking-widest uppercase text-primary-gold border-b border-primary-gold/30 pb-4 mb-8">Signature Biryani</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {menuData.biryani.biryani.map((item, i) => (
                    <li key={i} className="font-serif text-xl md:text-2xl text-primary-cream/90 hover:text-primary-gold transition-colors">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 mt-12">
                <h3 className="font-sans text-xs tracking-widest uppercase text-primary-gold border-b border-primary-gold/30 pb-4 mb-8">Rice Special</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {menuData.biryani.rice.map((item, i) => (
                    <li key={i} className="font-serif text-xl md:text-2xl text-primary-cream/90 hover:text-primary-gold transition-colors">{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
};

export default function MenuChapters() {
  const chapters = [
    menuData.appetizers,
    { ...menuData.chaatStation, image: "/assets/menu-1.jpeg" }, // Raj Kachori
    { ...menuData.mumbaiSpecial, image: "/assets/vadapav.jpg" }, // Vada Pav
    menuData.snacksKaChaska,
    { ...menuData.curries, image: "/assets/menu_paneer.png" }, // Paneer / Curries
    { ...menuData.biryani, image: "/assets/menu_feast.png" }, // Biryani
    menuData.breads,
    menuData.indoChinese,
    menuData.southIndian,
    { ...menuData.desserts, image: "/assets/menu_street.png" } // Jalebi
  ];

  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-[#0a0908] relative">
      <div className="absolute inset-0 bg-texture-paper opacity-10 pointer-events-none" />
      {chapters.map((chapter, index) => (
        <Chapter 
          key={chapter.title} 
          index={index} 
          title={chapter.title}
          description={chapter.description}
          veg={chapter.veg}
          nonVeg={chapter.nonVeg}
          items={chapter.items}
          image={chapter.image}
        />
      ))}
    </div>
  );
}
