import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function ContinueJourney({ nextJourney }) {
  const [searchParams] = useSearchParams();
  const diet = searchParams.get('diet') || 'all';

  if (!nextJourney) return null;

  // Preserve the current diet preference in the URL
  const destinationUrl = `/menu/${nextJourney.id}${diet !== 'all' ? `?diet=${diet}` : ''}`;

  return (
    <section id="next" className="py-32 bg-surface-base border-t border-border-subtle">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-xs uppercase tracking-[0.3em] text-accent-gold mb-6">Continue the Journey</h2>
        
        <Link 
          to={destinationUrl} 
          className="group block p-12 bg-surface-card hover:bg-surface-paper border border-border-subtle hover:border-accent-gold rounded-3xl transition-all duration-500"
        >
          <h3 className="text-4xl md:text-5xl font-serif text-content-primary mb-6 group-hover:text-accent-gold transition-colors">
            {nextJourney.title}
          </h3>
          <p className="text-content-secondary max-w-xl mx-auto mb-8">
            {nextJourney.description}
          </p>
          
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border-subtle group-hover:border-accent-gold text-content-secondary group-hover:text-accent-gold transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}
