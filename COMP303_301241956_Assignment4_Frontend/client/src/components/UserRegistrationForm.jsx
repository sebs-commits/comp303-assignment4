import React from "react";
import { useDepartments } from "../hooks/useDepartments";
import { useRegistration } from "../hooks/useRegistration";
import ErrorAlert from "./ErrorAlert";
import LoadingSpinner from "./LoadingSpinner";

const UserRegistrationForm = () => {
  const { departments, isLoading, error: departmentError } = useDepartments();
  const {
    formData,
    error: registrationError,
    success,
    handleChange,
    handleSubmit,
  } = useRegistration();

  if (isLoading) return <LoadingSpinner message="Loading departments" />;
  if (departmentError) return <ErrorAlert message={departmentError} />;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-base-100 shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      {registrationError && <ErrorAlert message={registrationError} />}

      {success && (
        <div className="alert alert-success mb-4">
          <span>Registration successful!</span>
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

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Staff Name:</span>
        </label>
        <input
          type="text"
          name="staffName"
          value={formData.staffName}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Department:</span>
        </label>
        <select
          name="departmentId"
          value={formData.department.departmentId}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept.departmentId} value={dept.departmentId}>
              {dept.departmentName}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Submit
      </button>
    </form>
  );
};

export default UserRegistrationForm;
