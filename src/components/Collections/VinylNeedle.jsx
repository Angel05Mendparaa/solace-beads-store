import React from 'react';
import { motion } from 'framer-motion';

const VinylNeedle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 15, y: -20 }}
      animate={{ opacity: 1, rotate: [15, 40, 33, 35], y: 0 }}
      transition={{
        opacity: { duration: 0.4, ease: 'easeOut' },
        y: { duration: 0.5, ease: 'easeOut' },
        rotate: { duration: 0.9, ease: [0.34, 1.2, 0.64, 1], delay: 0.15 },
      }}
      className="absolute top-0 right-4 md:right-16 z-40 origin-top-right pointer-events-none"
      style={{
        filter: 'drop-shadow(4px 6px 6px rgba(0,0,0,0.18)) drop-shadow(0 12px 20px rgba(0,0,0,0.12))',
      }}
    >
      {/* Pivot Base */}
      <div
        className="w-10 h-10 border-[2.5px] border-black rounded-full mx-auto relative z-10"
        style={{
          background: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #e8e8e8 55%, #cfcfcf 100%)',
        }}
      >
        <div className="w-4 h-4 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Tonearm */}
      <div
        className="w-3 h-32 md:h-48 border-x-[2px] border-black mx-auto -mt-1"
        style={{
          background: 'linear-gradient(90deg, #c9c9c9 0%, #f4f4f4 45%, #b8b8b8 100%)',
        }}
      />

      {/* Headshell (The part with the needle) */}
      <div
        className="w-8 h-12 border-[2.5px] border-black mx-auto -mt-1 flex justify-center rounded-b-[2px]"
        style={{
          background: 'linear-gradient(180deg, #2a2a2a 0%, #000000 100%)',
        }}
      >
        <div className="w-1 h-3 bg-black mt-auto -mb-3" />
      </div>
    </motion.div>
  );
};

export default VinylNeedle;