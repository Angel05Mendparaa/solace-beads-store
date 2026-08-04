import React from 'react';
import { motion } from 'framer-motion';

const CustomHero = () => {
  return (
    <section className="w-full pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-16 flex flex-col items-center justify-center text-center px-4">
      
      <div className="relative inline-block">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-black uppercase tracking-tighter text-black leading-[0.9] drop-shadow-[4px_4px_0px_#FFDA22]">
          Let's Make <br /> Magic Together
        </h1>

        <motion.svg
          viewBox="0 0 200 12"
          className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 w-2/3 max-w-[280px] h-3"
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
      
      <p className="mt-10 sm:mt-9 md:mt-8 font-bold text-black/80 max-w-2xl text-base md:text-xl leading-relaxed">
        Have a dream accessory in mind? I’d love to bring it to life for you. Fill out the creative brief below, and let's create something too special to be mass produced. 💛
      </p>
    </section>
  );
};

export default CustomHero;