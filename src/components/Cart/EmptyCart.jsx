import React from 'react';
import { ArrowRight } from 'lucide-react';

const EmptyCart = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-12 px-4">
      
      <div className="bg-[#faf9f6] border border-black/5 w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm">
        <div className="text-5xl opacity-90 drop-shadow-sm translate-x-[-2px]">
          🛍️
        </div>
      </div>
      
      <h3 className="text-2xl font-black uppercase text-black/90 mb-3 tracking-widest">
        It's feeling empty!
      </h3>
      <p className="font-medium text-black/60 mb-8 max-w-[250px] leading-relaxed">
        You haven't added any handcrafted goodies yet. Let's fix that!
      </p>
      
      <button 
        onClick={onClose}
        className="group flex items-center gap-3 bg-black hover:bg-[#FFDA22] text-white hover:text-black border-2 border-black rounded-full px-8 py-3.5 font-bold uppercase tracking-wider text-xs transition-all duration-300  hover:translate-y-0.5"
      >
        <span>Continue Shopping</span>
        <ArrowRight strokeWidth={2.5} className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
      
    </div>
  );
};

export default EmptyCart;