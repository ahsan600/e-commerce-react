import { createSlice } from "@reduxjs/toolkit";
import data from "/src/DemoData/newProduct.json";
const initialState = {
  data,
  wishProduct: [],
};
const wishListSlice = createSlice({
  name: "WishProduct",
  initialState,
  reducers: {
    addWishProduct: (state, action) => {
     
      const checkProduct = state.wishProduct.find(
        (item) => item.id === action.payload
      );
      if (checkProduct) {
        checkProduct.quantity += 1;
      } else {
        const newProduct = state.data.find(
          (item) => item.id === action.payload
        );
        newProduct.quantity = 1;
        state.wishProduct.push(newProduct);
      }
    },
    decreaseWishQuantity: (state, action) => {
      const findProduct = state.wishProduct.find(
        (item) => item.id === action.payload
      );
      if (findProduct) {
        findProduct.quantity -= 1;
      }
    },
    removeWishProduct: (state, action) => {
      const findProduct = state.wishProduct.filter(
        (item) => item.id !== action.payload
      );
      state.wishProduct = findProduct;
    },
  },
});

export const { addWishProduct, decreaseWishQuantity,removeWishProduct } =wishListSlice.actions;
export default wishListSlice.reducer;
