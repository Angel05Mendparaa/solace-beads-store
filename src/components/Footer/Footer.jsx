import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import solaceLogo from '@/assets/images/SOLACE_LOGO.png';

const BeadDivider = () => {
  const colors = ['bg-[#FFDA22]', 'bg-[#f26c9d]', 'bg-[#FAF8F0]', 'bg-black'];
  return (
    <div className="w-full flex items-center overflow-hidden my-8 md:my-10 opacity-60">
      
      {Array.from({ length: 30 }).map((_, i) => (
        <React.Fragment key={i}>
          <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full border-[1.5px] border-black shrink-0 ${colors[i % 4]}`}></div>
          <div className="w-4 md:w-8 h-[1.5px] bg-black shrink-0"></div>
        </React.Fragment>
      ))}
      
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full border-[1.5px] border-black shrink-0 bg-[#FFDA22]"></div>
    </div>
  );
};

const Footer = () => {

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative w-full p-4 sm:p-6 md:p-10 lg:p-12 font-sans z-10 overflow-hidden flex justify-center items-center bg-[#f9f8f3]"
      style={{
        backgroundImage: 'repeating-conic-gradient(from 0deg at 50% 50%, #FFDA22 0deg 15deg, transparent 15deg 30deg)'
      }}
    >

      <div className="relative w-full max-w-[1200px] bg-[#FAF8F0] border-[4px] md:border-[6px] border-black rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-12 flex flex-col z-20">
       
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 items-start"
        >
         
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-8 mt-2">
            
            <motion.div variants={itemVariants} className="flex flex-col gap-4 md:gap-6">
              <h4 className="font-black text-lg md:text-xl text-black uppercase mb-1">
                Shop
              </h4>
              <ul className="flex flex-col gap-4 md:gap-6 font-black text-sm md:text-base text-black/80 uppercase italic">
                <li>
                  <Link to="/collections" className="hover:text-[#F5689E] hover:translate-x-1 inline-block transition-all">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link to="/custom-orders" className="hover:text-[#F5689E] hover:translate-x-1 inline-block transition-all">
                    Custom Orders
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4 md:gap-6">
              <h4 className="font-black text-lg md:text-xl text-black uppercase mb-1">
                Company
              </h4>
              <ul className="flex flex-col gap-4 md:gap-6 font-black text-sm md:text-base text-black/80 uppercase italic">
                <li><Link to="/our-story" className="hover:text-[#f26c9d] hover:translate-x-1 inline-block transition-all">Our Story</Link></li>
                <li><Link to="/contact" className="hover:text-[#f26c9d] hover:translate-x-1 inline-block transition-all">Contact</Link></li>
              </ul>
            </motion.div>
            
          </div>

          <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex justify-start lg:justify-end mt-4 lg:mt-0">
            <button 
              onClick={scrollToTop}
              className="group bg-black hover:bg-[#FFDA22] text-white hover:text-black border-2 border-black rounded-full px-8 py-3.5 md:px-10 md:py-4 font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 hover:translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <span>Back to Top</span>
              <ArrowUp strokeWidth={2.5} className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        <BeadDivider />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8 relative"
        >

          <motion.div variants={logoVariants} className="relative w-full md:w-auto flex justify-center md:justify-start">
            <img 
              src={solaceLogo} 
              alt="SOLACE" 
              className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain mix-blend-multiply" 
            />
          </motion.div>

          <motion.div variants={logoVariants} className="flex flex-col items-center md:items-end gap-1 md:gap-2 font-black text-[10px] sm:text-xs md:text-sm uppercase text-black/80 text-center md:text-right pb-1 md:pb-2">
            <p className="flex items-center gap-1 md:gap-2">Made with <span className="text-[#f26c9d] text-sm md:text-base">♡</span> in India</p>
            <p>SOLACE © {new Date().getFullYear()}</p>
          </motion.div>
          
        </motion.div>
        
      </div>
    </footer>
  );
};

export default Footer;