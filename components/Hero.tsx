import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import { useLanguage } from './LanguageContext';

interface HeroProps {
  onJoinClick: () => void;
  onInvestorClick: () => void;
  onCrowdfundClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick, onInvestorClick, onCrowdfundClick }) => {
  const { content } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-[#0A2540] text-white overflow-hidden pt-20">
      
      {/* 3D Background - Takes over the visual space */}
      <ThreeBackground />
      
      {/* Gradient overlay to ensure text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/80 to-transparent pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 w-full">
        
        {/* Copy */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse" style={{ animationDuration: '4s' }}></span>
            {content.hero.badge}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {content.hero.headlineStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">{content.hero.headlineHighlight}</span> {content.hero.headlineEnd}
          </h1>
          
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl border-l-2 border-teal-500/30 pl-6 bg-[#0A2540]/50 backdrop-blur-sm rounded-r-lg py-2">
            {content.hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <button 
              onClick={onJoinClick}
              className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group ring-1 ring-blue-400/20"
            >
              {content.hero.ctaPrimary}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onInvestorClick}
              className="px-8 py-4 rounded-lg border border-slate-600 hover:border-teal-400 hover:bg-teal-500/5 text-white font-medium transition-all backdrop-blur-sm"
            >
              {content.hero.ctaSecondary}
            </button>
            <button 
              onClick={onCrowdfundClick}
              className="px-8 py-4 rounded-lg bg-pink-500/10 border border-pink-500/30 hover:bg-pink-500/20 text-pink-100 font-medium transition-all flex items-center justify-center gap-2 hover:border-pink-400/50 backdrop-blur-sm"
            >
               <Heart size={18} className="text-pink-400" />
               {content.hero.ctaCrowdfund}
            </button>
          </div>
        </div>

        {/* Right side spacer to let the 3D object show through */}
        <div className="hidden md:block h-full min-h-[500px]">
             {/* The 3D background provides the visual here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;