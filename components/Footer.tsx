
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Language } from '../translations';
import { Globe } from 'lucide-react';
import { ViewState } from './Navbar';

interface FooterProps {
  onNavigate?: (view: ViewState, section?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { content, language, setLanguage } = useLanguage();

  const handleLegalClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('legal', section);
    }
  };

  const handleNavClick = (e: React.MouseEvent, view: ViewState) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="text-white text-xl font-bold mb-4">Transnode AI, LLC</div>
          <p className="max-w-xs mb-4">
             {content.footer.tagline}
          </p>
          <div className="text-sm">
             <span className="block">{content.contact.locationDesc}</span>
             <a href="mailto:contact@transnode.ai" className="text-teal-400 hover:underline">contact@transnode.ai</a>
          </div>
          
          {/* BBB Seal for Desktop/Tablet */}
          <div className="mt-6 hidden md:block">
            <a href="https://www.bbb.org/us/ca/san-diego/profile/computer-software/transnode-ai-1126-1000160321/#sealclick" target="_blank" rel="nofollow">
              <img src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-293-61-whitetxt-bbb-1000160321.png" style={{ border: 0 }} alt="Transnode AI BBB Business Review" className="opacity-80 hover:opacity-100 transition-opacity max-h-[52px] w-auto" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">{content.footer.company}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#focus" onClick={(e) => handleNavClick(e, 'focus')} className="hover:text-teal-400 transition-colors">
                {content.nav.focus}
              </a>
            </li>
            <li>
              <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="hover:text-teal-400 transition-colors">
                {content.nav.team}
              </a>
            </li>
            <li>
              <a href="#careers" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-teal-400 transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">{content.footer.legal}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#privacy" onClick={(e) => handleLegalClick(e, 'privacy')} className="hover:text-teal-400 transition-colors">
                {content.legalPage.sidebar.privacy}
              </a>
            </li>
            <li>
              <a href="#terms" onClick={(e) => handleLegalClick(e, 'terms')} className="hover:text-teal-400 transition-colors">
                {content.legalPage.sidebar.terms}
              </a>
            </li>
            <li>
              <a href="#confidentiality" onClick={(e) => handleLegalClick(e, 'confidentiality')} className="hover:text-teal-400 transition-colors">
                {content.legalPage.sidebar.confidentiality}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Language Switcher & Copyright & Mobile BBB */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} {content.footer.rights}
          </div>
          {/* BBB Seal for Mobile */}
          <div className="md:hidden">
            <a href="https://www.bbb.org/us/ca/san-diego/profile/computer-software/transnode-ai-1126-1000160321/#sealclick" target="_blank" rel="nofollow">
              <img src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-293-61-whitetxt-bbb-1000160321.png" style={{ border: 0 }} alt="Transnode AI BBB Business Review" className="opacity-80 max-h-[48px] w-auto" />
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-lg">
           <Globe size={16} className="ml-2 text-slate-500" />
           {(['en', 'zh', 'es', 'ko'] as Language[]).map((lang) => (
             <button
               key={lang}
               onClick={() => setLanguage(lang)}
               className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                 language === lang 
                   ? 'bg-teal-600 text-white shadow-sm' 
                   : 'text-slate-400 hover:text-white hover:bg-slate-700'
               }`}
             >
               {lang === 'en' && 'English'}
               {lang === 'zh' && '中文'}
               {lang === 'es' && 'Español'}
               {lang === 'ko' && '한국어'}
             </button>
           ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
