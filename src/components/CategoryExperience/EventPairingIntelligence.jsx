import React from 'react';
import { Link } from 'react-router-dom';

export default function EventPairingIntelligence({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <section id="events" className="py-24 bg-[#0a0908] border-t border-[#CBAA6A]/10">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-primary-gold mb-4">Catering Intelligence</h2>
        <p className="text-3xl font-serif text-primary-cream">Perfect Pairings for Your Occasion</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {events.map((event, index) => (
          <div key={index} className="p-8 bg-black/40 border border-[#CBAA6A]/10 rounded-2xl relative overflow-hidden group">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/5 rounded-full blur-3xl group-hover:bg-primary-gold/10 transition-colors" />
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-black/60 text-primary-gold text-xs uppercase tracking-widest rounded-full mb-6 border border-[#CBAA6A]/20">
                Best For {event.type}
              </span>
              <h3 className="text-2xl font-serif text-primary-cream mb-4">{event.title}</h3>
              <p className="text-primary-cream/65 text-sm leading-relaxed mb-8">
                {event.description}
              </p>
              
              <Link 
                to="/catering" 
                className="inline-flex items-center text-sm font-medium text-primary-gold hover:underline transition-all"
              >
                Inquire about catering 
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
