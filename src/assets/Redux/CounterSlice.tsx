import { createSlice } from "@reduxjs/toolkit";
import React from "react";
type Counter = {
  count: number;
};
const intialState: Counter = {
  count: 0,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState: intialState,
  reducers: {
    increment(state, action) {
      state.count = state.count + 1;
    },
    decrement(state, action) {
      if (state.count > 0) {
        state.count = state.count - 1;
      }
    },
  },
});

export default CounterSlice;
export const { increment, decrement } = CounterSlice.actions;
