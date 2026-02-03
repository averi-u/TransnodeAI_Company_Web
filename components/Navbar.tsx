
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import transnodeLogo from './Transnode_logo.png';

// Define the available views
export type ViewState = 'home' | 'team' | 'focus' | 'products' | 'contact' | 'legal';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: content.nav.focus, href: "#focus", view: 'focus' as ViewState },
    { label: content.nav.products, href: "#products", view: 'products' as ViewState },
    { label: content.nav.team, href: "#team", view: 'team' as ViewState },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: ViewState) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(view);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  const handleContactClick = () => {
    setIsOpen(false);
    onNavigate('contact');
  };

  // Force dark background if not on Home or if scrolled
  const showBackground = scrolled || currentView !== 'home';

  const isActive = (view: ViewState) => currentView === view;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        showBackground ? 'bg-[#0A2540]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" onClick={handleLogoClick} className="flex items-center space-x-3 group">
          <div className="w-10 h-10 shrink-0 rounded-lg overflow-hidden border border-white/5 shadow-sm bg-white flex items-center justify-center text-[#0A2540]">
            <img
            src={transnodeLogo}
            alt="Transnode Logo"
            className="w-full h-full object-contain p-0.5"
            />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors flex items-center gap-1.5">
            Transnode
            <span className="font-light text-teal-400">AI, LLC</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.view)}
              className={`text-sm font-medium hover:underline decoration-teal-500 decoration-2 underline-offset-4 transition-colors ${
                 isActive(link.view) ? 'text-teal-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={handleContactClick}
            className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${currentView === 'contact' ? 'bg-teal-600 border-teal-600 text-white' : 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-teal-400/50'}`}
          >
            {content.nav.contact}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A2540] absolute w-full px-6 py-8 border-t border-slate-700 shadow-2xl h-screen top-full left-0">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`text-xl font-medium border-b border-white/10 pb-4 ${
                    isActive(link.view) ? 'text-teal-400' : 'text-white'
                }`}
                onClick={(e) => handleLinkClick(e, link.view)}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={handleContactClick}
              className={`w-full py-4 mt-4 rounded-lg font-bold ${currentView === 'contact' ? 'bg-teal-600 text-white' : 'bg-white/10 text-white border border-white/20'}`}
            >
              {content.nav.contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
