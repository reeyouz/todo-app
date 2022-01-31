import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/todos.slices";

export function getStore() {
  return configureStore({
    reducer: {
      todos: todosReducer,
    },
  });
}

export const store = getStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
