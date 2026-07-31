import React from 'react';

const vibePalettes = [
  { id: 'pastel', name: 'Pastel Dreams', colors: ['#FFC8DD', '#FFEBEE', '#CDB4DB', '#A2D2FF', '#BDE0FE'] },
  { id: 'vibrant', name: 'Neon Vibe', colors: ['#FF007F', '#39FF14', '#4D4DFF', '#FFFF00', '#FF6600'] },
  { id: 'earthy', name: 'Earthy & Raw', colors: ['#A18262', '#E3D5CA', '#D5BDAF', '#8C7851', '#F5EBE0'] },
  { id: 'solace', name: 'SOLACE Signature', colors: ['#FFDA22', '#F5689E', '#FAF8F0', '#000000', '#FFFFFF'] },
  { id: 'dark', name: 'Moody & Goth', colors: ['#1A1A1A', '#4A4A4A', '#800020', '#C0C0C0', '#FFFFFF'] },
];

const ColorSelector = ({ selected, onSelect }) => {
  return (
    <div className="flex flex-col gap-3">
      {vibePalettes.map((palette) => (
        <button
          key={palette.id}
          type="button"
          onClick={() => onSelect(palette.id)}
          className={`flex items-center justify-between p-3 bg-white border-[3px] border-black shadow-[4px_4px_0px_#000] transition-all hover:bg-[#FAF8F0] ${
            selected === palette.id ? 'bg-[#FFDA22] border-[#F5689E]' : ''
          }`}
        >
          <span className="font-bold text-xs uppercase text-black mr-2 truncate">{palette.name}</span>
          <div className="flex items-center gap-1">
            {palette.colors.map((color, index) => (
              <div 
                key={index} 
                className="w-5 h-5 rounded-full border-2 border-black" 
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;