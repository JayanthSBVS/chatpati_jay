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
      
      {/* Optional Layered Image for Specific Chapters */}
      {image && (
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <img 
            src={image} 
            alt="" 
            loading="lazy" 
            decoding="async" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0908] via-[#0a0908]/80 to-[#0a0908]" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* Left Column: Title & Intro */}
        <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-center will-change-transform">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold mb-6 block">
            {formatChapter(index)}
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-primary-cream mb-8 leading-none">
            {title}
          </h2>
          {description && (
            <p className="font-sans text-sm md:text-base text-primary-cream/60 leading-relaxed max-w-md">
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

  useEffect(() => {
    // Batch reveal animations for chapter items
    const sections = gsap.utils.toArray('.menu-item-reveal');
    ScrollTrigger.batch(sections, {
      onEnter: elements => {
        gsap.to(elements, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out"
        });
      },
      once: true
    });
  }, []);

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
