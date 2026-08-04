import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    
    <section className="w-full pt-16 pb-6 md:pt-20 md:pb-8 lg:pt-24 lg:pb-12 flex flex-col items-center justify-center text-center px-4">
      
      <motion.span 
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 2 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
        
        className="inline-block bg-[#FFDA22] text-black font-black uppercase text-xs md:text-sm px-4 py-1.5 border-[3px] border-black rounded-md mb-4 md:mb-5"
      >
        Don't be a stranger 👋
      </motion.span>
      
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative inline-block"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  uppercase tracking-tighter text-black leading-none"
          style={{ 
            fontFamily: "'Archivo Black', sans-serif",
            textShadow: '2px 2px 0px #FFDA22'
          }}
        >
          Say Hello
        </h1>

        <motion.svg
          viewBox="0 0 200 12"
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full max-w-[220px] h-3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        >
          <motion.path
            d="M2 8 Q 30 2, 55 7 T 105 6 T 155 7 T 198 5"
            fill="none"
            stroke="#F5689E"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
        
        className="mt-5 md:mt-6 font-bold text-black/80 max-w-xl text-base md:text-lg leading-relaxed"
      >
        Got a question about an order, want to collaborate, or just want to tell us how much you love your new beads? Drop us a line!
      </motion.p>
      
    </section>
  );
};

export default ContactHero;