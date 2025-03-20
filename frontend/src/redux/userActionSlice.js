import { createSlice } from "@reduxjs/toolkit";

const userActionSlice = createSlice({
  name: "userAction",
  initialState: {
    userAction: "",
  },
  reducers: {
    setUserAction: (state, action) => {
      state.userAction = action.payload;
    },
  },
});

export const { setUserAction } = userActionSlice.actions;
export default userActionSlice.reducer;
