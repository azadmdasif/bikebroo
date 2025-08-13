
import React from 'react';
import { MapPinIcon, PhoneIcon, BatteryIcon, ScooterIcon } from './icons';

const UserExperienceSection: React.FC = () => {
  const steps = [
    { icon: <MapPinIcon className="h-8 w-8 text-brand-green" />, title: 'Find a Hub', description: 'Open the app to locate the nearest BikeBroo hub with available scooters.' },
    { icon: <PhoneIcon className="h-8 w-8 text-brand-green" />, title: 'Book Your Scooter', description: 'Select a scooter and book it instantly through our user-friendly app.' },
    { icon: <BatteryIcon className="h-8 w-8 text-brand-green" />, title: 'Swap Batteries', description: 'Running low? Pull into any hub and swap for a fully charged battery in seconds.' },
    { icon: <ScooterIcon className="h-8 w-8 text-brand-green" />, title: 'End Your Ride', description: 'Return your scooter to any BikeBroo hub to complete your journey.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-12">A Seamless User Journey</h2>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center p-6 bg-brand-light rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserExperienceSection;