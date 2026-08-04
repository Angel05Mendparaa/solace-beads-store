import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import EmptyCart from './EmptyCart';

const CartDrawer = ({ isOpen, onClose, cartItems = [], onRemoveItem }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 cursor-pointer"
          />

          {/* Sliding Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[450px] bg-[#FAF8F0] border-l-[6px] border-black rounded-l-[2rem] z-50 flex flex-col overflow-hidden"
          >
            <CartHeader onClose={onClose} />
            
            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
              {cartItems.length > 0 ? (
                <div className="flex flex-col gap-6">
                  {cartItems.map((item, index) => (
                    <CartItem key={item.id ?? index} item={item} onRemove={onRemoveItem} />
                  ))}
                </div>
              ) : (
                <EmptyCart onClose={onClose} />
              )}
            </div>

            {cartItems.length > 0 && <CartFooter items={cartItems} />}
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;