import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FormContainer, Layout, TodoList } from "../pages";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<TodoList />} />
          <Route path="/new" element={<FormContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
