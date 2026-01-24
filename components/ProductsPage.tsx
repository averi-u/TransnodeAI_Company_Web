
import React from 'react';
import { Sparkles, Layers, Cpu, Shield, ArrowRight, ExternalLink, Briefcase, CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { PRODUCTS } from '../constants';

interface ProductsPageProps {
  onJoinWaitlistClick: () => void;
  onQuoteClick: () => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onJoinWaitlistClick, onQuoteClick }) => {
  const { content } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
           <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">{content.products.label}</span>
           <h1 className="text-4xl font-bold text-[#0A2540] mt-2 mb-4">{content.products.roadmapTitle}</h1>
           <p className="text-lg text-slate-600 max-w-2xl">
             {content.products.roadmapDesc}
           </p>
        </div>
        {/* Redirect Button to Google Slides Presentation */}
        <a 
          href="https://docs.google.com/presentation/d/1q_dOQSRppZY3fxlJXtKyD5oELZuB93xff40W3weMJQU/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-[#0A2540] hover:bg-teal-600 text-white font-bold rounded-lg transition-all shadow-md flex items-center gap-2"
        >
          {content.products.earlyAccessBtn}
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Product Pipeline Grid */}
      <div className="grid gap-12">
        {content.products.items.map((product, idx) => {
          const isService = PRODUCTS[idx]?.isService;
          
          return (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between md:items-start mb-8 gap-4 border-b border-slate-100 pb-8">
                <div>
                   <div className="flex items-center gap-4 mb-3">
                     <h2 className="text-3xl font-bold text-[#0A2540]">{product.name}</h2>
                     <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${isService ? 'bg-blue-100 text-blue-800' : 'bg-teal-100 text-teal-800'}`}>
                       {isService ? 'Active' : 'Beta'}
                     </span>
                   </div>
                   <p className="text-xl text-slate-500 font-medium italic">{product.tagline}</p>
                </div>
                <div className="flex gap-2">
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500" title="API Ready"><Cpu size={20} /></div>
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500" title="Secure"><Shield size={20} /></div>
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500" title="Modular"><Layers size={20} /></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-12 gap-8">
                 <div className="md:col-span-4">
                    <h3 className="font-bold text-[#0A2540] mb-4 flex items-center gap-2">
                      <Sparkles size={18} className="text-teal-500" /> {isService ? 'Key Deliverables' : 'Core Features'}
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {product.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-slate-700 text-sm">
                          <CheckCircle2 className="text-teal-500 mt-0.5 shrink-0" size={16} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={isService ? onQuoteClick : onJoinWaitlistClick}
                      className={`px-6 py-3 rounded-lg font-bold transition-all shadow-md flex items-center gap-2 ${
                        isService 
                        ? 'bg-[#0A2540] text-white hover:bg-teal-600' 
                        : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {isService ? content.products.quoteBtn : content.products.waitlistBtn}
                      <ArrowRight size={18} />
                    </button>
                 </div>

                 <div className="md:col-span-8 flex flex-col gap-6">
                    {/* Conditional Rendering for Service Box: Client Success Portfolio */}
                    {isService ? (
                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                        <a 
                          href="https://docs.google.com/spreadsheets/d/1Xv5K8_4Lh7H5rK9vWqX-F8y2E0H6_j-F0F_X_l_k_l_w/edit?usp=sharing"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-bold text-[#0A2540] mb-6 text-sm uppercase tracking-wider hover:text-teal-600 transition-colors group"
                        >
                           <Briefcase size={16} className="text-teal-600" />
                           {content.products.pastProjectsTitle}
                           <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <div className="flex flex-col gap-4">
                           {content.products.pastProjects.map((project, pIdx) => (
                             <div 
                               key={pIdx} 
                               className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-slate-700"
                             >
                               <span className="font-bold text-[#0A2540]">{project.name}:</span>
                               <a 
                                 href={project.link} 
                                 target="_blank" 
                                 rel="noreferrer"
                                 className="text-teal-600 hover:text-teal-500 hover:underline flex items-center gap-1 transition-all"
                               >
                                  {project.url}
                                  <ExternalLink size={12} className="opacity-70" />
                               </a>
                             </div>
                           ))}
                        </div>
                      </div>
                    ) : (
                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full">
                        <h3 className="font-bold text-[#0A2540] mb-4 text-sm uppercase tracking-wide">Technical Highlights</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                           <div className="space-y-1">
                              <p className="font-semibold text-slate-800 text-sm">Integration</p>
                              <p className="text-xs text-slate-500 leading-relaxed">RESTful API with Webhook support for real-time data sync across platforms.</p>
                           </div>
                           <div className="space-y-1">
                              <p className="font-semibold text-slate-800 text-sm">Security</p>
                              <p className="text-xs text-slate-500 leading-relaxed">SOC2 compliant infrastructure with end-to-end encryption protocols.</p>
                           </div>
                           <div className="space-y-1">
                              <p className="font-semibold text-slate-800 text-sm">Scalability</p>
                              <p className="text-xs text-slate-500 leading-relaxed">Built on distributed cloud architecture optimized for high-volume verification.</p>
                           </div>
                           <div className="space-y-1">
                              <p className="font-semibold text-slate-800 text-sm">Analytics</p>
                              <p className="text-xs text-slate-500 leading-relaxed">Comprehensive dashboard with automated reporting and deep-insight exports.</p>
                           </div>
                        </div>
                      </div>
                    )}
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
