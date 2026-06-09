import React from 'react';
import { motion } from 'framer-motion';

export default function PremiumSegmentedControl({ 
  options = [
    { id: 'all', label: 'All Dishes' },
    { id: 'veg', label: 'Veg' },
    { id: 'non-veg', label: 'Non-Veg' }
  ],
  activeOption,
  onChange 
}) {
  return (
    <div className="flex bg-[#111111] border border-[#333333] rounded-full p-1 w-fit mx-auto or relative z-10">
      {options.map((option) => {
        const isActive = activeOption === option.id;
        
        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none active:scale-[0.98] active:opacity-80 ${
              isActive ? 'text-black' : 'text-[#888888] hover:text-[#dddddd]'
            }`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {isActive && (
              <motion.div
                layoutId="segmented-control-active-bg"
                className="absolute inset-0 bg-[#C9A96E] rounded-full"
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {option.label}
              {option.count !== undefined && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/20' : 'bg-[#222222]'}`}>
                  {option.count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
