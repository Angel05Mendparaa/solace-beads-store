import React from 'react';
import { motion } from 'framer-motion';
import VinylNeedle from '@/components/Collections/VinylNeedle';
import CollectionCenter from '@/components/Collections/CollectionCenter';

const SPIN_TRANSITION = { type: 'spring', stiffness: 55, damping: 20 };

const VinylSelector = ({ collections, currentIndex }) => {
  // 6 items = 60 degrees apart. Negative rotation brings the next item to the top (0 degrees).
  const rotationAngle = -(currentIndex * 60);

  return (
    <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[480px] md:h-[480px] flex items-center justify-center z-10 mx-auto">

      {/* The Stylus / Needle */}
      <VinylNeedle />

      {/* The Spinning Vinyl Record */}
      <motion.div
        animate={{ rotate: rotationAngle }}
        transition={SPIN_TRANSITION}
        className="relative w-full h-full rounded-full bg-black border-[3px] border-black flex items-center justify-center"
        style={{
          boxShadow: '8px 8px 0px rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.15)',
          backgroundImage:
            'radial-gradient(transparent 40%, rgba(255,255,255,0.06) 41%, transparent 42%, transparent 50%, rgba(255,255,255,0.06) 51%, transparent 52%, transparent 60%, rgba(255,255,255,0.06) 61%, transparent 62%)',
        }}
      >

        {/* Icons around the edge */}
        {collections.map((item, index) => {
          const itemAngle = index * 60;
          const isActive = index === currentIndex;

          return (
            <div
              key={item.id}
              className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 origin-bottom flex flex-col justify-start pt-2 sm:pt-6 md:pt-8"
              style={{ transform: `rotate(${itemAngle}deg)` }}
            >
              {/* Counter-rotate so the icon stays upright */}
              <motion.div
                animate={{ rotate: -rotationAngle - itemAngle }}
                transition={SPIN_TRANSITION}
                className={`
                  w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full border-[2.5px] border-black
                  flex items-center justify-center text-lg sm:text-xl md:text-3xl z-20
                  transition-colors duration-300
                  ${isActive ? 'bg-[#F5689E]' : 'bg-[#FAF8F0]'}
                `}
                style={{
                  boxShadow: isActive
                    ? '3px 3px 0px rgba(0,0,0,0.9)'
                    : '2px 2px 0px rgba(0,0,0,0.5)',
                }}
              >
                {item.icon}
              </motion.div>
            </div>
          );
        })}

        {/* Center Label — counter-rotates to stay readable */}
        <motion.div
          animate={{ rotate: -rotationAngle }}
          transition={SPIN_TRANSITION}
          className="absolute z-30"
        >
          <CollectionCenter collection={collections[currentIndex]} />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default VinylSelector;