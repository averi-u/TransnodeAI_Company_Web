
import React, { useState, useEffect } from 'react';
import { X, TrendingUp, Users, Target, Building2, Send, Loader2 } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client
const SUPABASE_URL = 'https://giskiarjtqwxxoshywsy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpc2tpYXJqdHF3eHhvc2h5d3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxMzkwNzIsImV4cCI6MjA4NDcxNTA3Mn0.25ZQwzYzqmfSmi7EV09tYc42ZSaZVjcgsfqNMAcYeRE';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvestorModal: React.FC<InvestorModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({
    name: '',
    firm: '',
    email: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('pitch_deck_requests')
        .insert([
          { 
            name: formState.name, 
            firm: formState.firm, 
            email: formState.email 
          }
        ]);

      if (error) throw error;
      
      setStatus('success');
    } catch (err: any) {
      console.error('Supabase submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred while sending your inquiry. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#0A2540]/90 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fade-in-up max-h-[90vh] md:h-auto overflow-y-auto md:overflow-visible">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-600 bg-white/50 hover:bg-white rounded-full p-2 transition-all"
        >
          <X size={20} />
        </button>

        {/* Left Side: Impact & Metrics (Dark) */}
        <div className="md:w-2/5 bg-[#0A2540] text-white p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-teal-400 font-semibold tracking-wide text-xs uppercase mb-6 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              <TrendingUp size={14} />
              Investor Relations
            </div>
            <h2 className="text-3xl font-bold mb-4">Partner with the future of EdTech & Work.</h2>
            <p className="text-slate-300 leading-relaxed mb-8 text-sm">
              We are bridging the gap between academic validation and global commerce efficiency. Here is our current traction.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-blue-500/20 rounded-lg text-blue-300"><Users size={18} /></div>
                   <span className="text-slate-300 text-sm font-medium">Waitlist & Beta</span>
                </div>
                <div className="text-3xl font-bold">1,000+</div>
                <div className="text-xs text-slate-400 mt-1">Students & SMEs verified</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-teal-500/20 rounded-lg text-teal-300"><Building2 size={18} /></div>
                   <span className="text-slate-300 text-sm font-medium">Key Contracts</span>
                </div>
                <div className="text-3xl font-bold">1 Public-Listed</div>
                <div className="text-xs text-slate-400 mt-1">Business client contract closed</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300"><Target size={18} /></div>
                   <span className="text-slate-300 text-sm font-medium">Vision</span>
                </div>
                <p className="text-sm text-slate-200 italic">
                  "To become the global standard for AI-verified academic and professional identity."
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-8 pt-8 border-t border-white/10 text-xs text-slate-400">
            Confidential proprietary data. © Transnode AI, LLC.
          </div>
        </div>

        {/* Right Side: Contact Form (Light) */}
        <div className="md:w-3/5 p-8 md:p-10 bg-white">
          <div className="max-w-md mx-auto h-full flex flex-col justify-center">
            
            {status === 'success' ? (
               <div className="text-center py-12 animate-fade-in">
                 <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Send size={28} />
                 </div>
                 <h3 className="text-2xl font-bold text-[#0A2540] mb-3">Inquiry Received</h3>
                 <p className="text-slate-600 mb-8">
                   Thank you for your interest in Transnode AI. Our founding team will review your profile and reach out directly within 48 hours.
                 </p>
                 <button 
                   onClick={onClose}
                   className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg transition-colors"
                 >
                   Close Window
                 </button>
               </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-2">Request Pitch Deck</h3>
                  <p className="text-slate-500">
                    We are currently open to strategic conversations. Please introduce yourself below.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none"
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">Firm / Fund</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input 
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none"
                          value={formState.firm}
                          onChange={e => setFormState({...formState, firm: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Work Email</label>
                    <input 
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-500 font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                      {errorMessage}
                    </p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-[#0A2540] hover:bg-[#163a5f] text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 mt-4"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request Access
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-center text-slate-400 mt-4">
                    By submitting this form, you agree to our NDA policy regarding confidential materials.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorModal;
