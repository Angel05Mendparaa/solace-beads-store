import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Collections from './pages/Collections';
import Navbar from './components/Navbar/Navbar';
import CustomOrders from './pages/CustomOrders';
import CartDrawer from './components/Cart/CartDrawer';
import Contact from './pages/Contact';

// We create a tiny wrapper component for the drawer so it can access the useCart hook
const GlobalCartDrawer = () => {
  const { isCartOpen, closeCart, cartItems } = useCart();
  return <CartDrawer isOpen={isCartOpen} onClose={closeCart} cartItems={cartItems} />;
};

const App = () => {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/custom-orders" element={<CustomOrders />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <GlobalCartDrawer />
    </CartProvider>
  );
};

export default App;