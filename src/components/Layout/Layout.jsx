import React from 'react';
import SmoothScroll from './SmoothScroll';
import Navbar from './Navbar';
import GlobalScrollIndicator from './GlobalScrollIndicator';

export default function Layout({ children }) {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#0a0908] selection:bg-primary-gold selection:text-primary-cream">
        {/* THE RECURRING VISUAL DNA */}
        {/* 1. Global Paper Texture Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none bg-texture-paper opacity-40 mix-blend-multiply"></div>
        {/* 2. Saffron Light Beam sweeping slowly */}
        <div className="fixed top-[-10%] left-[-10%] w-[120%] h-[120%] z-40 pointer-events-none mix-blend-screen opacity-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(226,160,96,0.6)_0%,_transparent_60%)]"></div>
        <Navbar />
        {/* 3. Global Scroll Indicator — visible throughout entire app */}
        <GlobalScrollIndicator />
        <main>{children}</main>
      </div>
    </SmoothScroll>
  );
}
