import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="bg-[#FFDA22] text-black rounded-full px-4 py-2 w-max flex items-center gap-2 font-black uppercase text-sm z-30 relative ml-4 md:ml-10 mt-4 md:mt-6 transition-transform hover:scale-105 active:scale-95"
      aria-label="Back to Home"
    >
      <ArrowLeft strokeWidth={3} className="w-4 h-4 md:w-5 md:h-5" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;