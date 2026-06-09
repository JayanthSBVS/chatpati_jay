import React from 'react';

export default function StickyJourneyNavigator() {
  const sections = [
    { id: 'story', label: 'Story' },
    { id: 'signatures', label: 'Signatures' },
    { id: 'explorer', label: 'Explorer' },
    { id: 'events', label: 'Events' },
    { id: 'next', label: 'Next' }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-surface-base/85 backdrop-blur-md border-b border-border-subtle overflow-x-auto hide-scrollbar">
      <div className="flex items-center gap-6 px-6 py-4 min-w-max">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className="text-sm font-sans font-medium text-content-secondary hover:text-accent-gold transition-colors whitespace-nowrap tracking-wider"
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
}
