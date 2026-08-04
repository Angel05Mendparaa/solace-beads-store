import React from 'react';
import { Check } from 'lucide-react';

const vibePalettes = [
  { id: 'pastel', name: 'Pastel Dreams', colors: ['#FFC8DD', '#FFEBEE', '#CDB4DB', '#A2D2FF', '#BDE0FE'] },
  { id: 'vibrant', name: 'Neon Vibe', colors: ['#FF007F', '#39FF14', '#4D4DFF', '#FFFF00', '#FF6600'] },
  { id: 'earthy', name: 'Earthy & Raw', colors: ['#A18262', '#E3D5CA', '#D5BDAF', '#8C7851', '#F5EBE0'] },
  { id: 'solace', name: 'SOLACE Signature', colors: ['#FFDA22', '#F5689E', '#FAF8F0', '#000000', '#FFFFFF'] },
  { id: 'dark', name: 'Moody & Goth', colors: ['#1A1A1A', '#4A4A4A', '#800020', '#C0C0C0', '#FFFFFF'] },
];

const ColorSelector = ({ selected, onSelect }) => {
  return (
    <div className="flex flex-col gap-2.5">
      {vibePalettes.map((palette) => {
        const isSelected = selected === palette.id;
        return (
          <button
            key={palette.id}
            type="button"
            onClick={() => onSelect(palette.id)}
            className={`flex items-center justify-between p-3 bg-white border-[2px] rounded-xl transition-all duration-300 hover:translate-y-0.5 hover:bg-[#FAF8F0] ${
              isSelected ? 'bg-[#FFDA22] border-[3px] border-black' : 'border-black'
            }`}
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className={`flex-shrink-0 w-4 h-4 rounded-full border-2 border-black flex items-center justify-center transition-colors ${
                isSelected ? 'bg-black' : 'bg-white'
              }`}>
                {isSelected && <Check strokeWidth={4} className="w-2.5 h-2.5 text-white" />}
              </div>
              <span className="font-semibold text-xs uppercase tracking-widest text-black truncate">{palette.name}</span>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
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
        );
      })}
    </div>
  );
};

export default ColorSelector;