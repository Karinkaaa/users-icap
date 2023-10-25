import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILogin } from "./../types/login";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://technical-task-api.icapgroupgmbh.com/api/",
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
