import { createSlice } from "@reduxjs/toolkit";
import data from "/src/DemoData/newProduct.json";
const initialState = {
  data,
  cartProduct: [],
};
const cartProductSlice = createSlice({
  name: "CartProduct",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const checkProduct = state.cartProduct.find(
        (item) => item.id === action.payload
      );
      console.log(checkProduct)
      if (checkProduct) {
        checkProduct.quantity += 1;
        console.log(checkProduct)
      } else {
        const newProduct = state.data.find(
          (item) => item.id === action.payload
        );
        newProduct.quantity = 1;
        state.cartProduct.push(newProduct);
      }
    },
    decreaseQuantity: (state, action) => {
      const findProduct = state.cartProduct.find(
        (item) => item.id === action.payload
      );
      if (findProduct) {
        findProduct.quantity -= 1;
      }
    },
    removeProduct: (state, action) => {
      const findProduct = state.cartProduct.filter(
        (item) => item.id !== action.payload
      );
      state.cartProduct = findProduct;
    },
  },
});

export const { addProduct,removeProduct, decreaseQuantity } = cartProductSlice.actions;
export default cartProductSlice.reducer;
