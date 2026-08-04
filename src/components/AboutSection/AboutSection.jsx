import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="relative w-full min-h-[auto] md:min-h-[600px] bg-[#faf9f6] flex flex-col md:flex-row overflow-hidden ">
      
      {/* AMBIENT COLOR SPLASHES */}
      <div className="absolute -top-20 -right-20 w-80 md:w-[600px] h-80 md:h-[600px] bg-[#f26c9d] rounded-full blur-[80px] md:blur-[140px] opacity-20 pointer-events-none z-0" />
      <div className="absolute -bottom-20 -left-20 w-80 md:w-[600px] h-80 md:h-[600px] bg-[#FFDA22] rounded-full blur-[80px] md:blur-[140px] opacity-20 pointer-events-none z-0" />

      {/* LEFT SIDE: The Digital Beads Art */}
      <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-full flex items-center justify-center overflow-hidden z-0 py-16 md:py-0">
        
        {/* Background "Strings" */}
        <div className="absolute w-[200%] h-[1px] md:h-[2px] bg-black/5 -rotate-12 z-0"></div>
        <div className="absolute w-[200%] h-[1px] md:h-[2px] bg-black/5 rotate-45 z-0 translate-y-8 md:translate-y-20"></div>

        {/* Big Black Bead */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 rounded-full border-[6px] md:border-[16px] border-black/90 shadow-2xl shadow-black/10 z-10 bg-black/5 backdrop-blur-sm"
        />

        {/* Pink Bead */}
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute top-10 left-12 sm:top-12 sm:left-20 md:top-20 md:left-20 w-12 h-12 sm:w-16 sm:h-16 md:w-32 md:h-32 rounded-full border-[4px] md:border-[10px] border-[#f26c9d] shadow-xl shadow-[#f26c9d]/20 z-20 bg-white/50 backdrop-blur-md"
        />

        {/* Yellow Bead */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-10 right-12 sm:bottom-12 sm:right-20 md:bottom-24 md:right-24 w-10 h-10 sm:w-14 sm:h-14 md:w-28 md:h-28 rounded-full border-[3px] md:border-[8px] border-[#FFDA22] shadow-xl shadow-[#FFDA22]/20 z-20 bg-white/50 backdrop-blur-md"
        />
        
        {/* Tiny Accent Bead */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/2 left-1/3 md:left-1/4 w-6 h-6 md:w-12 md:h-12 rounded-full border-[2px] md:border-[4px] border-black/80 shadow-md z-30"
        />
      </div>

      {/* RIGHT SIDE: The Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10 md:p-16 lg:p-24 z-10">
        
        <div className="bg-white/95 backdrop-blur-sm border-2 border-black p-8 sm:p-10 md:p-12 rounded-[2rem] flex flex-col items-start gap-4 md:gap-6 w-full max-w-lg">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-black uppercase tracking-widest text-black/90 leading-tight">
            Designed <br className="hidden sm:block" /> With Love
          </h2>
          
          {/* Readable, elegant paragraph text */}
          <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-black/70">
            Every SOLACE piece begins as an idea and is brought to life by hand. From choosing every bead to adding the final touches, each creation is crafted with care, creativity, and a whole lot of love.
          </p>
          
          {/* Elegant Pill Button - Fixed the typo in class names */}
          <Link
            to="/our-story"
            className="group mt-2 md:mt-4 bg-black hover:bg-[#FFDA22] text-white hover:text-black font-bold uppercase tracking-widest text-xs md:text-sm py-3 px-6 md:py-4 md:px-8 rounded-full border-2 border-black flex items-center gap-3 transition-all duration-300 hover:translate-y-0.5"
          >
            Our Story
            <ArrowRight
              className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
              strokeWidth={2.5}
            />
          </Link>
          
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;