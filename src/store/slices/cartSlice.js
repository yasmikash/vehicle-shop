import { createSlice } from "@reduxjs/toolkit";

const initState = { items: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addToCart: (state, action) => {
      const item = {
        ...action.payload.item,
        bidAmount: action.payload.bidAmount,
      };
      state.items.push(item);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
