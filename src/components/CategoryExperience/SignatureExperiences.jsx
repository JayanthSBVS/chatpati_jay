import React from 'react';

export default function SignatureExperiences({ experiences }) {
  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="signatures" className="py-24 bg-surface-base border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-accent-gold mb-4">Signature Experiences</h2>
        <p className="text-3xl font-serif text-content-primary">The dishes that define this journey.</p>
      </div>

      {/* Horizontal Snap Container for Mobile & Desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 px-6 gap-8 max-w-7xl mx-auto">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[800px] flex flex-col lg:flex-row gap-8 bg-surface-card border border-border-subtle rounded-2xl overflow-hidden"
          >
            {/* Image Block */}
            <div className="w-full lg:w-1/2 h-[40vh] lg:h-auto relative">
              <img 
                src={exp.image} 
                alt={exp.name} 
                loading="lazy" 
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full backdrop-blur-md border ${
                  exp.diet === 'veg' 
                    ? 'bg-green-900/40 text-green-400 border-green-800/50' 
                    : 'bg-red-900/40 text-red-400 border-red-800/50'
                }`}>
                  {exp.diet}
                </span>
              </div>
            </div>

            {/* Content Block */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-serif text-content-primary mb-4">{exp.name}</h3>
              <p className="text-content-secondary text-sm leading-relaxed mb-6">
                {exp.story}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-accent-gold mb-2">Key Ingredients</h4>
                  <p className="text-sm text-content-secondary">{exp.ingredients.join(', ')}</p>
                </div>
                
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-accent-gold mb-2">The Experience</h4>
                  <p className="text-sm text-content-secondary italic">"{exp.occasion}"</p>
                </div>

                {exp.eventPairing && (
                  <div className="pt-4 border-t border-border-subtle">
                    <h4 className="text-xs uppercase tracking-widest text-accent-gold mb-2">Perfect For</h4>
                    <p className="text-sm text-content-primary">{exp.eventPairing}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
