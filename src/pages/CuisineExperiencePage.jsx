import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, X, ZoomIn } from 'lucide-react';
import { assets } from '../data/assetMap';

const cuisineData = {
  'north-indian-classics': { title: 'North Indian Classics', coverKey: 'north_indian' },
  'mumbai-specialties': { title: 'Mumbai Specialties', coverKey: 'mumbai' },
  'indo-chinese': { title: 'Indo-Chinese', coverKey: 'indo_chinese' },
  'south-indian-traditions': { title: 'South Indian Traditions', coverKey: 'south_indian' },
  'signature-refreshments': { title: 'Signature Refreshments', coverKey: 'refreshments' },
  'desserts': { title: 'Desserts', coverKey: 'desserts' },
  'live-stations': { title: 'Live Stations', coverKey: 'live_stations' },
};

export default function CuisineExperiencePage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const data = cuisineData[id];
  const images = assets.cuisineMenus[id] || [];

  if (!data) {
    return (
      <div className="min-h-screen bg-surface-base flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-content-primary mb-4">Cuisine Not Found</h2>
          <Link to="/catering" className="text-accent-gold hover:underline">Return to Menu</Link>
        </div>
      </div>
    );
  }

  const coverImage = assets.cover[data.coverKey];

  return (
    <div className="bg-surface-base min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end pb-12 md:pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={coverImage} 
            alt={data.title} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start">
          <Link 
            to="/catering" 
            className="flex items-center gap-2 text-accent-gold hover:text-accent-gold/80 transition-colors mb-4 md:mb-6 uppercase tracking-widest text-xs font-sans p-2 -ml-2 rounded-full hover:bg-accent-gold/10"
          >
            <ChevronLeft size={16} />
            Back to Menu
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-8xl font-serif text-content-primary leading-tight max-w-4xl"
          >
            {data.title}
          </motion.h1>
        </div>
      </section>

      {/* Menu Cards Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 bg-surface-base">
        <div className="max-w-7xl mx-auto">
          {images.length > 0 ? (
            <div className={`grid gap-6 md:gap-12 ${images.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
              {images.map((imgSrc, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl hover:shadow-2xl border border-primary-cream/10 transition-all duration-300"
                  onClick={() => setSelectedImage(imgSrc)}
                >
                  <div className="aspect-[3/4] relative bg-surface-card rounded-xl overflow-hidden">
                    <img 
                      src={imgSrc} 
                      alt={`${data.title} Menu ${index + 1}`} 
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Persistent Mobile Zoom Indicator */}
                    <div className="absolute top-4 right-4 bg-surface-base/90 text-accent-gold p-2 rounded-full shadow-lg backdrop-blur-sm md:hidden pointer-events-none">
                      <ZoomIn size={16} />
                    </div>

                    {/* Desktop Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center backdrop-blur-sm">
                      <div className="flex items-center gap-2 text-white bg-accent-gold/90 px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ZoomIn size={18} />
                        <span className="font-sans uppercase tracking-widest text-xs font-medium">View Menu</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
             <div className="text-center py-20 bg-surface-card rounded-xl border border-border-subtle">
               <p className="text-content-secondary font-serif text-2xl italic">Menu coming soon...</p>
               <p className="text-content-ghost mt-2 font-sans text-sm">We are currently crafting this experience.</p>
             </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-accent-gold transition-colors bg-black/60 p-3 rounded-full z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Menu Full View" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
