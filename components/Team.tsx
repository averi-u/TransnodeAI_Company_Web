import React from 'react';
import { Linkedin, Globe, Github, Code2, Cpu } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Team: React.FC = () => {
  const { content } = useLanguage();

  // Images and icons can remain static or be moved to translations if they needed to vary by language (unlikely for images)
  const memberMetadata = [
    {
      image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&skinColor=f5d033&hairColor=2c1b18&top=shortFlat&clothing=collarAndSweater&accessories=glasses", 
      icon: Globe
    },
    {
      image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kim&skinColor=f5d033&hairColor=2c1b18&top=longHairStraight&clothing=hoodie",
      icon: Cpu
    },
    {
      image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Hiro&skinColor=f5d033&hairColor=2c1b18&top=shortWaved&clothing=graphicShirt",
      icon: Code2
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">{content.team.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mt-2 mb-4">{content.team.title}</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {content.team.description}
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
            {content.team.members.map((member, idx) => {
                const meta = memberMetadata[idx];
                return (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col items-center text-center relative overflow-hidden">
                      {/* Hover Top Border */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                      <div className="w-40 h-40 mb-6 relative">
                          <div className="absolute inset-0 bg-teal-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <img 
                              src={meta.image} 
                              alt={member.name}
                              className="w-full h-full object-cover rounded-full border-4 border-slate-50 shadow-md group-hover:scale-105 transition-transform duration-500 bg-teal-50/30"
                          />
                          <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-slate-100 text-teal-600">
                             <meta.icon size={18} />
                          </div>
                      </div>
                      
                      <div className="mb-4">
                          <h3 className="text-2xl font-bold text-[#0A2540] mb-1">{member.name}</h3>
                          <p className="text-teal-600 font-medium text-sm tracking-wide uppercase">{member.role}</p>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-8 text-sm flex-grow">
                          {member.bio}
                      </p>

                      <div className="flex gap-4">
                           <a href="#" className="p-2.5 bg-slate-50 text-slate-400 rounded-full hover:bg-[#0077b5] hover:text-white transition-all">
                               <Linkedin size={18} />
                           </a>
                           <a href="#" className="p-2.5 bg-slate-50 text-slate-400 rounded-full hover:bg-black hover:text-white transition-all">
                               <Github size={18} />
                           </a>
                           {idx === 0 && (
                              <a href="#" className="p-2.5 bg-slate-50 text-slate-400 rounded-full hover:bg-black hover:text-white transition-all group/x">
                                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                  </svg>
                              </a>
                           )}
                      </div>
                  </div>
                );
            })}
        </div>

        {/* Network / Team Text */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left border-t border-slate-200 pt-12">
            {content.team.network.map((item, idx) => (
              <div key={idx}>
                 <h4 className="font-bold text-[#0A2540] text-lg mb-2">{item.title}</h4>
                 <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;