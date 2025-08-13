
import React from 'react';

const InvestorSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-brand-dark rounded-lg p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Shaping the Future of Mobility</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            BikeBroo represents a unique investment opportunity in a high-growth market. Our scalable model, strong environmental impact, and clear path to profitability are set to redefine urban commuting in India.
          </p>
          <a
            href="/public/BikeBroo_Pitch_Deck.pdf"
            download="BikeBroo_Pitch_Deck.pdf"
            className="inline-block bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-10 rounded-full transition-transform transform hover:scale-105 duration-300"
          >
            Download Pitch Deck
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
