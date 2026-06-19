import React from 'react';
import { takeawayData } from '../data/takeawayData';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Takeaway() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 lg:pt-32 min-h-screen bg-surface-base text-content-primary pb-24">
      {/* Hero Banner Area */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12 lg:mb-20">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="bg-surface-card border border-border-subtle p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
         >
            {/* Background Texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface-base/90 via-surface-base/80 to-transparent z-0"></div>
            
            <div className="flex flex-col relative z-10 w-full md:w-2/3">
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent-gold mb-6 font-medium">Direct from our Kitchen</span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-content-primary mb-6 leading-tight drop-shadow-lg">
                Authentic Takeaway <br className="hidden md:block"/> <span className="italic text-accent-gold font-light">Experience</span>
              </h1>
              <p className="font-sans text-sm md:text-base text-content-secondary max-w-xl mb-10 leading-relaxed opacity-90">
                Enjoy the rich, uncompromising flavors of Chatpati Delhi in the comfort of your home. Perfect for intimate family dinners or spontaneous celebrations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 font-sans text-[10px] tracking-widest text-content-secondary uppercase border-t border-border-subtle pt-6">
                <div className="flex items-center gap-3"><MapPin size={16} className="text-accent-gold"/> Oaktree Rd, Iselin</div>
                <div className="flex items-center gap-3"><Clock size={16} className="text-accent-gold"/> 11:30 AM - 10:00 PM</div>
                <div className="flex items-center gap-3"><Phone size={16} className="text-accent-gold"/> (732) 516-8407</div>
              </div>
            </div>
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl text-content-primary mb-3">Explore Our Menu</h2>
          <div className="w-16 h-0.5 bg-accent-gold opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {takeawayData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => navigate(`/takeaway/${category.id}`)}
              className="group cursor-pointer bg-surface-card border border-border-subtle overflow-hidden relative min-h-[320px] flex flex-col justify-end p-8 hover:border-accent-gold/50 transition-all duration-700 hover:shadow-[0_0_40px_rgba(226,160,96,0.1)]"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 bg-black">
                <img 
                  src={category.heroImage} 
                  alt={category.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-8 h-[1px] bg-accent-gold mb-4 group-hover:w-16 transition-all duration-500"></div>
                <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-accent-gold transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="font-sans text-xs text-white/80 tracking-wide line-clamp-2 mb-6">
                  {category.tagline}
                </p>
                <div className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  Explore Menu <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
