import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { menuData } from '../data/menuData';
import { chaptersMap } from '../data/cuisinesData';
import ChapterHero from '../components/ChapterExperience/ChapterHero';
import ChapterStickyNav from '../components/ChapterExperience/ChapterStickyNav';
import CateringUpsell from '../components/ChapterExperience/CateringUpsell';
import PremiumSegmentedControl from '../components/ui/PremiumSegmentedControl';
import SearchInput from '../components/ui/SearchInput';
import BackgroundTypography from '../components/ui/BackgroundTypography';

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
        return { id: `${key}-${i}`, name: item, diet: isNonVeg ? 'non-veg' : 'veg', description: '' };
      }
      return { id: `${key}-${i}`, name: item.name, diet: 'veg', description: '' };
    });
  }

  return [];
}

export default function ChapterExperiencePage() {
  const { chapterId } = useParams();
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

  return (
    <div className="min-h-screen bg-surface-base text-content-primary relative">

      {/* Back Navigation (Task 2B) */}
      <div className="absolute top-24 left-6 md:left-12 z-30">
        <a 
          href={chapterMeta.parent ? `/menu/${chapterMeta.parent}` : '/menu'}
          onClick={(e) => {
            e.preventDefault();
            // If the user came from the parent page, history.back() provides a smoother experience
            // Otherwise, we navigate to the parent
            if (window.history.state && window.history.length > 1) {
              window.history.back();
            } else {
              window.location.href = chapterMeta.parent ? `/menu/${chapterMeta.parent}` : '/menu';
            }
          }}
          className="flex items-center gap-2 text-content-secondary hover:text-accent-gold transition-colors font-sans text-xs tracking-widest uppercase active:scale-[0.98] active:opacity-80"
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

      {/* 2. Sticky Chapter Nav (Task 2D) */}
      <ChapterStickyNav 
        currentChapterId={chapterId} 
        parentCuisineId={chapterMeta.parent} 
      />

      {/* 3. Sticky Filter + Dish Explorer */}
      <section className="bg-surface-base">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Sticky controls */}
          <div className="sticky top-[120px] z-30 bg-surface-base/95 backdrop-blur-sm py-5 border-b border-border-subtle mb-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              
              {/* Quick Stats (Task 3B) */}
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl text-content-primary">
                  Explore Dishes
                </span>
                <span className="font-sans text-[10px] md:text-xs text-content-secondary uppercase tracking-[0.2em] mt-1 flex gap-2 divide-x divide-border-subtle">
                  <span>{allDishes.length} Items</span>
                  {vegCount > 0 && <span className="pl-2">{vegCount} Veg</span>}
                  {nonVegCount > 0 && <span className="pl-2">{nonVegCount} Non-Veg</span>}
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
          <div className="pb-24">
            {filteredDishes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredDishes.map(dish => (
                  <div
                    key={dish.id}
                    className="group flex flex-col justify-between p-5 bg-surface-card border border-border-subtle rounded-xl hover:border-accent-gold/40 transition-colors duration-300 relative overflow-hidden h-full"
                  >
                    {/* Subtle gradient glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Depth Typography */}
                    <BackgroundTypography text={dish.name} />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3 relative z-10">
                        <h3 className="font-serif text-lg text-content-primary group-hover:text-accent-gold transition-colors duration-300 leading-snug pr-4">
                          {dish.name}
                        </h3>
                        <span
                          className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 ${dish.diet === 'veg' ? 'bg-green-500' : 'bg-red-500'}`}
                          aria-label={dish.diet === 'veg' ? 'Vegetarian' : 'Non-vegetarian'}
                        />
                      </div>
                      <p className="font-sans text-xs text-content-secondary leading-relaxed relative z-10">
                        {dish.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 border border-dashed border-border-subtle rounded-2xl">
                <p className="font-serif text-xl text-content-secondary mb-6">No dishes match your criteria.</p>
                <div className="flex gap-6 justify-center">
                  {hasBothDietTypes && (
                    <button onClick={() => setDiet('all')} className="font-sans text-xs tracking-widest uppercase text-accent-gold hover:underline underline-offset-4">
                      Clear filter
                    </button>
                  )}
                  <button onClick={() => setSearch('')} className="font-sans text-xs tracking-widest uppercase text-accent-gold hover:underline underline-offset-4">
                    Clear search
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Catering Upsell */}
      <CateringUpsell bestFor={chapterMeta.bestFor} />
    </div>
  );
}
