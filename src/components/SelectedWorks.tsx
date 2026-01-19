import React from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projects } from '../data/projects';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export function SelectedWorks() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h2 className="text-3xl md:text-4xl mb-8 tracking-tight text-[#7A1A1A]">
        SELECTED WORKS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((work) => (
          <Link
            key={work.id}
            to={`/project/${work.slug}`}
            className="group cursor-pointer"
          >
            <div className="aspect-square border-2 border-[#7A1A1A] overflow-hidden bg-[#D5CBC1]">
              <ImageWithFallback
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-[#7A1A1A]/80">{work.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}