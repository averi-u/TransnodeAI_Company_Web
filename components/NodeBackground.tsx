import React from 'react';

const NodeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500/20" />
          </pattern>
          <radialGradient id="gradBrand" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: '#003B73', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#0A2540', stopOpacity: 0 }} />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Abstract Orbs */}
        <circle cx="0%" cy="0%" r="400" fill="url(#gradBrand)" className="opacity-40" />
        <circle cx="100%" cy="100%" r="500" fill="url(#gradBrand)" className="opacity-30" />
        
        {/* Connection Lines */}
        <line x1="0" y1="100" x2="100" y2="200" stroke="#003B73" strokeWidth="1" strokeOpacity="0.1" />
      </svg>
    </div>
  );
};

export default NodeBackground;