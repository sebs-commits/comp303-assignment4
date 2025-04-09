import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { getUserDepartment } from "../utils/AuthApi";
import ErrorAlert from "./ErrorAlert";

const LoginForm = () => {
  const { formData, error, success, handleChange, handleSubmit } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      const department = getUserDepartment();
      if (department === "MANAGEMENT") {
        navigate("/");
      } else {
        navigate("/credentials");
      }
    }
  }, [success, navigate]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-base-100 shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      {error && <ErrorAlert message={error} />}

      {success && (
        <div className="alert alert-success mb-4">
          <span>Login successful!</span>
        </div>
      )}

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Username:</span>
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Password:</span>
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
