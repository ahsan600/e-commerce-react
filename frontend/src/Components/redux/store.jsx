import { configureStore } from "@reduxjs/toolkit";
import selectProductSlice from "./selectProductSlice/selectProductSlice";
import cartProductSlice from "./cartProductSlice/cartProductSlice";
import wishListSlice from "./wishListSlice/wishListSlice";

const store= configureStore({
    reducer:{
        selectProduct:selectProductSlice,
        cartProduct:cartProductSlice,
        wishProduct:wishListSlice
    }
});
export default store