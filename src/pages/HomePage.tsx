import React from 'react';
import { Header } from '../components/Header';
import { IntroSection } from '../components/IntroSection';
import { SelectedWorks } from '../components/SelectedWorks';
import { ContactsRibbon } from '../components/ContactsRibbon';

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#E5DDD5]">
      <div className="py-12 md:py-16">
        <Header />
        <IntroSection />
        <SelectedWorks />
        <ContactsRibbon />
      </div>
    </div>
  );
}