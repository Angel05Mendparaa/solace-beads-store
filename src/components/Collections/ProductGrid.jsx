import React from 'react';
import ProductCard from '@/components/Collections/ProductCard';

// Product images
import PIN1 from '@/assets/images/PIN1.png';
import PIN2 from '@/assets/images/PIN2.png';
import PIN3 from '@/assets/images/PIN3.png';
import PIN4 from '@/assets/images/PIN4.png';

import KC1 from '@/assets/images/KC1.png';
import KC2 from '@/assets/images/KC2.png';
import KC3 from '@/assets/images/KC3.png';
import KC4 from '@/assets/images/KC4.png';

import B1 from '@/assets/images/B1.png';
import B2 from '@/assets/images/B2.png';
import B3 from '@/assets/images/B3.png';
import B4 from '@/assets/images/B4.png';

import PC1 from '@/assets/images/PC1.png';
import PC2 from '@/assets/images/PC2.png';
import PC3 from '@/assets/images/PC3.png';
import PC4 from '@/assets/images/PC4.png';

import CUSTOMdesign from '@/assets/images/CUSTOMdesign.png';
import COMINGsoon from '@/assets/images/COMINGsoon.png';

// Real product data per collection.
const PRODUCT_DATA = {
  Pins: [
    { image: PIN1, name: 'Batman Pin' },
    { image: PIN2, name: 'Love Pin' },
    { image: PIN3, name: 'Nemo Pin' },
    { image: PIN4, name: 'Spidy Pin' },
  ],
  Keychains: [
    { image: KC1, name: 'Orange Keychain' },
    { image: KC2, name: 'Butterfly Keychain' },
    { image: KC3, name: 'Star Keychain' },
    { image: KC4, name: 'Flower Keychain' },
  ],
  Bracelets: [
    { image: B1, name: 'F1 Bracelet' },
    { image: B2, name: 'Forest Bracelet' },
    { image: B3, name: 'Blush Bracelet' },
    { image: B4, name: 'Hello Kitty Bracelet' },
  ],
  Charms: [
    { image: PC1, name: 'Guitar Charm' },
    { image: PC2, name: 'Flower Charm' },
    { image: PC3, name: 'Grape Charm' },
    { image: PC4, name: 'Plant Charm' },
  ],
  Custom: [
    { image: CUSTOMdesign, name: 'Custom Design' },
    { image: CUSTOMdesign, name: 'Custom Design' },
    { image: CUSTOMdesign, name: 'Custom Design' },
    { image: CUSTOMdesign, name: 'Custom Design' },
  ],
  'Coming Soon': [
    { image: COMINGsoon, name: 'Coming Soon' },
    { image: COMINGsoon, name: 'Coming Soon' },
    { image: COMINGsoon, name: 'Coming Soon' },
    { image: COMINGsoon, name: 'Coming Soon' },
  ],
};

const ProductGrid = ({ activeCollection }) => {
  const items = PRODUCT_DATA[activeCollection.title] || [];

  const isCustom = activeCollection.title === 'Custom';
  const isComingSoon = activeCollection.title === 'Coming Soon';
  const disableQuickAdd = isCustom || isComingSoon;

  const products = items.map((item, i) => ({
    id: i,
    name: item.name,
    price: '₹' + (Math.floor(Math.random() * 50) + 60),
    image: item.image,
  }));

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-8 md:py-12">
      <div className="flex justify-between items-end mb-8 border-b-[4px] border-black pb-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-black uppercase text-black drop-shadow-[2px_2px_0px_#FFDA22]">
          {activeCollection.title}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            disableQuickAdd={disableQuickAdd}
            navigateTo={isCustom ? '/custom-orders' : undefined}
            disabledLabel={isCustom ? 'Tap to Customize' : isComingSoon ? 'Coming Soon' : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;