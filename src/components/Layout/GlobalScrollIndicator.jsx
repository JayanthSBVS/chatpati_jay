import React, { useEffect, useRef, useState } from 'react';

/**
 * GlobalScrollIndicator
 * 
 * A fixed, always-visible "Scroll" chevron at the bottom-center of every page.
 * - Fades in once the user has been idle for 1.8s (doesn't interrupt active scrolling)
 * - Fades out completely within the last 5% of the page (nothing left to scroll)
 * - Uses CSS animation only — no heavy JS polling
 */
export default function GlobalScrollIndicator() {
  const [visible, setVisible] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const idleTimer = useRef(null);
  const [idle, setIdle] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // Detect near-bottom: hide when within 5% of page end
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const nearBottom = scrolled >= total * 0.96;
      setAtBottom(nearBottom);

      // Reset idle timer on every scroll event
      setIdle(false);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIdle(true), 1800);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial check
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(idleTimer.current);
    };
  }, []);

  // Show indicator when: not at bottom AND user is idle
  const show = !atBottom && idle;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        bottom: '28px',
        left: 0,
        right: 0,
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        pointerEvents: 'none',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0px)' : 'translateY(6px)',
        transition: 'opacity 0.9s ease, transform 0.9s ease',
        willChange: 'opacity, transform',
      }}
    >
      {/* Label */}
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '8px',
          letterSpacing: '0.44em',
          textTransform: 'uppercase',
          color: 'rgba(203,170,106,0.75)',
          animation: 'gsiPulse 3s ease-in-out infinite',
          textShadow: '0 1px 6px rgba(0,0,0,0.6)',
        }}
      >
        Scroll
      </span>

      {/* Double-chevron SVG */}
      <svg
        width="16"
        height="24"
        viewBox="0 0 16 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: 'gsiChevron 3s ease-in-out infinite' }}
      >
        {/* Top chevron — stronger */}
        <line x1="1" y1="1"  x2="8" y2="9"  stroke="rgba(203,170,106,0.75)" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="15" y1="1" x2="8" y2="9"  stroke="rgba(203,170,106,0.75)" strokeWidth="1.4" strokeLinecap="round" />
        {/* Bottom chevron — ghost */}
        <line x1="1" y1="13" x2="8" y2="21" stroke="rgba(203,170,106,0.35)" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="15" y1="13" x2="8" y2="21" stroke="rgba(203,170,106,0.35)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>

      <style>{`
        @keyframes gsiPulse {
          0%, 100% { opacity: 0.55; transform: translateY(0px);  }
          50%       { opacity: 1;    transform: translateY(-3px); }
        }
        @keyframes gsiChevron {
          0%, 100% { opacity: 0.5;  transform: translateY(0px); }
          50%       { opacity: 0.95; transform: translateY(5px); }
        }
      `}</style>
    </div>
  );
}
