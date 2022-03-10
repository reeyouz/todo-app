import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";

export function Header() {
  return (
    <Navbar>
      <div className="flex sm:hidden items-center">
        <span className="material-icons">menu</span>
      </div>
      <div className="hidden sm:flex items-center gap-2">
        <Link to="/dashboard" className="btn">
          Dashboard
        </Link>
        <Link to="/new" className="btn">
          New
        </Link>
        <Link to="#" className="btn">
          About
        </Link>
        <Link to="#" className="btn">
          Profile
        </Link>
      </div>
    </Navbar>
  );
}
