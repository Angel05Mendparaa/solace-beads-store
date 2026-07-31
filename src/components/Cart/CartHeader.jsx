import React from 'react';
import { X } from 'lucide-react';

const CartHeader = ({ onClose }) => {
  return (
    <div className="flex justify-between items-center p-6 border-b-[4px] border-black bg-white">
      <h2 className="text-2xl md:text-3xl font-black uppercase text-black drop-shadow-[2px_2px_0px_#FFDA22] tracking-tighter">
        Your Stash
      </h2>
      <button 
        onClick={onClose}
        className="bg-[#F5689E] hover:bg-[#FFDA22] text-black border-[3px] border-black p-2 rounded-full shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-y-[2px] hover:translate-x-[2px] transition-all"
      >
        <X strokeWidth={4} className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
};

export default CartHeader;