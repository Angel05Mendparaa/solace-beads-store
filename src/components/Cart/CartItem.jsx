import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

const CartItem = ({ item, onRemove }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  return (
    <div className="flex items-center gap-4 bg-white border-[3px] border-black rounded-2xl p-3">
      {/* Product Image */}
      <div className="w-20 h-20 bg-[#FAF8F0] border-[2px] border-black rounded-xl overflow-hidden flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between h-full">
        <div>
          <h3 className="font-black uppercase text-sm md:text-base text-black leading-tight">
            {item.name}
          </h3>
          <p className="font-black text-[#F5689E] text-sm mt-1">{item.price}</p>
        </div>

        {/* Quantity Controls & Remove */}
        <div className="flex justify-between items-end mt-2">
          
          {/* Chunky Quantity Selector */}
          <div className="flex items-center bg-[#FAF8F0] border-[2px] border-black rounded-full overflow-hidden">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 font-black text-black hover:bg-[#FFDA22] transition-colors border-r-[2px] border-black"
            >
              -
            </button>
            <span className="px-3 py-1 font-black text-sm">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 font-black text-black hover:bg-[#FFDA22] transition-colors border-l-[2px] border-black"
            >
              +
            </button>
          </div>

          <button 
            onClick={() => onRemove && onRemove(item.id)}
            className="text-black hover:text-[#F5689E] transition-colors"
          >
            <Trash2 strokeWidth={3} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;