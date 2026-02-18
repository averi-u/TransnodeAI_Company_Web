
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Language } from '../translations';
import { Globe, ShieldCheck } from 'lucide-react';
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

  const E_VERIFY_URL = "https://image2url.com/r2/default/images/1771036150475-b62cdba1-ca69-49e3-b263-e69892119176.png";
  const E_VERIFY_LINK = "https://drive.google.com/file/d/13tnxeSEUnQnsfMTCM2Jkc5cpaUXXnC0i/view?usp=sharing";

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
          
          {/* Trust Seals for Desktop/Tablet */}
          <div className="mt-8 hidden md:flex items-center gap-6">
            <a href="https://www.bbb.org/us/ca/san-diego/profile/computer-software/transnode-ai-1126-1000160321/#sealclick" target="_blank" rel="nofollow" className="transition-transform hover:scale-105">
              <img 
                src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-293-61-whitetxt-bbb-1000160321.png" 
                style={{ border: 0 }} 
                alt="Transnode AI BBB Business Review" 
                className="opacity-80 hover:opacity-100 transition-opacity max-h-[52px] w-auto" 
              />
            </a>
            <a href={E_VERIFY_LINK} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 flex flex-col items-center">
              <img 
                src={E_VERIFY_URL} 
                alt="E-Verify Participant" 
                className="opacity-80 hover:opacity-100 transition-opacity max-h-[52px] w-auto" 
              />
              <span className="text-[10px] uppercase font-bold tracking-wider mt-1 text-slate-500">E-Verify Participant</span>
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
              <a 
                href="https://www.transnode.ai/privacypolicy" 
                onClick={(e) => handleLegalClick(e, 'privacy')} 
                className="hover:text-teal-400 transition-colors"
              >
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

      {/* Language Switcher & Copyright & Mobile Trust Seals */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} {content.footer.rights}
          </div>
          {/* Trust Seals for Mobile */}
          <div className="md:hidden flex flex-wrap justify-center items-center gap-6 mt-2">
            <a href="https://www.bbb.org/us/ca/san-diego/profile/computer-software/transnode-ai-1126-1000160321/#sealclick" target="_blank" rel="nofollow">
              <img 
                src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-293-61-whitetxt-bbb-1000160321.png" 
                style={{ border: 0 }} 
                alt="Transnode AI BBB Business Review" 
                className="opacity-80 max-h-[38px] w-auto" 
              />
            </a>
            <a href={E_VERIFY_LINK} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img 
                src={E_VERIFY_URL} 
                alt="E-Verify Participant" 
                className="opacity-80 max-h-[38px] w-auto" 
              />
              <span className="text-[8px] uppercase font-bold tracking-wider mt-1 text-slate-500">E-Verify Participant</span>
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
