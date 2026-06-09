import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { cuisinesData } from '../data/cuisinesData';
import AtmosphereHero from '../components/CategoryExperience/AtmosphereHero';
import SignatureExperiences from '../components/CategoryExperience/SignatureExperiences';
import CuisineStory from '../components/CuisineExperience/CuisineStory';
import CuisineQuickFacts from '../components/CuisineExperience/CuisineQuickFacts';
import RecommendedEvents from '../components/CuisineExperience/RecommendedEvents';
import PremiumSegmentedControl from '../components/ui/PremiumSegmentedControl';
import SearchInput from '../components/ui/SearchInput';

export default function CuisineExperiencePage() {
  const { cuisineId } = useParams();
  const cuisine = cuisinesData.find(c => c.id === cuisineId);

  const [diet, setDiet] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setDiet('all');
    setSearch('');
  }, [cuisineId]);

  if (!cuisine) return <Navigate to="/menu" replace />;

  const dishes = cuisine.dishes || [];

  const filteredDishes = useMemo(() => {
    let result = dishes;
    if (diet !== 'all') result = result.filter(d => d.diet === diet);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(d =>
        d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [dishes, diet, search]);

  const vegCount = dishes.filter(d => d.diet === 'veg').length;
  const nonVegCount = dishes.filter(d => d.diet === 'non-veg').length;

  const filterOptions = [
    { id: 'all', label: 'All', count: dishes.length },
    { id: 'veg', label: 'Veg', count: vegCount },
    { id: 'non-veg', label: 'Non-Veg', count: nonVegCount },
  ];

  return (
    <div className="min-h-screen bg-[#0a0908] text-primary-cream">

      {/* 1. Atmosphere Hero */}
      <AtmosphereHero title={cuisine.title} atmosphere={cuisine.atmosphere} />

      {/* 2. Signature Experiences */}
      <SignatureExperiences experiences={cuisine.signatureExperiences} />

      {/* 3. Cuisine Story */}
      <CuisineStory paragraph={cuisine.storyParagraph} />

      {/* 4. Quick Facts */}
      <CuisineQuickFacts quickFacts={cuisine.quickFacts} />

      {/* 5. Recommended Events */}
      <RecommendedEvents events={cuisine.recommendedEvents} />

      {/* 6. Interactive Dish Explorer — comes LAST */}
      <section id="explorer" className="py-24 bg-[#0a0908]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Sticky filter header */}
          <div className="sticky top-[72px] z-30 bg-[#0a0908]/95 backdrop-blur-sm py-5 border-b border-[#CBAA6A]/10 mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <h2 className="font-serif text-3xl text-primary-cream">Explore Dishes</h2>
                <p className="font-sans text-xs text-primary-cream/50 mt-1 uppercase tracking-widest">
                  {filteredDishes.length} of {dishes.length} dishes
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
                <SearchInput value={search} onChange={setSearch} />
                <PremiumSegmentedControl
                  options={filterOptions}
                  activeOption={diet}
                  onChange={setDiet}
                />
              </div>
            </div>
          </div>

          {/* Dish Grid */}
          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDishes.map(dish => (
                <div
                  key={dish.id}
                  className="group p-6 bg-black/40 border border-[#CBAA6A]/10 rounded-xl hover:border-primary-gold/40 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl text-primary-cream group-hover:text-primary-gold transition-colors duration-300 leading-tight">
                      {dish.name}
                    </h3>
                    <span
                      className={`w-3 h-3 rounded-full shrink-0 mt-1 ml-2 ${dish.diet === 'veg' ? 'bg-green-500' : 'bg-red-500'}`}
                      aria-label={dish.diet === 'veg' ? 'Vegetarian' : 'Non-vegetarian'}
                    />
                  </div>
                  <p className="font-sans text-sm text-primary-cream/55 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-[#CBAA6A]/20 rounded-2xl">
              <p className="font-serif text-xl text-primary-cream/50 mb-6">No dishes match your criteria.</p>
              <div className="flex gap-6 justify-center">
                <button onClick={() => setDiet('all')} className="font-sans text-xs tracking-widest uppercase text-primary-gold hover:underline underline-offset-4">
                  Clear filter
                </button>
                <button onClick={() => setSearch('')} className="font-sans text-xs tracking-widest uppercase text-primary-gold hover:underline underline-offset-4">
                  Clear search
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
