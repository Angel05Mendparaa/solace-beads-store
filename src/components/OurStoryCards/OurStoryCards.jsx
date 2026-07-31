import React from 'react';

const OurStoryCards = () => {
  return (
    <div className="relative z-10 w-full h-[250vh]">
      
      {/* CARD 1 TRACK */}
      <div className="absolute top-0 w-full h-[250vh]">
        <div className="sticky top-0 w-full h-screen flex items-center justify-center p-6">
          
          <div className="relative bg-[#D9E6F1] p-8 sm:p-12 md:p-16 max-w-3xl shadow-[12px_12px_0px_0px_#000] rotate-[-2deg]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/10 -rotate-3 mix-blend-multiply"></div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-8 text-black leading-[0.9]">
              Some things are <br /> too special to be <br /> mass produced.
            </h2>
            
            <p className="text-sm sm:text-base md:text-xl font-bold text-black/80 leading-relaxed">
              Every bead is chosen with intention. Every knot is tied by hand. Every finished piece carries a little bit of the care, creativity, and passion that inspired SOLACE from the beginning.
              <br /><br />
              It may seem like a small accessory, but my hope is that when you wear it, it becomes part of your story—whether it's a gift, a reminder of someone special, or simply something that makes you smile.
            </p>
          </div>
          
        </div>
      </div>

      {/* CARD 2 TRACK */}
      <div className="absolute top-[100vh] w-full h-[150vh]">
        <div className="sticky top-0 w-full h-screen flex items-center justify-center p-6">
          
          <div className="relative bg-[#FCEB9C] p-8 sm:p-12 md:p-16 max-w-2xl shadow-[12px_12px_0px_0px_#000] rotate-[3deg] mt-24 md:mt-32 ml-0 md:ml-12">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-black text-center leading-[0.9]">
              The best stories <br /> are the ones <br /> we carry with us.
            </h2>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default OurStoryCards;