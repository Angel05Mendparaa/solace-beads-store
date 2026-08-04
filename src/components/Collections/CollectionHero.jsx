import React from 'react';
import { motion } from 'framer-motion';

const CollectionHero = () => {
  return (
    <div className="w-full pt-10 pb-4 flex flex-col items-center justify-center text-center px-4">
      
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative inline-block"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  uppercase tracking-tighter text-black leading-none"
          style={{ 
            fontFamily: "'Archivo Black', sans-serif",
            textShadow: '2px 2px 0px #FFDA22'
          }}
        >
          Collections
        </h1>

        {/* Hand-drawn squiggle underline — the "goofy" accent */}
        <motion.svg
          viewBox="0 0 200 12"
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full max-w-220px h-3"
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
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
        className="mt-7 font-bold text-black/80 max-w-md text-sm md:text-base"
      >
        Spin the record to explore our handcrafted drops. Every piece is unique, just like you.
      </motion.p>
    </div>
  );
};

export default CollectionHero;