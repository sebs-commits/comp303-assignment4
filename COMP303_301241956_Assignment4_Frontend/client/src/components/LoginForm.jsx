import React from "react";
import { useLogin } from "../hooks/useLogin";
import ErrorAlert from "./ErrorAlert";

const LoginForm = () => {
  const { formData, error, success, handleChange, handleSubmit } = useLogin();

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-base-100 shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      {error && <ErrorAlert message={error} />}

      {/* Maybe create a seperate component for this */}
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
