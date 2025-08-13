
import React from 'react';

const AboutUsSection: React.FC = () => {
  const team = [
    { name: 'Aarav Sharma', role: 'Founder & CEO', image: 'https://picsum.photos/seed/ceo/400/400' },
    { name: 'Priya Singh', role: 'CTO', image: 'https://picsum.photos/seed/cto/400/400' },
    { name: 'Rohan Mehta', role: 'Head of Operations', image: 'https://picsum.photos/seed/ops/400/400' },
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Meet the Team</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We are a passionate team of engineers, designers, and strategists committed to solving India's mobility challenges.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-brand-green"
              />
              <h3 className="text-xl font-bold text-brand-dark">{member.name}</h3>
              <p className="text-brand-green font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
