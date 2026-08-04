import React, { useState } from 'react';
import ColorSelector from './ColorSelector';
import UploadBox from './UploadBox';

const productOptions = [
  { id: 'bracelet', name: 'Bracelet', icon: '𓋜' },
  { id: 'phone_charm', name: 'Phone Charm', icon: '✮⋆˙' },
  { id: 'keychain', name: 'Keychain', icon: '🏷' },
  { id: 'necklace', name: 'Pins', icon: '🖈' },
  { id: 'other', name: 'Something Else', icon: '𓆏' },
];

const budgetOptions = ['Under ₹100', '₹100–250', '₹250–500  ', 'No Preference'];
const occasionOptions = ['Birthday', 'Gift', 'Friendship', 'Anniversary', 'Just Because', 'Other'];

const SectionLabel = ({ children }) => (
  <h2 className="font-bold uppercase tracking-widest text-sm mb-4 text-black/80">
    {children}
  </h2>
);

const FieldLabel = ({ children }) => (
  <label className="block font-semibold uppercase tracking-widest text-xs mb-2 text-black/60">
    {children}
  </label>
);

const CustomOrderForm = ({ onSubmitSuccess }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    const finalData = {
      ...data,
      productType: selectedProduct,
      vibeColor: selectedColor,
      inspirationFiles: files,
    };

    onSubmitSuccess(finalData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10 bg-white border-[3px] md:border-[4px] border-black rounded-3xl p-5 sm:p-8 md:p-10">
      
      {/* 1. Customer Info */}
      <section>
        <SectionLabel>Who are you?</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <FieldLabel>Your Name</FieldLabel>
            <input type="text" name="fullName" placeholder="What do we call you?" required className="solace-input w-full" />
          </div>
          <div>
            <FieldLabel>Email Address</FieldLabel>
            <input type="email" name="email" placeholder="Where do we reply?" required className="solace-input w-full" />
          </div>
          <div className="sm:col-span-2">
            <FieldLabel>Phone Number (Optional)</FieldLabel>
            <input type="tel" name="phone" placeholder="Best number to reach you" className="solace-input w-full" />
          </div>
        </div>
      </section>

      {/* 2. Choose Product - CARDS */}
      <section>
        <SectionLabel>What are we making?</SectionLabel>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2 md:gap-3">
          {productOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelectedProduct(option.id)}
              className={`group flex flex-col items-center justify-center text-center p-1.5 sm:p-2 bg-[#FAF8F0] border-[2px] border-black rounded-lg transition-all duration-300 hover:translate-y-0.5 aspect-square ${
                selectedProduct === option.id ? 'bg-[#FFDA22]' : ''
              }`}
            >
              <span className="text-base sm:text-lg md:text-xl mb-0.5 sm:mb-1 group-hover:scale-110 transition-transform">{option.icon}</span>
              <span className="font-semibold uppercase text-[7px] sm:text-[8px] md:text-[10px] tracking-widest text-black leading-tight">
                {option.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Idea & Colors */}
      <section className="grid md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-2">
          <SectionLabel>Describe Your Idea</SectionLabel>
          <FieldLabel>Your Message</FieldLabel>
          <textarea 
            name="ideaDescription" 
            placeholder="Tell me about your dream accessory... what vibes, patterns, or specific beads do you imagine?" 
            required 
            rows="5" 
            className="solace-input w-full resize-none"
          />
        </div>
        <div>
          <SectionLabel>Pick a Vibe Palette</SectionLabel>
          <ColorSelector selected={selectedColor} onSelect={setSelectedColor} />
        </div>
      </section>

      {/* 4. Inspiration */}
      <section>
        <SectionLabel>Inspiration Station</SectionLabel>
        <UploadBox files={files} setFiles={setFiles} />
      </section>

      {/* 5. Logistics (Budget/Occasion) */}
      <section className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <FieldLabel>Budget Preference (Optional)</FieldLabel>
          <div className="flex flex-wrap gap-2">
            {budgetOptions.map(opt => (
              <label key={opt} className="solace-pill-label cursor-pointer rounded-full">
                <input type="radio" name="budget" value={opt} className="sr-only solace-pill-radio" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <FieldLabel>What's the Occasion?</FieldLabel>
          <div className="flex flex-wrap gap-2">
            {occasionOptions.map(opt => (
              <label key={opt} className="solace-pill-label cursor-pointer rounded-full">
                <input type="radio" name="occasion" value={opt} className="sr-only solace-pill-radio" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Button */}
      <div className="border-t-[2px] border-black pt-8 mt-2 flex justify-center">
        <button 
          type="submit" 
          className="relative inline-flex items-center gap-2 bg-[#FFDA22] hover:bg-[#F5689E] text-black border-[3px] border-black rounded-full px-8 py-3.5 font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:translate-y-0.5 group"
        >
          <span>Send My Request</span>
        </button>
      </div>
    </form>
  );
};

export default CustomOrderForm;