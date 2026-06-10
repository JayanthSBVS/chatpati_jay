import React, { useEffect } from 'react';
import HeroSection from '../components/MenuExperience/HeroSection';
import SignatureHighlights from '../components/MenuExperience/SignatureHighlights';
import CuisineJourney from '../components/MenuExperience/CuisineJourney';
import EventsWeCater from '../components/MenuExperience/EventsWeCater';
import MenuChapters from '../components/MenuExperience/MenuChapters';
import LiveStations from '../components/MenuExperience/LiveStations';
import LuxuryCTA from '../components/MenuExperience/LuxuryCTA';

export default function Menu() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface-base text-content-primary overflow-hidden">
      <HeroSection />
      <SignatureHighlights />
      <CuisineJourney />
      <EventsWeCater />
      <MenuChapters />
      <LiveStations />
      <LuxuryCTA />
    </div>
  );
}
