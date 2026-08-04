import React from 'react';
import heroImage from "../../assets/images/ourstory_image.jpg";

const TapeAccent = ({ className }) => (
  <div className={`absolute bg-black/10 mix-blend-multiply rounded-sm ${className}`}></div>
);

const OurStoryNarrative = () => {
  return (
    <section className="relative w-full bg-black">
      {/* 1. The Master Wrapper: Dictates how long the background stays sticky */}
      
      {/* 2. The Sticky Background: Sticks to the screen ONLY while scrolling through this section */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden z-0">
        <img
          src={heroImage}
          alt="Handcrafting SOLACE jewelry"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 3. The Content Track: We use -mt-[100dvh] to pull this content up over the sticky image */}
      <div className="relative z-10 -mt-[100dvh]">
        
        {/* Hero Spacer: Gives the user a full screen to just look at the image before the cards appear */}
        <div className="w-full h-[100dvh]" aria-label="Our Story Hero"></div>

        <div className="relative w-full h-[250vh]">
          
          {/* CARD 1 TRACK */}
          <div className="absolute top-0 w-full h-[250vh]">
            <div className="sticky top-0 w-full h-[100dvh] flex items-center justify-center p-4 sm:p-6">
              <article className="relative bg-[#D9E6F1] p-6 sm:p-10 md:p-16 w-[95%] sm:w-auto max-w-3xl rounded-2xl sm:rounded-[3rem] rotate-[-2deg]">
                <TapeAccent className="-top-3 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-5 sm:h-6 -rotate-3" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-black uppercase tracking-tighter mb-4 sm:mb-6 md:mb-8 text-black leading-[1.1] sm:leading-[1]">
                  Some things are <br className="hidden sm:block" /> too special to be <br className="hidden sm:block" /> mass produced.
                </h2>
                <p className="text-sm sm:text-base md:text-xl font-bold text-black/75 leading-relaxed">
                  Every bead is chosen with intention. Every knot is tied by hand. Every finished piece carries a little bit of the care, creativity, and passion that inspired SOLACE from the beginning.
                  <br /><br className="hidden sm:block" />
                  <span className="block mt-2 sm:mt-0">
                    It may seem like a small accessory, but my hope is that when you wear it, it becomes part of your story—whether it's a gift, a reminder of someone special, or simply something that makes you smile.
                  </span>
                </p>
              </article>
            </div>
          </div>

          {/* CARD 2 TRACK */}
          <div className="absolute top-[100vh] w-full h-[150vh]">
            <div className="sticky top-0 w-full h-[100dvh] flex items-center justify-center p-4 sm:p-6">
              <article className="relative bg-[#FCEB9C] p-6 sm:p-10 md:p-16 w-[95%] sm:w-auto max-w-2xl rounded-2xl sm:rounded-[3rem] rotate-[3deg] mt-4 sm:mt-12 md:mt-24 ml-0 md:ml-12 shadow-2xl">
                <TapeAccent className="-top-2 right-1/4 w-16 sm:w-20 h-4 sm:h-5 rotate-6" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-black uppercase tracking-tighter text-black text-center leading-[1.1] sm:leading-[1]">
                  The best stories <br className="hidden sm:block" /> are the ones <br className="hidden sm:block" /> we carry with us.
                </h2>
              </article>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default OurStoryNarrative;