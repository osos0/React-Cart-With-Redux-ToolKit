import { configureStore } from "@reduxjs/toolkit";
import producteSlice from "./slices/producte-slice";
import cartSlice from "./slices/cart-slice";

export const stort = configureStore({
  reducer: {
    Prouducts: producteSlice,
    cart: cartSlice,
  },
});
