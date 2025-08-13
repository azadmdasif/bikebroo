
import React, { useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VisionImpactSection from './components/VisionImpactSection';
import HowItWorksSection from './components/HowItWorksSection';
import MarketOpportunitySection from './components/MarketOpportunitySection';
import FleetTechSection from './components/FleetTechSection';
import UserExperienceSection from './components/UserExperienceSection';
import PricingSection from './components/PricingSection';
import InvestorSection from './components/InvestorSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const sections = {
    home: useRef<HTMLDivElement>(null),
    vision: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
    market: useRef<HTMLDivElement>(null),
    pricing: useRef<HTMLDivElement>(null),
    investors: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: React.RefObject<HTMLDivElement>) => {
    section.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-brand-light text-brand-dark font-sans">
      <Header sections={sections} scrollToSection={scrollToSection} />
      <main>
        <div ref={sections.home}><HeroSection scrollToVision={() => scrollToSection(sections.vision)} /></div>
        <div ref={sections.vision}><VisionImpactSection /></div>
        <div ref={sections.features}><HowItWorksSection /></div>
        <div ref={sections.market}><MarketOpportunitySection /></div>
        <div ref={sections.features}><FleetTechSection /></div>
        <div ref={sections.features}><UserExperienceSection /></div>
        <div ref={sections.pricing}><PricingSection /></div>
        <div ref={sections.investors}><InvestorSection /></div>
        <div ref={sections.contact}><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
