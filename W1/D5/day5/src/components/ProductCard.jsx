// components/ProductCard.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useWishlist } from '../context/WishlistContext';
import RatingComponent from './RatingComponent';

const ProductCard = ({ averageRating, totalRatings, addRating }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { wishlistCount, addToWishlist } = useWishlist();

  const handleAddToCart = () => {
    dispatch(addToCart());
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '300px' }}>
      <h3>Dummy Product</h3>
      <p>Price: ₹999</p>
      <p>Cart Quantity: {cart.quantity}</p>
      <p>Wishlist Count: {wishlistCount}</p>
      <p>Average Rating: {averageRating} ({totalRatings} ratings)</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={addToWishlist}>Add to Wishlist</button>
      <RatingComponent addRating={addRating} />
    </div>
  );
};

export default ProductCard;
