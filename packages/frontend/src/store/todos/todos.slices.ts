import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types";

interface TodosSliceState {
  todos: Todo[];
}

const initialState: TodosSliceState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { addTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
