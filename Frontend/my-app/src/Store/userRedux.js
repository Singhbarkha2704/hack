import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
        console.log("Login Started")
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      console.log("congrats!!");
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      console.log("Failed:)");
    },
    logOut: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } = userSlice.actions;
export default userSlice.reducer;