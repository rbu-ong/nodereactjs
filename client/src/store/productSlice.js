import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

if (window.location.href.includes("https://renzsegerbu-ong.com")) {
  axios.defaults.baseURL = "https://renzsegerbu-ong.com";
} else {
  axios.defaults.baseURL = "http://localhost:5000";
}

export const fetchProduct = createAsyncThunk("product/fetchProducts", () => {
  return axios.get("/api").then((response) => response.data.products);
});

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async (dataToSave) => {
    const response = await axios.post("/api", {
      dataToSave,
    });
    return response.data.products;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productid) => {
    const response = await axios.post("/api/delete", {
      productid,
    });
    return response.data.products;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: null,
    products: [],
    error: null,
  },
  //   reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {});
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });

    builder.addCase(saveProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });
  },
});

export const productActions = productSlice.actions;
export default productSlice;
