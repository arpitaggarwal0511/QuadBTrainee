// App.jsx
import React, { useState } from 'react';
import HomePage from './components/HomePage';

const App = () => {
  const [totalRatings, setTotalRatings] = useState(0);
  const [ratingSum, setRatingSum] = useState(0);

  const addRating = (newRating) => {
    setRatingSum(ratingSum + newRating);
    setTotalRatings(totalRatings + 1);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🛍️ Simple E-Commerce</h1>
      <HomePage
        totalRatings={totalRatings}
        ratingSum={ratingSum}
        addRating={addRating}
      />
    </div>
  );
};

export default App;
