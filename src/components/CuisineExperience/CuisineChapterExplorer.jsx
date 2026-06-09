import React from 'react';
import { Link } from 'react-router-dom';
import { chaptersMap } from '../../data/cuisinesData';
import { assets } from '../../data/assetMap';
import BackgroundTypography from '../ui/BackgroundTypography';

const preloadChapterPage = () => {
  import('../../pages/ChapterExperiencePage');
};

export default function CuisineChapterExplorer({ chapterKeys }) {
  if (!chapterKeys || chapterKeys.length === 0) return null;

  return (
    <section className="py-24 bg-surface-base border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent-gold mb-4 block">
            Dive Deeper
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-content-primary">
            Explore Chapters
          </h2>
        </div>

        {/* Mobile: snap-x scroll, Desktop: grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0 hide-scrollbar">
          {chapterKeys.map((chapterSlug, idx) => {
            const chapter = chaptersMap[chapterSlug];
            if (!chapter) return null;

            // Assign alternate sizing for "asymmetrical" feel on desktop if wanted, 
            // but a standard card works fine for the grid.
            return (
              <Link
                key={chapterSlug}
                to={`/menu/chapters/${chapterSlug}`}
                onMouseEnter={preloadChapterPage}
                onTouchStart={preloadChapterPage}
                className="group relative min-w-[85vw] md:min-w-0 h-[400px] flex-shrink-0 snap-center rounded-2xl overflow-hidden border border-border-subtle block cursor-pointer bg-surface-card hover:border-accent-gold/40 transition-colors duration-500"
              >
                <BackgroundTypography text={chapter.title} />

                {/* Subtle static gradient replacing the heavy nested transforms */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  idx % 3 === 0 ? 'from-[#3D2B1F]/20' : idx % 3 === 1 ? 'from-[#1A2E1A]/20' : 'from-[#1A3A4A]/20'
                } to-transparent opacity-50 pointer-events-none`} />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-gold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Open Chapter
                  </span>
                  <h3 className="font-serif text-3xl text-content-primary mb-2 group-hover:text-accent-gold transition-colors duration-300">
                    {chapter.title}
                  </h3>
                  <p className="font-sans text-sm text-content-secondary line-clamp-2">
                    {chapter.description}
                  </p>
                </div>
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
    </section>
  );
}
