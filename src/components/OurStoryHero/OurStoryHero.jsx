import React from 'react';
import image from "../../assets/images/ourstory_image.jpg";

const OurStoryHero = () => {
  return (
    <>
      {/* IMAGE 1: The Fixed Background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <img 
          src={image} 
          alt="Handcrafting SOLACE jewelry" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 w-full h-screen pointer-events-none"></div>
    </>
  );
};

export default OurStoryHero;