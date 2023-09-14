import { createSlice } from "@reduxjs/toolkit";

const countSlides = createSlice({
  name: "count",
  initialState: { value: 0 },
  reducers: {
    increase: (state, action) => {
      console.log("action: ", action);
      state.value += 1;
    },
    decrease: (state, action) => {
      console.log("action: ", action);
      state.value -= 1;
    },

  },
});
export const { increase } = countSlides.actions; // export action ra ngoai
export const { decrease } = countSlides.actions; // export action ra ngoai
export default countSlides.reducer;
