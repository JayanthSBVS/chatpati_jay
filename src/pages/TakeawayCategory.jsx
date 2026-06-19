import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { takeawayData } from '../data/takeawayData';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TakeawayCategory() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // Find the current category
  const categoryIndex = takeawayData.findIndex(cat => cat.id === categoryId);
  
  if (categoryIndex === -1) {
    return <Navigate to="/takeaway" replace />;
  }

  const category = takeawayData[categoryIndex];
  const prevCategory = categoryIndex > 0 ? takeawayData[categoryIndex - 1] : null;
  const nextCategory = categoryIndex < takeawayData.length - 1 ? takeawayData[categoryIndex + 1] : null;

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-surface-base text-content-primary pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/takeaway')}
          className="group flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-content-secondary hover:text-accent-gold transition-colors mb-8"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Menu
        </button>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={category.id + "-hero"}
          className="relative h-[300px] lg:h-[400px] w-full overflow-hidden mb-16 bg-black border border-border-subtle"
        >
          <img 
            src={category.heroImage} 
            alt={category.title}
            className="w-full h-full object-cover object-center transform scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 lg:p-16">
            <div className="w-16 h-[2px] bg-accent-gold mb-6"></div>
            <h1 className="font-serif text-5xl lg:text-7xl text-white mb-4 drop-shadow-md">
              {category.title}
            </h1>
            <p className="font-sans text-base lg:text-lg text-white/80 max-w-2xl tracking-wide leading-relaxed">
              {category.tagline}
            </p>
          </div>
        </motion.div>

        {/* Items Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={category.id + "-items"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          <AnimatePresence>
            {category.items.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={item.id} 
                className="group bg-surface-card border border-border-subtle overflow-hidden flex flex-col hover:border-accent-gold/40 transition-colors duration-500 shadow-sm hover:shadow-[0_0_30px_rgba(226,160,96,0.05)]"
              >
                {/* Item Image */}
                <div className="w-full h-48 overflow-hidden bg-surface-base relative border-b border-border-subtle">
                   <img 
                     src={item.image || category.heroImage} 
                     alt={item.name} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                   />
                </div>

                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      {/* Veg/Non-Veg Badge */}
                      <div className={`w-3.5 h-3.5 flex shrink-0 items-center justify-center border ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                      </div>
                      <h3 className="font-serif text-2xl text-content-primary group-hover:text-accent-gold transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-border-subtle/50 flex justify-between items-end">
                    <span className="font-sans text-xl font-medium text-accent-gold tracking-wide">
                      {item.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Next / Previous Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-border-subtle pt-10 gap-6">
          {prevCategory ? (
            <button 
              onClick={() => navigate(`/takeaway/${prevCategory.id}`)}
              className="group flex flex-col items-start w-full sm:w-auto"
            >
              <span className="font-sans text-[9px] tracking-widest uppercase text-content-secondary mb-2 flex items-center gap-2">
                <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Previous
              </span>
              <span className="font-serif text-2xl text-content-primary group-hover:text-accent-gold transition-colors">
                {prevCategory.title}
              </span>
            </button>
          ) : <div className="w-full sm:w-auto"></div>}

          {nextCategory ? (
            <button 
              onClick={() => navigate(`/takeaway/${nextCategory.id}`)}
              className="group flex flex-col items-end w-full sm:w-auto text-right"
            >
              <span className="font-sans text-[9px] tracking-widest uppercase text-content-secondary mb-2 flex items-center gap-2">
                Next <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="font-serif text-2xl text-content-primary group-hover:text-accent-gold transition-colors">
                {nextCategory.title}
              </span>
            </button>
          ) : <div className="w-full sm:w-auto"></div>}
        </div>

      </div>
    </div>
  );
}
