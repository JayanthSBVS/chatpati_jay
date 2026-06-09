import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsMobile } from '../../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

export default function Scene0_CoverPage() {
  const isMobile = useIsMobile();
  const coverRef = useRef(null);
  const videoRef = useRef(null);
  const brandRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const cover = coverRef.current;
    const brand = brandRef.current;
    const indicator = indicatorRef.current;
    const homePage = document.getElementById('home-page-wrapper');

    if (!video || !cover || !homePage) return;

    // Play immediately (autoplay via attribute) + fallback for browsers that block it
    video.play().catch(() => {});

    let hasStarted = true;
    const startVideo = () => {
      if (!hasStarted && video) {
        hasStarted = true;
        video.play().catch(() => {});
      }
    };

    window.addEventListener('touchstart', startVideo, { once: true });
    window.addEventListener('pointerdown', startVideo, { once: true });
    window.addEventListener('wheel', startVideo, { once: true });

    // Initial state: homepage hidden beneath
    gsap.set(homePage, { opacity: 0, y: 40 });

    const scrollDistance = isMobile
      ? window.innerHeight * 1.1
      : window.innerHeight * 1.4;

    // Main cover dissolve timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        id: 'cover-sequence',
        trigger: document.body,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        scrub: 1.2,
        onUpdate: (self) => {
          if (!hasStarted && self.progress > 0.01) {
            startVideo();
          }
        },
      },
    });

    // 0–25%: Fade scroll indicator
    tl.to(indicator, { opacity: 0, y: 8, duration: 0.25, ease: 'none' }, 0)
      // 10–45%: Brand lockup lifts and fades
      .to(brand, { opacity: 0, y: -24, duration: 0.35, ease: 'none' }, 0.1)
      // 65–100%: Cover itself dissolves
      .to(cover, { opacity: 0, duration: 0.35, ease: 'none' }, 0.65);

    // Homepage reveal (decoupled, one-shot ease)
    ScrollTrigger.create({
      trigger: document.body,
      start: () => `+=${scrollDistance * 0.65}`,
      onEnter: () => {
        gsap.to(homePage, {
          opacity: 1,
          y: 0,
          duration: 2.4,
          ease: 'expo.out',
        });
      },
      onLeaveBack: () => {
        gsap.to(homePage, { opacity: 0, y: 40, duration: 1, ease: 'power2.out' });
      },
    });

    // Hard toggle at 100% — ensure cover is gone and can't intercept clicks
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
      },
    });

    return () => {
      window.removeEventListener('touchstart', startVideo);
      window.removeEventListener('pointerdown', startVideo);
      window.removeEventListener('wheel', startVideo);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf([cover, brand, indicator, homePage]);
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
        background: '#060402',
      }}
    >
      {/* ─── VIDEO ─── */}
      <video
        ref={videoRef}
        src={
          isMobile
            ? '/assets/cover/cover_video_mobile.mp4'
            : '/assets/cover/cover_video_desktop.mp4'
        }
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        autoPlay
        muted
        playsInline
        loop
        disablePictureInPicture
      />

      {/* ─── GRADIENT OVERLAY ─── */}
      {/*
        Three-zone gradient:
          Top ~35%  → slightly dark so logo/text stays readable
          Middle     → nearly transparent so video hero is untouched
          Bottom ~30% → slight dark vignette for scroll indicator
      */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background: `linear-gradient(
            to bottom,
            rgba(0,0,0,0.38) 0%,
            rgba(0,0,0,0.18) 22%,
            rgba(0,0,0,0.08) 40%,
            rgba(0,0,0,0.08) 62%,
            rgba(0,0,0,0.40) 100%
          )`,
        }}
      />

      {/* ─── BRAND LOCKUP ─── */}
      <div
        ref={brandRef}
        style={{
          position: 'absolute',
          top: isMobile ? '8vh' : '18vh',
          left: 0,
          right: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0,
          pointerEvents: 'none',
          willChange: 'opacity, transform',
        }}
      >
        {/* LOGO */}
        <img
          src="/assets/logo.png"
          alt="Chatpati Delhi Logo"
          style={{
            width: isMobile ? '22vw' : '10vw',
            maxWidth: isMobile ? '100px' : '160px',
            minWidth: '64px',
            marginBottom: isMobile ? '14px' : '22px',
            filter:
              'drop-shadow(0 2px 12px rgba(203,170,106,0.45)) drop-shadow(0 0 30px rgba(0,0,0,0.6))',
          }}
        />

        {/* CHATPATI */}
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isMobile ? 'clamp(3rem, 13vw, 5rem)' : 'clamp(2.8rem, 5.5vw, 6rem)',
            fontWeight: isMobile ? '900' : '700',
            color: '#F7F0E8',
            letterSpacing: isMobile ? '0.16em' : '0.30em',
            textTransform: 'uppercase',
            lineHeight: 1,
            display: 'block',
            textShadow: '0 2px 20px rgba(0,0,0,0.85), 0 0 60px rgba(0,0,0,0.5)',
          }}
        >
          Chatpati
        </span>

        {/* DELHI */}
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isMobile ? 'clamp(1.6rem, 6.5vw, 2.8rem)' : 'clamp(1.6rem, 3vw, 3.4rem)',
            fontWeight: isMobile ? '700' : '400',
            color: '#E8DDD0',
            letterSpacing: isMobile ? '0.35em' : '0.55em',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginTop: isMobile ? '6px' : '8px',
            display: 'block',
            textShadow: '0 2px 14px rgba(0,0,0,0.80), 0 0 40px rgba(0,0,0,0.4)',
          }}
        >
          Delhi
        </span>

        {/* THE 2 — accent / design element */}
        <div
          style={{
            marginTop: isMobile ? '14px' : '18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: isMobile ? '6px' : '8px',
          }}
        >
          {/* Fine rule above */}
          <div
            style={{
              width: isMobile ? '44px' : '64px',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, rgba(203,170,106,0.7), transparent)',
            }}
          />

          {/* The numeral */}
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: isMobile ? 'clamp(4rem, 18vw, 7rem)' : 'clamp(2.8rem, 5vw, 5.2rem)',
              fontWeight: isMobile ? '700' : '300',
              fontStyle: 'italic',
              lineHeight: 1,
              display: 'block',
              /* Gold gradient fill */
              background:
                'linear-gradient(160deg, #FFE8A3 0%, #D4A752 38%, var(--accent-gold) 60%, #9A7535 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter:
                'drop-shadow(0 0 18px rgba(203,170,106,0.55)) drop-shadow(0 4px 10px rgba(0,0,0,0.7))',
            }}
          >
            2
          </span>

          {/* Fine rule below */}
          <div
            style={{
              width: isMobile ? '44px' : '64px',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, rgba(203,170,106,0.7), transparent)',
            }}
          />
        </div>

        {/* SUBTITLE */}
        <p
          style={{
            marginTop: isMobile ? '14px' : '18px',
            fontFamily: 'var(--font-serif)',
            fontSize: isMobile ? '15px' : '10.5px',
            letterSpacing: isMobile ? '0.22em' : '0.48em',
            fontWeight: isMobile ? '700' : '400',
            textTransform: 'uppercase',
            color: '#cbaa6a',
            opacity: 1,
            textShadow: '0 2px 10px rgba(0,0,0,0.7)',
          }}
        >
          Royal Catering &amp; Takeout
        </p>
      </div>

      {/* ─── SCROLL INDICATOR removed — handled by GlobalScrollIndicator ─── */}
      <div ref={indicatorRef} style={{ display: 'none' }} />


    </div>
  );
}
