import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { menuData } from '../data/menuData';
import { chaptersMap } from '../data/cuisinesData';
import { dishImageMap } from '../data/dishImageMap';
import ChapterHero from '../components/ChapterExperience/ChapterHero';
import ChapterStickyNav from '../components/ChapterExperience/ChapterStickyNav';
import CateringUpsell from '../components/ChapterExperience/CateringUpsell';
import PremiumSegmentedControl from '../components/ui/PremiumSegmentedControl';
import SearchInput from '../components/ui/SearchInput';
import { motion, AnimatePresence } from 'framer-motion';

// Normalize a chapter's menuData entry into a flat dish array
function normalizeDishes(data, key) {
  if (!data) return [];

  // Handle veg/nonVeg split (appetizers, curries, indoChinese)
  if (data.veg || data.nonVeg) {
    const vegDishes = (data.veg || []).map((name, i) => ({
      id: `${key}-v-${i}`, name, diet: 'veg', description: ''
    }));
    const nonVegDishes = (data.nonVeg || []).map((name, i) => ({
      id: `${key}-nv-${i}`, name, diet: 'non-veg', description: ''
    }));
    return [...vegDishes, ...nonVegDishes];
  }

  // Handle biryani special case
  if (data.biryani || data.rice) {
    const biryaniDishes = (data.biryani || []).map((name, i) => ({
      id: `${key}-b-${i}`, name, diet: name.toLowerCase().includes('veg') || name.toLowerCase().includes('paneer') || name.toLowerCase().includes('kathal') ? 'veg' : 'non-veg', description: 'Aromatic basmati sealed and steamed to perfection.'
    }));
    const riceDishes = (data.rice || []).map((name, i) => ({
      id: `${key}-r-${i}`, name, diet: 'veg', description: 'Fragrant long-grain basmati rice.'
    }));
    return [...biryaniDishes, ...riceDishes];
  }

  // Handle flat items array (mixed or all-veg)
  if (data.items) {
    return data.items.map((item, i) => {
      if (typeof item === 'string') {
        const lower = item.toLowerCase();
        const nonVegKeywords = ['chicken', 'lamb', 'shrimp', 'fish', 'mutton', 'egg', 'meat', 'keema', 'barrah', 'seekh'];
        const isNonVeg = nonVegKeywords.some(k => lower.includes(k));
        
        let spice = '🔥 Medium';
        if (lower.includes('chilli') || lower.includes('tikka') || lower.includes('spicy') || lower.includes('vindaloo') || lower.includes('schezwan')) spice = '🔥🔥 Spicy';
        if (lower.includes('butter') || lower.includes('malai') || lower.includes('korma') || lower.includes('sweet') || lower.includes('lassi')) spice = 'Mild';
        
        return { 
          id: `${key}-${i}`, 
          name: item, 
          diet: isNonVeg ? 'non-veg' : 'veg', 
          description: '',
          spice,
          popular: i === 0 || i === 2
        };
      }
      return { 
        id: `${key}-${i}`, 
        name: item.name, 
        diet: 'veg', 
        description: '',
        spice: '🔥 Medium',
        popular: i === 0
      };
    });
  }

  return [];
}

