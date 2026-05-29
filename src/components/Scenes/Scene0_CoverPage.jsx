import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsMobile } from '../../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

export default function Scene0_CoverPage() {
  const isMobile = useIsMobile();
  const coverRef = useRef(null);
  const videoRef = useRef(null);
  const typographyRef = useRef(null);
  const subtitleRef = useRef(null);
  const indicatorRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const cover = coverRef.current;
    const typography = typographyRef.current;
    const subtitle = subtitleRef.current;
    const indicator = indicatorRef.current;
    const gradient = gradientRef.current;
    const homePage = document.getElementById('home-page-wrapper');

    if (!video || !cover || !homePage) return;

    // Mobile video play requires user interaction.
    let hasStarted = false;
    const startVideo = () => {
      if (!hasStarted && video) {
        hasStarted = true;
        video.play().catch(() => {});
      }
    };

    window.addEventListener('touchstart', startVideo, { once: true });
    window.addEventListener('pointerdown', startVideo, { once: true });
    window.addEventListener('wheel', startVideo, { once: true });

    // Initial state for homepage reveal (starts lower and hidden)
    gsap.set(homePage, { opacity: 0, y: 40 });

    const scrollDistance = isMobile ? window.innerHeight * 1.1 : window.innerHeight * 1.4;

    // Timeline for dissolving the cover
    const tl = gsap.timeline({
      scrollTrigger: {
        id: 'cover-sequence',
        trigger: document.body,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        onUpdate: (self) => {
          if (!hasStarted && self.progress > 0.01) {
            startVideo();
          }
        }
      },
    });

    // 0% -> 70%: Fade out UI elements early, deepen the atmosphere
    tl.to(indicator, { opacity: 0, duration: 0.1, ease: 'none' }, 0)
      .to(typography, { opacity: 0, y: -20, duration: 0.2, ease: 'none' }, 0.1)
      .to(subtitle, { opacity: 0, y: -10, duration: 0.2, ease: 'none' }, 0.1)
      .to(gradient, { backgroundColor: 'rgba(5, 3, 2, 0.4)', duration: 0.4, ease: 'none' }, 0.2)
      // 70% -> 100%: The cover completely dissolves.
      .to(cover, { opacity: 0, duration: 0.3, ease: 'none' }, 0.7);

    // HERO REVEAL IS DECOUPLED FROM SCRUB.
    ScrollTrigger.create({
      trigger: document.body,
      start: () => `+=${scrollDistance * 0.7}`, // 70% point
      onEnter: () => {
        gsap.to(homePage, { 
          opacity: 1, 
          y: 0, 
          duration: 2.2, // Cinematic slow fade
          ease: 'expo.out' 
        });
      },
      onLeaveBack: () => {
        gsap.to(homePage, { 
          opacity: 0, 
          y: 40, 
          duration: 1,
          ease: 'power2.out' 
        });
      }
    });

    // Hard toggle at exactly 100%
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: () => `+=${scrollDistance}`,
      onLeave: () => {
        if (cover) {
          cover.style.pointerEvents = 'none';
          cover.style.visibility = 'hidden';
        }
        sessionStorage.setItem('chatpati-cover-seen', 'true');
      },
      onEnterBack: () => {
        if (cover) {
          cover.style.pointerEvents = 'auto';
          cover.style.visibility = 'visible';
        }
      }
    });

    return () => {
      window.removeEventListener('touchstart', startVideo);
      window.removeEventListener('pointerdown', startVideo);
      window.removeEventListener('wheel', startVideo);
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf([cover, typography, subtitle, indicator, gradient, homePage]);
      gsap.set(homePage, { clearProps: 'all' });
    };
  }, [isMobile]);

  return (
    <div
      ref={coverRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        willChange: 'opacity',
        background: '#080604',
      }}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={isMobile ? '/assets/cover/cover-mobile.mp4' : '/assets/cover/cover-desktop.mp4'}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        muted
        playsInline
        disablePictureInPicture
      />

      {/* OVERLAY */}
      <div
        ref={gradientRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background: `linear-gradient(
            to bottom,
            rgba(5,3,2,0.85) 0%,
            rgba(5,3,2,0.50) 25%,
            rgba(5,3,2,0.00) 45%,
            rgba(5,3,2,0.00) 65%,
            rgba(10,6,3,0.75) 100%
          )`,
          willChange: 'background-color',
        }}
      />

      <div
        ref={typographyRef}
        style={{
          position: 'absolute',
          top: isMobile ? '12vh' : '14vh',
          left: 0,
          right: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
          willChange: 'opacity, transform',
        }}
      >
        <img
          src="/assets/logo.png"
          alt="Logo"
          style={{
            width: isMobile ? '35vw' : '15vw',
            maxWidth: '180px',
            marginBottom: '24px',
            filter: 'drop-shadow(0 4px 16px rgba(203,170,106,0.30))',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isMobile ? 'clamp(2.5rem, 10vw, 5rem)' : 'clamp(4rem, 8vw, 10rem)',
            color: '#F5EFEB', // Pure bright ivory
            lineHeight: 1,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            margin: 0,
            whiteSpace: 'nowrap',
            textShadow: '0 8px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)' // Guarantees visibility
          }}>
            Chatpati Delhi
          </h1>
          
          {/* THE LUXURY '2' FOCAL POINT */}
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isMobile ? 'clamp(4rem, 15vw, 7rem)' : 'clamp(6rem, 12vw, 14rem)',
            fontWeight: '300',
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #FFDF8A 0%, #CBAA6A 40%, #8A6427 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: isMobile ? '16px' : '28px',
            filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.95)) drop-shadow(0px 0px 40px rgba(203,170,106,0.35))',
            lineHeight: 1,
            transform: 'translateY(-6%)' 
          }}>
            2
          </span>
        </div>
        
        <p
          ref={subtitleRef}
          style={{
            marginTop: isMobile ? '20px' : '32px',
            fontFamily: 'var(--font-serif)',
            fontSize: isMobile ? '10px' : '14px',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: '#cbab6a',
            opacity: 0.9,
            textShadow: '0 2px 14px rgba(203,170,106,0.45)',
          }}
        >
          Royal Catering &amp; Takeout
        </p>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        ref={indicatorRef}
        style={{
          position: 'absolute',
          bottom: '28px',
          left: 0,
          right: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
          willChange: 'opacity',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isMobile ? '7.5px' : '9.5px',
            letterSpacing: '0.42em',
            textTransform: 'uppercase',
            color: '#cbab6a',
            animation: 'coverPulse 3.5s ease-in-out infinite',
          }}
        >
          Scroll to Enter
        </p>
        <div
          style={{
            marginTop: '10px',
            width: '1px',
            height: '26px',
            background: '#cbab6a',
            animation: 'coverLine 3.5s ease-in-out infinite',
            transformOrigin: 'top center',
          }}
        />
      </div>
    </div>
  );
}
