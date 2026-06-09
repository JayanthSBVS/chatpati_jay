import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { menuData } from '../data/menuData';
import { chaptersMap } from '../data/cuisinesData';
import ChapterHero from '../components/ChapterExperience/ChapterHero';
import CateringUpsell from '../components/ChapterExperience/CateringUpsell';
import PremiumSegmentedControl from '../components/ui/PremiumSegmentedControl';
import SearchInput from '../components/ui/SearchInput';

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
    <div className="min-h-screen bg-[#0a0908] text-primary-cream">

      {/* 1. Chapter Hero */}
      <ChapterHero
        title={chapterMeta.title}
        description={chapterMeta.description}
        chapterId={chapterId}
      />

      {/* 2. Sticky Filter + Dish Explorer */}
      <section className="bg-[#0a0908]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Sticky controls */}
          <div className="sticky top-[72px] z-30 bg-[#0a0908]/95 backdrop-blur-sm py-5 border-b border-[#CBAA6A]/10 mb-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <span className="font-sans text-xs text-primary-cream/50 uppercase tracking-widest">
                {filteredDishes.length} of {allDishes.length} dishes
              </span>
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
                    className="group flex items-start justify-between p-5 bg-black/40 border border-[#CBAA6A]/10 rounded-xl hover:border-primary-gold/40 transition-colors duration-300"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-lg text-primary-cream group-hover:text-primary-gold transition-colors duration-300 leading-snug">
                        {dish.name}
                      </h3>
                      {dish.description && (
                        <p className="font-sans text-xs text-primary-cream/45 mt-1 leading-relaxed line-clamp-2">
                          {dish.description}
                        </p>
                      )}
                    </div>
                    <span
                      className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 ml-3 ${dish.diet === 'veg' ? 'bg-green-500' : 'bg-red-500'}`}
                      aria-label={dish.diet === 'veg' ? 'Vegetarian' : 'Non-vegetarian'}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 border border-dashed border-[#CBAA6A]/20 rounded-2xl">
                <p className="font-serif text-xl text-primary-cream/50 mb-6">No dishes match your criteria.</p>
                <div className="flex gap-6 justify-center">
                  {hasBothDietTypes && (
                    <button onClick={() => setDiet('all')} className="font-sans text-xs tracking-widest uppercase text-primary-gold hover:underline underline-offset-4">
                      Clear filter
                    </button>
                  )}
                  <button onClick={() => setSearch('')} className="font-sans text-xs tracking-widest uppercase text-primary-gold hover:underline underline-offset-4">
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
