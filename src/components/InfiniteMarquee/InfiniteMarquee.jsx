import React from 'react';
import { motion } from 'framer-motion';

const InfiniteMarquee = () => {
  // Removed the trailing '✦' at the very end. Left the space so 'BRACELETS' doesn't touch the next star!
  const marqueeText = "✦ HANDMADE ✦ MADE WITH LOVE ✦ CUSTOM DESIGNS ✦ EXPRESS YOURSELF ✦ BEADS ✦ CHARMS ✦ BRACELETS ";
  
  const repeatedText = marqueeText.repeat(4);

  return (
    <section className="relative w-full bg-brand-yellow py-4 md:py-6 overflow-hidden flex items-center">
      
      <motion.div
        className="flex whitespace-nowrap flex-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 80 
        }}
      >
        {/* Block 1 */}
        <div className="flex items-center text-black font-black text-xl md:text-3xl tracking-widest px-4">
          {repeatedText}
        </div>
        
        {/* Block 2 (The loop duplicate) */}
        <div className="flex items-center text-black font-black text-xl md:text-3xl tracking-widest px-4">
          {repeatedText}
        </div>

      </motion.div>
    </section>
  );
};

export default InfiniteMarquee;