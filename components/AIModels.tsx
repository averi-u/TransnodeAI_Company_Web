
import React, { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const AIModels: React.FC = () => {
  const { content } = useLanguage();

  useEffect(() => {
    // Inject the BBB legacy script for the dynamic badge functionality
    const script = document.createElement('script');
    script.src = "https://seal-central-northern-western-arizona.bbb.org/inc/legacy.js";
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount if necessary
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-12 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Partner With Section */}
        <div className="mb-16">
            <p className="text-center text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-8">
              Partner With
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               {/* IBM Startup Partner Plus */}
               <a href="https://www.ibm.com/partnerplus" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 transition-transform hover:scale-105 group">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                   alt="IBM" 
                   className="h-8 md:h-10 w-auto" 
                 />
                 <div className="flex flex-col text-[11px] font-bold text-slate-700 leading-tight uppercase tracking-wide text-left group-hover:text-[#0530ad] transition-colors">
                   <span>Startup</span>
                   <span>Partner Plus</span>
                 </div>
               </a>

               {/* Notion for Startups */}
               <a href="https://www.notion.so/startups" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 transition-transform hover:scale-105 group">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" 
                   alt="Notion" 
                   className="h-8 md:h-10 w-auto" 
                 />
                 <div className="flex flex-col text-[11px] font-bold text-slate-700 leading-tight uppercase tracking-wide text-left group-hover:text-black transition-colors">
                   <span>Notion for</span>
                   <span>Startups</span>
                 </div>
               </a>

               {/* BBB Badge - Moved to the right-most position */}
               <a href="https://www.bbb.org/us/ca/san-diego/profile/computer-software/transnode-ai-1126-1000160321/#sealclick" id="bbblink" className="ruhzbum transition-transform hover:scale-105" target="_blank" rel="nofollow">
                 <img 
                   src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-69-145-bbb-1000160321.png" 
                   style={{ border: 0 }} 
                   alt="Transnode AI BBB Business Review" 
                   className="h-16 md:h-20 w-auto"
                 />
               </a>
            </div>
        </div>

        {/* AI Models Section */}
        <div>
            <p className="text-center text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-10">
              {content.aiModels.title}
            </p>
            
            {/* Logos Container */}
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               
               {/* OpenAI */}
               <a href="https://openai.com" target="_blank" rel="noreferrer" className="flex items-center justify-center transition-transform hover:scale-105">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" 
                   alt="OpenAI" 
                   className="h-6 md:h-7 w-auto" 
                 />
               </a>

               {/* Gemini */}
               <a href="https://deepmind.google/technologies/gemini/" target="_blank" rel="noreferrer" className="flex items-center justify-center transition-transform hover:scale-105">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" 
                   alt="Google Gemini" 
                   className="h-8 md:h-9 w-auto" 
                 />
               </a>

               {/* Claude (Anthropic) */}
               <a href="https://www.anthropic.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2.5 transition-transform hover:scale-105">
                 {/* Anthropic 'A' Symbol */}
                 <svg viewBox="0 0 24 24" className="h-6 md:h-7 w-auto fill-current text-[#1c1c1c]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8 19.333h-2.333l-1.35-3.6H8.883l-1.35 3.6H5.2L12 1.333l6.8 18ZM10.05 12.733h3.9l-1.95-5.366-1.95 5.366Z" />
                 </svg>
                 <span className="font-serif text-xl md:text-2xl font-semibold text-[#1c1c1c] tracking-tight mt-0.5">Claude</span>
               </a>

               {/* Meta Llama */}
               <a href="https://llama.meta.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 transition-transform hover:scale-105">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" 
                   alt="Meta" 
                   className="h-5 md:h-6 w-auto" 
                 />
                 <span className="font-bold text-slate-800 text-lg md:text-xl tracking-tight leading-none mt-0.5">Llama</span>
               </a>

            </div>
        </div>
      </div>
    </section>
  );
};

export default AIModels;
