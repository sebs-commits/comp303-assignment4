import React from "react";

const StaffDetails = ({ staffData }) => {
  return (
    <div className="card bordered bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Staff Information</h2>
        <div className="divider"></div>
        <p>
          <strong>ID:</strong> {staffData.staffId}
        </p>
        <p>
          <strong>Name:</strong> {staffData.staffName}
        </p>
        <p>
          <strong>Performance Rating:</strong>{" "}
          {staffData.staffRating === 0 ? "No Rating" : staffData.staffRating}
        </p>
        <p>
          <strong>Department:</strong>{" "}
          {staffData.department ? staffData.department.departmentName : "N/A"}
        </p>
        <p>
          <strong>Assigned Hotel:</strong>{" "}
          {staffData.hotel ? staffData.hotel.hotelName : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default StaffDetails;
