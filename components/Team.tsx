import React from 'react';
import { Shield, Rocket, Compass, Globe, Zap, Brain, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Team: React.FC = () => {
  const { content } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    compass: <Compass size={32} className="text-teal-500" />,
    rocket: <Rocket size={32} className="text-blue-500" />,
    shield: <Shield size={32} className="text-indigo-500" />,
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Section 1: Hero Block */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto text-center relative z-10">
           {/* Subtle Floating Icons */}
           <div className="absolute top-0 left-10 text-slate-200 animate-pulse delay-100 hidden md:block"><Globe size={48} /></div>
           <div className="absolute top-10 right-20 text-slate-200 animate-pulse delay-300 hidden md:block"><Brain size={48} /></div>
           
           <h1 className="text-5xl md:text-6xl font-bold text-[#0A2540] mb-6 tracking-tight">
             {content.team.hero.title}
           </h1>
           <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-8"></div>
           <p className="text-xl text-slate-600 leading-relaxed">
             {content.team.hero.subheading}
           </p>
        </div>
      </section>

      {/* Section 2: Team Philosophy */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A2540] text-center mb-16">{content.team.philosophy.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.team.philosophy.items.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Founding Team Summary */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
             <h2 className="text-3xl font-bold text-[#0A2540] mb-6">{content.team.founding.title}</h2>
             <p className="text-lg font-medium text-slate-700 mb-6">{content.team.founding.intro}</p>
             <ul className="space-y-4 mb-8">
               {content.team.founding.bullets.map((point, idx) => (
                 <li key={idx} className="flex items-start gap-3 text-slate-600">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 shrink-0"></div>
                   <span>{point}</span>
                 </li>
               ))}
             </ul>
             <p className="text-slate-500 italic border-l-4 border-teal-500 pl-4 py-2 bg-teal-50/50 rounded-r-lg">
               {content.team.founding.closing}
             </p>
          </div>

          {/* Abstract Avatars Visual */}
          <div className="grid grid-cols-2 gap-6 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-teal-500/5 rounded-full blur-3xl -z-10"></div>
             
             {/* Card 1 */}
             <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 mb-4 flex items-center justify-center text-blue-500 font-bold text-xl">
                  Eng
                </div>
                <div className="font-bold text-[#0A2540]">Engineering Lead</div>
                <div className="text-xs text-slate-400 mt-1">Distributed Systems</div>
             </div>

             {/* Card 2 */}
             <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center transform translate-y-8 hover:translate-y-6 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 mb-4 flex items-center justify-center text-teal-500 font-bold text-xl">
                  Res
                </div>
                <div className="font-bold text-[#0A2540]">Research Lead</div>
                <div className="text-xs text-slate-400 mt-1">AI/ML Operations</div>
             </div>

             {/* Card 3 */}
             <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center col-span-2 w-2/3 mx-auto transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-50 mb-4 flex items-center justify-center text-indigo-500 font-bold text-xl">
                  Prod
                </div>
                <div className="font-bold text-[#0A2540]">Product Lead</div>
                <div className="text-xs text-slate-400 mt-1">Cross-Border Strategy</div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: Advisors & Collaborators */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-6">{content.team.advisors.title}</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            {content.team.advisors.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {content.team.advisors.areas.map((area, idx) => (
              <span key={idx} className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-500" />
                {area}
              </span>
            ))}
          </div>

          <p className="text-slate-500 text-sm max-w-lg mx-auto">
             {content.team.advisors.closing}
          </p>
        </div>
      </section>

      {/* Section 5: Opportunities */}
      <section className="py-24 px-6 bg-[#0A2540] text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
           <h2 className="text-4xl md:text-5xl font-bold mb-6">{content.team.opportunities.title}</h2>
           <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
             {content.team.opportunities.description}
           </p>
           
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 text-left max-w-3xl mx-auto">
             {content.team.opportunities.roles.map((role, idx) => (
               <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                 <Zap size={20} className="text-teal-400 shrink-0" />
                 <span className="font-medium text-slate-200">{role}</span>
               </div>
             ))}
           </div>

           <p className="text-slate-400 mb-8">{content.team.opportunities.closing}</p>

           <a 
             href="mailto:contact@transnode.ai?subject=Internship%20Application"
             className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold rounded-lg shadow-lg shadow-teal-500/20 transition-all transform hover:scale-105"
           >
             {content.team.opportunities.button}
             <ArrowRight size={20} />
           </a>
        </div>
      </section>

    </div>
  );
};

export default Team;