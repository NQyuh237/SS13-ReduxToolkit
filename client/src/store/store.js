import { configureStore } from "@reduxjs/toolkit";
import countSlides from "../redux/useSlices/countSlice";
import randomSlice from "../redux/useSlices/randomSlice";
import productSlice from "../redux/useSlices/productSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    count: countSlides,
    random: randomSlice,
    product: productSlice,
  },
  middleware: [thunk],
});
