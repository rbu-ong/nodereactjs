import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: { product: productSlice.reducer, ui: uiSlice.reducer },
});

export default store;