const getDishImage = (dishName, chapterMeta) => {
  if (dishImageMap[dishName]) {
    return dishImageMap[dishName];
  }

  const lowerName = dishName.toLowerCase();
  
  // Priority 1: Exact Dish match fallbacks (if any missing from map)
  if (lowerName.includes('vada pav')) return '/assets/vadapav.jpg';
  if (lowerName.includes('chole bhature')) return '/assets/chole_bhature.jpg';
  if (lowerName.includes('mango lassi')) return '/assets/mango_lassi_1780917929199_opt.webp';
  if (lowerName.includes('sweet lassi')) return '/assets/sweet_lassi_1780917946995_opt.webp';
  if (lowerName.includes('salt lassi')) return '/assets/salt_lassi_1780917969166_opt.webp';
  if (lowerName.includes('thandai')) return '/assets/thandai_1780918002624_opt.webp';
  if (lowerName.includes('thali')) return '/assets/thaali_image.jpg';
  
  // Priority 2: Category Image fallback
  const categoryStr = (chapterMeta.title || '').toLowerCase();
  if (categoryStr.includes('chaat') || lowerName.includes('chaat')) return '/assets/chole_bhature.jpg';
  if (categoryStr.includes('tandoor') || categoryStr.includes('tikka') || lowerName.includes('tikka') || lowerName.includes('kebab')) return '/assets/menu_fire.png';
  if (categoryStr.includes('paneer') || lowerName.includes('paneer')) return '/assets/menu_paneer.png';
  if (categoryStr.includes('chole') || lowerName.includes('chole') || lowerName.includes('dal')) return '/assets/menu_chole.png';
  if (categoryStr.includes('mumbai')) return '/assets/vadapav.jpg';
  if (categoryStr.includes('feast')) return '/assets/menu_feast.png';
  if (lowerName.includes('chicken') || lowerName.includes('mutton') || lowerName.includes('lamb')) return '/assets/menu_street.png';
  
  // Priority 3: Cuisine Hero Image
  return chapterMeta.heroImage || '/assets/menu-1.jpeg';
};

