import React from 'react';
import { Sparkles, ArrowRight, Layers, Cpu, Shield } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface ProductsPageProps {
  onJoinWaitlistClick: () => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onJoinWaitlistClick }) => {
  const { content } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
           <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">{content.products.label}</span>
           <h1 className="text-4xl font-bold text-[#0A2540] mt-2 mb-4">{content.products.roadmapTitle}</h1>
           <p className="text-lg text-slate-600 max-w-2xl">
             {content.products.roadmapDesc}
           </p>
        </div>
        <button 
           onClick={onJoinWaitlistClick}
           className="px-6 py-3 bg-[#0A2540] text-white font-bold rounded-lg shadow-lg hover:bg-blue-900 transition-colors flex items-center gap-2"
        >
           {content.products.earlyAccessBtn} <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid gap-10">
        {content.products.items.map((product, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between md:items-start mb-8 gap-4 border-b border-slate-100 pb-8">
                <div>
                   <div className="flex items-center gap-4 mb-3">
                     <h2 className="text-3xl font-bold text-[#0A2540]">{product.name}</h2>
                     <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Beta</span>
                   </div>
                   <p className="text-xl text-slate-500 font-medium italic">{product.tagline}</p>
                </div>
                <div className="flex gap-2">
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500" title="API Ready"><Cpu size={20} /></div>
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500" title="Secure"><Shield size={20} /></div>
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500" title="Modular"><Layers size={20} /></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="col-span-1 md:col-span-1">
                    <h3 className="font-bold text-[#0A2540] mb-4 flex items-center gap-2">
                      <Sparkles size={18} className="text-teal-500" /> Core Features
                    </h3>
                    <ul className="space-y-3">
                      {product.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-slate-700 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                 </div>

                 <div className="col-span-1 md:col-span-2 bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-bold text-[#0A2540] mb-4 text-sm uppercase tracking-wide">Technical Highlights (Placeholder)</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                       <div className="space-y-1">
                          <p className="font-semibold text-slate-800 text-sm">Integration</p>
                          <p className="text-xs text-slate-500">RESTful API with Webhook support for real-time data sync.</p>
                       </div>
                       <div className="space-y-1">
                          <p className="font-semibold text-slate-800 text-sm">Security</p>
                          <p className="text-xs text-slate-500">SOC2 compliant infrastructure with end-to-end encryption.</p>
                       </div>
                       <div className="space-y-1">
                          <p className="font-semibold text-slate-800 text-sm">Scalability</p>
                          <p className="text-xs text-slate-500">Built on distributed cloud architecture for global availability.</p>
                       </div>
                       <div className="space-y-1">
                          <p className="font-semibold text-slate-800 text-sm">Analytics</p>
                          <p className="text-xs text-slate-500">Comprehensive dashboard with exportable PDF/CSV reports.</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;