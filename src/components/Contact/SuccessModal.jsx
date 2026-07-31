import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="bg-white border-[6px] border-black p-10 md:p-12 max-w-md w-full shadow-[12px_12px_0px_0px_#F5689E] relative pointer-events-auto text-center"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-[#FFDA22] hover:bg-[#F5689E] text-black border-[3px] border-black p-1.5 rounded-full shadow-[2px_2px_0px_#000] hover:shadow-[0px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <X strokeWidth={4} className="w-5 h-5" />
              </button>

              <div className="flex justify-center mb-6">
                <div className="bg-[#F5689E] border-[4px] border-black p-4 rounded-full shadow-[4px_4px_0px_#000]">
                  <Heart fill="black" strokeWidth={0} className="w-12 h-12 text-black" />
                </div>
              </div>
              
              <h2 className="text-3xl font-black uppercase tracking-tighter text-black leading-tight mb-4">
                Message Sent!
              </h2>
              
              <p className="font-bold text-black/80 text-base leading-relaxed mb-8">
                Thanks for reaching out! We've received your message and will get back to you as soon as possible. Keep an eye on your inbox!
              </p>

              <button 
                onClick={onClose}
                className="w-full bg-[#FFDA22] hover:bg-[#000] hover:text-white text-black border-[3px] border-black px-8 py-3 font-black uppercase text-sm shadow-[4px_4px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                Awesome
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;