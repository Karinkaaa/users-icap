import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { BASE_URL, LIMIT, PAGE } from "../../data/constants";
import { IQueryArgs, IUser, IUsersResponse } from "../../types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<IUsersResponse, IQueryArgs>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const { limit = LIMIT, page = PAGE } = _arg;

        const response: QueryReturnValue<
          unknown,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        > = await fetchWithBQ(`table/?limit=${limit}&offset=${page * limit}`);

        if (response.error) {
          return { error: response.error as FetchBaseQueryError };
        }

        return { data: response.data as IUsersResponse };
      },
      providesTags: ["User"],
    }),
    editUser: builder.mutation<IUser, Partial<IUser> & Pick<IUser, "id">>({
      query: (user) => ({
        url: `table/${user.id}/`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useEditUserMutation } = usersApi;
