// src/components/StaffTable.jsx
import React from "react";
import { useStaff } from "../hooks/useStaff";
import ErrorAlert from "./ErrorAlert";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";
const StaffTable = () => {
  const { staffList, isLoading, error } = useStaff();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorAlert message={error} />;
  }

  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Staff List</h1>
      <table className="table table-zebra w-full">
        {/* Head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Department</th>
            <th>Assigned Hotel</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Rows */}
          {staffList.map((staff) => (
            <tr key={staff.staffId}>
              <td>{staff.staffId}</td>
              <td>{staff.staffName}</td>
              <td>
                {staff.staffRating === 0 ? "No Rating" : staff.staffRating}
              </td>
              <td>
                {staff.department
                  ? staff.department.departmentName
                  : "Not assigned"}
              </td>
              <td>{staff.hotel ? staff.hotel.hotelName : "Not assigned"}</td>
              <td>
                {" "}
                {/* Actions cell */}
                {/* Changed button to Link */}
                <Link
                  to={`/staff/${staff.staffId}`} // Link to the detail page route
                  className="btn btn-xs btn-outline btn-info" // Style as a button
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
