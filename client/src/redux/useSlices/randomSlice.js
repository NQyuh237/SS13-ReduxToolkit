import { createSlice } from "@reduxjs/toolkit";

const randomSlice = createSlice({
  name: "random",
  initialState: [], // immer
    reducers: {
      // khai bao cac danh sach reducer
      random: (state, action) => {
          state.push(action.payload);
    },
  },
});
export const { random } = randomSlice.actions;
export default randomSlice.reducer;
