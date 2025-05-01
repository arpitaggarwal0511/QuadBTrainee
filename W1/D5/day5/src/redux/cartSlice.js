// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.quantity += 1;
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
