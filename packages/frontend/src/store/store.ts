import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { todoApi } from "./todos/todos.slices";

export function getStore() {
  return configureStore({
    reducer: {
      [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todoApi.middleware),
  });
}

export const store = getStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
