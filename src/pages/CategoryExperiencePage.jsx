import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { categoriesData } from '../data/categoriesData';
import AtmosphereHero from '../components/CategoryExperience/AtmosphereHero';
import SignatureExperiences from '../components/CategoryExperience/SignatureExperiences';
import InteractiveExplorer from '../components/CategoryExperience/InteractiveExplorer';
import EventPairingIntelligence from '../components/CategoryExperience/EventPairingIntelligence';
import ContinueJourney from '../components/CategoryExperience/ContinueJourney';
import StickyJourneyNavigator from '../components/ui/StickyJourneyNavigator';

export default function CategoryExperiencePage() {
  const { categoryId } = useParams();
  
  // Find the category data
  const category = categoriesData.find(c => c.id === categoryId);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  // If category doesn't exist, redirect to menu
  if (!category) {
    return <Navigate to="/menu" replace />;
  }

  return (
    <div className="min-h-screen bg-surface-base text-content-primary">
      {/* 1. Atmosphere Layer */}
      <AtmosphereHero title={category.title} atmosphere={category.atmosphere} />
      
      {/* Sticky Navigator for Mobile / Desktop */}
      <StickyJourneyNavigator />

      {/* 2. Signature Experiences */}
      <SignatureExperiences experiences={category.signatureExperiences} />

      {/* 3. Interactive Dish Explorer */}
      <InteractiveExplorer dishes={category.dishes} />

      {/* 4. Event Pairing Intelligence */}
      <EventPairingIntelligence events={category.events} />

      {/* 5. Continue the Journey */}
      <ContinueJourney nextJourney={category.nextJourney} />
    </div>
  );
}
