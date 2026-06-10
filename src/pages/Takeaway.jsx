import React, { useState, useEffect, useMemo } from 'react';
import { takeawayData } from '../data/takeawayData';
import { Menu, X, Search, ChevronRight, ChevronLeft, MapPin, Clock, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Takeaway() {
  const [activeSection, setActiveSection] = useState(takeawayData[0].id);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All'); // 'All', 'Veg', 'NonVeg'
  
  // Intersection Observer to update active section
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0.1, 0.5] });

    takeawayData.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileSheetOpen(false);
  };

  const filteredData = useMemo(() => {
    return takeawayData.map(section => {
      let items = section.items;

      if (filterType === 'Veg') {
        items = items.filter(item => item.isVeg);
      } else if (filterType === 'NonVeg') {
        items = items.filter(item => !item.isVeg);
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        // If section matches query, don't filter items, just show the ones that passed veg/non-veg
        if (!section.title.toLowerCase().includes(query)) {
          items = items.filter(item => 
            item.name.toLowerCase().includes(query) || 
            item.description.toLowerCase().includes(query)
          );
        }
      }

      if (items.length > 0) {
        return { ...section, items };
      }
      return null;
    }).filter(Boolean);
  }, [searchQuery, filterType]);

  const handleNextSection = (currentIndex) => {
    if (currentIndex < filteredData.length - 1) {
      scrollToSection(filteredData[currentIndex + 1].id);
    }
  };

  const handlePrevSection = (currentIndex) => {
    if (currentIndex > 0) {
      scrollToSection(filteredData[currentIndex - 1].id);
    }
  };

  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-surface-base text-content-primary pb-24">
      {/* Mobile Horizontal Sticky Pills */}
      <div className="lg:hidden sticky top-[88px] z-30 bg-surface-base/95 backdrop-blur-md border-b border-border-subtle overflow-x-auto hide-scrollbar flex gap-3 px-4 py-3 snap-x">
        {filteredData.map(section => (
          <button
            key={`mobile-pill-${section.id}`}
            onClick={() => scrollToSection(section.id)}
            className={`snap-start whitespace-nowrap px-5 py-2.5 rounded-full text-[10px] font-sans tracking-widest uppercase transition-all duration-300 ${
              activeSection === section.id 
                ? 'bg-accent-gold text-surface-base shadow-lg scale-105' 
                : 'bg-surface-paper text-content-secondary border border-border-subtle hover:text-content-primary'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Hero Banner Area */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="bg-surface-card border border-border-subtle p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
         >
            {/* Background Texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface-base/80 to-transparent z-0"></div>
            
            <div className="flex flex-col relative z-10 w-full md:w-2/3">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent-gold mb-4">Direct from our Kitchen</span>
              <h1 className="font-serif text-4xl md:text-5xl text-content-primary mb-4 leading-tight">
                Authentic Takeaway <br className="hidden md:block"/> <span className="italic text-accent-gold">Experience</span>
              </h1>
              <p className="font-sans text-content-secondary max-w-lg mb-6 leading-relaxed">
                Enjoy the rich, uncompromising flavors of Chatpati Delhi in the comfort of your home. Perfect for intimate family dinners or spontaneous celebrations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 font-sans text-xs tracking-widest text-content-secondary uppercase">
                <div className="flex items-center gap-2"><MapPin size={14} className="text-accent-gold"/> Oaktree Rd, Iselin</div>
                <div className="flex items-center gap-2"><Clock size={14} className="text-accent-gold"/> 11:30 AM - 10:00 PM</div>
                <div className="flex items-center gap-2"><Phone size={14} className="text-accent-gold"/> (732) 516-8407</div>
              </div>
            </div>
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-start gap-12">
        {/* Desktop Sticky Rail */}
        <div className="hidden lg:block w-[280px] shrink-0 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto hide-scrollbar pr-4">
          <div className="mb-8">
            <h2 className="font-serif text-3xl text-content-primary mb-2">Menu Atlas</h2>
            <div className="w-12 h-0.5 bg-accent-gold mb-6"></div>
          </div>
          
          {/* Interactive Search */}
          <div className="relative mb-6 group">
            <input 
              type="text" 
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-card border border-border-subtle rounded-none py-3 pl-11 pr-4 font-sans text-sm text-content-primary placeholder-content-secondary focus:outline-none focus:border-accent-gold transition-colors shadow-sm"
            />
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-content-secondary group-focus-within:text-accent-gold transition-colors" />
          </div>

          {/* Premium Filter Pills */}
          <div className="flex gap-2 mb-8 bg-surface-card p-1 border border-border-subtle rounded-sm">
            <button 
              onClick={() => setFilterType('All')} 
              className={`flex-1 py-2 font-sans text-[10px] tracking-widest uppercase transition-all duration-300 ${filterType === 'All' ? 'bg-accent-gold text-surface-base shadow-md' : 'text-content-secondary hover:bg-surface-base'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilterType('Veg')} 
              className={`flex-1 py-2 font-sans text-[10px] tracking-widest uppercase transition-all duration-300 ${filterType === 'Veg' ? 'bg-green-700 text-white shadow-md' : 'text-content-secondary hover:bg-surface-base'}`}
            >
              Veg
            </button>
            <button 
              onClick={() => setFilterType('NonVeg')} 
              className={`flex-1 py-2 font-sans text-[10px] tracking-widest uppercase transition-all duration-300 ${filterType === 'NonVeg' ? 'bg-red-700 text-white shadow-md' : 'text-content-secondary hover:bg-surface-base'}`}
            >
              Non-Veg
            </button>
          </div>

          <nav className="flex flex-col gap-1 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border-subtle/50 ml-3"></div>
            {filteredData.map(section => (
              <button
                key={`desktop-nav-${section.id}`}
                onClick={() => scrollToSection(section.id)}
                className={`text-left pl-8 py-3 transition-all duration-300 relative font-sans text-[11px] tracking-widest uppercase group ${
                  activeSection === section.id ? 'text-accent-gold font-medium' : 'text-content-secondary hover:text-content-primary hover:pl-10'
                }`}
              >
                {/* Active Indicator Dot */}
                <div className={`absolute left-[11px] top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full transition-all duration-500 ${
                  activeSection === section.id ? 'bg-accent-gold scale-150' : 'bg-border-subtle group-hover:bg-content-primary'
                }`} />
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col gap-16 lg:gap-24 w-full">
          {/* Mobile Quick Filters */}
          <div className="lg:hidden flex gap-2 w-full mb-4 bg-surface-card p-1 border border-border-subtle rounded-sm shadow-sm">
            <button onClick={() => setFilterType('All')} className={`flex-1 py-3 font-sans text-[10px] tracking-widest uppercase transition-all ${filterType === 'All' ? 'bg-accent-gold text-surface-base shadow-md' : 'text-content-secondary hover:bg-surface-base'}`}>All</button>
            <button onClick={() => setFilterType('Veg')} className={`flex-1 py-3 font-sans text-[10px] tracking-widest uppercase transition-all ${filterType === 'Veg' ? 'bg-green-700 text-white shadow-md' : 'text-content-secondary hover:bg-surface-base'}`}>Veg</button>
            <button onClick={() => setFilterType('NonVeg')} className={`flex-1 py-3 font-sans text-[10px] tracking-widest uppercase transition-all ${filterType === 'NonVeg' ? 'bg-red-700 text-white shadow-md' : 'text-content-secondary hover:bg-surface-base'}`}>Non-Veg</button>
          </div>

          <AnimatePresence>
            {filteredData.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="text-center py-32 border border-dashed border-border-subtle rounded-2xl"
              >
                <p className="font-serif text-2xl text-content-secondary mb-4">No culinary creations found.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setFilterType('All');}} 
                  className="font-sans text-xs tracking-widest uppercase text-accent-gold border-b border-accent-gold pb-1"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {filteredData.map((section, index) => (
            <motion.section 
              key={section.id} 
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="scroll-mt-32"
              style={index > 1 ? { contentVisibility: 'auto', containIntrinsicSize: '800px' } : {}}
            >
              {/* Premium Section Header */}
              <div className="relative h-[250px] lg:h-[320px] w-full overflow-hidden mb-8 bg-surface-paper border border-border-subtle group">
                <img 
                  src={section.heroImage} 
                  alt={section.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.5]"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  width="800"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/40 to-transparent flex flex-col justify-end p-8 lg:p-12">
                  <div className="w-12 h-[2px] bg-accent-gold mb-4"></div>
                  <h3 className="font-serif text-4xl lg:text-5xl text-content-primary mb-3 drop-shadow-md">{section.title}</h3>
                  <p className="font-sans text-sm lg:text-base text-content-secondary max-w-xl tracking-wide leading-relaxed">{section.tagline}</p>
                </div>
              </div>

              {/* Interactive Dish Cards (Masonry-like layout) */}
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10"
              >
                <AnimatePresence>
                  {section.items.map(item => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      key={item.id} 
                      className="group bg-surface-card border border-border-subtle flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-accent-gold/5 hover:border-accent-gold/30 transition-all duration-500"
                    >
                      {item.image && (
                        <div className="w-full h-56 overflow-hidden relative border-b border-border-subtle bg-surface-paper">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                            loading="lazy"
                            decoding="async"
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="font-sans text-xs tracking-widest text-surface-base border border-surface-base/30 px-6 py-2 uppercase backdrop-blur-sm">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <div className="p-6 flex flex-col flex-1 bg-surface-card relative z-10">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-3">
                            {/* Veg/Non-Veg Badge */}
                            <div className={`w-3.5 h-3.5 flex items-center justify-center border ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                            </div>
                            <h4 className="font-serif text-xl md:text-2xl text-content-primary group-hover:text-accent-gold transition-colors duration-300 leading-tight">
                              {item.name}
                            </h4>
                          </div>
                          {!item.image && (
                            <span className="font-sans font-medium text-accent-gold whitespace-nowrap ml-4 border-b border-accent-gold/20 pb-0.5">
                              {item.price}
                            </span>
                          )}
                        </div>
                        
                        <p className="font-sans text-sm text-content-secondary mb-6 leading-relaxed flex-1">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-subtle/50">
                          {item.popular && (
                            <span className="bg-accent-gold/10 text-accent-gold px-3 py-1 font-sans text-[10px] tracking-widest uppercase rounded-sm">
                              Bestseller
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Sophisticated Section Stepper */}
              <div className="flex justify-between items-center border-t border-border-subtle pt-8 px-2">
                <button 
                  onClick={() => handlePrevSection(index)}
                  disabled={index === 0}
                  className={`flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${index === 0 ? 'text-content-ghost cursor-not-allowed' : 'text-content-secondary hover:text-accent-gold hover:-translate-x-1'}`}
                >
                  <ChevronLeft size={16} /> Previous Category
                </button>
                <button 
                  onClick={() => handleNextSection(index)}
                  disabled={index === filteredData.length - 1}
                  className={`flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${index === filteredData.length - 1 ? 'text-content-ghost cursor-not-allowed' : 'text-content-secondary hover:text-accent-gold hover:translate-x-1'}`}
                >
                  Next Category <ChevronRight size={16} />
                </button>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Mobile FAB (Browse Categories) */}
      <button 
        onClick={() => setIsMobileSheetOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-accent-gold text-surface-base px-6 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.5)] font-sans text-xs tracking-widest uppercase flex items-center gap-2 min-h-[48px] active:scale-95 transition-transform"
      >
        <Menu size={18} /> Menu Atlas
      </button>

      {/* Mobile Category Sheet Overlay */}
      <AnimatePresence>
        {isMobileSheetOpen && (
          <div className="fixed inset-0 z-50 flex items-end lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-surface-base/90 backdrop-blur-sm" 
              onClick={() => setIsMobileSheetOpen(false)}
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full bg-surface-card border-t border-border-subtle rounded-t-3xl p-6 pb-12 max-h-[85vh] flex flex-col"
            >
              <div className="w-12 h-1 bg-border-subtle rounded-full mx-auto mb-6"></div>
              
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-serif text-3xl text-accent-gold">Menu Atlas</h3>
                <button onClick={() => setIsMobileSheetOpen(false)} className="p-2 bg-surface-base rounded-full hover:bg-border-subtle transition-colors">
                  <X size={20} className="text-content-primary" />
                </button>
              </div>
              
              <div className="relative mb-6 shrink-0">
                <input 
                  type="text" 
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface-base border border-border-subtle rounded-xl py-4 pl-12 pr-4 font-sans text-sm text-content-primary placeholder-content-secondary focus:outline-none focus:border-accent-gold shadow-inner"
                />
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-content-secondary" />
              </div>

              <div className="flex flex-col gap-1 overflow-y-auto hide-scrollbar pb-6 -mx-2 px-2">
                {filteredData.map(section => (
                  <button
                    key={`sheet-${section.id}`}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left px-5 py-4 rounded-xl font-sans text-xs tracking-widest uppercase transition-colors flex items-center justify-between ${
                      activeSection === section.id 
                        ? 'bg-accent-gold/10 text-accent-gold font-medium border border-accent-gold/20' 
                        : 'text-content-secondary hover:bg-surface-base'
                    }`}
                  >
                    {section.title}
                    {activeSection === section.id && <ChevronRight size={14} />}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
