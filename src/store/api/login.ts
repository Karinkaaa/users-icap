import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../data/constants";
import { ILogin } from "../../types/login";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<unknown, ILogin>({
      query: ({ username, password }) => ({
        url: "login/",
        method: "POST",
        body: { username, password },
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
