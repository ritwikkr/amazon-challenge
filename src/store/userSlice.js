import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.userName = action.payload.user;
      // console.log("Risu", state.userName);
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state) => state.user.userName;
export default userSlice.reducer;
