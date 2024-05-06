// What is slice:
// Collection of logic of a feature

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      console.log(action);
      state.count = state.count - 1;
    },
    reset: (state, action) => {
      console.log(action);
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.count = state.count + action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
