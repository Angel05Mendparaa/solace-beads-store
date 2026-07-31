import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ activeCollection }) => {
  // Generating dummy data based on the active collection so you can see it working
  const products = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    name: `${activeCollection.title} Item ${i + 1}`,
    price: '$' + (Math.floor(Math.random() * 15) + 10),
    image: 'https://images.unsplash.com/photo-1596943632943-2617f14b0b14?q=80&w=800'
  }));

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-end mb-8 border-b-[4px] border-black pb-4">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-black drop-shadow-[2px_2px_0px_#FFDA22]">
          {activeCollection.title}
        </h2>
        <span className="font-black bg-[#F5689E] text-black px-3 py-1 border-[3px] border-black uppercase text-sm shadow-[3px_3px_0px_0px_#000] rotate-2">
          {activeCollection.count} items
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;