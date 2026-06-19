import React, { useEffect, useRef, useState } from 'react';

/**
 * GlobalScrollIndicator
 *
 * A premium, unique scroll cue shown throughout the entire app.
 * Design: three animated golden bars of different lengths that cascade
 * downward like falling threads of silk — a motif inspired by Indian
 * weaving craft. Appears after 1.8s idle. Disappears near page bottom.
 * Clickable — nudges the page forward.
 */
export default function GlobalScrollIndicator() {
  const [atBottom, setAtBottom] = useState(false);
  const [idle, setIdle] = useState(true);
  const [pressed, setPressed] = useState(false);
  const idleTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setAtBottom(scrolled >= total * 0.96);
      setIdle(false);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIdle(true), 1800);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(idleTimer.current);
    };
  }, []);

  const handleClick = () => {
    setPressed(true);
    setTimeout(() => setPressed(false), 600);
    window.scrollBy({ top: window.innerHeight * 0.45, behavior: 'smooth' });
  };

  const show = !atBottom && idle;

  return (
    <>
      <style>{`
        /* Bar 1: tallest, starts first */
        @keyframes gsi-bar1 {
          0%   { height: 0px;  opacity: 0; }
          15%  { height: 28px; opacity: 1; }
          55%  { height: 28px; opacity: 1; }
          80%  { height: 0px;  opacity: 0; }
          100% { height: 0px;  opacity: 0; }
        }
        /* Bar 2: medium, slight delay */
        @keyframes gsi-bar2 {
          0%   { height: 0px;  opacity: 0; }
          25%  { height: 20px; opacity: 1; }
          60%  { height: 20px; opacity: 1; }
          85%  { height: 0px;  opacity: 0; }
          100% { height: 0px;  opacity: 0; }
        }
        /* Bar 3: shortest, latest */
        @keyframes gsi-bar3 {
          0%   { height: 0px;  opacity: 0; }
          35%  { height: 13px; opacity: 1; }
          65%  { height: 13px; opacity: 1; }
          90%  { height: 0px;  opacity: 0; }
          100% { height: 0px;  opacity: 0; }
        }
        /* Label breathes */
        @keyframes gsi-label {
          0%, 100% { opacity: 0.5; transform: translateY(0px);  }
          50%       { opacity: 1;   transform: translateY(-2px); }
        }
        /* Press burst */
        @keyframes gsi-burst {
          0%   { transform: scale(1);   opacity: 1; }
          50%  { transform: scale(1.6); opacity: 0.4; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .gsi-bar-wrap:hover .gsi-bar {
          background: linear-gradient(180deg, #FFE8A3, var(--accent-gold)) !important;
        }
      `}</style>

      <div
        aria-label="Scroll down"
        role="button"
        tabIndex={-1}
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: '28px',
          left: 0,
          right: 0,
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          pointerEvents: show ? 'auto' : 'none',
          cursor: 'pointer',
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0px)' : 'translateY(10px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          willChange: 'opacity, transform',
          userSelect: 'none',
        }}
      >
        {/* Label */}
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '10px',
            fontWeight: 'bold',
            letterSpacing: '0.48em',
            textTransform: 'uppercase',
            color: 'rgba(203,170,106,1)',
            textShadow: '0 1px 8px rgba(0,0,0,0.7)',
            animation: 'gsi-label 3.2s ease-in-out infinite',
          }}
        >
          Scroll to Explore
        </span>

        {/* Three cascading silk-thread bars */}
        <div
          className="gsi-bar-wrap"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '5px',
            position: 'relative',
          }}
        >
          {/* Bar 1 — tallest, first */}
          <div
            className="gsi-bar"
            style={{
              width: '1.5px',
              borderRadius: '2px',
              background: 'rgba(203,170,106,0.85)',
              boxShadow: '0 0 6px rgba(203,170,106,0.5)',
              animation: 'gsi-bar1 1.8s cubic-bezier(0.4,0,0.2,1) infinite',
              animationDelay: '0ms',
              transformOrigin: 'top center',
            }}
          />
          {/* Bar 2 — medium, second */}
          <div
            className="gsi-bar"
            style={{
              width: '1.5px',
              borderRadius: '2px',
              background: 'rgba(203,170,106,0.7)',
              boxShadow: '0 0 5px rgba(203,170,106,0.4)',
              animation: 'gsi-bar2 1.8s cubic-bezier(0.4,0,0.2,1) infinite',
              animationDelay: '120ms',
              transformOrigin: 'top center',
            }}
          />
          {/* Bar 3 — shortest, last */}
          <div
            className="gsi-bar"
            style={{
              width: '1.5px',
              borderRadius: '2px',
              background: 'rgba(203,170,106,0.5)',
              boxShadow: '0 0 4px rgba(203,170,106,0.3)',
              animation: 'gsi-bar3 1.8s cubic-bezier(0.4,0,0.2,1) infinite',
              animationDelay: '240ms',
              transformOrigin: 'top center',
            }}
          />

          {/* Click burst ring */}
          {pressed && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '20px',
                height: '20px',
                marginLeft: '-10px',
                marginTop: '-10px',
                borderRadius: '50%',
                border: '1px solid rgba(203,170,106,0.7)',
                animation: 'gsi-burst 0.6s ease-out forwards',
                pointerEvents: 'none',
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}
