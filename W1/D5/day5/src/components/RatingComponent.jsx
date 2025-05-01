// components/RatingComponent.jsx
import React, { useState } from 'react';

const RatingComponent = ({ addRating }) => {
  const [currentRating, setCurrentRating] = useState(1);

  const handleRate = () => {
    addRating(currentRating);
  };

  return (
    <div>
      <p>Rate this product:</p>
      <select value={currentRating} onChange={e => setCurrentRating(Number(e.target.value))}>
        <option value={1}>1 ⭐</option>
        <option value={2}>2 ⭐⭐</option>
        <option value={3}>3 ⭐⭐⭐</option>
        <option value={4}>4 ⭐⭐⭐⭐</option>
        <option value={5}>5 ⭐⭐⭐⭐⭐</option>
      </select>
      <button onClick={handleRate}>Submit Rating</button>
    </div>
  );
};

export default RatingComponent;
