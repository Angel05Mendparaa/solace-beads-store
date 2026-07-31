import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    // Reduced py-20 md:py-32 down to py-12 md:py-16
    <section className="relative w-full py-12 md:py-16 px-4 sm:px-8 bg-[#f9f8f3] overflow-hidden flex items-center justify-center z-10 font-sans">
      
      {/* 
        The Main Card
        Reduced internal padding (p-6 to p-12) to shrink the total height of the box
      */}
      <div className="relative w-full max-w-4xl bg-[#f26c9d] border-[6px] border-black p-6 sm:p-8 md:p-12 flex flex-col items-center text-center shadow-[12px_12px_0px_0px_#000] z-10">
        
        {/* Floating Coquette Bow */}
        <div className="absolute -top-6 right-4 md:-top-10 md:-right-6 text-5xl md:text-7xl drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] z-30">
          🎀
        </div>
        
        {/* --- The Content --- */}
        
        {/* Envelope */}
        <div className="text-4xl md:text-5xl mb-2 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          💌
        </div>

        {/* 
          Typography
        */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase tracking-tighter text-black leading-[0.9] mt-2 relative z-10">
          Let's Make <br />
          <span className="font-serif italic lowercase tracking-normal text-white drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] md:drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]">
            Something
          </span> <br />
          Special
        </h2>

        {/* Paragraph: Pulled up slightly with mt-6 instead of mt-8 */}
        <p className="text-sm md:text-lg font-bold text-black border-2 border-black bg-white p-3 md:p-4 mt-6 max-w-lg leading-relaxed shadow-[4px_4px_0px_0px_#000]">
          Have a design in mind? We'd love to create an accessory that's uniquely yours.
        </p>

        {/* 
          The Button: Pulled up slightly with mt-8 instead of mt-12
        */}

        <Link 
        to="/custom-orders" 
        className="bg-[#FFDA22] hover:bg-[#F5689E] text-black border-[4px] border-black px-8 py-4 font-black uppercase text-xl shadow-[8px_8px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-y-1 hover:translate-x-1 transition-all inline-block"
      >
        Design Yours ✨
      </Link>

      </div>
    </section>
  );
};

export default CTASection;