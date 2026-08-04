import React from 'react';
import { motion } from 'framer-motion';
import meetTheMakerImg from '../../assets/images/MeetTheMaker.png';

const MeetTheMaker = () => {
  return (

    <section className="relative z-20 w-full min-h-[30vh] overflow-hidden flex items-center justify-center bg-[#e3eff8]">
      
      <motion.img 
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        src={meetTheMakerImg} 
        alt="Meet the Maker behind SOLACE" 
        className="w-full h-auto object-contain block"
      />
      
    </section>
  );
};

export default MeetTheMaker;