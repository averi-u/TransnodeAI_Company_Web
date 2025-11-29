import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Heart, DollarSign, Copy, Check } from 'lucide-react';

interface CrowdfundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CrowdfundModal: React.FC<CrowdfundModalProps> = ({ isOpen, onClose }) => {
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("@TransnodeAI");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A2540]/90 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 rounded-full p-2 z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Heart size={32} fill="currentColor" />
          </div>
          
          <h2 className="text-2xl font-bold text-[#0A2540] mb-2">Support Our Vision</h2>
          <p className="text-slate-600 mb-8">
            Help us democratize AI tools for students and researchers worldwide.
          </p>

          <div className="space-y-4">
            {/* Kickstarter Option */}
            <a 
              href="https://www.kickstarter.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between w-full p-4 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50 group transition-all"
            >
              <div className="text-left">
                <div className="font-bold text-[#0A2540]">Kickstarter Campaign</div>
                <div className="text-xs text-slate-500">Back our official launch</div>
              </div>
              <ExternalLink size={20} className="text-slate-400 group-hover:text-teal-500" />
            </a>

            {/* Venmo/Zelle Option */}
            <div className="relative">
                <button 
                  onClick={() => setShowPaymentDetails(!showPaymentDetails)}
                  className={`flex items-center justify-between w-full p-4 rounded-xl border transition-all text-left ${showPaymentDetails ? 'border-pink-500 bg-pink-50' : 'border-slate-200 hover:border-pink-500 hover:bg-pink-50'}`}
                >
                  <div>
                    <div className="font-bold text-[#0A2540]">Zelle / Venmo</div>
                    <div className="text-xs text-pink-600 font-medium">Become the 1 dollar Angel Investor</div>
                  </div>
                  <DollarSign size={20} className={`transition-colors ${showPaymentDetails ? 'text-pink-500' : 'text-slate-400'}`} />
                </button>
                
                {showPaymentDetails && (
                  <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-100 animate-fade-in text-left">
                      <p className="text-sm text-slate-600 mb-2">Send $1 to our verified business handle:</p>
                      <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
                        <span className="font-mono text-[#0A2540] font-bold flex-grow pl-2 select-all">@TransnodeAI</span>
                        <button 
                          onClick={handleCopy}
                          className="p-2 hover:bg-slate-100 rounded-md transition-colors"
                          title="Copy handle"
                        >
                          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-slate-400" />}
                        </button>
                      </div>
                      <p className="text-xs text-slate-400 mt-3 italic text-center">
                        "Small acts, when multiplied by millions of people, can transform the world."
                      </p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrowdfundModal;