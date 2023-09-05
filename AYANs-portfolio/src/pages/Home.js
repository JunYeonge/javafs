import React from 'react';
import Herosection from '../components/Herosection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <div>
      <Herosection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
