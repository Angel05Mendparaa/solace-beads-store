import React from 'react';
import { motion } from 'framer-motion';

// Import the image directly based on your file structure
import meetTheMakerImg from '../../assets/images/MeetTheMaker.png';

const MeetTheMaker = () => {
  return (
    // Changed to a <section> with h-[100vh] to perfectly lock it to one screen height
    <section className="relative z-20 w-full h-[100vh] bg-black overflow-hidden flex items-center justify-center">
      
      
      <motion.img 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        src={meetTheMakerImg} 
        alt="Meet the Maker behind SOLACE" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      
    </section>
  );
};

export default MeetTheMaker;