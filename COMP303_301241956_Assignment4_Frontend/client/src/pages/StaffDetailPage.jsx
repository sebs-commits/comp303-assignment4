import React from "react";
import { useParams, Link } from "react-router-dom";
import { useStaffDetail } from "../hooks/useStaffDetail";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

const StaffDetailPage = () => {
  const { staffId } = useParams();

  const { staffData, isLoading, error } = useStaffDetail(staffId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <ErrorAlert message={error} />
        <Link to="/staff" className="btn btn-sm btn-outline mt-4">
          Back to Staff List
        </Link>
      </div>
    );
  }

  if (!staffData) {
    return (
      <div className="p-4">
        <p>Staff member not found.</p>
        <div className="mt-4">
          <Link to="/staff" className="btn btn-sm btn-outline">
            Back to Staff List
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Staff Details</h1>

      <div className="card bordered bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{staffData.staffName}</h2>
          <p>
            <strong>ID:</strong> {staffData.staffId}
          </p>
          <p>
            <strong>Rating:</strong>
            {staffData.staffRating === 0 ? "No Rating" : staffData.staffRating}
          </p>
          <p>
            <strong>Department:</strong>
            {staffData.department ? staffData.department.departmentName : "N/A"}
          </p>
          <p>
            <strong>Assigned Hotel:</strong>
            {staffData.hotel ? staffData.hotel.hotelName : "N/A"}
          </p>

          <div className="card-actions justify-end mt-4">
            <Link to="/staff" className="btn btn-outline">
              Back to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetailPage;
