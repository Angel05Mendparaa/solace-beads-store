import React from 'react';
import { ArrowRight } from 'lucide-react';

const EmptyCart = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-12">
      <div className="text-6xl mb-4 drop-shadow-[4px_4px_0px_#FFDA22]">
        🛍️
      </div>
      <h3 className="text-2xl font-black uppercase text-black mb-2 tracking-tight">
        It's feeling empty!
      </h3>
      <p className="font-bold text-black/70 mb-8 max-w-[250px]">
        You haven't added any handcrafted goodies yet. Let's fix that!
      </p>
      
      <button 
        onClick={onClose}
        className="flex items-center gap-2 bg-[#FFDA22] hover:bg-[#F5689E] text-black border-[3px] border-black px-6 py-3 font-black uppercase text-sm shadow-[4px_4px_0px_0px_#000] hover:shadow-[0px_0px_0px_0px_#000] hover:translate-y-1 hover:translate-x-1 transition-all"
      >
        <span>Continue Shopping</span>
        <ArrowRight strokeWidth={4} className="w-4 h-4" />
      </button>
    </div>
  );
};

export default EmptyCart;