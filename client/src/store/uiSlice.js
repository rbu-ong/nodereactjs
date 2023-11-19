import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isFormVisible: false,
  },
  reducers: {
    toggle(state) {
      state.isFormVisible = !state.isFormVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
