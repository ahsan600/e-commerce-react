import { createSlice } from "@reduxjs/toolkit";
import data from "/src/DemoData/newProduct.json";
const initialState = {
    data,
    selectProduct:''
};
const selectProductSlice = createSlice({
  name: "SelectProduct",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      
       state.selectProduct=state.data.find(item=>item.id===action.payload)
    },
  },
});
export const { selectProduct } = selectProductSlice.actions;
export default selectProductSlice.reducer;
