import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../../data/menuData';

// Helper to format the chapter number
const formatChapter = (index) => `Chapter ${String(index + 1).padStart(2, '0')}`;

// Helper to determine if a string item is vegetarian
const isItemVeg = (name) => {
  const lower = name.toLowerCase();
  const nonVegKeywords = ['chicken', 'lamb', 'shrimp', 'fish', 'mutton', 'egg', 'meat', 'keema', 'barrah', 'seekh', 'chops'];
  return !nonVegKeywords.some(keyword => lower.includes(keyword));
};

// Map chapter titles to their /menu/chapters/:slug routes
const chapterSlugMap = {
  "Appetizers": "appetizers",
  "Chaat Station": "chaat-station",
  "Mumbai Special": "mumbai-special",
  "Snacks Ka Chaska": "snacks-ka-chaska",
  "Curries": "curries",
  "Biryani & Rice": "biryani-rice",
  "Tandoor Breads": "tandoor-breads",
  "Indo-Chinese": "indo-chinese",
  "South Indian": "south-indian",
  "Desserts": "desserts",
};

const preloadChapterPage = () => {
  import('../../pages/ChapterExperiencePage');
};

const Chapter = ({ title, description, veg, nonVeg, items, index, image, activeFilter }) => {
  const chapterRef = useRef(null);
  const leftColRef = useRef(null);

  const chapterSlug = chapterSlugMap[title];

  // Helper to filter flat items list locally
  const getFilteredItems = () => {
    if (!items) return [];
    if (activeFilter === 'all') return items;
    if (activeFilter === 'veg') return items.filter(item => isItemVeg(item));
    return items.filter(item => !isItemVeg(item));
  };

  const filteredFlatItems = getFilteredItems();

  // If filtering leads to no items, do not render this chapter
  const hasVegItems = veg && veg.length > 0;
  const hasNonVegItems = nonVeg && nonVeg.length > 0;
  const hasFlatItems = filteredFlatItems.length > 0;

  if (activeFilter === 'veg' && !hasVegItems && !hasFlatItems) return null;
  if (activeFilter === 'non-veg' && !hasNonVegItems && !hasFlatItems) return null;

  return (
    <section ref={chapterRef} className="min-h-screen py-24 md:py-32 flex items-center relative border-b border-[#CBAA6A]/10 overflow-hidden">
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
          
          {chapterSlug ? (
            <Link
              to={`/menu/chapters/${chapterSlug}`}
              className="group/link block w-fit relative z-10"
              onMouseEnter={preloadChapterPage}
              onTouchStart={preloadChapterPage}
              aria-label={`Explore ${title}`}
            >
              <h2 className="font-serif text-5xl md:text-7xl text-primary-cream mb-8 leading-none group-hover/link:text-primary-gold transition-colors duration-300">
                {title} <span className="inline-block text-2xl align-middle transform transition-transform group-hover/link:translate-x-2">→</span>
              </h2>
            </Link>
          ) : (
            <h2 className="font-serif text-5xl md:text-7xl text-primary-cream mb-8 leading-none relative z-10">
              {title}
            </h2>
          )}

          {description && (
            <p className="font-sans text-sm md:text-base text-primary-cream/60 leading-relaxed max-w-md relative z-10">
              {description}
            </p>
          )}
        </div>

        {/* Right Column: Menu Items */}
        <div className="lg:col-span-7 flex flex-col gap-16 pt-12 lg:pt-0">
          {/* Vegetarian */}
          {veg && (activeFilter === 'all' || activeFilter === 'veg') && (
            <div className="space-y-6">
              <h3 className="font-sans text-xs tracking-widest uppercase text-primary-gold border-b border-primary-gold/30 pb-4 mb-8">Vegetarian</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {veg.map((item, i) => (
                  <li key={i} className="font-serif text-xl md:text-2xl text-primary-cream/90 hover:text-primary-gold transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Non-Vegetarian */}
          {nonVeg && (activeFilter === 'all' || activeFilter === 'non-veg') && (
            <div className="space-y-6 mt-12">
              <h3 className="font-sans text-xs tracking-widest uppercase text-primary-gold border-b border-primary-gold/30 pb-4 mb-8">Non-Vegetarian</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {nonVeg.map((item, i) => (
                  <li key={i} className="font-serif text-xl md:text-2xl text-primary-cream/90 hover:text-primary-gold transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Flat Items list filtered dynamically */}
          {items && items.length > 0 && typeof items[0] === 'string' && filteredFlatItems.length > 0 && (
            <div className="space-y-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {filteredFlatItems.map((item, i) => (
                  <li key={i} className="font-serif text-xl md:text-2xl text-primary-cream/90 hover:text-primary-gold transition-colors">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Special case for Biryani */}
          {title === "Biryani & Rice" && menuData.biryani.biryani && (
            <>
              {(activeFilter === 'all' || activeFilter === 'veg' || activeFilter === 'non-veg') && (
                <div className="space-y-6">
                  <h3 className="font-sans text-xs tracking-widest uppercase text-primary-gold border-b border-primary-gold/30 pb-4 mb-8">Signature Biryani</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {menuData.biryani.biryani
                      .filter(item => {
                        if (activeFilter === 'all') return true;
                        const isVeg = isItemVeg(item);
                        return activeFilter === 'veg' ? isVeg : !isVeg;
                      })
                      .map((item, i) => (
                        <li key={i} className="font-serif text-xl md:text-2xl text-primary-cream/90 hover:text-primary-gold transition-colors">{item}</li>
                      ))}
                  </ul>
                </div>
              )}
              {activeFilter === 'all' && (
                <div className="space-y-6 mt-12">
                  <h3 className="font-sans text-xs tracking-widest uppercase text-primary-gold border-b border-primary-gold/30 pb-4 mb-8">Rice Special</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {menuData.biryani.rice.map((item, i) => (
                      <li key={i} className="font-serif text-xl md:text-2xl text-primary-cream/90 hover:text-primary-gold transition-colors">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </section>
  );
};

export default function MenuChapters() {
  const [diet, setDiet] = useState('all');

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
      
      {/* Local Toggle Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 flex flex-col md:flex-row items-center justify-between border-b border-[#CBAA6A]/10 pb-8 relative z-20">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-cream">Breadth of Flavor</h2>
          <p className="font-sans text-xs uppercase tracking-widest text-primary-gold mt-2">Explore Chapters</p>
        </div>
        
        <div className="flex border border-[#CBAA6A]/30 rounded-full p-1 mt-6 md:mt-0 bg-black/40">
          {['all', 'veg', 'non-veg'].map((filter) => (
            <button
              key={filter}
              onClick={() => setDiet(filter)}
              className={`px-6 py-2 text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 focus:outline-none ${
                diet === filter 
                  ? 'bg-primary-gold text-[#0a0908]' 
                  : 'text-primary-cream/60 hover:text-primary-cream'
              }`}
            >
              {filter === 'all' ? 'All' : filter === 'veg' ? 'Veg' : 'Non-Veg'}
            </button>
          ))}
        </div>
      </div>

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
          activeFilter={diet}
        />
      ))}
    </div>
  );
}
