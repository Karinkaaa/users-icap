import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  isLoggedIn: JSON.parse(sessionStorage.getItem("isLoggedIn") || "false"),
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      sessionStorage.setItem("isLoggedIn", "true");
    },
    logout: (state) => {
      state.isLoggedIn = false;
      sessionStorage.setItem("isLoggedIn", "false");
    },
  },
});

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
