
import React from 'react';

const MarketOpportunitySection: React.FC = () => {
  const stats = [
    { value: '120M+', label: 'Daily Commuters in India' },
    { value: '10%', label: 'Market Growth (YoY)' },
    { value: '$115B', label: 'Current Market Size' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">The Future of Urban Mobility is Here</h2>
            <p className="text-lg text-gray-600 mb-6">
              India's urban landscape is ripe for disruption. With rising fuel costs, traffic congestion, and a growing demand for sustainable solutions, BikeBroo is perfectly positioned. Government initiatives like FAME II subsidies and new battery swapping policies create a highly favorable environment for rapid growth.
            </p>
            <p className="text-gray-600">
              We differentiate ourselves by focusing on a premium, safe, and reliable service powered by our unique hub-and-spoke and BaaS model, addressing key pain points that competitors overlook.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-brand-light p-6 rounded-lg shadow-md">
                <p className="text-4xl font-extrabold text-brand-green">{stat.value}</p>
                <p className="text-gray-600 font-medium mt-2">{stat.label}</p>
              </div>
            ))}
             <div className="sm:col-span-3 bg-brand-light p-6 rounded-lg shadow-md">
                <p className="text-3xl font-extrabold text-brand-green">Government Support</p>
                <p className="text-gray-600 font-medium mt-2">FAME II Subsidies & Battery Swapping Policies</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunitySection;