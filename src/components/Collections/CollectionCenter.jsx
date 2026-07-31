import React from 'react';

const CollectionCenter = ({ collection }) => {
  return (
    <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full bg-[#F5689E] border-[6px] border-black flex flex-col items-center justify-center text-center p-4 shadow-[inset_4px_4px_0px_rgba(0,0,0,0.1)]">
      {/* Record Spindle Hole */}
      <div className="w-4 h-4 rounded-full bg-[#FAF8F0] border-2 border-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      <div className="relative z-10 mt-6">
        <h3 className="font-black text-xl md:text-2xl uppercase tracking-tighter text-black leading-none drop-shadow-[1px_1px_0px_#fff]">
          {collection.title}
        </h3>
        <p className="font-bold text-xs md:text-sm text-black/80 mt-1 uppercase italic">
          {collection.desc}
        </p>
        <div className="mt-3 bg-[#FFDA22] border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase inline-block shadow-[2px_2px_0px_0px_#000]">
          {collection.count} Items
        </div>
      </div>
    </div>
  );
};

export default CollectionCenter;