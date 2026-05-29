import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // 768px matches Tailwind's 'md' breakpoint
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();

    // Listen for resize
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}
