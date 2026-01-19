import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, FileText, Phone } from 'lucide-react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export function ContactsRibbon() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section 
      ref={ref}
      className={`border-t-2 border-[#7A1A1A] mt-16 pt-8 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h2 className="text-2xl md:text-3xl mb-6 tracking-tight text-[#7A1A1A]">Ready to work together? Contact me!</h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <a
          href="mailto:Trinity.Esquivel1@gmail.com"
          className="flex items-center gap-3 group text-[#7A1A1A] hover:text-[#7A1A1A]/60 transition-colors"
        >
          <Mail className="w-6 h-6" />
          <span className="text-lg">trinity.esquivel1@gmail.com</span>
        </a>
        <Link
          to="/resume"
          className="flex items-center gap-3 group text-[#7A1A1A] hover:text-[#7A1A1A]/60 transition-colors"
        >
          <FileText className="w-6 h-6" />
          <span className="text-lg">View Resume</span>
        </Link>
        <a
          href="tel:+1234567890"
          className="flex items-center gap-3 group text-[#7A1A1A] hover:text-[#7A1A1A]/60 transition-colors"
        >
          <Phone className="w-6 h-6" />
          <span className="text-lg">+1 (956) 463-5299</span>
        </a>
      </div>
    </section>
  );
}