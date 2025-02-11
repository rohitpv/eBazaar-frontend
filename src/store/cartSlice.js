import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);
      if (!existingItem) {
      state.items.push(product);
      }
    },
    removeFromCart: (state, action) => {
      console.log("In remove",state, action.payload._id)
      state.items = state.items.filter((item) => item._id !== action.payload._id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
