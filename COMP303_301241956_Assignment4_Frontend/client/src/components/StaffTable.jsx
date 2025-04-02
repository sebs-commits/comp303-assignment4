// src/components/StaffTable.jsx
import React from "react";
import { useStaff } from "../hooks/useStaff";
const StaffTable = () => {
  const { staffList, isLoading, error } = useStaff();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div role="alert" className="alert alert-error">
          <span>Error! {error}</span>
        </div>
      </div>
    );
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
          </tr>
        </thead>
        <tbody>
          {/* Rows */}
          {staffList.map((staff) => (
            <tr key={staff.staffId}>
              <td>{staff.staffId}</td>
              <td>{staff.staffName}</td>
              <td>{staff.staffRating}</td>
              <td>
                {staff.department
                  ? staff.department.departmentName
                  : "Not assigned"}
              </td>
              <td>{staff.hotel ? staff.hotel.hotelName : "Not assigned"}</td>
              {/* action column will go here later */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
