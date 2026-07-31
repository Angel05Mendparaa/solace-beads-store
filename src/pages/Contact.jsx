import React, { useState } from 'react';
import ContactHero from '../components/Contact/ContactHero';
import ContactCards from '../components/Contact/ContactCards';
import ContactForm from '../components/Contact/ContactForm';
import SuccessModal from '../components/Contact/SuccessModal';

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate sending data
    setShowSuccess(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F0] font-sans pb-24 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-40 right-[-10%] w-96 h-96 rounded-full bg-[#F5689E] opacity-20 blur-3xl pointer-events-none"></div>
      
      <ContactHero />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <ContactCards />
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-3">
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
          
        </div>
      </div>

      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </main>
  );
};

export default Contact;