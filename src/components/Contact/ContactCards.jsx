import React from 'react';
import { Mail, AtSign, MapPin } from 'lucide-react';

const ContactCards = () => {
  const cards = [
    {
      id: 1,
      icon: <Mail strokeWidth={2.5} className="w-6 h-6 text-black/80" />,
      title: "Email Us",
      detail: "hello@solace.com",
      subtext: "We aim to reply within 24 hours.",
      bg: "bg-[#FFDA22]"
    },
    {
      id: 2,
      icon: <AtSign strokeWidth={2.5} className="w-6 h-6 text-black/80" />,
      title: "Slide into our DMs",
      detail: "@solace.beads",
      subtext: "Tag us to be featured!",
      bg: "bg-[#F5689E]"
    },
    {
      id: 3,
      icon: <MapPin strokeWidth={2.5} className="w-6 h-6 text-black/80" />,
      title: "Studio Location",
      detail: "Made in India",
      subtext: "Handcrafted with ♡",
      bg: "bg-white"
    }
  ];

  return (
    
    <div className="flex flex-row lg:flex-col gap-4 w-full">
      {cards.map((card) => (
        <div 
          key={card.id}
          
          className={`flex flex-1 justify-center lg:justify-start items-center lg:items-start gap-0 lg:gap-5 p-4 lg:p-6 rounded-3xl border border-black/5 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${card.bg}`}
        >
          <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl shadow-sm flex-shrink-0">
            {card.icon}
          </div>
          
        
          <div className="hidden lg:flex flex-col pt-1">
            <h3 className="font-black tracking-wide text-lg text-black/90 mb-0.5">
              {card.title}
            </h3>
            <p className="font-semibold text-base text-black/80 mb-2">
              {card.detail}
            </p>
            <p className="font-medium text-xs tracking-widest text-black/50 uppercase">
              {card.subtext}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;