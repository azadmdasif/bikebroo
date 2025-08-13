import React from 'react';
import { ScooterIcon, LeafIcon, HubIcon, BatteryIcon, PlugIcon, ShieldIcon } from './icons';

interface HeroSectionProps {
  scrollToVision: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToVision }) => {
  // A helper component for decorative icons to avoid repetition
  const DecorativeIcon: React.FC<{ icon: React.ReactNode, className?: string }> = ({ icon, className }) => (
    <div className={`absolute text-brand-green opacity-20 ${className}`}>
      {icon}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 text-brand-dark text-center px-4 py-24 overflow-hidden">
      
      {/* Decorative background icons - some visible on mobile, all on desktop */}
      
      {/* Visible on all screens (with responsive sizing) */}
      <DecorativeIcon icon={<PlugIcon className="w-12 h-12 md:w-16 md:h-16" />} className="top-[15%] right-[5%] rotate-45" />
      <DecorativeIcon icon={<ScooterIcon className="w-16 h-16 md:w-20 md:h-20" />} className="bottom-[10%] left-[5%] -rotate-12" />
      <DecorativeIcon icon={<LeafIcon className="w-16 h-16 md:w-24 md:h-24" />} className="top-1/3 right-[15%] -rotate-12" />
      <DecorativeIcon icon={<HubIcon className="w-12 h-12 md:w-16 md:h-16" />} className="top-1/2 left-[5%] -rotate-6" />

      {/* Visible only on medium screens and up */}
      <DecorativeIcon icon={<ScooterIcon className="w-32 h-32" />} className="hidden md:block top-1/4 left-[10%] rotate-12" />
      <DecorativeIcon icon={<HubIcon className="w-28 h-28" />} className="hidden md:block bottom-1/4 left-[20%] rotate-6" />
      <DecorativeIcon icon={<BatteryIcon className="w-20 h-20" />} className="hidden md:block bottom-1/4 right-[25%] -rotate-6" />
      <DecorativeIcon icon={<LeafIcon className="w-16 h-16" />} className="hidden md:block top-3/4 left-[35%]" />
      <DecorativeIcon icon={<BatteryIcon className="w-28 h-28" />} className="hidden md:block top-[20%] right-[30%] rotate-12" />
      <DecorativeIcon icon={<ShieldIcon className="w-20 h-20" />} className="hidden md:block bottom-1/3 right-[8%] -rotate-45" />


      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-brand-dark">
          Democratizing Dignified Mobility
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Affordable, Safe, & Premium Shared Electric Scooters for Urban Commuters
        </p>
        <div className="flex justify-center">
          <button 
            onClick={scrollToVision} 
            className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;