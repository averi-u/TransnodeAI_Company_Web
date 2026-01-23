
import React from 'react';
import { useLanguage } from './LanguageContext';
import { UserCheck, Zap, Users, Globe } from 'lucide-react';

const Audience: React.FC = () => {
  const { content } = useLanguage();
  
  // Icon mapping matching the order in translations file
  const icons = [UserCheck, Zap, Users, Globe];

  return (
    <section className="py-24 bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.audience.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{content.audience.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.audience.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4 text-teal-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audience;
