import React, { useState } from 'react';
import Navbar, { ViewState } from './components/Navbar';
import Hero from './components/Hero';
import AIModels from './components/AIModels';
import Features from './components/Features';
import Trust from './components/Trust';
import Audience from './components/Audience';
import Products from './components/Products';
import Team from './components/Team';
import Careers from './components/Careers';
import Footer from './components/Footer';
import JoinAccessModal from './components/JoinAccessModal';
import InvestorModal from './components/InvestorModal';
import CrowdfundModal from './components/CrowdfundModal';
import FocusAreasPage from './components/FocusAreasPage';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';
import LegalPage from './components/LegalPage';
import { LanguageProvider } from './components/LanguageContext';

const AppContent: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isInvestorOpen, setIsInvestorOpen] = useState(false);
  const [isCrowdfundOpen, setIsCrowdfundOpen] = useState(false);
  
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [legalSection, setLegalSection] = useState<'privacy' | 'terms' | 'confidentiality'>('terms');

  const handleNavigate = (view: ViewState, section?: string) => {
    if (view === 'legal' && section) {
      setLegalSection(section as 'privacy' | 'terms' | 'confidentiality');
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderContent = () => {
    switch (currentView) {
      case 'team':
        return (
          <div className="pt-24 min-h-screen bg-slate-50">
            <Team />
          </div>
        );
      case 'focus':
        return (
          <div className="pt-24 min-h-screen bg-slate-50">
            <FocusAreasPage />
          </div>
        );
      case 'products':
        return (
          <div className="pt-24 min-h-screen bg-slate-50">
            <ProductsPage onJoinWaitlistClick={() => setIsWaitlistOpen(true)} />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-24 min-h-screen bg-slate-50">
            <ContactPage />
          </div>
        );
      case 'legal':
        return (
          <div className="pt-24 min-h-screen bg-slate-50">
            <LegalPage initialSection={legalSection} />
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <Hero 
              onJoinClick={() => setIsWaitlistOpen(true)} 
              onInvestorClick={() => setIsInvestorOpen(true)}
              onCrowdfundClick={() => setIsCrowdfundOpen(true)}
            />
            <Features />
            <Trust />
            <AIModels />
            <Audience />
            <Products onJoinWaitlistClick={() => setIsWaitlistOpen(true)} />
            <Careers />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
      
      {/* Modal Overlays */}
      <JoinAccessModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
      
      <InvestorModal 
        isOpen={isInvestorOpen}
        onClose={() => setIsInvestorOpen(false)}
      />

      <CrowdfundModal
        isOpen={isCrowdfundOpen}
        onClose={() => setIsCrowdfundOpen(false)}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;