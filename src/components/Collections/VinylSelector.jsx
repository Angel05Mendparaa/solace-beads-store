import React from 'react';
import { motion } from 'framer-motion';
import VinylNeedle from './VinylNeedle';
import CollectionCenter from './CollectionCenter';

const VinylSelector = ({ collections, currentIndex }) => {
  // 6 items = 60 degrees apart. We rotate the record negatively to bring the next item to the top (0 degrees).
  const rotationAngle = -(currentIndex * 60);

  return (
    <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] flex items-center justify-center z-10">
      
      {/* The Stylus / Needle (Fixed at top-right, pointing to top-center) */}
      <VinylNeedle />

      {/* The Spinning Vinyl Record */}
      <motion.div 
        animate={{ rotate: rotationAngle }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        className="relative w-full h-full rounded-full bg-black border-[8px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] flex items-center justify-center"
        style={{
          // Creates the "groove" look of a vinyl record
          backgroundImage: 'radial-gradient(transparent 40%, rgba(255,255,255,0.1) 41%, transparent 42%, transparent 50%, rgba(255,255,255,0.1) 51%, transparent 52%, transparent 60%, rgba(255,255,255,0.1) 61%, transparent 62%)'
        }}
      >
        
        {/* Mapping the icons around the edge */}
        {collections.map((item, index) => {
          const itemAngle = index * 60;
          return (
            <div 
              key={item.id}
              className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 origin-bottom flex flex-col justify-start pt-6 md:pt-8"
              style={{ transform: `rotate(${itemAngle}deg)` }}
            >
              {/* Counter-rotate the icon so it doesn't end up upside down */}
              <motion.div 
                animate={{ rotate: -rotationAngle - itemAngle }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-black flex items-center justify-center text-xl md:text-3xl shadow-[4px_4px_0px_0px_#000] z-20 ${index === currentIndex ? 'bg-[#FFDA22]' : 'bg-white'}`}
              >
                {item.icon}
              </motion.div>
            </div>
          );
        })}

        {/* The Center Label (Doesn't counter-rotate, stays static relative to the screen to be readable) */}
        <motion.div 
          animate={{ rotate: -rotationAngle }} // Counter-rotates to perfectly cancel out the vinyl's rotation
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="absolute z-30"
        >
          <CollectionCenter collection={collections[currentIndex]} />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default VinylSelector;