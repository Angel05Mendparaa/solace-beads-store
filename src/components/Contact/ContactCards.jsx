import React from 'react';
// 1. Swapped 'Instagram' for 'AtSign'
import { Mail, AtSign, MapPin } from 'lucide-react';

const ContactCards = () => {
  const cards = [
    {
      id: 1,
      icon: <Mail strokeWidth={3} className="w-8 h-8" />,
      title: "Email Us",
      detail: "hello@solace.com",
      subtext: "We aim to reply within 24 hours.",
      bg: "bg-[#FFDA22]"
    },
    {
      id: 2,
      // 2. Updated the icon component here
      icon: <AtSign strokeWidth={3} className="w-8 h-8" />,
      title: "Slide into our DMs",
      detail: "@solace.beads",
      subtext: "Tag us to be featured!",
      bg: "bg-[#F5689E]"
    },
    {
      id: 3,
      icon: <MapPin strokeWidth={3} className="w-8 h-8" />,
      title: "Studio Location",
      detail: "Made in India",
      subtext: "Handcrafted with ♡",
      bg: "bg-white"
    }
  ];

  return (
    <>
      {cards.map((card) => (
        <div 
          key={card.id}
          className={`flex items-start gap-4 p-6 border-[4px] border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all ${card.bg}`}
        >
          <div className="bg-white border-[3px] border-black p-3 shadow-[3px_3px_0px_#000]">
            {card.icon}
          </div>
          <div>
            <h3 className="font-black uppercase text-xl text-black leading-tight">
              {card.title}
            </h3>
            <p className="font-bold text-lg text-black/90 mt-1">
              {card.detail}
            </p>
            <p className="font-bold text-xs text-black/60 uppercase mt-1">
              {card.subtext}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactCards;