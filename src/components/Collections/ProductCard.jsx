import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useCart } from '../../context/CartContext'; // Import the hook

const ProductCard = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false);
  
  // Grab the global addToCart and openCart functions
  const { addToCart, openCart } = useCart();

  const handleQuickAdd = () => {
    setIsAdding(true);
    
    // Add to global state immediately (updates the navbar badge instantly!)
    addToCart(product);

    // Wait 1 second to show the success state on the button, then open the drawer
    setTimeout(() => {
      setIsAdding(false);
      openCart();
    }, 1000);
  };

  return (
    <div className="group relative bg-white border-[4px] border-black p-4 flex flex-col items-center shadow-[8px_8px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:translate-x-1 transition-all cursor-pointer">
      {/* (Rest of your ProductCard design code remains exactly the same as before!) */}
      
      <div className="w-full aspect-square bg-[#FAF8F0] border-[3px] border-black mb-4 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" 
        />
        <div className="absolute -top-3 -right-4 w-12 h-6 bg-black/10 rotate-45 mix-blend-multiply z-10"></div>
      </div>
      
      <h3 className="font-black uppercase text-lg text-center w-full truncate text-black">
        {product.name}
      </h3>
      <p className="font-black text-[#F5689E] text-xl mt-1 drop-shadow-[1px_1px_0px_#000]">
        {product.price}
      </p>
      
      {/* The Animated Button */}
      <button 
        onClick={handleQuickAdd}
        disabled={isAdding}
        className={`mt-4 w-full border-[3px] border-black py-2 font-black uppercase text-sm transition-all shadow-[4px_4px_0px_0px_#000] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_#000] flex justify-center items-center gap-2 ${
          isAdding ? 'bg-[#F5689E] text-white pointer-events-none' : 'bg-[#FFDA22] text-black hover:bg-[#F5689E]'
        }`}
      >
        {isAdding ? (
          <>
            <Check strokeWidth={4} className="w-5 h-5" /> Added!
          </>
        ) : (
          'Quick Add'
        )}
      </button>
      
    </div>
  );
};

export default ProductCard;