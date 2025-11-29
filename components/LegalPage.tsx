import React, { useState, useEffect } from 'react';
import { Shield, Lock, FileText, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface LegalPageProps {
  initialSection?: 'privacy' | 'terms' | 'confidentiality';
}

const LegalPage: React.FC<LegalPageProps> = ({ initialSection = 'terms' }) => {
  const { content } = useLanguage();
  const [activeSection, setActiveSection] = useState<'privacy' | 'terms' | 'confidentiality'>(initialSection);

  useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection]);

  const navItems = [
    { id: 'privacy', label: content.legalPage.sidebar.privacy, icon: Shield },
    { id: 'terms', label: content.legalPage.sidebar.terms, icon: FileText },
    { id: 'confidentiality', label: content.legalPage.sidebar.confidentiality, icon: Lock },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation */}
        <div className="md:w-1/4 shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-28">
            <h2 className="text-lg font-bold text-[#0A2540] mb-6 px-2">{content.legalPage.title}</h2>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as any)}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-all ${
                    activeSection === item.id 
                      ? 'bg-teal-50 text-teal-700 font-semibold' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={activeSection === item.id ? 'text-teal-600' : 'text-slate-400'} />
                    {item.label}
                  </div>
                  {activeSection === item.id && <ChevronRight size={16} className="text-teal-600" />}
                </button>
              ))}
            </div>
            <div className="mt-8 px-4 py-4 bg-slate-50 rounded-lg text-xs text-slate-500 border border-slate-100">
               {content.legalPage.updated}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 min-h-[600px]">
             
             {activeSection === 'privacy' && (
                <div className="animate-fade-in">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                         <Shield size={28} />
                      </div>
                      <h1 className="text-3xl font-bold text-[#0A2540]">{content.legalPage.privacy.title}</h1>
                   </div>
                   <div className="space-y-6 text-slate-600 leading-relaxed">
                      {content.legalPage.privacy.content.map((paragraph, idx) => (
                         <p key={idx}>{paragraph}</p>
                      ))}
                   </div>
                </div>
             )}

             {activeSection === 'terms' && (
                <div className="animate-fade-in">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                         <FileText size={28} />
                      </div>
                      <h1 className="text-3xl font-bold text-[#0A2540]">{content.legalPage.terms.title}</h1>
                   </div>
                   <div className="space-y-6 text-slate-600 leading-relaxed">
                      {content.legalPage.terms.content.map((paragraph, idx) => (
                         <p key={idx}>{paragraph}</p>
                      ))}
                   </div>
                </div>
             )}

             {activeSection === 'confidentiality' && (
                <div className="animate-fade-in">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                         <Lock size={28} />
                      </div>
                      <h1 className="text-3xl font-bold text-[#0A2540]">{content.legalPage.confidentiality.title}</h1>
                   </div>
                   <div className="space-y-6 text-slate-600 leading-relaxed">
                      {content.legalPage.confidentiality.content.map((paragraph, idx) => (
                         <p key={idx}>{paragraph}</p>
                      ))}
                   </div>
                </div>
             )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;