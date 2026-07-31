import React from 'react';
import { Lock } from 'lucide-react';

const CartFooter = ({ items }) => {
  // Rough math for the dummy subtotal
  const subtotal = items.reduce((acc, item) => {
    const priceNum = parseFloat(item.price.replace('$', ''));
    return acc + (priceNum * (item.quantity || 1));
  }, 0);

  return (
    <div className="border-t-[4px] border-black bg-white p-6">
      
      <div className="flex justify-between items-center mb-4">
        <span className="font-black uppercase text-black/80">Subtotal</span>
        <span className="font-black text-2xl text-black">${subtotal.toFixed(2)}</span>
      </div>
      
      <p className="text-xs font-bold text-black/60 uppercase mb-6 text-center">
        Shipping & taxes calculated at checkout.
      </p>

      <button className="w-full relative flex items-center justify-center gap-2 bg-[#FFDA22] hover:bg-[#F5689E] text-black border-[4px] border-black px-6 py-4 font-black uppercase text-lg shadow-[6px_6px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-y-1 hover:translate-x-1 transition-all group">
        <span>Checkout</span>
        <Lock strokeWidth={3} className="w-5 h-5 opacity-50 group-hover:opacity-100" />
        
        {/* "Coming Soon" Sticker */}
        <span className="absolute -top-3 -right-2 bg-[#FAF8F0] text-black border-[2px] border-black text-[10px] px-2 py-1 rotate-[15deg] shadow-[2px_2px_0px_#000]">
          Coming Soon!
        </span>
      </button>
      
    </div>
  );
};

export default CartFooter;