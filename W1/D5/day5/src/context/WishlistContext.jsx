// context/WishlistContext.jsx
import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistCount, setWishlistCount] = useState(0);

  const addToWishlist = () => {
    setWishlistCount(prev => prev + 1);
  };

  return (
    <WishlistContext.Provider value={{ wishlistCount, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