export default function ChapterExperiencePage() {
  const { slug } = useParams();
  const chapterId = slug;
  const chapterMeta = chaptersMap[chapterId];

  const [diet, setDiet] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setDiet('all');
    setSearch('');
  }, [chapterId]);

  if (!chapterMeta) return <Navigate to="/menu" replace />;

  const rawData = menuData[chapterMeta.menuKey];
  const allDishes = normalizeDishes(rawData, chapterId);

  const filteredDishes = useMemo(() => {
    let result = allDishes;
    if (diet !== 'all') result = result.filter(d => d.diet === diet);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(d => d.name.toLowerCase().includes(q));
    }
    return result;
  }, [allDishes, diet, search]);

  const vegCount = allDishes.filter(d => d.diet === 'veg').length;
  const nonVegCount = allDishes.filter(d => d.diet === 'non-veg').length;

  // Only show veg/non-veg filter if there are both types
  const hasBothDietTypes = vegCount > 0 && nonVegCount > 0;
  const filterOptions = hasBothDietTypes
    ? [
        { id: 'all', label: 'All', count: allDishes.length },
        { id: 'veg', label: 'Veg', count: vegCount },
        { id: 'non-veg', label: 'Non-Veg', count: nonVegCount },
      ]
    : [{ id: 'all', label: 'All', count: allDishes.length }];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-surface-base text-content-primary relative pb-24">

      {/* Back Navigation */}
      <div className="absolute top-24 left-6 md:left-12 z-30">
        <a 
          href={chapterMeta.parent ? `/menu/${chapterMeta.parent}` : '/menu'}
          onClick={(e) => {
            e.preventDefault();
            if (window.history.state && window.history.length > 1) {
              window.history.back();
            } else {
              window.location.href = chapterMeta.parent ? `/menu/${chapterMeta.parent}` : '/menu';
            }
          }}
          className="flex items-center gap-2 text-content-secondary hover:text-accent-gold transition-colors font-sans text-xs tracking-widest uppercase active:scale-[0.98] active:opacity-80 bg-surface-base/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border-subtle"
        >
          <span>←</span> Back to {chapterMeta.parent ? 'Cuisine' : 'Menu'}
        </a>
      </div>

      {/* 1. Chapter Hero */}
      <ChapterHero
        title={chapterMeta.title}
        description={chapterMeta.description}
        chapterId={chapterId}
      />

      {/* 2. Sticky Chapter Nav */}
      <ChapterStickyNav 
        currentChapterId={chapterId} 
        parentCuisineId={chapterMeta.parent} 
      />

      {/* 3. Sticky Filter + Dish Explorer */}
      <section className="bg-surface-base">
        <div className="max-w-7xl mx-auto px-4 md:px-12">

          {/* Sticky controls */}
          <div className="sticky top-[120px] z-30 bg-surface-base/95 backdrop-blur-md py-6 border-b border-border-subtle mb-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              {/* Quick Stats */}
              <div className="flex flex-col">
                <span className="font-serif text-2xl md:text-3xl text-content-primary">
                  Explore Dishes
                </span>
                <span className="font-sans text-[10px] md:text-xs text-content-secondary uppercase tracking-[0.2em] mt-2 flex gap-3 divide-x divide-border-subtle items-center">
                  <span>{allDishes.length} Items</span>
                  {vegCount > 0 && <span className="pl-3 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>{vegCount} Veg</span>}
                  {nonVegCount > 0 && <span className="pl-3 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>{nonVegCount} Non-Veg</span>}
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
                <SearchInput value={search} onChange={setSearch} placeholder={`Search ${chapterMeta.title}...`} />
                {hasBothDietTypes && (
                  <PremiumSegmentedControl
                    options={filterOptions}
                    activeOption={diet}
                    onChange={setDiet}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Dish Grid */}
          <div className="pb-12">
            <AnimatePresence mode="wait">
              {filteredDishes.length > 0 ? (
                <motion.div 
                  key="grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                  {filteredDishes.map((dish, idx) => (
                    <motion.div
                      variants={itemVariants}
                      layout
                      key={dish.id}
                      className="group flex flex-col bg-surface-base border-b border-border-subtle hover:bg-surface-card transition-all duration-500 relative overflow-hidden pb-6"
                    >
                      {/* Dish Image */}
                      <div className="relative h-[300px] w-full overflow-hidden bg-surface-paper mb-6 rounded-sm">
                        <img 
                          src={getDishImage(dish.name, chapterMeta)} 
                          alt={dish.name}
                          loading={idx < 4 ? "eager" : "lazy"}
                          decoding="async"
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        />
                        {/* Elegant overlay on image */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex flex-col justify-end p-6">
                           <div className="overflow-hidden">
                             <p className="font-sans text-xs text-white/90 tracking-widest leading-relaxed transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
                               {dish.description || 'Authentic flavors prepared with traditional spices.'}
                             </p>
                           </div>
                        </div>

                        {dish.popular && (
                          <div className="absolute top-4 right-4 bg-surface-base/95 backdrop-blur-md border border-accent-gold/30 text-accent-gold px-3 py-1 font-sans text-[10px] tracking-widest uppercase z-10 flex items-center gap-2 shadow-xl">
                            <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse"></div>
                            Signature
                          </div>
                        )}
                      </div>

                      {/* Content block */}
                      <div className="px-4 flex flex-col flex-1 relative z-10">
                        <div className="flex flex-col items-center text-center mb-4">
                          {/* Veg/Non-Veg Badge small */}
                          <div className="flex justify-center mb-3">
                            <div className={`w-3 h-3 flex items-center justify-center border ${dish.diet === 'veg' ? 'border-green-600/50' : 'border-red-600/50'}`}>
                              <div className={`w-1 h-1 rounded-full ${dish.diet === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}></div>
                            </div>
                          </div>
                          
                          <h3 className="font-serif text-3xl text-content-primary group-hover:text-accent-gold transition-colors duration-500 leading-tight">
                            {dish.name}
                          </h3>
                        </div>
                        
                        <div className="mt-auto flex items-center justify-center pt-4 border-t border-border-subtle/40">
                           <span className="font-sans text-[10px] tracking-[0.2em] text-accent-gold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                             Discover Flavour
                           </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-center py-32 border border-dashed border-border-subtle rounded-2xl"
                >
                  <p className="font-serif text-2xl text-content-secondary mb-6">No dishes match your refined palate.</p>
                  <div className="flex gap-6 justify-center">
                    {hasBothDietTypes && (
                      <button onClick={() => setDiet('all')} className="font-sans text-[10px] tracking-widest uppercase text-accent-gold border-b border-accent-gold/40 hover:border-accent-gold pb-1 transition-colors">
                        Clear filter
                      </button>
                    )}
                    <button onClick={() => setSearch('')} className="font-sans text-[10px] tracking-widest uppercase text-accent-gold border-b border-accent-gold/40 hover:border-accent-gold pb-1 transition-colors">
                      Clear search
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. Catering Upsell */}
      <CateringUpsell bestFor={chapterMeta.bestFor} />
    </div>
  );
}
