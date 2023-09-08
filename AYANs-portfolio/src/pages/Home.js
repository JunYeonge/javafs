import React from 'react';
import Herosection from '../components/Herosection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimnialsSection from '../components/TestimnialsSection';
import ContactBanner from '../components/ContactBanner';

export default function Home() {
  return (
    <div>
      <Herosection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimnialsSection />
      <ContactBanner />
    </div>
  );
}
