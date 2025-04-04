import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-md border-rounded-lg">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          {" "}
          💧Bnb
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
    </div>
  );
}

export default NavBar;
