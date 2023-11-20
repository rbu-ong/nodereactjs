import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isFormVisible: false,
  },
  reducers: {
    toggle(state, action) {
      state.isFormVisible = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
