import React from 'react';

const CustomHero = () => {
  return (
    <section className="w-full pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
      {/* Playful sticker-style badge */}
      <span className="inline-block bg-[#F5689E] text-black font-black uppercase text-xs md:text-sm px-4 py-1.5 border-[3px] border-black shadow-[4px_4px_0px_#000] rotate-[-3deg] mb-6">
        Unique • For You • Always
      </span>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-black leading-[0.9] drop-shadow-[4px_4px_0px_#FFDA22]">
        Let's Make <br /> Magic Together
      </h1>
      
      <p className="mt-8 font-bold text-black/80 max-w-2xl text-base md:text-xl leading-relaxed">
        Have a dream accessory in mind? I’d love to bring it to life for you. Fill out the creative brief below, and let's create something too special to be mass produced. 💛
      </p>
    </section>
  );
};

export default CustomHero;