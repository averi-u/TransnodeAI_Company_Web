import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, MapPin, TrendingUp, Send, User, MessageSquare, Loader2, Youtube } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const ContactPage: React.FC = () => {
  const { content } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form after a delay
      setTimeout(() => {
        setFormState({ name: '', email: '', subject: 'General Inquiry', message: '' });
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
      <div className="mb-12 text-center md:text-left">
        <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">{content.contact.tagline}</span>
        <h1 className="text-4xl font-bold text-[#0A2540] mt-2 mb-4">{content.contact.title}</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          {content.contact.description}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column: Contact Info & Socials */}
        <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">{content.contact.emailTitle}</h3>
                    <p className="text-slate-500 mb-4">{content.contact.emailDesc}</p>
                    <a href="mailto:contact@transnode.ai" className="text-lg font-semibold text-teal-600 hover:text-teal-500 transition-colors">
                        contact@transnode.ai
                    </a>
                </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">{content.contact.locationTitle}</h3>
                    <p className="text-slate-500 mb-1">{content.contact.locationDesc}</p>
                    <p className="text-slate-400 text-sm">Rooted in the UCSD innovation ecosystem.</p>
                </div>
            </div>

            {/* Social Media (Moved to Left Column) */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-6">{content.contact.socialTitle}</h3>
                <p className="text-slate-600 mb-8">
                    {content.contact.socialDesc}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                    <a 
                      href="https://www.linkedin.com/company/transnode-llc/about" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all group shadow-sm"
                    >
                        <Linkedin size={24} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                        <span className="font-semibold text-slate-700 group-hover:text-blue-600">{content.contact.socialPlatforms.linkedin}</span>
                    </a>
                    
                    <a 
                      href="https://x.com/transnodeai?s=21"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-black hover:text-black transition-all group shadow-sm"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-400 group-hover:text-black transition-colors">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                        <span className="font-semibold text-slate-700 group-hover:text-black">{content.contact.socialPlatforms.twitter}</span>
                    </a>

                    <a 
                      href="https://www.instagram.com/transnode.ai?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" 
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-pink-500 hover:text-pink-600 transition-all group shadow-sm"
                    >
                        <Instagram size={24} className="text-slate-400 group-hover:text-pink-600 transition-colors" />
                        <span className="font-semibold text-slate-700 group-hover:text-pink-600">{content.contact.socialPlatforms.instagram}</span>
                    </a>

                     <a 
                       href="https://www.tiktok.com/@transnode.ai?_r=1&_t=ZT-91nOCyPO56r"
                       target="_blank"
                       rel="noreferrer"
                       className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-black hover:text-black transition-all group shadow-sm"
                     >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-400 group-hover:text-black transition-colors">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                        <span className="font-semibold text-slate-700 group-hover:text-black">{content.contact.socialPlatforms.tiktok}</span>
                    </a>

                    <a 
                       href="https://youtube.com/@transnodeai?si=581DdLmugbzzTL9H"
                       target="_blank"
                       rel="noreferrer"
                       className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-red-600 hover:text-red-600 transition-all group shadow-sm"
                     >
                        <Youtube size={24} className="text-slate-400 group-hover:text-red-600 transition-colors" />
                        <span className="font-semibold text-slate-700 group-hover:text-red-600">{content.contact.socialPlatforms.youtube}</span>
                    </a>

                    {/* Other Platforms (Combined Card with Clickable Icons) */}
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex -space-x-2 pl-1">
                            {/* Douyin */}
                            <a 
                               href="https://www.douyin.com"
                               target="_blank"
                               rel="noreferrer"
                               className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center shrink-0 z-30 relative hover:z-40 hover:bg-black transition-all hover:scale-110" 
                               title="Douyin"
                            >
                                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                </svg>
                            </a>
                            {/* Rednote */}
                            <a 
                               href="https://xhslink.com/m/8XBs8mCZ20E"
                               target="_blank"
                               rel="noreferrer"
                               className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center shrink-0 z-20 relative hover:z-40 hover:bg-[#FF2442] transition-all hover:scale-110" 
                               title="Rednote"
                            >
                                <span className="text-white text-xs font-bold">小</span>
                            </a>
                            {/* Bilibili */}
                            <a 
                               href="https://b23.tv/XwOAmRM"
                               target="_blank"
                               rel="noreferrer"
                               className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center shrink-0 z-10 relative hover:z-40 hover:bg-[#00A1D6] transition-all hover:scale-110" 
                               title="Bilibili"
                            >
                                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                                     <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7ZM20 19H4V9H20V19Z M8 3L10.5 6.5H13.5L16 3" />
                                     <circle cx="9" cy="14" r="1.5" />
                                     <circle cx="15" cy="14" r="1.5" />
                                </svg>
                            </a>
                        </div>
                        <span className="font-semibold text-slate-700">{content.contact.socialPlatforms.other}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Inquiry Form & Investors */}
        <div className="space-y-6">
            {/* Inquiry Form (New) */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="text-2xl font-bold text-[#0A2540] mb-6 flex items-center gap-2">
                    <MessageSquare className="text-teal-500" />
                    {content.contact.formTitle}
                </h3>
                
                {status === 'success' ? (
                     <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-100 animate-fade-in">
                        <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-[#0A2540] mb-2">{content.contact.sentTitle}</h4>
                        <p className="text-slate-600">{content.contact.sentDesc}</p>
                     </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">{content.contact.formName}</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input 
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none"
                                    value={formState.name}
                                    onChange={e => setFormState({...formState, name: e.target.value})}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">{content.contact.formEmail}</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input 
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none"
                                    value={formState.email}
                                    onChange={e => setFormState({...formState, email: e.target.value})}
                                />
                            </div>
                        </div>

                        <div>
                             <label className="block text-sm font-semibold text-slate-700 mb-1.5">{content.contact.formSubject}</label>
                             <div className="relative">
                                 <select 
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none appearance-none"
                                    value={formState.subject}
                                    onChange={e => setFormState({...formState, subject: e.target.value})}
                                 >
                                    <option>General Inquiry</option>
                                    <option>Partnership Proposal</option>
                                    <option>Career Opportunity</option>
                                    <option>Product Demo</option>
                                    <option>Other</option>
                                 </select>
                                 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                 </div>
                             </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">{content.contact.formMessage}</label>
                            <textarea 
                                required
                                rows={4}
                                placeholder="How can we help you?"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none resize-none"
                                value={formState.message}
                                onChange={e => setFormState({...formState, message: e.target.value})}
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'loading'}
                            className="w-full py-3.5 bg-[#0A2540] hover:bg-[#163a5f] text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 mt-2"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    {content.contact.formButton}
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>

            {/* Investor Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-2 w-full">
                     <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#0A2540]">{content.contact.investorTitle}</h3>
                        <p className="text-slate-500 text-sm">Track our company profile and funding journey.</p>
                    </div>
                </div>
                
                <div className="w-full grid grid-cols-2 gap-3 mt-2">
                    <a href="https://www.crunchbase.com/organization/transnode-ai-llc" target="_blank" rel="noreferrer" className="flex items-center justify-center px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-semibold hover:border-purple-400 hover:text-purple-700 transition-colors text-sm">
                        Crunchbase
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="flex items-center justify-center px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-semibold hover:border-slate-900 hover:text-slate-900 transition-colors text-sm">
                        AngelList
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;