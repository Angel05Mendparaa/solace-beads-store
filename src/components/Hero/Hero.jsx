import React, { useState, useEffect } from 'react'; 
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'; 
import { ArrowLeft, Pause, Play, ArrowRight } from 'lucide-react';
import PIN4 from "../../assets/images/PIN4.png";
import KC4 from "../../assets/images/KC4.png";
import B1 from "../../assets/images/B1.png";
import circleImage from "../../assets/images/circle.jpg";

const carouselImages = [PIN4, KC4, B1];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); 

  const { scrollY } = useScroll();
  
  // Parallax Circle Transform
  const circleY = useTransform(scrollY, [0, 400], [0, -300]);
  
  const navBg = useTransform(scrollY, [150, 300], ["#f9f8f3", "#000000"]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, currentIndex]); 

  return (
    <div className="relative w-full font-sans overflow-x-hidden">

      {/* Top Banner */}
      <section className="relative w-full bg-[#FAF8F0] py-10 md:py-14 lg:py-20 flex items-center justify-center z-20">
        
        {/* WRAPPER DIV for Position */}
        <div className="absolute left-0 bottom-0 -translate-x-3% translate-y-1/2 z-30">
          
          {/* THE PARALLAX CIRCLE */}
          <motion.div 
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-[#f9f8f3] border-4 md:border-8 border-black flex items-center justify-center shadow-xl overflow-hidden"
            style={{ y: circleY }}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <img 
              src={circleImage} 
              alt="Solace Badge" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full  flex justify-center text-center pl-20 sm:pl-6 md:pl-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  tracking-tight text-black leading-none whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              SO-SO-SO-SOLACE
            </h2>
        </div>
      </section>

      {/* Main Showcase */}
      <section className="relative z-10 w-full bg-black min-h-150 flex items-center overflow-hidden">
      
        {/* DECORATIVE STRIPES */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 flex flex-col justify-center transform -rotate-12 scale-150 md:hidden opacity-90">
            <div className="w-full h-8 bg-[#f8d053]"></div>
            <div className="w-full h-8 bg-[#f4a5c5]"></div>
            <div className="w-full h-8 bg-[#f26c9d]"></div>
            <div className="w-full h-8 bg-[#d81965]"></div>
          </div>

          <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-20 lg:w-32 h-full">
            <div className="w-1/4 bg-[#f8d053] h-full"></div>
            <div className="w-1/4 bg-[#f4a5c5] h-full"></div>
            <div className="w-1/4 bg-[#f26c9d] h-full"></div>
            <div className="w-1/4 bg-[#d81965] h-full"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 md:pl-28 lg:pl-40 py-12 md:py-24">
        
          {/* TEXT COLUMN */}
          <div className="flex-1 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left pt-8 md:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-black lg:text-[7rem] leading-[0.85] tracking-tighter uppercase mb-4 md:mb-6 drop-shadow-lg">
                MADE TO <br /> BE YOURS
              </h2>
            
              <p className="text-brand-yellow font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight max-w-md mx-auto md:mx-0">
                Because the best accessories carry a little personality.
              </p>
            </motion.div>
          </div>

          {/* IMAGE & CONTROLS COLUMN */}
          <div className="flex-1 w-full relative flex items-center justify-center min-h-96 md:min-h-125 mt-8 md:mt-0">
          
            {/* THE IMAGE BOX */}
            <div className="relative z-10 w-full max-w-280px sm:max-w-xs md:max-w-736px aspect-square md:aspect-736/835 flex items-center justify-center">
              
              {/* NEW! Badge */}
              <motion.div 
                className="absolute -top-4 -right-4 md:-top-10 md:-right-10 z-30 flex items-center justify-center"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 12 }}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.3 }}
              >
                <svg viewBox="-10 -10 120 120" className="w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 text-brand-pink fill-current drop-shadow-md">
                  <path d="M50 0 L58 20 L79 11 L74 32 L95 38 L79 53 L95 68 L74 74 L79 95 L58 86 L50 106 L42 86 L21 95 L26 74 L5 68 L21 53 L5 38 L26 32 L21 11 L42 20 Z" />
                </svg>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-black italic text-sm md:text-xl lg:text-2xl -rotate-12 mt-1">
                  NEW!
                </span>
              </motion.div>

              {/* Product Images */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex} 
                  src={carouselImages[currentIndex]} 
                  alt={`Featured Solace Accessory ${currentIndex + 1}`} 
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl z-20"
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="absolute -bottom-8 right-2 md:bottom-0 md:right-0 z-40 flex flex-col items-end gap-4">
              <div className="flex items-center gap-2 md:gap-3">
                <button 
                  onClick={handlePrev}
                  className="bg-brand-yellow hover:bg-yellow-300 text-black p-2 md:p-3 rounded-full transition-transform hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg"
                >
                  <ArrowLeft size={20} className="md:w-6 md:h-6" strokeWidth={3} />
                </button>
              
                <button 
                  onClick={togglePlayPause}
                  className="bg-brand-yellow hover:bg-yellow-300 text-black p-2 md:p-3 rounded-full transition-transform hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg"
                >
                  {isPlaying ? (
                    <Pause size={20} className="md:w-6 md:h-6" strokeWidth={3} fill="currentColor" />
                  ) : (
                    <Play size={20} className="md:w-6 md:h-6" strokeWidth={3} fill="currentColor" />
                  )}
                </button>
              
                <button 
                  onClick={handleNext}
                  className="bg-brand-yellow hover:bg-yellow-300 text-black p-2 md:p-3 rounded-full transition-transform hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg"
                >
                  <ArrowRight size={20} className="md:w-6 md:h-6" strokeWidth={3} />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;