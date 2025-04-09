import React from "react";
import { useParams, Link } from "react-router-dom";
import { useStaffDetail } from "../hooks/useStaffDetail";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import StaffDetails from "../components/StaffDetails";
import StaffEditForm from "../components/StaffEditForm";

const StaffDetailPage = () => {
  const { staffId } = useParams();
  const { staffData, isLoading, error } = useStaffDetail(staffId);

  const handleEditSuccess = () => {
    window.location.reload();
  };

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
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center m-4">
        <h1 className="text-3xl font-bold">Staff Details</h1>
        <Link to="/" className="btn">
          Back to List
        </Link>
      </div>
      <div>
        <StaffDetails staffData={staffData} />
        <StaffEditForm staffData={staffData} onSuccess={handleEditSuccess} />
      </div>
    </div>
  );
};

export default StaffDetailPage;
