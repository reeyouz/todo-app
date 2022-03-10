import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "../../types";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/todo",
      providesTags: ["Todos"],
    }),
    putTodo: builder.mutation<void, Todo>({
      query: (todo) => ({
        url: "/todo",
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, usePutTodoMutation } = todoApi;
