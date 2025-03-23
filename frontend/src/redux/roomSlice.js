import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    roomID: "",
  },
  reducers: {
    setRoomID: (state, action) => {
      state.roomID = action.payload;
    },
  },
});

export const { setRoomID } = roomSlice.actions;
export default roomSlice.reducer;
