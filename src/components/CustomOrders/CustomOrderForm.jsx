import React, { useState } from 'react';
import ColorSelector from './ColorSelector';
import UploadBox from './UploadBox';

const productOptions = [
  { id: 'bracelet', name: 'Bracelet', icon: '✨' },
  { id: 'phone_charm', name: 'Phone Charm', icon: '📱' },
  { id: 'keychain', name: 'Keychain', icon: '🔑' },
  { id: 'necklace', name: 'Necklace', icon: '📿' },
  { id: 'other', name: 'Something Else', icon: '🌈' },
];

const budgetOptions = ['Under $20', '$20–35', '$35–50', 'No Preference'];
const occasionOptions = ['Birthday', 'Gift', 'Friendship', 'Anniversary', 'Just Because', 'Other'];

const CustomOrderForm = ({ onSubmitSuccess }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Combine state data with form data
    const finalData = {
      ...data,
      productType: selectedProduct,
      vibeColor: selectedColor,
      inspirationFiles: files,
    };

    onSubmitSuccess(finalData);
  };

  // Reusable component for form section labels
  const FormLabel = ({ children, step }) => (
    <div className="flex items-center gap-4 mb-6">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-[3px] border-black flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000]">
        {step}
      </span>
      <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tighter text-black drop-shadow-[2px_2px_0px_#FFDA22]">
        {children}
      </h2>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12 bg-white border-[6px] md:border-[8px] border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_#000]">
      
      {/* 1. Customer Info */}
      <section>
        <FormLabel step="1">Who are you?</FormLabel>
        <div className="grid md:grid-cols-2 gap-6">
          <input type="text" name="fullName" placeholder="FULL NAME" required className="solace-input" />
          <input type="email" name="email" placeholder="EMAIL ADDRESS" required className="solace-input" />
          <input type="tel" name="phone" placeholder="PHONE NUMBER (OPTIONAL)" className="solace-input md:col-span-2" />
        </div>
      </section>

      {/* 2. Choose Product - CARDS */}
      <section>
        <FormLabel step="2">What are we making?</FormLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {productOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelectedProduct(option.id)}
              className={`group flex flex-col items-center justify-center text-center p-6 bg-[#FAF8F0] border-[4px] border-black shadow-[6px_6px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all aspect-square ${
                selectedProduct === option.id ? 'bg-[#FFDA22] shadow-[2px_2px_0px_#000] translate-x-1 translate-y-1' : ''
              }`}
            >
              <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">{option.icon}</span>
              <span className="font-black uppercase text-sm md:text-base text-black tracking-tight leading-tight">
                {option.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Idea & Colors */}
      <section className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <FormLabel step="3">Describe Your Idea</FormLabel>
          <textarea 
            name="ideaDescription" 
            placeholder="Tell me about your dream accessory... what vibes, patterns, or specific beads do you imagine?" 
            required 
            rows="6" 
            className="solace-input resize-none"
          />
        </div>
        <div>
          <h3 className="font-black text-xl uppercase text-black mb-4 drop-shadow-[1px_1px_0px_#fff]">Pick a Vibe Palette</h3>
          <ColorSelector selected={selectedColor} onSelect={setSelectedColor} />
        </div>
      </section>

      {/* 4. Inspiration */}
      <section>
        <FormLabel step="4">Inspiration Station</FormLabel>
        <UploadBox files={files} setFiles={setFiles} />
      </section>

      {/* 5. Logistics (Budget/Occasion) */}
      <section className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="solace-sub-header">Budget Preference (Optional)</h3>
          <div className="flex flex-wrap gap-3">
            {budgetOptions.map(opt => (
              <label key={opt} className="solace-pill-label">
                <input type="radio" name="budget" value={opt} className="sr-only solace-pill-radio" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="solace-sub-header">What's the Occasion?</h3>
          <div className="flex flex-wrap gap-3">
            {occasionOptions.map(opt => (
              <label key={opt} className="solace-pill-label">
                <input type="radio" name="occasion" value={opt} className="sr-only solace-pill-radio" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <div className="border-t-[4px] border-black pt-12 mt-4 flex justify-center">
        <button 
          type="submit" 
          className="relative inline-flex items-center gap-3 bg-[#FFDA22] hover:bg-[#F5689E] text-black border-[4px] border-black px-12 py-5 font-black uppercase text-xl md:text-2xl shadow-[8px_8px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all group"
        >
          <span>✨ Start My Custom Order</span>
        </button>
      </div>
    </form>
  );
};

export default CustomOrderForm;