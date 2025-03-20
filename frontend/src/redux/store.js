import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userActionSlice from "./userActionSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    action: userActionSlice,
  },
});

export default store;
