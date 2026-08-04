import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CollectionHero from '@/components/Collections/CollectionHero';
import VinylSelector from '@/components/Collections/VinylSelector';
import CollectionControls from '@/components/Collections/CollectionControls';
import ProductGrid from '@/components/Collections/ProductGrid';
import BackButton from '@/components/common/BackButton';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const collectionData = [
  { id: 0, title: 'Pins', desc: 'Pin it on everything', icon: '🖈' },
  { id: 1, title: 'Keychains', desc: 'Accessorize your keys', icon: '🏷' },
  { id: 2, title: 'Bracelets', desc: 'Hand-knotted & beaded', icon: '𓋜' },
  { id: 3, title: 'Charms', desc: 'Keep your tech cute', icon: '✮⋆˙' },
  { id: 4, title: 'Custom', desc: 'Made exactly for you', icon: '𓆏' },
  { id: 5, title: 'Coming Soon', desc: 'Secret new drops', icon: '✿' },
];

// Maps ?category= URL values to their index in collectionData
const getIndexFromCategory = (category) => {
  if (!category) return 0;
  const index = collectionData.findIndex(
    (c) => c.title.toLowerCase() === category.toLowerCase()
  );
  return index === -1 ? 0 : index;
};

const Collections = () => {
  const [searchParams] = useSearchParams();
  const [currentIndex, setCurrentIndex] = useState(() =>
    getIndexFromCategory(searchParams.get('category'))
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === collectionData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? collectionData.length - 1 : prev - 1));
  };

  const activeCollection = collectionData[currentIndex];

  return (
    <div>
      <main className="min-h-screen bg-[#FAF8F0] font-sans pb-12 overflow-hidden">
        <Navbar />
        <BackButton />
        <CollectionHero />
        
        {/* The Interactive Vinyl Section */}
        <section className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center py-6 md:py-10 px-4">
          <VinylSelector 
            collections={collectionData} 
            currentIndex={currentIndex} 
          />
          <CollectionControls onPrev={handlePrev} onNext={handleNext} />
        </section>

        {/* The Product Grid below */}
        <ProductGrid activeCollection={activeCollection} />
      </main>
      <Footer />
    </div>
  );
};

export default Collections;