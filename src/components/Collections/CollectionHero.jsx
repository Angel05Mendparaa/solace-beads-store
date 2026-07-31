import React from 'react';

const CollectionHero = () => {
  return (
    <div className="w-full pt-24 pb-8 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black drop-shadow-[4px_4px_0px_#FFDA22]">
        Collections
      </h1>
      <p className="mt-4 font-bold text-black/80 max-w-md text-sm md:text-base">
        Spin the record to explore our handcrafted drops. Every piece is unique, just like you.
      </p>
    </div>
  );
};

export default CollectionHero;