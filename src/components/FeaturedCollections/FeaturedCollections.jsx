import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import spidy from "../../assets/images/spidy.jpg";
import spidy_bracelet from "../../assets/images/spidy_bracelet.jpg";
import heart from "../../assets/images/heart.jpg";
import circleImage from "../../assets/images/circle.jpg";

const collections = [
  {
    id: 1,
    title: "CHUNKY CHARMS",
    image: spidy,
    gridClass: "col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "BEADED BRACELETS",
    image: spidy_bracelet,
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "CUSTOM RINGS",
    image: circleImage,
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "STATEMENT NECKLACES",
    image: heart,
    gridClass: "col-span-3 row-span-1",
  }
];

const FeaturedCollections = () => {
  return (
    <section className="relative w-full bg-[#f9f8f3] py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      
      {/* Section Header */}
      {/* Scaled down to max-w-5xl and reduced the text sizes for a less aggressive look */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-10 border-b-2 md:border-b-4 border-black pb-4 gap-4 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase text-black">
          Curated <br className="hidden md:block" /> For You
        </h2>
        <p className="text-xs md:text-base font-bold max-w-xs text-black leading-relaxed">
          Explore our handmade collections, crafted to help you express your loudest self.
        </p>
      </div>

      {/* The Editorial Grid */}
      {/* Reduced the overall height significantly so it doesn't take over the whole screen */}
      <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 w-full max-w-5xl mx-auto h-350px sm:h-400px md:h-500px lg:h-550px">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            // Reduced border thickness slightly on smaller screens
            className={`group relative overflow-hidden bg-black border-2 md:border-4 border-black cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-full ${collection.gridClass}`}
          >
            {/* Background Image */}
            <img 
              src={collection.image} 
              alt={collection.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

            {/* Collection Text & Icon */}
            <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end">
              <div className="flex items-end sm:items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 gap-2">
                {/* Scaled down the text so it looks elegant and understated */}
                <h3 className="text-[9px] sm:text-xs md:text-lg lg:text-xl font-black text-white uppercase tracking-wide md:tracking-widest drop-shadow-md leading-tight">
                  {collection.title}
                </h3>
                
                <div className="bg-brand-yellow text-black p-1 md:p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-md shrink-0">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" strokeWidth={3} />
                </div>
              </div>
            </div>
            
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default FeaturedCollections;