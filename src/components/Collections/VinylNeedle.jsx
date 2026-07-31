import React from 'react';

const VinylNeedle = () => {
  return (
    <div className="absolute top-0 right-4 md:right-16 z-40 origin-top-right rotate-[35deg] pointer-events-none drop-shadow-[8px_8px_0px_rgba(0,0,0,0.3)]">
      {/* Pivot Base */}
      <div className="w-10 h-10 bg-white border-[4px] border-black rounded-full mx-auto relative z-10">
        <div className="w-4 h-4 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Tonearm */}
      <div className="w-3 h-32 md:h-48 bg-[#FAF8F0] border-x-[3px] border-black mx-auto -mt-2"></div>
      
      {/* Headshell (The part with the needle) */}
      <div className="w-8 h-12 bg-[#FFDA22] border-[4px] border-black mx-auto -mt-1 flex justify-center">
        <div className="w-1 h-3 bg-black mt-auto -mb-3"></div>
      </div>
    </div>
  );
};

export default VinylNeedle;