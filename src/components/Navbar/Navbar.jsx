import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext'; // Import the hook

const Navbar = () => {
  // Pull the cart count and openCart function from the global brain
  const { cartCount, openCart } = useCart();

  return (
    <nav className="w-full border-b-[4px] border-black bg-[#FAF8F0] px-6 py-4 flex justify-between items-center z-40 sticky top-0">
      
      {/* Brand Logo */}
      <a href="/" className="text-3xl font-black italic uppercase tracking-tighter">
        SOLACE
      </a>

      {/* Cart Icon Button */}
      <button 
        onClick={openCart}
        className="relative hover:scale-110 transition-transform"
      >
        <ShoppingCart strokeWidth={3} className="w-8 h-8 text-black" />
        
        {/* The Chunky Notification Badge (Only shows if cart has items) */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#F5689E] text-black border-[2px] border-black rounded-full w-6 h-6 flex items-center justify-center text-[11px] font-black shadow-[2px_2px_0px_0px_#000]">
            {cartCount}
          </span>
        )}
      </button>

    </nav>
  );
};

export default Navbar;