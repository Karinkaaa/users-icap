import { createSlice } from "@reduxjs/toolkit";
import { LIMIT, PAGE } from "../../data/constants";

interface UsersState {
  page: number;
  limit: number;
}

const initialState: UsersState = {
  page: PAGE,
  limit: LIMIT,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const usersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
