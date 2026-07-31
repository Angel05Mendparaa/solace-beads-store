import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CollectionControls = ({ onPrev, onNext }) => {
  return (
    <div className="flex gap-6 mt-12 z-20">
      <button 
        onClick={onPrev} 
        className="bg-white hover:bg-[#FFDA22] text-black border-[4px] border-black p-4 shadow-[6px_6px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-y-1 hover:translate-x-1 transition-all"
        aria-label="Previous Collection"
      >
        <ArrowLeft strokeWidth={4} className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      
      <button 
        onClick={onNext} 
        className="bg-white hover:bg-[#F5689E] text-black border-[4px] border-black p-4 shadow-[6px_6px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-y-1 hover:translate-x-1 transition-all"
        aria-label="Next Collection"
      >
        <ArrowRight strokeWidth={4} className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
};

export default CollectionControls;