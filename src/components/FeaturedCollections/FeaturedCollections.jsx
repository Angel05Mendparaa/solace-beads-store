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
    // Heights scale precisely: Mobile (208px) -> Tablet (312px) -> Desktop (400px)
    gridClass: "col-span-2 row-span-2 h-[208px] md:h-[312px] lg:h-[400px]",
    titleClass: "text-sm sm:text-lg md:text-2xl lg:text-3xl",
  },
  {
    id: 2,
    title: "BEADED BRACELETS",
    image: spidy_bracelet,
    // Heights scale precisely: Mobile (100px) -> Tablet (150px) -> Desktop (192px)
    gridClass: "col-span-1 h-[100px] md:h-[150px] lg:h-[192px]",
    titleClass: "text-[8px] sm:text-xs md:text-sm lg:text-lg",
  },
  {
    id: 3,
    title: "CUSTOM RINGS",
    image: circleImage,
    gridClass: "col-span-1 h-[100px] md:h-[150px] lg:h-[192px]",
    titleClass: "text-[8px] sm:text-xs md:text-sm lg:text-lg",
  },
  {
    id: 4,
    title: "STATEMENT NECKLACES",
    image: heart,
    gridClass: "col-span-2 h-[100px] md:h-[150px] lg:h-[192px]",
    titleClass: "text-[10px] sm:text-sm md:text-lg lg:text-2xl",
  }
];

const FeaturedCollections = () => {
  return (
    // Adjusted padding to be smaller on mobile (px-4, py-10) and grow on desktop
    <section className="relative w-full bg-[#f9f8f3] py-10 md:py-16 px-4 md:px-8 lg:px-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-10 border-b-2 md:border-b-4 border-black pb-4 max-w-5xl mx-auto gap-2 md:gap-0">
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase text-black">
          Curated <br className="hidden md:block" /> For You
        </h2>
        <p className="text-xs md:text-base font-bold max-w-xs text-black">
          Explore our handmade collections, crafted to help you express your loudest self.
        </p>
      </div>

      {/* The Gallery Grid - Locked to 4 columns everywhere, dynamic gaps (gap-2 to gap-4) */}
      <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4 w-full max-w-5xl mx-auto">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            // Borders scale from 2px on mobile to 4px on desktop
            className={`group relative overflow-hidden bg-black border-2 md:border-4 border-black cursor-pointer shadow-lg w-full ${collection.gridClass}`}
          >
            {/* Background Image */}
            <img 
              src={collection.image} 
              alt={collection.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>

            {/* Collection Text & Icon */}
            {/* Padding shrinks to p-2 on mobile so text doesn't hit the edges */}
            <div className="absolute inset-0 p-2 md:p-4 lg:p-5 flex flex-col justify-end">
              <div className="flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 gap-1">
                <h3 className={`font-black text-white uppercase tracking-wide md:tracking-wider drop-shadow-md leading-tight ${collection.titleClass}`}>
                  {collection.title}
                </h3>
                
                {/* Arrow icon shrinks on mobile to save space */}
                <div className="bg-brand-yellow text-black p-1 md:p-1.5 lg:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shrink-0">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-5 lg:w-5 lg:h-5" strokeWidth={3} />
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