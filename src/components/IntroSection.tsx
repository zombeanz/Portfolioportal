import React from 'react';
import profilePhoto from 'figma:asset/9d1042840a34bb45e36afdeb986939af28f4845d.png';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export function IntroSection() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section 
      ref={ref}
      className={`border-b-2 border-[#7A1A1A] pb-12 mb-12 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-start gap-8">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#7A1A1A]">
            <img
              src={profilePhoto}
              alt="Trinity profile"
              className="w-full h-full object-cover scale-110"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl mb-4 text-[#7A1A1A]">
            Nice to meet you! My name is Trinity.
          </h2>
          <div className="space-y-2">
          </div>
          <p className="mt-6 text-[#7A1A1A]/80 leading-relaxed">
            I'm a communications designer with an interest in typography, illustrations, and social media work. 
            I'm also currently a communication design student at Texas A&M University - Corpus Christi. Design and how
            it affects audiences is of special interest to me. My design philosophy is that brands don't just function, 
            they live and breathe. Your brand should say something special. I am dedicated to pushing boundaries as a
            designer, and creating works that go above and beyond expectation. If you're ready to fly, so am I!
          </p>
          <p className="mt-4 text-[#7A1A1A]/80 leading-relaxed">
            PLEASE NOTE: Most of the work in this portfolio is student work, and will be labelled as such in the "role"
            section of each works page for transparency. If there are any questions about this, feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
}