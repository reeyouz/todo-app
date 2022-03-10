import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "..";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
