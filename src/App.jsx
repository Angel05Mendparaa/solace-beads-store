import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import InfiniteMarquee from './components/InfiniteMarquee/InfiniteMarquee.jsx'
import FeaturedCollections from './components/FeaturedCollections/FeaturedCollections.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfiniteMarquee />
      <FeaturedCollections />
    </div>
  )
}

export default App
