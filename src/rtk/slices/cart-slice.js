import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addTocart: (state, action) => {
      state.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      return state.filter((pro) => pro.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addTocart, deleteFromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;
