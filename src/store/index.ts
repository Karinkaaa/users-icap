import { configureStore } from "@reduxjs/toolkit";
import { loginApi, usersApi } from "./api";
import { loginReducer, usersReducer } from "./slice";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    login: loginReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loginApi.middleware)
      .concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
