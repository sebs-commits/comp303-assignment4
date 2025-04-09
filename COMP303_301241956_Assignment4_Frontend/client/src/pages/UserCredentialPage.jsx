import React from "react";
import { getUserDepartment } from "../utils/AuthApi";

const UserCredentialPage = () => {
  const department = getUserDepartment();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">User Credentials</h1>
      <p className="mt-4">
        Your credential type is: <strong>{department}</strong>
      </p>
    </div>
  );
};

export default UserCredentialPage;
