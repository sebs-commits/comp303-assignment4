import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, isAuthenticated } from "../utils/AuthApi";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100 shadow-md border-rounded-lg">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          {" "}
          💧Bnb
        </Link>
      </div>
      <div className="navbar-end">
        {isAuthenticated() ? (
          <button onClick={handleLogout} className="btn btn-ghost btn-outline">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="btn btn-ghost btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary mx-2">
              Register
            </Link>
          </>
        )}
      </div>
      <div className="navbar-center hidden lg:flex"></div>
    </div>
  );
}

export default NavBar;
