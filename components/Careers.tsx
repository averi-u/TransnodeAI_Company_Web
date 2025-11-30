import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Careers: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#0A2540] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                <Briefcase size={32} className="text-teal-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.careers.title}</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
              {content.careers.description}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://www.indeed.com/viewjob?jk=98d83ed93e6e32f3&from=shareddesktop_copy"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 rounded-lg bg-teal-500 text-[#0A2540] font-bold hover:bg-teal-400 transition-colors inline-flex items-center justify-center"
              >
                {content.careers.btnApply}
              </a>
              <a 
                href="mailto:contact@transnode.ai?subject=UCSD%20Student%20Inquiry"
                className="px-8 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                {content.careers.btnStudent}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;