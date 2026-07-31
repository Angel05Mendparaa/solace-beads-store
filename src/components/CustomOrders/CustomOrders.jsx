// import React, { useState } from 'react';
// import CustomHero from '../components/CustomOrders/CustomHero';
// import CustomOrderForm from '../components/CustomOrders/CustomOrderForm';
// import SuccessModal from '../components/CustomOrders/SuccessModal';

// const CustomOrders = () => {
//   const [showSuccess, setShowSuccess] = useState(false);

//   // Handle form submission success
//   const handleFormSubmit = (formData) => {
//     console.log("Custom Order Data Received:", formData);
//     // Here you would typically send data to your backend/email service
//     setShowSuccess(true);
//   };

//   return (
//     <main className="min-h-screen bg-[#FAF8F0] font-sans pb-24 relative overflow-hidden">
//       {/* Decorative background shapes for playful vibe */}
//       <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-[#FFDA22] opacity-20 blur-3xl pointer-events-none"></div>
//       <div className="absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-[#F5689E] opacity-15 blur-3xl pointer-events-none"></div>

//       <CustomHero />
      
//       <div className="max-w-6xl mx-auto px-4 md:px-6 z-10 relative">
//         <CustomOrderForm onSubmitSuccess={handleFormSubmit} />
//       </div>

//       <SuccessModal 
//         isOpen={showSuccess} 
//         onClose={() => setShowSuccess(false)} 
//       />
//     </main>
//   );
// };

// export default CustomOrders;