import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// The custom bead divider component using the brand colors
const BeadDivider = () => {
  const colors = ['bg-[#FFDA22]', 'bg-[#f26c9d]', 'bg-[#f9f8f3]', 'bg-black'];
  return (
    <div className="w-full flex items-center overflow-hidden my-10 md:my-16 opacity-60">
      {/* We render a long array to ensure it fills the width on any screen size */}
      {Array.from({ length: 30 }).map((_, i) => (
        <React.Fragment key={i}>
          <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full border-[1.5px] border-black shrink-0 ${colors[i % 4]}`}></div>
          <div className="w-4 md:w-8 h-[1.5px] bg-black shrink-0"></div>
        </React.Fragment>
      ))}
      {/* Cap off the end with one last bead */}
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full border-[1.5px] border-black shrink-0 bg-[#FFDA22]"></div>
    </div>
  );
};

const Footer = () => {
  // Animation configuration for the staggered slide-up effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Sunburst background returned to full opacity
    <footer 
      className="relative w-full p-4 sm:p-8 md:p-16 lg:p-24 font-sans z-10 overflow-hidden flex justify-center items-center bg-[#f9f8f3]"
      style={{
        backgroundImage: 'repeating-conic-gradient(from 0deg at 50% 50%, #FFDA22 0deg 15deg, transparent 15deg 30deg)'
      }}
    >
      
      {/* The Main Footer Card - Shadow completely removed */}
      <div className="relative w-full max-w-[1400px] bg-white border-[6px] md:border-[8px] border-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col z-20">
        
        {/* We attach the staggered animation trigger to this wrapper */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 items-start"
        >
          
          {/* LEFT SIDE: The 2 Columns of Links */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-8 md:gap-12 mt-2">
            
            {/* Column 1: SHOP (Animated) */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <h4 className="font-black text-xl md:text-2xl text-black uppercase mb-2">
                Shop
              </h4>
              <ul className="flex flex-col gap-8 font-black text-sm md:text-lg text-black/80 uppercase italic">
                <li>
                  <Link to="/collections" className="hover:text-[#F5689E] hover:translate-x-1 inline-block transition-all">
                    Collections
                  </Link>
                </li>
                <li>
                  {/* 2. Update the Custom Orders link! */}
                  <Link to="/custom-orders" className="hover:text-[#F5689E] hover:translate-x-1 inline-block transition-all">
                    Custom Orders
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="hover:text-[#F5689E] hover:translate-x-1 inline-block transition-all">
                    FAQs
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Column 2: COMPANY (Animated) */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <h4 className="font-black text-xl md:text-2xl text-black uppercase mb-2">
                Company
              </h4>
              <ul className="flex flex-col gap-8 font-black text-sm md:text-lg text-black/80 uppercase italic">
                <li><a href="/our-story" className="hover:text-[#f26c9d] hover:translate-x-1 inline-block transition-all">Our Story</a></li>
                <li><Link to="/contact" className="hover:text-[#f26c9d] hover:translate-x-1 inline-block transition-all">Contact</Link></li>
              </ul>
            </motion.div>
            
          </div>

          {/* RIGHT SIDE: The Invitation (Animated) */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex justify-start lg:justify-end">
            
            <div className="flex flex-col gap-6 w-full max-w-sm">
              <h3 className="font-black text-3xl md:text-4xl uppercase text-black leading-tight">
                Never miss <br className="hidden md:block" /> a new drop.
              </h3>
              
              <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#f9f8f3] border-[3px] border-black rounded-xl p-4 font-black text-sm outline-none placeholder:text-black/40 focus:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                />
                <button className="self-end bg-[#FFDA22] hover:bg-[#f26c9d] text-black border-[3px] border-black rounded-xl px-8 py-3 font-black text-sm uppercase transition-all shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-y-[2px] hover:translate-x-[2px]">
                  Notify Me
                </button>
              </div>
            </div>
            
          </motion.div>
        </motion.div>

        {/* The Beaded String Divider */}
        <BeadDivider />

        {/* BOTTOM SECTION: Massive Logo & Footer Notes (Animated) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full flex flex-col md:flex-row justify-between items-end gap-8 relative"
        >
          
          {/* The Massive Brand Title (Scales in softly) */}
          <motion.div variants={logoVariants} className="relative">
            <h1 
              className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black italic uppercase text-[#e61e6a] leading-none tracking-tighter"
              style={{ WebkitTextStroke: '3px black' }}
            >
              SOLACE
            </h1>
          </motion.div>

          {/* Restacked Copyright Section */}
          <motion.div variants={logoVariants} className="flex flex-col items-start md:items-end gap-2 font-black text-xs md:text-sm uppercase text-black/80 text-left md:text-right pb-2">
            <p className="flex items-center gap-2">Made with <span className="text-[#f26c9d] text-base">♡</span> in India</p>
            <p>SOLACE © 2026</p>
          </motion.div>
          
        </motion.div>
        
      </div>
    </footer>
  );
};

export default Footer;