import React, { useState } from 'react';
import CollectionHero from '../components/Collections/CollectionHero';
import VinylSelector from '../components/Collections/VinylSelector';
import CollectionCenter from '../components/Collections/CollectionCenter';
import CollectionControls from '../components/Collections/CollectionControls';
import ProductGrid from '../components/Collections/ProductGrid';

const collectionData = [
  { id: 0, title: 'Bracelets', desc: 'Hand-knotted & beaded', count: 24, icon: '✨' },
  { id: 1, title: 'Phone Charms', desc: 'Keep your tech cute', count: 18, icon: '📱' },
  { id: 2, title: 'Keychains', desc: 'Accessorize your keys', count: 12, icon: '🔑' },
  { id: 3, title: 'Pins', desc: 'Pin it on everything', count: 8, icon: '📌' },
  { id: 4, title: 'Custom Orders', desc: 'Made exactly for you', count: 1, icon: '💌' },
  { id: 5, title: 'Coming Soon', desc: 'Secret new drops', count: 0, icon: '🔒' },
];

const Collections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === collectionData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? collectionData.length - 1 : prev - 1));
  };

  const activeCollection = collectionData[currentIndex];

  return (
    <main className="min-h-screen bg-[#FAF8F0] font-sans pb-24 overflow-hidden">
      <CollectionHero />
      
      {/* The Interactive Vinyl Section */}
      <section className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center py-12 md:py-20 px-4">
        <VinylSelector 
          collections={collectionData} 
          currentIndex={currentIndex} 
        />
        <CollectionControls onPrev={handlePrev} onNext={handleNext} />
      </section>

      {/* The Product Grid below */}
      <ProductGrid activeCollection={activeCollection} />
    </main>
  );
};

export default Collections;