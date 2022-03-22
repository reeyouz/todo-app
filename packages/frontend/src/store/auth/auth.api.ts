import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Credentials, UserLogin } from "../../types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/user" }),
  endpoints: (builder) => ({
    login: builder.mutation<UserLogin, Credentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
