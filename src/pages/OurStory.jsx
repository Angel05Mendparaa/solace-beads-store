import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import OurStoryNarrative from '../components/OurStory/OurStoryNarrative.jsx';
import MeetTheMaker from '../components/OurStory/MeetTheMaker.jsx';
import Footer from '../components/Footer/Footer.jsx';
import BackButton from '../components/common/BackButton.jsx';

const OurStory = () => {
  return (
    <main className="relative w-full bg-black font-sans z-10">
      <Navbar />
      <div className="absolute top-104px md:top-128px left-0 w-full z-30 pointer-events-none">
        <div className="pointer-events-auto">
          <BackButton />
        </div>
      </div>
      <OurStoryNarrative />
      <MeetTheMaker />
      <Footer />
    </main>
  );
};

export default OurStory;