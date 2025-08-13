
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">BikeBroo</h3>
            <p className="text-sm">Democratizing Dignified Mobility</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand-green transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-green transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-green transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-green transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BikeBroo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;