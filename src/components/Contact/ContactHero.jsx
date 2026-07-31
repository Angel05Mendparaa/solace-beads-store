import React from 'react';

const ContactHero = () => {
  return (
    <section className="w-full pt-24 pb-12 md:pt-32 md:pb-16 flex flex-col items-center justify-center text-center px-4">
      <span className="inline-block bg-[#FFDA22] text-black font-black uppercase text-xs md:text-sm px-4 py-1.5 border-[3px] border-black shadow-[4px_4px_0px_#000] rotate-[2deg] mb-6">
        Don't be a stranger 👋
      </span>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-black leading-[0.9] drop-shadow-[4px_4px_0px_#F5689E]">
        Say Hello
      </h1>
      
      <p className="mt-6 font-bold text-black/80 max-w-xl text-base md:text-lg leading-relaxed">
        Got a question about an order, want to collaborate, or just want to tell us how much you love your new beads? Drop us a line!
      </p>
    </section>
  );
};

export default ContactHero;