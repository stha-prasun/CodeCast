import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedInUser: null,
  },
  reducers: {
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { setLoggedInUser } = authSlice.actions;
export default authSlice.reducer;
