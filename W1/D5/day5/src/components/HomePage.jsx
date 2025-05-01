// components/HomePage.jsx
import React from 'react';
import ProductCard from './ProductCard';

const HomePage = ({ totalRatings, ratingSum, addRating }) => {
  const averageRating = totalRatings === 0 ? 0 : (ratingSum / totalRatings).toFixed(1);

  return (
    <div>
      <h2>Product</h2>
      <ProductCard
        averageRating={averageRating}
        totalRatings={totalRatings}
        addRating={addRating}
      />
    </div>
  );
};

export default HomePage;
