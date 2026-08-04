import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CollectionControls = ({ onPrev, onNext }) => {
  return (
    <div className="flex gap-4 sm:gap-6 mt-8 sm:mt-12 z-20">
      <button
        onClick={onPrev}
        className="bg-#FFDA22 text-black rounded-full p-3 sm:p-4"
        aria-label="Previous Collection"
      >
        <ArrowLeft strokeWidth={3} className="w-5 h-5 md:w-8 md:h-8" />
      </button>

      <button
        onClick={onNext}
        className="bg-#FFDA22 text-black rounded-full p-3 sm:p-4"
        aria-label="Next Collection"
      >
        <ArrowRight strokeWidth={3} className="w-5 h-5 md:w-8 md:h-8" />
      </button>
    </div>
  );
};

export default CollectionControls;