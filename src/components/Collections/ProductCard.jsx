import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, disableQuickAdd = false, navigateTo, disabledLabel = 'Unavailable' }) => {
  const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();

  // Grab the global addToCart and openCart functions
  const { addToCart, openCart } = useCart();

  const handleQuickAdd = (e) => {
    e.stopPropagation(); // don't trigger the card's own navigation click
    setIsAdding(true);

    // Add to global state immediately (updates the navbar badge instantly!)
    addToCart(product);

    setTimeout(() => {
      setIsAdding(false);
      openCart();
    }, 1000);
  };

  const handleCardClick = () => {
    if (navigateTo) navigate(navigateTo);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-white border-[1.5px] sm:border-[2px] border-black p-2.5 sm:p-4 flex flex-col items-center transition-all duration-300 cursor-pointer hover:-translate-y-1"
      style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.06), 0 8px 20px rgba(0,0,0,0.08)' }}
    >

      {/* Product Image — always 1:1 */}
      <div className="w-full aspect-square bg-[#FAF8F0] border-[1.5px] border-black/80 mb-2.5 sm:mb-4 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      <h3 className="font-black uppercase text-sm sm:text-lg text-center w-full truncate text-black">
        {product.name}
      </h3>
      <p className="font-bold text-[#F5689E] text-base sm:text-xl mt-0.5 sm:mt-1">
        {product.price}
      </p>

      {/* The Animated Button */}
      {disableQuickAdd ? (
        <button
          disabled
          className="mt-2.5 sm:mt-4 w-full rounded-full border-[1.5px] border-black/30 py-1.5 sm:py-2 font-black uppercase text-xs sm:text-sm tracking-wide bg-black/10 text-black/40 cursor-not-allowed flex justify-center items-center gap-1.5 sm:gap-2"
        >
          {disabledLabel}
        </button>
      ) : (
        <button
          onClick={handleQuickAdd}
          disabled={isAdding}
          className={`mt-2.5 sm:mt-4 w-full rounded-full border-[1.5px] border-black py-1.5 sm:py-2 font-black uppercase text-xs sm:text-sm tracking-wide transition-all duration-300 flex justify-center items-center gap-1.5 sm:gap-2 ${
            isAdding
              ? 'bg-[#F5689E] text-white pointer-events-none'
              : 'bg-[#FFDA22] text-black hover:bg-[#F5689E] hover:text-white'
          }`}
        >
          {isAdding ? (
            <>
              <Check strokeWidth={3} className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Added!
            </>
          ) : (
            'Quick Add'
          )}
        </button>
      )}

    </div>
  );
};

export default ProductCard;