
import React from 'react';
import { ShieldIcon, DollarSignIcon, LeafIcon } from './icons';

const VisionImpactSection: React.FC = () => {
  const impacts = [
    {
      icon: <ShieldIcon className="h-10 w-10 text-brand-green" />,
      title: 'Safety First',
      description: 'Replacing unsafe micromobility with reliable, premium scooters designed for Indian roads.'
    },
    {
      icon: <DollarSignIcon className="h-10 w-10 text-brand-green" />,
      title: 'Affordable Travel',
      description: 'Halving daily travel costs compared to traditional bike-taxis, making commutes more accessible.'
    },
    {
      icon: <LeafIcon className="h-10 w-10 text-brand-green" />,
      title: 'Eco-Friendly',
      description: 'Reducing urban carbon footprint with a fully electric fleet and sustainable operations.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Vision & Impact</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We are on a mission to <span className="text-brand-green font-semibold">democratize dignified mobility</span> for every urban commuter in India. Our unique model solves critical issues of range anxiety and vehicle downtime, ensuring a seamless experience.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {impacts.map((item, index) => (
            <div key={index} className="p-8 bg-brand-light rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionImpactSection;
