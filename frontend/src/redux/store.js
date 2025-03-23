import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userActionSlice from "./userActionSlice";
import roomSlice from "./roomSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    action: userActionSlice,
    room:roomSlice,
  },
});

export default store;
