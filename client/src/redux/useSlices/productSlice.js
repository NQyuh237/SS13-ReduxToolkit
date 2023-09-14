import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// goi api lay thong tin tat ca product
export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// goi api xoa thong tin 1 product theo id
export const deleteById = createAsyncThunk(
  "product/deleteById",
  async (productId) => {
    try {
      await axios.get(`http://localhost:3000/products/${productId}`);
      return productId;
    } catch (error) {
      console.log(error);
    }
  }
);

// api them moi san pham
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (product) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        product
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.status = "Successfully"; // thanh cong
        state.data = action.payload; // du lieu tra ve
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.status = "Failed"; // that bai
        state.error = action.error.message; // noi dung loi
      })
      .addCase(deleteById.fulfilled, (state, action) => {
        state.status = state.data.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(createProduct.fulfilled, (state, action) => { //immer
        console.log(createProduct);
        // state.data.push(action.payload);
      })
  },
});
export default productSlice.reducer;
