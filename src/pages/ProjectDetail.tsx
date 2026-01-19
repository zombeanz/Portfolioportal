import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import { ImageLightbox } from '../components/ImageLightbox';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  const titleSection = useFadeInOnScroll(true);
  const heroSection = useFadeInOnScroll();
  const detailsSection = useFadeInOnScroll();
  const metaSection = useFadeInOnScroll();
  const gallerySection = useFadeInOnScroll();

  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    if (project) {
      setLightboxIndex((prev) => (prev + 1) % project.galleryImages.length);
    }
  };

  const previousImage = () => {
    if (project) {
      setLightboxIndex((prev) =>
        prev === 0 ? project.galleryImages.length - 1 : prev - 1
      );
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#E5DDD5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-[#7A1A1A]">Project Not Found</h1>
          <Link
            to="/"
            className="text-[#7A1A1A] hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E5DDD5]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-16">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#7A1A1A] hover:text-[#7A1A1A]/80 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* Project Title */}
        <div
          ref={titleSection.ref}
          className={`mb-12 transition-opacity duration-1000 ${
            titleSection.isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-[#7A1A1A]/60 mb-2 uppercase tracking-wide text-sm">
            {project.category} • {project.year}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-[#7A1A1A] tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-[#7A1A1A]/80 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div
          ref={heroSection.ref}
          className={`mb-16 border-4 border-[#7A1A1A] overflow-hidden bg-[#7A1A1A] transition-opacity duration-1000 ${
            heroSection.isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/9] object-contain"
          />
        </div>

        {/* Project Details Grid */}
        <div
          ref={detailsSection.ref}
          className={`grid md:grid-cols-2 gap-12 mb-16 transition-opacity duration-1000 ${
            detailsSection.isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div>
            <h2 className="text-2xl mb-4 text-[#7A1A1A] tracking-tight">
              The Challenge
            </h2>
            <p className="text-[#7A1A1A]/80 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-4 text-[#7A1A1A] tracking-tight">
              The Solution
            </h2>
            <p className="text-[#7A1A1A]/80 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Project Meta */}
        <div
          ref={metaSection.ref}
          className={`border-t-2 border-[#7A1A1A] pt-8 mb-16 transition-opacity duration-1000 ${
            metaSection.isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-[#7A1A1A]/60 mb-2 text-sm uppercase tracking-wide">
                Role
              </p>
              <p className="text-[#7A1A1A]">{project.role}</p>
            </div>
            <div>
              <p className="text-[#7A1A1A]/60 mb-2 text-sm uppercase tracking-wide">
                Year
              </p>
              <p className="text-[#7A1A1A]">{project.year}</p>
            </div>
            <div>
              <p className="text-[#7A1A1A]/60 mb-2 text-sm uppercase tracking-wide">
                Category
              </p>
              <p className="text-[#7A1A1A]">{project.category}</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div
          ref={gallerySection.ref}
          className={`transition-opacity duration-1000 ${
            gallerySection.isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[#7A1A1A] tracking-tight">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.galleryImages.map((image, index) => (
              <div
                key={index}
                className="border-2 border-[#7A1A1A] overflow-hidden bg-[#7A1A1A] cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full aspect-square object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation to next/previous projects */}
        <div className="mt-20 pt-12 border-t-2 border-[#7A1A1A]">
          <div className="flex justify-between items-center">
            {(() => {
              const currentIndex = projects.findIndex((p) => p.slug === slug);
              const previousProject = projects[currentIndex - 1];
              const nextProject = projects[currentIndex + 1];

              return (
                <>
                  <div>
                    {previousProject && (
                      <Link
                        to={`/project/${previousProject.slug}`}
                        className="group inline-block"
                      >
                        <p className="text-[#7A1A1A]/60 text-sm mb-2 uppercase tracking-wide">
                          Previous Project
                        </p>
                        <p className="text-xl text-[#7A1A1A] group-hover:underline">
                          {previousProject.title}
                        </p>
                      </Link>
                    )}
                  </div>
                  <div className="text-right">
                    {nextProject && (
                      <Link
                        to={`/project/${nextProject.slug}`}
                        className="group inline-block"
                      >
                        <p className="text-[#7A1A1A]/60 text-sm mb-2 uppercase tracking-wide">
                          Next Project
                        </p>
                        <p className="text-xl text-[#7A1A1A] group-hover:underline">
                          {nextProject.title}
                        </p>
                      </Link>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {project && lightboxOpen && (
        <ImageLightbox
          open={lightboxOpen}
          onClose={closeLightbox}
          images={project.galleryImages}
          currentIndex={lightboxIndex}
          onNext={nextImage}
          onPrevious={previousImage}
          alt={project.title}
        />
      )}
    </div>
  );
}