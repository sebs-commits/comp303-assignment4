import React from "react";
import { useStaffEdit } from "../hooks/useStaffEdit";
import ErrorAlert from "./ErrorAlert";
import LoadingSpinner from "./LoadingSpinner";

const StaffEditForm = ({ staffData, onSuccess }) => {
  const {
    formData,
    departments,
    hotels,
    isLoading,
    isSubmitting,
    error,
    success,
    handleChange,
    handleSubmit,
  } = useStaffEdit(staffData?.staffId);

  React.useEffect(() => {
    if (success && onSuccess) {
      onSuccess();
    }
  }, [success, onSuccess]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="card bordered bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Edit Staff Details</h2>
        <div className="divider"></div>

        {error && <ErrorAlert message={error} />}

        {success && (
          <div className="alert alert-success">
            <span>Staff member updated successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Department</span>
            </label>
            <select
              className="select select-bordered"
              value={formData.department?.departmentId || ""}
              onChange={(e) => {
                const selectedDept = departments.find(
                  (d) => d.departmentId === parseInt(e.target.value, 10)
                );
                handleChange("department", selectedDept || null);
              }}
              disabled={isSubmitting}
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.departmentId} value={dept.departmentId}>
                  {dept.departmentName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Hotel</span>
            </label>
            <select
              className="select select-bordered"
              value={formData.hotel?.hotelId || ""}
              onChange={(e) => {
                const selectedHotel = hotels.find(
                  (h) => h.hotelId === parseInt(e.target.value, 10)
                );
                handleChange("hotel", selectedHotel || null);
              }}
              disabled={isSubmitting}
            >
              <option value="">Select Hotel</option>
              {hotels.map((hotel) => (
                <option key={hotel.hotelId} value={hotel.hotelId}>
                  {hotel.hotelName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Staff Rating (0-5)</span>
            </label>
            <input
              type="number"
              min="0"
              max="5"
              className="input input-bordered"
              value={formData.staffRating}
              onChange={(e) =>
                handleChange("staffRating", parseInt(e.target.value, 10))
              }
              disabled={isSubmitting}
            />
          </div>

          <div className="card-actions justify-end mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StaffEditForm;
