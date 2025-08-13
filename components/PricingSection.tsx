
import React from 'react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Pay As You Go',
      price: '₹1.5/min',
      description: 'Perfect for single trips and occasional rides.',
      features: ['No commitment', 'Standard access', 'Pay per minute'],
      popular: false,
    },
    {
      name: 'Daily Pass',
      price: '₹499',
      description: 'Ideal for tourists or a full day of errands.',
      features: ['Unlimited rides for 24 hours', 'Priority access', 'Free battery swaps'],
      popular: true,
    },
    {
      name: 'Monthly Subscription',
      price: '₹1499',
      description: 'Best value for daily commuters.',
      features: ['90 minutes free daily', 'Premium support', 'Reserved bookings'],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Affordable & Transparent Pricing</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Choose a plan that fits your life. No hidden fees, ever.</p>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative p-8 bg-white rounded-xl shadow-lg flex flex-col ${plan.popular ? 'border-2 border-brand-green' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-green text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>
              )}
              <h3 className="text-2xl font-bold text-brand-dark">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-brand-dark my-4">{plan.price}</p>
              <p className="text-gray-500 mb-6 flex-grow">{plan.description}</p>
              <ul className="space-y-3 text-left mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-brand-green mr-3">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`mt-auto w-full py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-105 ${plan.popular ? 'bg-brand-green text-white' : 'bg-gray-200 text-brand-dark hover:bg-gray-300'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
