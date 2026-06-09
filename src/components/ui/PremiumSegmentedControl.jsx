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
    <div className="flex bg-surface-card border border-border-subtle rounded-full p-1 w-fit mx-auto relative z-10">
      {options.map((option) => {
        const isActive = activeOption === option.id;
        
        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none active:scale-[0.98] active:opacity-80 ${
              isActive ? 'text-surface-base' : 'text-content-secondary hover:text-content-primary'
            }`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {isActive && (
              <motion.div
                layoutId="segmented-control-active-bg"
                className="absolute inset-0 bg-accent-gold rounded-full"
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {option.label}
              {option.count !== undefined && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-surface-base/20' : 'bg-surface-paper'}`}>
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
