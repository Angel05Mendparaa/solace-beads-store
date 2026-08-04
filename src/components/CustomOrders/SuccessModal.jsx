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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 cursor-pointer transition-opacity"
          />

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              
              className="bg-white/95 backdrop-blur-md border border-black/5 p-10 md:p-12 max-w-md w-full rounded-3xl shadow-2xl shadow-black/10 relative pointer-events-auto text-center"
            >
              
              <button 
                onClick={onClose}
                className="absolute top-5 right-5 text-black/40 hover:text-black bg-black/5 hover:bg-black/10 p-2 rounded-full transition-colors duration-200"
                aria-label="Close modal"
              >
                <X strokeWidth={2.5} className="w-5 h-5" />
              </button>

              <div className="flex justify-center mb-6">
                
                <div className="bg-pink-50 p-5 rounded-full">
                  <Heart fill="#F5689E" strokeWidth={0} className="w-10 h-10 text-[#F5689E]" />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-black tracking-wide text-black/90 mb-3">
                Message Sent!
              </h2>
              
              <p className="font-medium text-black/60 text-base leading-relaxed mb-8">
                Thanks for reaching out! We've received your message and will get back to you as soon as possible. Keep an eye on your inbox.
              </p>

              <button 
                onClick={onClose}
                className="w-full bg-black hover:bg-[#FFDA22] text-white hover:text-black rounded-full px-8 py-3.5 font-bold uppercase tracking-wider text-sm transition-colors duration-300 shadow-md hover:shadow-lg"
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