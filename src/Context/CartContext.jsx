import React, { createContext, useContext, useState } from 'react';

// Create the context
const CartContext = createContext();

// Create a custom hook so other files can easily use the cart
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Calculate total items for the Navbar badge
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If it's already in the cart, just increase the quantity
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Otherwise, add it as a new item
      return [...prevItems, { ...product, quantity: 1 }];
    });
    // Optional: Auto-open the cart when an item is added
    // openCart(); 
  };

  return (
    <CartContext.Provider value={{ 
      isCartOpen, 
      openCart, 
      closeCart, 
      cartItems, 
      addToCart,
      cartCount 
    }}>
      {children}
    </CartContext.Provider>
  );
};