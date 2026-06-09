import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../../data/menuData';
import { assets } from '../../data/assetMap';
import BackgroundTypography from '../ui/BackgroundTypography';

// Helper to format the chapter number
const formatChapter = (index) => `Chapter ${String(index + 1).padStart(2, '0')}`;

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

// Removed preloadChapterPage to avoid main thread blocking on rapid scroll (mouse accidentally sweeping across links)

const useChapterData = (chapter) => {
  return useMemo(() => {
    const { title, items, veg, nonVeg, image } = chapter;
    let allItems = [];
    if (items) {
      if (typeof items[0] === 'string') {
        allItems = items;
      } else {
        allItems = items; // assuming objects with .name
      }
    } else {
      if (title === "Biryani & Rice") {
        allItems = [...(menuData.biryani.biryani || []), ...(menuData.biryani.rice || [])];
      } else {
        if (veg) allItems = [...allItems, ...veg];
        if (nonVeg) allItems = [...allItems, ...nonVeg];
      }
    }

    // Extract names if objects
    const formattedItems = allItems.map(item => typeof item === 'string' ? item : item.name);

    return {
      title,
      image,
      slug: chapterSlugMap[title],
      previewItems: formattedItems.slice(0, 3),
      backgroundText: title,
      totalCount: formattedItems.length
    };
  }, [chapter]);
};

const DesktopCulinaryIndex = ({ chapters }) => {
  return (
    <div className="hidden lg:flex flex-col w-full max-w-5xl mx-auto px-12">
      {chapters.map((rawChapter, index) => {
        const chapter = useChapterData(rawChapter);
        if (chapter.totalCount === 0) return null;

        return (
          <div 
            key={chapter.title} 
            className="relative flex items-center justify-between py-16 border-b border-[#CBAA6A]/10 group"
            style={{ contain: 'content' }}
          >
            {/* Background Typography */}
            <BackgroundTypography text={chapter.backgroundText} />

            {/* Content Container */}
            <div className="flex flex-col z-10 w-2/3">
              <span className="font-sans text-xs tracking-[0.4em] uppercase text-primary-gold mb-4 block">
                {formatChapter(index)}
              </span>
              <h3 className="font-serif text-5xl text-primary-cream mb-8">
                {chapter.title}
              </h3>
              
              <div className="mb-8 space-y-3">
                {chapter.previewItems.map((item, i) => (
                  <p key={i} className="font-serif text-xl text-primary-cream/80">{item}</p>
                ))}
                {chapter.totalCount > 3 && (
                   <p className="font-sans text-[10px] tracking-widest text-primary-gold/60 uppercase mt-4">Most Requested</p>
                )}
              </div>

              <div className="flex items-center gap-8">
                 <span className="font-sans text-xs tracking-widest text-primary-cream/50 uppercase">{chapter.totalCount} Dishes</span>
                   <Link 
                     to={`/menu/chapters/${chapter.slug}`}
                     aria-label={`Explore ${chapter.title} Chapter`}
                     className="font-sans text-xs tracking-widest uppercase text-primary-gold border-b border-primary-gold/30 hover:border-primary-gold pb-1 transition-colors flex items-center group/link"
                   >
                     Explore <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                   </Link>
              </div>
            </div>

            {/* Static Minimal Image Container */}
            <div className="z-10 w-1/3 flex justify-end">
               <div className="w-56 aspect-[4/5] overflow-hidden rounded-sm border border-[#CBAA6A]/10 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                 <img 
                   src={chapter.image || assets.cover.refreshments} 
                   alt={`${chapter.title} featured`}
                   loading="lazy"
                   decoding="async"
                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
                 />
               </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const MobileDiscoveryRail = ({ chapters }) => {
  return (
    <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 px-6 pb-12 w-full">
      {chapters.map((rawChapter, index) => {
        const chapter = useChapterData(rawChapter);
        if (chapter.totalCount === 0) return null;

        return (
          <div key={chapter.title} className="w-[85vw] flex-shrink-0 snap-center flex flex-col relative bg-[#0a0908] border border-[#CBAA6A]/10 rounded-xl overflow-hidden p-8 min-h-[400px]">
            {/* Background Typography */}
            <BackgroundTypography text={chapter.backgroundText} />
            
            <div className="z-10 flex flex-col flex-grow">
               <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold mb-3">{formatChapter(index)}</span>
               <h3 className="font-serif text-3xl text-primary-cream mb-8">{chapter.title}</h3>
               
               <div className="mb-8 space-y-3">
                 {chapter.previewItems.map((item, i) => (
                   <p key={i} className="font-serif text-lg text-primary-cream/90">{item}</p>
                 ))}
                 {chapter.totalCount > 3 && (
                   <p className="font-sans text-[10px] tracking-widest text-primary-gold/60 uppercase mt-4">Most Requested</p>
                 )}
               </div>

               <div className="mt-auto pt-6 border-t border-[#CBAA6A]/10 flex items-center justify-between">
                 <span className="font-sans text-[10px] tracking-widest text-primary-cream/50 uppercase">{chapter.totalCount} Dishes</span>
                   <Link 
                     to={`/menu/chapters/${chapter.slug}`}
                     aria-label={`Explore ${chapter.title} Chapter`}
                     className="flex items-center justify-center bg-primary-gold/10 text-primary-gold min-w-[48px] min-h-[48px] rounded-full active:scale-95 transition-transform"
                   >
                     →
                   </Link>
               </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(function MenuChapters() {
  const chapters = useMemo(() => [
    { ...menuData.appetizers, image: assets.menu.street },
    { ...menuData.chaatStation, image: assets.menu.chaat },
    { ...menuData.mumbaiSpecial, image: assets.cover.mumbai },
    { ...menuData.snacksKaChaska, image: assets.menu.minimal },
    { ...menuData.curries, image: assets.menu.paneer },
    { ...menuData.biryani, image: assets.menu.feast },
    { ...menuData.breads, image: assets.cover.north_indian },
    { ...menuData.indoChinese, image: assets.cover.indo_chinese },
    { ...menuData.southIndian, image: assets.cover.south_indian },
    { ...menuData.desserts, image: assets.menu.street }
  ], []);

  return (
    <div className="bg-[#050403] relative min-h-screen">
      {/* Removed bg-texture-paper here because feTurbulence filter over 5000px height kills scroll performance */}
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 relative z-20">
        <div className="border-b border-[#CBAA6A]/10 pb-8">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary-gold mb-4 block">
            The Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-cream">
            Premium Culinary Index
          </h2>
        </div>
      </div>

      <div className="w-full relative z-10 pb-12 md:pb-24">
        {/* Mobile Swipe Container */}
        <MobileDiscoveryRail chapters={chapters} />
        
        {/* Desktop Index Container */}
        <DesktopCulinaryIndex chapters={chapters} />
      </div>
    </div>
  );
});
