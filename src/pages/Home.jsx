import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import InfiniteMarquee from '../components/InfiniteMarquee/InfiniteMarquee.jsx';
import FeaturedCollections from '../components/FeaturedCollections/FeaturedCollections.jsx';
import AboutSection from '../components/AboutSection/AboutSection.jsx';
import CTASection from '../components/CTASection/CTASection.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfiniteMarquee />
      <FeaturedCollections />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default Home
