import React, { useRef, useState, useEffect } from 'react'
import { useScroll } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'
import Scene0_CoverPage from '../components/Scenes/Scene0_CoverPage'
import Scene1_RoyalEntrance from '../components/Scenes/Scene1_RoyalEntrance'
import Scene2_HeritageWarmth from '../components/Scenes/Scene2_HeritageWarmth'
import Scene4_MenuGlimpse from '../components/Scenes/Scene4_MenuGlimpse'
import Scene5_CinematicPause from '../components/Scenes/Scene5_CinematicPause'
import Scene9_CelebrationProcession from '../components/Scenes/Scene9_CelebrationProcession'
import Scene10_Whispers from '../components/Scenes/Scene10_Whispers'
import Scene11_FAQ_Footer from '../components/Scenes/Scene11_FAQ_Footer'
import MenuManuscript from '../components/Menu/MenuManuscript'

export default function Home() {
  const containerRef = useRef(null)
  const isMobile = useIsMobile()
  const [hasSeenCover, setHasSeenCover] = useState(() => {
    return sessionStorage.getItem('chatpati-cover-seen') === 'true';
  });

  useEffect(() => {

    // Clear session storage on hard refresh so cover appears again.
    // This allows the flag to survive SPA navigation but reset on browser refresh.
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('chatpati-cover-seen')
    }
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  // Controls the Spatial Z-Depth progression for Act I
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <>
      {/* 
        CHAPTER 1: THE ROYAL ENTRANCE 
        Skipped if user has already seen it this session.
      */}
      {!hasSeenCover && <Scene0_CoverPage />}

      {/* 
        HOMEPAGE 
        It renders instantly at the top of the DOM. 
        If cover is active, it's visually hidden via GSAP until scroll.
      */}
      <div id="home-page-wrapper" style={hasSeenCover ? { opacity: 1, transform: 'translateY(0)' } : undefined}>
        {/* ACT I: THE CRAVING (Spatial Z-Depth Journey) */}
        <div ref={containerRef} className="relative h-[800vh] md:h-[1000vh] bg-surface-base z-10">
          <MenuManuscript />

          <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
            {!isMobile && (
              <div className="absolute inset-0 z-[100] pointer-events-none bg-texture-paper opacity-30 mix-blend-overlay"></div>
            )}
            
            <Scene1_RoyalEntrance progress={scrollYProgress} />
            <Scene2_HeritageWarmth progress={scrollYProgress} />
            <Scene4_MenuGlimpse progress={scrollYProgress} />
          </div>
        </div>

        {/* ACT II - V: THE HUMAN CONNECTION & FAREWELL */}
        <div className="relative z-[40] bg-transparent -mt-[100vh]" style={{ contentVisibility: 'auto', containIntrinsicSize: '4000px' }}>
          <Scene5_CinematicPause />
          <Scene9_CelebrationProcession />
          <Scene10_Whispers />
          <Scene11_FAQ_Footer />
        </div>
      </div>
    </>
  )
}
