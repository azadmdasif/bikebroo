
import React from 'react';

const FleetTechSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Our Fleet & Technology</h2>
            <p className="text-lg text-gray-600 mb-6 text-left sm:text-center">
              Our scooters aren't just a means of transport; they are a premium experience. We've selected models that offer superior comfort, safety, and performance.
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-green text-white flex items-center justify-center mr-4 mt-1">✓</div>
                <span><span className="font-semibold">Enhanced Safety:</span> Dual-disc brakes, LED lighting, and IoT-enabled tracking for a secure ride.</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-green text-white flex items-center justify-center mr-4 mt-1">✓</div>
                <span><span className="font-semibold">Superior Comfort:</span> Ergonomic design and advanced suspension for a smooth journey on any urban terrain.</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-green text-white flex items-center justify-center mr-4 mt-1">✓</div>
                <span><span className="font-semibold">Smart Integration:</span> Connect with our app to locate, book, and manage your ride seamlessly.</span>
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default FleetTechSection;
