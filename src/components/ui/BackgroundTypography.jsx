import React from 'react';

export default function BackgroundTypography({ text }) {
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      <span className="font-serif text-[10rem] md:text-[15rem] leading-none whitespace-nowrap text-content-ghost">
        {text}
      </span>
    </div>
  );
}
