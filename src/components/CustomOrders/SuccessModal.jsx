import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Semi-Transparent Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="bg-[#FAF8F0] border-[6px] border-black p-10 md:p-16 max-w-xl shadow-[12px_12px_0px_0px_#000] relative pointer-events-auto text-center"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-[#F5689E] hover:bg-[#FFDA22] text-black border-[3px] border-black p-1.5 rounded-full shadow-[2px_2px_0px_#000] hover:shadow-[0px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <X strokeWidth={4} className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-8xl mb-8 drop-shadow-[4px_4px_0px_#FFDA22]">✨</div>
              
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black leading-tight mb-6">
                Thank you! 💛
              </h2>
              
              <p className="font-bold text-black/90 text-lg md:text-xl leading-relaxed mb-10">
                Your custom order request has been received. I'll reach out soon via email to chat details and bring your dream idea to life.
              </p>

              <button 
                onClick={onClose}
                className="bg-white hover:bg-[#FFDA22] text-black border-[3px] border-black px-8 py-3 font-black uppercase text-sm shadow-[4px_4px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                Back to SOLACE
              </button>

              {/* Decorative sparkle icon */}
              <div className="absolute bottom-6 left-6 text-2xl text-[#F5689E] opacity-60">💖</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;