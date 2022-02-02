import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "../../types";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api/todo",
});

type TodosSliceState = {
  state: "success" | "loading" | "failed" | null;
  todos: Todo[];
  err?: any | undefined;
};

const initialState: TodosSliceState = {
  state: null,
  todos: [],
};

export const putTodo = createAsyncThunk(
  "todos/postTodo",
  async (todo: Todo) => {
    try {
      await axiosClient.put("/", todo, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(putTodo.pending, (state, action) => {
      state.state = "loading";
    });
    builder.addCase(putTodo.rejected, (state, action) => {
      state.state = "failed";
    });
    builder.addCase(putTodo.fulfilled, (state, action) => {
      state.state = "success";
    });
  },
});

export const todosReducer = todosSlice.reducer;
