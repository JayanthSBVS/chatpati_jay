import React from 'react';
import { Link } from 'react-router-dom';
import { cuisinesData, chaptersMap } from '../../data/cuisinesData';

export default function ChapterStickyNav({ currentChapterId, parentCuisineId }) {
  if (!parentCuisineId) return null;

  const cuisine = cuisinesData.find(c => c.id === parentCuisineId);
  if (!cuisine || !cuisine.chapterKeys || cuisine.chapterKeys.length <= 1) return null;

  return (
    <div className="sticky top-[72px] z-40 w-full bg-[#0a0908]/95 backdrop-blur-md border-b border-[#CBAA6A]/10 shadow-xl shadow-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3">
        <div className="flex items-center overflow-x-auto hide-scrollbar gap-6 snap-x snap-mandatory">
          {cuisine.chapterKeys.map((chapterSlug) => {
            const chapter = chaptersMap[chapterSlug];
            if (!chapter) return null;

            const isActive = chapterSlug === currentChapterId;

            return (
              <Link
                key={chapterSlug}
                to={`/menu/chapters/${chapterSlug}`}
                replace={true} // Replace history so back button goes to Cuisine, not previous chapter
                className={`flex-shrink-0 snap-start font-sans text-xs md:text-sm tracking-widest uppercase pb-1 border-b-2 transition-all duration-300 ${
                  isActive 
                    ? 'border-primary-gold text-primary-gold' 
                    : 'border-transparent text-primary-cream/50 hover:text-primary-cream'
                }`}
              >
                {chapter.title}
              </Link>
            );
          })}
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
