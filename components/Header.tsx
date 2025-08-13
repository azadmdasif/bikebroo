
import React, { useState, useEffect } from 'react';
import { SectionRefs, NavLink } from '../types';
import { MenuIcon, XIcon, ScooterIcon } from './icons';

interface HeaderProps {
  sections: SectionRefs;
  scrollToSection: (section: React.RefObject<HTMLDivElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ sections, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'Vision', sectionKey: 'vision' },
    { name: 'How It Works', sectionKey: 'features' },
    { name: 'Market', sectionKey: 'market' },
    { name: 'Pricing', sectionKey: 'pricing' },
    { name: 'Investors', sectionKey: 'investors' },
    { name: 'Contact', sectionKey: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionKey: keyof SectionRefs) => {
    scrollToSection(sections[sectionKey]);
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleLinkClick('home')}
          >
            <ScooterIcon className="h-8 w-8 text-brand-green" />
            <span className="ml-2 text-2xl font-bold text-brand-dark">BikeBroo</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.sectionKey)}
                className="text-gray-600 hover:text-brand-green font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XIcon className="h-6 w-6 text-brand-dark" /> : <MenuIcon className="h-6 w-6 text-brand-dark" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-sm`}>
        <nav className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.sectionKey)}
              className="text-gray-600 hover:text-brand-green font-medium text-lg"
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;