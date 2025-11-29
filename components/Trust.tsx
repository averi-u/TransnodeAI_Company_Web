import React from 'react';
import { CheckCircle2, Lock } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Trust: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-6">
              {content.trust.title}
            </h2>
            <div className="space-y-4">
              {content.trust.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-500 shrink-0 mt-1" size={20} />
                  <p className="text-slate-700 font-medium">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3">
              <Lock className="text-[#0A2540] shrink-0 mt-1" size={20} />
              <p className="text-sm text-slate-600">
                {content.trust.nda}
              </p>
            </div>
          </div>

          {/* Visual Representation of Trust/Collaboration */}
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Diverse team collaborating in a modern office" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent"></div>
             
             <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-semibold text-lg mb-1">{content.trust.collaborationTitle}</p>
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                   <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                   {content.trust.collaborationBadge}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trust;