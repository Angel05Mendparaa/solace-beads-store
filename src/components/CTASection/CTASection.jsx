import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-8 bg-[#faf9f6] overflow-hidden flex items-center justify-center z-10 font-sans">
      
      <div className="absolute top-0 right-0 md:right-20 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#f26c9d] rounded-full blur-[80px] md:blur-[120px] opacity-15 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 md:left-20 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#FFDA22] rounded-full blur-[80px] md:blur-[120px] opacity-15 pointer-events-none z-0" />

      <div className="relative w-full max-w-3xl bg-white/95 backdrop-blur-sm border-2 border-black p-8 sm:p-12 md:p-16 rounded-[2rem] flex flex-col items-center text-center z-10">

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-black uppercase tracking-tighter text-black leading-[1.05] relative z-10">
          Let's Make <br />
          <span className="text-[#f26c9d]">Something</span> <br />
          Special
        </h2>

        <p className="text-sm md:text-base font-medium text-black/70 mt-6 mb-8 max-w-md leading-relaxed">
          Have a design in mind? We'd love to collaborate and create an accessory that's uniquely yours.
        </p>

        <Link 
          to="/custom-orders" 
          className="group bg-black hover:bg-[#FFDA22] text-white hover:text-black border-2 border-black rounded-full px-8 py-3.5 md:px-10 md:py-4 font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 hover:translate-y-0.5 inline-flex items-center gap-2"
        >
          Design Yours
          <ArrowRight
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            strokeWidth={2.5}
          />
        </Link>

      </div>
    </section>
  );
};

export default CTASection;