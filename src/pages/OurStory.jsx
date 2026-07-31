import React from 'react';
import OurStoryHero from '../components/OurStoryHero/OurStoryHero.jsx';
import OurStoryCards from '../components/OurStoryCards/OurStoryCards.jsx';
import MeetTheMaker from '../components/MeetTheMaker/MeetTheMaker.jsx';
import Footer from '../components/Footer/Footer.jsx';

const OurStory = () => {
  return (
    <main className="relative w-full bg-black font-sans">
      <OurStoryHero />
      <OurStoryCards />
      <MeetTheMaker />
      <Footer />
    </main>
  );
};

export default OurStory;