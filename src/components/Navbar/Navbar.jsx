import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  
  // 1. IMMEDIATE SWITCH: Changed the gap to [199, 200] so it snaps instantly instead of fading
  const navBg = useTransform(scrollY, [199, 200], ["#f9f8f3", "#000000"]);
  
  // 2. CONTRAST FIX: Text is solid Black on the cream bg, and snaps to Brand Yellow (#FFDA22) on the black bg
  const navText = useTransform(scrollY, [199, 200], ["#000000", "#FFDA22"]);

  return (
    <motion.nav 
      // 3. Applied the dynamic text color here, replacing the static yellow class
      style={{ backgroundColor: navBg, color: navText }}
      className="w-full sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between h-20">
          <div className="flex gap-8 text-sm font-medium tracking-wide">
            <a href="#shop" className="hover:opacity-70 transition-opacity duration-300">
              SHOP
            </a>
            <a href="#collections" className="hover:opacity-70 transition-opacity duration-300">
              COLLECTIONS
            </a>
          </div>

          <a href="/" className="text-3xl font-semibold tracking-wider">
            SOLACE
          </a>

          <div className="flex gap-6 items-center">
            <button 
              aria-label="Search"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <Search size={22} strokeWidth={1.5} />
            </button>
            <button 
              aria-label="Cart"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <ShoppingCart size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between h-20">
          <button 
            aria-label="Toggle Menu"
            className="hover:opacity-70 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>

          <a href="/" className="text-xl font-semibold tracking-wider">
            SOLACE
          </a>

          <div className="flex gap-4 items-center">
            <button 
              aria-label="Search"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              aria-label="Cart"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <ShoppingCart size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* The Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          // 4. Made sure the mobile dropdown also uses the dynamic text color!
          style={{ backgroundColor: navBg, color: navText }}
          className="md:hidden border-t border-gray-800 absolute w-full px-4 py-6 flex flex-col gap-6 shadow-lg"
        >
          <a 
            href="#shop" 
            className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity duration-300"
          >
            SHOP
          </a>
          <a 
            href="#collections" 
            className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity duration-300"
          >
            COLLECTIONS
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;