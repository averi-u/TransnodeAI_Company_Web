import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface ProductsProps {
  onJoinWaitlistClick: () => void;
}

const Products: React.FC<ProductsProps> = ({ onJoinWaitlistClick }) => {
  const { content } = useLanguage();

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
             <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">{content.products.label}</span>
             <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mt-2">{content.products.title}</h2>
          </div>
          <button className="flex items-center gap-2 text-[#0A2540] font-semibold border-b-2 border-teal-500 pb-1 hover:text-teal-600 transition-colors">
            {content.products.roadmapBtn} <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.products.items.map((product, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col h-full">
              <div className="mb-6">
                <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded uppercase">Coming Soon</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540]">{product.name}</h3>
              <p className="text-slate-500 font-medium mb-6 italic">{product.tagline}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {product.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-slate-700">
                    <Sparkles className="text-teal-500 shrink-0 mt-1" size={14} />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={onJoinWaitlistClick}
                className="w-full py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:border-[#0A2540] hover:bg-[#0A2540] hover:text-white transition-all duration-300"
              >
                {content.products.waitlistBtn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;