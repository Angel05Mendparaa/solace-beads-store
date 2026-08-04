import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import solaceLogo from '@/assets/images/SOLACE_LOGO.png';

const navLinks = [
  { to: '/collections', label: 'Shop' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
  { to: '/custom-orders', label: 'Custom Order' },
];

const smoothTap = { type: 'tween', duration: 0.2, ease: 'easeOut' };

const Navbar = () => {
  const { cartCount, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-[#FAF8F0] px-8 py-6 md:py-8 flex justify-between items-center z-40 sticky top-0"
    >
      {/* Brand Logo */}
      <Link to="/" className="flex-shrink-0">
        <motion.img
          src={solaceLogo}
          alt="SOLACE"
          className="h-14 md:h-16 w-auto object-contain"
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.25 }}
        />
      </Link>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center gap-9 text-black">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 + i * 0.08, duration: 0.45, ease: 'easeOut' }}
            className="relative"
          >
            <Link to={link.to} className="inline-block leading-none">
              <motion.span
                className="inline-block text-[13px] font-semibold uppercase tracking-tight leading-none"
                initial={{ color: '#000000', scale: 1, WebkitTextStroke: '0px #F5689E' }}
                whileHover={{
                  color: '#F5689E',
                  scale: 1.5,
                  WebkitTextStroke: '0.5px #F5689E',
                  transition: smoothTap,
                }}
                whileTap={{
                  color: '#F5689E',
                  scale: 1.5,
                  WebkitTextStroke: '0.5px #F5689E',
                  transition: smoothTap,
                }}
              >
                {link.label}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Right side: Cart + Hamburger */}
      <div className="flex items-center gap-4">
        {/* Cart Icon Button */}
        <motion.button
          onClick={openCart}
          aria-label="Open Cart"
          className="relative flex-shrink-0 p-1"
          whileHover={{ opacity: 0.7, transition: smoothTap }}
          whileTap={{ opacity: 0.7, transition: smoothTap }}
        >
          <ShoppingCart strokeWidth={2} className="w-6 h-6 text-black" />

          <AnimatePresence>
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
                className="absolute -top-1.5 -right-1.5 bg-[#F5689E] text-black rounded-full w-[18px] h-[18px] flex items-center justify-center text-[10px] font-bold"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {cartCount}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Hamburger - mobile/tablet only */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
          className="md:hidden flex-shrink-0 p-1"
        >
          <Menu strokeWidth={2} className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-[#FAF8F0] border-l border-black/80 z-50 md:hidden flex flex-col"
            >
              <div className="flex justify-end px-6 py-4 border-b border-black/80">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close Menu"
                  className="p-1"
                >
                  <X strokeWidth={2} className="w-6 h-6 text-black" />
                </button>
              </div>

              <div className="flex flex-col gap-8 px-8 py-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.35, ease: 'easeOut' }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="inline-block leading-none"
                    >
                      <motion.span
                        className="inline-block text-[16px] font-semibold uppercase tracking-tight leading-none text-black"
                        whileHover={{
                          color: '#F5689E',
                          scale: 1.15,
                          WebkitTextStroke: '0.5px #F5689E',
                          transition: smoothTap,
                        }}
                        whileTap={{
                          color: '#F5689E',
                          scale: 1.15,
                          WebkitTextStroke: '0.5px #F5689E',
                          transition: smoothTap,
                        }}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;