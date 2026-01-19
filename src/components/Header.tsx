import React from 'react';
import headerBgImage from 'figma:asset/abe97458c13da7844a7207c76ceaca69e8cdb273.png';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export function Header() {
  const { ref, isVisible } = useFadeInOnScroll(true);

  return (
    <div className="relative mb-12 overflow-hidden">
      {/* Actual header content */}
      <header 
        ref={ref}
        className={`border-b-2 border-[#7A1A1A] pb-16 min-h-[60vh] flex items-center relative transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Background image layer positioned on the right side */}
        <div 
          className="absolute right-0 bg-contain bg-right-bottom bg-no-repeat pointer-events-none"
          style={{ 
            backgroundImage: `url(${headerBgImage})`,
            width: '50%',
            height: 'calc(100% + 2px)',
            top: 0,
            bottom: '-2px'
          }}
        />
        
        <div className="w-full px-6 md:px-12 relative z-10">
          <div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 text-[#7A1A1A] grunge-title">
              TRINITY E.
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#7A1A1A]/70 tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              TYPOGRAPHY • ILLUSTRATIONS • SOCIAL MEDIA
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}