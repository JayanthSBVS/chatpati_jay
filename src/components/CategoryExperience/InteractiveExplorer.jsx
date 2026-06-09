import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PremiumSegmentedControl from '../ui/PremiumSegmentedControl';
import SearchInput from '../ui/SearchInput';

export default function InteractiveExplorer({ dishes }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const diet = searchParams.get('diet') || 'all';
  const [searchQuery, setSearchQuery] = useState('');

  const setDiet = (newDiet) => {
    setSearchParams(prev => {
      if (newDiet === 'all') {
        prev.delete('diet');
      } else {
        prev.set('diet', newDiet);
      }
      return prev;
    });
  };

  const filteredDishes = useMemo(() => {
    let result = dishes;
    if (diet !== 'all') {
      result = result.filter(d => d.diet === diet);
    }
    if (searchQuery.trim() !== '') {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(d => 
        d.name.toLowerCase().includes(lowerQuery) || 
        d.description.toLowerCase().includes(lowerQuery)
      );
    }
    return result;
  }, [dishes, diet, searchQuery]);

  const vegCount = dishes.filter(d => d.diet === 'veg').length;
  const nonVegCount = dishes.filter(d => d.diet === 'non-veg').length;

  const filterOptions = [
    { id: 'all', label: 'All', count: dishes.length },
    { id: 'veg', label: 'Veg', count: vegCount },
    { id: 'non-veg', label: 'Non-Veg', count: nonVegCount }
  ];

  return (
    <section id="explorer" className="py-24 bg-[#0a0908] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Sticky Controls */}
        <div className="sticky top-20 z-30 bg-[#0a0908]/95 backdrop-blur-md py-6 border-b border-[#CBAA6A]/10 mb-12 flex flex-col items-start gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6">
            <div>
              <h2 className="text-3xl font-serif text-primary-cream">Complete Menu</h2>
              <p className="text-primary-cream/60 text-sm mt-1">Explore the full range of delicacies</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
              <SearchInput 
                value={searchQuery} 
                onChange={setSearchQuery} 
              />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map(dish => (
              <div key={dish.id} className="group p-6 bg-black/40 border border-[#CBAA6A]/10 rounded-xl hover:border-primary-gold transition-colors duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif text-primary-cream group-hover:text-primary-gold transition-colors">{dish.name}</h3>
                  <span className={`w-3 h-3 rounded-full shrink-0 mt-2 ${dish.diet === 'veg' ? 'bg-green-500' : 'bg-red-500'}`} />
                </div>
                <p className="text-sm text-primary-cream/65 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-[#CBAA6A]/20 rounded-2xl">
            <p className="text-primary-cream/60 text-lg">No dishes found for the selected criteria in this category.</p>
            <div className="mt-4 flex gap-4 justify-center">
              <button 
                onClick={() => setDiet('all')}
                className="text-primary-gold hover:underline underline-offset-4"
              >
                Clear diet filter
              </button>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-primary-gold hover:underline underline-offset-4"
              >
                Clear search
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
