import React from 'react';
import { Link } from 'react-router-dom';

export default function EventPairingIntelligence({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <section id="events" className="py-24 bg-surface-base border-t border-border-subtle">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-accent-gold mb-4">Catering Intelligence</h2>
        <p className="text-3xl font-serif text-content-primary">Perfect Pairings for Your Occasion</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {events.map((event, index) => (
          <div key={index} className="p-8 bg-surface-card border border-border-subtle rounded-2xl relative overflow-hidden group">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl group-hover:bg-accent-gold/10 transition-colors" />
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-surface-paper text-accent-gold text-xs uppercase tracking-widest rounded-full mb-6 border border-border-subtle">
                Best For {event.type}
              </span>
              <h3 className="text-2xl font-serif text-content-primary mb-4">{event.title}</h3>
              <p className="text-content-secondary text-sm leading-relaxed mb-8">
                {event.description}
              </p>
              
              <Link 
                to="/catering" 
                className="inline-flex items-center text-sm font-medium text-accent-gold hover:underline transition-all"
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
