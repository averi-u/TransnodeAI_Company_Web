import React from 'react';
import { useLanguage } from './LanguageContext';
import { ShieldCheck, BookOpen, Network, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const { content } = useLanguage();
  
  // Map icons to the translated items based on index order which matches constant order
  const icons = [ShieldCheck, BookOpen, Network, Zap];

  return (
    <section id="focus" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">{content.features.title}</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {content.features.items.map((feature, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 group">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                  <Icon className="text-teal-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;