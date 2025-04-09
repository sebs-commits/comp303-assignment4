import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logout, isAuthenticated } from "../utils/AuthApi";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, [location]);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
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
        {isLoggedIn ? (
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
