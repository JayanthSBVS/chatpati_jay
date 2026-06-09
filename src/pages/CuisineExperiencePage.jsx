import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { cuisinesData } from '../data/cuisinesData';
import AtmosphereHero from '../components/CategoryExperience/AtmosphereHero';
import SignatureExperiences from '../components/CategoryExperience/SignatureExperiences';
import CuisineStory from '../components/CuisineExperience/CuisineStory';
import CuisineQuickFacts from '../components/CuisineExperience/CuisineQuickFacts';
import RecommendedEvents from '../components/CuisineExperience/RecommendedEvents';
import CuisineMostRequested from '../components/CuisineExperience/CuisineMostRequested';
import CuisineChapterExplorer from '../components/CuisineExperience/CuisineChapterExplorer';

export default function CuisineExperiencePage() {
  const { cuisineId } = useParams();
  const cuisine = cuisinesData.find(c => c.id === cuisineId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [cuisineId]);

  if (!cuisine) return <Navigate to="/menu" replace />;

  return (
    <div className="min-h-screen bg-surface-base text-content-primary relative">

      {/* Back to Menu Navigation inside Cuisine page (Task 2B) */}
      <div className="absolute top-24 left-6 md:left-12 z-30">
        <a 
          href="/menu"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
          className="flex items-center gap-2 text-primary-cream/60 hover:text-primary-gold transition-colors font-sans text-xs tracking-widest uppercase active:scale-[0.98] active:opacity-80"
        >
          <span>←</span> Back to Menu
        </a>
      </div>

      {/* 1. Atmosphere Hero */}
      <AtmosphereHero title={cuisine.title} atmosphere={cuisine.atmosphere} />

      {/* 2. Signature Experiences */}
      <SignatureExperiences experiences={cuisine.signatureExperiences} />

      {/* 3. Cuisine Story */}
      <CuisineStory paragraph={cuisine.storyParagraph} />

      {/* 4. Quick Facts */}
      <CuisineQuickFacts quickFacts={cuisine.quickFacts} />

      {/* 5. Recommended Events */}
      <RecommendedEvents events={cuisine.recommendedEvents} />

      {/* 5.5 Most Requested (Task 3A) */}
      <CuisineMostRequested dishes={cuisine.dishes} />

      {/* 6. Chapter Explorer (Replaces the old dish grid) */}
      <CuisineChapterExplorer chapterKeys={cuisine.chapterKeys} />
      
    </div>
  );
}
