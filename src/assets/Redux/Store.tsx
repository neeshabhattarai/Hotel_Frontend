import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import CounterSlice from "./CounterSlice";

const store = configureStore({
  reducer: {
    counterState: CounterSlice.reducer,
  },
});
export default store;
