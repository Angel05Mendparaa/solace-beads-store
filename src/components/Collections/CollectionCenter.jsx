import React from 'react';

const CollectionCenter = ({ collection }) => {
  return (
    <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full bg-[#F5689E] border-[6px] border-black flex flex-col items-center justify-end text-center p-4 pb-10 md:pb-14 shadow-[inset_4px_4px_0px_rgba(0,0,0,0.08)]">
      {/* Record Spindle Hole */}
      <div className="w-4 h-4 rounded-full bg-[#FAF8F0] border-2 border-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <div className="relative z-10 px-2">
        <h3
          className="font-black text-lg md:text-xl uppercase tracking-[0.08em] text-black leading-snug"
          style={{ textShadow: '0.5px 0.5px 0px rgba(255,255,255,0.6)' }}
        >
          {collection.title}
        </h3>
      </div>
    </div>
  );
};

export default CollectionCenter;