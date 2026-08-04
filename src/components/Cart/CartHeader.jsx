import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const CartHeader = ({ onClose }) => {
  return (
    <div className="relative flex justify-between items-center p-6 border-b-[4px] border-black bg-white">
      <div className="relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-black uppercase text-black drop-shadow-[2px_2px_0px_#FFDA22] tracking-tighter">
          Your Stash
        </h2>
        <motion.svg
          viewBox="0 0 200 12"
          className="absolute -bottom-3 left-0 w-full max-w-[220px] h-3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          <motion.path
            d="M2 8 Q 30 2, 55 7 T 105 6 T 155 7 T 198 5"
            fill="none"
            stroke="#F5689E"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>

      <button 
        onClick={onClose}
        className="group flex items-center justify-center bg-[#FFDA22] hover:bg-[#FFDA22] text-black hover:text-black border-2 border-black rounded-full p-2.5 transition-all duration-300 hover:translate-y-0.5"
      >
        <X strokeWidth={2.5} className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
};

export default CartHeader;