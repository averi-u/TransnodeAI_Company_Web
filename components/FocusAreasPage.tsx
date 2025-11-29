import React from 'react';
import { ShieldCheck, BookOpen, Network, Zap, HelpCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const FocusAreasPage: React.FC = () => {
  const { content } = useLanguage();
  const icons = [ShieldCheck, BookOpen, Network, Zap];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-12 text-center md:text-left">
        <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Our Core Pillars</span>
        <h1 className="text-4xl font-bold text-[#0A2540] mt-2 mb-4">{content.features.title}</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          At Transnode AI, we are dedicated to solving critical challenges in education, research, and global commerce.
          Here is a deeper look into the problems we solve and the value we deliver.
        </p>
      </div>
      
      <div className="grid gap-8 mb-20">
        {content.features.items.map((feature, idx) => {
          const Icon = icons[idx];
          return (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow">
              <div className="shrink-0">
                 <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600">
                   <Icon size={40} />
                 </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">{feature.title}</h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">{feature.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                   <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <h4 className="font-semibold text-[#0A2540] text-sm mb-2">The Challenge</h4>
                      <p className="text-sm text-slate-500">
                        {feature.challenge || "Identifying key inefficiencies in current systems to better serve stakeholders."}
                      </p>
                   </div>
                   <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-blue-900 text-sm mb-2">Our Solution</h4>
                      <p className="text-sm text-blue-800/70">
                        {feature.solution || "Deploying intelligent models to increase efficiency and accuracy by order of magnitude."}
                      </p>
                   </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="border-t border-slate-100 pt-16">
        <h2 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">{content.faq.title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.faq.items.map((item, idx) => (
             <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-teal-200 transition-colors">
                <h3 className="font-bold text-[#0A2540] text-lg mb-3 flex items-start gap-3">
                   <HelpCircle className="text-teal-500 shrink-0 mt-1" size={20} />
                   {item.question}
                </h3>
                <p className="text-slate-600 ml-8 text-sm leading-relaxed">{item.answer}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusAreasPage;