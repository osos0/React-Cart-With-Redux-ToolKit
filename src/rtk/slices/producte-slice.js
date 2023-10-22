import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk(
  "productsSlices/fetchproducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

const productsSlices = createSlice({
  initialState: [],
  name: "productsSlices",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.fulfilled, (stat, action) => {
      return action.payload;
    });
  },
});

export const {} = productsSlices.actions;
export default productsSlices.reducer;
