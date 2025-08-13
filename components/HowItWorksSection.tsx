
import React from 'react';
import { HubIcon, BatteryIcon, ScooterIcon } from './icons';

const HowItWorksSection: React.FC = () => {
  const features = [
    {
      icon: <HubIcon className="h-12 w-12 text-white" />,
      title: 'Clustered Hub Model',
      description: 'Strategically placed hubs ensure a high density of available scooters, matching supply with demand efficiently and reducing search times.'
    },
    {
      icon: <BatteryIcon className="h-12 w-12 text-white" />,
      title: 'Battery-as-a-Service (BaaS)',
      description: 'Never wait for a charge. Our swappable batteries can be replaced in seconds at any hub, eliminating range anxiety and vehicle downtime.'
    },
    {
      icon: <ScooterIcon className="h-12 w-12 text-white" />,
      title: 'Premium & Safe Scooters',
      description: 'Our fleet consists of high-quality, comfortable electric scooters equipped with modern safety features, perfect for daily commutes up to 30km.'
    }
  ];

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Innovative Features, Seamless Rides</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center items-center h-24 w-24 rounded-full bg-brand-green mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
