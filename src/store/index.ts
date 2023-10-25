import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "./login.api";
import { loginReducer } from "./login.slice";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
