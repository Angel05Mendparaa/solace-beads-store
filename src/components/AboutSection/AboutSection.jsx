import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {Link} from 'react-router-dom'

const AboutSection = () => {
  return (
    // Locked to flex-row so it stays side-by-side on all devices
    <section className="relative w-full min-h-[250px] sm:min-h-[300px] md:min-h-[600px] bg-[#f9f8f3] border-y-2 md:border-y-4 border-black flex flex-row overflow-hidden">
      
      {/* LEFT SIDE: The Digital Beads Art (Locked to 50% width) */}
      <div className="relative w-1/2 flex items-center justify-center overflow-hidden z-0 py-10 md:py-0">
        
        {/* Background "Strings" */}
        <div className="absolute w-[200%] h-0.5 md:h-2 bg-black/10 -rotate-12 z-0"></div>
        <div className="absolute w-[200%] h-0.5 md:h-2 bg-black/10 rotate-45 z-0 translate-y-6 md:translate-y-20"></div>

        {/* Big Black Bead */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          // Scaled down significantly for mobile side-by-side
          className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-56 md:h-56 rounded-full border-[6px] sm:border-[10px] md:border-[32px] border-black shadow-lg md:shadow-2xl z-10"
        />

        {/* Pink Bead */}
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute top-4 left-4 sm:top-8 sm:left-10 md:top-20 md:left-20 w-10 h-10 sm:w-14 sm:h-14 md:w-32 md:h-32 rounded-full border-[4px] sm:border-[6px] md:border-[16px] border-[#f26c9d] shadow-md md:shadow-xl z-20"
        />

        {/* Yellow Bead */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-10 md:bottom-24 md:right-24 w-8 h-8 sm:w-12 sm:h-12 md:w-28 md:h-28 rounded-full border-[3px] sm:border-[5px] md:border-[14px] border-[#FFDA22] shadow-md md:shadow-xl z-20"
        />
        
        {/* Tiny Accent Bead */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/2 left-1/4 w-4 h-4 sm:w-6 sm:h-6 md:w-12 md:h-12 rounded-full border-[2px] sm:border-[3px] md:border-[6px] border-black shadow-sm md:shadow-md z-30"
        />
      </div>

      {/* RIGHT SIDE: The Content (Locked to 50% width) */}
      <div className="w-1/2 flex items-center justify-center p-2 sm:p-4 md:p-12 lg:p-20 z-10">
        
        {/* The Chunky Content Card */}
        <div className="bg-black text-white p-3 sm:p-5 md:p-10 lg:p-12 border md:border-4 border-black shadow-[3px_3px_0px_0px_#FFDA22] sm:shadow-[5px_5px_0px_0px_#FFDA22] md:shadow-[12px_12px_0px_0px_#FFDA22] flex flex-col items-start gap-2 sm:gap-3 md:gap-6 w-full max-w-lg">
          
          <h2 className="text-[12px] sm:text-lg md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#FFDA22] leading-none">
            Designed <br /> With Love
          </h2>
          
          {/* Micro-typography for mobile so it remains readable but fits the 50% width */}
          <p className="text-[7px] sm:text-[10px] md:text-base lg:text-lg font-bold leading-tight md:leading-relaxed text-[#f9f8f3]">
            Every SOLACE piece begins as an idea and is brought to life by hand. From choosing every bead to adding the final touches, each creation is crafted with care, creativity, and a whole lot of love.
          </p>
          
          {/* Action Button */}
          <a 
            href="/our-story" 
            className="group mt-1 md:mt-4 bg-[#FFDA22] hover:bg-[#f9f8f3] text-black font-black uppercase tracking-widest text-[6px] sm:text-[8px] md:text-sm py-1.5 px-2.5 sm:py-2 sm:px-4 md:py-4 md:px-8 rounded-full flex items-center gap-1 md:gap-3 border md:border-2 border-black transition-colors duration-300"
          >
            Our Story
            <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
          </a>
          
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;