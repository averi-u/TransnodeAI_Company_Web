import React, { useState, useEffect } from 'react';
import { X, Mail, Instagram, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

interface JoinAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinAccessModal: React.FC<JoinAccessModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Student');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Prevent background scrolling when modal is open
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const resetForm = () => {
    setEmail('');
    setRole('Student');
    setStatus('idle');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A2540]/90 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* Decorative Header */}
        <div className="h-32 bg-gradient-to-r from-[#0A2540] to-[#003B73] relative overflow-hidden">
           {/* Abstract shapes */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
           
           <button 
             onClick={onClose}
             className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-md hover:bg-white/20"
           >
             <X size={20} />
           </button>

           <div className="absolute bottom-6 left-8">
             <h2 className="text-2xl font-bold text-white tracking-tight">Join Early Access</h2>
             <p className="text-blue-100 text-sm opacity-90 font-light mt-1">Be the first to use our intelligent tools.</p>
           </div>
        </div>

        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">You're on the list!</h3>
              <p className="text-slate-600 mb-8 max-w-xs mx-auto">
                Thanks for your interest in Transnode AI. We'll verify your details and reach out shortly.
              </p>
              <div className="flex flex-col gap-3">
                 <a 
                   href="https://www.instagram.com/averieee.y?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" 
                   target="_blank" 
                   rel="noreferrer" 
                   className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                 >
                    <Instagram size={20} />
                    Follow on Instagram
                 </a>
                 <button 
                    onClick={resetForm} 
                    className="w-full px-6 py-3 text-slate-500 hover:text-slate-800 font-medium hover:bg-slate-50 rounded-lg transition-colors"
                 >
                    Close
                 </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-teal-500 transition-colors" size={18} />
                  <input 
                    type="email" 
                    required
                    placeholder="name@university.edu" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">I am a...</label>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none appearance-none cursor-pointer"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="Student">Student</option>
                    <option value="Researcher">Researcher / Professor</option>
                    <option value="Business">Business / SME</option>
                    <option value="Investor">Investor</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Request Access
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-slate-100"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-xs uppercase font-semibold tracking-wider">Or connect with us</span>
                <div className="flex-grow border-t border-slate-100"></div>
              </div>

              <a 
                href="https://www.instagram.com/averieee.y?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 border border-pink-200 bg-pink-50/50 hover:bg-pink-50 text-pink-600 font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors group"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                Subscribe on Instagram
              </a>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinAccessModal;