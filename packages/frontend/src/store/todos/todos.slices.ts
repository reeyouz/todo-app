import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "../../types";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api/todo",
});

type TodosSliceState =
  | { state: "success" | "loading" | null; todos: Todo[] }
  | { state: "failed"; err: any };

const initialState: TodosSliceState = {
  state: null,
  todos: [],
};

const putTodo = createAsyncThunk("todos/postTodo", async (todo: Todo) => {
  try {
    const res = await axiosClient.put("/", todo, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
  },
  extraReducers: {
    [putTodo.pending.type]: (state, action) => {
      state.state = "loading";
      state.todos = [];
    },
    [putTodo.fulfilled.type]: (state, action) => {
      state.state = "success";
    },
  },
});

export const { addTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
