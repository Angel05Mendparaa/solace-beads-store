import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import pin1 from "../../assets/images/PIN1.png";
import pc1 from "../../assets/images/PC1.png";
import kc1 from "../../assets/images/KC1.png";
import b2 from "../../assets/images/B2.png";

const MotionLink = motion.create(Link);

const collections = [
  {
    id: 1,
    title: "PINS",
    image: pin1,
    category: "pins",
    gridClass: "col-span-2 row-span-2 aspect-square",
    titleClass: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  },
  {
    id: 2,
    title: "CHARMS",
    image: pc1,
    category: "charms",
    gridClass: "col-span-1 aspect-square",
    titleClass: "text-xs sm:text-sm md:text-base lg:text-lg",
  },
  {
    id: 3,
    title: "BRACELETS",
    image: b2,
    category: "bracelets",
    gridClass: "col-span-1 aspect-square",
    titleClass: "text-xs sm:text-sm md:text-base lg:text-lg",
  },
  {
    id: 4,
    title: "KEYCHAINS",
    image: kc1,
    category: "keychains",
    gridClass: "col-span-1 aspect-square",
    titleClass: "text-xs sm:text-sm md:text-base lg:text-lg",
  }
];

const FeaturedCollections = () => {
  return (
    <section className="relative w-full bg-[#f9f8f3] py-10 md:py-16 px-4 md:px-8 lg:px-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-10 border-b-2 md:border-b-4 border-black pb-4 max-w-5xl mx-auto gap-2 md:gap-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-black tracking-tighter uppercase text-black">
          Curated <br className="hidden md:block" /> For You
        </h2>
        <p className="text-xs md:text-base font-bold max-w-xs text-black">
          Explore our handmade collections, crafted to help you express your loudest self.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 lg:gap-4 w-full max-w-5xl mx-auto">
        {collections.map((collection, index) => (
          <MotionLink
            to={`/collections?category=${collection.category}`}
            key={collection.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className={`group relative overflow-hidden bg-black border-2 md:border-4 border-black cursor-pointer shadow-lg w-full block ${collection.gridClass}`}
          >
            
            <img 
              src={collection.image} 
              alt={collection.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>

            {/* Collection Text & Icon */}
            <div className="absolute inset-0 p-2 md:p-4 lg:p-5 flex flex-col justify-end">
              <div className="flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 gap-1">
                <h3 className={`font-black text-white uppercase tracking-wide md:tracking-wider drop-shadow-md leading-tight ${collection.titleClass}`}>
                  {collection.title}
                </h3>
                
                <div className="bg-brand-yellow text-black p-1 md:p-1.5 lg:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shrink-0">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-5 lg:w-5 lg:h-5" strokeWidth={3} />
                </div>
              </div>
            </div>
            
          </MotionLink>
        ))}

        <Link
          to="/collections"
          className="col-span-1 aspect-square flex flex-col items-center justify-center gap-2 border-2 md:border-4 border-black border-dashed bg-[#f9f8f3] hover:bg-black hover:text-white text-black transition-colors duration-500 group"
        >
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={3} />
          <span className="font-black uppercase text-xs sm:text-sm md:text-base tracking-wider text-center px-2">View All</span>
        </Link>
      </div>
      
    </section>
  );
};

export default FeaturedCollections;