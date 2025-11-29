import React from 'react';
import { useLanguage } from './LanguageContext';

const AIModels: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section className="py-12 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-10">
          {content.aiModels.title}
        </p>
        
        {/* Logos Container */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           
           {/* OpenAI */}
           <a href="https://openai.com" target="_blank" rel="noreferrer" className="flex items-center justify-center transition-transform hover:scale-105">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" 
               alt="OpenAI" 
               className="h-6 md:h-8 w-auto" 
             />
           </a>

           {/* Gemini */}
           <a href="https://deepmind.google/technologies/gemini/" target="_blank" rel="noreferrer" className="flex items-center justify-center transition-transform hover:scale-105">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" 
               alt="Google Gemini" 
               className="h-8 md:h-10 w-auto" 
             />
           </a>

           {/* Claude (Anthropic) */}
           <a href="https://www.anthropic.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 transition-transform hover:scale-105">
             {/* Anthropic 'A' Symbol (Custom SVG for reliability) */}
             <svg viewBox="0 0 24 24" className="h-6 md:h-8 w-auto fill-current text-[#1c1c1c]" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.8 19.333h-2.333l-1.35-3.6H8.883l-1.35 3.6H5.2L12 1.333l6.8 18ZM10.05 12.733h3.9l-1.95-5.366-1.95 5.366Z" />
             </svg>
             <span className="font-serif text-2xl font-semibold text-[#1c1c1c] tracking-tight">Claude</span>
           </a>

           {/* Meta Llama */}
           <a href="https://llama.meta.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 transition-transform hover:scale-105">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" 
               alt="Meta" 
               className="h-5 md:h-6 w-auto" 
             />
             <span className="font-bold text-slate-800 text-xl tracking-tight leading-none">Llama</span>
           </a>

        </div>
      </div>
    </section>
  );
};

export default AIModels;